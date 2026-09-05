import { IMG, waLink } from "./site";

export type Breed = {
  slug: string;
  name: string;
  nameAlt: string;
  h1: string;
  earTag: string;
  photo: string;
  photoAlt: string;
  caption: string;
  tagline: string;
  intro: string;
  karakteristik: string[];
  fakta: { label: string; value: string }[];
  bobot: { range: string; use: string; note: string }[];
  kebutuhan: string[];
  seo: string[];
  metaTitle: string;
  metaDesc: string;
  cta: string;
  waMessage: string;
};

export const BREEDS: Breed[] = [
  {
    slug: "limosin",
    name: "LIMOSIN",
    nameAlt: "Limousin",
    h1: "JUAL SAPI LIMOSIN HIDUP",
    earTag: "AF-LMS • SAPI HIDUP",
    photo: IMG.heroLimosin,
    photoAlt: "Sapi Limosin hidup di kandang Andini Farm Seyegan Sleman",
    caption: "LIMOSIN — KANDANG ANDINI FARM, SEYEGAN",
    tagline: "Tubuh besar, berotot, pilihan favorit untuk qurban dan penggemukan.",
    intro:
      "Sapi Limosin dikenal dengan tubuh yang besar dan proporsi tubuh yang kuat. Cocok untuk berbagai kebutuhan pembelian sapi hidup — mulai dari qurban, aqiqah, penggemukan hingga perdagangan.",
    karakteristik: [
      "Postur tubuh besar, panjang dan berotot — salah satu jenis sapi potong paling dicari di Indonesia.",
      "Bulu cokelat kemerahan khas, mudah dikenali baik di kandang maupun di pasar hewan.",
      "Pertumbuhan bobot baik sehingga diminati untuk qurban, penggemukan lanjutan, maupun usaha dagang sapi.",
      "Tampilannya gagah — sering menjadi pilihan utama pembeli yang mencari sapi qurban berukuran besar.",
    ],
    fakta: [
      { label: "ASAL JENIS", value: "Prancis (Limousin)" },
      { label: "KARAKTER", value: "Badan panjang & berotot" },
      { label: "PENULISAN LAIN", value: "Limousin" },
      { label: "COCOK UNTUK", value: "Qurban, penggemukan, dagang" },
    ],
    bobot: [
      {
        range: "± 250–350 kg",
        use: "Qurban & aqiqah",
        note: "Ukuran yang paling sering dicari menjelang Idul Adha.",
      },
      {
        range: "± 350–450 kg",
        use: "Qurban patungan & penggemukan lanjutan",
        note: "Permintaannya stabil sepanjang tahun.",
      },
      {
        range: "± 450 kg ke atas",
        use: "Qurban jumbo & perdagangan",
        note: "Stok terbatas — sebaiknya tanyakan lebih awal.",
      },
    ],
    kebutuhan: [
      "Qurban — ukuran besar dan tampilan gagah.",
      "Aqiqah — tersedia bobot yang lebih kecil.",
      "Penggemukan — bakalan Limosin banyak dicari peternak.",
      "Perdagangan — jenis yang perputarannya cepat di pasar.",
    ],
    seo: [
      "Andini Farm melayani jual sapi Limosin hidup untuk wilayah Sleman, Yogyakarta dan sekitarnya. Banyak pembeli mencari sapi Limosin (sering juga ditulis Limousin) karena posturnya yang besar dan bobotnya yang menguntungkan. Jika Anda sedang mencari jual sapi Limousin dengan kondisi terawat, Anda bisa melihat langsung sapinya di kandang kami di Japanan, Seyegan.",
      "Harga sapi Limosin menyesuaikan bobot, kondisi dan waktu pembelian — karena itu kami tidak memasang harga mati di website. Tanyakan harga sapi Limosin terbaru beserta stok yang tersedia, dan kami bantu sesuaikan dengan kebutuhan serta budget Anda. Beli sapi Limosin di Andini Farm bisa untuk qurban, aqiqah, penggemukan maupun dagang, dengan pengiriman yang bisa diatur sesuai tujuan.",
    ],
    metaTitle: "Jual Sapi Limosin (Limousin) Hidup Sleman Yogyakarta | Andini Farm",
    metaDesc:
      "Jual sapi Limosin hidup berbagai bobot di Seyegan, Sleman, Yogyakarta. Harga sapi Limousin menyesuaikan — tanya stok & harga terbaru via WhatsApp.",
    cta: "TANYAKAN SAPI LIMOSIN",
    waMessage:
      "Halo Andini Farm, saya ingin tanya stok dan harga sapi LIMOSIN yang tersedia.",
  },
  {
    slug: "simental",
    name: "SIMENTAL",
    nameAlt: "Simmental",
    h1: "JUAL SAPI SIMENTAL HIDUP",
    earTag: "AF-SMT • SAPI HIDUP",
    photo: IMG.simental,
    photoAlt: "Sapi Simental hidup di peternakan Andini Farm Sleman",
    caption: "SIMENTAL — SIAP DITANYAKAN STOKNYA",
    tagline: "Rangka besar dengan wajah putih khas, favorit peternak dan pembeli.",
    intro:
      "Sapi Simental memiliki karakteristik tubuh besar dengan pertumbuhan dan bentuk tubuh yang menarik bagi peternak dan pembeli sapi. Jenis ini mudah dikenali dari wajah dan kaki bagian bawah yang berwarna putih.",
    karakteristik: [
      "Rangka tubuh besar dan dalam — potensinya bagus untuk penggemukan maupun pembibitan.",
      "Ciri khas wajah putih yang membuatnya mudah dibedakan dari jenis lain.",
      "Pertumbuhan cepat dan bentuk tubuh yang menarik bagi peternak maupun pembeli sapi hidup.",
      "Banyak dicari dalam bentuk Simental murni maupun cross (persilangan) dengan sapi lokal.",
    ],
    fakta: [
      { label: "ASAL JENIS", value: "Swiss (Simmental)" },
      { label: "KARAKTER", value: "Wajah putih, rangka besar" },
      { label: "PENULISAN LAIN", value: "Simmental" },
      { label: "COCOK UNTUK", value: "Qurban, penggemukan, persilangan" },
    ],
    bobot: [
      {
        range: "± 250–350 kg",
        use: "Qurban & aqiqah",
        note: "Pilihan populer untuk qurban keluarga.",
      },
      {
        range: "± 350–500 kg",
        use: "Qurban patungan & penggemukan",
        note: "Bakalan Simental cepat mengejar bobot.",
      },
      {
        range: "± 500 kg ke atas",
        use: "Qurban jumbo & perdagangan",
        note: "Tanyakan ketersediaan sesuai musim.",
      },
    ],
    kebutuhan: [
      "Qurban — badan besar dengan tampilan menarik.",
      "Aqiqah — tersedia pilihan bobot kecil hingga sedang.",
      "Penggemukan — konversi pakan Simental dikenal baik.",
      "Persilangan — pejantan dan bakalan Simental diminati peternak.",
    ],
    seo: [
      "Andini Farm menyediakan jual sapi Simental hidup untuk pembeli di Sleman, Yogyakarta dan berbagai wilayah lain. Sapi Simental — yang juga sering ditulis Simmental — dikenal dengan rangka tubuhnya yang besar dan pertumbuhan yang cepat, sehingga menjadi favorit peternak maupun pembeli sapi qurban.",
      "Harga sapi Simental sangat tergantung pada bobot, umur dan kondisi sapi saat dibeli. Karena itu, alih-alih menampilkan harga statis, kami menyarankan Anda menanyakan langsung harga sapi Simental terbaru dan stok yang ada. Beli sapi Simental di Andini Farm bisa untuk qurban, aqiqah, penggemukan maupun usaha, dan sapi bisa dikirim sesuai tujuan pembelian.",
    ],
    metaTitle: "Jual Sapi Simental (Simmental) Hidup Sleman Yogyakarta | Andini Farm",
    metaDesc:
      "Jual sapi Simental hidup berbagai bobot di Seyegan, Sleman, Yogyakarta. Harga sapi Simmental menyesuaikan — tanya stok & harga via WhatsApp.",
    cta: "TANYAKAN SAPI SIMENTAL",
    waMessage:
      "Halo Andini Farm, saya ingin tanya stok dan harga sapi SIMENTAL yang tersedia.",
  },
  {
    slug: "pegon",
    name: "PEGON SUPER",
    nameAlt: "Pegon",
    h1: "JUAL SAPI PEGON SUPER",
    earTag: "AF-PGN • SAPI HIDUP",
    photo: IMG.pegon,
    photoAlt: "Sapi Pegon Super hidup di kandang Andini Farm Yogyakarta",
    caption: "PEGON SUPER — ADAPTIF & EKONOMIS",
    tagline: "Persilangan unggulan yang adaptif, ekonomis dan mudah dirawat.",
    intro:
      "Pilihan sapi Pegon Super untuk berbagai kebutuhan pembelian sapi hidup. Pegon merupakan sapi persilangan lokal yang sudah sangat adaptif dengan iklim dan pakan di Indonesia.",
    karakteristik: [
      "Hasil persilangan sapi lokal (keturunan PO) dengan jenis unggul seperti Limosin atau Simental.",
      "Sangat adaptif terhadap iklim, pakan dan pola pemeliharaan di Indonesia.",
      "Harga lebih terjangkau dibanding Limosin atau Simental murni — value for money.",
      "Perawatan relatif mudah, cocok untuk peternak pemula maupun penggemukan skala usaha.",
    ],
    fakta: [
      { label: "ASAL JENIS", value: "Persilangan lokal Indonesia" },
      { label: "KARAKTER", value: "Adaptif, tahan banting" },
      { label: "PENULISAN LAIN", value: "Pegon" },
      { label: "COCOK UNTUK", value: "Qurban, aqiqah, penggemukan" },
    ],
    bobot: [
      {
        range: "± 200–300 kg",
        use: "Aqiqah & qurban ekonomis",
        note: "Pilihan hemat tanpa mengorbankan kondisi sapi.",
      },
      {
        range: "± 300–400 kg",
        use: "Qurban & penggemukan",
        note: "Rentang paling laris untuk Pegon Super.",
      },
      {
        range: "± 400 kg ke atas",
        use: "Qurban & perdagangan",
        note: "Tanyakan stok sesuai periode pembelian.",
      },
    ],
    kebutuhan: [
      "Qurban — bobot memadai dengan budget lebih hemat.",
      "Aqiqah — banyak pilihan sapi ukuran sedang.",
      "Penggemukan — bakalan Pegon mudah naik bobot dengan pakan lokal.",
      "Usaha — perputaran cepat dengan margin yang masuk akal.",
    ],
    seo: [
      "Andini Farm melayani jual sapi Pegon Super hidup dari Sleman, Yogyakarta. Sapi Pegon adalah sapi persilangan lokal yang terkenal adaptif dan mudah perawatannya, sehingga banyak dipilih untuk qurban, aqiqah maupun penggemukan dengan budget yang lebih ekonomis.",
      "Harga sapi Pegon menyesuaikan bobot dan kondisi sapi. Jika Anda mencari sapi Pegon hidup dengan kondisi sehat dan terawat, tanyakan stok serta harga terbaru kepada kami. Beli sapi Pegon di Andini Farm bisa disertai pengiriman ke berbagai wilayah sesuai kesepakatan.",
    ],
    metaTitle: "Jual Sapi Pegon Super Hidup Sleman Yogyakarta | Andini Farm",
    metaDesc:
      "Jual sapi Pegon Super hidup di Seyegan, Sleman, Yogyakarta. Harga sapi Pegon menyesuaikan bobot — tanya stok & harga via WhatsApp.",
    cta: "TANYAKAN SAPI PEGON",
    waMessage:
      "Halo Andini Farm, saya ingin tanya stok dan harga sapi PEGON SUPER yang tersedia.",
  },
];

export const getBreed = (slug: string) => BREEDS.find((b) => b.slug === slug);

export const breedWa = (b: Breed) => waLink(b.waMessage);

export const BELI_STEPS = [
  {
    title: "HUBUNGI VIA WHATSAPP",
    desc: "Ceritakan kebutuhan Anda: jenis sapi, perkiraan bobot, budget dan tujuan pembelian (qurban, aqiqah, penggemukan atau dagang).",
  },
  {
    title: "LIHAT SAPI YANG TERSEDIA",
    desc: "Kami kirimkan foto dan video sapi yang tersedia. Anda juga bisa datang langsung ke kandang di Japanan, Seyegan untuk memilih sendiri.",
  },
  {
    title: "SEPAKAT & PEMBAYARAN",
    desc: "Setelah cocok dengan sapi dan harganya, kita sepakati cara pembayaran yang aman dan jelas untuk kedua pihak.",
  },
  {
    title: "AMBIL ATAU DIKIRIM",
    desc: "Sapi bisa diambil sendiri atau kami kirim ke lokasi Anda. Pengiriman disesuaikan dengan jarak, jumlah sapi dan kondisi perjalanan.",
  },
];
