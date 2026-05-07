import type { Meta, StoryObj } from '@storybook/angular';
import { DsProgress } from './ds-progress';

const meta: Meta<DsProgress> = {
  title: 'Molecules/Progress',
  component: DsProgress,
  args: {
    value: 42,
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="p-6 bg-slate-950 min-h-[220px] max-w-xl space-y-6">
        <ds-progress [value]="value"></ds-progress>
        <ds-progress [value]="75"></ds-progress>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsProgress>;

export const Default: Story = {};

