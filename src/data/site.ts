/* ============================================================
   ANDINI FARM — konstanta situs
   FOTO: ganti URL di bawah ini dengan foto asli peternakan
   (simpan di folder public/ lalu ubah path-nya, mis. "/images/sapi-limosin.jpg")
   ============================================================ */

export const BRAND = "ANDINI FARM";
export const TAGLINE = "JUAL SAPI BERKUALITAS";
export const SUBTAGLINE = "LIMOSIN • SIMENTAL • PEGON SUPER";
export const SINCE = 2008;

export const WA_NUMBER = "6285331379462";
export const WA_DISPLAY = "+62 853-3137-9462";

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  "Halo Andini Farm, saya ingin tanya stok sapi yang tersedia."
);

export const ADDRESS_LINES = [
  "Japanan, Margodadi",
  "Seyegan, Sleman",
  "Daerah Istimewa Yogyakarta",
];

export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Japanan, Margodadi, Seyegan, Sleman, Yogyakarta");

/* Foto utama — placeholder foto asli Andini Farm */
export const IMG = {
  /* Cutout sapi di atas latar krem polos — ditampilkan dengan mix-blend-multiply
     sehingga menyatu dengan latar situs (efek PNG transparan). */
  heroCutout:
    "https://image.qwenlm.ai/generated-images/b8e5005e-fa95-444c-b07d-95d1b3d865e5/_result.png",
  heroLimosin:
    "https://image.qwenlm.ai/generated-images/ee75b94b-a4de-49d6-8d0f-0049b4d9817f/_result.png",
  simental:
    "https://image.qwenlm.ai/generated-images/70d2f183-3987-4d7a-aad3-f7d55e28a1f8/_result.png",
  pegon:
    "https://image.qwenlm.ai/generated-images/2c0658f7-b53c-4098-b8b2-fc8d62257aae/_result.png",
  bapak:
    "https://image.qwenlm.ai/generated-images/09f424e5-6421-455e-b33b-a44903a8b809/_result.png",
  kandang:
    "https://image.qwenlm.ai/generated-images/3346a639-8aaa-4018-8338-5b243e27b5f8/_result.png",
  truk: "https://image.qwenlm.ai/generated-images/ce2b4a36-6c4d-4dde-af67-50f9538e87c5/_result.png",
  qurban:
    "https://image.qwenlm.ai/generated-images/a5536be2-8b90-4d17-8454-c7e0e50dcbb0/_result.png",
  penggemukan:
    "https://image.qwenlm.ai/generated-images/09519d1e-618e-445d-9287-f84c6a265ea2/_result.png",
  aqiqah:
    "https://image.qwenlm.ai/generated-images/be68e2fd-e174-4aca-ac0a-e458800256ba/_result.png",
  pasar:
    "https://image.qwenlm.ai/generated-images/842fadb8-cb74-4670-b362-56a80259da4d/_result.png",
  pickup:
    "https://image.qwenlm.ai/generated-images/d18c1ba1-aad7-4638-b0ea-25de1b28276e/_result.png",
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
