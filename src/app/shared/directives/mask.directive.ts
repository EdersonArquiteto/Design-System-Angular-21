import { Directive, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[dsMask]',
    standalone: true
  })
  export class MaskDirective {
    @Input() dsMask: 'cpf' | 'cnpj' | 'cnpj-alpha' | 'tel' = 'cpf';
  
    @HostListener('input', ['$event'])
    onInput(event: any) {
      const input = event.target;
      let value = input.value;
  
      if (this.dsMask === 'tel') {
        input.value = this.applyTelMask(value);
      } else if (this.dsMask === 'cpf') {
        input.value = this.applyCpfMask(value);
      } else if (this.dsMask === 'cnpj') {
        input.value = this.applyCnpjMask(value);
      } else if (this.dsMask === 'cnpj-alpha') {
        input.value = this.applyCnpjAlphaMask(value);
      }
    }
  
    private applyTelMask(v: string): string {
      v = v.replace(/\D/g, ''); // Remove tudo que não é número
      v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses no DDD
      if (v.length > 13) {
        return v.replace(/(\d{5})(\d{4})$/, '$1-$2'); // 9 dígitos: (11) 91234-5678
      } else {
        return v.replace(/(\d{4})(\d{4})$/, '$1-$2'); // 8 dígitos: (11) 1234-5678
      }
    }
  
    private applyCpfMask(v: string): string {
      v = v.replace(/\D/g, '');
      return v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4').substring(0, 14);
    }
  
    private applyCnpjMask(v: string): string {
      v = v.replace(/\D/g, '');
      return v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5').substring(0, 18);
    }
  
    private applyCnpjAlphaMask(v: string): string {
      v = v.replace(/[^a-zA-Z0-0]/g, '').toUpperCase();
      return v.replace(/([a-zA-Z0-0]{2})([a-zA-Z0-0]{3})([a-zA-Z0-0]{3})([a-zA-Z0-0]{4})([a-zA-Z0-0]{2})/, '$1.$2.$3/$4-$5').substring(0, 18);
    }
  }