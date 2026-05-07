import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  // 1. Pegamos o token (por enquanto simulado, depois vira um Service)
  const token = localStorage.getItem('accessToken');

  // 2. Clonamos a requisição para adicionar a BaseURL e o Header
  // Importante: Requisições são imutáveis, por isso usamos .clone()
  let apiReq = req.clone({
    url: req.url.startsWith('http') ? req.url : `${environment.apiUrl}${req.url}`,
  });

  if (token) {
    apiReq = apiReq.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(apiReq);
};