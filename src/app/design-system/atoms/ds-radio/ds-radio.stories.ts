import type { Meta, StoryObj } from '@storybook/angular';
import { DsRadioComponent } from './ds-radio';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

const meta: Meta<DsRadioComponent> = {
  title: 'Atoms/Radio',
  component: DsRadioComponent,
  render: () => ({
    props: {
      control: new FormControl('a'),
    },
    template: `
      <div class="p-6 bg-slate-950 min-h-[220px] max-w-lg space-y-4">
        <div class="space-y-3">
          <ds-radio label="Opção A" [radioValue]="'a'" [formControl]="control"></ds-radio>
          <ds-radio label="Opção B" [radioValue]="'b'" [formControl]="control"></ds-radio>
        </div>
        <p class="text-sm text-slate-400">Selecionado: <span class="text-white">{{ control.value }}</span></p>
      </div>
    `,
    moduleMetadata: { imports: [ReactiveFormsModule] },
  }),
};

export default meta;
type Story = StoryObj<DsRadioComponent>;

export const Default: Story = {};

