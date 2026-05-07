import type { Meta, StoryObj } from '@storybook/angular';
import { DsInputComponent } from './ds-input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

const meta: Meta<DsInputComponent> = {
  title: 'Atoms/Input',
  component: DsInputComponent,
  decorators: [],
  render: () => ({
    props: {
      control: new FormControl(''),
    },
    template: `
      <div class="p-6 bg-slate-950 min-h-[240px] max-w-lg">
        <ds-input label="E-mail" placeholder="exemplo@email.com" [formControl]="control"></ds-input>
        <p class="mt-4 text-sm text-slate-400">Valor: <span class="text-white">{{ control.value }}</span></p>
      </div>
    `,
    moduleMetadata: {
      imports: [ReactiveFormsModule],
    },
  }),
};

export default meta;
type Story = StoryObj<DsInputComponent>;

export const Default: Story = {};

