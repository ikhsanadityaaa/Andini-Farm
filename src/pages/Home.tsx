import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ADDRESS_LINES, IMG, MAPS_LINK, waLink } from "../data/site";
import { BREEDS, breedWa } from "../data/breeds";
import { ARTICLES } from "../data/articles";
import { usePageMeta } from "../components/chrome";
import {
  BigCTA,
  Button,
  cx,
  EarTag,
  IconArrow,
  IconPin,
  IconStar,
  IconTruck,
  Marquee,
  NeedChip,
  PhotoFrame,
  Reveal,
  SectionHead,
  Stamp,
  StripeBar,
  WAButton,
} from "../components/ui";

const MARQUEE_ITEMS = [
  "JUAL SAPI HIDUP",
  "LIMOSIN",
  "SIMENTAL",
  "PEGON SUPER",
  "SEJAK 2011",
  "SEYEGAN • SLEMAN • YOGYAKARTA",
  "QURBAN • AQIQAH • PENGGEMUKAN",
  "BISA DIKIRIM KE BERBAGAI WILAYAH",
];

const TRUST = [
  { big: "SEJAK 2011", small: "Pengalaman lebih dari 15 tahun di dunia peternakan" },
  { big: "JARINGAN PETERNAK", small: "Jaringan yang dibangun selama bertahun-tahun" },
  { big: "SAPI HIDUP", small: "Fokus pada penjualan sapi hidup, bukan produk olahan" },
  { big: "YOGYAKARTA", small: "Japanan, Margodadi, Seyegan, Sleman" },
];

const WHY = [
  {
    t: "BERPENGALAMAN SEJAK 2011",
    d: "Lebih dari 15 tahun berkecimpung di dunia peternakan — dari memilih bakalan sampai melepas sapi ke pembeli.",
  },
  {
    t: "JARINGAN PETERNAK",
    d: "Pengalaman bertahun-tahun membangun jaringan dengan peternak dan pelaku usaha sapi di berbagai tempat.",
  },
  {
    t: "PILIHAN JENIS SAPI",
    d: "Limosin, Simental dan Pegon Super — masing-masing dengan karakter dan keunggulannya sendiri.",
  },
  {
    t: "BISA KONSULTASI",
    d: "Belum yakin jenis atau kondisi sapi yang dibutuhkan? Konsultasikan dulu, baru kita cari sapinya bersama.",
  },
  {
    t: "MELAYANI PENGIRIMAN",
    d: "Pengiriman sapi dapat disesuaikan dengan tujuan dan jumlah sapi yang dibeli — ambil sendiri pun boleh.",
  },
];

const NEEDS = [
  {
    t: "UNTUK QURBAN",
    d: "Cari sapi hidup untuk kebutuhan qurban — sehat, cukup umur dan layak sesuai syariat.",
    img: IMG.qurban,
    to: "/sapi-qurban",
    cta: "CARI SAPI QURBAN",
    alt: "Sapi hidup sehat untuk qurban di Sleman Yogyakarta",
  },
  {
    t: "UNTUK AQIQAH",
    d: "Pilihan sapi hidup untuk kebutuhan aqiqah keluarga, dengan bobot yang bisa disesuaikan.",
    img: IMG.aqiqah,
    to: "/sapi-aqiqah",
    cta: "TANYAKAN SAPI AQIQAH",
    alt: "Sapi hidup ukuran sedang untuk aqiqah",
  },
  {
    t: "UNTUK PENGGEMUKAN",
    d: "Sapi untuk peternak dan kebutuhan penggemukan — bakalan dengan kerangka dan kondisi bagus.",
    img: IMG.penggemukan,
    to: "/sapi-penggemukan",
    cta: "TANYAKAN SAPI",
    alt: "Sapi bakalan untuk penggemukan sedang makan di kandang",
  },
  {
    t: "UNTUK DAGANG / USAHA",
    d: "Untuk pedagang atau kebutuhan usaha sapi — kami bantu carikan sesuai perputaran pasar Anda.",
    img: IMG.pasar,
    to: null,
    cta: "HUBUNGI ANDINI FARM",
    alt: "Suasana jual beli sapi di pasar hewan",
  },
];

