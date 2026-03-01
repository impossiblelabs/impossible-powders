import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "../dist");
const template = readFileSync(resolve(distDir, "index.html"), "utf-8");

const { render } = await import(resolve(distDir, "server/entry-server.js"));

const SUPPORTED_LOCALES = ["en", "it"];
const DEFAULT_LOCALE = "en";
const SITE_URL = "https://impossiblepowders.com";

const META: Record<
  string,
  {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogLocale: string;
    twitterTitle: string;
    twitterDescription: string;
    keywords?: string;
  }
> = {
  en: {
    title: "Impossible Powders | Electrolyte mix for strength training",
    description:
      "The electrolyte powder built for the weight room — not the marathon. 120mg magnesium, 10mg zinc, 1g taurine, 5 electrolytes, 0g sugar. EFSA-authorised. Shop stick packs now.",
    ogTitle: "Impossible Powders — The Electrolyte mix Built for Lifters",
    ogDescription:
      "Every electrolyte mix is built for cardio. This one's built for the weight room. 5 electrolytes, 1g taurine, 120mg magnesium, 0g sugar. EFSA-authorised claims.",
    ogLocale: "en_US",
    twitterTitle: "Impossible Powders — The Electrolyte mix Built for Lifters",
    twitterDescription:
      "Every electrolyte mix is built for cardio. This one's built for the weight room. 5 electrolytes, 1g taurine, 120mg magnesium, 0g sugar.",
    keywords:
      "electrolyte powder strength training, electrolyte mix gym, magnesium zinc supplement lifting, zero sugar electrolytes, taurine electrolyte powder, resistance training hydration, electrolyte powder no sugar",
  },
  it: {
    title: "Impossible Powders | Elettroliti per l'allenamento della forza",
    description:
      "La polvere elettrolitica pensata per la sala pesi — non per la maratona. 120mg magnesio, 10mg zinco, 1g taurina, 5 elettroliti, 0g zucchero. Claims autorizzati EFSA.",
    ogTitle:
      "Impossible Powders — Elettroliti pensati per chi si allena con i pesi",
    ogDescription:
      "Ogni mix elettrolitico è pensato per il cardio. Questo è pensato per la sala pesi. 5 elettroliti, 1g taurina, 120mg magnesio, 0g zucchero. Claims autorizzati EFSA.",
    ogLocale: "it_IT",
    twitterTitle:
      "Impossible Powders — Elettroliti pensati per chi si allena con i pesi",
    twitterDescription:
      "Ogni mix elettrolitico è pensato per il cardio. Questo è pensato per la sala pesi. 5 elettroliti, 1g taurina, 120mg magnesio, 0g zucchero.",
    keywords:
      "elettroliti palestra, integratore magnesio zinco, elettroliti senza zucchero, taurina elettroliti, idratazione allenamento forza, polvere elettrolitica",
  },
};

const hreflangTags = SUPPORTED_LOCALES.map(
  (l) => `  <link rel="alternate" hreflang="${l}" href="${SITE_URL}/${l}/" />`,
).join("\n");
const xDefaultTag = `  <link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`;

for (const locale of SUPPORTED_LOCALES) {
  const html: string = render(locale);
  const m = META[locale];
  const localeUrl = `${SITE_URL}/${locale}/`;

  const page = template
    .replace(/<html lang="\w+"/, `<html lang="${locale}"`)
    // Canonical
    .replace(
      /<link rel="canonical" href="[^"]*"/,
      `<link rel="canonical" href="${localeUrl}"`,
    )
    // Primary meta
    .replace(/(<title>)[^<]*/, `$1${m.title}`)
    .replace(/(<meta\s+name="title"\s+content=")[^"]*/, `$1${m.title}`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*/,
      `$1${m.description}`,
    )
    .replace(/(<meta\s+name="keywords"\s+content=")[^"]*/, `$1${m.keywords}`)
    // Open Graph
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*/, `$1${localeUrl}`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*/, `$1${m.ogTitle}`)
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*/,
      `$1${m.ogDescription}`,
    )
    .replace(
      /(<meta\s+property="og:locale"\s+content=")[^"]*/,
      `$1${m.ogLocale}`,
    )
    // Twitter
    .replace(/(<meta\s+name="twitter:url"\s+content=")[^"]*/, `$1${localeUrl}`)
    .replace(
      /(<meta\s+name="twitter:title"\s+content=")[^"]*/,
      `$1${m.twitterTitle}`,
    )
    .replace(
      /(<meta\s+name="twitter:description"\s+content=")[^"]*/,
      `$1${m.twitterDescription}`,
    )
    // Hreflang + SSR
    .replace("</head>", `${hreflangTags}\n${xDefaultTag}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outDir = resolve(distDir, locale);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "index.html"), page);
  console.log(`  ✓ dist/${locale}/index.html`);
}

// Root redirect with browser language detection
const redirectHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script>
      (function () {
        var lang = (navigator.language || "").slice(0, 2).toLowerCase();
        var supported = ${JSON.stringify(SUPPORTED_LOCALES)};
        var locale = supported.indexOf(lang) !== -1 ? lang : "${DEFAULT_LOCALE}";
        window.location.replace("/" + locale + "/");
      })();
    </script>
    <meta http-equiv="refresh" content="0;url=/${DEFAULT_LOCALE}/" />
    <title>Redirecting…</title>
  </head>
  <body></body>
</html>`;

writeFileSync(resolve(distDir, "index.html"), redirectHtml);
console.log("  ✓ dist/index.html (redirect)");

// Clean SSR build artifacts
rmSync(resolve(distDir, "server"), { recursive: true, force: true });
console.log("  ✓ cleaned dist/server/");
