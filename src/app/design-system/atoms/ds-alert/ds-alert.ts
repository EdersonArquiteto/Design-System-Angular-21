import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-ds-alert',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './ds-alert.html',
  
})
export class DsAlert {
  @Input() variant: 'success' | 'error' | 'warning' = 'success';

  variants = {
    success: 'bg-green-500/5 border-green-500/20 text-green-200',
    error: 'bg-red-500/5 border-red-500/20 text-red-200',
    warning: 'bg-yellow-500/5 border-yellow-500/20 text-yellow-200'
  };

  get variantClass() {
    return this.variants[this.variant];
  }
}
