import { useTranslation } from "react-i18next";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "./language-switcher";

export function Nav() {
  const { t } = useTranslation();

  const navLinks = [
    { label: t("nav.learn"), href: "#compare" },
    { label: t("nav.offer"), href: "#science" },
    { label: t("nav.account"), href: "#social-proof" },
  ];

  return (
    <nav className="bg-[#1E1E1E] px-10 h-[72px] flex justify-between items-center border-b border-brand-mid sticky top-0 z-100 max-sm:px-4 max-sm:h-12">
      {/* Mobile hamburger */}
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="hidden max-sm:block bg-transparent border-none cursor-pointer p-1 text-brand-light"
            aria-label={t("nav.menu")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <line x1="3" y1="5.5" x2="17" y2="5.5" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="14.5" x2="17" y2="14.5" />
            </svg>
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-brand-white w-64 p-6">
          <SheetTitle className="font-logo text-brand-dark tracking-[0.1em] text-base mb-6">
            {t("nav.logoText")}
          </SheetTitle>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-brand-dark no-underline font-medium tracking-[0.02em] hover:opacity-50 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop left links */}
      <div className="flex gap-7 items-center max-sm:hidden">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[0.75rem] text-brand-light no-underline font-medium tracking-[0.02em] hover:opacity-50 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Logo */}
      <div className="group font-logo text-xl text-brand-light no-underline tracking-[0.1em] max-sm:text-[0.85rem]">
        <span className="px-2 py-1 -mx-1 rounded bg-[#E9E7E2] text-[#1E1E1E]">
          impossible
        </span>{" "}
        <span className="ml-1">powders</span>
      </div>

      {/* Desktop right links */}
      <div className="flex gap-7 items-center max-sm:gap-3">
        <div className="max-sm:hidden">
          <LanguageSwitcher />
        </div>
        <a
          href="#"
          className="bg-brand-light text-brand-dark px-4 py-1.5 rounded-[2px] font-semibold text-[0.72rem] tracking-[0.06em] no-underline hover:opacity-80 transition-opacity"
        >
          {t("nav.shopButton")}
        </a>
      </div>
    </nav>
  );
}
