import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-server/entry-server.js');

const routes = [
  '/',
  '/services/data-analytics',
  '/services/data-science',
  '/services/ai-development',
  '/services/devops',
  '/industries'
];

for (const url of routes) {
  const helmetContext = {};
  const appHtml = render(url, helmetContext);
  
  let html = template.replace('<!--app-html-->', appHtml);
  
  if (helmetContext.helmet) {
    const { helmet } = helmetContext;
    const helmetHtml = `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    `;
    html = html.replace('</head>', `${helmetHtml}</head>`);
  }

  const filePath = `dist${url === '/' ? '/index.html' : `${url}/index.html`}`;
  const dir = path.dirname(toAbsolute(filePath));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(toAbsolute(filePath), html);
  console.log(`Pre-rendered ${filePath}`);
}
