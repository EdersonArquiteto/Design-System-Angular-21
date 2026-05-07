import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { DsButtonComponent } from '../../atoms/ds-button/ds-button';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'ds-modal',
  imports: [CommonModule,DsButtonComponent],
  standalone: true,
  templateUrl: './ds-modal.html',
})
export class DsModal {
  constructor(
    public dialogRef: DialogRef<boolean>,
    @Inject(DIALOG_DATA) public data: any
  ) {}
}
