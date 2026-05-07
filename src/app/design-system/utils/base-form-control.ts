import { ControlValueAccessor } from '@angular/forms';
import { signal } from '@angular/core';

export abstract class BaseFormControl<T> implements ControlValueAccessor {
  // Signal que armazena o valor atual
  value = signal<T | null>(null);
  
  disabled = signal<boolean>(false);

  onChange: (value: T | null) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: T): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  // Método auxiliar para atualizar o valor
  handleValueChange(newValue: T): void {
    this.value.set(newValue);
    this.onChange(newValue);
    this.onTouched();
  }
}