import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BaseFormControl } from '../../utils/base-form-control';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ds-checkbox.html',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DsCheckboxComponent),
    multi: true
  }]
})
export class DsCheckboxComponent extends BaseFormControl<boolean> {
  @Input() label: string = '';
  toggle(): void{
    const newValue = !this.value();
    this.handleValueChange(newValue);
  }
}
