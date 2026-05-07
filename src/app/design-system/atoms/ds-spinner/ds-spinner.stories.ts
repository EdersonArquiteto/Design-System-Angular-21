import type { Meta, StoryObj } from '@storybook/angular';
import { DsSpinnerComponent } from './ds-spinner';

const meta: Meta<DsSpinnerComponent> = {
  title: 'Atoms/Spinner',
  component: DsSpinnerComponent,
  args: {
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="p-6 bg-slate-950 min-h-[160px] flex items-center gap-6 text-white">
        <ds-spinner size="sm"></ds-spinner>
        <ds-spinner size="md"></ds-spinner>
        <ds-spinner size="lg"></ds-spinner>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsSpinnerComponent>;

export const Default: Story = {};

