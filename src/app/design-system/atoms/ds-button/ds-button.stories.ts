import type { Meta, StoryObj } from '@storybook/angular';
import { DsButtonComponent } from './ds-button';

const meta: Meta<DsButtonComponent> = {
  title: 'Atoms/Button',
  component: DsButtonComponent,
  args: {
    loading: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="flex flex-wrap gap-4 p-6 bg-slate-950 min-h-[200px]">
        <button ds-button class="primary" [loading]="loading">Primary</button>
        <button ds-button class="secondary" [loading]="loading">Secondary</button>
        <button ds-button class="ghost" [loading]="loading">Ghost</button>
        <button ds-button class="danger" [loading]="loading">Danger</button>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsButtonComponent>;

export const Default: Story = {};

export const Loading: Story = {
  args: { loading: true },
};

