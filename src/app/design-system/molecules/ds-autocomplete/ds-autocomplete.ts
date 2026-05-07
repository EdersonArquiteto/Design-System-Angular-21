import { Component, Input, forwardRef, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { BaseFormControl } from '../../utils/base-form-control';

@Component({
  selector: 'ds-autocomplete',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, OverlayModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DsAutocompleteComponent),
    multi: true
  }],
  templateUrl: './ds-autocomplete.html',
  styleUrl: './ds-autocomplete.scss',
})
export class DsAutocompleteComponent extends BaseFormControl<any> {
  @Input() label = '';
  @Input() placeholder = 'Comece a digitar...';
  @Input() options: { label: string, value: any }[] = [];

  isPanelOpen = signal(false);
  query = signal('');
  
  // O valor que aparece no input de texto
  displayValue = signal('');

  // Lógica de filtro automática com computed
  filteredOptions = computed(() => {
    const q = this.query().toLowerCase();
    if (!q) return this.options;
    return this.options.filter(opt => opt.label.toLowerCase().includes(q));
  });

  onTyping(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.query.set(val);
    this.displayValue.set(val);
    this.isPanelOpen.set(true);
    
    // Se o usuário apagar tudo, limpamos o valor do formulário
    if (!val) this.handleValueChange(null);
  }

  selectOption(option: { label: string, value: any }) {
    this.displayValue.set(option.label);
    this.handleValueChange(option.value);
    this.isPanelOpen.set(false);
  }

  // Sobrescreve o writeValue para atualizar o texto do input quando o form mudar por fora
  override writeValue(value: any): void {
    super.writeValue(value);
    const found = this.options.find(o => o.value === value);
    this.displayValue.set(found ? found.label : '');
  }
}