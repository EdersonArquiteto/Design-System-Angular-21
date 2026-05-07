import type { Meta, StoryObj } from '@storybook/angular';
import { DsBadge } from './ds-badge';

const meta: Meta<DsBadge> = {
  title: 'Atoms/Badge',
  component: DsBadge,
  render: () => ({
    template: `
      <div class="p-6 bg-slate-950 min-h-[160px] flex flex-wrap items-center gap-3">
        <ds-ds-badge variant="success">Success</ds-ds-badge>
        <ds-ds-badge variant="warning">Warning</ds-ds-badge>
        <ds-ds-badge variant="error">Error</ds-ds-badge>
        <ds-ds-badge variant="info">Info</ds-ds-badge>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsBadge>;

export const Default: Story = {};

