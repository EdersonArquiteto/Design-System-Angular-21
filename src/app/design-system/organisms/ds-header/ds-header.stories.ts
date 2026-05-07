import type { Meta, StoryObj } from '@storybook/angular';
import { DsHeader } from './ds-header';

const meta: Meta<DsHeader> = {
  title: 'Organisms/Header',
  component: DsHeader,
  render: () => ({
    template: `
      <div class="bg-slate-950 min-h-[200px]">
        <ds-header></ds-header>
        <div class="p-6 text-slate-400 text-sm">Conteúdo da página</div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsHeader>;

export const Default: Story = {};

