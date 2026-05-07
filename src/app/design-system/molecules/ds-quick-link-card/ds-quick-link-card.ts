import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type DsQuickLinkIcon = 'sale' | 'receipt' | 'product' | 'customer' | 'supplier';

@Component({
  selector: 'ds-quick-link-card',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  template: `
    @if (link && link.length) {
      <a
        [routerLink]="link"
        class="group flex aspect-square cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <ng-container *ngTemplateOutlet="inner"></ng-container>
      </a>
    } @else {
      <button
        type="button"
        class="group flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-md"
      >
        <ng-container *ngTemplateOutlet="inner"></ng-container>
      </button>
    }

    <ng-template #inner>
      <span
        class="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100/90 text-slate-800 ring-1 ring-slate-200/80 transition group-hover:bg-slate-900 group-hover:text-white group-hover:ring-slate-800/20"
      >
        @switch (icon) {
          @case ('sale') {
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              <path d="M8.5 8.5h.01M16 9l-1.5 2" stroke-linecap="round" />
            </svg>
          }
          @case ('receipt') {
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M9 12h6M9 16h4" stroke-linecap="round" />
              <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z" stroke-linejoin="round" />
            </svg>
          }
          @case ('product') {
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" stroke-linejoin="round" />
            </svg>
          }
          @case ('customer') {
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke-linejoin="round" />
            </svg>
          }
          @case ('supplier') {
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 9v.01M9 12v.01M9 15v.01" stroke-linecap="round" />
            </svg>
          }
        }
      </span>
      <span class="text-sm font-medium text-slate-600 group-hover:text-slate-900">{{ label }}</span>
    </ng-template>
  `,
})
export class DsQuickLinkCardComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) icon!: DsQuickLinkIcon;
  /** Rota interna; vazio = botão sem navegação */
  @Input() link: string[] | null = null;
}
