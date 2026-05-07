import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  // Um Signal que armazena uma lista de toasts ativos
  toasts = signal<Toast[]>([]);

  show(message: string, type: 'success' | 'error' | 'info' = 'success') {
    const id = Date.now();
    this.toasts.update(all => [...all, { id, message, type }]);

    // Remove automaticamente após 3 segundos
    setTimeout(() => {
      this.toasts.update(all => all.filter(t => t.id !== id));
    }, 3000);
  }
}