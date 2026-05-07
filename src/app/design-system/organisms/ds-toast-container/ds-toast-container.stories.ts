import type { Meta, StoryObj } from '@storybook/angular';
import { signal } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';
import { DsToastContainer } from './ds-toast-container';

const meta: Meta<DsToastContainer> = {
  title: 'Organisms/Toast Container',
  component: DsToastContainer,
  render: () => ({
    moduleMetadata: {
      providers: [
        {
          provide: ToastService,
          useValue: {
            toasts: signal([
              { id: 1, message: 'Sucesso! Dados salvos.', type: 'success' },
              { id: 2, message: 'Info: sincronizando...', type: 'info' },
            ]),
          },
        },
      ],
    },
    template: `
      <div class="bg-slate-950 min-h-[320px] p-6 text-slate-400">
        <p class="text-sm">O container renderiza toasts disparados pelo serviço.</p>
        <ds-toast-container></ds-toast-container>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsToastContainer>;

export const Default: Story = {};

