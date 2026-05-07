import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsInputComponent } from '../../atoms/ds-input/ds-input';
export interface TableColumn {
  label: string;
  key: string;
  sortable?: boolean;
}

@Component({
  selector: 'ds-table',
  standalone: true,
  imports: [CommonModule, DsInputComponent],
  templateUrl: './ds-table.html',
 
})
export class DsTable<T> {
  @Input() columns: TableColumn[] = [];

  /** Paginação */
  @Input() pageSize = 10;
  readonly pageSizeOptions = [10, 25, 50] as const;
  
  // Sinais de Estado
  rawDataSource = signal<any[]>([]);
  filterText = signal('');
  sortConfig = signal<{ key: string, direction: 'asc' | 'desc' | null }>({ key: '', direction: null });
  currentPage = signal(1); // 1-based

  @Input() set dataSource(value: T[]) {
    this.rawDataSource.set(value);
  }

  // A MÁGICA: Dados filtrados e ordenados automaticamente
  filteredData = computed(() => {
    let data = [...this.rawDataSource()];
    const filter = this.filterText().toLowerCase();

    // 1. Filtragem
    if (filter) {
      data = data.filter(row => 
        Object.values(row).some(val => String(val).toLowerCase().includes(filter))
      );
    }

    // 2. Ordenação
    const sort = this.sortConfig();
    if (sort.key && sort.direction) {
      data.sort((a, b) => {
        const valA = a[sort.key];
        const valB = b[sort.key];
        if (sort.direction === 'asc') return valA > valB ? 1 : -1;
        return valA < valB ? 1 : -1;
      });
    }

    return data;
  });

  totalItems = computed(() => this.filteredData().length);

  totalPages = computed(() => {
    const size = Math.max(1, this.pageSize || 1);
    return Math.max(1, Math.ceil(this.totalItems() / size));
  });

  pagedData = computed(() => {
    const data = this.filteredData();
    const size = Math.max(1, this.pageSize || 1);
    const page = Math.min(Math.max(1, this.currentPage()), this.totalPages());
    const start = (page - 1) * size;
    return data.slice(start, start + size);
  });

  pageNumbers = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const maxButtons = 5;

    if (total <= maxButtons) return Array.from({ length: total }, (_, i) => i + 1);

    let start = Math.max(1, current - 2);
    let end = Math.min(total, start + (maxButtons - 1));
    start = Math.max(1, end - (maxButtons - 1));
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });

  onFilter(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.filterText.set(val);
    this.currentPage.set(1);
  }

  toggleSort(key: string) {
    const current = this.sortConfig();
    if (current.key === key) {
      const nextDir = current.direction === 'asc' ? 'desc' : 'asc';
      this.sortConfig.set({ key, direction: nextDir });
    } else {
      this.sortConfig.set({ key, direction: 'asc' });
    }
    this.currentPage.set(1);
  }

  goToPage(page: number) {
    const next = Math.min(Math.max(1, page), this.totalPages());
    this.currentPage.set(next);
  }

  nextPage() {
    this.goToPage(this.currentPage() + 1);
  }

  prevPage() {
    this.goToPage(this.currentPage() - 1);
  }

  setPageSize(size: number) {
    const next = Math.max(1, Number(size) || 10);
    this.pageSize = next;
    this.currentPage.set(1);
  }

  onPageSizeChange(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    this.setPageSize(target?.value ? Number(target.value) : this.pageSize);
  }
}
