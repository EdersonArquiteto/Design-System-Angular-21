import type { Meta, StoryObj } from '@storybook/angular';
import { DsChartComponent } from './ds-chart';

const meta: Meta<DsChartComponent> = {
  title: 'Molecules/Chart',
  component: DsChartComponent,
  render: () => ({
    props: {
      type: 'line',
      data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [
          {
            label: 'Receita',
            data: [12, 19, 9, 15, 22, 30, 18],
            borderColor: 'rgba(59, 130, 246, 1)',
            backgroundColor: 'rgba(59, 130, 246, 0.15)',
            tension: 0.35,
            fill: true,
          },
        ],
      },
    },
    template: `
      <div class="p-6 bg-slate-950 min-h-[360px] max-w-3xl">
        <div class="rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-xl">
          <ds-chart [type]="type" [data]="data"></ds-chart>
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsChartComponent>;

export const Default: Story = {};

