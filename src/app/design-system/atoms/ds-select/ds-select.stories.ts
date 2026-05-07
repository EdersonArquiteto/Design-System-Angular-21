import type { Meta, StoryObj } from '@storybook/angular';
import { DsSelect } from './ds-select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

const meta: Meta<DsSelect> = {
  title: 'Atoms/Select',
  component: DsSelect,
  render: () => ({
    props: {
      control: new FormControl('sp'),
      options: [
        { label: 'São Paulo', value: 'sp' },
        { label: 'Rio de Janeiro', value: 'rj' },
        { label: 'Minas Gerais', value: 'mg' },
      ],
    },
    template: `
      <div class="p-6 bg-slate-950 min-h-[240px] max-w-lg">
        <ds-select label="UF" [options]="options" [formControl]="control"></ds-select>
        <p class="mt-4 text-sm text-slate-400">Valor: <span class="text-white">{{ control.value }}</span></p>
      </div>
    `,
    moduleMetadata: { imports: [ReactiveFormsModule] },
  }),
};

export default meta;
type Story = StoryObj<DsSelect>;

export const Default: Story = {};

