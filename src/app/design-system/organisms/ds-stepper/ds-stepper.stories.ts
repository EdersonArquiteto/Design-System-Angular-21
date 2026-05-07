import type { Meta, StoryObj } from '@storybook/angular';
import { DsStepperComponent } from './ds-stepper';

const meta: Meta<DsStepperComponent> = {
  title: 'Organisms/Stepper',
  component: DsStepperComponent,
  render: () => ({
    props: {
      steps: [
        { label: 'Dados' },
        { label: 'Contato' },
        { label: 'Confirmação' },
      ],
    },
    template: `
      <div class="bg-slate-950 min-h-[720px] p-6">
        <ds-stepper [steps]="steps">
          <div class="text-slate-300 text-sm">Conteúdo do passo atual (slot).</div>
        </ds-stepper>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsStepperComponent>;

export const Default: Story = {};

