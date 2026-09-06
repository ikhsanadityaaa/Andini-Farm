import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ADDRESS_LINES,
  MAPS_LINK,
  SEO_KEYWORDS,
  WA_DEFAULT,
  WA_DISPLAY,
  waLink,
} from "../data/site";
import { cx, IconArrow, IconCow, IconPin, IconStar, IconWA } from "./ui";

/* ---------------- per-page meta ---------------- */
export function usePageMeta(title: string, desc?: string) {
  useEffect(() => {
    document.title = title;
    const setMeta = (attr: "name" | "property", key: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };
    if (desc) {
      setMeta("name", "description", desc);
      setMeta("property", "og:description", desc);
    }
    setMeta("property", "og:title", title);
    window.scrollTo(0, 0);
  }, [title, desc]);
}

/* inject / remove JSON-LD structured data per halaman */
export function useJsonLd(id: string, data: object | null) {
  useEffect(() => {
    if (!data) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `ld-${id}`;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.getElementById(`ld-${id}`)?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
}

export function Crumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-leather">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-gold">/</span>}
            {it.to ? (
              <Link to={it.to} className="hover:text-ranch transition-colors">
                {it.label}
              </Link>
            ) : (
              <span className="text-ranch">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------------- navigation data ---------------- */
type NavChild = { label: string; to: string };
type NavItem = { label: string; to?: string; children?: NavChild[] };

const NAV: NavItem[] = [
  { label: "Beranda", to: "/" },
  { label: "Jual Sapi", to: "/jual-sapi" },
  {
    label: "Jenis Sapi",
    children: [
      { label: "Sapi Limosin", to: "/sapi-limosin" },
      { label: "Sapi Simental", to: "/sapi-simental" },
      { label: "Sapi Pegon Super", to: "/sapi-pegon" },
    ],
  },
  {
    label: "Kebutuhan",
    children: [
      { label: "Sapi Qurban", to: "/sapi-qurban" },
      { label: "Sapi Aqiqah", to: "/sapi-aqiqah" },
      { label: "Sapi Penggemukan", to: "/sapi-penggemukan" },
    ],
  },
  { label: "Pengiriman", to: "/pengiriman-sapi" },
  { label: "Tentang Kami", to: "/tentang-andini-farm" },
  { label: "Artikel", to: "/artikel" },
];

/* ---------------- header ---------------- */
export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const isActive = (item: NavItem) =>
    item.to
      ? location.pathname === item.to
      : !!item.children?.some((c) => location.pathname === c.to);

  return (
    <header className="sticky top-0 z-50">
      {/* top strip */}
      <div className="hidden md:flex items-center justify-between bg-pine text-cream/80 px-6 lg:px-10 py-2 font-mono text-[10px] tracking-[0.22em] uppercase border-b border-cream/10">
        <span className="flex items-center gap-2">
          <IconPin className="w-3 h-3 text-gold" />
          Japanan, Seyegan • Sleman, Yogyakarta
        </span>
        <span className="flex items-center gap-2">
          <IconStar className="w-2.5 h-2.5 text-gold" />
          Berpengalaman sejak 2008
        </span>
      </div>

      {/* main bar */}
      <div
        className={cx(
          "relative bg-cream border-b-2 border-ink transition-shadow duration-300",
          scrolled && "shadow-[0_6px_0_0_rgba(21,21,21,0.08)]"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between gap-4">
          <Link to="/" className="group flex items-center gap-3 shrink-0" aria-label="Andini Farm, beranda">
            <span className="w-11 h-11 grid place-items-center border-2 border-ink bg-ranch text-gold shadow-[3px_3px_0_0_#151515] transition-transform duration-200 group-hover:-rotate-6">
              <IconCow className="w-7 h-7" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl md:text-2xl text-ranch tracking-wide">
                ANDINI FARM
              </span>
              <span className="mt-1 block font-mono text-[9px] md:text-[10px] font-bold tracking-[0.26em] text-leather uppercase">
                Sapi Berkualitas • Sejak 2008
              </span>
            </span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Navigasi utama">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpen(item.label)}
                onMouseLeave={() => item.children && setOpen(null)}
              >
                {item.to ? (
                  <Link
                    to={item.to}
                    className={cx(
                      "navline font-extrabold text-[12px] tracking-[0.14em] uppercase text-ink transition-colors",
                      isActive(item) && "active text-ranch"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => setOpen(open === item.label ? null : item.label)}
                    className={cx(
                      "navline font-extrabold text-[12px] tracking-[0.14em] uppercase text-ink flex items-center gap-1.5 cursor-pointer",
                      isActive(item) && "active text-ranch"
                    )}
                    aria-expanded={open === item.label}
                  >
                    {item.label}
                    <IconArrow
                      className={cx(
                        "w-3 h-3 rotate-90 transition-transform duration-200",
                        open === item.label && "-rotate-90"
                      )}
                    />
                  </button>
                )}
                {item.children && (
                  <div
                    className={cx(
                      "absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200",
                      open === item.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    )}
                  >
                    <div className="w-60 border-2 border-ink bg-cream shadow-press p-1.5">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="flex items-center justify-between px-3.5 py-2.5 font-bold text-[11px] tracking-[0.12em] uppercase text-ink hover:bg-ranch hover:text-cream transition-colors"
                        >
                          {c.label}
                          <IconStar className="w-2.5 h-2.5 text-gold" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* tombol WhatsApp ada di pill melayang kanan; header cukup menu */}
            <button
              onClick={() => setMobile(true)}
              className="lg:hidden w-11 h-11 grid place-items-center border-2 border-ink bg-ranch text-cream shadow-[3px_3px_0_0_#151515] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer"
              aria-label="Buka menu"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square">
                <path d="M3 6.5h18M3 12h18M9 17.5h12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {mobile && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/60"
            onClick={() => setMobile(false)}
            aria-hidden
          />
          <div className="absolute inset-y-0 right-0 w-[86%] max-w-sm bg-ranch text-cream border-l-2 border-ink overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b-2 border-cream/15">
              <span className="font-display text-lg tracking-wide">ANDINI FARM</span>
              <button
                onClick={() => setMobile(false)}
                className="w-10 h-10 grid place-items-center border-2 border-cream/40 hover:bg-cream hover:text-ranch transition-colors cursor-pointer"
                aria-label="Tutup menu"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </button>
            </div>
            <nav className="p-5 space-y-6" aria-label="Navigasi mobile">
              {NAV.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <p className="font-mono text-[10px] tracking-[0.26em] uppercase text-gold mb-3">
                      {item.label}
                    </p>
                    <div className="space-y-2.5">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="flex items-center gap-2.5 font-extrabold text-sm tracking-[0.1em] uppercase hover:text-gold transition-colors"
                        >
                          <IconStar className="w-2.5 h-2.5 text-gold" /> {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to!}
                    className="block font-display text-2xl uppercase hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link to="/kontak" className="block font-display text-2xl uppercase hover:text-gold transition-colors">
                Kontak
              </Link>
              <div className="pt-4 border-t-2 border-cream/15">
                <p className="font-mono text-[11px] text-cream/60 leading-relaxed">
                  {ADDRESS_LINES.join(", ")}
                  <br />
                  {WA_DISPLAY}
                </p>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- footer ---------------- */
const FOOTER_LINKS = [
  { label: "Jual Sapi", to: "/jual-sapi" },
  { label: "Sapi Limosin", to: "/sapi-limosin" },
  { label: "Sapi Simental", to: "/sapi-simental" },
  { label: "Sapi Pegon", to: "/sapi-pegon" },
  { label: "Sapi Qurban", to: "/sapi-qurban" },
  { label: "Sapi Aqiqah", to: "/sapi-aqiqah" },
  { label: "Sapi Penggemukan", to: "/sapi-penggemukan" },
  { label: "Pengiriman Sapi", to: "/pengiriman-sapi" },
  { label: "Tentang Andini Farm", to: "/tentang-andini-farm" },
  { label: "Artikel", to: "/artikel" },
  { label: "Kontak", to: "/kontak" },
];

export function Footer() {
  return (
    <footer className="bg-pine text-cream border-t-2 border-ink pb-20 lg:pb-0">
      <div className="stripe-bar-thin h-2.5 border-b-2 border-ink" aria-hidden />
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 grid place-items-center border-2 border-gold bg-ranch text-gold">
              <IconCow className="w-8 h-8" />
            </span>
            <span className="font-display text-3xl tracking-wide">ANDINI FARM</span>
          </div>
          <p className="mt-5 font-bold text-gold tracking-[0.06em] uppercase text-sm">
            Jual Sapi Limosin, Simental & Pegon Super
          </p>
          <p className="mt-4 text-cream/70 leading-relaxed max-w-sm text-sm">
            Berpengalaman di dunia peternakan sejak 2008. Menjual sapi untuk
            qurban, aqiqah, penggemukan hingga perdagangan.
          </p>
          <address className="mt-6 not-italic font-mono text-[12px] leading-relaxed text-cream/60">
            {ADDRESS_LINES.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[10px] font-bold tracking-[0.28em] uppercase text-gold">
            Jelajah
          </p>
          <ul className="mt-5 grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-2.5">
            {FOOTER_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-cream/80 hover:text-gold transition-colors"
                >
                  <IconStar className="w-2 h-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-[10px] font-bold tracking-[0.28em] uppercase text-gold">
            Hubungi Kami
          </p>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block font-display text-2xl md:text-[1.7rem] leading-tight text-cream underline decoration-gold decoration-[3px] underline-offset-[6px] hover:text-gold transition-colors"
          >
            {WA_DISPLAY}
          </a>
          <p className="mt-2 text-sm text-cream/60">
            WhatsApp, respon cepat di jam kerja peternakan.
          </p>
          <div className="mt-6 flex flex-wrap gap-3.5">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-cream/50 px-4 py-[13px] text-[11px] font-extrabold uppercase tracking-[0.13em] text-cream hover:bg-cream hover:text-ranch transition-colors"
            >
              <IconPin className="w-3.5 h-3.5" /> BUKA MAPS
            </a>
          </div>
          <p className="mt-6 text-[13px] text-cream/55 leading-relaxed">
            Mau datang langsung ke kandang? Kabari dulu via WhatsApp ya, supaya kami
            bisa siapkan sapi yang mau dilihat.
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/35 leading-relaxed">
            {SEO_KEYWORDS.join("  ✦  ")}
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10px] tracking-[0.16em] uppercase text-cream/45">
          <span>© {new Date().getFullYear()} Andini Farm • Japanan, Seyegan, Sleman</span>
          <span className="flex items-center gap-2">
            <IconStar className="w-2.5 h-2.5 text-gold" /> Sapi Berkualitas Sejak 2008
          </span>
        </div>
      </div>
      {/* spacer for mobile sticky WA bar */}
      <div className="h-20 sm:hidden" aria-hidden />
    </footer>
  );
}

/* ---------------- sticky WhatsApp ---------------- */
export function StickyWA() {
  return (
    <>
      {/* mobile bottom bar */}
      <a
        href={waLink("Halo Andini Farm, saya ingin tanya stok, jenis sapi, harga & pengiriman.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 inset-x-0 z-[60] sm:hidden flex items-center gap-3 bg-gold border-t-2 border-ink px-4 py-3"
      >
        <span className="relative w-11 h-11 shrink-0 grid place-items-center border-2 border-ink bg-ranch text-gold">
          <IconWA className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-ranch border border-gold blink-dot" />
        </span>
        <span className="min-w-0 flex-1 leading-tight">
          <span className="block truncate font-extrabold text-[13px] tracking-[0.1em] uppercase">
            CHAT WHATSAPP
          </span>
          <span className="hidden min-[420px]:block truncate text-[11px] font-medium text-ink/70">
            Tanya stok, jenis sapi, harga & pengiriman
          </span>
        </span>
        <IconArrow className="hidden min-[360px]:block ml-auto w-4 h-4 shrink-0" />
      </a>

      {/* desktop floating pill */}
      <a
        href={waLink("Halo Andini Farm, saya ingin tanya stok, jenis sapi, harga & pengiriman.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group hidden sm:flex fixed bottom-6 right-6 z-[60] items-center gap-3 border-2 border-ink bg-gold pl-3.5 pr-5 py-2.5 shadow-press-lg transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[11px_11px_0_0_#151515]"
      >
        <span className="relative w-10 h-10 grid place-items-center border-2 border-ink bg-ranch text-gold">
          <IconWA className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-ranch border border-gold blink-dot" />
        </span>
        <span className="leading-tight">
          <span className="block font-extrabold text-[12px] tracking-[0.12em] uppercase">
            CHAT WHATSAPP
          </span>
          <span className="block text-[10px] font-medium text-ink/65">
            Tanya stok, jenis sapi, harga & pengiriman
          </span>
        </span>
      </a>
    </>
  );
}

/* ---------------- layout ---------------- */
export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyWA />
      <div className="noise-layer" aria-hidden />
    </div>
  );
}
