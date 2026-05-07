import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppError } from '../models/app-error.model';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ErrorNormalizerService {

  normalize(error: HttpErrorResponse): AppError {
    let normalizedError: AppError = {
      message: 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
      status: error.status,
      originalError: error
    };

    // Tratando ProblemDetails (.NET) ou Erros Custom (Node)
    if (error.error) {
      normalizedError.message = error.error.message || error.error.title || normalizedError.message;
      normalizedError.errors = error.error.errors || null;
    }

    // Tratamento por Status Code
    if (error.status === 401) normalizedError.message = 'Sua sessão expirou. Faça login novamente.';
    if (error.status === 403) normalizedError.message = 'Você não tem permissão para acessar este recurso.';

    return normalizedError;
  }

  applyServerErrors(form: FormGroup, appError: AppError): void {
      if (appError.errors) {
        Object.keys(appError.errors).forEach(key => {
          // Ajuste para camelCase se a API retornar PascalCase
          const control = form.get(key) || form.get(key.toLowerCase());
          
          if (control) {
            control.setErrors({
              serverError: appError.errors![key][0] // Pega a primeira mensagem de erro
            });
          }
        });
      }
  }
}