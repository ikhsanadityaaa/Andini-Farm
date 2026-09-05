import { useState } from "react";
import { Link } from "react-router-dom";
import { ADDRESS_LINES, IMG, MAPS_LINK, WA_DISPLAY, waLink } from "../data/site";
import { Crumbs, usePageMeta } from "../components/chrome";
import {
  BigCTA,
  EarTag,
  IconArrow,
  IconPin,
  IconStar,
  IconTruck,
  IconWA,
  Marquee,
  PhotoFrame,
  Reveal,
  SectionHead,
  SplitHero,
  WAButton,
} from "../components/ui";

/* ================= PENGIRIMAN ================= */
export function PengirimanPage() {
  usePageMeta(
    "Pengiriman Sapi ke Berbagai Wilayah | Andini Farm",
    "Andini Farm melayani pengiriman sapi dari Seyegan, Sleman, Yogyakarta ke Jawa Tengah, Jawa Barat, Jawa Timur & wilayah lain. Tanya ongkos kirim via WhatsApp."
  );

  const ROUTE = [
    { city: "YOGYAKARTA", note: "Titik berangkat — kandang di Seyegan, Sleman" },
    { city: "JAWA TENGAH", note: "Klaten, Solo, Magelang, Semarang & sekitarnya" },
    { city: "JAWA BARAT", note: "Bandung, Bekasi, Bogor & sekitarnya" },
    { city: "JAWA TIMUR", note: "Madiun, Kediri, Surabaya & sekitarnya" },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6">
        <Crumbs items={[{ label: "Beranda", to: "/" }, { label: "Pengiriman Sapi" }]} />
      </div>
      <SplitHero
        kicker="Layanan • Pengiriman"
        h1="PENGIRIMAN SAPI KE BERBAGAI WILAYAH"
        lead={
          <>
            <p>
              Andini Farm melayani pengiriman sapi sesuai tujuan pembelian. Biaya
              pengiriman dapat berbeda berdasarkan lokasi, jumlah sapi dan kondisi
              pengiriman.
            </p>
            <p className="mt-3">
              Sapi dimuat dengan hati-hati, memakai kendaraan ternak yang sesuai, dan
              diantar sampai titik yang disepakati.
            </p>
          </>
        }
        photo={IMG.truk}
        photoAlt="Truk pengangkut sapi melewati sawah di Jawa"
        caption="PERJALANAN SAPI MENUJU PEMBELI"
        tag="MELAYANI PENGIRIMAN"
        facts={[
          { label: "TITIK BERANGKAT", value: "Japanan, Seyegan, Sleman" },
          { label: "KENDARAAN", value: "Truk / colt khusus ternak" },
          { label: "CAKUPAN", value: "Yogyakarta & Pulau Jawa" },
          { label: "ONGKOS KIRIM", value: "Menyesuaikan tujuan & jumlah" },
        ]}
      >
        <WAButton
          wa="Halo Andini Farm, saya ingin tanya ongkos kirim sapi ke lokasi saya."
          variant="gold"
          size="lg"
        >
          TANYAKAN ONGKOS KIRIM
        </WAButton>
        <WAButton
          wa="Halo Andini Farm, saya ingin tanya stok sapi yang tersedia."
          variant="outline"
          size="lg"
        >
          TANYAKAN STOK SAPI
        </WAButton>
      </SplitHero>

      <Marquee
        items={["YOGYAKARTA", "JAWA TENGAH", "JAWA BARAT", "JAWA TIMUR", "DAN WILAYAH LAIN"]}
        dur="28s"
      />

      {/* rute */}
      <section className="bg-cream bg-rules">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead
              kicker="Rute umum"
              title="DARI SLEMAN, MENYEBERANGI JAWA"
              sub="Ini rute yang paling sering kami layani. Tujuan lain? Kabari saja — selama bisa dijangkau kendaraan ternak, kami usahakan."
            />
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROUTE.map((r, i) => (
              <Reveal key={r.city} delay={i * 90}>
                <div className="group/rt relative h-full border-2 border-ink bg-cream shadow-press p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[7px_7px_0_0_#151515]">
                  <span className="font-mono text-[10px] font-bold tracking-[0.24em] text-leather">
                    {i === 0 ? "TITIK AWAL" : `TUJUAN ${String(i).padStart(2, "0")}`}
                  </span>
                  <h3 className="mt-3 font-display text-xl md:text-2xl uppercase text-ranch leading-tight">
                    {r.city}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink/65">{r.note}</p>
                  <span className="absolute top-4 right-4 text-gold">
                    {i < ROUTE.length - 1 ? (
                      <IconTruck className="w-6 h-6 transition-transform duration-300 group-hover/rt:translate-x-1" />
                    ) : (
                      <IconStar className="w-5 h-5" />
                    )}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* faktor biaya */}
      <section className="bg-ranch text-cream bg-dotgrid border-y-2 border-ink">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHead
                tone="dark"
                kicker="Transparan"
                title="APA YANG MEMENGARUHI ONGKOS KIRIM?"
                sub="Supaya tidak ada kejutan di akhir, ini komponen yang kami hitung saat menentukan biaya pengiriman."
              />
              <div className="mt-8">
                <WAButton
                  wa="Halo Andini Farm, saya ingin minta perhitungan ongkos kirim sapi ke alamat saya."
                  variant="gold"
                  size="lg"
                >
                  MINTA HITUNGAN ONGKIR
                </WAButton>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <ol>
              {[
                { t: "JARAK & RUTE", d: "Semakin jauh lokasi tujuan, semakin besar biayanya. Akses jalan menuju lokasi juga ikut menentukan." },
                { t: "JUMLAH SAPI", d: "Satu ekor dan lima ekor butuh kendaraan berbeda. Mengirim lebih banyak sekaligus biasanya lebih hemat per ekor." },
                { t: "JENIS KENDARAAN", d: "Kami sesuaikan kendaraan dengan jumlah dan ukuran sapi supaya sapi nyaman dan aman di perjalanan." },
                { t: "WAKTU PENGIRIMAN", d: "Pengiriman menjelang Idul Adha biasanya lebih padat. Menjadwalkan lebih awal membuat semua lebih tenang." },
              ].map((f, i) => (
                <Reveal as="li" key={f.t} delay={i * 70} className="border-b-2 border-cream/12 py-6 grid grid-cols-[auto_1fr] gap-5 items-start">
                  <span className="font-display text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-lg uppercase text-cream">{f.t}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-cream/70">{f.d}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <BigCTA
        title="MAU HITUNG ONGKOS KIRIMNYA?"
        sub="Kirim alamat Anda, kami hitungkan."
        copy="Sampaikan lokasi tujuan dan jumlah sapi yang rencana dibeli — kami kirimkan perkiraan ongkos kirimnya via WhatsApp."
        bg={IMG.truk}
      />
    </>
  );
}

/* ================= TENTANG ================= */
export function TentangPage() {
  usePageMeta(
    "Tentang Andini Farm — Peternakan Sapi Sejak 2008 | Sleman, Yogyakarta",
    "Andini Farm adalah peternakan dan penjual sapi di Japanan, Seyegan, Sleman, Yogyakarta. Berpengalaman di dunia peternakan sejak 2008 dengan jaringan peternak yang luas."
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6">
        <Crumbs items={[{ label: "Beranda", to: "/" }, { label: "Tentang Andini Farm" }]} />
      </div>
      <SplitHero
        kicker="Tentang Kami"
        h1="BERPENGALAMAN DI DUNIA PETERNAKAN SEJAK 2008"
        lead={
          <>
            <p>
              Andini Farm adalah peternakan dan penjual sapi dari Japanan, Margodadi,
              Seyegan, Sleman, Yogyakarta. Kami menjual <strong className="text-ranch">
              sapi</strong> — Limosin, Simental dan Pegon Super — untuk qurban, aqiqah,
              penggemukan hingga perdagangan.
            </p>
          </>
        }
        photo={IMG.bapak}
        photoAlt="Peternak Andini Farm bersama sapi di kandang Japanan Seyegan"
        caption="BERSAMA SAPI — SEJAK 2008"
        tag="ANDINI FARM"
        facts={[
          { label: "BERDIRI", value: "Aktif di dunia sapi sejak 2008" },
          { label: "FOKUS", value: "Penjualan sapi" },
          { label: "JARINGAN", value: "Peternak & pelaku usaha sapi" },
          { label: "PRINSIP", value: "Bantu pembeli, bukan sekadar jual" },
        ]}
      >
        <WAButton
          wa="Halo Andini Farm, saya ingin kenal lebih jauh dan tanya sapi yang tersedia."
          variant="gold"
          size="lg"
        >
          CHAT WHATSAPP
        </WAButton>
        <Link
          to="/jual-sapi"
          className="group/l inline-flex items-center gap-2 border-2 border-ink px-6 py-[17px] text-xs font-extrabold uppercase tracking-[0.13em] text-ink hover:bg-ink hover:text-cream transition-colors"
        >
          LIHAT JUAL SAPI
          <IconArrow className="w-3.5 h-3.5 transition-transform group-hover/l:translate-x-1" />
        </Link>
      </SplitHero>

      <Marquee items={["SEJAK 2008", "JAPANAN • SEYEGAN", "SAPI SEHAT", "JARINGAN PETERNAK", "AMANAH"]} />

      {/* cerita */}
      <section className="bg-cream bg-rules">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHead
                kicker="Cerita kami"
                title="BERAWAL DARI KETERTARIKAN, TUMBUH JADI PENGALAMAN"
              />
              <p className="mt-6 font-mono text-[11px] tracking-[0.2em] uppercase text-leather">
                — Dari kandang sederhana di Japanan
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[15px] md:text-base leading-relaxed text-ink/80">
            <Reveal>
              <p className="dropcap">
                Berawal dari ketertarikan dan pengalaman di dunia peternakan, Andini
                Farm telah berkecimpung dalam usaha sapi sejak 2008. Bertahun-tahun
                mengurus sapi — memilih bakalan, merawat, sampai melepas ke pembeli —
                membentuk satu keyakinan: pembeli yang tenang adalah pembeli yang
                dibantu, bukan sekadar ditawari.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p>
                Selama bertahun-tahun, pengalaman tersebut juga membangun jaringan
                dengan peternak dan pelaku usaha sapi di berbagai tempat. Jaringan ini
                yang membuat Andini Farm bisa bergerak lebih luas: ketika stok kandang
                tidak pas dengan kebutuhan pembeli, kami bisa ikut mencarikan lewat
                jaringan yang sudah saling percaya.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                Karena itu, Andini Farm tidak hanya menjual sapi, tetapi juga membantu
                pembeli menemukan sapi yang sesuai dengan kebutuhan mereka — dari
                menentukan jenis yang cocok, memperkirakan bobot, sampai mengatur
                pengiriman ke lokasi.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="border-2 border-ink bg-parch shadow-press p-6">
                <p className="font-display text-lg uppercase text-ranch leading-snug">
                  "Kami tidak ingin pembeli sekadar dapat sapi. Kami ingin mereka dapat
                  sapi yang tepat."
                </p>
                <p className="mt-3 font-mono text-[10px] font-bold tracking-[0.24em] uppercase text-leather">
                  — Prinsip Andini Farm
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* nilai */}
      <section className="bg-ranch text-cream bg-dotgrid border-y-2 border-ink">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead
              tone="dark"
              kicker="Yang kami pegang"
              title="TIGA HAL YANG TIDAK KAMI TAWAR"
            />
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { t: "JUJUR SOAL KONDISI", d: "Kalau sapinya sedang tidak ada atau tidak cocok dengan kebutuhan Anda, kami katakan apa adanya — lalu bantu carikan yang pas." },
              { t: "SAPI TERAWAT", d: "Sapi di kandang dirawat dengan pakan dan pemeliharaan yang semestinya. Kondisi sapi adalah nama baik kami." },
              { t: "JELAS DI KESEPAKATAN", d: "Harga, ongkos kirim dan jadwal — semua disepakati jelas di depan, tertulis di chat, tanpa biaya siluman di belakang." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 90} className="border-2 border-cream/25 bg-pine/50 p-7 transition-colors duration-300 hover:border-gold">
                <IconStar className="w-5 h-5 text-gold" />
                <h3 className="mt-5 font-display text-xl uppercase leading-snug text-cream">
                  {v.t}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-cream/70">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* lokasi singkat */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <PhotoFrame
              src={IMG.kandang}
              alt="Kandang sapi Andini Farm di Japanan Seyegan Sleman"
              caption="KANDANG ANDINI FARM — TERBUKA UNTUK KUNJUNGAN"
              tag="JAPANAN, SEYEGAN"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHead
              kicker="Lokasi"
              title="MAMPIR KE KANDANG, LIHAT SENDIRI SAPINYA"
            />
            <address className="mt-6 not-italic font-display text-xl md:text-2xl uppercase leading-snug text-ranch">
              {ADDRESS_LINES.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <p className="mt-4 text-[15px] text-ink/70 max-w-md leading-relaxed">
              Melihat sapi langsung selalu jadi cara terbaik sebelum membeli. Kabari
              dulu via WhatsApp supaya kami siapkan waktunya.
            </p>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-ink px-5 py-[13px] text-[11px] font-extrabold uppercase tracking-[0.13em] hover:bg-ink hover:text-cream transition-colors"
              >
                <IconPin className="w-3.5 h-3.5" /> BUKA DI GOOGLE MAPS
              </a>
              <WAButton wa="Halo Andini Farm, saya ingin menjadwalkan kunjungan ke kandang.">
                JADWALKAN KUNJUNGAN
              </WAButton>
            </div>
          </Reveal>
        </div>
      </section>

      <BigCTA
        title="MARI BICARAKAN SAPI ANDA"
        sub="Konsultasi dulu, beli belakangan."
        bg={IMG.pasar}
      />
    </>
  );
}

/* ================= KONTAK ================= */
export function KontakPage() {
  usePageMeta(
    "Kontak Andini Farm — Jual Sapi Sleman Yogyakarta | WhatsApp",
    "Hubungi Andini Farm via WhatsApp +62 853-3137-9462. Kandang di Japanan, Margodadi, Seyegan, Sleman, Yogyakarta. Tanya stok, harga & pengiriman sapi."
  );

  const [nama, setNama] = useState("");
  const [kebutuhan, setKebutuhan] = useState("Qurban");
  const [pesan, setPesan] = useState("");

  const submit = () => {
    const text = `Halo Andini Farm, saya ${nama || "(nama)"}. Saya mencari sapi untuk kebutuhan ${kebutuhan}. ${pesan}`.trim();
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6">
        <Crumbs items={[{ label: "Beranda", to: "/" }, { label: "Kontak" }]} />
      </div>
      <section className="relative overflow-hidden bg-cream bg-rules">
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-16 md:pb-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <EarTag tone="ranch" float>
                Kontak • Andini Farm
              </EarTag>
              <h1 className="mt-6 font-display text-[clamp(2.2rem,5.4vw,3.9rem)] leading-[0.98] uppercase text-ranch">
                HUBUNGI ANDINI FARM
              </h1>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-ink/80 max-w-xl">
                Cara tercepat tanya stok, jenis sapi, harga dan pengiriman adalah lewat{" "}
                <strong className="text-ranch">WhatsApp</strong>. Kalau mau lihat
                langsung, datang ke kandang — kabari dulu ya.
              </p>
            </Reveal>
            <Reveal delay={110}>
              <div className="mt-9 space-y-5">
                <a
                  href={waLink("Halo Andini Farm, saya ingin tanya sapi yang tersedia.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/ct flex items-center gap-5 border-2 border-ink bg-ranch text-cream shadow-press p-5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_0_#151515]"
                >
                  <span className="min-w-[52px] h-[52px] grid place-items-center border-2 border-gold bg-pine text-gold">
                    <IconWA className="w-6 h-6" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] tracking-[0.26em] uppercase text-gold">
                      WhatsApp — paling cepat
                    </span>
                    <span className="block mt-1 font-display text-xl md:text-2xl">{WA_DISPLAY}</span>
                  </span>
                  <IconArrow className="ml-auto w-5 h-5 text-gold transition-transform group-hover/ct:translate-x-1" />
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/ct flex items-center gap-5 border-2 border-ink bg-cream shadow-press p-5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_0_#151515]"
                >
                  <span className="min-w-[52px] h-[52px] grid place-items-center border-2 border-ink bg-gold text-ink">
                    <IconPin className="w-6 h-6" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] tracking-[0.26em] uppercase text-leather">
                      Alamat kandang
                    </span>
                    <span className="block mt-1 font-display text-lg md:text-xl uppercase leading-snug text-ranch">
                      {ADDRESS_LINES.join(", ")}
                    </span>
                  </span>
                </a>
              </div>
              <p className="mt-6 text-[13px] text-ink/60 leading-relaxed max-w-md">
                Jam peternakan mengikuti perawatan sapi — chat kapan saja, kami balas
                secepatnya. Kunjungan kandang sebaiknya janjian dulu supaya sapinya
                bisa kami siapkan.
              </p>
            </Reveal>
          </div>

          {/* form to WA */}
          <Reveal delay={150} className="lg:col-span-6">
            <div className="border-2 border-ink bg-parch shadow-press-lg p-7 md:p-9">
              <EarTag>KIRIM PESAN CEPAT</EarTag>
              <h2 className="mt-5 font-display text-2xl uppercase text-ranch leading-snug">
                CERITAKAN SAPI YANG ANDA CARI
              </h2>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                Isi singkat saja — pesan ini akan terbuka langsung di WhatsApp Anda
                menuju nomor Andini Farm.
              </p>
              <div className="mt-7 space-y-5">
                <label className="block">
                  <span className="font-mono text-[10px] font-bold tracking-[0.24em] uppercase text-leather">
                    Nama Anda
                  </span>
                  <input
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="cth: Pak Budi"
                    className="mt-2 w-full border-2 border-ink bg-cream px-4 py-3 text-sm font-semibold placeholder:text-ink/35 outline-none focus:border-ranch focus:shadow-[3px_3px_0_0_#163020] transition-all"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] font-bold tracking-[0.24em] uppercase text-leather">
                    Kebutuhan
                  </span>
                  <select
                    value={kebutuhan}
                    onChange={(e) => setKebutuhan(e.target.value)}
                    className="mt-2 w-full border-2 border-ink bg-cream px-4 py-3 text-sm font-semibold outline-none focus:border-ranch focus:shadow-[3px_3px_0_0_#163020] transition-all cursor-pointer"
                  >
                    {["Qurban", "Aqiqah", "Penggemukan", "Dagang / Usaha", "Belum tahu — mau konsultasi"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] font-bold tracking-[0.24em] uppercase text-leather">
                    Pesan (opsional)
                  </span>
                  <textarea
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    rows={3}
                    placeholder="cth: butuh sapi Limosin sekitar 300 kg, lokasi kirim ke Magelang…"
                    className="mt-2 w-full border-2 border-ink bg-cream px-4 py-3 text-sm font-semibold placeholder:text-ink/35 outline-none focus:border-ranch focus:shadow-[3px_3px_0_0_#163020] transition-all resize-none"
                  />
                </label>
                <button
                  onClick={submit}
                  className="group/bt w-full inline-flex items-center justify-center gap-2.5 border-2 border-ink bg-gold px-7 py-[17px] text-xs font-extrabold uppercase tracking-[0.13em] shadow-press transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_0_#151515] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer"
                >
                  <IconWA className="w-4 h-4 transition-transform group-hover/bt:rotate-12" />
                  KIRIM VIA WHATSAPP
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <BigCTA
        title="SATU CHAT, SEMUA JELAS"
        sub="Stok • harga • bobot • pengiriman"
        bg={IMG.kandang}
      />
    </>
  );
}
