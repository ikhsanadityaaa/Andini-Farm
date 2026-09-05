import { Link, useParams } from "react-router-dom";
import { getBreed } from "../data/breeds";
import { Crumbs, usePageMeta, useJsonLd } from "../components/chrome";
import {
  BigCTA,
  BuySteps,
  CrossBreeds,
  EarTag,
  IconArrow,
  IconStar,
  IconTruck,
  Marquee,
  PriceBlock,
  Reveal,
  SectionHead,
  SplitHero,
  StripeBar,
  WAButton,
} from "../components/ui";

export default function BreedPage({ slug: propSlug }: { slug?: string }) {
  const params = useParams();
  const breed = getBreed(propSlug ?? params.slug ?? "");

  usePageMeta(
    breed?.metaTitle ?? "Jenis Sapi | Andini Farm",
    breed?.metaDesc
  );

  useJsonLd(
    `product-${breed?.slug ?? "na"}`,
    breed
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          name: `Sapi ${breed.name} ${breed.nameAlt !== breed.name ? `(${breed.nameAlt})` : ""}`.trim(),
          description: breed.intro,
          brand: { "@type": "Brand", name: "Andini Farm" },
          category: "Sapi Hidup",
          image: breed.photo,
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "IDR",
            url: "https://wa.me/6285331379462",
          },
        }
      : null
  );

  if (!breed) {
    return (
      <section className="max-w-3xl mx-auto px-5 py-28 text-center">
        <h1 className="font-display text-4xl uppercase text-ranch">
          Jenis sapi tidak ditemukan
        </h1>
        <p className="mt-4 text-ink/70">
          Silakan lihat jenis sapi yang kami jual: Limosin, Simental atau Pegon Super.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="border-2 border-ink px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.13em] hover:bg-ink hover:text-cream transition-colors"
          >
            KEMBALI KE BERANDA
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* hero */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6">
        <Crumbs
          items={[
            { label: "Beranda", to: "/" },
            { label: "Jenis Sapi", to: "/jual-sapi" },
            { label: breed.name },
          ]}
        />
      </div>
      <SplitHero
        kicker={`Peternakan sejak 2008 • Sleman`}
        h1={breed.h1}
        lead={
          <>
            <p className="font-bold text-ranch">{breed.tagline}</p>
            <p className="mt-3">{breed.intro}</p>
          </>
        }
        photo={breed.photo}
        photoAlt={breed.photoAlt}
        caption={breed.caption}
        tag={breed.earTag}
        facts={breed.fakta}
      >
        <WAButton wa={breed.waMessage} variant="gold" size="lg">
          {breed.cta}
        </WAButton>
        <WAButton
          wa={`Halo Andini Farm, saya ingin cek stok sapi ${breed.name} yang tersedia hari ini.`}
          variant="outline"
          size="lg"
        >
          CEK STOK TERSEDIA
        </WAButton>
      </SplitHero>

      <Marquee
        items={[
          `JUAL SAPI ${breed.name}`,
          "SAPI SEHAT & GEMUK ALAMI",
          "SEJAK 2008",
          "SEYEGAN • SLEMAN",
          "BISA DIKIRIM",
          `TANYA HARGA ${breed.nameAlt.toUpperCase()}`,
        ]}
        dur="30s"
      />

      {/* janji beli */}
      <section className="bg-parch border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10px] font-bold tracking-[0.24em] uppercase text-leather mr-1">
            Yang Anda dapat di Andini Farm:
          </span>
          {[
            "SAPI SEHAT & BEBAS PENYAKIT",
            "GEMUK ALAMI",
            "HARGA KOMPETITIF",
            "DICARIKAN SESUAI BUDGET",
            "ANTAR SAMPAI TUJUAN",
            "BISA LIHAT DULU",
          ].map((p) => (
            <span
              key={p}
              className="inline-flex items-center gap-2 border-2 border-ink bg-cream px-3 py-[7px] font-mono text-[10px] font-bold tracking-[0.14em] uppercase transition-colors duration-200 hover:bg-gold cursor-default"
            >
              <IconStar className="w-2.5 h-2.5 text-gold" />
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* karakteristik */}
      <section className="bg-cream bg-rules">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHead
                kicker="Karakteristik"
                title={`MENGENAL SAPI ${breed.name}`}
                sub={`Ini yang membuat sapi ${breed.name} banyak dicari pembeli dan peternak.`}
              />
              <ul className="mt-8 space-y-4">
                {breed.karakteristik.map((k, i) => (
                  <Reveal as="li" key={i} delay={i * 70} className="flex gap-4 items-start">
                    <span className="mt-0.5 shrink-0 w-8 h-8 grid place-items-center border-2 border-ink bg-gold font-mono text-[11px] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[15px] leading-relaxed text-ink/80">{k}</p>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <div className="border-2 border-ink bg-parch shadow-press p-7 md:p-9">
                <EarTag tone="ranch">DARI PENGALAMAN KAMI</EarTag>
                <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink/80">
                  {breed.seo.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-7 border-t-2 border-ink/15 pt-6">
                  <p className="font-mono text-[10px] font-bold tracking-[0.24em] uppercase text-leather">
                    Sering dicari untuk:
                  </p>
                  <ul className="mt-3 grid sm:grid-cols-2 gap-2.5">
                    {breed.kebutuhan.map((k) => (
                      <li key={k} className="flex items-start gap-2.5 text-[13px] font-semibold text-ranch">
                        <IconStar className="w-2.5 h-2.5 text-gold mt-1.5 shrink-0" />
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* bobot */}
      <section className="bg-parch border-y-2 border-ink">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead
              kicker="Pilihan bobot"
              title={`BOBOT & KEBUTUHAN SAPI ${breed.name}`}
              sub="Perkiraan rentang bobot yang umum kami pasarkan. Stok per ekor selalu bergerak — tanyakan kondisi terbaru sebelum memutuskan."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 overflow-x-auto border-2 border-ink bg-cream shadow-press">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="bg-ranch text-cream">
                    <th className="px-6 py-4 font-mono text-[10px] font-bold tracking-[0.22em] uppercase">
                      Perkiraan Bobot
                    </th>
                    <th className="px-6 py-4 font-mono text-[10px] font-bold tracking-[0.22em] uppercase">
                      Umumnya Untuk
                    </th>
                    <th className="px-6 py-4 font-mono text-[10px] font-bold tracking-[0.22em] uppercase">
                      Catatan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {breed.bobot.map((b, i) => (
                    <tr
                      key={b.range}
                      className="border-t-2 border-ink/10 hover:bg-gold/15 transition-colors"
                    >
                      <td className="px-6 py-5 font-display text-lg md:text-xl text-ranch whitespace-nowrap">
                        {b.range}
                      </td>
                      <td className="px-6 py-5 text-sm font-bold text-ink/85">{b.use}</td>
                      <td className="px-6 py-5 text-sm text-ink/65">{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 font-mono text-[11px] tracking-[0.14em] uppercase text-leather">
              * Bobot aktual per ekor bisa berbeda. Kami kirim foto & video sapi yang
              tersedia sebelum Anda memutuskan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* harga */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <PriceBlock name={breed.nameAlt} waMessage={breed.waMessage} />
          </Reveal>
        </div>
      </section>

      <StripeBar />

      {/* cara membeli */}
      <section className="bg-cream bg-rules">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead
              kicker="Cara membeli"
              title={`CARA BELI SAPI ${breed.nameAlt.toUpperCase()} DI ANDINI FARM`}
              sub="Sederhana dan jelas — dari chat pertama sampai sapi tiba di lokasi Anda."
            />
          </Reveal>
          <div className="mt-12">
            <BuySteps />
          </div>
        </div>
      </section>

      {/* pengiriman */}
      <section className="bg-ranch text-cream bg-dotgrid">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] font-bold tracking-[0.26em] uppercase text-gold">
                <IconTruck className="w-5 h-5" /> Pengiriman sapi {breed.nameAlt}
              </p>
              <h3 className="mt-4 font-display text-2xl md:text-3xl uppercase leading-tight">
                SAPI BISA DIKIRIM KE BERBAGAI WILAYAH
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-cream/80 max-w-xl">
                Pembeli dari luar Sleman dan Yogyakarta tetap bisa beli sapi{" "}
                {breed.nameAlt}. Pengiriman memakai kendaraan ternak yang sesuai, dan
                biayanya menyesuaikan jarak, jumlah sapi serta kondisi perjalanan.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="md:col-span-5 flex flex-wrap gap-4 md:justify-end">
            <Link
              to="/pengiriman-sapi"
              className="group/l inline-flex items-center gap-2 border-2 border-cream/70 px-5 py-[15px] text-[11px] font-extrabold uppercase tracking-[0.13em] text-cream hover:bg-cream hover:text-ranch transition-colors"
            >
              DETAIL PENGIRIMAN
              <IconArrow className="w-3.5 h-3.5 transition-transform group-hover/l:translate-x-1" />
            </Link>
            <WAButton wa="Halo Andini Farm, saya ingin tanya ongkos kirim sapi ke lokasi saya.">
              TANYAKAN ONGKOS KIRIM
            </WAButton>
          </Reveal>
        </div>
      </section>

      {/* jenis lain */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead
              kicker="Bandingkan"
              title="JENIS SAPI LAINNYA"
              sub="Masih menimbang-nimbang? Lihat juga jenis sapi lain yang tersedia di Andini Farm."
            />
          </Reveal>
          <div className="mt-10">
            <CrossBreeds current={breed.slug} />
          </div>
        </div>
      </section>

      <BigCTA
        title={`MAU LIHAT SAPI ${breed.name}?`}
        sub="Stok bergerak setiap minggu — cek yang tersedia hari ini."
        copy="Hubungi Andini Farm untuk menanyakan stok, bobot, harga dan pengiriman sapi. Bisa juga datang langsung ke kandang di Japanan, Seyegan."
        bg={breed.photo}
      />
    </>
  );
}

