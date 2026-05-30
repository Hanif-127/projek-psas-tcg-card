export const SUBJECTS = [
    { id: "sejarah", title: "Sejarah" },
    { id: "jawa", title: "Bahasa Jawa" },
    { id: "seni", title: "Seni Budaya / SBD" },
    { id: "ppc", title: "Pendidikan Pancasila / PPC" },
  ];

export const cards = [
    {
      id: "abimanyu",
      name: "Abimanyu",
      faction: "Tokoh Baik",
      rarity: "Basic",
      image: "abimanyu.png",
      role: "Kesatria muda",
      origin: "Putra Arjuna",
      tagline: "Berani mengambil tanggung jawab meski usianya masih muda.",
      story:
        "Abimanyu dikenal sebagai kesatria muda dari keluarga Pandawa. Dalam kisah Baratayuda, ia tampil berani saat menghadapi siasat perang yang berat. Tokoh ini cocok dibaca sebagai lambang keberanian, tanggung jawab, dan kesiapan berkorban untuk kebenaran.",
      lesson:
        "Keberanian Abimanyu bukan sekadar maju bertarung, tetapi berani memikul akibat dari pilihan yang dianggap benar.",
      values: ["Berani", "Tanggung jawab", "Setia pada kebenaran"],
      warning: ["Jangan gegabah tanpa membaca keadaan", "Keberanian perlu ditemani strategi"],
      javanese: "Wani amarga bener, ora mung wani amarga nekat.",
      ppc: "Menguatkan nilai tanggung jawab, keberanian membela kebenaran, dan rela berkorban untuk kepentingan bersama.",
      art: "Visual kesatria muda dapat dibaca melalui sikap tubuh, atribut perang, warna, dan kesan gerak pada kartu.",
      history: "Abimanyu hadir dalam kisah Mahabharata yang berkembang dalam tradisi wayang Jawa sebagai cerita pendidikan moral.",
      relations: ["arjuna", "krishna", "gatotkaca", "duryudana"],
      stats: { budi: 82, wani: 94, kendali: 72 },
      quizValue: "tanggung jawab",
    },
    {
      id: "arjuna",
      name: "Arjuna",
      faction: "Tokoh Baik",
      rarity: "Rare",
      image: "arjuna.png",
      role: "Pemanah Pandawa",
      origin: "Pandawa",
      tagline: "Fokus, terampil, dan belajar menahan diri.",
      story:
        "Arjuna adalah salah satu Pandawa yang dikenal sebagai pemanah unggul. Dalam banyak lakon wayang, ia digambarkan halus, tekun, dan mampu belajar dari guru maupun pengalaman. Keunggulannya lahir dari latihan panjang, bukan hanya bakat.",
      lesson:
        "Kehebatan perlu disiplin. Arjuna mengajarkan bahwa kemampuan besar harus dipakai dengan pertimbangan.",
      values: ["Disiplin", "Fokus", "Rendah hati"],
      warning: ["Jangan sombong karena kemampuan", "Latihan tanpa budi pekerti dapat menjadi berbahaya"],
      javanese: "Ngelmu iku kelakone kanthi laku.",
      ppc: "Menunjukkan pentingnya disiplin, pengendalian diri, dan sikap rendah hati saat memiliki kemampuan.",
      art: "Citra Arjuna dapat ditonjolkan lewat busur, garis tubuh yang luwes, dan warna yang memberi kesan tenang.",
      history: "Arjuna menjadi tokoh penting dalam siklus Pandawa pada pewayangan Jawa dan kisah Mahabharata.",
      relations: ["abimanyu", "krishna", "srikandi", "bima"],
      stats: { budi: 88, wani: 86, kendali: 90 },
      quizValue: "disiplin",
    },
    {
      id: "bima",
      name: "Bima",
      faction: "Tokoh Baik",
      rarity: "Rare",
      image: "bima.png",
      role: "Kesatria kuat",
      origin: "Pandawa",
      tagline: "Kuat, lugas, dan tidak suka kepalsuan.",
      story:
        "Bima dikenal sebagai Pandawa yang sangat kuat, jujur, dan tegas. Dalam pewayangan, kelugasannya sering menjadi penyeimbang bagi tokoh lain. Ia tidak banyak basa-basi, tetapi setia pada keluarga dan kebenaran.",
      lesson:
        "Kekuatan Bima bernilai karena diarahkan untuk melindungi, bukan untuk menindas.",
      values: ["Jujur", "Tegas", "Melindungi yang lemah"],
      warning: ["Kemarahan perlu dikendalikan", "Kekuatan tidak boleh dipakai semena-mena"],
      javanese: "Kuwat iku kudu migunani tumrap liyan.",
      ppc: "Mengajarkan keberanian, kejujuran, dan sikap melindungi sesama tanpa menyalahgunakan kekuatan.",
      art: "Kesan kuat bisa muncul dari proporsi tubuh, gestur, senjata, dan warna kontras pada desain kartu.",
      history: "Bima adalah salah satu Pandawa yang sering muncul dalam lakon wayang Jawa, termasuk perjalanan rohani Dewa Ruci.",
      relations: ["yudhistira", "arjuna", "gatotkaca", "dursasana"],
      stats: { budi: 80, wani: 96, kendali: 76 },
      quizValue: "kejujuran",
    },
    {
      id: "drestadyumna",
      name: "Drestadyumna",
      faction: "Tokoh Baik",
      rarity: "Basic",
      image: "drestadyumna.png",
      role: "Panglima",
      origin: "Pancala",
      tagline: "Pemimpin perang yang harus menjaga arah keputusan.",
      story:
        "Drestadyumna dikenal sebagai putra Prabu Drupada dan berada di pihak Pandawa. Dalam perang besar, ia digambarkan sebagai panglima yang memegang strategi. Tokoh ini dapat dipakai untuk membahas kepemimpinan dan keberanian mengambil keputusan.",
      lesson:
        "Pemimpin tidak hanya memberi perintah, tetapi juga menanggung akibat dari keputusan bersama.",
      values: ["Kepemimpinan", "Strategi", "Tanggung jawab"],
      warning: ["Jangan memimpin dengan emosi", "Strategi harus tetap punya batas moral"],
      javanese: "Dadi pangarsa kudu bisa dadi tuladha.",
      ppc: "Menekankan musyawarah, tanggung jawab pemimpin, dan keputusan yang memperhatikan keselamatan bersama.",
      art: "Atribut panglima dan komposisi visual dapat menunjukkan wibawa, arah gerak, serta peran tokoh.",
      history: "Drestadyumna menjadi bagian dari jaringan tokoh Pancala dan Pandawa dalam kisah Mahabharata.",
      relations: ["prabu-drupada", "srikandi", "yudhistira", "drona"],
      stats: { budi: 78, wani: 88, kendali: 82 },
      quizValue: "kepemimpinan",
    },
    {
      id: "gatotkaca",
      name: "Gatotkaca",
      faction: "Tokoh Baik",
      rarity: "Basic",
      image: "gatotkaca.png",
      role: "Kesatria angkasa",
      origin: "Putra Bima",
      tagline: "Kuat, lincah, dan siap melindungi.",
      story:
        "Gatotkaca sangat populer dalam budaya Indonesia sebagai kesatria sakti yang mampu terbang. Ia adalah putra Bima dan Arimbi. Dalam Baratayuda, keberaniannya sering dibaca sebagai bentuk pengorbanan besar demi kemenangan pihak yang ia yakini benar.",
      lesson:
        "Kehebatan paling berharga saat dipakai untuk menjaga orang lain.",
      values: ["Rela berkorban", "Berani", "Melindungi"],
      warning: ["Jangan mencari pujian dari kekuatan", "Keberanian tetap perlu perhitungan"],
      javanese: "Becik ketitik, ala ketara.",
      ppc: "Menghubungkan nilai bela negara, keberanian, dan pengorbanan untuk kepentingan bersama.",
      art: "Pose terbang, ornamen, dan energi gerak dapat menjadi bahan analisis unsur rupa dan karakter.",
      history: "Gatotkaca adalah tokoh wayang yang sangat melekat dalam imajinasi populer Jawa dan Indonesia.",
      relations: ["bima", "abimanyu", "karna", "krishna"],
      stats: { budi: 84, wani: 98, kendali: 78 },
      quizValue: "rela berkorban",
    },
    {
      id: "krishna",
      name: "Krishna",
      faction: "Tokoh Baik",
      rarity: "Basic",
      image: "krishna.png",
      role: "Penasehat bijak",
      origin: "Dwarawati",
      tagline: "Bijaksana membaca keadaan dan memilih jalan damai lebih dulu.",
      story:
        "Krishna, atau Kresna dalam tradisi Jawa, dikenal sebagai penasehat utama Pandawa. Ia tidak hanya kuat secara spiritual, tetapi juga cerdas dalam diplomasi. Perannya menunjukkan bahwa kemenangan tidak selalu dimulai dari perang, melainkan dari kebijaksanaan membaca masalah.",
      lesson:
        "Kebijaksanaan berarti mampu memilih cara yang tepat, bukan sekadar cara yang paling keras.",
      values: ["Bijaksana", "Diplomatis", "Visioner"],
      warning: ["Kecerdasan harus berpihak pada kebaikan", "Strategi tidak boleh menjadi tipu daya yang merusak"],
      javanese: "Sing wicaksana ngerti papan lan wektu.",
      ppc: "Menonjolkan musyawarah, kebijaksanaan, dan kemampuan mencari jalan damai sebelum konflik membesar.",
      art: "Kesan wibawa dapat dibaca dari warna, raut, mahkota, dan komposisi visual yang menenangkan.",
      history: "Kresna berperan penting dalam versi wayang Jawa dari kisah Mahabharata, terutama sebagai penuntun Pandawa.",
      relations: ["arjuna", "abimanyu", "yudhistira", "karna"],
      stats: { budi: 99, wani: 84, kendali: 96 },
      quizValue: "kebijaksanaan",
    },
    {
      id: "nakula",
      name: "Nakula",
      faction: "Tokoh Baik",
      rarity: "Basic",
      image: "nakula.png",
      role: "Pandawa kembar",
      origin: "Pandawa",
      tagline: "Setia, rapi, dan menjaga kehormatan keluarga.",
      story:
        "Nakula adalah salah satu Pandawa kembar bersama Sadewa. Ia sering digambarkan tampan, terampil, dan setia kepada saudara-saudaranya. Perannya mengingatkan bahwa perjuangan besar juga membutuhkan orang yang konsisten dan tidak mencari sorotan.",
      lesson:
        "Kesetiaan dan ketekunan sering bekerja diam-diam, tetapi sangat menentukan hasil bersama.",
      values: ["Setia", "Tekun", "Menjaga kehormatan"],
      warning: ["Jangan merasa kecil karena tidak selalu menjadi pusat cerita", "Kemampuan perlu terus diasah"],
      javanese: "Sepi ing pamrih, rame ing gawe.",
      ppc: "Mengajarkan kesetiaan, kerja sama keluarga, dan kontribusi dalam kelompok.",
      art: "Karakter halus dapat dibaca lewat garis bentuk, warna yang lebih tenang, dan detail busana.",
      history: "Nakula termasuk lima Pandawa yang menjadi poros utama banyak lakon wayang Jawa.",
      relations: ["sadewa", "yudhistira", "bima", "prabu-salya"],
      stats: { budi: 86, wani: 78, kendali: 88 },
      quizValue: "kesetiaan",
    },
    {
      id: "prabu-drupada",
      name: "Prabu Drupada",
      faction: "Tokoh Baik",
      rarity: "Basic",
      image: "prabu-drupada.png",
      role: "Raja Pancala",
      origin: "Pancala",
      tagline: "Raja yang keputusannya memengaruhi banyak tokoh.",
      story:
        "Prabu Drupada adalah raja Pancala dan ayah dari tokoh-tokoh penting seperti Drestadyumna dan Srikandi. Dalam kisah Mahabharata, posisinya berkaitan erat dengan hubungan politik, kehormatan, dan dukungan kepada Pandawa.",
      lesson:
        "Kekuasaan harus dipakai untuk menjaga keadilan dan martabat, bukan untuk kepentingan diri sendiri.",
      values: ["Wibawa", "Tanggung jawab", "Keadilan"],
      warning: ["Jangan membiarkan dendam menguasai keputusan", "Pemimpin harus mau mengevaluasi diri"],
      javanese: "Ratu adil iku ngayomi, ora mung mrentah.",
      ppc: "Membahas kepemimpinan yang adil, tanggung jawab sosial, dan pentingnya menjaga martabat manusia.",
      art: "Mahkota, busana raja, dan warna dominan dapat dibaca sebagai simbol status dan tanggung jawab.",
      history: "Drupada menghubungkan kisah kerajaan Pancala dengan konflik besar Pandawa dan Kurawa.",
      relations: ["drestadyumna", "srikandi", "yudhistira", "drona"],
      stats: { budi: 76, wani: 72, kendali: 78 },
      quizValue: "keadilan",
    },
    {
      id: "sadewa",
      name: "Sadewa",
      faction: "Tokoh Baik",
      rarity: "Basic",
      image: "sadewa.png",
      role: "Pandawa kembar",
      origin: "Pandawa",
      tagline: "Tenang, teliti, dan tajam membaca keadaan.",
      story:
        "Sadewa adalah saudara kembar Nakula. Dalam berbagai cerita wayang, ia sering digambarkan cerdas, tenang, dan memiliki kepekaan batin. Sadewa menunjukkan bahwa sikap diam tidak selalu berarti lemah, karena ketenangan dapat menjadi sumber keputusan yang jernih.",
      lesson:
        "Kecerdasan perlu ditemani kerendahan hati agar tidak berubah menjadi kesombongan.",
      values: ["Teliti", "Rendah hati", "Bijak"],
      warning: ["Jangan menyimpan pengetahuan hanya untuk diri sendiri", "Diam harus tetap berpihak pada kebenaran"],
      javanese: "Meneng nanging ngerti, andhap asor nanging kuwat.",
      ppc: "Mengaitkan kerendahan hati, kecerdasan, dan tanggung jawab untuk membantu kelompok.",
      art: "Ekspresi tenang, detail busana, dan warna dapat membangun karakter yang cerdas dan halus.",
      history: "Sadewa termasuk Pandawa yang hadir dalam banyak lakon sebagai penjaga keseimbangan keluarga.",
      relations: ["nakula", "yudhistira", "bima", "prabu-salya"],
      stats: { budi: 90, wani: 74, kendali: 92 },
      quizValue: "rendah hati",
    },
    {
      id: "seta",
      name: "Seta",
      faction: "Tokoh Baik",
      rarity: "Basic",
      image: "seta.png",
      role: "Kesatria Wirata",
      origin: "Wirata",
      tagline: "Membela pihak yang dianggap benar.",
      story:
        "Seta dikenal sebagai kesatria dari Wirata yang berada di pihak Pandawa. Ia dapat dipahami sebagai tokoh pendukung yang tetap penting karena menunjukkan keberanian memilih sikap saat konflik besar terjadi.",
      lesson:
        "Tidak semua tokoh harus menjadi pusat cerita untuk memberi teladan. Memilih berdiri di pihak benar juga bernilai.",
      values: ["Berpendirian", "Berani", "Setia kawan"],
      warning: ["Jangan ikut arus tanpa memahami masalah", "Keberpihakan perlu alasan moral"],
      javanese: "Ngadeg jejeg ing dalan kang bener.",
      ppc: "Menekankan keberanian bersikap, solidaritas, dan keputusan yang didasari nilai moral.",
      art: "Kartu dapat menampilkan identitas kesatria pendukung lewat atribut, pose, dan keselarasan warna.",
      history: "Tokoh Wirata memperlihatkan luasnya jaringan kerajaan dalam kisah Baratayuda versi wayang.",
      relations: ["yudhistira", "arjuna", "drestadyumna", "drona"],
      stats: { budi: 78, wani: 86, kendali: 76 },
      quizValue: "berpendirian",
    },
    {
      id: "srikandi",
      name: "Srikandi",
      faction: "Tokoh Baik",
      rarity: "Basic",
      image: "srikandi.png",
      role: "Kesatria pemanah",
      origin: "Pancala",
      tagline: "Berani tampil dan membuktikan kemampuan.",
      story:
        "Srikandi dikenal sebagai kesatria perempuan yang mahir memanah. Dalam tradisi wayang Jawa, ia sering dikaitkan dengan keberanian, keteguhan, dan kemampuan melampaui batas yang diberikan lingkungan.",
      lesson:
        "Srikandi mengajarkan bahwa keberanian dan kemampuan tidak ditentukan oleh stereotip.",
      values: ["Percaya diri", "Berani", "Tekun berlatih"],
      warning: ["Jangan meremehkan kemampuan orang lain", "Kepercayaan diri perlu disertai latihan"],
      javanese: "Sapa tekun bakal tekan.",
      ppc: "Mengangkat kesetaraan, penghargaan terhadap kemampuan, dan keberanian membela kebenaran.",
      art: "Perpaduan busana, senjata, dan pose dapat menjadi bahan diskusi representasi tokoh perempuan dalam seni.",
      history: "Srikandi menjadi salah satu tokoh populer dalam pewayangan Jawa dan sering dibaca sebagai simbol keberanian.",
      relations: ["arjuna", "prabu-drupada", "drestadyumna", "bisma"],
      stats: { budi: 84, wani: 90, kendali: 84 },
      quizValue: "percaya diri",
    },
    {
      id: "yudhistira",
      name: "Yudhistira",
      faction: "Tokoh Baik",
      rarity: "Basic",
      image: "yudhistira.png",
      role: "Pemimpin Pandawa",
      origin: "Pandawa",
      tagline: "Jujur, sabar, dan mencari jalan dharma.",
      story:
        "Yudhistira adalah saudara tertua Pandawa. Ia dikenal jujur, sabar, dan berusaha memegang dharma. Di sisi lain, kisahnya juga mengingatkan bahwa orang baik tetap bisa salah mengambil keputusan jika kurang waspada.",
      lesson:
        "Kejujuran adalah dasar kepemimpinan, tetapi pemimpin juga harus cermat membaca risiko.",
      values: ["Jujur", "Sabar", "Adil"],
      warning: ["Jangan mudah terjebak permainan licik", "Kebaikan perlu ketegasan"],
      javanese: "Jujur iku ajining diri.",
      ppc: "Sangat kuat untuk membahas kejujuran, keadilan, tanggung jawab pemimpin, dan sikap demokratis.",
      art: "Kesan raja yang tenang dapat dibangun lewat warna, sikap tubuh, dan tata letak visual yang seimbang.",
      history: "Yudhistira menjadi pusat konflik Pandawa-Kurawa dan sering dipakai dalam wayang sebagai contoh dilema moral.",
      relations: ["bima", "arjuna", "nakula", "sengkuni"],
      stats: { budi: 96, wani: 76, kendali: 92 },
      quizValue: "kejujuran",
    },
    {
      id: "aswatama",
      name: "Aswatama",
      faction: "Tokoh Jahat",
      rarity: "Basic",
      image: "aswatama.png",
      role: "Putra Drona",
      origin: "Kuru",
      tagline: "Kemampuan besar yang rusak oleh dendam.",
      story:
        "Aswatama adalah putra Drona. Ia dikenal sebagai kesatria yang kuat, tetapi kisahnya sering dikaitkan dengan amarah dan pembalasan. Tokoh ini cocok untuk membahas bahaya dendam ketika seseorang kehilangan kendali diri.",
      lesson:
        "Kemarahan yang tidak dikendalikan dapat merusak diri sendiri dan orang yang tidak bersalah.",
      values: ["Mengendalikan emosi", "Berpikir sebelum bertindak", "Berani bertanggung jawab"],
      warning: ["Dendam", "Kekerasan setelah konflik", "Tidak mampu menerima kekalahan"],
      javanese: "Nesu aja nganti nutupi nalar.",
      ppc: "Menjadi contoh akibat buruk dari dendam, kekerasan, dan keputusan tanpa tanggung jawab.",
      art: "Ekspresi tegang, warna keras, dan pose menyerang dapat memperkuat karakter konflik.",
      history: "Aswatama berada dalam lingkar tokoh perang Mahabharata dan sering dipakai untuk membaca akibat perang.",
      relations: ["drona", "duryudana", "kartamarma", "drestadyumna"],
      stats: { budi: 46, wani: 88, kendali: 38 },
      quizValue: "mengendalikan emosi",
    },
    {
      id: "burisrawa",
      name: "Burisrawa",
      faction: "Tokoh Jahat",
      rarity: "Basic",
      image: "burisrawa.png",
      role: "Sekutu Kurawa",
      origin: "Kuru",
      tagline: "Kesatria kuat yang terseret konflik besar.",
      story:
        "Burisrawa dikenal sebagai salah satu kesatria yang berpihak pada Kurawa. Ia memperlihatkan bahwa kemampuan perang tanpa arah moral yang tepat dapat membawa seseorang ke konflik yang merugikan banyak pihak.",
      lesson:
        "Keberanian harus diuji oleh tujuan. Berani saja tidak cukup jika berpihak pada ketidakadilan.",
      values: ["Memilih pihak dengan sadar", "Sportif", "Menghormati lawan"],
      warning: ["Fanatisme kelompok", "Keras kepala", "Membenarkan kekerasan"],
      javanese: "Aja menang-menangan, nanging goleka bebener.",
      ppc: "Membahas sportivitas, tanggung jawab dalam kelompok, dan bahaya membela pihak yang salah.",
      art: "Visual prajurit dapat memperlihatkan karakter keras melalui bentuk senjata, warna, dan komposisi.",
      history: "Burisrawa menjadi bagian dari jaringan sekutu Kurawa dalam perang besar Baratayuda.",
      relations: ["duryudana", "karna", "drona", "arjuna"],
      stats: { budi: 52, wani: 86, kendali: 58 },
      quizValue: "sportivitas",
    },
    {
      id: "citraksa",
      name: "Citraksa",
      faction: "Tokoh Jahat",
      rarity: "Basic",
      image: "citraksa.png",
      role: "Kurawa",
      origin: "Astina",
      tagline: "Ikut dalam arus kelompok yang salah.",
      story:
        "Citraksa ditempatkan sebagai bagian dari pihak Kurawa. Ia berguna untuk membahas tokoh yang tidak selalu menjadi pusat konflik, tetapi tetap ikut memperkuat suasana permusuhan karena mengikuti kelompok tanpa sikap kritis.",
      lesson:
        "Ikut kelompok bukan alasan untuk meninggalkan nurani.",
      values: ["Berpikir kritis", "Berani berbeda", "Tanggung jawab pribadi"],
      warning: ["Ikut-ikutan", "Tidak punya pendirian", "Membiarkan kesalahan kelompok"],
      javanese: "Aja mung melu grubyug tanpa mikir.",
      ppc: "Mengaitkan tanggung jawab pribadi, keberanian menolak kesalahan, dan sikap kritis dalam pergaulan.",
      art: "Kartu dapat menunjukkan identitas kelompok Kurawa melalui warna, ekspresi, dan atribut yang konsisten.",
      history: "Tokoh Kurawa memperlihatkan konflik keluarga besar Astina dalam pewayangan.",
      relations: ["duryudana", "dursasana", "sengkuni", "yudhistira"],
      stats: { budi: 42, wani: 60, kendali: 45 },
      quizValue: "berpikir kritis",
    },
    {
      id: "drona",
      name: "Drona",
      faction: "Tokoh Jahat",
      rarity: "Basic",
      image: "drona.png",
      role: "Guru perang",
      origin: "Astina",
      tagline: "Guru besar dengan dilema keberpihakan.",
      story:
        "Drona adalah guru bagi Pandawa dan Kurawa. Ia tokoh kompleks karena berilmu tinggi, tetapi berada di pihak Kurawa dalam perang. Dari Drona, pembaca bisa membahas tanggung jawab moral seorang guru dan bahaya loyalitas yang tidak diuji.",
      lesson:
        "Ilmu harus berpihak pada kebijaksanaan. Kepandaian tanpa keberanian moral bisa menimbulkan masalah.",
      values: ["Tanggung jawab ilmu", "Adil sebagai pendidik", "Berani mengoreksi diri"],
      warning: ["Loyalitas buta", "Ilmu tanpa budi pekerti", "Membiarkan ketidakadilan"],
      javanese: "Ngelmu kudu nganggo budi.",
      ppc: "Menjadi bahan diskusi tentang etika, keadilan, tanggung jawab guru, dan keberanian bersikap benar.",
      art: "Citra guru perang dapat ditampilkan lewat gestur wibawa, senjata, dan raut yang tegas.",
      history: "Drona penting dalam Mahabharata karena menjadi penghubung pendidikan militer Pandawa dan Kurawa.",
      relations: ["aswatama", "arjuna", "drestadyumna", "duryudana"],
      stats: { budi: 68, wani: 74, kendali: 70 },
      quizValue: "tanggung jawab ilmu",
    },
    {
      id: "dursasana",
      name: "Dursasana",
      faction: "Tokoh Jahat",
      rarity: "Basic",
      image: "dursasana.png",
      role: "Kurawa",
      origin: "Astina",
      tagline: "Kasar, provokatif, dan menjadi contoh sikap yang harus dihindari.",
      story:
        "Dursasana adalah saudara Duryudana dari pihak Kurawa. Ia sering digambarkan kasar dan ikut mempermalukan pihak Pandawa. Tokoh ini kuat untuk membahas pentingnya menghormati martabat manusia.",
      lesson:
        "Merendahkan orang lain dapat menghancurkan kehormatan diri sendiri.",
      values: ["Menghormati sesama", "Menahan diri", "Tidak mempermalukan orang"],
      warning: ["Kekasaran", "Perundungan", "Merendahkan martabat orang lain"],
      javanese: "Ajining diri saka lathi, ajining raga saka busana.",
      ppc: "Sangat cocok untuk membahas anti-perundungan, penghormatan martabat, dan etika pergaulan.",
      art: "Ekspresi keras dan warna panas dapat menjadi kode visual untuk sifat kasar dan konflik.",
      history: "Dursasana berada dalam konflik Pandawa-Kurawa yang menjadi inti banyak lakon Baratayuda.",
      relations: ["duryudana", "sengkuni", "bima", "yudhistira"],
      stats: { budi: 28, wani: 72, kendali: 24 },
      quizValue: "menghormati sesama",
    },
    {
      id: "jayadrata",
      name: "Jayadrata",
      faction: "Tokoh Jahat",
      rarity: "Basic",
      image: "jayadrata.png",
      role: "Raja Sindhu",
      origin: "Sindhu",
      tagline: "Siasat yang membawa akibat besar.",
      story:
        "Jayadrata dikenal sebagai tokoh yang berada di pihak Kurawa dan terlibat dalam peristiwa gugurnya Abimanyu. Kisahnya dapat dipakai untuk membahas tanggung jawab dalam strategi dan akibat dari tindakan yang tidak adil.",
      lesson:
        "Kemenangan yang diperoleh dengan cara tidak adil meninggalkan luka panjang.",
      values: ["Bermain adil", "Bertanggung jawab", "Menghargai aturan"],
      warning: ["Curang", "Menghalangi kebenaran", "Bersembunyi di balik kelompok"],
      javanese: "Cidra gawe cilaka.",
      ppc: "Menguatkan pembahasan keadilan, kepatuhan aturan, dan konsekuensi dari kecurangan.",
      art: "Citra antagonis dapat dibangun dengan kontras warna, tatapan, dan posisi tubuh yang menekan.",
      history: "Jayadrata menjadi bagian dari salah satu episode penting dalam perang Mahabharata.",
      relations: ["abimanyu", "duryudana", "karna", "arjuna"],
      stats: { budi: 34, wani: 70, kendali: 48 },
      quizValue: "bermain adil",
    },
    {
      id: "kartamarma",
      name: "Kartamarma",
      faction: "Tokoh Jahat",
      rarity: "Basic",
      image: "kartamarma.png",
      role: "Sekutu Kurawa",
      origin: "Yadawa",
      tagline: "Loyalitas yang kehilangan arah moral.",
      story:
        "Kartamarma atau Kertawarma dikenal sebagai tokoh yang berpihak pada Kurawa. Ia dapat dibaca sebagai contoh bahwa kesetiaan kepada kelompok perlu ditimbang dengan nilai benar dan salah.",
      lesson:
        "Setia itu baik, tetapi setia pada kesalahan akan ikut melahirkan kerusakan.",
      values: ["Loyal secara kritis", "Berani menolak salah", "Membatasi kekerasan"],
      warning: ["Loyalitas buta", "Ikut kekerasan", "Mengabaikan nurani"],
      javanese: "Setya kudu nganggo nalar.",
      ppc: "Membahas pilihan moral dalam kelompok, tanggung jawab pribadi, dan keberanian menolak ajakan buruk.",
      art: "Elemen visual sekutu perang dapat dibahas dari atribut, pose, dan relasi warna dengan kelompok Kurawa.",
      history: "Kartamarma berada dalam jejaring sekutu Kurawa yang memperluas konflik Baratayuda.",
      relations: ["aswatama", "duryudana", "karna", "krishna"],
      stats: { budi: 44, wani: 78, kendali: 50 },
      quizValue: "loyal secara kritis",
    },
    {
      id: "prabu-salya",
      name: "Prabu Salya",
      faction: "Tokoh Jahat",
      rarity: "Basic",
      image: "prabu-salya.png",
      role: "Raja Madra",
      origin: "Madra",
      tagline: "Tokoh tua yang terikat pilihan sulit.",
      story:
        "Prabu Salya adalah raja Madra dan tokoh yang memiliki hubungan keluarga dengan Pandawa, terutama Nakula dan Sadewa. Dalam perang, ia berada di pihak Kurawa. Kisahnya cocok untuk membahas dilema, janji, dan akibat memilih aliansi yang keliru.",
      lesson:
        "Janji dan kehormatan perlu diuji dengan kebenaran, bukan hanya dengan rasa sungkan.",
      values: ["Berani memilih benar", "Bijak dalam janji", "Mengevaluasi keputusan"],
      warning: ["Salah memilih pihak", "Terlalu terikat gengsi", "Ragu membela kebenaran"],
      javanese: "Aja kegawa isin nganti ninggal bebener.",
      ppc: "Mengajak membahas dilema moral, tanggung jawab atas janji, dan keberanian memperbaiki keputusan.",
      art: "Atribut raja dapat dipakai untuk melihat hubungan antara status, wibawa, dan konflik batin.",
      history: "Salya menunjukkan bahwa konflik Baratayuda tidak hitam-putih, karena banyak tokoh memiliki ikatan keluarga silang.",
      relations: ["nakula", "sadewa", "karna", "duryudana"],
      stats: { budi: 62, wani: 70, kendali: 64 },
      quizValue: "berani memilih benar",
    },
    {
      id: "bisma",
      name: "Bisma",
      faction: "Tokoh Jahat",
      rarity: "Rare",
      image: "bisma.png",
      role: "Sesepuh Astina",
      origin: "Astina",
      tagline: "Sumpah besar yang berhadapan dengan keadilan.",
      story:
        "Bisma adalah sesepuh agung Astina. Ia dihormati karena sumpah dan keteguhannya, tetapi dalam perang berada di pihak Kurawa. Tokoh ini sangat menarik untuk membahas perbedaan antara kewajiban, sumpah, dan keberanian moral.",
      lesson:
        "Kesetiaan pada janji harus tetap ditimbang dengan keadilan yang lebih besar.",
      values: ["Menimbang janji", "Mengutamakan keadilan", "Bijak sebagai tetua"],
      warning: ["Terlalu kaku pada sumpah", "Membiarkan ketidakadilan", "Netral yang merugikan korban"],
      javanese: "Janji iku abot, nanging adil luwih luhur.",
      ppc: "Membuka diskusi tentang konstitusi, aturan, keadilan, dan keberanian moral saat aturan bertabrakan dengan kemanusiaan.",
      art: "Figur sesepuh dapat divisualkan lewat warna matang, posisi tegak, dan detail yang menunjukkan wibawa.",
      history: "Bisma adalah tokoh kunci Mahabharata dan sering dipakai untuk membahas dilema moral dalam pewayangan.",
      relations: ["srikandi", "duryudana", "yudhistira", "drona"],
      stats: { budi: 78, wani: 82, kendali: 88 },
      quizValue: "mengutamakan keadilan",
    },
    {
      id: "duryudana",
      name: "Duryudana",
      faction: "Tokoh Jahat",
      rarity: "Rare",
      image: "duryudana.png",
      role: "Pemimpin Kurawa",
      origin: "Astina",
      tagline: "Ambisi yang menutup rasa adil.",
      story:
        "Duryudana adalah pemimpin Kurawa dan lawan utama Pandawa. Ia sering digambarkan iri, keras kepala, dan ingin mempertahankan kekuasaan. Dari tokoh ini, pembaca dapat melihat bagaimana ambisi tanpa keadilan menimbulkan konflik besar.",
      lesson:
        "Ambisi perlu dibatasi oleh keadilan dan kemampuan menghormati hak orang lain.",
      values: ["Mengendalikan ambisi", "Adil", "Mau mengakui hak orang lain"],
      warning: ["Iri hati", "Serakah kekuasaan", "Keras kepala"],
      javanese: "Sapa nandur ala bakal ngundhuh wohing pakarti.",
      ppc: "Menjadi contoh akibat buruk dari ketidakadilan, keserakahan, dan penolakan terhadap musyawarah.",
      art: "Warna tegas, pose dominan, dan ekspresi keras dapat menunjukkan ambisi dan konflik.",
      history: "Duryudana memimpin Kurawa dalam konflik utama Mahabharata yang diolah dalam Baratayuda Jawa.",
      relations: ["sengkuni", "dursasana", "karna", "yudhistira"],
      stats: { budi: 30, wani: 82, kendali: 28 },
      quizValue: "mengendalikan ambisi",
    },
    {
      id: "karna",
      name: "Karna",
      faction: "Tokoh Jahat",
      rarity: "Rare",
      image: "karna.png",
      role: "Kesatria Angga",
      origin: "Angga",
      tagline: "Dermawan dan hebat, tetapi terikat pihak yang keliru.",
      story:
        "Karna adalah tokoh kompleks. Ia dikenal dermawan, setia kepada Duryudana, dan sangat tangguh. Namun keberpihakannya kepada Kurawa membuatnya berada di sisi yang bermasalah. Karna cocok untuk membahas loyalitas, harga diri, dan pilihan moral.",
      lesson:
        "Kebaikan pribadi belum cukup jika pilihan besar kita mendukung ketidakadilan.",
      values: ["Loyal secara bijak", "Dermawan", "Berani mengoreksi pilihan"],
      warning: ["Membela sahabat yang salah", "Harga diri yang melukai diri", "Menutup mata pada ketidakadilan"],
      javanese: "Becik marang kanca, nanging aja nganti mbela sing salah.",
      ppc: "Membahas persahabatan, loyalitas, keadilan, dan keberanian mengakui pilihan yang keliru.",
      art: "Karna dapat divisualkan dengan aura kesatria besar, warna kuat, dan simbol konflik batin.",
      history: "Karna menjadi salah satu tokoh paling tragis dalam Mahabharata dan pewayangan Jawa.",
      relations: ["duryudana", "krishna", "arjuna", "gatotkaca"],
      stats: { budi: 74, wani: 94, kendali: 72 },
      quizValue: "loyal secara bijak",
    },
    {
      id: "sengkuni",
      name: "Sengkuni",
      faction: "Tokoh Jahat",
      rarity: "Rare",
      image: "sengkuni.png",
      role: "Penghasut",
      origin: "Gandara",
      tagline: "Kecerdikan yang dipakai untuk memecah belah.",
      story:
        "Sengkuni dikenal sebagai tokoh licik yang memengaruhi Kurawa, terutama Duryudana. Ia sering dikaitkan dengan tipu daya, adu domba, dan permainan yang tidak adil. Tokoh ini sangat kuat untuk membahas literasi moral: tidak semua kecerdikan berarti kebijaksanaan.",
      lesson:
        "Kepandaian yang dipakai untuk menipu akan merusak kepercayaan dan persaudaraan.",
      values: ["Jujur", "Tidak memanipulasi", "Berpikir kritis terhadap hasutan"],
      warning: ["Licik", "Adu domba", "Manipulasi"],
      javanese: "Aja seneng gawe pitenah lan pasulayan.",
      ppc: "Menguatkan nilai kejujuran, anti-hoaks, anti-manipulasi, dan pentingnya berpikir kritis.",
      art: "Ekspresi tajam, warna gelap-kontras, dan gestur tertutup dapat memperkuat kesan manipulatif.",
      history: "Sengkuni menjadi figur antagonis populer dalam wayang Jawa, terutama dalam konflik Pandawa-Kurawa.",
      relations: ["duryudana", "dursasana", "yudhistira", "citraksa"],
      stats: { budi: 18, wani: 52, kendali: 80 },
      quizValue: "kejujuran",
    },
  ];

