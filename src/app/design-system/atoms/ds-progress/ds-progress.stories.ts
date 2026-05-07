import type { Meta, StoryObj } from '@storybook/angular';
import { DsProgress } from './ds-progress';

const meta: Meta<DsProgress> = {
  title: 'Atoms/Progress (Mini)',
  component: DsProgress,
  render: () => ({
    template: `
      <div class="p-6 bg-slate-950 min-h-[160px] space-y-4">
        <ds-ds-progress [value]="20"></ds-ds-progress>
        <ds-ds-progress [value]="55"></ds-ds-progress>
        <ds-ds-progress [value]="90"></ds-ds-progress>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsProgress>;

export const Default: Story = {};

