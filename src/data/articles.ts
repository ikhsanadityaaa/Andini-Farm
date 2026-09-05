import { IMG } from "./site";

export type Article = {
  slug: string;
  title: string;
  category: string;
  read: string;
  excerpt: string;
  cover: string;
  body: string[];
  checklist?: string[];
  ctaWa: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "cara-memilih-sapi-sehat",
    title: "Cara Memilih Sapi yang Sehat Sebelum Membeli",
    category: "Panduan Membeli",
    read: "5 mnt",
    excerpt:
      "Mata, bulu, nafsu makan sampai cara berdiri — tanda-tanda fisik yang bisa Anda cek sendiri sebelum deal.",
    cover: IMG.qurban,
    body: [
      "Membeli sapi tanpa mengecek kondisinya ibarat membeli barang dengan mata tertutup. Kabar baiknya, sapi yang sehat itu mudah dikenali — bahkan oleh orang awam, asal tahu apa yang harus dilihat.",
      "Berikut tanda-tanda sapi sehat yang biasa kami cek setiap hari di kandang:",
    ],
    checklist: [
      "Mata cerah dan jernih, tidak berair atau belekan",
      "Bulu mengilap dan tidak kusam, kulit lentur saat dicubit perlahan",
      "Nafsu makan bagus — responsif saat disodori pakan",
      "Berdiri tegak, berjalan normal, tidak pincang",
      "Napas teratur, tidak batuk-batuk",
      "Kotoran padat, tidak mencret",
      "Suhu tubuh normal dan sapi tampak aktif",
    ],
    ctaWa: "Halo Andini Farm, saya mau minta tolong dicekkan kondisi sapi yang tersedia.",
  },
  {
    slug: "cara-memperkirakan-bobot-sapi",
    title: "Cara Memperkirakan Bobot Sapi Tanpa Timbangan",
    category: "Panduan Membeli",
    read: "6 mnt",
    excerpt:
      "Rumus lingkar dada yang dipakai para peternak untuk menaksir bobot sapi — praktis dan cukup akurat.",
    cover: IMG.penggemukan,
    body: [
      "Tidak semua tempat punya timbangan ternak, dan mata yang terlatih pun bisa meleset puluhan kilogram. Karena itu peternak punya cara klasik menaksir bobot: mengukur lingkar dada dan panjang badan sapi.",
      "Rumus yang umum dipakai (rumus Schrool): bobot (kg) = (lingkar dada dalam cm)² × panjang badan dalam cm ÷ 10.844. Ukur lingkar dada tepat di belakang kaki depan, dan panjang badan dari bahu sampai pangkal ekor.",
      "Contoh: sapi dengan lingkar dada 180 cm dan panjang badan 140 cm, perkiraan bobotnya sekitar 418 kg. Selisih dengan timbangan biasanya hanya beberapa persen — cukup untuk bahan negosiasi yang masuk akal.",
      "Kalau Anda ragu, ajak peternak yang berpengalaman untuk melihat sapi langsung. Di Andini Farm, kami terbuka menemani pembeli mengecek kondisi dan memperkirakan bobot bersama di kandang.",
    ],
    ctaWa: "Halo Andini Farm, saya ingin tanya perkiraan bobot sapi yang tersedia.",
  },
  {
    slug: "perbedaan-limosin-dan-simental",
    title: "Perbedaan Sapi Limosin dan Simental",
    category: "Jenis Sapi",
    read: "6 mnt",
    excerpt:
      "Sama-sama besar, tapi karakternya beda. Ini cara mudah membedakannya — dan mana yang cocok untuk Anda.",
    cover: IMG.heroLimosin,
    body: [
      "Dua jenis ini paling sering dibandingkan pembeli, dan wajar saja: keduanya sama-sama bertubuh besar dan populer untuk qurban maupun penggemukan.",
      "Cara paling mudah membedakannya dari warna. Limosin cenderung cokelat kemerahan merata dengan moncong dan sekitar mata yang lebih terang. Simental punya ciri khas kontras: badan cokelat dengan kepala dan kaki putih.",
      "Soal bentuk tubuh, Limosin terkenal dengan perototan yang padat — punggung dan paha penuh daging. Simental unggul di rangka yang besar dan dalam, dengan pertumbuhan yang cepat.",
      "Untuk qurban, dua-duanya gagah dan layak. Untuk penggemukan, keduanya responsif terhadap pakan. Pilihan akhirnya sering kembali ke selera dan ketersediaan — datang ke kandang, bandingkan langsung, baru putuskan.",
    ],
    ctaWa: "Halo Andini Farm, saya masih menimbang antara Limosin dan Simental. Bisa dibantu?",
  },
  {
    slug: "mengenal-sapi-limosin",
    title: "Mengenal Sapi Limosin: Si Besar dari Perancis",
    category: "Jenis Sapi",
    read: "5 mnt",
    excerpt:
      "Asal-usul, ciri khas, dan alasan Limosin jadi incaran untuk qurban besar dan penggemukan.",
    cover: IMG.heroLimosin,
    body: [
      "Limosin berasal dari wilayah Limousin di Perancis dan termasuk salah satu ras sapi pedaging terbaik di dunia. Di Indonesia, Limosin sering jadi 'primadona' saat musim qurban karena posturnya yang besar dan gagah.",
      "Ciri khasnya: bulu cokelat kemerahan sampai cokelat tua, tubuh panjang, perototan padat di punggung dan paha, serta hasil karkas yang tinggi — artinya persentase dagingnya banyak dibanding bobot tubuhnya.",
      "Untuk penggemukan, Limosin punya pertambahan bobot harian yang bagus asal pakannya memadai. Tidak heran banyak peternak menjadikan bakalan Limosin sebagai andalan programnya.",
      "Kalau Anda mengincar qurban dengan penampilan menonjol atau bakalan dengan potensi bobot besar, Limosin layak masuk daftar teratas.",
    ],
    ctaWa: "Halo Andini Farm, saya ingin tanya stok sapi Limosin.",
  },
  {
    slug: "mengenal-sapi-simental",
    title: "Mengenal Sapi Simental: Rangka Besar, Tumbuh Cepat",
    category: "Jenis Sapi",
    read: "5 mnt",
    excerpt:
      "Dari lembah Simme di Swiss sampai kandang-kandang di Jawa — kenapa Simental begitu disukai.",
    cover: IMG.simental,
    body: [
      "Simental (Simmental) berasal dari lembah Simme di Swiss dan termasuk ras dwiguna — di negara asalnya dipelihara untuk daging sekaligus susu. Di Indonesia, Simental dibesarkan sebagai sapi pedaging.",
      "Penampilannya mudah dikenali: badan cokelat kemerahan dengan kepala dan kaki putih. Rangkanya besar dan dalam, dadanya lebar, dan pertumbuhannya tergolong cepat.",
      "Kombinasi rangka besar dan laju tumbuh cepat inilah yang membuat Simental jadi favorit dua kalangan sekaligus: pembeli qurban yang mencari sapi gagah, dan peternak penggemukan yang mengejar tonase.",
      "Menjelang Idul Adha, Simental ukuran 350 kg ke atas biasanya paling cepat berpindah tangan. Kalau mengincarnya, lebih baik amankan lebih awal.",
    ],
    ctaWa: "Halo Andini Farm, saya ingin tanya stok sapi Simental.",
  },
  {
    slug: "mengenal-sapi-pegon",
    title: "Mengenal Sapi Pegon: Persilangan Lokal yang Adaptif",
    category: "Jenis Sapi",
    read: "5 mnt",
    excerpt:
      "Tidak sepopuler Limosin, tapi nilai ekonomisnya tinggi — ini alasan Pegon punya penggemar setia.",
    cover: IMG.pegon,
    body: [
      "Pegon adalah hasil persilangan sapi lokal (umumnya Peranakan Ongole) dengan sapi Eropa seperti Limosin atau Simental. Hasilnya: sapi yang mewarisi keunggulan dua-duanya.",
      "Dari sisi lokal, Pegon mewarisi ketahanan terhadap iklim tropis, pakan seadanya, dan penyakit — perawatannya relatif mudah. Dari sisi Eropa, Pegon mendapat postur dan perototan yang lebih baik daripada sapi lokal murni.",
      "Istilah 'Pegon Super' biasanya dipakai untuk Pegon dengan postur dan perototan yang lebih menonjol — seringkali dari persilangan dengan pejantan Limosin atau Simental berkualitas.",
      "Untuk aqiqah, qurban dengan budget terbatas, maupun dagang dengan perputaran cepat, Pegon adalah pilihan yang sangat masuk akal. Harganya bersahabat tanpa mengorbankan kelayakan.",
    ],
    ctaWa: "Halo Andini Farm, saya ingin tanya stok sapi Pegon Super.",
  },
  {
    slug: "tips-membeli-sapi",
    title: "Tips Membeli Sapi Supaya Tidak Kecewa",
    category: "Tips",
    read: "7 mnt",
    excerpt:
      "Hampir dua puluh tahun berurusan dengan jual-beli sapi, ini hal-hal yang selalu kami ingatkan ke pembeli.",
    cover: IMG.pasar,
    body: [
      "Membeli sapi itu soal percaya — tapi kepercayaan yang sehat dibangun di atas informasi yang jelas. Beberapa hal yang sebaiknya tidak dilewatkan:",
    ],
    checklist: [
      "Beli dari penjual yang jelas alamat kandangnya — bisa dikunjungi kapan saja",
      "Lihat sapinya langsung, atau minimal lewat video call saat sapinya ada di depan Anda",
      "Tanyakan umur, riwayat pakan, dan kondisi kesehatan",
      "Sepakati harga final secara tertulis (chat cukup) — termasuk ongkos kirim bila ada",
      "Waspada harga yang terlalu murah dari pasaran — cek dulu alasannya",
      "Untuk qurban: pastikan sudah poel (cukup umur) dan bebas cacat",
      "Jangan ragu minta pendapat peternak lain sebelum membayar",
    ],
    ctaWa: "Halo Andini Farm, saya ingin tanya-tanya dulu sebelum membeli sapi.",
  },
  {
    slug: "memilih-sapi-untuk-qurban",
    title: "Cara Memilih Sapi untuk Qurban yang Sesuai Syariat",
    category: "Qurban",
    read: "6 mnt",
    excerpt:
      "Cukup umur, sehat, dan bebas cacat — tiga syarat inti plus tips praktis memilih sapi qurban.",
    cover: IMG.qurban,
    body: [
      "Qurban itu ibadah, jadi syarat sah hewan menjadi hal pertama — sebelum bicara harga dan ukuran. Untuk sapi, tiga syarat intinya: cukup umur (sekitar dua tahun atau sudah poel), sehat, dan tidak cacat.",
      "Poel bisa dicek dari gigi: sepasang gigi seri tengah bagian bawah sudah berganti menjadi gigi tetap yang lebih besar dan rata. Penjual yang paham biasanya langsung menunjukkan hal ini bila diminta.",
      "Cacat yang membuat qurban tidak sah antara lain: buta sebelah atau kedua mata, pincang yang jelas, sakit yang tampak, dan sangat kurus sampai tak bersumsum. Karena itu memilih sapi yang sehat bukan sekadar soal nilai daging — tapi soal sahnya ibadah.",
      "Soal ukuran, satu sapi boleh untuk patungan hingga tujuh orang. Sesuaikan bobot dengan jumlah peserta dan budget — tidak harus selalu yang paling besar, yang penting layak dan ikhlas.",
      "Tips terakhir: beli jauh hari sebelum Idul Adha. Selain pilihan lebih banyak, Anda bisa titip rawat dulu di kandang penjual dan sapi dikirim mendekati hari H.",
    ],
    ctaWa: "Halo Andini Farm, saya mencari sapi untuk qurban. Bisa dibantu carikan?",
  },
  {
    slug: "panduan-sapi-untuk-aqiqah",
    title: "Panduan Memilih Sapi untuk Aqiqah",
    category: "Aqiqah",
    read: "4 mnt",
    excerpt:
      "Bolehkah aqiqah dengan sapi? Boleh. Ini panduan memilih bobot dan jenis yang pas untuk keluarga.",
    cover: IMG.aqiqah,
    body: [
      "Mayoritas ulama membolehkan aqiqah dengan sapi, sebagaimana bolehnya patungan qurban dengan sapi. Satu ekor sapi bisa mencukupi untuk aqiqah, bahkan untuk dibagikan lebih luas.",
      "Untuk aqiqah, tidak perlu memaksakan sapi berukuran jumbo. Bobot 200–300 kg biasanya sudah sangat memadai — cukup untuk kebutuhan keluarga besar tanpa membebani budget.",
      "Jenis yang sering dipilih untuk aqiqah adalah Pegon atau Simental ukuran kecil, karena harganya bersahabat dengan kondisi tetap sehat dan layak. Yang penting: sapinya sehat, tidak cacat, dan layak dikonsumsi.",
      "Sampaikan tanggal acara (biasanya hari ke-7, ke-14, atau ke-21) saat memesan, supaya sapi bisa diantar tepat waktu — ke rumah Anda atau langsung ke jasa catering aqiqah.",
    ],
    ctaWa: "Halo Andini Farm, saya mencari sapi untuk aqiqah. Bisa info bobot dan harga?",
  },
  {
    slug: "sapi-untuk-penggemukan",
    title: "Sapi Seperti Apa yang Cocok untuk Penggemukan?",
    category: "Penggemukan",
    read: "7 mnt",
    excerpt:
      "Salah pilih bakalan, program bisa rugi. Ini kriteria bakalan yang layak dibeli menurut pengalaman kami.",
    cover: IMG.penggemukan,
    body: [
      "Keuntungan penggemukan ditentukan sejak hari pertama — saat membeli bakalan. Bakalan yang salah akan menghabiskan pakan tanpa menghasilkan bobot yang sepadan.",
      "Ini kriteria bakalan yang kami prioritaskan saat memilih:",
    ],
    checklist: [
      "Umur muda, sekitar 1–2 tahun — pertumbuhannya masih cepat",
      "Kerangka bagus: punggung lebar dan rata, dada dalam, kaki lurus dan kuat",
      "Badan kurus tapi sehat — kurus karena kurang pakan, bukan karena sakit",
      "Mata cerah, bulu tidak kusam, nafsu makan bagus",
      "Jenis unggul untuk penggemukan: Limosin, Simental, atau Pegon berkualitas",
    ],
    ctaWa: "Halo Andini Farm, saya mencari sapi bakalan untuk penggemukan.",
  },
  {
    slug: "faktor-harga-sapi",
    title: "Apa Saja yang Memengaruhi Harga Sapi?",
    category: "Harga",
    read: "6 mnt",
    excerpt:
      "Kenapa tidak ada harga mati untuk sapi? Karena harganya bergerak mengikuti banyak faktor ini.",
    cover: IMG.pasar,
    body: [
      "Banyak orang bertanya: kenapa penjual sapi jarang memasang harga mati di website? Karena harga sapi bergerak mengikuti banyak faktor — dan angka yang dipasang hari ini bisa menyesatkan minggu depan.",
      "Faktor utamanya: bobot. Harga sapi umumnya dihitung per kilogram bobot, jadi selisih 20 kg saja sudah mengubah harga. Faktor kedua adalah jenis — Limosin dan Simental biasanya di atas Pegon dengan bobot setara.",
      "Kondisi fisik dan kesehatan ikut menentukan: perototan, kerangka, dan kelincahan sapi. Lalu waktu pembelian — menjelang Idul Adha, harga naik karena permintaan melonjak, sementara di luar musim biasanya lebih longgar.",
      "Harga sapi mengikuti bobot, jenis, umur dan kondisi. Wajar jika tidak ada harga mati di website penjual — yang penting harga akhir disepakati dengan jelas, termasuk apakah sudah termasuk ongkos kirim.",
      "Cara paling praktis? Tanyakan langsung harga hari ini untuk sapi dengan spesifikasi yang Anda cari. Penjual yang baik akan menjawab dengan angka yang jelas, bukan berputar-putar.",
    ],
    ctaWa: "Halo Andini Farm, saya ingin tanya harga sapi terbaru hari ini.",
  },
  {
    slug: "pengiriman-sapi-antar-kota",
    title: "Bagaimana Proses Pengiriman Sapi Antar Kota?",
    category: "Pengiriman",
    read: "5 mnt",
    excerpt:
      "Dari kandang di Seyegan sampai halaman Anda — begini gambaran umum pengiriman sapi antar kota.",
    cover: IMG.truk,
    body: [
      "Beli sapi dari luar kota itu aman, asal pengirimannya benar. Kendaraan yang dipakai biasanya truk atau colt khusus ternak, dengan lantai kayu atau bambu agar sapi tidak licin dan cedera.",
      "Sebelum dimuat, sapi sebaiknya dipuasakan ringan beberapa jam supaya tidak mabuk perjalanan. Pemuatan dilakukan dengan tenang — sapi yang stres akan kehilangan bobot dan rentan sakit.",
      "Perjalanan antar kota di Pulau Jawa umumnya ditempuh malam atau dini hari saat lalu lintas lengang dan suhu sejuk. Setiba di tujuan, sapi diistirahatkan, diberi minum, lalu pakan sedikit demi sedikit.",
      "Biaya pengiriman dihitung dari jarak, jumlah sapi, dan akses jalan menuju lokasi. Karena itu ongkos kirim selalu dikonfirmasi di depan — pembeli tahu angka finalnya sebelum membayar.",
      "Pengiriman sapi antar kota sudah menjadi rutinitas kami. Tanyakan ongkos kirim ke lokasi Anda, kami hitungkan sekalian dengan harga sapinya.",
    ],
    ctaWa: "Halo Andini Farm, saya ingin tanya ongkos kirim sapi ke kota saya.",
  },
  {
    slug: "pertanyaan-sebelum-membeli-sapi",
    title: "Apa Saja yang Perlu Ditanyakan Sebelum Membeli Sapi?",
    category: "Tips",
    read: "5 mnt",
    excerpt:
      "Simpan daftar ini — tanyakan ke penjual mana pun sebelum Anda sepakat membeli.",
    cover: IMG.bapak,
    body: [
      "Pembeli yang banyak bertanya bukan pembeli yang rewel — tapi pembeli yang tahu. Ini daftar pertanyaan yang sebaiknya dijawab tuntas sebelum Anda deal:",
    ],
    checklist: [
      "Berapa perkiraan bobotnya, dan kapan terakhir ditimbang/ditaksir?",
      "Berapa umurnya? Sudah poel atau belum?",
      "Pakannya apa selama ini? Konsentrat, hijauan, atau kombinasi?",
      "Apakah sapinya sudah divaksin atau diobati cacing?",
      "Bisa lihat video terbaru atau datang langsung ke kandang?",
      "Harganya sudah termasuk ongkos kirim atau belum?",
      "Bagaimana skema pembayarannya — DP dulu atau langsung lunas?",
      "Kapan sapi bisa dikirim atau diambil?",
    ],
    ctaWa: "Halo Andini Farm, saya ada beberapa pertanyaan sebelum membeli sapi.",
  },
  {
    slug: "tips-membeli-sapi-luar-kota",
    title: "Tips Membeli Sapi dari Luar Kota dengan Aman",
    category: "Tips",
    read: "6 mnt",
    excerpt:
      "Jarak bukan halangan, asal tahu caranya. Ini panduan aman beli sapi dari peternak di kota lain.",
    cover: IMG.truk,
    body: [
      "Banyak pembeli kami berasal dari luar Sleman — dan transaksi tetap berjalan aman karena dilakukan dengan cara yang benar. Beberapa prinsipnya:",
    ],
    checklist: [
      "Cek jejak penjualnya: alamat kandang jelas, nomor WhatsApp aktif, dan terbuka dikunjungi",
      "Minta video call langsung dari kandang — lihat sapinya saat itu juga, bukan video lama",
      "Sepakati semua detail di chat: spesifikasi sapi, harga final, ongkos kirim, jadwal",
      "Gunakan skema pembayaran yang masuk akal — transfer ke nama yang jelas, simpan buktinya",
      "Minta kabar berkala: foto/video sapi menjelang pengiriman",
      "Jika ragu, datang langsung atau ajak kerabat yang dekat dengan lokasi untuk melihat",
    ],
    ctaWa: "Halo Andini Farm, saya dari luar kota dan ingin beli sapi. Bagaimana prosedurnya?",
  },
];

export const ARTICLE_CATEGORIES = [
  "Semua",
  ...Array.from(new Set(ARTICLES.map((a) => a.category))),
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
