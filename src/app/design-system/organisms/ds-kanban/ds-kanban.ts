import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export interface KanbanColumn {
  id: string;
  title: string;
  items: any[];
}

@Component({
  selector: 'ds-kanban',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './ds-kanban.html',
})
export class DsKanbanComponent {
  columns = signal<KanbanColumn[]>([
    { id: 'todo', title: 'A Fazer', items: [{ id: '1', content: 'Desenvolver Header' }, { id: '2', content: 'Ajustar CSS' }] },
    { id: 'doing', title: 'Em Progresso', items: [{ id: '3', content: 'Criar Kanban' }] },
    { id: 'done', title: 'Concluído', items: [] }
  ]);

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}