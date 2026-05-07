import type { Meta, StoryObj } from '@storybook/angular';
import { DsTextarea } from './ds-textarea';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

const meta: Meta<DsTextarea> = {
  title: 'Atoms/Textarea',
  component: DsTextarea,
  render: () => ({
    props: {
      control: new FormControl(''),
    },
    template: `
      <div class="p-6 bg-slate-950 min-h-[260px] max-w-xl">
        <ds-textarea label="Observações" placeholder="Digite aqui..." [formControl]="control"></ds-textarea>
        <p class="mt-4 text-sm text-slate-400">Chars: <span class="text-white">{{ (control.value || '').length }}</span></p>
      </div>
    `,
    moduleMetadata: { imports: [ReactiveFormsModule] },
  }),
};

export default meta;
type Story = StoryObj<DsTextarea>;

export const Default: Story = {};

