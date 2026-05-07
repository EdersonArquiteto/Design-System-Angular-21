import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseFormControl } from '../../utils/base-form-control';

@Component({
  selector: 'ds-radio',
  standalone: true,
  imports: [CommonModule],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR, 
    useExisting: forwardRef(() => DsRadioComponent), 
    multi: true 
  }],
  templateUrl: './ds-radio.html',
})
export class DsRadioComponent extends BaseFormControl<any> {
  @Input() label = '';
  @Input() radioValue: any; // O valor que este rádio específico representa

  select() {
    this.handleValueChange(this.radioValue);
  }
}