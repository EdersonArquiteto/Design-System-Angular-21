import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-form-field.html',
})
export class DsFormFieldComponent {
  @Input() error: string | null = null;
  @Input() hint: string | null = null;
  @Input() label: string | null = null;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() placeholder: string | null = null;
  @Input() type: string | null = null;
  @Input() value: string | null = null;
  @Input() name: string | null = null;
}
