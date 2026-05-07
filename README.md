# DS Vision — Design System + Dashboard (Angular + Tailwind)

Projeto de **Design System (Atomic Design)** com **dashboard SSR** em Angular, foco em **UI moderna (glassmorphism)**, **reutilização** e **documentação visual com Storybook**.

> Portfólio: este repositório foi estruturado para demonstrar **arquitetura**, **componentização** e **documentação** de um sistema de UI real.

## O que você encontra aqui

- **Angular 21** com **SSR** (`@angular/ssr`)
- **Tailwind CSS** (tokens + utilitários) e estilo glassmorphism
- **Design System** em camadas (`atoms/`, `molecules/`, `organisms/`)
- **Storybook** com stories para os componentes (documentação visual)
- **Rotas**: `/login`, `/register`, `/forgot-password`, `/dashboard/home`

## Stack

- **Angular**: 21.x (standalone components + signals)
- **SSR**: `@angular/ssr`
- **Tailwind**: 3.x
- **Storybook**: 10.x (`@storybook/angular`)
- **Charts**: `chart.js`

## Rodando localmente

### Pré‑requisitos

- Node.js 20+ (você está usando Node 22, ok)
- npm 10+

### Instalação

```bash
npm install
```

## Usar este repositório como TEMPLATE (starter oficial)

Para iniciar um novo projeto/cliente a partir deste repositório, rode:

```bash
npm run template:init -- --name "Cliente X"
```

O script:
- Atualiza `package.json` (nome do package via slug do nome)
- Atualiza `.env.example` e (opcionalmente) cria/atualiza `.env` com `NG_APP_COMPANY_NAME`
- Atualiza o título do `README.md`

Dicas para times:
- Se já existir `.env`, o script **não sobrescreve** (use `--force` se quiser).
- Após inicializar: rode `npm start` e `npm run storybook` para validar rápido.

### Variáveis de ambiente (nome da empresa no Header)

Crie `.env` na raiz usando o modelo `.env.example`:

```bash
NG_APP_COMPANY_NAME=Vision
```

O projeto usa um passo **build-time** que gera `src/app/core/env/app-env.generated.ts` automaticamente:
- roda em `prestart` e `prebuild`
- script: `node scripts/sync-env.mjs`

### Dev server

```bash
npm start
```

Acesse `http://localhost:4200`.

### Build

```bash
npm run build
```

### SSR (após build)

```bash
npm run serve:ssr:ds-vision
```

## Storybook (documentação visual)

Rodar Storybook:

```bash
npm run storybook
```

Depois, acesse:

- `http://localhost:6006`

Gerar build estático:

```bash
npm run build-storybook
```

## Documentação (guia de uso)

Você pode ler os guias diretamente no repositório:

- **Quando usar cada componente**: `docs/WHEN_TO_USE.md`
- **Design Molecular (teoria + exemplo de formulário)**: `docs/MOLECULAR_DESIGN.md`

Se preferir pelo terminal:

```bash
type docs\\WHEN_TO_USE.md
type docs\\MOLECULAR_DESIGN.md
```

## Estrutura do projeto (alto nível)

- `src/app/design-system/`
  - `atoms/`: componentes base (Input, Button, Checkbox, etc.)
  - `molecules/`: composições pequenas (FormField, MetricCard, etc.)
  - `organisms/`: blocos grandes (Header, Sidebar, Table, etc.)
  - `utils/`: base de CVA (`BaseFormControl`)
- `src/app/features/`: páginas/rotas (auth, dashboard)
- `docs/`: documentação do portfólio e guias de uso

## Notas de qualidade (portfólio)

- Componentes são **standalone** e orientados a **reuso**
- Forms usam `ControlValueAccessor` via `BaseFormControl`
- Estilo segue tokens em `src/styles.scss` + utilitários Tailwind

