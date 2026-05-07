import type { Meta, StoryObj } from '@storybook/angular';
import { DsCheckboxComponent } from './ds-checkbox';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

const meta: Meta<DsCheckboxComponent> = {
  title: 'Atoms/Checkbox',
  component: DsCheckboxComponent,
  render: () => ({
    props: {
      terms: new FormControl(false),
    },
    template: `
      <div class="p-6 bg-slate-950 min-h-[200px] max-w-lg">
        <ds-checkbox label="Aceito os termos" [formControl]="terms"></ds-checkbox>
        <p class="mt-4 text-sm text-slate-400">Marcado: <span class="text-white">{{ terms.value }}</span></p>
      </div>
    `,
    moduleMetadata: { imports: [ReactiveFormsModule] },
  }),
};

export default meta;
type Story = StoryObj<DsCheckboxComponent>;

export const Default: Story = {};

