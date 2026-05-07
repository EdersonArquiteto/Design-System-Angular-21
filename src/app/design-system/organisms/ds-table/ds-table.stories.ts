import type { Meta, StoryObj } from '@storybook/angular';
import { DsTable } from './ds-table';

const meta: Meta<DsTable<any>> = {
  title: 'Organisms/Table',
  component: DsTable,
  render: () => ({
    props: {
      columns: [
        { key: 'name', label: 'Nome' },
        { key: 'email', label: 'E-mail' },
        { key: 'role', label: 'Perfil' },
      ],
      dataSource: [
        { name: 'Ana', email: 'ana@email.com', role: 'Admin' },
        { name: 'Bruno', email: 'bruno@email.com', role: 'User' },
      ],
    },
    template: `
      <div class="bg-slate-950 min-h-[420px] p-6">
        <ds-table [columns]="columns" [dataSource]="dataSource"></ds-table>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<DsTable<any>>;

export const Default: Story = {};

