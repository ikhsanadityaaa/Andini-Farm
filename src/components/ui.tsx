import { ReactNode, useEffect, useRef, useState, CSSProperties } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IMG, waLink } from "../data/site";
import { BREEDS, BELI_STEPS } from "../data/breeds";

export const cx = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(" ");

/* ---------------- scroll reveal ---------------- */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "figure";
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};
  return (
    // @ts-expect-error dynamic tag ref
    <Tag ref={ref} className={cx("reveal", className)} style={style}>
      {children}
    </Tag>
  );
}

/* ---------------- reduced motion hook ---------------- */
export function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setReduce(mq.matches);
    mq.addEventListener?.("change", fn);
    return () => mq.removeEventListener?.("change", fn);
  }, []);
  return reduce;
}

/* ---------------- icons (custom inline SVG) ---------------- */
export const IconStar = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12 1.5l2.6 7.9 7.9 2.6-7.9 2.6L12 22.5l-2.6-7.9-7.9-2.6 7.9-2.6z" />
  </svg>
);

export const IconWA = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export const IconArrow = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" aria-hidden>
    <path d="M4 12h15M13 5.5 19.5 12 13 18.5" />
  </svg>
);

export const IconPin = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M12 21.5S5 15.7 5 10a7 7 0 1 1 14 0c0 5.7-7 11.5-7 11.5Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconTruck = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M1.5 6h13v11h-13zM14.5 10h4l3 3.5V17h-7" />
    <circle cx="6.5" cy="18.5" r="1.9" />
    <circle cx="17.5" cy="18.5" r="1.9" />
  </svg>
);

export const IconCow = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
    <path d="M10 12c-3-.5-5-2.5-5.5-5 3 0 5 .8 6.5 2.5M22 12c3-.5 5-2.5 5.5-5-3 0-5 .8-6.5 2.5" />
    <path d="M10.5 9.5h11V20a5.5 5.5 0 0 1-11 0z" />
    <rect x="12" y="17.5" width="8" height="5.5" rx="2.75" fill="currentColor" stroke="none" />
    <path d="M14.4 20.2h.01M17.6 20.2h.01" stroke="#EDE8DC" strokeWidth="1.4" />
    <path d="M13.4 13.4h.01M18.6 13.4h.01" strokeWidth="2.6" />
  </svg>
);

/* ---------------- button ---------------- */
type BtnProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "gold" | "green" | "cream" | "outline" | "outlineCream";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
  arrow?: boolean;
  wa?: string;
};

export function Button({
  href,
  onClick,
  children,
  variant = "gold",
  size = "md",
  className,
  external,
  arrow,
  wa,
}: BtnProps) {
  const base =
    "group/btn relative inline-flex items-center justify-center gap-2.5 border-2 font-extrabold uppercase tracking-[0.13em] leading-none transition-all duration-200 select-none cursor-pointer";
  const sizes = { md: "px-5 py-[15px] text-[11px]", lg: "px-7 py-[19px] text-xs" };
  const variants = {
    gold: "bg-gold text-ink border-ink shadow-press hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_0_#151515] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
    green: "bg-ranch text-cream border-ink shadow-press hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_0_#151515] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
    cream: "bg-cream text-ranch border-ranch shadow-[4px_4px_0_0_#C89B3C] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_0_#C89B3C] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
    outline: "bg-transparent text-ink border-ink hover:bg-ink hover:text-cream",
    outlineCream: "bg-transparent text-cream border-cream/80 hover:bg-cream hover:text-ranch hover:border-cream",
  };
  const cls = cx(base, sizes[size], variants[variant], className);
  const target = external ? "_blank" : undefined;
  const rel = external ? "noopener noreferrer" : undefined;
  const inner = (
    <>
      {children}
      {arrow && (
        <IconArrow className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
      )}
    </>
  );
  if (href)
    return (
      <a href={wa ? waLink(wa ?? "") : href} onClick={onClick} className={cls} target={wa ? "_blank" : target} rel={wa ? "noopener noreferrer" : rel}>
        {inner}
      </a>
    );
  return (
    <button onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

export function WAButton({
  children = "CHAT WHATSAPP",
  wa,
  variant = "gold",
  size = "md",
  className,
}: {
  children?: ReactNode;
  wa: string;
  variant?: BtnProps["variant"];
  size?: BtnProps["size"];
  className?: string;
}) {
  return (
    <a
      href={waLink(wa)}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(
        "group/btn relative inline-flex items-center justify-center gap-2.5 border-2 font-extrabold uppercase tracking-[0.13em] leading-none transition-all duration-200 select-none",
        size === "md" ? "px-5 py-[15px] text-[11px]" : "px-7 py-[19px] text-xs",
        variant === "gold" &&
          "bg-gold text-ink border-ink shadow-press hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_0_#151515] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        variant === "cream" &&
          "bg-cream text-ranch border-ranch shadow-[4px_4px_0_0_#C89B3C] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_0_#C89B3C] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        variant === "outline" && "bg-transparent text-ink border-ink hover:bg-ink hover:text-cream",
        variant === "outlineCream" &&
          "bg-transparent text-cream border-cream/80 hover:bg-cream hover:text-ranch hover:border-cream",
        variant === "green" &&
          "bg-ranch text-cream border-ink shadow-press hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_0_#151515] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        className
      )}
    >
      <IconWA className="w-4 h-4 transition-transform duration-200 group-hover/btn:rotate-12" />
      {children}
    </a>
  );
}

/* ---------------- ear tag ---------------- */
export function EarTag({
  children,
  tone = "gold",
  className,
  float,
}: {
  children: ReactNode;
  tone?: "gold" | "ranch" | "cream";
  className?: string;
  float?: boolean;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 border-2 border-ink px-3 py-[7px] font-mono text-[10px] font-bold tracking-[0.18em] uppercase",
        tone === "gold" && "bg-gold text-ink",
        tone === "ranch" && "bg-ranch text-cream",
        tone === "cream" && "bg-cream text-ranch",
        float && "tag-float",
        className
      )}
    >
      <span className="w-2 h-2 rounded-full border-[1.5px] border-current opacity-70" />
      {children}
    </span>
  );
}

