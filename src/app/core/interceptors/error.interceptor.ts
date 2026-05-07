import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ToastService } from '../services/toast.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocorreu um erro inesperado';

      if (error.status === 401) {
        errorMessage = 'Sessão expirada. Por favor, faça login novamente.';
        router.navigate(['/login']);
      }

      toast.show(errorMessage, 'error');
      return throwError(() => new Error(errorMessage));
    })
  );
};