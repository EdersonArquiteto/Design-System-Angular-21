/**
 * Lê NG_APP_COMPANY_NAME do arquivo .env na raiz do projeto e gera
 * src/app/core/env/app-env.generated.ts para uso no cliente/SSR no build da app.
 *
 * Rode automaticamente via npm prestart/prebuild ou manualmente: node scripts/sync-env.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const envPath = path.join(root, '.env');
const outPath = path.join(root, 'src', 'app', 'core', 'env', 'app-env.generated.ts');

const DEFAULT_NAME = 'Vision';

function parseEnvFile(content) {
  const map = {};
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    map[key] = val;
  }
  return map;
}

let companyName = DEFAULT_NAME;

if (fs.existsSync(envPath)) {
  try {
    const raw = fs.readFileSync(envPath, 'utf8');
    const env = parseEnvFile(raw);
    if (env.NG_APP_COMPANY_NAME?.length) {
      companyName = env.NG_APP_COMPANY_NAME;
    }
  } catch (e) {
    console.warn('[sync-env] Falha ao ler .env — usando valor padrão:', e.message);
  }
} else {
  console.warn('[sync-env] Arquivo .env não encontrado em', envPath, '— usando', DEFAULT_NAME);
}

const escaped = companyName.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

const file = `/**
 * Arquivo gerado por scripts/sync-env.mjs — não editar manualmente.
 * Configure NG_APP_COMPANY_NAME no arquivo .env na raiz do projeto.
 */
export const APP_ENV = {
  companyName: '${escaped}',
} as const;
`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, file, 'utf8');
console.log('[sync-env] APP_ENV.companyName =', companyName);
