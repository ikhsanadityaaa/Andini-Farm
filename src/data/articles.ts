import { IMG } from "./site";

export type Article = {
  slug: string;
  title: string;
  category: string;
  read: string;
  excerpt: string;
  cover: string;
  sections: { h: string; ps: string[] }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "cara-memilih-sapi-sehat",
    title: "Cara Memilih Sapi yang Sehat Sebelum Membeli",
    category: "PANDUAN",
    read: "5 mnt",
    excerpt:
      "Sebelum deal harga, pastikan dulu sapinya sehat. Ini hal-hal yang selalu kami cek sendiri di kandang.",
    cover: IMG.qurban,
    sections: [
      {
        h: "Perhatikan gerak dan sikapnya",
        ps: [
          "Sapi yang sehat berdiri tegak, langkahnya mantap dan responsif terhadap lingkungan. Kalau sapi tampak lesu, menyendiri, atau terus-terusan berbaring, itu tanda Anda perlu bertanya lebih jauh sebelum membeli.",
          "Perhatikan juga cara sapi menoleh dan berjalan saat didekati. Sapi sehat umumnya waspada dan tidak goyah saat digiring.",
        ],
      },
      {
        h: "Cek mata, hidung dan bulu",
        ps: [
          "Mata sapi sehat terlihat cerah dan tidak berair berlebihan. Hidungnya lembap, tidak beringus kental. Bulunya mengilap dan rata — bulu kusam dan berdiri sering menandakan kondisi tubuh yang kurang baik.",
        ],
      },
      {
        h: "Lihat nafsu makannya",
        ps: [
          "Cara paling mudah menilai kondisi sapi adalah melihatnya makan. Sapi yang lahap memakan hijauan dan konsentrat hampir bisa dipastikan dalam kondisi baik. Kalau memungkinkan, minta penjual memberi pakan saat Anda melihat sapinya.",
        ],
      },
      {
        h: "Tanyakan riwayat pemeliharaan",
        ps: [
          "Tanya pakan sehari-hari, jadwal obat cacing, dan apakah sapi pernah sakit. Penjual yang berpengalaman tidak akan keberatan menjawab pertanyaan-pertanyaan ini — justru dari sini Anda bisa menilai kejujuran penjualnya.",
        ],
      },
    ],
  },
  {
    slug: "cara-memperkirakan-bobot-sapi",
    title: "Cara Memperkirakan Bobot Sapi Tanpa Timbangan",
    category: "PANDUAN",
    read: "4 mnt",
    excerpt:
      "Tidak semua tempat jual sapi punya timbangan digital. Begini cara memperkirakan bobot sapi yang biasa dipakai peternak.",
    cover: IMG.penggemukan,
    sections: [
      {
        h: "Ukur lingkar dada dan panjang badan",
        ps: [
          "Cara klasik yang paling sering dipakai adalah rumus Schoorl: perkiraan bobot (kg) = (lingkar dada + 22)² / 100, dengan lingkar dada dalam satuan cm. Ukur lingkar dada tepat di belakang kaki depan, dan usahakan sapi berdiri tenang saat diukur.",
          "Hasilnya memang perkiraan, biasanya meleset beberapa kilogram, tapi cukup untuk menentukan kelas harga dan kecocokan dengan kebutuhan Anda.",
        ],
      },
      {
        h: "Bandingkan dengan sapi lain yang bobotnya diketahui",
        ps: [
          "Kalau Anda sering ke pasar hewan atau kandang, lama-lama mata Anda terlatih. Bandingkan sapi yang mau dibeli dengan sapi lain yang bobotnya sudah diketahui — tinggi punggung, panjang badan dan isi perut adalah petunjuk yang paling terlihat.",
        ],
      },
      {
        h: "Minta pendapat yang berpengalaman",
        ps: [
          "Tidak ada salahnya meminta taksiran dari peternak atau pedagang senior. Orang yang bertahun-tahun menangani sapi bisa menaksir bobot dengan selisih yang relatif kecil hanya dari melihat.",
        ],
      },
      {
        h: "Timbang jika memungkinkan",
        ps: [
          "Untuk pembelian dalam jumlah banyak atau bernilai besar, menimbang di timbangan hewan adalah pilihan paling aman. Beberapa daerah memiliki timbangan umum di sekitar pasar hewan.",
        ],
      },
    ],
  },
  {
    slug: "perbedaan-limosin-dan-simental",
    title: "Perbedaan Sapi Limosin dan Simental",
    category: "JENIS SAPI",
    read: "5 mnt",
    excerpt:
      "Dua-duanya sapi besar favorit di Indonesia, tapi karakternya berbeda. Mana yang lebih cocok untuk kebutuhan Anda?",
    cover: IMG.simental,
    sections: [
      {
        h: "Tampilan fisik",
        ps: [
          "Limosin berbulu cokelat kemerahan merata dengan badan yang panjang dan berotot. Simental mudah dikenali dari wajahnya yang putih — sering dengan kaki bagian bawah yang juga putih — dan rangka tubuh yang besar dan dalam.",
        ],
      },
      {
        h: "Karakter pertumbuhan",
        ps: [
          "Keduanya sama-sama unggul dalam pertumbuhan bobot. Limosin cenderung unggul di persentase karkas dan bentuk otot, sedangkan Simental dikenal punya rangka besar dengan pertambahan bobot harian yang sangat baik, terutama dalam program penggemukan.",
        ],
      },
      {
        h: "Selera pasar",
        ps: [
          "Untuk qurban, keduanya sama-sama laris. Banyak pembeli memilih Limosin karena tampilannya yang gagah, sementara Simental sering dipilih karena tubuhnya yang tampak besar dan berisi. Di beberapa daerah, Simental cross justru paling dicari karena harganya lebih fleksibel.",
        ],
      },
      {
        h: "Jadi, pilih yang mana?",
        ps: [
          "Kalau Anda mencari tampilan gagah dan otot padat, Limosin jawabannya. Kalau mencari rangka besar dan pertumbuhan cepat, Simental layak diprioritaskan. Tentu saja kondisi per ekor lebih penting daripada sekadar jenisnya — dan di sinilah pengalaman penjual berperan.",
        ],
      },
    ],
  },
  {
    slug: "mengenal-sapi-limosin",
    title: "Mengenal Sapi Limosin: Si Cokelat Berotot",
    category: "JENIS SAPI",
    read: "4 mnt",
    excerpt:
      "Dari Prancis ke kandang-kandang di Jawa — kenapa sapi Limosin jadi salah satu jenis paling dicari di Indonesia.",
    cover: IMG.heroLimosin,
    sections: [
      {
        h: "Asal dan sejarahnya",
        ps: [
          "Limosin berasal dari wilayah Limousin di Prancis. Masuk ke Indonesia sebagai sapi impor, jenis ini ternyata cocok dengan iklim tropis dan cepat menjadi favorit, baik untuk penggemukan maupun sebagai sapi qurban premium.",
        ],
      },
      {
        h: "Ciri khas yang mudah dikenali",
        ps: [
          "Bulunya cokelat kemerahan, kadang dengan warna lebih terang di sekitar mata dan moncong. Badannya panjang, dalam dan berotot, dengan punggung yang rata. Sapi jantan dewasa bisa mencapai bobot yang sangat besar dibanding sapi lokal.",
        ],
      },
      {
        h: "Kenapa banyak yang mencari",
        ps: [
          "Selain posturnya yang mengesankan, Limosin punya pertambahan bobot yang baik dan persentase daging yang tinggi. Untuk qurban, sapi Limosin sering jadi pilihan panitia yang ingin sapi besar dengan tampilan meyakinkan.",
        ],
      },
      {
        h: "Hal yang perlu diperhatikan",
        ps: [
          "Limosin murni biasanya berharga lebih tinggi dari sapi lokal atau persilangan. Karena itu, pastikan Anda membeli dari penjual yang bisa menunjukkan kondisi sapi secara langsung — lewat foto, video, atau kunjungan kandang.",
        ],
      },
    ],
  },
  {
    slug: "mengenal-sapi-simental",
    title: "Mengenal Sapi Simental: Rangka Besar, Wajah Putih",
    category: "JENIS SAPI",
    read: "4 mnt",
    excerpt:
      "Simental adalah salah satu sapi potong paling populer di dunia. Ini yang perlu Anda tahu sebelum membelinya.",
    cover: IMG.simental,
    sections: [
      {
        h: "Berasal dari Swiss",
        ps: [
          "Simental (Simmental) berasal dari lembah Simme di Swiss dan termasuk salah satu jenis sapi tertua yang masih dikembangkan hingga sekarang. Di Indonesia, Simental banyak dipelihara murni maupun disilangkan dengan sapi lokal.",
        ],
      },
      {
        h: "Ciri fisiknya",
        ps: [
          "Ciri paling khas adalah wajah putih yang kontras dengan badan merah bata atau cokelat. Rangkanya besar, tulang kuat, dan tubuhnya dalam. Kombinasi ini membuat Simental terlihat bongsor bahkan sejak usia muda.",
        ],
      },
      {
        h: "Keunggulan untuk peternak",
        ps: [
          "Pertambahan bobot harian Simental termasuk yang terbaik di antara sapi potong. Untuk penggemukan, ini berarti waktu pemeliharaan bisa lebih efisien. Untuk qurban, bobot besarnya sangat diminati untuk patungan tujuh orang.",
        ],
      },
      {
        h: "Simental murni dan cross",
        ps: [
          "Di pasar, Anda akan menemui Simental murni dan Simental cross (persilangan dengan sapi lokal). Keduanya punya pasar masing-masing — cross biasanya lebih ekonomis dan adaptif, sedangkan murni unggul di bobot akhir.",
        ],
      },
    ],
  },
  {
    slug: "mengenal-sapi-pegon",
    title: "Mengenal Sapi Pegon: Persilangan Lokal yang Adaptif",
    category: "JENIS SAPI",
    read: "4 mnt",
    excerpt:
      "Tidak sepopuler Limosin, tapi sapi Pegon punya tempat khusus di hati peternak Jawa. Ini alasannya.",
    cover: IMG.pegon,
    sections: [
      {
        h: "Apa itu sapi Pegon?",
        ps: [
          "Pegon adalah sapi persilangan lokal — umumnya turunan sapi PO (Peranakan Ongole) yang disilangkan dengan jenis unggul seperti Limosin atau Simental. Hasilnya: sapi yang tubuhnya lebih berisi dari sapi lokal, tapi tetap sangat adaptif.",
        ],
      },
      {
        h: "Keunggulan utamanya",
        ps: [
          "Pegon tahan terhadap iklim tropis, tidak rewel soal pakan, dan perawatannya mudah. Untuk peternak pemula atau penggemukan dengan pakan seadanya, Pegon sering menjadi pilihan paling masuk akal.",
        ],
      },
      {
        h: "Posisinya di pasar",
        ps: [
          "Harganya berada di bawah Limosin dan Simental murni, sehingga Pegon sering dipilih untuk qurban dengan budget menengah atau aqiqah. Di pasar hewan Jawa, Pegon termasuk jenis yang cepat laku.",
        ],
      },
      {
        h: "Cocok untuk siapa?",
        ps: [
          "Kalau Anda mencari sapi sehat dengan harga lebih terjangkau dan perawatan mudah, Pegon Super layak dipertimbangkan. Untuk penggemukan skala usaha, margin Pegon juga sering kali lebih aman.",
        ],
      },
    ],
  },
  {
    slug: "tips-membeli-sapi-hidup",
    title: "Tips Membeli Sapi Hidup Agar Tidak Kecewa",
    category: "PANDUAN",
    read: "5 mnt",
    excerpt:
      "Membeli sapi bukan seperti membeli barang — ada nyawa dan kepercayaan di dalamnya. Ini tips dari pengalaman kami sejak 2011.",
    cover: IMG.kandang,
    sections: [
      {
        h: "Beli dari penjual yang jelas",
        ps: [
          "Pastikan penjual punya lokasi kandang yang bisa didatangi, nomor yang bisa dihubungi, dan rekam jejak yang bisa dicek. Penjual yang berpengalaman sejak lama biasanya punya jaringan dan reputasi yang ia jaga.",
        ],
      },
      {
        h: "Lihat sapinya langsung — atau minta video",
        ps: [
          "Jangan pernah membeli hanya dari satu foto lama. Minta video terbaru yang memperlihatkan sapi berjalan utuh dari berbagai sisi. Kalau jarak memungkinkan, datang langsung ke kandang adalah cara terbaik.",
        ],
      },
      {
        h: "Sepakati harga berdasarkan kondisi",
        ps: [
          "Harga sapi hidup mengikuti bobot, jenis, umur dan kondisi. Wajar jika tidak ada harga mati di website penjual — yang penting harga akhir disepakati dengan jelas, termasuk apakah sudah termasuk ongkos kirim.",
        ],
      },
      {
        h: "Jelas di awal soal pengiriman",
        ps: [
          "Tanyakan siapa yang menanggung ongkos kirim, kendaraan apa yang dipakai, dan berapa lama perjalanan. Kesepakatan yang jelas di awal menghindarkan salah paham di hari pengiriman.",
        ],
      },
    ],
  },
  {
    slug: "cara-memilih-sapi-qurban",
    title: "Cara Memilih Sapi untuk Qurban",
    category: "QURBAN",
    read: "5 mnt",
    excerpt:
      "Qurban adalah ibadah — sapinya harus memenuhi syarat. Ini panduan memilih sapi qurban yang sehat dan sah.",
    cover: IMG.qurban,
    sections: [
      {
        h: "Pastikan syarat sah terpenuhi",
        ps: [
          "Sapi qurban minimal berumur dua tahun atau sudah poel (berganti sepasang gigi seri). Sapi harus sehat, tidak pincang, tidak buta, tidak kurus kering, dan tidak cacat yang mengurangi daging. Ini syarat dasar yang tidak bisa ditawar.",
        ],
      },
      {
        h: "Perhitungkan jumlah peserta patungan",
        ps: [
          "Satu sapi boleh untuk patungan hingga tujuh orang. Hitung bobot yang pantas untuk jumlah peserta — umumnya panitia mencari sapi 250 kg ke atas agar hasil dagingnya memadai untuk pembagian.",
        ],
      },
      {
        h: "Pesan jauh hari sebelum Idul Adha",
        ps: [
          "Menjelang Idul Adha, sapi bagus cepat sekali habis dan harga naik. Memesan satu sampai dua bulan sebelumnya memberi Anda pilihan lebih banyak dan harga yang lebih tenang. Banyak pembeli kami sudah booking sejak jauh hari.",
        ],
      },
      {
        h: "Tanyakan perawatan menjelang penyembelihan",
        ps: [
          "Kalau sapi dibeli lebih awal dan dititipkan di kandang penjual, tanyakan bagaimana perawatannya: pakan, tempat dan kapan sapi akan dikirim ke lokasi. Penjual yang baik akan menjelaskan ini dengan terbuka.",
        ],
      },
    ],
  },
  {
    slug: "panduan-sapi-aqiqah",
    title: "Panduan Memilih Sapi untuk Aqiqah",
    category: "AQIQAH",
    read: "4 mnt",
    excerpt:
      "Aqiqah dengan sapi semakin umum di kota besar. Ini yang perlu diperhatikan saat memilih sapinya.",
    cover: IMG.aqiqah,
    sections: [
      {
        h: "Bolehkah aqiqah dengan sapi?",
        ps: [
          "Boleh. Mayoritas ulama membolehkan satu sapi untuk aqiqah, dengan ketentuan sapi tersebut sehat dan tidak cacat — mirip dengan ketentuan qurban. Karena porsinya besar, aqiqah dengan sapi sering dipakai untuk acara keluarga besar atau berbagi lebih luas.",
        ],
      },
      {
        h: "Pilih bobot yang sesuai kebutuhan",
        ps: [
          "Tidak perlu memaksakan sapi jumbo. Untuk aqiqah, sapi 200–300 kg biasanya sudah sangat memadai. Selain lebih hemat, distribusi dagingnya juga lebih mudah diatur.",
        ],
      },
      {
        h: "Jenis sapi yang cocok",
        ps: [
          "Pegon Super dan Simental atau Limosin ukuran kecil sama-sama cocok. Pegon sering dipilih karena harganya yang lebih bersahabat dengan kondisi tetap sehat dan terawat.",
        ],
      },
      {
        h: "Atur waktu dan pengiriman",
        ps: [
          "Aqiqah umumnya dilaksanakan hari ke-7, ke-14 atau ke-21 setelah kelahiran. Sampaikan tanggal acaranya saat memesan agar sapi bisa disiapkan dan dikirim tepat waktu ke rumah Anda atau ke jasa catering aqiqah.",
        ],
      },
    ],
  },
  {
    slug: "sapi-cocok-penggemukan",
    title: "Sapi Seperti Apa yang Cocok untuk Penggemukan?",
    category: "PENGGEMUKAN",
    read: "5 mnt",
    excerpt:
      "Salah pilih bakalan, program penggemukan bisa rugi. Ini kriteria bakalan yang bagus menurut pengalaman kami.",
    cover: IMG.penggemukan,
    sections: [
      {
        h: "Pilih kerangka yang bagus",
        ps: [
          "Bakalan yang bagus punya rangka besar: punggung lebar dan rata, dada dalam, kaki kuat dan lurus. Kerangka menentukan batas atas bobot yang bisa dicapai — daging tinggal mengikuti.",
        ],
      },
      {
        h: "Umur dan kondisi gigi",
        ps: [
          "Bakalan muda (sekitar 1–2 tahun) umumnya paling efisien untuk digemukkan karena pertumbuhannya masih cepat. Cek kondisi gigi dan pastikan sapi tidak terlalu tua untuk program Anda.",
        ],
      },
      {
        h: "Jenis yang cepat naik bobot",
        ps: [
          "Limosin dan Simental dikenal punya pertambahan bobot harian yang tinggi. Pegon unggul di efisiensi pakan dan harga bakalan yang lebih rendah. Pilih sesuai model usaha Anda: mengejar bobot maksimal atau margin per ekor.",
        ],
      },
      {
        h: "Hitung sebelum membeli",
        ps: [
          "Hitung harga bakalan per kilogram bobot hidup, perkiraan biaya pakan per hari, dan target harga jual. Peternak yang berpengalaman akan dengan senang hati membantu Anda menghitung angka-angka ini sebelum memutuskan membeli.",
        ],
      },
    ],
  },
  {
    slug: "yang-memengaruhi-harga-sapi",
    title: "Apa yang Memengaruhi Harga Sapi?",
    category: "HARGA",
    read: "5 mnt",
    excerpt:
      "Kenapa penjual sapi jarang memasang harga mati? Karena harga sapi hidup bergerak mengikuti banyak faktor.",
    cover: IMG.pasar,
    sections: [
      {
        h: "Bobot dan kondisi sapi",
        ps: [
          "Faktor paling dasar. Semakin besar dan sehat sapinya, semakin tinggi harganya. Dua sapi sejenis dengan selisih bobot 50 kg bisa berbeda harga jutaan rupiah.",
        ],
      },
      {
        h: "Jenis sapi",
        ps: [
          "Limosin dan Simental murni umumnya di atas harga sapi lokal dan persilangan seperti Pegon. Simental cross biasanya berada di tengah-tengah — ini yang membuatnya laris.",
        ],
      },
      {
        h: "Musim dan momen",
        ps: [
          "Menjelang Idul Adha permintaan melonjak dan harga naik — itu pola tahunan yang selalu terjadi. Di luar musim qurban, harga relatif lebih landai. Aqiqah dan hajatan juga ikut memengaruhi permintaan di daerah tertentu.",
        ],
      },
      {
        h: "Lokasi dan ongkos kirim",
        ps: [
          "Harga di kandang dan harga sampai lokasi bisa berbeda karena ongkos kirim, retribusi pasar dan risiko perjalanan. Selalu tanyakan harga final sesuai lokasi Anda agar perhitungannya jelas.",
        ],
      },
    ],
  },
  {
    slug: "proses-pengiriman-sapi",
    title: "Bagaimana Proses Pengiriman Sapi Hidup?",
    category: "PENGIRIMAN",
    read: "4 mnt",
    excerpt:
      "Dari kandang di Seyegan sampai halaman Anda — begini gambaran umum pengiriman sapi hidup antar kota.",
    cover: IMG.truk,
    sections: [
      {
        h: "Sepakati tujuan dan jadwal",
        ps: [
          "Setelah deal sapi dan harga, tentukan tanggal pengiriman. Untuk qurban, pengiriman biasanya diatur mendekati hari H agar sapi tidak terlalu lama di perjalanan atau di lokasi.",
        ],
      },
      {
        h: "Persiapan sapi sebelum berangkat",
        ps: [
          "Sapi yang akan dikirim disiapkan kondisinya: pakan cukup, sapi diistirahatkan dan dimuat dengan hati-hati. Sapi yang tenang saat dimuat akan lebih aman selama perjalanan.",
        ],
      },
      {
        h: "Kendaraan yang dipakai",
        ps: [
          "Untuk pengiriman dalam kota dan antar kota di Jawa, umumnya memakai truk atau colt yang baknya sudah disesuaikan untuk ternak — lantai tidak licin dan sirkulasi udara cukup. Jumlah sapi menentukan ukuran kendaraan.",
        ],
      },
      {
        h: "Biaya kirim",
        ps: [
          "Ongkos kirim berbeda-beda tergantung jarak, jumlah sapi dan kondisi jalan menuju lokasi. Karena itu selalu tanyakan ongkos kirim ke alamat Anda secara spesifik — jangan hanya berpatokan pada angka umum.",
        ],
      },
    ],
  },
  {
    slug: "pertanyaan-sebelum-membeli-sapi",
    title: "Apa Saja yang Perlu Ditanyakan Sebelum Membeli Sapi?",
    category: "PANDUAN",
    read: "4 mnt",
    excerpt:
      "Beli sapi itu transaksi besar. Siapkan daftar pertanyaan ini sebelum menghubungi penjual.",
    cover: IMG.kandang,
    sections: [
      {
        h: "Soal sapinya",
        ps: [
          "Tanyakan jenis, perkiraan bobot, umur (atau kondisi gigi), jenis kelamin dan kondisi kesehatan. Minta foto dan video terbaru dari beberapa sisi — jangan ragu meminta video saat sapi berjalan.",
        ],
      },
      {
        h: "Soal harga dan pembayaran",
        ps: [
          "Tanyakan harga final: apakah sudah termasuk ongkos kirim, apakah ada biaya titip rawat, dan bagaimana skema pembayarannya (DP, pelunasan, atau bayar di tempat). Penjual yang baik akan menjelaskan tanpa berbelit.",
        ],
      },
      {
        h: "Soal pengiriman",
        ps: [
          "Kapan sapi dikirim, kendaraan apa yang dipakai, berapa lama perjalanan, dan siapa yang menanggung ongkosnya. Kalau untuk qurban, tanyakan juga kemungkinan titip rawat sampai mendekati hari H.",
        ],
      },
      {
        h: "Soal penjualnya",
        ps: [
          "Tanya sudah berapa lama berjualan, apakah bisa datang langsung ke kandang, dan apakah ada pembeli sebelumnya yang bisa jadi referensi. Jawaban yang terbuka dan tidak defensif adalah pertanda baik.",
        ],
      },
    ],
  },
  {
    slug: "tips-membeli-sapi-luar-kota",
    title: "Tips Membeli Sapi dari Luar Kota",
    category: "PANDUAN",
    read: "5 mnt",
    excerpt:
      "Banyak pembeli kami berasal dari luar Sleman. Ini cara aman membeli sapi dari jarak jauh.",
    cover: IMG.truk,
    sections: [
      {
        h: "Verifikasi penjualnya dulu",
        ps: [
          "Cek keberadaan kandangnya lewat Google Maps, minta video call langsung dari kandang, dan lihat apakah penjual konsisten dengan satu nomor dan satu nama usaha. Penjual berpengalaman biasanya punya jejak digital dan jaringan yang bisa diverifikasi.",
        ],
      },
      {
        h: "Minta video call live",
        ps: [
          "Foto bisa lama, video call tidak bisa bohong. Minta penjual mengarahkan kamera ke sapi yang Anda incar: tampak samping, kaki, punggung dan wajah. Tandai sapi itu — misalnya dengan nomor kandang atau ciri khasnya.",
        ],
      },
      {
        h: "Sepakati semua di chat",
        ps: [
          "Tulis kesepakatan di chat: sapi yang mana, harga final, ongkos kirim, tanggal kirim dan cara pembayaran. Chat tertulis menjadi pegangan kedua pihak kalau ada perbedaan pemahaman di kemudian hari.",
        ],
      },
      {
        h: "Atur kedatangan sapi",
        ps: [
          "Pastikan ada orang yang siap menerima sapi di lokasi: siapkan kandang atau area penampungan, dan konfirmasi ulang sehari sebelum pengiriman. Sapi yang sampai larut malam pun tetap butuh penanganan yang tenang.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
