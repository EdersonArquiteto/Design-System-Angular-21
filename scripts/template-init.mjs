import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

function printHelp() {
  console.log(`
DS Vision Template Init

Uso:
  npm run template:init -- --name "Cliente X"

Opções:
  --name        Nome exibido no header (NG_APP_COMPANY_NAME) e no README
  --slug        Nome do package (default: slug do --name)
  --force       Sobrescreve .env se já existir

Exemplos:
  npm run template:init -- --name "Vision Bank"
  npm run template:init -- --name "Vision Bank" --slug vision-bank
  npm run template:init -- --name "Vision Bank" --force
`);
}

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) {
      args._.push(a);
      continue;
    }
    const key = a.slice(2);
    const next = argv[i + 1];
    const isBool = key === 'force' || key === 'help';
    if (isBool) {
      args[key] = true;
      continue;
    }
    if (!next || next.startsWith('--')) {
      throw new Error(`Flag --${key} precisa de um valor.`);
    }
    args[key] = next;
    i++;
  }
  return args;
}

function slugify(input) {
  return input
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2) + '\n', 'utf8');
}

function ensureFileExists(filePath, friendlyName) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Não encontrei ${friendlyName} em: ${filePath}`);
  }
}

function setEnvValue(existing, key, value) {
  const lines = existing.split(/\r?\n/);
  let found = false;
  const out = lines.map((l) => {
    if (!l.trim() || l.trim().startsWith('#')) return l;
    const m = l.match(/^([A-Z0-9_]+)=(.*)$/);
    if (!m) return l;
    if (m[1] !== key) return l;
    found = true;
    return `${key}=${value}`;
  });
  if (!found) out.push(`${key}=${value}`);
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  const name = args.name;
  if (!name) {
    printHelp();
    process.exitCode = 1;
    return;
  }

  const repoRoot = process.cwd();
  const pkgPath = path.join(repoRoot, 'package.json');
  const readmePath = path.join(repoRoot, 'README.md');
  const envExamplePath = path.join(repoRoot, '.env.example');
  const envPath = path.join(repoRoot, '.env');

  ensureFileExists(pkgPath, 'package.json');
  ensureFileExists(readmePath, 'README.md');
  ensureFileExists(envExamplePath, '.env.example');

  const slug = (args.slug ?? slugify(name)) || 'app';

  // package.json
  const pkg = readJson(pkgPath);
  pkg.name = slug;
  pkg.version = '0.0.0';
  writeJson(pkgPath, pkg);

  // .env.example
  const envExample = fs.readFileSync(envExamplePath, 'utf8');
  fs.writeFileSync(
    envExamplePath,
    setEnvValue(envExample, 'NG_APP_COMPANY_NAME', name),
    'utf8',
  );

  // .env (optional)
  if (fs.existsSync(envPath) && !args.force) {
    console.log(
      `Arquivo .env já existe. Para sobrescrever, rode novamente com --force.`,
    );
  } else {
    const envCurrent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
    fs.writeFileSync(envPath, setEnvValue(envCurrent, 'NG_APP_COMPANY_NAME', name), 'utf8');
    console.log(`.env atualizado com NG_APP_COMPANY_NAME=${name}`);
  }

  // README title (only first line)
  const readme = fs.readFileSync(readmePath, 'utf8');
  const updated = readme.replace(
    /^#\s+.*$/m,
    `# ${name} — Design System + Dashboard (Angular + Tailwind)`,
  );
  fs.writeFileSync(readmePath, updated, 'utf8');

  console.log(`Template inicializado.`);
  console.log(`- package: ${slug}`);
  console.log(`- company: ${name}`);
  console.log(`Próximo passo: npm install (se necessário) e npm start`);
}

try {
  main();
} catch (err) {
  console.error(err?.message ?? err);
  process.exitCode = 1;
}

