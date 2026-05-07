import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Docs/Quando usar cada componente',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: { disable: true },
    layout: 'fullscreen',
  },
  render: () => ({
    template: `
      <article class="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
        <div class="mx-auto max-w-4xl space-y-8">
          <header class="space-y-2">
            <h1 class="text-3xl font-bold tracking-tight text-white">Quando usar cada componente</h1>
            <p class="text-slate-400">
              Guia pragmático (portfólio): intenção, boas práticas e anti‑padrões por camada.
            </p>
          </header>

          <section class="space-y-4">
            <h2 class="text-xl font-semibold text-white">Atoms</h2>

            <div class="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h3 class="text-base font-semibold text-white"><code>DsButtonComponent</code> (<code>button[ds-button]</code>)</h3>
              <ul class="list-disc space-y-1 pl-5 text-sm text-slate-300">
                <li><strong>Use quando</strong>: ação principal/CTA, submits.</li>
                <li><strong>Evite quando</strong>: não for ação (status/navegação). Prefira link ou <code>ds-quick-link-card</code>.</li>
                <li><strong>Dicas</strong>: <code>loading=true</code> mostra spinner; classes <code>primary | secondary | ghost | danger</code>.</li>
              </ul>
            </div>

            <div class="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h3 class="text-base font-semibold text-white"><code>DsInputComponent</code> (<code>ds-input</code>)</h3>
              <ul class="list-disc space-y-1 pl-5 text-sm text-slate-300">
                <li><strong>Use quando</strong>: texto simples (email, senha, nome).</li>
                <li><strong>Evite quando</strong>: seleção (use <code>ds-select</code>/<code>ds-autocomplete</code>) ou texto longo (<code>ds-textarea</code>).</li>
              </ul>
            </div>

            <div class="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h3 class="text-base font-semibold text-white"><code>DsTextarea</code> (<code>ds-textarea</code>)</h3>
              <ul class="list-disc space-y-1 pl-5 text-sm text-slate-300">
                <li><strong>Use quando</strong>: entrada multi‑linha (observações, descrição).</li>
              </ul>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <div class="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsCheckboxComponent</code> (<code>ds-checkbox</code>)</h3>
                <ul class="list-disc space-y-1 pl-5 text-sm text-slate-300">
                  <li><strong>Use quando</strong>: booleano (aceite, habilitar/desabilitar).</li>
                  <li><strong>Evite quando</strong>: escolha exclusiva (use <code>ds-radio</code>).</li>
                </ul>
              </div>
              <div class="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsRadioComponent</code> (<code>ds-radio</code>)</h3>
                <ul class="list-disc space-y-1 pl-5 text-sm text-slate-300">
                  <li><strong>Use quando</strong>: escolha exclusiva (ex.: plano A/B).</li>
                </ul>
              </div>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <div class="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsSelect</code> (<code>ds-select</code>)</h3>
                <ul class="list-disc space-y-1 pl-5 text-sm text-slate-300">
                  <li><strong>Use quando</strong>: lista curta e conhecida de opções.</li>
                  <li><strong>Evite quando</strong>: lista longa/pesquisável (use <code>ds-autocomplete</code>).</li>
                </ul>
              </div>
              <div class="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsSwitch</code> (<code>ds-ds-switch</code>)</h3>
                <ul class="list-disc space-y-1 pl-5 text-sm text-slate-300">
                  <li><strong>Use quando</strong>: toggle liga/desliga com feedback imediato.</li>
                </ul>
              </div>
            </div>

            <div class="grid gap-4 md:grid-cols-3">
              <div class="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsDatepickerComponent</code> (<code>ds-datepicker</code>)</h3>
                <p class="text-sm text-slate-300">Use para entrada de data (HTML <code>type=date</code> com skin glass).</p>
              </div>
              <div class="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsSpinnerComponent</code> (<code>ds-spinner</code>)</h3>
                <p class="text-sm text-slate-300">Use para carregamento inline (botões, cards).</p>
              </div>
              <div class="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsAlert</code> / <code>DsBadge</code></h3>
                <p class="text-sm text-slate-300">Alert = mensagem no fluxo; Badge = status curto.</p>
              </div>
            </div>
          </section>

          <section class="space-y-4">
            <h2 class="text-xl font-semibold text-white">Molecules</h2>
            <div class="grid gap-4 md:grid-cols-2">
              <div class="space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsFormFieldComponent</code> (<code>ds-form-field</code>)</h3>
                <p class="text-sm text-slate-300">Padroniza <code>error</code>/<code>hint</code> ao redor de inputs.</p>
              </div>
              <div class="space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsAutocompleteComponent</code> (<code>ds-autocomplete</code>)</h3>
                <p class="text-sm text-slate-300">Seleção com busca (listas longas).</p>
              </div>
              <div class="space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsMetricCardComponent</code> (<code>ds-metric-card</code>)</h3>
                <p class="text-sm text-slate-300">KPI/Métricas (ex.: valores do mês).</p>
              </div>
              <div class="space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsQuickLinkCardComponent</code> (<code>ds-quick-link-card</code>)</h3>
                <p class="text-sm text-slate-300">Atalhos de dashboard (navegação por módulos).</p>
              </div>
            </div>
          </section>

          <section class="space-y-4">
            <h2 class="text-xl font-semibold text-white">Organisms</h2>
            <div class="grid gap-4 md:grid-cols-2">
              <div class="space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsHeader</code> / <code>DsSidebar</code></h3>
                <p class="text-sm text-slate-300">Estrutura de navegação e contexto do app.</p>
              </div>
              <div class="space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsTable</code></h3>
                <p class="text-sm text-slate-300">Listagens com filtro, ordenação e paginação.</p>
              </div>
              <div class="space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsModal</code></h3>
                <p class="text-sm text-slate-300">Confirmações e decisões críticas.</p>
              </div>
              <div class="space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 class="text-base font-semibold text-white"><code>DsStepper</code> / <code>DsKanban</code></h3>
                <p class="text-sm text-slate-300">Wizards multi‑passos e fluxos com drag’n’drop.</p>
              </div>
            </div>
          </section>

          <footer class="pt-4 text-xs text-slate-500">
            Fonte: <code>docs/WHEN_TO_USE.md</code>
          </footer>
        </div>
      </article>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const Page: Story = {};

