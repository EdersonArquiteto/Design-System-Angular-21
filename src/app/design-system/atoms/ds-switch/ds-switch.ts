import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseFormControl } from '../../utils/base-form-control';

@Component({
  selector: 'ds-ds-switch',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DsSwitch),
      multi: true
    }
  ],
  templateUrl: './ds-switch.html',

})
export class DsSwitch extends BaseFormControl<boolean> {
  @Input() label = '';

  toggle() {
    this.handleValueChange(!this.value());
  }
}