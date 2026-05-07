import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-ds-badge',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './ds-badge.html',
 
})
export class DsBadge {
  @Input() variant: 'success' | 'warning' | 'error' | 'info' = 'info';

  variants = {
    success: 'bg-green-500/10 text-green-400 border-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    error: 'bg-red-500/10 text-red-400 border-red-500/20',
    info: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  };

  get variantClass() {
    return this.variants[this.variant];
  }
}
