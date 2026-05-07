import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { DsDragDropDirective } from '../../../shared/directives/ds-drag-drop';

@Component({
  selector: 'ds-ds-file-upload',
  imports: [CommonModule, DsDragDropDirective],
  templateUrl: './ds-file-upload.html',
})
export class DsFileUpload {
  @Input() label = '';
  @Input() multiple = false;
  @Input() accept = '*';

  files = signal<File[]>([]);

  onFileDropped(fileList: FileList) {
    this.addFiles(fileList);
  }

  onFileSelected(event: any) {
    const fileList = event.target.files as FileList;
    this.addFiles(fileList);
  }

  private addFiles(fileList: FileList) {
    const newFiles = Array.from(fileList);
    if (this.multiple) {
      this.files.update(current => [...current, ...newFiles]);
    } else {
      this.files.set([newFiles[0]]);
    }
  }

  removeFile(index: number) {
    this.files.update(current => current.filter((_, i) => i !== index));
  }
}
