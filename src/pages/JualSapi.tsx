import { Link } from "react-router-dom";
import { IMG, waLink } from "../data/site";
import { BREEDS } from "../data/breeds";
import { Crumbs, usePageMeta } from "../components/chrome";
import {
  BigCTA,
  BuySteps,
  EarTag,
  IconArrow,
  IconStar,
  Marquee,
  PriceBlock,
  Reveal,
  SectionHead,
  SplitHero,
  StripeBar,
  WAButton,
} from "../components/ui";

const FAQ = [
  {
    q: "Berapa harga sapi di Andini Farm?",
    a: "Harga mengikuti bobot, jenis dan kondisi sapi, serta waktu pembelian. Kami tidak memasang harga mati — tanyakan via WhatsApp untuk harga terbaru sesuai sapi yang tersedia.",
  },
  {
    q: "Apakah bisa melihat sapi sebelum membeli?",
    a: "Bisa. Datang langsung ke kandang di Japanan, Seyegan, atau minta foto dan video terbaru sapi yang tersedia lewat WhatsApp.",
  },
  {
    q: "Bisa kirim ke luar kota?",
    a: "Bisa. Pengiriman melayani Yogyakarta, Jawa Tengah, Jawa Barat, Jawa Timur dan wilayah lain sesuai kesepakatan. Ongkos kirim menyesuaikan jarak dan jumlah sapi.",
  },
  {
    q: "Apakah sapi qurbannya sudah poel dan memenuhi syarat?",
    a: "Sapi qurban yang kami siapkan sudah cukup umur (poel), sehat dan tidak cacat. Kami paham syaratnya — Anda tinggal memilih.",
  },
  {
    q: "Sapinya sehat dan terawat?",
    a: "Iya. Sapi dirawat dengan pakan layak dan dipantau setiap hari. Yang sedang kurang sehat tidak kami pasarkan — reputasi kandang taruhannya.",
  },
  {
    q: "Saya belum tahu butuh sapi yang seperti apa. Bisa dibantu?",
    a: "Justru itu tugas kami. Ceritakan kebutuhan dan budget Anda — kami bantu carikan jenis dan ukuran sapi yang paling pas.",
  },
];

const JANJI_STRIP = [
  "SAPI SEHAT & BEBAS PENYAKIT",
  "GEMUK ALAMI",
  "HARGA PALING KOMPETITIF",
  "DICARIKAN SESUAI BUDGET",
  "ANTAR SAMPAI TUJUAN",
  "BISA LIHAT DULU, BARU DEAL",
];

