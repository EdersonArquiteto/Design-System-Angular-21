import type { Meta, StoryObj } from '@storybook/angular';
import { DsFileUpload } from './ds-file-upload';

const meta: Meta<DsFileUpload> = {
  title: 'Molecules/File Upload',
  component: DsFileUpload,
  render: () => ({
    template: `
      <div class="p-6 bg-slate-950 min-h-[260px] max-w-2xl">
        <ds-ds-file-upload label="Anexar arquivo"></ds-ds-file-upload>
        <p class="mt-4 text-xs text-slate-500">Story focada no visual — o handler depende do app.</p>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsFileUpload>;

export const Default: Story = {};

