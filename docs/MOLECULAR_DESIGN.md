# Design Molecular (Atomic Design) no `ds-vision`

Este documento explica **a teoria** e mostra **na prática** como montar um *formulário simples de cadastro de usuário* usando os componentes reutilizáveis do projeto.

## Conceito (resumo)

O Design Molecular popularizado por Brad Frost (Atomic Design) organiza uma UI como um sistema:

- **Átomos**: unidades básicas (botão, input, checkbox).
- **Moléculas**: composição pequena e reutilizável (campo com erro/hint + input).
- **Organismos**: blocos maiores e semânticos (header, sidebar, tabela, stepper).
- **Templates/Páginas**: composição final com regras de rota, estados e dados reais.

O objetivo não é “categorizar por beleza” e sim **reduzir entropia**:
- componentes ficam menores,
- responsabilidades mais claras,
- e a UI cresce sem virar um “monólito de HTML”.

## Regras práticas usadas aqui

- **Átomos** não conhecem “o produto”: só comportamento/estilo genéricos.
- **Moléculas** encapsulam padrões repetidos (ex.: mensagens de erro).
- **Organismos** compõem fluxos (navegação, listagens, wizards).
- **Páginas** orquestram estado (FormGroup, rotas, serviços).

## Exemplo: formulário simples de cadastro (nome, e-mail, senha, termos)

### 1) Átomos envolvidos
- `ds-input`
- `ds-checkbox`
- `button[ds-button]`

### 2) Molécula envolvida
- `ds-form-field`: padroniza `hint` e `error` envolvendo o campo.

### 3) Página (standalone) — exemplo completo

Crie um componente `RegisterExampleComponent` (arquivo livre, ex.: `src/app/features/auth/register-example/register-example.ts`):

```ts
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DsInputComponent } from '../../../design-system/atoms/ds-input/ds-input';
import { DsCheckboxComponent } from '../../../design-system/atoms/ds-checkbox/ds-checkbox';
import { DsButtonComponent } from '../../../design-system/atoms/ds-button/ds-button';
import { DsFormFieldComponent } from '../../../design-system/molecules/ds-form-field/ds-form-field';

@Component({
  selector: 'ds-register-example',
  standalone: true,
  imports: [ReactiveFormsModule, DsInputComponent, DsCheckboxComponent, DsButtonComponent, DsFormFieldComponent],
  template: `
    <main class="min-h-screen bg-slate-950 p-6 flex items-center justify-center">
      <div class="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8">
        <h1 class="text-2xl font-bold text-white mb-6">Cadastro</h1>

        <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-2">
          <ds-form-field [error]="nameError">
            <ds-input label="Nome" placeholder="Ex: João Silva" formControlName="name"></ds-input>
          </ds-form-field>

          <ds-form-field [error]="emailError" hint="Usaremos este e-mail para login">
            <ds-input label="E-mail" placeholder="exemplo@email.com" formControlName="email"></ds-input>
          </ds-form-field>

          <ds-form-field [error]="passwordError">
            <ds-input label="Senha" placeholder="mín. 6 caracteres" type="password" formControlName="password"></ds-input>
          </ds-form-field>

          <div class="pt-2">
            <ds-checkbox label="Aceito os termos" formControlName="terms"></ds-checkbox>
          </div>

          <button ds-button class="primary w-full mt-6" [disabled]="form.invalid">
            Criar conta
          </button>
        </form>
      </div>
    </main>
  `,
})
export class RegisterExampleComponent {
  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
    terms: new FormControl(false, { nonNullable: true, validators: [Validators.requiredTrue] }),
  });

  get nameError(): string | null {
    const c = this.form.controls.name;
    return c.touched && c.hasError('required') ? 'Nome é obrigatório' : null;
  }

  get emailError(): string | null {
    const c = this.form.controls.email;
    if (!c.touched) return null;
    if (c.hasError('required')) return 'E-mail é obrigatório';
    if (c.hasError('email')) return 'E-mail inválido';
    return null;
  }

  get passwordError(): string | null {
    const c = this.form.controls.password;
    if (!c.touched) return null;
    if (c.hasError('required')) return 'Senha é obrigatória';
    if (c.hasError('minlength')) return 'Mínimo de 6 caracteres';
    return null;
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Aqui entraria AuthService / API.
    console.log('Cadastro', this.form.getRawValue());
  }
}
```

## Por que isso é Design Molecular?

- `ds-input` / `ds-checkbox` / `ds-button` são **átomos**: focam em um único papel.
- `ds-form-field` é uma **molécula**: encapsula a regra “campo + erro/hint”.
- A página `RegisterExampleComponent` é **composição**: orquestra estado (FormGroup) e validação.

## Evolução natural

Quando o formulário ficar maior:
- migre validações e mensagens para funções utilitárias;
- crie moléculas específicas (ex.: `ds-password-field`) se o padrão se repetir;
- use `ds-stepper` para onboarding em múltiplos passos.

