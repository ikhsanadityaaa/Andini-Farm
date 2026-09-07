import { useParams, Link } from "react-router-dom";
import { IMG, ogImage } from "../data/site";
import { Crumbs, usePageMeta } from "../components/chrome";
import {
  BigCTA,
  EarTag,
  IconArrow,
  Marquee,
  PriceBlock,
  Reveal,
  SectionHead,
  SplitHero,
  WAButton,
} from "../components/ui";

type Need = {
  slug: string;
  h1: string;
  kicker: string;
  photo: string;
  photoAlt: string;
  caption: string;
  tag: string;
  lead: string;
  points: { t: string; d: string }[];
  tips: string[];
  tipsTitle: string;
  cta: string;
  wa: string;
  metaTitle: string;
  metaDesc: string;
};

const NEEDS: Need[] = [
  {
    slug: "qurban",
    h1: "JUAL SAPI QURBAN LIMOSIN, SIMENTAL & PEGON",
    kicker: "Kebutuhan • Qurban",
    photo: IMG.qurban,
    photoAlt: "Sapi sehat untuk qurban dari peternakan Sleman Yogyakarta",
    caption: "SAPI QURBAN, SEHAT & CUKUP UMUR",
    tag: "QURBAN",
    lead:
      "Cari sapi untuk kebutuhan qurban? Andini Farm menyiapkan sapi qurban yang sehat, cukup umur dan memenuhi syarat, dari Limosin jumbo sampai Pegon yang lebih ekonomis.",
    points: [
      {
        t: "MEMENUHI SYARAT QURBAN",
        d: "Sapi sudah poel (cukup umur), sehat, tidak cacat dan tidak kurus. Kami paham syaratnya, jadi Anda tinggal memilih dengan tenang.",
      },
      {
        t: "PILIHAN JENIS & UKURAN",
        d: "Limosin untuk yang mencari ukuran besar dan gagah, Simental untuk badan berisi, Pegon untuk budget yang lebih hemat.",
      },
      {
        t: "COCOK UNTUK PATUNGAN",
        d: "Satu sapi untuk patungan hingga tujuh orang. Kami bantu sesuaikan bobotnya supaya pembagian dagingnya pantas.",
      },
      {
        t: "BISA TITIP RAWAT",
        d: "Booking dari jauh hari, sapi tetap dirawat di kandang kami sampai mendekati Idul Adha, lalu dikirim ke lokasi penyembelihan.",
      },
      {
        t: "DIKIRIM KE LOKASI",
        d: "Sapi bisa diantar ke masjid, panitia atau rumah Anda. Ongkos kirim menyesuaikan jarak dan jumlah sapi.",
      },
    ],
    tipsTitle: "Checklist sebelum deal sapi qurban",
    tips: [
      "Pesan 1–2 bulan sebelum Idul Adha, pilihan lebih banyak, harga lebih tenang",
      "Minta video terbaru: gigi (poel), cara berjalan dan kondisi keseluruhan",
      "Sepakati harga final, sudah termasuk ongkos kirim atau belum",
      "Tentukan tanggal kirim mendekati hari H supaya sapi tidak stres",
      "Simpan semua kesepakatan di chat sebagai pegangan dua pihak",
    ],
    cta: "CARI SAPI QURBAN",
    wa: "Halo Andini Farm, saya sedang mencari sapi untuk QURBAN. Bisa dibantu carikan sesuai budget?",
    metaTitle: "Jual Sapi Qurban Sehat Sleman Yogyakarta | Andini Farm",
    metaDesc:
      "Jual sapi qurban Limosin, Simental & Pegon di Seyegan, Sleman, Yogyakarta. Sehat, cukup umur, bisa kirim. Tanya stok via WhatsApp.",
  },
  {
    slug: "aqiqah",
    h1: "JUAL SAPI AQIQAH, BOBOT BISA DISESUAIKAN",
    kicker: "Kebutuhan • Aqiqah",
    photo: IMG.aqiqah,
    photoAlt: "Sapi ukuran sedang untuk aqiqah dari peternakan Sleman",
    caption: "SAPI AQIQAH, UKURAN PAS UNTUK KELUARGA",
    tag: "AQIQAH",
    lead:
      "Pilihan sapi untuk kebutuhan aqiqah. Satu ekor sapi boleh untuk aqiqah, dan kami bantu carikan bobot yang pas dengan kebutuhan keluarga Anda.",
    points: [
      {
        t: "SATU SAPI UNTUK AQIQAH",
        d: "Mayoritas ulama membolehkan satu sapi untuk aqiqah, praktis untuk keluarga besar atau berbagi lebih luas.",
      },
      {
        t: "BOBOT FLEKSIBEL",
        d: "Rentang 200–300 kg biasanya paling pas untuk aqiqah. Tidak perlu memaksakan sapi jumbo, yang penting sehat dan layak.",
      },
      {
        t: "PILIHAN JENIS HEMAT",
        d: "Pegon Super sering jadi pilihan karena harganya bersahabat dengan kondisi tetap sehat. Limosin dan Simental ukuran kecil juga tersedia.",
      },
      {
        t: "ANTAR SESUAI JADWAL",
        d: "Sampaikan tanggal acara (hari ke-7, 14 atau 21). Sapi dikirim tepat waktu ke rumah atau ke jasa catering aqiqah Anda.",
      },
    ],
    tipsTitle: "Yang sering ditanyakan soal sapi aqiqah",
    tips: [
      "Apakah boleh aqiqah dengan sapi? Boleh, selama sehat dan tidak cacat",
      "Berapa bobot yang wajar? 200–300 kg sudah sangat memadai",
      "Kapan dikirim? Sesuai tanggal acara yang Anda sampaikan saat memesan",
      "Bisa sekalian potong? Kami antar sapinya, pemotongan di tempat Anda atau jasa catering",
    ],
    cta: "TANYAKAN SAPI AQIQAH",
    wa: "Halo Andini Farm, saya mencari sapi untuk AQIQAH. Bisa info stok dan harganya?",
    metaTitle: "Jual Sapi Aqiqah Sleman Yogyakarta | Andini Farm",
    metaDesc:
      "Jual sapi aqiqah berbagai bobot di Seyegan, Sleman, Yogyakarta. Harga menyesuaikan, tanya stok & harga via WhatsApp.",
  },
  {
    slug: "penggemukan",
    h1: "JUAL SAPI BAKALAN UNTUK PENGGEMUKAN",
    kicker: "Kebutuhan • Penggemukan",
    photo: IMG.penggemukan,
    photoAlt: "Sapi bakalan untuk penggemukan sedang makan di kandang Andini Farm",
    caption: "BAKALAN PENGGEMUKAN, MAKAN LAHAP",
    tag: "PENGGEMUKAN",
    lead:
      "Sapi untuk peternak dan kebutuhan penggemukan. Kami bantu carikan bakalan dengan kerangka bagus dan kondisi sehat, karena salah pilih bakalan, program bisa rugi.",
    points: [
      {
        t: "KERANGKA YANG BAGUS",
        d: "Kami prioritaskan bakalan berpunggung lebar dan rata, dada dalam, kaki kuat. Kerangka menentukan batas bobot akhir.",
      },
      {
        t: "JENIS CEPAT NAIK BOBOT",
        d: "Limosin dan Simental unggul di pertambahan bobot harian. Pegon unggul di efisiensi pakan dan harga bakalan lebih rendah.",
      },
      {
        t: "BISA HITUNG BARENG",
        d: "Harga bakalan per kg bobot, biaya pakan per hari, target jual. Kami bantu hitungkan sebelum Anda memutuskan.",
      },
      {
        t: "DIDUKUNG JARINGAN PETERNAK",
        d: "Butuh bakalan dalam jumlah tertentu atau jenis spesifik? Jaringan peternak yang kami bangun sejak 2008 siap membantu mencarikan.",
      },
    ],
    tipsTitle: "Kriteria bakalan yang layak dibeli",
    tips: [
      "Umur muda (± 1–2 tahun), pertumbuhannya masih cepat",
      "Mata cerah, bulu mengilap, nafsu makan bagus",
      "Kaki lurus dan kuat, tidak pincang",
      "Tidak cacat dan bebas dari tanda sakit",
      "Hitung harga per kilogram bobot, bandingkan antar bakalan",
    ],
    cta: "TANYAKAN SAPI BAKALAN",
    wa: "Halo Andini Farm, saya mencari sapi bakalan untuk PENGGEMUKAN. Bisa dibantu carikan?",
    metaTitle: "Jual Sapi Bakalan Penggemukan Sleman Yogyakarta | Andini Farm",
    metaDesc:
      "Jual sapi bakalan untuk penggemukan: Limosin, Simental & Pegon. Dari peternakan berpengalaman sejak 2008 di Seyegan, Sleman, Yogyakarta.",
  },
];

