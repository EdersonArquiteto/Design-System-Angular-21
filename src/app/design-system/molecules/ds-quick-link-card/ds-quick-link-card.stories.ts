import type { Meta, StoryObj } from '@storybook/angular';
import { DsQuickLinkCardComponent } from './ds-quick-link-card';

const meta: Meta<DsQuickLinkCardComponent> = {
  title: 'Molecules/Quick Link Card',
  component: DsQuickLinkCardComponent,
  args: {
    label: 'Venda',
    icon: 'sale',
    link: null,
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="p-6 bg-slate-950 min-h-[260px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl">
        <ds-quick-link-card label="Venda" icon="sale" [link]="null"></ds-quick-link-card>
        <ds-quick-link-card label="Cupom Fiscal" icon="receipt" [link]="null"></ds-quick-link-card>
        <ds-quick-link-card label="Produtos" icon="product" [link]="null"></ds-quick-link-card>
        <ds-quick-link-card label="Cliente" icon="customer" [link]="null"></ds-quick-link-card>
        <ds-quick-link-card label="Fornecedor" icon="supplier" [link]="null"></ds-quick-link-card>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsQuickLinkCardComponent>;

export const Default: Story = {};

