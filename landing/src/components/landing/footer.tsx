import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/impossibledrink",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/impossiblelabs/impossible-powders",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

function EmailCapture() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email") as string;
    if (!email) return;
    // TODO: wire up EmailJS or backend
    console.log("subscribe:", email);
    setSent(true);
  }

  return (
    <div className="max-w-[900px] mx-auto pb-10 mb-10 border-b border-brand-dark/10 text-center">
      <h4 className="font-display text-[1.15rem] tracking-[0.04em] text-brand-dark mb-1">
        {t("footer.newsletter")}
      </h4>
      <p className="text-[0.78rem] text-brand-muted mb-5">
        {t("footer.newsletterSub")}
      </p>
      {sent ? (
        <p className="text-[0.85rem] text-brand-dark font-medium">
          {t("footer.emailSuccess")}
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex max-w-[360px] mx-auto max-sm:max-w-full"
        >
          <input
            type="email"
            name="email"
            required
            placeholder={t("footer.emailPlaceholder")}
            className="flex-1 min-w-0 px-4 py-2.5 text-[0.82rem] bg-brand-white border border-brand-dark/15 rounded-l-md outline-none focus:border-brand-dark/40 transition-colors placeholder:text-brand-muted/50"
          />
          <button
            type="submit"
            className="px-5 py-2.5 text-[0.82rem] font-medium bg-brand-dark text-brand-light rounded-r-md hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            {t("footer.emailButton")}
          </button>
        </form>
      )}
    </div>
  );
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="block text-[0.78rem] text-brand-muted no-underline mb-2 hover:text-brand-dark transition-colors"
    >
      {label}
    </a>
  );
}

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-mid py-14 px-10 pb-6 max-sm:py-10 max-sm:px-5 max-sm:pb-4">
      <EmailCapture />

      <div className="max-w-[600px] mx-auto grid grid-cols-3 gap-8 max-sm:grid-cols-1 max-sm:gap-7 max-sm:text-center">
        <div>
          <h4 className="font-display text-[0.85rem] tracking-[0.06em] uppercase mb-3 text-brand-dark">
            {t("footer.product")}
          </h4>
          <FooterLink label={t("footer.ingredients")} href="#" />
          <FooterLink label={t("footer.labAnalysis")} href="#" />
          <FooterLink label={t("footer.ministerialAuth")} href="#" />
          <FooterLink label={t("footer.trustpilot")} href="#" />
        </div>
        <div>
          <h4 className="font-display text-[0.85rem] tracking-[0.06em] uppercase mb-3 text-brand-dark">
            {t("footer.legal")}
          </h4>
          <FooterLink label={t("footer.privacy")} href="#" />
          <FooterLink label={t("footer.terms")} href="#" />
        </div>
        <div className="max-sm:flex max-sm:justify-center">
          <div>
            <h4 className="font-display text-[0.85rem] tracking-[0.06em] uppercase mb-3 text-brand-dark">
              {t("footer.social")}
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex w-[36px] h-[36px] items-center justify-center bg-brand-dark text-brand-light rounded-full no-underline hover:opacity-70 transition-opacity"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto mt-10 pt-5 border-t border-brand-dark/10 text-center text-[0.65rem] text-brand-muted">
        Made by{" "}
        <a
          href="https://impossiblelabs.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-dark transition-colors"
        >
          Impossible Labs
        </a>
      </div>
    </footer>
  );
}
