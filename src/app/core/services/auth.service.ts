import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../models/auth.model';
import { RecuperaSenhaRequest } from '../models/recupera-senha';
import { EsqueciSenhaRequest } from '../models/esqueci-senha';

/** Resposta bruta do backend Auth (login) — formatos comuns. */
interface LoginBackendResponse {
  access_token?: string | { accessToken?: string; refreshToken?: string };
  accessToken?: string;
  token?: string;
  refresh_token?: string;
  refreshToken?: string;
  token_type?: string;
  expires_in?: string | number;
}

function parseExpiresIn(value: string | number | undefined): number {
  if (value == null || value === '') return 0;
  const n = typeof value === 'number' ? value : parseInt(String(value), 10);
  return isNaN(n) ? 0 : n;
}

function extractTokensFromLoginResponse(res: LoginBackendResponse): {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
} {
  let accessToken = '';
  let refreshToken = '';

  const at = res.access_token;
  if (typeof at === 'string' && at) {
    accessToken = at;
  } else if (at && typeof at === 'object') {
    accessToken = at.accessToken ?? '';
    refreshToken = at.refreshToken ?? '';
  }

  if (!accessToken) accessToken = res.accessToken ?? res.token ?? '';
  if (!refreshToken) refreshToken = res.refresh_token ?? res.refreshToken ?? '';

  return {
    accessToken,
    refreshToken,
    expiresIn: parseExpiresIn(res.expires_in),
  };
}

/** Decodifica o payload do JWT (sem validar assinatura). Claims: role, unique_name, email, nameid. */
function decodeJwtPayload(accessToken: string): Record<string, unknown> | null {
  try {
    const parts = accessToken.split('.');
    if (parts.length !== 3) return null;
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    let json: string;
    if (typeof atob !== 'undefined') {
      json = atob(base64);
    } else if (typeof Buffer !== 'undefined') {
      json = Buffer.from(base64, 'base64').toString('utf8');
    } else {
      return null;
    }
    return JSON.parse(json) as Record<string, unknown>;
  } catch {
    return null;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private readonly API = `${environment.apiUrl.replace(/\/$/, '')}/auth`;
  private readonly AUTH_API = environment.authApiUrl.replace(/\/$/, '');

  /** Base usada para login quando `authApiUrl` está vazio: `apiUrl/auth`. */
  private get authLoginUrl(): string {
    return this.AUTH_API ? `${this.AUTH_API}/login` : `${this.API}/login`;
  }

  /** Sem `apiUrl` nem `authApiUrl`, POST relativo quebra no dev — usamos login demo local. */
  private isAuthBackendConfigured(): boolean {
    return !!(environment.authApiUrl?.trim() || environment.apiUrl?.trim());
  }

  isAuthenticated(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }
    return !!localStorage.getItem('accessToken');
  }

  getStoredAuth(): (AuthResponse & { name?: string; role?: string }) | null {
    const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    const refreshToken = typeof window !== 'undefined' ? localStorage.getItem('refreshToken') : null;
    if (!accessToken) return null;
    const payload = decodeJwtPayload(accessToken);
    const role = (payload?.['role'] as string)?.toUpperCase?.();
    const name = (payload?.['unique_name'] as string) ?? (payload?.['email'] as string);
    return {
      accessToken,
      refreshToken: refreshToken ?? '',
      expiresIn: 0,
      name: name ?? undefined,
      role: role ?? undefined,
    };
  }

  saveTokens(auth: AuthResponse): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('accessToken', auth.accessToken);
    localStorage.setItem('refreshToken', auth.refreshToken);
  }

  refreshToken(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API}/refresh`, {});
  }

  logout(): Observable<unknown> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    const clearStorage = () => {
      if (typeof window !== 'undefined') localStorage.clear();
    };
    if (!token) {
      clearStorage();
      return of(undefined);
    }
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const logoutUrl = this.AUTH_API ? `${this.AUTH_API}/logout` : `${this.API}/logout`;
    return this.http
      .post<void>(logoutUrl, {}, { headers })
      .pipe(tap({ next: clearStorage, error: clearStorage }));
  }

  login(credentials: { email: string; password: string }): Observable<AuthResponse & { name?: string; role?: string }> {
    if (!this.isAuthBackendConfigured()) {
      const auth: AuthResponse & { name?: string; role?: string } = {
        accessToken: 'ds-vision-dev-session',
        refreshToken: 'ds-vision-dev-refresh',
        expiresIn: 3600,
        name: credentials.email.split('@')[0] || 'Usuário',
        role: 'ADMIN',
      };
      return of(auth).pipe(
        tap((a) => this.saveTokens(a)),
      );
    }

    return this.http.post<LoginBackendResponse>(this.authLoginUrl, credentials).pipe(
      map((res) => {
        const { accessToken, refreshToken, expiresIn } = extractTokensFromLoginResponse(res);
        const payload = accessToken ? decodeJwtPayload(accessToken) : null;
        const role = (payload?.['role'] as string)?.toUpperCase?.() ?? undefined;
        const name =
          (payload?.['unique_name'] as string) ?? (payload?.['email'] as string) ?? undefined;
        return {
          accessToken,
          refreshToken,
          expiresIn,
          name,
          role,
        };
      }),
      tap((auth) => {
        if (auth.accessToken) {
          this.saveTokens(auth);
        }
      }),
    );
  }

  esqueciSenha(model: EsqueciSenhaRequest): Observable<unknown> {
    const url = this.AUTH_API ? `${this.AUTH_API}/forgot-password` : `${this.API}/forgot-password`;
    return this.http.post(url, { email: model.email });
  }

  recuperaSenha(model: RecuperaSenhaRequest): Observable<unknown> {
    const url = this.AUTH_API ? `${this.AUTH_API}/reset-password` : `${this.API}/reset-password`;
    return this.http.post(url, {
      email: model.email,
      token: model.token,
      newPassword: model.newPassword,
    });
  }
}
