import type { Meta, StoryObj } from '@storybook/angular';
import { DsAccordion } from './ds-accordion';

const meta: Meta<DsAccordion> = {
  title: 'Molecules/Accordion',
  component: DsAccordion,
  render: () => ({
    template: `
      <div class="p-6 bg-slate-950 min-h-[320px] max-w-2xl">
        <ds-accordion title="Detalhes">
          <div class="text-sm text-slate-300">
            Conteúdo do accordion. Use para seções colapsáveis e configurações avançadas.
          </div>
        </ds-accordion>
        <div class="h-4"></div>
        <ds-accordion title="Perguntas frequentes">
          <ul class="text-sm text-slate-300 list-disc pl-5 space-y-1">
            <li>Como instalar?</li>
            <li>Como configurar tokens?</li>
          </ul>
        </ds-accordion>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsAccordion>;

export const Default: Story = {};

