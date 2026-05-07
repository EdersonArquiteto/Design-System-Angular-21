import type { Meta, StoryObj } from '@storybook/angular';

const code = `import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DsInputComponent } from '../../../design-system/atoms/ds-input/ds-input';
import { DsCheckboxComponent } from '../../../design-system/atoms/ds-checkbox/ds-checkbox';
import { DsButtonComponent } from '../../../design-system/atoms/ds-button/ds-button';
import { DsFormFieldComponent } from '../../../design-system/molecules/ds-form-field/ds-form-field';

@Component({
  selector: 'ds-register-example',
  standalone: true,
  imports: [ReactiveFormsModule, DsInputComponent, DsCheckboxComponent, DsButtonComponent, DsFormFieldComponent],
  template: \`
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
  \`,
})
export class RegisterExampleComponent {
  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
    terms: new FormControl(false, { nonNullable: true, validators: [Validators.requiredTrue] }),
  });
  // ... getters de erro e submit()
}`;

const meta: Meta = {
  title: 'Docs/Design Molecular (Atomic Design)',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: { disable: true },
    layout: 'fullscreen',
  },
  render: () => ({
    props: { code },
    template: `
      <article class="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
        <div class="mx-auto max-w-4xl space-y-8">
          <header class="space-y-2">
            <h1 class="text-3xl font-bold tracking-tight text-white">
              Design Molecular (Atomic Design) no <code>ds-vision</code>
            </h1>
            <p class="text-slate-400">
              Teoria + prática: como montar um formulário simples de cadastro usando os componentes reutilizáveis.
            </p>
          </header>

          <section class="space-y-4">
            <h2 class="text-xl font-semibold text-white">Conceito (resumo)</h2>
            <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <ul class="list-disc space-y-1 pl-5 text-sm text-slate-300">
                <li><strong>Átomos</strong>: unidades básicas (botão, input, checkbox).</li>
                <li><strong>Moléculas</strong>: composições pequenas (campo + erro/hint).</li>
                <li><strong>Organismos</strong>: blocos maiores (header, sidebar, tabela, stepper).</li>
                <li><strong>Templates/Páginas</strong>: composição final com estado, rotas e dados.</li>
              </ul>
              <p class="mt-4 text-sm text-slate-300">
                O objetivo é reduzir entropia: componentes menores, responsabilidades claras e evolução sustentável.
              </p>
            </div>
          </section>

          <section class="space-y-4">
            <h2 class="text-xl font-semibold text-white">Regras práticas</h2>
            <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <ul class="list-disc space-y-1 pl-5 text-sm text-slate-300">
                <li>Átomos não conhecem o produto — só comportamento/estilo genérico.</li>
                <li>Moléculas encapsulam padrões repetidos (erro/hint, layouts pequenos).</li>
                <li>Organismos compõem fluxos e seções completas.</li>
                <li>Páginas orquestram estado (FormGroup), rotas e serviços.</li>
              </ul>
            </div>
          </section>

          <section class="space-y-4">
            <h2 class="text-xl font-semibold text-white">Exemplo: cadastro simples</h2>
            <div class="grid gap-4 md:grid-cols-2">
              <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white">Átomos</h3>
                <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  <li><code>ds-input</code></li>
                  <li><code>ds-checkbox</code></li>
                  <li><code>button[ds-button]</code></li>
                </ul>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white">Molécula</h3>
                <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  <li><code>ds-form-field</code> (erro/hint ao redor do campo)</li>
                </ul>
              </div>
            </div>

            <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h3 class="text-base font-semibold text-white">Página (standalone) — exemplo completo</h3>
              <p class="mt-2 text-sm text-slate-300">
                Copie e adapte conforme o fluxo do seu app (AuthService/API).
              </p>
              <pre class="mt-4 overflow-auto rounded-xl bg-slate-900/60 p-4 text-xs text-slate-200"><code [textContent]="code"></code></pre>
            </div>
          </section>

          <section class="space-y-4">
            <h2 class="text-xl font-semibold text-white">Por que isso é Design Molecular?</h2>
            <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <ul class="list-disc space-y-1 pl-5 text-sm text-slate-300">
                <li><code>ds-input</code>, <code>ds-checkbox</code>, <code>ds-button</code> são átomos: um papel claro.</li>
                <li><code>ds-form-field</code> é molécula: encapsula padrão de erro/hint.</li>
                <li>A página orquestra estado (FormGroup) e validação.</li>
              </ul>
            </div>
          </section>

          <footer class="pt-4 text-xs text-slate-500">
            Fonte: <code>docs/MOLECULAR_DESIGN.md</code>
          </footer>
        </div>
      </article>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const Page: Story = {};

