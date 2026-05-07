import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseFormControl } from '../../utils/base-form-control';

@Component({
  selector: 'ds-select',
  imports: [CommonModule],
  templateUrl: './ds-select.html',
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DsSelect), multi: true}]
})
export class DsSelect extends BaseFormControl<string> {
  @Input() label = '';
  @Input() placeholder = 'Selecione uma opção';
  @Input() options: { label: string; value: string }[] = [];

  onChangeSelect(event: Event): void {
    this.handleValueChange((event.target as HTMLSelectElement).value);
  }
}
