import { Component, Input,forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseFormControl } from '../../utils/base-form-control';

@Component({
  selector: 'ds-textarea',
  imports: [CommonModule,],
  templateUrl: './ds-textarea.html',
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DsTextarea), multi: true}]
})
export class DsTextarea extends BaseFormControl<string> {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() rows = 4;

  onInput(event: Event): void {
    this.handleValueChange((event.target as HTMLTextAreaElement).value);
  }
}