export default function JualSapi() {
  usePageMeta(
    "Jual Sapi Berkualitas Sleman Yogyakarta | Andini Farm",
    "Jual sapi Limosin, Simental & Pegon Super di Sleman, Yogyakarta. Sehat, gemuk alami, harga kompetitif. Untuk qurban, aqiqah, penggemukan & dagang — tanya stok & harga via WhatsApp."
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6">
        <Crumbs items={[{ label: "Beranda", to: "/" }, { label: "Jual Sapi" }]} />
      </div>
      <SplitHero
        kicker="Jual Sapi • Sejak 2011"
        h1="JUAL SAPI BERKUALITAS"
        lead={
          <>
            <p>
              Andini Farm menyediakan sapi pilihan untuk berbagai kebutuhan dengan
              pengalaman di dunia peternakan sejak 2011 — Limosin, Simental dan Pegon
              Super, dari kandang di Japanan, Seyegan, Sleman, Yogyakarta.
            </p>
            <p className="mt-3">
              Untuk <strong className="text-ranch">qurban, aqiqah, penggemukan</strong>{" "}
              sampai <strong className="text-ranch">perdagangan</strong> — ceritakan
              kebutuhan Anda, kami bantu carikan sapinya.
            </p>
          </>
        }
        photo={IMG.kandang}
        photoAlt="Kandang sapi Andini Farm di Japanan Seyegan Sleman"
        caption="KANDANG ANDINI FARM — JAPANAN, SEYEGAN"
        tag="SAPI SEHAT"
        facts={[
          { label: "JENIS SAPI", value: "Limosin • Simental • Pegon Super" },
          { label: "PENGALAMAN", value: "Sejak 2011" },
          { label: "LOKASI", value: "Seyegan, Sleman, Yogyakarta" },
          { label: "PEMBELI", value: "Berbagai wilayah, bisa kirim" },
        ]}
      >
        <WAButton
          wa="Halo Andini Farm, saya ingin tanya sapi yang tersedia untuk dibeli."
          variant="gold"
          size="lg"
        >
          TANYAKAN SAPI YANG TERSEDIA
        </WAButton>
        <Link
          to="/tentang-andini-farm"
          className="group/l inline-flex items-center gap-2 border-2 border-ink px-6 py-[17px] text-xs font-extrabold uppercase tracking-[0.13em] text-ink hover:bg-ink hover:text-cream transition-colors"
        >
          TENTANG KAMI
          <IconArrow className="w-3.5 h-3.5 transition-transform group-hover/l:translate-x-1" />
        </Link>
      </SplitHero>

      <Marquee
        items={[
          "JUAL SAPI SLEMAN",
          "JUAL SAPI YOGYAKARTA",
          "SAPI SEHAT",
          "GEMUK ALAMI",
          "LIMOSIN",
          "SIMENTAL",
          "PEGON SUPER",
          "QURBAN • AQIQAH • PENGGEMUKAN",
        ]}
      />

      {/* janji strip */}
      <section className="bg-parch border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10px] font-bold tracking-[0.24em] uppercase text-leather mr-1">
            Janji kami ke pembeli:
          </span>
          {JANJI_STRIP.map((p) => (
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

      {/* jenis sapi ringkas */}
      <section className="bg-cream bg-rules">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead
              kicker="Jenis yang kami jual"
              title="TIGA JENIS, SATU STANDAR PERAWATAN"
              sub="Setiap jenis punya karakter dan penggemarnya sendiri. Klik untuk melihat halaman lengkapnya."
            />
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-7">
            {BREEDS.map((b, i) => (
              <Reveal key={b.slug} delay={i * 90}>
                <Link
                  to={`/sapi-${b.slug}`}
                  className="group/br block h-full border-2 border-ink bg-cream shadow-press transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_0_#151515]"
                >
                  <div className="relative overflow-hidden border-b-2 border-ink aspect-[4/3]">
                    <img
                      src={b.photo}
                      alt={b.photoAlt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/br:scale-105"
                    />
                    <span className="absolute bottom-3 left-3">
                      <EarTag>{b.name}</EarTag>
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl uppercase text-ranch">
                      SAPI {b.name}
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-ink/70">
                      {b.tagline}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 font-extrabold text-[11px] uppercase tracking-[0.13em] text-leather group-hover/br:text-ranch">
                      LIHAT SAPI {b.nameAlt.toUpperCase()}
                      <IconArrow className="w-3.5 h-3.5 transition-transform group-hover/br:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* kebutuhan */}
      <section className="bg-ranch text-cream bg-dotgrid border-y-2 border-ink">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHead
                tone="dark"
                kicker="Sapi untuk apa?"
                title="SATU KANDANG, BANYAK KEBUTUHAN"
                sub="Pembeli datang dengan tujuan berbeda-beda — dan kriteria sapinya ikut berbeda. Kami bantu sesuaikan."
              />
              <div className="mt-8">
                <WAButton
                  wa="Halo Andini Farm, saya belum yakin jenis sapi yang cocok. Bisa konsultasi dulu?"
                  variant="cream"
                  size="lg"
                >
                  BANTU PILIHKAN SAPI
                </WAButton>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {[
              { t: "SAPI QURBAN", d: "Sehat, poel dan layak syariat.", to: "/sapi-qurban", img: IMG.qurban },
              { t: "SAPI AQIQAH", d: "Bobot pas untuk keluarga.", to: "/sapi-aqiqah", img: IMG.aqiqah },
              { t: "SAPI PENGGEMUKAN", d: "Bakalan dengan kerangka bagus.", to: "/sapi-penggemukan", img: IMG.penggemukan },
              { t: "DAGANG / USAHA", d: "Sapi dengan perputaran cepat.", to: null, img: IMG.pasar },
            ].map((k, i) => (
              <Reveal key={k.t} delay={i * 80}>
                {k.to ? (
                  <Link
                    to={k.to}
                    className="group/k flex items-center gap-4 border-2 border-cream/25 bg-pine/50 p-4 transition-all duration-200 hover:border-gold hover:bg-pine"
                  >
                    <span className="w-16 h-16 shrink-0 border-2 border-cream/25 overflow-hidden">
                      <img src={k.img} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-base uppercase text-cream group-hover/k:text-gold transition-colors">
                        {k.t}
                      </span>
                      <span className="block text-[12px] text-cream/60 mt-0.5">{k.d}</span>
                    </span>
                    <IconArrow className="w-4 h-4 text-gold transition-transform group-hover/k:translate-x-1" />
                  </Link>
                ) : (
                  <a
                    href={waLink("Halo Andini Farm, saya butuh sapi untuk dagang / usaha.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/k flex items-center gap-4 border-2 border-cream/25 bg-pine/50 p-4 transition-all duration-200 hover:border-gold hover:bg-pine"
                  >
                    <span className="w-16 h-16 shrink-0 border-2 border-cream/25 overflow-hidden">
                      <img src={k.img} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-base uppercase text-cream group-hover/k:text-gold transition-colors">
                        {k.t}
                      </span>
                      <span className="block text-[12px] text-cream/60 mt-0.5">{k.d}</span>
                    </span>
                    <IconArrow className="w-4 h-4 text-gold transition-transform group-hover/k:translate-x-1" />
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* harga */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <PriceBlock
              name="Limosin, Simental & Pegon"
              waMessage="Halo Andini Farm, saya ingin tanya harga sapi terbaru beserta stoknya."
            />
          </Reveal>
        </div>
      </section>

      {/* SEO text */}
      <section className="bg-parch border-t-2 border-ink/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHead
                kicker="Sekilas info"
                title="BELI SAPI DI SINI, ENAKNYA DI MANA?"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-5 text-[15px] leading-relaxed text-ink/80">
            <Reveal delay={80}>
              <p>
                Kalau Anda mencari <strong>jual sapi Sleman</strong> atau{" "}
                <strong>jual sapi Yogyakarta</strong>, Andini Farm adalah peternakan dan
                penjual sapi yang berbasis di Japanan, Margodadi, Seyegan, Sleman. Kami
                berkecimpung di dunia sapi sejak 2011 — memahami sapi bukan dari brosur,
                tapi dari kandang dan pasar hewan.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p>
                Jenis yang kami pasarkan: <strong>sapi Limosin</strong> untuk yang
                mencari tubuh besar dan berotot, <strong>sapi Simental</strong> dengan
                rangka besar dan pertumbuhan cepat, serta{" "}
                <strong>sapi Pegon Super</strong> yang adaptif dan ekonomis. Semuanya
                bisa untuk qurban, aqiqah, penggemukan maupun perdagangan — dan
                semuanya sehat, gemuk alami, serta bisa dicarikan sesuai budget Anda.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Soal <strong>harga sapi</strong>, kami jujur saja: harganya menyesuaikan
                bobot dan kondisi per ekor, dan kami jaga tetap kompetitif karena sapi
                berasal dari kandang sendiri serta jaringan peternak sejak 2011. Soal{" "}
                <strong>pengiriman sapi</strong>, kami melayani berbagai wilayah di
                Pulau Jawa — antar sampai tujuan dengan ongkos yang jelas di depan.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream bg-rules border-t-2 border-ink/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead
              kicker="Sering ditanyakan"
              title="SEBELUM ANDA MENANYA, MUNGKIN INI JAWABANNYA"
            />
          </Reveal>
          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            {FAQ.map((f, i) => (
              <Reveal
                key={f.q}
                delay={(i % 2) * 90}
                className="border-2 border-ink bg-cream p-6 md:p-7 shadow-press"
              >
                <p className="flex items-start gap-3 font-display text-base md:text-lg uppercase leading-snug text-ranch">
                  <IconStar className="w-3.5 h-3.5 text-gold mt-1.5 shrink-0" />
                  {f.q}
                </p>
                <p className="mt-3.5 text-[14px] leading-relaxed text-ink/70 pl-6">
                  {f.a}
                </p>
              </Reveal>
            ))}
            <Reveal delay={180} className="border-2 border-ink bg-ranch text-cream p-6 md:p-7 shadow-press flex flex-col justify-center">
              <p className="font-mono text-[10px] font-bold tracking-[0.26em] uppercase text-gold">
                Pertanyaan lain?
              </p>
              <p className="mt-3 font-display text-xl uppercase leading-snug">
                Tanya langsung, lebih cepat jelas
              </p>
              <div className="mt-6">
                <WAButton
                  wa="Halo Andini Farm, saya ada pertanyaan soal pembelian sapi."
                  variant="gold"
                >
                  CHAT WHATSAPP
                </WAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StripeBar />

      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead
              kicker="Alur pembelian"
              title="CARA MEMBELI SAPI DI ANDINI FARM"
            />
          </Reveal>
          <div className="mt-12">
            <BuySteps />
          </div>
        </div>
      </section>

      <BigCTA
        title="SIAP MELIHAT SAPI?"
        sub="Stok, bobot, harga & pengiriman — semua via satu chat."
        bg={IMG.heroLimosin}
      />
    </>
  );
}
