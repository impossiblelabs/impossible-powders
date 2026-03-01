import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { createI18nInstance, SUPPORTED_LOCALES, DEFAULT_LOCALE } from "./i18n";
import type { SupportedLocale } from "./i18n";
import App from "./App";
import "./index.css";

function detectLocale(): SupportedLocale {
  const match = window.location.pathname.match(/^\/(\w+)/);
  const segment = match?.[1];
  if (segment && (SUPPORTED_LOCALES as readonly string[]).includes(segment)) {
    return segment as SupportedLocale;
  }
  return DEFAULT_LOCALE;
}

const locale = detectLocale();
const i18n = createI18nInstance(locale);
const rootEl = document.getElementById("root")!;

const app = (
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>
);

if (rootEl.innerHTML.trim()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
