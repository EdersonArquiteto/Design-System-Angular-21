import type { Meta, StoryObj } from '@storybook/angular';
import { DsSwitch } from './ds-switch';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

const meta: Meta<DsSwitch> = {
  title: 'Atoms/Switch',
  component: DsSwitch,
  render: () => ({
    props: {
      control: new FormControl(true),
    },
    template: `
      <div class="p-6 bg-slate-950 min-h-[200px] max-w-lg space-y-4">
        <ds-ds-switch label="Notificações" [formControl]="control"></ds-ds-switch>
        <p class="text-sm text-slate-400">Ativo: <span class="text-white">{{ control.value }}</span></p>
      </div>
    `,
    moduleMetadata: { imports: [ReactiveFormsModule] },
  }),
};

export default meta;
type Story = StoryObj<DsSwitch>;

export const Default: Story = {};

