import type { Meta, StoryObj } from '@storybook/angular';
import { DsDatepickerComponent } from './ds-datepicker';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

const meta: Meta<DsDatepickerComponent> = {
  title: 'Atoms/Datepicker',
  component: DsDatepickerComponent,
  render: () => ({
    props: {
      control: new FormControl('2026-05-07'),
    },
    template: `
      <div class="p-6 bg-slate-950 min-h-[220px] max-w-lg">
        <ds-datepicker label="Data" [formControl]="control"></ds-datepicker>
        <p class="mt-4 text-sm text-slate-400">Valor: <span class="text-white">{{ control.value }}</span></p>
      </div>
    `,
    moduleMetadata: { imports: [ReactiveFormsModule] },
  }),
};

export default meta;
type Story = StoryObj<DsDatepickerComponent>;

export const Default: Story = {};