export default function Home() {
  usePageMeta(
    "Jual Sapi Hidup Limosin, Simental & Pegon Super | Andini Farm",
    "Andini Farm menyediakan sapi hidup Limosin, Simental dan Pegon Super. Berpengalaman sejak 2011 dan berlokasi di Japanan, Seyegan, Sleman, Yogyakarta. Hubungi kami untuk stok, harga dan pengiriman sapi."
  );

  const location = useLocation();
  useEffect(() => {
    const st = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (st) {
      const t = setTimeout(() => {
        document.getElementById(st)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
      return () => clearTimeout(t);
    }
  }, [location.state]);

  const scrollToBreeds = () =>
    document.getElementById("jenis-sapi")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-cream bg-rules">
        <div
          className="pointer-events-none absolute -left-10 bottom-[-6rem] font-display text-[24rem] leading-none text-outline-ink select-none hidden lg:block"
          aria-hidden
        >
          AF
        </div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-14 md:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <EarTag tone="ranch" float>
                Peternakan Sapi • Seyegan, Sleman
              </EarTag>
              <h1 className="mt-7 font-display text-[clamp(2.7rem,7.2vw,5rem)] leading-[0.95] uppercase text-ranch">
                JUAL SAPI{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">HIDUP</span>
                  <span
                    className="absolute left-0 right-0 bottom-[0.08em] h-[0.28em] bg-gold -z-0"
                    aria-hidden
                  />
                </span>{" "}
                BERKUALITAS
              </h1>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[12px] md:text-[13px] font-bold tracking-[0.22em] uppercase text-leather">
                LIMOSIN <IconStar className="w-3 h-3 text-gold" /> SIMENTAL{" "}
                <IconStar className="w-3 h-3 text-gold" /> PEGON SUPER
              </p>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-7 text-base md:text-lg leading-relaxed text-ink/80 max-w-xl">
                <strong className="text-ranch">
                  Berpengalaman di dunia peternakan sejak 2011.
                </strong>{" "}
                Andini Farm menyediakan sapi hidup untuk berbagai kebutuhan — mulai dari
                qurban, aqiqah, penggemukan hingga kebutuhan peternakan dan perdagangan.
              </p>
              <p className="mt-4 flex items-start gap-2.5 text-sm md:text-[15px] text-ink/65 max-w-xl">
                <IconPin className="w-4 h-4 mt-0.5 shrink-0 text-leather" />
                Berbasis di Japanan, Margodadi, Seyegan, Sleman, Yogyakarta — melayani
                pembeli dari berbagai wilayah.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button onClick={scrollToBreeds} variant="green" size="lg" arrow>
                  LIHAT JENIS SAPI
                </Button>
                <WAButton
                  wa="Halo Andini Farm, saya ingin tanya stok sapi yang tersedia."
                  variant="gold"
                  size="lg"
                >
                  CHAT WHATSAPP
                </WAButton>
              </div>
              <p className="mt-6 font-mono text-[11px] tracking-[0.14em] uppercase text-ink/55">
                Fast respon:{" "}
                <a
                  href={waLink("Halo Andini Farm.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ranch font-bold hover:text-leather"
                >
                  +62 853-3137-9462
                </a>{" "}
                — tanya stok, bobot & harga.
              </p>
            </Reveal>
          </div>

          {/* hero photo */}
          <Reveal delay={140} className="lg:col-span-6 relative">
            <PhotoFrame
              src={IMG.heroLimosin}
              alt="Sapi Limosin hidup di kandang Andini Farm Seyegan Sleman"
              caption="LIMOSIN — KANDANG ANDINI FARM, JAPANAN"
              tag="SAPI HIDUP • SIAP TANYA"
              kenburns
              aspect="aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5]"
            />
            <Stamp className="absolute -top-8 -left-5 md:-left-10 w-28 h-28 md:w-40 md:h-40" />
            <div className="absolute -bottom-6 right-4 md:right-8 rotate-2">
              <EarTag tone="ranch">BOBOT & STOK: TANYA VIA WA</EarTag>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      {/* ================= TRUST BAR ================= */}
      <section className="bg-cream border-b-2 border-ink">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t, i) => (
            <Reveal
              key={t.big}
              delay={i * 80}
              className={cx(
                "group p-6 md:p-8 transition-colors duration-300 hover:bg-gold/20",
                i > 0 && "border-l-2 border-ink/15 lg:border-ink/30",
                i >= 2 && "border-t-2 border-ink/15 lg:border-t-0"
              )}
            >
              <span className="font-mono text-[10px] font-bold tracking-[0.24em] text-leather">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg md:text-[1.35rem] leading-tight uppercase text-ranch group-hover:translate-x-1 transition-transform duration-300">
                {t.big}
              </h3>
              <p className="mt-2.5 text-[13px] leading-snug text-ink/65">{t.small}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= SEDANG MENCARI SAPI? ================= */}
      <section className="relative overflow-hidden bg-ranch text-cream bg-dotgrid">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHead
                tone="dark"
                kicker="Bilang saja butuh apa"
                title={
                  <>
                    SEDANG <span className="text-gold">MENCARI SAPI?</span>
                  </>
                }
              />
              <p className="mt-4 font-mono text-[11px] font-bold tracking-[0.26em] uppercase text-cream/60">
                Cari sapi untuk:
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {["QURBAN", "AQIQAH", "PENGGEMUKAN", "PETERNAKAN", "PERDAGANGAN"].map((n, i) => (
                  <Reveal key={n} delay={i * 60} className="inline-block">
                    <NeedChip>{n}</NeedChip>
                  </Reveal>
                ))}
              </div>
              <p className="mt-7 text-base md:text-lg leading-relaxed text-cream/85 max-w-xl">
                Apapun kebutuhan Anda, Andini Farm siap membantu mencari sapi yang sesuai
                dengan <strong className="text-cream">kebutuhan dan budget</strong>. Ceritakan
                saja — sisanya kami yang carikan.
              </p>
              <div className="mt-8">
                <WAButton
                  wa="Halo Andini Farm, saya sedang mencari sapi. Bisa dibantu carikan yang sesuai kebutuhan dan budget saya?"
                  variant="gold"
                  size="lg"
                >
                  TANYAKAN SAPI YANG ANDA CARI
                </WAButton>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-5">
            <PhotoFrame
              src={IMG.kandang}
              alt="Kandang sapi Andini Farm di Seyegan Sleman"
              caption="SUASANA KANDANG ANDINI FARM"
              tag="KANDANG NYATA"
              aspect="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </section>

      {/* ================= JENIS SAPI ================= */}
      <section id="jenis-sapi" className="bg-cream bg-rules scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <SectionHead
                kicker="01 — Jenis Sapi"
                title="PILIH SAPI YANG ANDA CARI"
                sub="Andini Farm menyediakan berbagai jenis sapi hidup untuk berbagai kebutuhan. Semua sapi bisa dilihat langsung — di kandang maupun lewat foto dan video terbaru."
              />
              <WAButton
                wa="Halo Andini Farm, saya mau cek stok sapi yang tersedia."
                variant="outline"
                className="shrink-0"
              >
                CEK SAPI YANG TERSEDIA
              </WAButton>
            </div>
          </Reveal>

          <div className="mt-14 space-y-16 md:space-y-20">
            {BREEDS.map((b, idx) => (
              <Reveal
                key={b.slug}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className={cx("lg:col-span-7", idx % 2 === 1 && "lg:order-2")}>
                  <div className="relative">
                    <span
                      className="absolute -top-7 -left-2 md:-left-5 font-display text-[5.5rem] md:text-[7rem] leading-none text-outline-ink select-none z-0"
                      aria-hidden
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <PhotoFrame
                      src={b.photo}
                      alt={b.photoAlt}
                      caption={b.caption}
                      tag={`SAPI ${b.name}`}
                      aspect="aspect-[4/3] md:aspect-[16/10]"
                      className="relative z-10"
                    />
                  </div>
                </div>
                <div className={cx("lg:col-span-5", idx % 2 === 1 && "lg:order-1")}>
                  <p className="font-mono text-[10px] font-bold tracking-[0.26em] uppercase text-leather flex items-center gap-2">
                    <IconStar className="w-2.5 h-2.5 text-gold" /> SAPI HIDUP —{" "}
                    {b.nameAlt}
                  </p>
                  <h3 className="mt-3 font-display text-3xl md:text-[2.6rem] leading-[1.02] uppercase text-ranch">
                    SAPI {b.name}
                  </h3>
                  <p className="mt-3 font-bold text-sm tracking-wide text-olive uppercase">
                    {b.tagline}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/75">{b.intro}</p>
                  <p className="mt-5 inline-flex items-center gap-2 border-2 border-ink bg-parch px-3.5 py-2 font-mono text-[11px] font-bold tracking-[0.14em] uppercase">
                    <span className="w-2 h-2 rounded-full bg-olive blink-dot" />
                    Harga menyesuaikan — tanyakan harga terbaru
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3.5">
                    <WAButton wa={b.waMessage} variant="gold" size="md">
                      {b.cta}
                    </WAButton>
                    <Link
                      to={`/sapi-${b.slug}`}
                      className="group/l inline-flex items-center gap-2 border-2 border-ink px-5 py-[13px] text-[11px] font-extrabold uppercase tracking-[0.13em] text-ink hover:bg-ranch hover:text-cream transition-colors"
                    >
                      LIHAT HALAMAN
                      <IconArrow className="w-3.5 h-3.5 transition-transform group-hover/l:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <StripeBar />
      </section>

      {/* ================= KENAPA ANDINI FARM ================= */}
      <section className="relative overflow-hidden bg-ranch text-cream">
        <img
          src={IMG.kandang}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ranch via-ranch/92 to-ranch/70" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <SectionHead
                  tone="dark"
                  kicker="02 — Alasan beli di sini"
                  title="KENAPA MEMBELI SAPI DI ANDINI FARM?"
                  sub="Kami bukan marketplace. Kami peternak dan penjual sapi yang bisa Anda ajak ngobrol dulu sebelum membeli."
                />
                <div className="mt-8">
                  <WAButton
                    wa="Halo Andini Farm, saya mau konsultasi sebelum beli sapi."
                    variant="cream"
                    size="lg"
                  >
                    KONSULTASI DULU, GRATIS
                  </WAButton>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ol>
              {WHY.map((w, i) => (
                <Reveal
                  as="li"
                  key={w.t}
                  delay={i * 70}
                  className="group border-b-2 border-cream/12 py-7 md:py-8 grid grid-cols-[auto_1fr] gap-5 md:gap-8 items-start"
                >
                  <span className="font-display text-3xl md:text-5xl text-gold leading-none transition-transform duration-300 group-hover:-translate-y-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg md:text-2xl uppercase tracking-wide text-cream group-hover:text-gold transition-colors duration-300">
                      {w.t}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-cream/70 max-w-xl">
                      {w.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ================= CERITA BAPAK ================= */}
      <section className="bg-cream bg-rules">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5 relative">
            <PhotoFrame
              src={IMG.bapak}
              alt="Peternak Andini Farm bersama sapi di kandang"
              caption="DI KANDANG — TEMPAT SEMUA BERAWAL"
              tag="SEJAK 2011"
              aspect="aspect-[4/5]"
            />
            <Stamp className="absolute -bottom-9 -right-3 md:-right-8 w-28 h-28 md:w-32 md:h-32" />
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHead
                kicker="03 — Cerita kami"
                title="BERPULUH TAHUN HIDUP BERSAMA DUNIA SAPI"
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-7 space-y-5 text-[15px] md:text-base leading-relaxed text-ink/80 max-w-2xl">
                <p className="dropcap">
                  Berawal dari ketertarikan dan pengalaman di dunia peternakan, Andini
                  Farm telah berkecimpung dalam usaha sapi sejak 2011. Dari kandang
                  sederhana di Japanan, usaha ini tumbuh pelan-pelan — sapi demi sapi,
                  pembeli demi pembeli.
                </p>
                <p>
                  Selama bertahun-tahun, pengalaman tersebut juga membangun jaringan
                  dengan peternak dan pelaku usaha sapi di berbagai tempat. Jaringan
                  inilah yang membuat Andini Farm bisa membantu mencari sapi di luar
                  stok kandang ketika kebutuhan Anda spesifik.
                </p>
                <p>
                  Karena itu, Andini Farm tidak hanya menjual sapi — tetapi juga
                  membantu pembeli menemukan sapi yang sesuai dengan kebutuhan mereka.
                </p>
              </div>
              <p className="mt-7 font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-leather">
                — Andini Farm • Japanan, Seyegan
              </p>
              <div className="mt-8">
                <WAButton
                  wa="Halo Andini Farm, saya ingin konsultasi mencari sapi yang sesuai kebutuhan saya."
                  variant="green"
                  size="lg"
                >
                  KONSULTASIKAN SAPI YANG ANDA CARI
                </WAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= KEBUTUHAN ================= */}
      <section className="bg-parch border-y-2 border-ink">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead
              kicker="04 — Kebutuhan pembeli"
              title="CARI SAPI SESUAI KEBUTUHAN"
              sub="Setiap kebutuhan punya kriteria sapi yang berbeda. Mulai dari sini, lalu kabari kami — sisanya kami bantu."
            />
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-7 md:gap-9">
            {NEEDS.map((n, i) => (
              <Reveal
                key={n.t}
                delay={(i % 2) * 110}
                className={cx(i % 2 === 1 && "md:translate-y-6")}
              >
                <div className="group/nd border-2 border-ink bg-cream shadow-press transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0_0_#151515] h-full flex flex-col">
                  <div className="relative overflow-hidden border-b-2 border-ink aspect-[16/9]">
                    <img
                      src={n.img}
                      alt={n.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/nd:scale-[1.06]"
                    />
                    <span className="absolute top-3 left-3 font-mono text-[10px] font-bold tracking-[0.2em] bg-ranch text-gold border-2 border-gold/60 px-2.5 py-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <h3 className="font-display text-xl md:text-2xl uppercase text-ranch">
                      {n.t}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-ink/70 flex-1">
                      {n.d}
                    </p>
                    <div className="mt-5">
                      {n.to ? (
                        <Link
                          to={n.to}
                          className="group/b inline-flex items-center gap-2.5 border-2 border-ink bg-gold px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.13em] shadow-[3px_3px_0_0_#151515] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#151515] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                        >
                          {n.cta}
                          <IconArrow className="w-3.5 h-3.5 transition-transform group-hover/b:translate-x-1" />
                        </Link>
                      ) : (
                        <WAButton
                          wa="Halo Andini Farm, saya butuh sapi untuk dagang / usaha. Bisa dibantu?"
                          variant="green"
                        >
                          {n.cta}
                        </WAButton>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOKASI ================= */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <SectionHead
                kicker="05 — Lokasi kandang"
                title="DARI JAPANAN, SLEMAN UNTUK PEMBELI DI BERBAGAI WILAYAH"
              />
              <address className="mt-8 not-italic border-2 border-ink bg-ranch text-cream shadow-press p-7 md:p-8 max-w-lg">
                <p className="font-mono text-[10px] font-bold tracking-[0.26em] uppercase text-gold">
                  Alamat Kandang
                </p>
                <p className="mt-4 font-display text-xl md:text-2xl leading-snug uppercase">
                  {ADDRESS_LINES.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
                <p className="mt-5 text-sm text-cream/70 leading-relaxed">
                  Mau lihat sapinya langsung? Kabari dulu via WhatsApp supaya kami
                  siapkan waktu dan sapinya.
                </p>
              </address>
              <div className="mt-7 flex flex-wrap gap-3.5">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-ink px-5 py-[13px] text-[11px] font-extrabold uppercase tracking-[0.13em] text-ink hover:bg-ink hover:text-cream transition-colors"
                >
                  <IconPin className="w-3.5 h-3.5" /> BUKA DI GOOGLE MAPS
                </a>
                <WAButton wa="Halo Andini Farm, saya ingin datang melihat sapi di kandang. Kapan bisa?">
                  JADWALKAN KUNJUNGAN
                </WAButton>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-6 order-1 lg:order-2">
            <PhotoFrame
              src={IMG.pasar}
              alt="Aktivitas jual beli sapi di pasar hewan Jawa"
              caption="DARI KANDANG KE PASAR — JARINGAN BERTAHUN-TAHUN"
              tag="JARINGAN PETERNAK"
              aspect="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </section>

      {/* ================= PENGIRIMAN ================= */}
      <section className="relative overflow-hidden bg-ranch text-cream bg-dotgrid border-y-2 border-ink">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5 order-2 lg:order-1">
            <PhotoFrame
              src={IMG.truk}
              alt="Pengiriman sapi hidup dengan truk melewati sawah di Jawa"
              caption="SAPI DALAM PERJALANAN KE PEMBELI"
              tag="MELAYANI PENGIRIMAN"
              aspect="aspect-[4/3]"
            />
          </Reveal>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <SectionHead
                tone="dark"
                kicker="06 — Pengiriman"
                title="SAPI BISA DIKIRIM KE BERBAGAI WILAYAH"
              />
              <p className="mt-5 text-[15px] md:text-base leading-relaxed text-cream/80 max-w-xl">
                Andini Farm melayani pengiriman sapi hidup sesuai tujuan pembelian. Biaya
                pengiriman dapat berbeda berdasarkan lokasi, jumlah sapi dan kondisi
                pengiriman.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {["YOGYAKARTA", "JAWA TENGAH", "JAWA BARAT", "JAWA TIMUR"].map((r, i) => (
                  <span key={r} className="flex items-center gap-3">
                    <span className="border-2 border-gold/70 bg-pine px-4 py-2.5 font-mono text-[11px] font-bold tracking-[0.18em] text-gold">
                      {r}
                    </span>
                    {i < 3 && (
                      <IconTruck className="w-5 h-5 text-cream/50 hidden sm:block" />
                    )}
                  </span>
                ))}
              </div>
              <p className="mt-4 font-mono text-[11px] tracking-[0.14em] uppercase text-cream/50">
                + wilayah lain sesuai kesepakatan
              </p>
              <div className="mt-8">
                <Link
                  to="/pengiriman-sapi"
                  className="group/l mr-4 inline-flex items-center gap-2 font-extrabold text-[12px] uppercase tracking-[0.14em] text-cream border-b-2 border-gold pb-1 hover:text-gold transition-colors"
                >
                  LIHAT DETAIL PENGIRIMAN
                  <IconArrow className="w-3.5 h-3.5 transition-transform group-hover/l:translate-x-1" />
                </Link>
                <WAButton wa="Halo Andini Farm, saya ingin tanya ongkos kirim sapi ke lokasi saya.">
                  TANYAKAN ONGKOS KIRIM
                </WAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= ARTIKEL TEASER ================= */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <SectionHead
                kicker="07 — Panduan"
                title="PANDUAN MEMILIH SAPI"
                sub="Catatan dari pengalaman di kandang dan pasar hewan — supaya Anda beli sapi dengan tenang."
              />
              <Link
                to="/artikel"
                className="group/l inline-flex items-center gap-2 shrink-0 font-extrabold text-[12px] uppercase tracking-[0.14em] text-ranch border-b-2 border-gold pb-1 hover:text-leather transition-colors"
              >
                LIHAT SEMUA ARTIKEL
                <IconArrow className="w-3.5 h-3.5 transition-transform group-hover/l:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 border-2 border-ink bg-cream shadow-press divide-y-2 divide-ink">
            {ARTICLES.slice(0, 4).map((a, i) => (
              <Reveal key={a.slug} delay={i * 60}>
                <Link
                  to={`/artikel/${a.slug}`}
                  className="group/ar grid sm:grid-cols-[64px_1fr_auto] items-center gap-4 px-5 md:px-7 py-5 md:py-6 transition-colors duration-200 hover:bg-gold/25"
                >
                  <span className="font-display text-2xl md:text-3xl text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-mono text-[9px] md:text-[10px] font-bold tracking-[0.24em] uppercase text-leather">
                      {a.category} • {a.read} baca
                    </span>
                    <span className="mt-1 block font-display text-base md:text-xl leading-snug uppercase text-ranch group-hover/ar:translate-x-1.5 transition-transform duration-200">
                      {a.title}
                    </span>
                  </span>
                  <span className="hidden sm:grid w-10 h-10 place-items-center border-2 border-ink bg-gold transition-transform duration-200 group-hover/ar:translate-x-1">
                    <IconArrow className="w-4 h-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <BigCTA />
    </>
  );
}
