# Quando usar cada componente

Este guia é **pragmático** (portfólio): foca em *intenção*, *boas práticas* e *anti‑padrões*.

## Atoms

### `DsButtonComponent` (`button[ds-button]`)
- **Use quando**: a ação é primária/claramente “clicável”; para CTAs e submits.
- **Evite quando**: o elemento não é ação (ex.: status, navegação). Para isso use `a` (link) ou `DsQuickLinkCardComponent`.
- **Dicas**:
  - `loading=true` substitui o conteúdo por `DsSpinnerComponent`.
  - Use classes: `primary | secondary | ghost | danger`.

### `DsInputComponent` (`ds-input`)
- **Use quando**: entrada de texto simples (email, senha, nome).
- **Evite quando**: seleção (use `DsSelect`/`DsAutocompleteComponent`) ou texto longo (`DsTextarea`).

### `DsTextarea` (`ds-textarea`)
- **Use quando**: entrada multi‑linha (observações, descrição).

### `DsCheckboxComponent` (`ds-checkbox`)
- **Use quando**: booleano (aceite, habilitar/desabilitar).
- **Evite quando**: escolha exclusiva entre opções (use `DsRadioComponent`).

### `DsRadioComponent` (`ds-radio`)
- **Use quando**: escolha **exclusiva** (ex.: plano A/B).

### `DsSelect` (`ds-select`)
- **Use quando**: lista curta e conhecida de opções.
- **Evite quando**: lista longa/pesquisável (use `DsAutocompleteComponent`).

### `DsSwitch` (`ds-ds-switch`)
- **Use quando**: toggle “liga/desliga” com feedback imediato.

### `DsDatepickerComponent` (`ds-datepicker`)
- **Use quando**: entrada de data (HTML `type=date` com skin glass).

### `DsSpinnerComponent` (`ds-spinner`)
- **Use quando**: estado de carregamento inline (botões, cards).

### `DsAlert` (`ds-ds-alert`)
- **Use quando**: mensagens de sistema no fluxo (sucesso/erro/atenção/info).

### `DsBadge` (`ds-ds-badge`)
- **Use quando**: status curto (Online, Pendente, Erro).

### `DsProgress` (atom) (`ds-ds-progress`)
- **Use quando**: progresso compacto/inline.

## Molecules

### `DsFormFieldComponent` (`ds-form-field`)
- **Use quando**: quiser padronizar **erro/hint** ao redor de inputs.
- **Evite quando**: o campo não precisa de validação/mensagens.

### `DsMetricCardComponent` (`ds-metric-card`)
- **Use quando**: KPI (valores do mês, métricas).
- **Evite quando**: informação não numérica (prefira outro card).

### `DsQuickLinkCardComponent` (`ds-quick-link-card`)
- **Use quando**: “atalhos” de dashboard (navegação por módulos).
- **Evite quando**: ações destrutivas (prefira `DsButtonComponent` com confirmação).

### `DsAutocompleteComponent` (`ds-autocomplete`)
- **Use quando**: seleção com **busca** (listas longas).

### `DsChartComponent` (`ds-chart`)
- **Use quando**: visualização com `chart.js` (linha/barra/doughnut).

### `DsAccordion` (`ds-accordion`)
- **Use quando**: reduzir complexidade visual (configurações avançadas).

### `DsFileUpload` (`ds-ds-file-upload`)
- **Use quando**: upload simples com drag’n’drop.

### `DsProgress` (molecule) (`ds-progress`)
- **Use quando**: progresso linear/circular com layout mais “card”.

## Organisms

### `DsHeader` (`ds-header`)
- **Use quando**: topbar fixa de contexto (empresa, relógio, usuário).
- **Notas**: o nome da empresa vem do `.env` (build‑time) via `APP_ENV`.

### `DsSidebar` (`ds-sidebar`)
- **Use quando**: navegação principal.

### `DsModal` (`ds-modal`)
- **Use quando**: confirmação/decisão crítica.

### `DsTable` (`ds-table`)
- **Use quando**: listagem com filtro e ordenação.

### `DsToastContainer` (`ds-toast-container`)
- **Use quando**: feedback não‑bloqueante (salvo com sucesso, erro temporário).

### `DsKanbanComponent` (`ds-kanban`)
- **Use quando**: fluxo de tarefas com drag’n’drop.

### `DsStepperComponent` (`ds-stepper`)
- **Use quando**: wizard multi‑passos (cadastro, onboarding).

