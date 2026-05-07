import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

type SpinnerSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ds-spinner',
  standalone: true,
  imports: [NgClass],
  template: `
    <span
      class="inline-block animate-spin rounded-full border-2 border-white/25 border-t-white"
      [ngClass]="sizeClass"
      role="status"
      aria-label="Carregando"
    ></span>
  `,
})
export class DsSpinnerComponent {
  @Input() size: SpinnerSize = 'md';

  get sizeClass(): string {
    switch (this.size) {
      case 'sm':
        return 'h-4 w-4';
      case 'lg':
        return 'h-7 w-7';
      default:
        return 'h-5 w-5';
    }
  }
}

