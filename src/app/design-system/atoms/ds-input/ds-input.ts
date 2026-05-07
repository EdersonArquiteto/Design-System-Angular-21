import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BaseFormControl } from '../../utils/base-form-control';

@Component({
  selector: 'ds-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DsInputComponent),
      multi: true
    }
  ],
  template: `
    <div class="flex flex-col gap-1.5 w-full">
      <label *ngIf="label" class="text-sm font-medium text-slate-300 ml-1">
        {{ label }}
      </label>

      <input
        [type]="type"
        [value]="value()"
        [placeholder]="placeholder"
        [disabled]="disabled()"
        (input)="onInput($event)"
        (blur)="onTouched()"
        class="w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl px-4 py-3 
               text-white outline-none transition-all duration-300
               focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10
               placeholder:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  `,
  styles: []
})
export class DsInputComponent extends BaseFormControl<string> {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'password' | 'number' | 'email' = 'text';

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.handleValueChange(input.value);
  }
}