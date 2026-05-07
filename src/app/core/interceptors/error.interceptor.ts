import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocorreu um erro inesperado';

      if (error.status === 401) {
        errorMessage = 'Sessão expirada. Por favor, faça login novamente.';
        // Aqui poderíamos redirecionar para /login
      }

      console.error('LOG GLOBAL DE ERRO:', errorMessage);
      return throwError(() => new Error(errorMessage));
    })
  );
};