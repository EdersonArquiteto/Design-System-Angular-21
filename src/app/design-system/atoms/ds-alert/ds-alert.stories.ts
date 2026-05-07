import type { Meta, StoryObj } from '@storybook/angular';
import { DsAlert } from './ds-alert';

const meta: Meta<DsAlert> = {
  title: 'Atoms/Alert',
  component: DsAlert,
  render: () => ({
    template: `
      <div class="p-6 bg-slate-950 min-h-[220px] space-y-4">
        <ds-ds-alert variant="success">Operação realizada com sucesso.</ds-ds-alert>
        <ds-ds-alert variant="warning">Atenção: verifique os dados.</ds-ds-alert>
        <ds-ds-alert variant="error">Erro ao salvar.</ds-ds-alert>
        <ds-ds-alert variant="info">Informação importante.</ds-ds-alert>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsAlert>;

export const Default: Story = {};

