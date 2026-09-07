/* ============================================================
   ANDINI FARM, konstanta situs
   FOTO: ganti URL di bawah ini dengan foto asli peternakan
   (simpan di folder public/ lalu ubah path-nya, mis. "/images/sapi-limosin.jpg")
   ============================================================ */

export const BRAND = "ANDINI FARM";
export const TAGLINE = "JUAL SAPI BERKUALITAS";
export const SUBTAGLINE = "LIMOSIN • SIMENTAL • PEGON SUPER";
export const SINCE = 2008;

/* Host kanonik produksi (apex 308-redirect ke www, jadi www adalah host final) */
export const SITE_URL = "https://www.andinifarm.biz.id";

/* Gambar OG default (JPEG agar kompatibel dgn scraper WhatsApp/Facebook) */
export const OG_IMAGE_URL = `${SITE_URL}/images/sapi-limosin.jpg`;

/* Konversi path gambar lokal (/images/x.webp) menjadi URL OG absolut (.jpg) */
export const ogImage = (path: string) =>
  path.startsWith("http")
    ? path
    : `${SITE_URL}${path.replace(/\.webp$/, ".jpg")}`;

export const WA_NUMBER = "6285331379462";
export const WA_DISPLAY = "085331379462";

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  "Halo Andini Farm, saya ingin tanya stok sapi yang tersedia."
);

export const ADDRESS_LINES = [
  "Japanan, Margodadi, Seyegan",
  "Sleman, Daerah Istimewa Yogyakarta",
];

/* Titik resmi: Kandang Sapi Japanan, Ngampon, Margodadi, Seyegan, Sleman */
export const MAPS_LINK = "https://maps.app.goo.gl/W7nCM55av43rAnFm7";

export const MAPS_EMBED =
  "https://www.google.com/maps?q=-7.7336362,110.2950401&z=16&output=embed";

/* Foto situs — kini self-hosted di /public/images (WebP, nama file SEO-friendly).
   Semula PNG ~2 MB/each dari host pihak ketiga; di optimalkan jadi WebP q90
   (visual identik, 87% lebih kecil). Ganti file di public/images/ bila ada foto asli. */
export const IMG = {
  heroLimosin: "/images/sapi-limosin.webp",
  simental: "/images/sapi-simental.webp",
  pegon: "/images/sapi-pegon.webp",
  bapak: "/images/peternak-andini-farm.webp",
  kandang: "/images/kandang-sapi-andini-farm.webp",
  truk: "/images/pengiriman-sapi-truk.webp",
  qurban: "/images/sapi-qurban.webp",
  penggemukan: "/images/sapi-penggemukan.webp",
  aqiqah: "/images/sapi-aqiqah.webp",
  pasar: "/images/pasar-hewan-sapi.webp",
  /* Cutout sapi di atas latar krem polos. Ditampilkan dengan mix-blend-multiply
     supaya latar menyatu dengan halaman */
  heroCutout: "/images/sapi-limosin-utama.webp",
  pickup: "/images/pengiriman-sapi-pickup.webp",
};

export const SEO_KEYWORDS = [
  "jual sapi Sleman",
  "jual sapi Yogyakarta",
  "jual sapi Jogja",
  "jual sapi Seyegan",
  "penjual sapi Yogyakarta",
  "peternakan sapi Sleman",
  "sapi Limosin Jogja",
  "sapi Simental Jogja",
  "jual sapi Pegon",
  "jual sapi qurban",
];
