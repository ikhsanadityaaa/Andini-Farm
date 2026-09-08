import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ARTICLES, ARTICLES_PUBLISHED, getArticle } from "../data/articles";
import { SITE_URL, ogImage } from "../data/site";
import { Crumbs, usePageMeta, useJsonLd } from "../components/chrome";
import {
  EarTag,
  IconArrow,
  IconStar,
  PhotoFrame,
  Reveal,
  SectionHead,
  StripeBar,
  WAButton,
  cx,
} from "../components/ui";

const CATS = ["SEMUA", ...Array.from(new Set(ARTICLES.map((a) => a.category)))];

/* Format tanggal Indonesia untuk byline artikel */
const formatTanggal = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

/* ================= LIST ================= */
export function ArticlesPage() {
  usePageMeta(
    "Panduan Memilih Sapi: Artikel & Tips | Andini Farm",
    "Kumpulan artikel panduan memilih sapi: cara memilih sapi sehat, memperkirakan bobot, perbedaan Limosin & Simental, tips qurban, aqiqah, penggemukan dan pengiriman.",
    {
      path: "/artikel",
      crumbs: [
        { label: "Beranda", to: "/" },
        { label: "Artikel" },
      ],
    }
  );
  const [cat, setCat] = useState("SEMUA");
  const list = useMemo(
    () => (cat === "SEMUA" ? ARTICLES : ARTICLES.filter((a) => a.category === cat)),
    [cat]
  );

  return (
    <>
      <section className="bg-cream bg-rules border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-12">
          <Crumbs items={[{ label: "Beranda", to: "/" }, { label: "Artikel" }]} />
          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-end">
            <Reveal className="lg:col-span-7">
              <SectionHead
                as="h1"
                kicker="Dari pengalaman di kandang & pasar hewan"
                title="PANDUAN MEMILIH SAPI"
                sub="Supaya Anda membeli sapi dengan tenang, bukan menebak-nebak. Semua ditulis dari pengalaman nyata berjualan sapi sejak 2008."
              />
            </Reveal>
          </div>
          <Reveal delay={80}>
            <div className="mt-9 flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cx(
                    "border-2 px-3.5 py-2 font-mono text-[10px] font-bold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer",
                    cat === c
                      ? "border-ink bg-ranch text-gold shadow-[3px_3px_0_0_#C89B3C]"
                      : "border-ink/30 bg-cream text-ink/60 hover:border-ink hover:text-ink"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-parch">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <div className="border-2 border-ink bg-cream shadow-press divide-y-2 divide-ink">
            {list.map((a) => {
              const idx = ARTICLES.indexOf(a);
              return (
                <Reveal key={a.slug} delay={(idx % 4) * 50}>
                  <Link
                    to={`/artikel/${a.slug}`}
                    className="group/ar grid grid-cols-[56px_1fr] md:grid-cols-[170px_64px_1fr_auto] items-center gap-4 md:gap-6 px-4 md:px-7 py-5 transition-colors duration-200 hover:bg-gold/25"
                  >
                    <span className="hidden md:block w-full aspect-[4/3] border-2 border-ink overflow-hidden">
                      <img
                        src={a.cover}
                        alt={a.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/ar:scale-105"
                      />
                    </span>
                    <span className="font-display text-2xl md:text-3xl text-gold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="flex flex-wrap items-center gap-2 font-mono text-[9px] md:text-[10px] font-bold tracking-[0.22em] uppercase text-leather">
                        <span className="bg-ranch text-gold px-2 py-0.5">{a.category}</span>
                        {a.read} baca
                      </span>
                      <span className="mt-1.5 block font-display text-[15px] md:text-xl leading-snug uppercase text-ranch group-hover/ar:translate-x-1.5 transition-transform duration-200">
                        {a.title}
                      </span>
                      <span className="mt-1 hidden md:block text-[13px] text-ink/60 leading-relaxed">
                        {a.excerpt}
                      </span>
                    </span>
                    <span className="hidden md:grid w-10 h-10 place-items-center border-2 border-ink bg-gold transition-transform duration-200 group-hover/ar:translate-x-1">
                      <IconArrow className="w-4 h-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-6 font-mono text-[11px] tracking-[0.14em] uppercase text-leather">
            {list.length} artikel • diperbarui mengikuti musim & pengalaman lapangan
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ranch text-cream border-t-2 border-ink">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-7">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl uppercase leading-tight">
              SEDANG MENCARI SAPI?{" "}
              <span className="text-gold">CHAT ANDINI FARM</span>
            </h2>
            <p className="mt-3 text-cream/70 max-w-xl text-[15px] leading-relaxed">
              Artikel membantu, tapi melihat sapinya langsung jauh lebih meyakinkan.
              Tanya stok, bobot, harga dan pengiriman via WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <WAButton
              wa="Halo Andini Farm, saya sedang mencari sapi. Bisa dibantu cek stok dan harga?"
              variant="gold"
              size="lg"
              className="shrink-0"
            >
              CHAT WHATSAPP
            </WAButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ================= DETAIL ================= */
export function ArticleDetailPage() {
  const { slug } = useParams();
  const article = getArticle(slug ?? "");
  const published = article?.published ?? ARTICLES_PUBLISHED;

  usePageMeta(
    article ? `${article.title} | Andini Farm` : "Artikel | Andini Farm",
    article?.excerpt,
    {
      path: article ? `/artikel/${article.slug}` : "/artikel",
      image: article ? ogImage(article.cover) : undefined,
      type: "article",
      crumbs: article
        ? [
            { label: "Beranda", to: "/" },
            { label: "Artikel", to: "/artikel" },
            { label: article.title },
          ]
        : [{ label: "Beranda", to: "/" }, { label: "Artikel", to: "/artikel" }],
    }
  );

  /* Article JSON-LD: data mengikuti konten yang benar-benar tampil di halaman */
  useJsonLd(
    `article-${slug ?? "na"}`,
    article
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          image: [ogImage(article.cover)],
          datePublished: published,
          dateModified: published,
          inLanguage: "id-ID",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/artikel/${article.slug}`,
          },
          author: {
            "@type": "Organization",
            name: "Andini Farm",
            url: `${SITE_URL}/tentang-andini-farm`,
          },
          publisher: {
            "@type": "Organization",
            name: "Andini Farm",
            url: SITE_URL,
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/favicon.svg`,
            },
          },
        }
      : null
  );

  if (!article) {
    return (
      <section className="max-w-3xl mx-auto px-5 py-28 text-center">
        <h1 className="font-display text-4xl uppercase text-ranch">Artikel tidak ditemukan</h1>
        <div className="mt-8">
          <Link to="/artikel" className="border-2 border-ink px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.13em] hover:bg-ink hover:text-cream transition-colors">
            LIHAT SEMUA ARTIKEL
          </Link>
        </div>
      </section>
    );
  }

  const idx = ARTICLES.indexOf(article);
  const related = ARTICLES.filter((a) => a.slug !== article.slug)
    .sort((a, b) => {
      const sa = a.category === article.category ? 0 : 1;
      const sb = b.category === article.category ? 0 : 1;
      return sa - sb;
    })
    .slice(0, 2);

  return (
    <>
      <article className="bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 pt-8 md:pt-12">
          <Crumbs
            items={[
              { label: "Beranda", to: "/" },
              { label: "Artikel", to: "/artikel" },
              { label: article.title },
            ]}
          />
        </div>
        <header className="max-w-7xl mx-auto px-5 md:px-8 pt-8 md:pt-10 pb-10 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <EarTag tone="ranch">
                {article.category} • {article.read} baca
              </EarTag>
              <h1 className="mt-6 font-display text-[clamp(1.9rem,4.6vw,3.4rem)] leading-[1.02] uppercase text-ranch">
                {article.title}
              </h1>
              <p className="mt-6 text-base md:text-lg text-ink/75 leading-relaxed">
                {article.excerpt}
              </p>
              <p className="mt-6 font-mono text-[11px] tracking-[0.18em] uppercase text-leather">
                ✦ Ditulis dari pengalaman Andini Farm • {formatTanggal(published)}
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-5">
            <PhotoFrame
              src={article.cover}
              alt={article.title}
              caption={article.category}
              kenburns
              aspect="aspect-[4/3]"
            />
          </Reveal>
        </header>

        <StripeBar />

        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {article.body.map((p, pi) => (
              <Reveal key={pi} as="section" className={cx(pi > 0 && "mt-5")}>
                <p
                  className={cx(
                    "text-[15px] md:text-base leading-relaxed text-ink/80 max-w-2xl",
                    pi === 0 && "dropcap"
                  )}
                >
                  {p}
                </p>
              </Reveal>
            ))}

            {article.checklist && (
              <Reveal as="section" className="mt-10">
                <div className="border-2 border-ink bg-parch shadow-press p-6 md:p-8 max-w-2xl">
                  <p className="flex items-center gap-3 font-mono text-[10px] font-bold tracking-[0.26em] uppercase text-leather">
                    <IconStar className="w-3 h-3 text-gold" /> Cek satu per satu
                  </p>
                  <ul className="mt-5 space-y-3.5">
                    {article.checklist.map((c, ci) => (
                      <li key={ci} className="flex items-start gap-3.5">
                        <span className="shrink-0 w-7 h-7 grid place-items-center border-2 border-ink bg-gold font-mono text-[10px] font-bold mt-0.5">
                          {ci + 1}
                        </span>
                        <p className="text-[15px] leading-relaxed text-ink/85 pt-1">{c}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {/* CTA dalam artikel */}
            <Reveal as="section" className="mt-14">
              <div className="border-2 border-ink bg-ranch text-cream shadow-press-lg p-7 md:p-10 flex flex-col md:flex-row md:items-center gap-7 justify-between relative overflow-hidden">
                <IconStar className="absolute -right-8 -bottom-10 w-44 h-44 text-pine" />
                <div className="relative">
                  <p className="font-mono text-[10px] font-bold tracking-[0.26em] uppercase text-gold">
                    Langkah berikutnya
                  </p>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl uppercase leading-tight">
                    SEDANG MENCARI SAPI? <span className="text-gold">CHAT ANDINI FARM</span>
                  </h2>
                </div>
                <div className="relative shrink-0">
                  <WAButton
                    wa={`Halo Andini Farm, saya baru baca artikel "${article.title}" dan sedang mencari sapi.`}
                    variant="gold"
                    size="lg"
                  >
                    CHAT WHATSAPP
                  </WAButton>
                </div>
              </div>
            </Reveal>
          </div>

          {/* sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-8">
              <Reveal>
                <div className="border-2 border-ink bg-parch shadow-press p-6">
                  <p className="font-mono text-[10px] font-bold tracking-[0.26em] uppercase text-leather">
                    Butuh sapi sekarang?
                  </p>
                  <p className="mt-3 font-display text-lg uppercase leading-snug text-ranch">
                    Tanya stok Limosin, Simental & Pegon Super
                  </p>
                  <div className="mt-5 space-y-3">
                    <WAButton
                      wa="Halo Andini Farm, saya ingin tanya stok sapi yang tersedia."
                      variant="gold"
                      className="w-full"
                    >
                      TANYAKAN STOK
                    </WAButton>
                    <Link
                      to="/jual-sapi"
                      className="flex items-center justify-center gap-2 border-2 border-ink w-full px-4 py-[13px] text-[11px] font-extrabold uppercase tracking-[0.13em] hover:bg-ink hover:text-cream transition-colors"
                    >
                      HALAMAN JUAL SAPI <IconArrow className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <p className="font-mono text-[10px] font-bold tracking-[0.26em] uppercase text-leather mb-4">
                  Baca juga
                </p>
                <div className="space-y-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/artikel/${r.slug}`}
                      className="group/rl flex gap-4 items-center border-2 border-ink bg-cream p-3 shadow-[3px_3px_0_0_#151515] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#151515]"
                    >
                      <span className="w-16 h-14 shrink-0 border-2 border-ink overflow-hidden">
                        <img src={r.cover} alt={r.title} loading="lazy" className="w-full h-full object-cover" />
                      </span>
                      <span>
                        <span className="block font-mono text-[8px] font-bold tracking-[0.2em] uppercase text-leather">
                          {r.category}
                        </span>
                        <span className="mt-0.5 block font-display text-[13px] uppercase leading-snug text-ranch group-hover/rl:text-leather">
                          {r.title}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={160}>
                <Link
                  to="/artikel"
                  className="group/bk inline-flex items-center gap-2 font-extrabold text-[11px] uppercase tracking-[0.14em] text-ranch border-b-2 border-gold pb-1 hover:text-leather transition-colors"
                >
                  <IconArrow className="w-3.5 h-3.5 rotate-180 transition-transform group-hover/bk:-translate-x-1" />
                  KEMBALI KE SEMUA ARTIKEL
                </Link>
              </Reveal>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