export default function NeedPage({ slug: propSlug }: { slug?: string }) {
  const params = useParams();
  const need = NEEDS.find((n) => n.slug === (propSlug ?? params.slug));

  const crumbLabel = need
    ? `Sapi ${need.slug.charAt(0).toUpperCase()}${need.slug.slice(1)}`
    : "Kebutuhan";

  usePageMeta(need?.metaTitle ?? "Kebutuhan Sapi | Andini Farm", need?.metaDesc, {
    path: need ? `/sapi-${need.slug}` : undefined,
    image: need ? ogImage(need.photo) : undefined,
    crumbs: [
      { label: "Beranda", to: "/" },
      { label: "Kebutuhan", to: "/jual-sapi" },
      { label: crumbLabel },
    ],
  });

  if (!need) {
    return (
      <section className="max-w-3xl mx-auto px-5 py-28 text-center">
        <h1 className="font-display text-4xl uppercase text-ranch">Halaman tidak ditemukan</h1>
        <div className="mt-8">
          <Link to="/" className="border-2 border-ink px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.13em] hover:bg-ink hover:text-cream transition-colors">
            KEMBALI KE BERANDA
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6">
        <Crumbs
          items={[
            { label: "Beranda", to: "/" },
            { label: "Kebutuhan", to: "/jual-sapi" },
            { label: crumbLabel },
          ]}
        />
      </div>
      <SplitHero
        kicker={need.kicker}
        h1={need.h1}
        lead={need.lead}
        photo={need.photo}
        photoAlt={need.photoAlt}
        tag={need.tag}
      >
        <WAButton wa={need.wa} variant="gold" size="lg">
          {need.cta}
        </WAButton>
        <Link
          to="/jual-sapi"
          className="group/l inline-flex items-center gap-2 border-2 border-ink px-6 py-[17px] text-xs font-extrabold uppercase tracking-[0.13em] text-ink hover:bg-ink hover:text-cream transition-colors"
        >
          LIHAT SEMUA JENIS
          <IconArrow className="w-3.5 h-3.5 transition-transform group-hover/l:translate-x-1" />
        </Link>
      </SplitHero>

      <Marquee
        items={[need.tag, "SAPI SEHAT", "GEMUK ALAMI", "SEJAK 2008", "SEYEGAN • SLEMAN", "BISA DIKIRIM", "KONSULTASI GRATIS"]}
        dur="30s"
      />

      {/* keunggulan */}
      <section className="bg-cream bg-rules">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead
              kicker="Kenapa di Andini Farm"
              title="YANG KAMI PERHATIKAN UNTUK ANDA"
            />
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {need.points.map((p, i) => (
              <Reveal
                key={p.t}
                delay={(i % 3) * 90}
                className="group border-2 border-ink bg-cream p-6 md:p-7 shadow-press transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_0_#151515]"
              >
                <span className="font-display text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-lg uppercase leading-snug text-ranch">
                  {p.t}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/70">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* tips checklist */}
      <section className="cv bg-ranch text-cream bg-dotgrid border-y-2 border-ink">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <EarTag tone="cream">{need.tag}</EarTag>
                <h2 className="mt-6 font-display text-[clamp(1.8rem,3.8vw,2.8rem)] leading-[1.02] uppercase">
                  {need.tipsTitle}
                </h2>
                <p className="mt-5 text-cream/75 leading-relaxed max-w-md">
                  Catatan ini kami tulis dari pengalaman melayani pembeli bertahun-tahun.
                  Kalau masih ragu, tanyakan saja langsung. Konsultasi tidak dipungut biaya.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul>
              {need.tips.map((t, i) => (
                <Reveal
                  as="li"
                  key={i}
                  delay={i * 60}
                  className="flex gap-5 items-start border-b-2 border-cream/12 py-6 group"
                >
                  <span className="shrink-0 w-9 h-9 grid place-items-center border-2 border-gold bg-pine text-gold font-mono text-[11px] font-bold transition-transform duration-200 group-hover:rotate-12">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] md:text-base leading-relaxed text-cream/85 pt-1.5">
                    {t}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* harga & cara beli */}
      <section className="cv bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <PriceBlock name="sesuai kebutuhan Anda" waMessage={need.wa} />
          </Reveal>
        </div>
      </section>

      {/* cara membeli (ringkas, detail di halaman Jual Sapi) */}
      <section className="bg-cream bg-rules border-t-2 border-ink/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-2 border-ink bg-cream shadow-press px-6 py-5">
              <p className="font-display text-base md:text-lg uppercase leading-snug text-ranch flex-1">
                Cara belinya sederhana: chat, lihat sapinya, sepakat, lalu dikirim.
              </p>
              <Link
                to="/jual-sapi"
                className="group/l inline-flex w-fit items-center gap-2 border-2 border-ink bg-gold px-4 py-[11px] text-[11px] font-extrabold uppercase tracking-[0.13em] text-ink transition-colors duration-200 hover:bg-ranch hover:text-cream hover:border-ranch"
              >
                LIHAT CARA MEMBELI
                <IconArrow className="w-3.5 h-3.5 transition-transform group-hover/l:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <BigCTA
        title={`SIAP CARI SAPI ${need.tag}?`}
        sub="Kabari kebutuhannya, kami carikan sapinya."
        copy="Sampaikan budget dan kriteria sapi yang Anda cari. Kami bantu dari memilih sampai sapi tiba di lokasi Anda."
        bg={need.photo}
      />
    </>
  );
}
