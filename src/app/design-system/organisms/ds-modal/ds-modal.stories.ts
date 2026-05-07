import type { Meta, StoryObj } from '@storybook/angular';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { DsModal } from './ds-modal';

const meta: Meta<DsModal> = {
  title: 'Organisms/Modal',
  component: DsModal,
  render: () => ({
    moduleMetadata: {
      providers: [
        { provide: DialogRef, useValue: { close: () => {} } },
        {
          provide: DIALOG_DATA,
          useValue: { title: 'Confirmação', message: 'Tem certeza que deseja continuar?' },
        },
      ],
    },
    template: `
      <div class="bg-slate-950 min-h-[420px] p-6">
        <ds-modal></ds-modal>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsModal>;

export const Default: Story = {};

