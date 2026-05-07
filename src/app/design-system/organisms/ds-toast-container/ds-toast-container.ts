import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'ds-toast-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-toast-container.html',
  styles: ``,
})
export class DsToastContainer {
  toastService = inject(ToastService);
}
