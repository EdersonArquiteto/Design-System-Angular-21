import type { Meta, StoryObj } from '@storybook/angular';
import { DsAutocompleteComponent } from './ds-autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

const meta: Meta<DsAutocompleteComponent> = {
  title: 'Molecules/Autocomplete',
  component: DsAutocompleteComponent,
  render: () => ({
    props: {
      control: new FormControl(null),
      options: [
        { label: 'São Paulo', value: 'sp' },
        { label: 'Rio de Janeiro', value: 'rj' },
        { label: 'Belo Horizonte', value: 'bh' },
        { label: 'Curitiba', value: 'ctba' },
      ],
    },
    template: `
      <div class="p-6 bg-slate-950 min-h-[320px] max-w-xl">
        <ds-autocomplete label="Cidade" [options]="options" [formControl]="control"></ds-autocomplete>
        <p class="mt-4 text-sm text-slate-400">Valor: <span class="text-white">{{ control.value }}</span></p>
      </div>
    `,
    moduleMetadata: { imports: [ReactiveFormsModule] },
  }),
};

export default meta;
type Story = StoryObj<DsAutocompleteComponent>;

export const Default: Story = {};

