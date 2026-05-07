import { Component } from '@angular/core';
import {
  DsMetricCardComponent,
  DsMetricCardTone,
} from '../../../design-system/molecules/ds-metric-card/ds-metric-card';
import { DsQuickLinkCardComponent } from '../../../design-system/molecules/ds-quick-link-card/ds-quick-link-card';

type Metric = { title: string; amount: number; tone: DsMetricCardTone };

@Component({
  selector: 'ds-dashboard-home',
  standalone: true,
  imports: [DsMetricCardComponent, DsQuickLinkCardComponent],
  template: `
    <div class="mx-auto max-w-7xl space-y-10">
      <!-- Linha de KPIs (glass + gradiente, inspirado no dashboard de referência) -->
      <section>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          @for (m of metrics; track m.title) {
            <ds-metric-card [title]="m.title" [amount]="m.amount" [tone]="m.tone" />
          }
        </div>
      </section>

      <!-- Atalhos (cards claros tipo “Portainer / banco”) -->
      <section>
        <h2 class="mb-4 text-lg font-semibold text-white">Acesso rápido</h2>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <ds-quick-link-card label="Venda" icon="sale" [link]="null" />
          <ds-quick-link-card label="Cupom Fiscal" icon="receipt" [link]="null" />
          <ds-quick-link-card label="Produtos" icon="product" [link]="null" />
          <ds-quick-link-card label="Cliente" icon="customer" [link]="null" />
          <ds-quick-link-card label="Fornecedor" icon="supplier" [link]="null" />
        </div>
      </section>
    </div>
  `,
})
export class DashboardHomeComponent {
  readonly metrics: Metric[] = [
    { title: 'Vendas no mês', amount: 0, tone: 'emerald' },
    { title: 'Margem bruta no mês', amount: 0, tone: 'amber' },
    { title: 'Receitas no mês', amount: 0, tone: 'sky' },
    { title: 'Despesas no mês', amount: 0, tone: 'rose' },
  ];
}