export const WARNING_GUIDANCE = {
    "Jangan gegabah tanpa membaca keadaan": (name) =>
      `${name} mengingatkan bahwa keberanian perlu dimulai dengan membaca situasi, supaya keputusan besar tidak berubah menjadi tindakan terburu-buru.`,
    "Keberanian perlu ditemani strategi": (name) =>
      `${name} menunjukkan bahwa berani saja belum cukup; strategi membuat keberanian lebih terarah dan tidak mudah dimanfaatkan lawan.`,
    "Jangan sombong karena kemampuan": (name) =>
      `${name} mengajarkan bahwa kemampuan tinggi tetap harus dijaga dengan rendah hati agar tidak menjauhkan diri dari orang lain.`,
    "Latihan tanpa budi pekerti dapat menjadi berbahaya": (name) =>
      `Dari ${name}, pembaca belajar bahwa keterampilan harus disertai budi pekerti supaya ilmu tidak dipakai untuk menyakiti.`,
    "Kemarahan perlu dikendalikan": (name) =>
      `${name} memperlihatkan bahwa kekuatan terasa aman ketika amarah tetap dikendalikan dengan akal sehat.`,
    "Kekuatan tidak boleh dipakai semena-mena": (name) =>
      `${name} mengingatkan bahwa orang kuat seharusnya melindungi, bukan menekan orang yang lebih lemah.`,
    "Jangan memimpin dengan emosi": (name) =>
      `${name} menunjukkan bahwa pemimpin perlu tenang agar keputusan tidak hanya mengikuti marah atau gengsi sesaat.`,
    "Strategi harus tetap punya batas moral": (name) =>
      `Melalui ${name}, strategi dipahami sebagai cara mencapai tujuan tanpa meninggalkan keadilan dan rasa kemanusiaan.`,
    "Jangan mencari pujian dari kekuatan": (name) =>
      `${name} mengingatkan bahwa kekuatan paling bernilai ketika dipakai untuk menjaga sesama, bukan untuk mengejar sanjungan.`,
    "Keberanian tetap perlu perhitungan": (name) =>
      `${name} menunjukkan bahwa tindakan berani perlu menghitung akibat agar tidak merugikan diri sendiri dan kelompok.`,
    "Kecerdasan harus berpihak pada kebaikan": (name) =>
      `${name} mengajarkan bahwa orang cerdas perlu memakai akalnya untuk menyelesaikan masalah, bukan memperbesar konflik.`,
    "Strategi tidak boleh menjadi tipu daya yang merusak": (name) =>
      `Dari ${name}, pembaca belajar membedakan strategi bijak dengan kelicikan yang mengorbankan kepercayaan.`,
    "Jangan merasa kecil karena tidak selalu menjadi pusat cerita": (name) =>
      `${name} menegaskan bahwa kontribusi yang tenang tetap penting, meskipun tidak selalu terlihat paling menonjol.`,
    "Kemampuan perlu terus diasah": (name) =>
      `${name} mengingatkan bahwa bakat harus dirawat dengan latihan agar tetap berguna saat dibutuhkan.`,
    "Jangan membiarkan dendam menguasai keputusan": (name) =>
      `${name} menunjukkan bahwa dendam dapat membuat keputusan pemimpin kehilangan arah dan merugikan banyak orang.`,
    "Pemimpin harus mau mengevaluasi diri": (name) =>
      `${name} mengajarkan bahwa wibawa pemimpin tumbuh ketika ia berani menilai ulang keputusan sendiri.`,
    "Jangan menyimpan pengetahuan hanya untuk diri sendiri": (name) =>
      `${name} mengingatkan bahwa pengetahuan menjadi lebih bermanfaat ketika dibagikan untuk membantu orang lain.`,
    "Diam harus tetap berpihak pada kebenaran": (name) =>
      `${name} menunjukkan bahwa sikap tenang tetap harus disertai keberanian menyatakan yang benar.`,
    "Jangan ikut arus tanpa memahami masalah": (name) =>
      `${name} mengajarkan bahwa sebelum berpihak, seseorang perlu memahami masalah agar tidak terseret arus kelompok.`,
    "Keberpihakan perlu alasan moral": (name) =>
      `${name} menegaskan bahwa memilih pihak harus didasari nilai benar dan adil, bukan hanya karena teman atau tekanan.`,
    "Jangan meremehkan kemampuan orang lain": (name) =>
      `${name} mengingatkan pembaca untuk menghargai kemampuan setiap orang tanpa membatasi dari penampilan atau latar belakang.`,
    "Kepercayaan diri perlu disertai latihan": (name) =>
      `${name} menunjukkan bahwa percaya diri menjadi kuat ketika dibangun dari usaha, latihan, dan kesiapan.`,
    "Jangan mudah terjebak permainan licik": (name) =>
      `${name} mengajarkan bahwa orang jujur tetap perlu waspada agar tidak dimanfaatkan oleh siasat yang tidak adil.`,
    "Kebaikan perlu ketegasan": (name) =>
      `${name} menunjukkan bahwa sikap baik harus ditemani ketegasan supaya kebenaran tidak mudah dikalahkan kelicikan.`,
    "Dendam": (name) =>
      `Dendam membuat ${name} kehilangan kejernihan, sehingga tindakan yang diambil cenderung melukai lebih banyak orang.`,
    "Kekerasan setelah konflik": (name) =>
      `${name} memperingatkan bahwa konflik seharusnya diakhiri dengan tanggung jawab, bukan dilanjutkan dengan kekerasan baru.`,
    "Tidak mampu menerima kekalahan": (name) =>
      `${name} menunjukkan bahwa sulit menerima kekalahan dapat mendorong seseorang melakukan tindakan yang tidak adil.`,
    "Fanatisme kelompok": (name) =>
      `${name} mengingatkan bahwa membela kelompok tanpa menilai benar-salah dapat membuat seseorang ikut menanggung akibat buruk.`,
    "Keras kepala": (name) =>
      `Sikap keras kepala pada ${name} memperlihatkan bahaya menolak nasihat ketika keadaan sebenarnya perlu dipikir ulang.`,
    "Membenarkan kekerasan": (name) =>
      `${name} menunjukkan bahwa kekerasan tidak boleh dianggap benar hanya karena dilakukan oleh kelompok sendiri.`,
    "Ikut-ikutan": (name) =>
      `${name} memperingatkan bahwa ikut-ikutan tanpa berpikir dapat membuat seseorang terlibat dalam kesalahan bersama.`,
    "Tidak punya pendirian": (name) =>
      `${name} menunjukkan pentingnya pendirian agar seseorang tidak mudah diarahkan ke keputusan yang merugikan orang lain.`,
    "Membiarkan kesalahan kelompok": (name) =>
      `${name} mengingatkan bahwa diam saat kelompok berbuat salah berarti ikut membiarkan ketidakadilan terjadi.`,
    "Loyalitas buta": (name) =>
      `${name} memperlihatkan bahwa setia kepada kelompok harus tetap dibatasi oleh nurani dan keadilan.`,
    "Ilmu tanpa budi pekerti": (name) =>
      `${name} mengingatkan bahwa ilmu tinggi bisa berbahaya jika tidak dikendalikan oleh tanggung jawab moral.`,
    "Membiarkan ketidakadilan": (name) =>
      `${name} menunjukkan bahwa membiarkan ketidakadilan tetap terjadi dapat membuat wibawa dan kebaikan seseorang dipertanyakan.`,
    "Kekasaran": (name) =>
      `${name} memperlihatkan bahwa sikap kasar dapat merusak kehormatan diri sendiri dan menyakiti martabat orang lain.`,
    "Perundungan": (name) =>
      `${name} menjadi peringatan bahwa mempermalukan orang lain bukan tanda kekuatan, melainkan tanda hilangnya empati.`,
    "Merendahkan martabat orang lain": (name) =>
      `${name} mengingatkan bahwa setiap orang perlu dihormati, bahkan ketika sedang berbeda pendapat atau berkonflik.`,
    "Curang": (name) =>
      `${name} menunjukkan bahwa kemenangan yang diraih dengan curang tidak membawa kehormatan dan meninggalkan akibat panjang.`,
    "Menghalangi kebenaran": (name) =>
      `${name} memperingatkan bahwa menghalangi kebenaran hanya menunda masalah dan memperbesar rasa tidak adil.`,
    "Bersembunyi di balik kelompok": (name) =>
      `${name} mengingatkan bahwa tanggung jawab pribadi tidak hilang hanya karena kesalahan dilakukan bersama kelompok.`,
    "Ikut kekerasan": (name) =>
      `${name} menunjukkan bahwa ikut melakukan kekerasan tetap salah, meskipun alasannya adalah membela kelompok.`,
    "Mengabaikan nurani": (name) =>
      `${name} memperlihatkan bahwa mengabaikan suara hati dapat membuat seseorang semakin jauh dari pilihan yang benar.`,
    "Salah memilih pihak": (name) =>
      `${name} mengingatkan bahwa memilih pihak perlu keberanian moral, bukan hanya rasa sungkan atau ikatan lama.`,
    "Terlalu terikat gengsi": (name) =>
      `${name} menunjukkan bahwa gengsi dapat menghalangi seseorang untuk mengakui pilihan yang lebih benar.`,
    "Ragu membela kebenaran": (name) =>
      `${name} memperingatkan bahwa keraguan membela kebenaran bisa membuat ketidakadilan terus berjalan.`,
    "Terlalu kaku pada sumpah": (name) =>
      `${name} mengajarkan bahwa janji harus tetap diarahkan pada keadilan, bukan dijalankan secara kaku hingga melukai kebenaran.`,
    "Netral yang merugikan korban": (name) =>
      `${name} menunjukkan bahwa sikap netral tidak selalu adil jika akhirnya membuat pihak yang dirugikan tetap tidak terlindungi.`,
    "Iri hati": (name) =>
      `${name} memperlihatkan bahwa iri hati dapat menutup rasa syukur dan mendorong seseorang merebut hak orang lain.`,
    "Serakah kekuasaan": (name) =>
      `${name} menjadi contoh bahwa keinginan berkuasa tanpa keadilan dapat memecah keluarga, negara, dan persahabatan.`,
    "Membela sahabat yang salah": (name) =>
      `${name} mengingatkan bahwa persahabatan sejati bukan membenarkan kesalahan, tetapi berani menuntun sahabat ke jalan yang lebih baik.`,
    "Harga diri yang melukai diri": (name) =>
      `${name} menunjukkan bahwa harga diri perlu dijaga tanpa menutup mata terhadap kebenaran.`,
    "Menutup mata pada ketidakadilan": (name) =>
      `${name} memperingatkan bahwa kebaikan pribadi menjadi lemah jika tetap mendukung ketidakadilan.`,
    "Licik": (name) =>
      `${name} memperlihatkan bahwa kelicikan mungkin tampak menguntungkan sebentar, tetapi merusak kepercayaan dalam jangka panjang.`,
    "Adu domba": (name) =>
      `${name} mengingatkan bahwa mengadu domba orang lain dapat menghancurkan persaudaraan dan membuat masalah semakin besar.`,
    "Manipulasi": (name) =>
      `${name} menunjukkan bahwa memengaruhi orang dengan cara tidak jujur adalah bentuk kecerdikan yang merusak.`,
  };

