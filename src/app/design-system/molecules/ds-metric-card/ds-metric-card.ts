import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export type DsMetricCardTone = 'emerald' | 'amber' | 'sky' | 'rose';

@Component({
  selector: 'ds-metric-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <article
      class="relative overflow-hidden rounded-2xl border border-white/20 p-5 shadow-lg backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl"
      [ngClass]="panelClass()"
    >
      <p class="text-sm font-medium text-white/90">{{ title }}</p>

      <p class="mt-6 text-center text-3xl font-bold tabular-nums tracking-tight text-white md:text-[1.85rem]">
        {{ formattedValue }}
      </p>

      <button
        type="button"
        class="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 transition hover:scale-105"
        [attr.aria-label]="'Detalhes: ' + title"
      >
        <svg class="h-4 w-4" [ngClass]="chevronIconClass()" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      </button>
    </article>
  `,
})
export class DsMetricCardComponent {
  /** Título exibido no topo (ex.: Vendas no mês) */
  @Input({ required: true }) title!: string;

  /** Valor numérico em reais para formatação pt-BR */
  @Input({ required: true }) amount!: number;

  /** Paleta glass + gradiente */
  @Input() tone: DsMetricCardTone = 'emerald';

  get formattedValue(): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.amount ?? 0);
  }

  panelClass(): string {
    const map: Record<DsMetricCardTone, string> = {
      emerald:
        'bg-gradient-to-br from-emerald-500/85 via-emerald-600/75 to-teal-900/40',
      amber:
        'bg-gradient-to-br from-amber-400/90 via-amber-500/75 to-orange-900/35',
      sky: 'bg-gradient-to-br from-sky-400/85 via-blue-500/75 to-slate-900/40',
      rose: 'bg-gradient-to-br from-rose-500/85 via-red-600/72 to-red-950/35',
    };
    return map[this.tone];
  }

  chevronIconClass(): string {
    const map: Record<DsMetricCardTone, string> = {
      emerald: 'text-emerald-600',
      amber: 'text-amber-600',
      sky: 'text-sky-600',
      rose: 'text-rose-600',
    };
    return map[this.tone];
  }
}
