import type { Meta, StoryObj } from '@storybook/angular';
import { DsFormFieldComponent } from './ds-form-field';
import { DsInputComponent } from '../../atoms/ds-input/ds-input';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

const meta: Meta<DsFormFieldComponent> = {
  title: 'Molecules/Form Field',
  component: DsFormFieldComponent,
  render: () => ({
    props: {
      control: new FormControl('', [Validators.required]),
    },
    template: `
      <div class="p-6 bg-slate-950 min-h-[260px] max-w-xl">
        <ds-form-field [error]=\"control.touched && control.invalid ? 'Campo obrigatório' : null\" hint=\"Dica opcional\">\n          <ds-input label=\"Nome\" placeholder=\"Ex: João Silva\" [formControl]=\"control\"></ds-input>\n        </ds-form-field>\n        <button class=\"mt-2 text-xs text-slate-400 underline\" (click)=\"control.markAsTouched()\">Marcar como touched</button>\n      </div>
    `,
    moduleMetadata: { imports: [ReactiveFormsModule, DsInputComponent] },
  }),
};

export default meta;
type Story = StoryObj<DsFormFieldComponent>;

export const Default: Story = {};

