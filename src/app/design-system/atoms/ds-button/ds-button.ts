import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DsSpinnerComponent } from '../ds-spinner/ds-spinner';

@Component({
  selector: 'button[ds-button]',
  standalone: true,
  imports: [CommonModule, DsSpinnerComponent],
  template: `
    <ng-content *ngIf="!loading"></ng-content>
    <ds-spinner *ngIf="loading" size="sm"></ds-spinner>
  `,
  styles: [`
    :host {
      @apply inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95;
    }
    :host.primary { @apply bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20; }
    :host.secondary { @apply bg-white/10 text-white border border-white/10 hover:bg-white/20 backdrop-blur-md; }
    :host.ghost { @apply bg-transparent text-slate-300 hover:bg-white/5 hover:text-white; }
    :host.danger { @apply bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white; }
  `]
})
export class DsButtonComponent {
  @Input() loading = false;
}