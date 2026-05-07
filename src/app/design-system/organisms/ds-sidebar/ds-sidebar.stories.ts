import type { Meta, StoryObj } from '@storybook/angular';
import { DsSidebar } from './ds-sidebar';
import { provideRouter } from '@angular/router';

const meta: Meta<DsSidebar> = {
  title: 'Organisms/Sidebar',
  component: DsSidebar,
  decorators: [
    (story) => ({
      ...story(),
      applicationConfig: {
        providers: [provideRouter([])],
      },
    }),
  ],
  render: () => ({
    template: `
      <div class="bg-slate-950 min-h-[520px] flex">
        <ds-sidebar></ds-sidebar>
        <div class="flex-1 p-8 text-slate-400">Área de conteúdo</div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsSidebar>;

export const Default: Story = {};

