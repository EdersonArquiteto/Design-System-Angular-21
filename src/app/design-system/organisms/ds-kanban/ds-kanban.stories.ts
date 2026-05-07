import type { Meta, StoryObj } from '@storybook/angular';
import { DsKanbanComponent } from './ds-kanban';

const meta: Meta<DsKanbanComponent> = {
  title: 'Organisms/Kanban',
  component: DsKanbanComponent,
  render: () => ({
    template: `
      <div class="bg-slate-950 min-h-[700px] p-6">
        <ds-kanban></ds-kanban>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsKanbanComponent>;

export const Default: Story = {};

