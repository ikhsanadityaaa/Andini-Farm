export type Breed = {
  slug: string;
  name: string;
  nameAlt: string;
  h1: string;
  earTag: string;
  photo: string;
  photoAlt: string;
  tagline: string;
  intro: string;
  karakteristik: string[];
  bobot: { range: string; use: string; note: string }[];
  kebutuhan: string[];
  seo: string[];
  metaTitle: string;
  metaDesc: string;
  cta: string;
  waMessage: string;
  fakta: { label: string; value: string }[];
};

export const BREEDS: Breed[] = [
  {
    slug: "limosin",
    name: "LIMOSIN",
    nameAlt: "Limosin",
    h1: "JUAL SAPI LIMOSIN",
    earTag: "AF-LMS • SIAP DIJUAL",
    photo:
      "https://image.qwenlm.ai/generated-images/ee75b94b-a4de-49d6-8d0f-0049b4d9817f/_result.png",
    photoAlt: "Sapi Limosin di kandang Andini Farm Seyegan Sleman",
    tagline: "Tubuh besar, berotot, dan proporsional.",
    intro:
      "Sapi Limosin dikenal dengan tubuh yang besar dan proporsi tubuh yang kuat. Cocok untuk berbagai kebutuhan pembelian sapi, mulai dari qurban, aqiqah, penggemukan hingga perdagangan.",
    karakteristik: [
      "Postur tubuh besar dan panjang dengan perototan yang padat, terutama di bagian punggung dan paha.",
      "Warna bulu khas cokelat kemerahan hingga cokelat tua, dengan area sekitar mata dan moncong yang lebih terang.",
      "Pertambahan bobot harian tergolong tinggi sehingga disukai untuk penggemukan.",
      "Hasil karkas tinggi, daging lebih banyak dibanding bobot tubuhnya.",
      "Cocok untuk qurban besar, bakalan penggemukan, maupun indukan berkualitas.",
    ],
    bobot: [
      { range: "± 250–350 KG", use: "Aqiqah & qurban sedang", note: "Ukuran paling sering dicari pembeli." },
      { range: "± 350–500 KG", use: "Qurban besar", note: "Postur gagah untuk qurban patungan." },
      { range: "± 500 KG KE ATAS", use: "Qurban istimewa & kontes", note: "Stok terbatas, sebaiknya pesan lebih awal." },
      { range: "BAKALAN MUDA", use: "Penggemukan", note: "Kerangka bagus untuk program penggemukan." },
    ],
    kebutuhan: ["Qurban", "Aqiqah", "Penggemukan", "Perdagangan"],
    seo: [
      "Andini Farm melayani jual sapi Limosin untuk wilayah Sleman, Yogyakarta dan sekitarnya. Banyak pembeli mencari sapi Limosin (sering juga ditulis Limousin) karena posturnya yang besar dan bobotnya yang menguntungkan. Jika Anda mencari tempat jual sapi Limousin dengan kondisi terawat, Anda bisa melihat langsung sapinya di kandang kami di Japanan, Seyegan.",
      "Karena Limosin banyak dicari menjelang musim qurban maupun untuk program penggemukan, stok bisa cepat berpindah tangan. Cara paling praktis untuk mengecek bobot dan kondisi terbaru adalah bertanya langsung lewat WhatsApp, kami kirimkan foto dan video sapi yang tersedia.",
    ],
    metaTitle: "Jual Sapi Limosin (Limousin) Sleman Yogyakarta | Andini Farm",
    metaDesc:
      "Jual sapi Limosin berbagai bobot di Seyegan, Sleman, Yogyakarta. Harga sapi Limousin menyesuaikan, tanya stok & harga terbaru via WhatsApp.",
    cta: "TANYAKAN SAPI LIMOSIN",
    waMessage: "Halo Andini Farm, saya ingin tanya stok dan harga sapi LIMOSIN.",
    fakta: [
      { label: "Asal", value: "Eropa (Perancis)" },
      { label: "Warna khas", value: "Cokelat kemerahan" },
      { label: "Keunggulan", value: "Perototan padat, karkas tinggi" },
      { label: "Cocok untuk", value: "Qurban • penggemukan • dagang" },
    ],
  },
  {
    slug: "simental",
    name: "SIMENTAL",
    nameAlt: "Simental",
    h1: "JUAL SAPI SIMENTAL",
    earTag: "AF-SMT • SIAP DIJUAL",
    photo:
      "https://image.qwenlm.ai/generated-images/70d2f183-3987-4d7a-aad3-f7d55e28a1f8/_result.png",
    photoAlt: "Sapi Simental di peternakan Andini Farm Sleman",
    tagline: "Rangka besar dengan pertumbuhan cepat.",
    intro:
      "Sapi Simental memiliki karakteristik tubuh besar dengan pertumbuhan dan bentuk tubuh yang menarik bagi peternak dan pembeli sapi.",
    karakteristik: [
      "Rangka tubuh besar dan dalam, dengan dada lebar dan punggung rata.",
      "Ciri khas warna: badan cokelat kemerahan dengan kepala dan kaki putih.",
      "Pertumbuhan cepat dan respons bagus terhadap pakan penggemukan.",
      "Termasuk sapi dwiguna (pedaging & susu) di negara asalnya. Di Indonesia dipelihara sebagai pedaging.",
      "Banyak diminati untuk qurban karena penampilannya yang besar dan gagah.",
    ],
    bobot: [
      { range: "± 250–350 KG", use: "Qurban & aqiqah", note: "Bobot ideal untuk kebutuhan ibadah." },
      { range: "± 350–500 KG", use: "Qurban besar", note: "Sangat diminati saat musim qurban." },
      { range: "± 500 KG KE ATAS", use: "Qurban istimewa", note: "Penampilan paling menonjol di lapangan." },
      { range: "BAKALAN MUDA", use: "Penggemukan", note: "ADG tinggi, cepat naik bobot." },
    ],
    kebutuhan: ["Qurban", "Penggemukan", "Perdagangan", "Indukan"],
    seo: [
      "Andini Farm menyediakan jual sapi Simental untuk pembeli di Sleman, Yogyakarta dan berbagai wilayah lain. Sapi Simental, yang juga sering ditulis Simmental, dikenal dengan rangka tubuhnya yang besar dan pertumbuhan yang cepat, sehingga menjadi favorit peternak maupun pembeli sapi qurban.",
      "Jika Anda sedang mencari jual sapi Simmental dengan kondisi sehat dan terawat, silakan tanyakan stok terbaru kami. Kami juga bisa membantu mencarikan Simental dengan rentang bobot tertentu melalui jaringan peternak yang kami bangun sejak 2008.",
    ],
    metaTitle: "Jual Sapi Simental (Simmental) Sleman Yogyakarta | Andini Farm",
    metaDesc:
      "Jual sapi Simental berbagai bobot di Seyegan, Sleman, Yogyakarta. Harga sapi Simmental menyesuaikan, tanya stok & harga via WhatsApp.",
    cta: "TANYAKAN SAPI SIMENTAL",
    waMessage: "Halo Andini Farm, saya ingin tanya stok dan harga sapi SIMENTAL.",
    fakta: [
      { label: "Asal", value: "Lembah Simme, Swiss" },
      { label: "Warna khas", value: "Cokelat, kepala putih" },
      { label: "Keunggulan", value: "Rangka besar, tumbuh cepat" },
      { label: "Cocok untuk", value: "Qurban • penggemukan • indukan" },
    ],
  },
  {
    slug: "pegon",
    name: "PEGON SUPER",
    nameAlt: "Pegon",
    h1: "JUAL SAPI PEGON SUPER",
    earTag: "AF-PGN • SIAP DIJUAL",
    photo:
      "https://image.qwenlm.ai/generated-images/2c0658f7-b53c-4098-b8b2-fc8d62257aae/_result.png",
    photoAlt: "Sapi Pegon Super di kandang Andini Farm Yogyakarta",
    tagline: "Persilangan lokal yang adaptif dan bernilai ekonomis.",
    intro:
      "Pilihan sapi Pegon Super untuk berbagai kebutuhan pembelian sapi. Pegon merupakan sapi persilangan lokal yang sudah sangat adaptif dengan iklim dan pakan di Indonesia.",
    karakteristik: [
      "Hasil persilangan sapi lokal (Jawa/Peranakan Ongole) dengan sapi Eropa seperti Limosin atau Simental.",
      "Adaptif terhadap iklim tropis, pakan lokal, dan sistem pemeliharaan peternak Indonesia.",
      "Perawatan lebih mudah dan tahan banting dibanding sapi impor murni.",
      "Harga lebih bersahabat, nilai ekonomisnya tinggi untuk aqiqah, qurban dan dagang.",
      "Varian 'Pegon Super' biasanya memiliki postur dan perototan yang lebih menonjol.",
    ],
    bobot: [
      { range: "± 200–300 KG", use: "Aqiqah & qurban hemat", note: "Pilihan paling ekonomis dan layak." },
      { range: "± 300–400 KG", use: "Qurban", note: "Cukup umur dan memenuhi syarat qurban." },
      { range: "BAKALAN", use: "Penggemukan", note: "Efisien pakan, margin bagus untuk peternak." },
      { range: "SIAP JUAL", use: "Perdagangan", note: "Perputaran cepat di pasar lokal." },
    ],
    kebutuhan: ["Qurban", "Aqiqah", "Penggemukan", "Perdagangan"],
    seo: [
      "Andini Farm melayani jual sapi Pegon Super dari Sleman, Yogyakarta. Sapi Pegon adalah sapi persilangan lokal yang terkenal adaptif dan mudah perawatannya, sehingga banyak dipilih untuk qurban, aqiqah maupun penggemukan dengan budget yang lebih ekonomis.",
      "Harga sapi Pegon menyesuaikan bobot dan kondisi sapi. Jika Anda mencari sapi Pegon dengan kondisi sehat dan terawat, tanyakan stok serta harga terbaru kepada kami. Beli sapi Pegon di Andini Farm bisa disertai pengiriman ke berbagai wilayah sesuai kesepakatan.",
    ],
    metaTitle: "Jual Sapi Pegon Super Sleman Yogyakarta | Andini Farm",
    metaDesc:
      "Jual sapi Pegon Super di Seyegan, Sleman, Yogyakarta. Harga sapi Pegon menyesuaikan bobot, tanya stok & harga via WhatsApp.",
    cta: "TANYAKAN SAPI PEGON",
    waMessage: "Halo Andini Farm, saya ingin tanya stok dan harga sapi PEGON SUPER.",
    fakta: [
      { label: "Asal", value: "Persilangan lokal Jawa" },
      { label: "Warna khas", value: "Beragam, sering bercak putih" },
      { label: "Keunggulan", value: "Adaptif, perawatan mudah" },
      { label: "Cocok untuk", value: "Aqiqah • qurban hemat • dagang" },
    ],
  },
];

export const BELI_STEPS = [
  {
    title: "CHAT WHATSAPP",
    desc: "Kabari jenis sapi, perkiraan bobot dan budget Anda, atau sekadar tanya stok yang ada.",
  },
  {
    title: "LIHAT SAPI",
    desc: "Kami kirim foto dan video terbaru. Sapi yang di kandang bisa dilihat langsung, atau janjian lihat di lokasi peternak rekanan maupun pasar hewan.",
  },
  {
    title: "SEPAKAT & BAYAR",
    desc: "Sepakati harga dan skema pembayaran. Sapi kami siapkan dan rawat sampai jadwal kirim.",
  },
  {
    title: "SAPI DIKIRIM",
    desc: "Sapi diantar ke lokasi Anda, atau diambil sendiri langsung dari kandang.",
  },
];

export const getBreed = (slug: string) => BREEDS.find((b) => b.slug === slug);
export const breedWa = (slug: string) => getBreed(slug)?.waMessage ?? "";
