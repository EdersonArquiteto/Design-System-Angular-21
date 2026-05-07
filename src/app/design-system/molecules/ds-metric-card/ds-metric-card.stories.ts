import type { Meta, StoryObj } from '@storybook/angular';
import { DsMetricCardComponent } from './ds-metric-card';

const meta: Meta<DsMetricCardComponent> = {
  title: 'Molecules/Metric Card',
  component: DsMetricCardComponent,
  args: {
    title: 'Vendas no mês',
    amount: 0,
    tone: 'emerald',
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="p-6 bg-slate-950 min-h-[220px] max-w-sm">
        <ds-metric-card [title]="title" [amount]="amount" [tone]="tone"></ds-metric-card>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsMetricCardComponent>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => ({
    template: `
      <div class="p-6 bg-slate-950 min-h-[260px] grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        <ds-metric-card title="Vendas no mês" [amount]="0" tone="emerald"></ds-metric-card>
        <ds-metric-card title="Margem bruta no mês" [amount]="0" tone="amber"></ds-metric-card>
        <ds-metric-card title="Receitas no mês" [amount]="0" tone="sky"></ds-metric-card>
        <ds-metric-card title="Despesas no mês" [amount]="0" tone="rose"></ds-metric-card>
      </div>
    `,
  }),
};