/* ---------------- rotating stamp ---------------- */
export function Stamp({ className }: { className?: string }) {
  return (
    <div className={cx("pointer-events-none select-none", className)} aria-hidden>
      <svg viewBox="0 0 120 120" className="w-full h-full spin-slow drop-shadow-[3px_3px_0_rgba(21,21,21,0.35)]">
        <defs>
          <path id="stamp-circ" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="#163020" stroke="#C89B3C" strokeWidth="2.5" />
        <circle cx="60" cy="60" r="29" fill="none" stroke="#C89B3C" strokeWidth="1" opacity="0.55" />
        <text
          fill="#EDE8DC"
          style={{ fontFamily: "var(--font-mono)", fontSize: "8.6px", letterSpacing: "1.9px", fontWeight: 700 }}
        >
          <textPath href="#stamp-circ">SEJAK 2008 • SAPI SEHAT • SLEMAN JOGJA •</textPath>
        </text>
        <path d="M60 44l4.4 11.6L76 60l-11.6 4.4L60 76l-4.4-11.6L44 60l11.6-4.4z" fill="#C89B3C" />
      </svg>
    </div>
  );
}

/* ---------------- section head ---------------- */
export function SectionHead({
  kicker,
  title,
  sub,
  tone = "light",
  className,
}: {
  kicker: string;
  title: ReactNode;
  sub?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cx("max-w-3xl", className)}>
      <p
        className={cx(
          "flex items-center gap-3 font-mono text-[11px] font-bold tracking-[0.28em] uppercase",
          tone === "light" ? "text-leather" : "text-gold"
        )}
      >
        <IconStar className="w-3 h-3 shrink-0" />
        {kicker}
      </p>
      <h2
        className={cx(
          "mt-4 font-display text-[clamp(1.9rem,4.6vw,3.4rem)] leading-[1.02] uppercase",
          tone === "light" ? "text-ranch" : "text-cream"
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cx(
            "mt-5 text-base md:text-lg leading-relaxed",
            tone === "light" ? "text-ink/75" : "text-cream/75"
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ---------------- marquee ---------------- */
export function Marquee({
  items,
  className,
  dur = "34s",
}: {
  items: string[];
  className?: string;
  dur?: string;
}) {
  const Row = ({ hidden }: { hidden?: boolean }) => (
    <div className="flex items-center shrink-0" aria-hidden={hidden}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 md:px-8 font-display text-sm md:text-base tracking-[0.08em] whitespace-nowrap">
            {it}
          </span>
          <IconStar className="w-3.5 h-3.5 text-gold shrink-0" />
        </span>
      ))}
    </div>
  );
  return (
    <div
      className={cx(
        "marquee overflow-hidden border-y-2 border-ink bg-ranch text-cream py-[13px]",
        className
      )}
    >
      <div className="marquee-track flex w-max" style={{ ["--mq-dur" as string]: dur }}>
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}

/* ---------------- stripe divider ---------------- */
export const StripeBar = ({ className }: { className?: string }) => (
  <div className={cx("stripe-bar h-3 border-y-2 border-ink", className)} aria-hidden />
);

/* ---------------- framed photo ---------------- */
export function PhotoFrame({
  src,
  alt,
  caption,
  tag,
  kenburns,
  className,
  imgClassName,
  aspect = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
  kenburns?: boolean;
  className?: string;
  imgClassName?: string;
  aspect?: string;
}) {
  return (
    <figure className={cx("group/ph", className)}>
      <div className="relative overflow-hidden border-2 border-ink bg-ranch shadow-press">
        <div className={cx("relative", aspect)}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={cx(
              "absolute inset-0 w-full h-full object-cover",
              kenburns ? "kenburns" : "transition-transform duration-[900ms] ease-out group-hover/ph:scale-[1.06]",
              imgClassName
            )}
          />
        </div>
        {tag && (
          <div className="absolute top-3 left-3">
            <EarTag>{tag}</EarTag>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="flex items-center justify-between gap-3 border-2 border-t-0 border-ink bg-gold px-3.5 py-2 font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-ink">
          <span className="truncate">{caption}</span>
          <IconStar className="w-3 h-3 shrink-0" />
        </figcaption>
      )}
    </figure>
  );
}

/* ---------------- split hero for sub pages ---------------- */
export function SplitHero({
  kicker,
  h1,
  lead,
  photo,
  photoAlt,
  caption,
  tag,
  facts,
  children,
}: {
  kicker: string;
  h1: ReactNode;
  lead: ReactNode;
  photo: string;
  photoAlt: string;
  caption?: string;
  tag?: string;
  facts?: { label: string; value: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-cream bg-rules">
      <div
        className="pointer-events-none absolute -right-8 -top-10 font-display text-[26vw] lg:text-[19rem] leading-none text-outline-ink select-none"
        aria-hidden
      >
        ✦
      </div>
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-14 md:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6 xl:col-span-6">
          <Reveal>
            <EarTag tone="ranch" float>
              {kicker}
            </EarTag>
            <h1 className="mt-6 font-display text-[clamp(2.2rem,5.4vw,4.1rem)] leading-[0.98] uppercase text-ranch">
              {h1}
            </h1>
            <div className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-ink/80">
              {lead}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">{children}</div>
          </Reveal>
          {facts && (
            <Reveal delay={120}>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t-2 border-ink/15 pt-6">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-leather">
                      {f.label}
                    </dt>
                    <dd className="mt-1.5 font-bold text-sm text-ranch">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
        <Reveal delay={100} className="lg:col-span-6 relative">
          <PhotoFrame
            src={photo}
            alt={photoAlt}
            caption={caption}
            tag={tag}
            kenburns
            aspect="aspect-[4/3] lg:aspect-[5/4]"
          />
          <Stamp className="absolute -top-9 -right-4 md:-right-9 w-28 h-28 md:w-36 md:h-36" />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- buy steps ---------------- */
export function BuySteps({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 border-2 border-ink bg-cream shadow-press">
      {BELI_STEPS.map((s, i) => (
        <Reveal
          as="li"
          key={s.title}
          delay={i * 90}
          className={cx(
            "relative p-6 md:p-7 transition-colors duration-300 hover:bg-gold/25",
            i > 0 && "border-t-2 border-ink sm:border-t-0 sm:border-l-2",
            i >= 2 && "sm:border-t-2 lg:border-t-0",
            i === 2 && "sm:border-l-0 lg:border-l-2"
          )}
        >
          <span className="font-display text-4xl text-gold leading-none">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-extrabold text-sm tracking-[0.08em] text-ranch uppercase">
            {s.title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-ink/75">{s.desc}</p>
        </Reveal>
      ))}
    </ol>
  );
}

/* ---------------- price note block ---------------- */
export function PriceBlock({ name, waMessage }: { name: string; waMessage: string }) {
  return (
    <div className="relative overflow-hidden border-2 border-ink bg-ranch text-cream shadow-press-lg">
      <div className="absolute inset-y-0 right-0 w-2 stripe-bar-thin hidden md:block" aria-hidden />
      <div className="grid md:grid-cols-[1.25fr_1fr]">
        <div className="p-8 md:p-12">
          <EarTag tone="cream">KENAPA TIDAK ADA HARGA DI SINI?</EarTag>
          <h3 className="mt-6 font-display text-[clamp(1.7rem,3.4vw,2.7rem)] leading-[1.02] uppercase">
            HARGA <span className="text-gold">MENYESUAIKAN</span>
          </h3>
          <p className="mt-5 text-cream/80 leading-relaxed max-w-lg">
            Harga sapi {name} mengikuti <strong className="text-cream">bobot, kondisi
            sapi dan waktu pembelian</strong>. Karena itu kami tidak memasang harga mati di
            website — supaya angka yang Anda terima benar-benar sesuai dengan sapi yang
            akan Anda beli.
          </p>
          <ul className="mt-6 space-y-2.5">
            {["Stok & bobot terbaru dikirim via WhatsApp", "Bisa lihat foto dan video sapinya dulu", "Harga final jelas — termasuk opsi ongkos kirim"].map(
              (t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-cream/85">
                  <IconStar className="w-3 h-3 text-gold mt-1 shrink-0" />
                  {t}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="border-t-2 md:border-t-0 md:border-l-2 border-cream/15 bg-pine/60 p-8 md:p-12 flex flex-col justify-center gap-5">
          <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-gold">
            Langkah paling cepat:
          </p>
          <p className="font-display text-xl md:text-2xl uppercase leading-snug">
            Tanyakan harga & stok terbaru sapi {name}
          </p>
          <WAButton wa={waMessage} variant="gold" size="lg" className="w-full">
            TANYAKAN HARGA TERBARU
          </WAButton>
          <p className="font-mono text-[11px] text-cream/55">
            Balasan cepat di jam kerja peternakan.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- cross breed links ---------------- */
export function CrossBreeds({ current }: { current: string }) {
  const others = BREEDS.filter((b) => b.slug !== current);
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {others.map((b, i) => (
        <Reveal key={b.slug} delay={i * 100}>
          <Link
            to={`/sapi-${b.slug}`}
            className="group/cb block border-2 border-ink bg-cream shadow-press transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_0_#151515]"
          >
            <div className="relative overflow-hidden border-b-2 border-ink aspect-[16/9]">
              <img
                src={b.photo}
                alt={b.photoAlt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/cb:scale-105"
              />
              <div className="absolute top-3 left-3">
                <EarTag>SIAP DIJUAL</EarTag>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 p-5 md:p-6">
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] text-leather uppercase">
                  Jenis lainnya
                </p>
                <p className="mt-1 font-display text-xl md:text-2xl uppercase text-ranch">
                  SAPI {b.name}
                </p>
              </div>
              <span className="shrink-0 w-11 h-11 grid place-items-center border-2 border-ink bg-gold transition-transform duration-200 group-hover/cb:translate-x-1">
                <IconArrow className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- big final CTA ---------------- */
export function BigCTA({
  title = "SEDANG MENCARI SAPI?",
  sub = "Limosin, Simental, atau Pegon Super?",
  copy = "Lihat jenis sapi yang kami jual atau langsung hubungi Andini Farm untuk menanyakan stok, bobot, harga dan pengiriman.",
  bg = IMG.pasar,
}: {
  title?: string;
  sub?: string;
  copy?: string;
  bg?: string;
}) {
  const navigate = useNavigate();
  const goBreeds = () => {
    const el = document.getElementById("jenis-sapi");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/", { state: { scrollTo: "jenis-sapi" } });
    }
  };
  return (
    <section className="relative overflow-hidden border-t-2 border-ink bg-ranch text-cream">
      <img
        src={bg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-[0.16] kenburns"
      />
      <div className="absolute inset-0 bg-rules-dark" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <Reveal>
            <p className="font-mono text-[11px] font-bold tracking-[0.28em] uppercase text-gold flex items-center gap-3">
              <IconStar className="w-3 h-3" /> LANGSUNG DARI KANDANG
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,6.5vw,4.6rem)] leading-[0.98] uppercase">
              {title}
            </h2>
            <p className="mt-4 font-display text-[clamp(1.1rem,2.4vw,1.6rem)] text-gold uppercase tracking-wide">
              {sub}
            </p>
            <p className="mt-5 max-w-xl text-cream/80 text-base md:text-lg leading-relaxed">
              {copy}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-9 flex flex-wrap gap-4">
              <WAButton
                wa="Halo Andini Farm, saya sedang mencari sapi. Bisa dibantu cek stok, harga dan pengiriman?"
                variant="gold"
                size="lg"
              >
                CHAT WHATSAPP
              </WAButton>
              <button
                onClick={goBreeds}
                className="group/btn relative inline-flex items-center justify-center gap-2.5 border-2 border-cream/80 px-7 py-[19px] text-xs font-extrabold uppercase tracking-[0.13em] text-cream transition-all duration-200 hover:bg-cream hover:text-ranch cursor-pointer"
              >
                LIHAT JENIS SAPI
                <IconArrow className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={160} className="lg:col-span-4 hidden lg:block">
          <Stamp className="w-52 h-52 mx-auto" />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- small need chip ---------------- */
export function NeedChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border-2 border-gold/70 bg-ranch px-4 py-2 font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-cream transition-colors duration-200 hover:bg-gold hover:text-ink hover:border-gold cursor-default">
      <IconStar className="w-2.5 h-2.5 text-gold" />
      {children}
    </span>
  );
}
