/*
    TEMPORARY FILE BEFORE THE DATABASE (BACKEND) IS READY TO USE
*/

export const cart = [
    {   
        id: 'p1000',
        name: 'Akademi',
        price: 1000000,
        variation: {
            current: 'A10 Matematika Keuangan',
            option: ['A10 Matematika Keuangan', 'A11 Statistika', 'A12 Matematika Diskrit']},
        duration: {
            current: '1 Bulan',
            option: ['1 Bulan', '2 Bulan', '4 Bulan']}
    },
    {   
        id: 'p1002',
        name: 'Tutor Privat',
        price: 900000,
        variation: {
            current: 'A Tutor 1',
            option: ['A Tutor 1', 'A Tutor 2', 'A Tutor 3']},
        duration: {
            current: '1 Bulan',
            option: ['1 Bulan', '3 Bulan', '6 Bulan']}
    },
    {   
        id: 'p1004',
        name: 'Jasa Aktuaria',
        price: 1200000,
        variation: {
            current: 'A Jasa 1',
            option: ['A Jasa 1', 'A Jasa 2', 'A Jasa 3']},
        duration: {
            current: '2 Bulan',
            option: ['2 Bulan', '3 Bulan', '6 Bulan']}
    }

]

export const modules = {
    'A10': {
        name: 'Matematika Keuangan',
        desc: 'Materi mengenai dasar-dasar fundamental Matematika Keuangan serta penerapan perhitungan pada berbagai instrumen investasi.',
        materialVideos: [
            { videoId: '2b25fb78-7a20-4db1-bf9e-f2148f00d53d', title: 'Materi 1 Part 1', subtitle: 'Introduction A10', desc: 'Pendahuluan dan pengenalan terhadap materi-materi dan pengaplikasian Matematika Keuangan.' },
            { videoId: '2e0bbe9b-86f5-44a6-ad08-b6c386ec1293', title: 'Materi 2 Part 1', subtitle: 'Proses Pembungaan', desc: 'Pembahsan megenai proses pembungaan yang terdiri dari accumulating dan daiscounting pada transaksi tunggal serta beberapa formula dan simbol dasar.' },
            { videoId: 'd8de9752-bb1b-4f81-88ee-97cf5197d130', title: 'Materi 2 Part 2', subtitle: 'Jenis Bunga Berdasarkan Cara Perhitungannya', desc: 'Pembahasan terhadap interest dan discount, baik jenis simple maupun compound.' },
            { videoId: '1e8b13f1-50b4-4081-9f72-8db8cfe03b8e', title: 'Materi 2 Part 3', subtitle: 'Jenis Bunga Periodik (Sesi 1)', desc: 'Pembahasan mengenai bunga dan diskonto efektif.' },
            { videoId: '362f0a16-2304-4b27-aefe-71227d55179a', title: 'Materi 2 Part 4', subtitle: 'Jenis Bunga Periodik (Sesi 2)', desc: 'Pembahasan mengenai bunga dan diskonto nominal serta force of interest.' },
            { videoId: '3f01383b-ea43-4bdc-a105-60063fd82894', title: 'Materi 2 Part 5', subtitle: 'Ekuivalensi Bunga Periodik', desc: 'Pembahasan mengenai formula-formula hubungan bunga, diskonto, dan force of interest.' },
            { videoId: '65d8ed78-348a-4808-b096-50e6da350e95', title: 'Materi 3 Part 1', subtitle: 'Time Value Of Money', desc: 'Pembahasan mengenai time value of money atau nilai uang yang saat ini lebih berharga dibanding nilai di masa depan.' },
            { videoId: 'c33dc552-7217-4802-853a-344f1665938e', title: 'Materi 4 Part 1', subtitle: 'Pengenalan Anuitas', desc: 'Pengenalan dan pendahuluan terhadap anuitas serta jenis-jenisnya secara umum.' },
            { videoId: 'c32838dd-3e39-4496-9184-5041e7573eed', title: 'Materi 4 Part 2', subtitle: 'Anuitas Akhir (Sesi 1)', desc: 'Pembahasan mengenai penurunan formula serta penerapan dan perhitungan anuitas akhir.' },
            { videoId: '9806a1d4-2ec8-436b-ad3d-effdd17fd015', title: 'Materi 4 Part 2', subtitle: 'Anuitas Awal (Sesi 2)', desc: 'Pembahasan mengenai penurunan formula serta penerapan dan perhitungan anuitas awal.' },
            { videoId: '0340cb2f-ef20-4994-97c1-51fdacd333e8', title: 'Materi 4 Part 3', subtitle: 'Hubungan Anuitas Akhir & Awal', desc: 'Pembahasan mengenai formula hubungan antara anuitas akhir dan awal beserta penurunannya.' },
            { videoId: 'aa8e0323-d8b3-4fad-b031-a1d04a27b36d', title: 'Materi 4 Part 4', subtitle: 'Perpetuitas', desc: 'Pembahasan mengenai penurunan formula serta pengaplikasian dan perhitungan perpetuitas.' },
            { videoId: 'bba73a7c-fad0-4efa-854a-69f137b3861a', title: 'Materi 4 Part 5', subtitle: 'Differing Payment & Interest Conversion Period', desc: 'Pembahasan mengenai pembayaran cashflow dengan pembayaran dan tingkat bunga yang berbeda dalam suatu periode.' },
            { videoId: '3b7d09be-273c-4871-81db-9ddadd0f725c', title: 'Materi 5 Part 1', subtitle: 'Arithmetic Annuity & Perpetuity', desc: 'Pembahasan mengenai anuitas dan perputuitas dengan adanya peningkatan pembayaran konstan untuk setiap periode.' },
            { videoId: '838b847c-a637-4d82-8c04-add680297229', title: 'Materi 5 Part 2', subtitle: 'Geometric Annuity & Perpetuity', desc: 'Pembahasan mengenai anuitas dan perpetuitas dengan adanya peningkatan pembayaran dengan persentase tertentu dari pembayaran sebelumnya.' },
            { videoId: '2565c1f6-4ee1-49da-a667-425be79f067d', title: 'Materi 6 Part 1', subtitle: 'Deferred Annuity', desc: 'Pembahasan mengenai anuitas tertunda atau anuitas dengan pembayaran pertama tidak di tahun awal atau pembayaran dimulai di suatu periode waktu tertentu.' },
            { videoId: '2667c812-a724-4c14-b8f1-a2752f30145c', title: 'Materi 7 Part 1', subtitle: 'Pengenalan Metode', desc: 'Pendahuluan dan pengenalan terhadap metode pembayaran utang.' },
            { videoId: 'b7ba2bad-8e64-4e1f-a9b1-1fd6b6a5a64b', title: 'Materi 7 Part 2', subtitle: 'Outstanding Loan Balance', desc: 'Pembahasan mengenai sisa pokok utang dengan metode retrospektif dan prospektif.' },
            { videoId: 'd287f92d-e156-4a1d-97b6-a7adcc798b6c', title: 'Materi 7 Part 3', subtitle: 'Ammortization', desc: 'Pembahasan mengenai pembayaran utang dengan metode amortisasi.' },
            { videoId: '84c06030-b556-4229-88b8-aaf552e38513', title: 'Materi 7 Part 4', subtitle: 'Sinking Fund', desc: 'Pembahasan mengenai pembayaran utang dengan metode amortisasi.' },
            { videoId: '86a2fb6c-a248-4f01-a6f3-06117e812f79', title: 'Materi 8 Part 1', subtitle: 'Pengenalan Obligasi', desc: 'Pendahuluan dan pengenalan terhadap obligasi.' },
            { videoId: 'd0d50d7a-a916-4fcf-8e6a-701845adefc5', title: 'Materi 8 Part 2', subtitle: 'Menghitung Obligasi', desc: 'Pembahasan mengenai perhitungan pada obligasi.' },
            { videoId: '12c8b502-f3e4-4931-8fed-e7d2dfe807ae', title: 'Materi 8 Part 3', subtitle: 'Soal Obligasi', desc: 'Pembahasan mengenai soal-soal perhitungan pada obligasi.' },
            { videoId: 'c299e928-f060-4634-9792-f15bc1af3d24', title: 'Materi 8 Part 4', subtitle: 'Bond Amortization', desc: 'Pembahsan mengenai perhitungan amortisasi pada obligasi.' },
            { videoId: '4d4e41c6-24c5-4679-919d-1f52517939c6', title: 'Materi 9 Part 1', subtitle: 'Reinvestment', desc: 'Pembahasan mengenai investasi yang hasil investasi atau bunga yang didapatkan akan diinvestasikan kembali.' },
            { videoId: '87722507-a514-4d41-a671-27ff33b2bf49', title: 'Materi 10 Part 1', subtitle: 'Time Weighted Rate of Interest', desc: 'Pembahsan mengenai tingkat bunga tahunan yang didapatkan dari suatu kinerja investasi dengan metode time weighted.' },
            { videoId: 'fbbea29f-7572-48b1-aae0-b74ff04788a5', title: 'Materi 10 Part 2', subtitle: 'Dollar Weighted Rate of Interest', desc: 'Pembahsan mengenai tingkat bunga tahunan yang didapatkan dari suatu kinerja investasi dengan metode dollar weighted.' },
            { videoId: '48571cea-a8cb-4af7-98d4-41c9b5b7802c', title: 'Materi 10 Part 3', subtitle: 'Soal Materi 10', desc: 'Pembahasan mengenai soal-soal mengenai time weighted dan dollar weighted rate of interest.' },
            { videoId: 'da13c509-d9f0-4fd2-adbb-30da2d645cb1', title: 'Materi 11 Part 1', subtitle: 'Inflasi', desc: 'Pembahasan mengenai inflasi yang dapat memengaruhi nilai uang.' }
        ],
        discussionVideos: [
            { videoId: '804ca7d9-7a8a-49ff-aef8-97f9c0fd149b', title: 'No. 1-6', subtitle: 'Agustus 2019' },
            { videoId: 'b90749ec-7e4f-4a74-8660-98f42c13675d', title: 'No. 1-6', subtitle: 'November 2019' },
            { videoId: 'e1f4f5f5-5ad8-4855-b5c6-cd3f276bf572', title: 'No. 1-6', subtitle: 'September 2020' },
            { videoId: '0a405c8c-e727-47c6-99c8-8052d2441b16', title: 'No. 1-6', subtitle: 'Juni 2021' },
            { videoId: 'f3b07f1c-edcd-4d0a-8fd8-aaf87e885a77', title: 'No. 1-6', subtitle: 'November 2021' },
            { videoId: '7109d17f-a0ce-4554-a00f-59232dd63834', title: 'No. 1-6', subtitle: 'April 2022' },
            { videoId: '3551cb42-f3f1-419f-8cdb-268b7ce5636a', title: 'No. 1-6', subtitle: 'Agustus 2022' },
            { videoId: '30154256-fdbd-4d3c-9b80-4151bd023ea4', title: 'No. 1-6', subtitle: 'Desember 2022' },
            { videoId: '0c491ec5-0261-4e9a-aefe-c8a57a4f0405', title: 'No. 1-6', subtitle: 'Mei 2023' },
            { videoId: '3e618a0c-61ab-40bb-b712-ed4e10cb6986', title: 'No. 1-6', subtitle: 'Agustus 2023' },
            { videoId: '4922e03f-3115-4a3f-afa3-4e23287612e9', title: 'No. 13-18', subtitle: 'Agustus 2019' },
            { videoId: '2ed30e12-e039-49c8-96ff-99061ba8a75a', title: 'No. 13-18', subtitle: 'November 2019' },
            { videoId: '21423767-9d49-45b4-83ff-91009159abcd', title: 'No. 13-18', subtitle: 'September 2020' },
            { videoId: '10e6865b-a8bc-4f36-adfa-c5d9a2904a87', title: 'No. 13-18', subtitle: 'Juni 2021' },
            { videoId: 'e9497771-3193-4334-92db-74fc0123184f', title: 'No. 13-18', subtitle: 'November 2021' },
            { videoId: '6f6c81c6-c30a-42bb-8292-2cbf9258f57d', title: 'No. 13-18', subtitle: 'April 2022' },
            { videoId: 'fee74080-987b-492b-8758-8efd09f8f964', title: 'No. 13-18', subtitle: 'Agustus 2022' },
            { videoId: 'cb84df1f-d794-42ab-91c9-3d5a5c0031ce', title: 'No. 13-18', subtitle: 'Desember 2022' },
            { videoId: 'bc45dd91-e632-4368-8e2f-99fdb0f0751c', title: 'No. 13-18', subtitle: 'Mei 2023' },
            { videoId: 'fc778eb1-e589-43dd-b4c0-201fb08302d0', title: 'No. 13-18', subtitle: 'Agustus 2023' },
            { videoId: '1d8dc710-64c4-469a-88c2-23cae4a47b50', title: 'No. 19-24', subtitle: 'Agustus 2019' },
            { videoId: '82a5d2a6-5311-45a9-90cd-f68a848da59c', title: 'No. 19-24', subtitle: 'November 2019' },
            { videoId: '8ff49f8a-3afc-4f66-9949-66095c441ad6', title: 'No. 19-24', subtitle: 'September 2020' },
            { videoId: 'c552e36d-ad44-4ff8-a0df-eeccb93f30e4', title: 'No. 19-24', subtitle: 'Juni 2021' },
            { videoId: '689dca4e-7233-4b79-849c-d45605d5df75', title: 'No. 19-24', subtitle: 'November 2021' },
            { videoId: '9286abea-8dff-4013-8628-40873c0c69d0', title: 'No. 19-24', subtitle: 'April 2022' },
            { videoId: 'b895a8ef-c487-4a6c-97ba-8ebba2c8bc59', title: 'No. 19-24', subtitle: 'Agustus 2022' },
            { videoId: 'd6f77464-febc-40b1-b020-ad88e2f618e7', title: 'No. 19-24', subtitle: 'Desember 2022' },
            { videoId: '75fd8fa0-48ba-42c5-8eaa-963a360f8bbf', title: 'No. 19-24', subtitle: 'Mei 2023' },
            { videoId: '39960172-0ed7-4cc4-952d-7fb89c16b3dc', title: 'No. 19-24', subtitle: 'Agustus 2023' },
            { videoId: 'd6800bc8-8fd7-4e7c-a84f-44f10174ab20', title: 'No. 25-30', subtitle: 'Agustus 2019' },
            { videoId: 'a0141293-9b1f-4b9b-a50c-b10ed18c4d42', title: 'No. 25-30', subtitle: 'November 2019' },
            { videoId: '9ce2b66e-0460-44cb-9793-1ada93d09570', title: 'No. 25-30', subtitle: 'September 2020' },
            { videoId: '8cc3bfa3-de02-41a8-869c-c85933bf5fb4', title: 'No. 25-30', subtitle: 'Juni 2021' },
            { videoId: 'd400e6cf-ac1e-43dc-b4be-089f75a56d9b', title: 'No. 25-30', subtitle: 'November 2021' },
            { videoId: 'c3c61a76-7e46-47e4-9e6d-f8045f8b77b5', title: 'No. 25-30', subtitle: 'April 2022' },
            { videoId: 'e7800c16-228a-485a-b397-d49d78f1a502', title: 'No. 25-30', subtitle: 'Agustus 2022' },
            { videoId: 'e3f8aba5-ece5-4752-8030-d09b71ee4f11', title: 'No. 25-30', subtitle: 'Desember 2022' },
            { videoId: '89e43731-0a24-468b-b419-af7ea9fb94a9', title: 'No. 25-30', subtitle: 'Mei 2023' },
            { videoId: 'b8a01b15-a93f-4163-a92a-9b77958dc841', title: 'No. 25-30', subtitle: 'Agustus 2023' },
            { videoId: 'd65f5b70-04b6-430b-8e47-f39f84a61eb6', title: 'No. 7-12', subtitle: 'Agustus 2019' },
            { videoId: '533ec648-fc17-45b0-afe7-6c7e0229d102', title: 'No. 7-12', subtitle: 'November 2019' },
            { videoId: '49ab6f3e-cc4d-4b07-ab68-ae15a1d4bc06', title: 'No. 7-12', subtitle: 'September 2020' },
            { videoId: '0c0e4de0-d496-4cf5-b32a-dc788adf772e', title: 'No. 7-12', subtitle: 'Juni 2021' },
            { videoId: '716ee83e-944a-42c9-9929-dc2952f80fbf', title: 'No. 7-12', subtitle: 'November 2021' },
            { videoId: 'e35828a4-2391-47b4-b40c-dbdd6fa1ff9a', title: 'No. 7-12', subtitle: 'April 2022' },
            { videoId: 'f4887e75-d0f5-4196-9d35-19847dcb7748', title: 'No. 7-12', subtitle: 'Agustus 2022' },
            { videoId: '88ee3af9-7b01-406e-a299-8e8c0a4571d2', title: 'No. 7-12', subtitle: 'Desember 2022' },
            { videoId: '4cc4b0a9-6e47-462f-aac0-1ebab6c8e84b', title: 'No. 7-12', subtitle: 'Mei 2023' },
            { videoId: '5e78b634-148e-4d29-96d0-5b77418bd6f8', title: 'No. 7-12', subtitle: 'Agustus 2023' }
        ]
    },
    'A20': {
        name: 'Probabilita dan Statistika',
        desc: 'Materi mengenai konsep fundamental probabilitas, variabel acak, dan distribusinya beserta penerapannya praktisnya dalam kehidupan sehari-hari.',
        materialVideos: [
            { videoId: 'f0955310-b4eb-4d4b-b26a-515eef776638', title: 'Materi 1 Part 1', subtitle: 'Introduction A20', desc: 'Pendahuluan dan pengenalan terhadap materi-materi dan pengaplikasian dari probabilitas dan statistik.' },
            { videoId: '9e9437bd-5824-4ca2-854d-1eae60eb61b2', title: 'Materi 2 Part 1', subtitle: 'Single-Stage Probability', desc: 'Pembahasan mengenai dasar probabilitas dan probability with equally likely outcome bagian single-stage probability atau probabilitas dari 1 ruang sampel.' },
            { videoId: 'c1042012-cf54-4d21-91d3-0e947b12bc73', title: 'Materi 2 Part 2', subtitle: 'Multi-Stage Probability', desc: 'Pembahasan mengenai probability with equally likely outcome bagian multi-stage probability atau probabilitas dengna lebih dari 1 ruang sampel.' },
            { videoId: 'be19b6d4-59a9-428b-8e07-1a593695d6a4', title: 'Materi 2 Part 3', subtitle: 'Sampling & Distribution for Equally Likely Outcome 1', desc: 'Pembahasan mengenai banyaknya cara memindahkan objek dari/ke suatu ruang sampel lain (permutasi dan kombinasi). ' },
            { videoId: '7dd57e63-52be-4569-abd9-81d5a331ca76', title: 'Materi 2 Part 4', subtitle: 'Sampling & Distribution for Equally Likely Outcome 2', desc: 'Pembahasan mengenai banyaknya cara memindahkan objek dari/ke suatu ruang sampel lain (replacement & order matters, partition, dan stick & stone).' },
            { videoId: '9d1eecd9-c94d-4994-a74c-424fd6204387', title: 'Materi 3 Part 1', subtitle: 'Important Probability Rules', desc: 'Pembahasan mengenai Negation Rule, Inclusion-Exclusion Rule, De Morgan\'s Laws, dan Venn Box Diagram.' },
            { videoId: '2faeb011-42a5-4c02-a30b-f870ffcfd8f8', title: 'Materi 3 Part 2', subtitle: 'Conditional Probability', desc: 'Pembahasan mengenai conditional probability atau probabilitas bersyarat dan penerapannya.' },
            { videoId: '5b687e4e-00dc-4b77-a666-5e77ea15e81d', title: 'Materi 3 Part 3', subtitle: 'Bayesian Theorem', desc: 'Pembahasan mengenai Bayesian Theorem dan penerapannya.' },
            { videoId: 'fc5e8aef-5e03-4020-8f23-d550da898aef', title: 'Materi 4 Part 1', subtitle: 'Pengenalan Random Variable', desc: 'Pendahuluan dan pengenalan terhadap random variabel atau variabel acak beserta contohnya.' },
            { videoId: '1dbc4ee5-4080-463c-821a-fa1f3ff7a28c', title: 'Materi 4 Part 2', subtitle: 'Random Variable Probability Function', desc: 'Pembahasan mengenai fungsi probabilitas, baik untuk diskrit maupun kontinu.' },
            { videoId: '8e859bd3-f861-49c3-99bd-4566645da10b', title: 'Materi 4 Part 3', subtitle: 'Random Variable Measuring of Central Tendency', desc: 'Pembahasan mengenai central tendency atau kecenderungan memusat (Expected Value (Mean), Median, Modus, Midrange), baik untuk kasus diskrit maupun kontinu.' },
            { videoId: '4f0a51cc-3cbb-4efc-9798-e50fc142f39e', title: 'Materi 4 Part 4', subtitle: 'Random Variable Measuring of Dispersion', desc: 'Pembahasan mengenai dispersion atau dispersi (Variansi dan Standar Deviasi), baik untuk kasus diskrit maupun kontinu.' },
            { videoId: 'd1da1040-fdd5-4b48-a9ca-53eb9df178f8', title: 'Materi 4 Part 5', subtitle: 'Percentiles & Quartiles', desc: 'Pembahasan mengenai persentil dan kuartil, baik untuk kasus diskrit dan kontinu.' },
            { videoId: 'a6caaec1-eb99-4b5b-9b34-cc4fd0828828', title: 'Materi 5 Part 1', subtitle: 'Conditional Probability of Random Variable', desc: 'Pembahasan mengenai probabilitas bersyarat dari variabel acak beserta penerapannya.' },
            { videoId: '0abc1f17-9704-4285-af46-dcaad211eb04', title: 'Materi 5 Part 2', subtitle: 'Expected Value of Conditional Random Variable', desc: 'Pembahasan mengenai expected value dari conditional random variabel beserta penerapannya.' },
            { videoId: '1987e8ee-ec9f-4089-9c5e-7423f06ac7dd', title: 'Materi 5 Part 3', subtitle: 'Dispersion of Conditional Random Variable', desc: 'Pembahasan mengenai dispersion dari conditional random variabel beserta penerapannya.' },
            { videoId: 'efad6831-8b8e-4152-b203-4f508751a08d', title: 'Materi 5 Part 4', subtitle: 'Deductible Insurance', desc: 'Pembahasan mengenai modifikasi deductible atau potongan klaim atas adanya own risk pada random variable.' },
            { videoId: '16b5b4c5-6df3-4f18-adad-425ef702dc65', title: 'Materi 5 Part 5', subtitle: 'Moment Generating Function (MGF)', desc: 'Pembahasan mengenai fungsi pembangkit momen (raw moment dan central moment).' },
            { videoId: '8701b071-8576-43c1-b66a-ea5aeeeca0aa', title: 'Materi 6 Part 1', subtitle: 'Pengenalan Distribusi', desc: 'Pendahuluan dan pengenalan terhadap distribusi atau model-model distribusi peluang pada kejadian probabilistic di kehidupan nyata.' },
            { videoId: '46b92eae-a2bb-46d6-82d3-b2cfaa2548be', title: 'Materi 6 Part 2', subtitle: 'Discrete Uniform Distribution', desc: 'Pembahasan mengenai distribusi diskrit uniform atau seragam beserta aplikasinya.' },
            { videoId: 'a9ffa022-cdb1-4e40-8866-1431a2aabd27', title: 'Materi 6 Part 3', subtitle: 'Bernoulli Trial & Binomial Distribution', desc: 'Pembahasan mengenai  distribusi diskrit Bernoulli Trial & Binomial Distribution beserta aplikasinya.' },
            { videoId: 'b956e3a8-d857-4d47-970d-36cf591e563a', title: 'Materi 6 Part 4', subtitle: 'Geometric Distribution', desc: 'Pembahasan mengenai distribusi diskrit geometrik beserta aplikasinya.' },
            { videoId: '20171676-38d6-44f3-8d97-9f7fcbf4a14d', title: 'Materi 6 Part 5', subtitle: 'Negative Binomial Distribution', desc: 'Pembahasan mengenai distribusi diskirt negatif binomial beserta aplikasinya.' },
            { videoId: '4a0be437-7242-4896-b823-f69aada1616d', title: 'Materi 6 Part 6', subtitle: 'Poisson Distribution', desc: 'Pembahasan mengenai distribusi diskrit poisson beserta aplikasinya.' },
            { videoId: '2e94a340-bc82-4a07-8391-8ab99c33add5', title: 'Materi 6 Part 7', subtitle: 'Hyper-Geometric Distribution', desc: 'Pembahasan mengenai distribusi diskrit hyper-geometric beserta aplikasinya.' },
            { videoId: '1daca3ba-d278-40f9-8399-e0b89569da5b', title: 'Materi 7 Part 1', subtitle: 'Continuous Uniform Distribution', desc: 'Pembahasan mengenai distribusi kontinu uniform atau seragam beserta aplikasinya.' },
            { videoId: '7d535f64-981a-4c38-98b1-b35c3f2f72b1', title: 'Materi 7 Part 2', subtitle: 'Exponential Distribution', desc: 'Pembahasan mengenai distribusi kontinu exponential beserta aplikasinya.' },
            { videoId: '0fcd5a51-894c-47d3-9da8-0255d1359d20', title: 'Materi 7 Part 3', subtitle: 'Gamma Distribution', desc: 'Pembahasan mengenai distribusi kontinu gamma beserta aplikasinya.' },
            { videoId: '88738ba2-1100-41a9-8c2f-d71b4b5ca937', title: 'Materi 7 Part 4', subtitle: 'Normal Distribution', desc: 'Pembahasan mengenai distribusi kontinu normal sebagai distribusi paling penting di statistik beserta aplikasinya.' },
            { videoId: '6c53496e-c7da-43c1-9bfa-52a2b7284d55', title: 'Materi 7 Part 5', subtitle: 'Chi-Square Distribution', desc: 'Pembahasan mengenai distribusi kontinu chi-square beserta aplikasinya.' },
            { videoId: '58295224-3cff-4127-811c-bcf03b28fd88', title: 'Materi 8 Part 1', subtitle: 'Pengenalan CLT', desc: 'Pendahuluan dan pengenalan terhadap Central Limit Theorem.' },
            { videoId: 'b647388b-a8ed-4907-ae13-a776567a6147', title: 'Materi 8 Part 2', subtitle: 'Central Limit Theorem', desc: 'Pembahasan megengai Central Limit Theorem (CLT Sample Mean Version dan CLT Sum Version).' },
            { videoId: '27046ba3-0d5c-48c5-8de8-d6a53e96861f', title: 'Materi 9 Part 1', subtitle: 'Law of Large Number', desc: 'Pembahasan megenai Central Limit Theorem (Hukum Bilangan Besar) beserta aplikasinya.' },
            { videoId: '64e982b6-5f1e-41d6-b535-df534da0a787', title: 'Materi 9 Part 2', subtitle: 'Chebyshev\'s Theorem', desc: 'Pembahasan megenai Chebyshev\'s Theorem beserta aplikasinya.' },
            { videoId: '3b567b61-b46b-4541-8aa0-f661a7068859', title: 'Materi 10 Part 1', subtitle: 'Discrete Joint Distribution', desc: 'Pembahasan mengenai distribusi peluang bersama diskrit dari multivariate random variable.' },
            { videoId: '10a11d96-3be0-44ba-a89d-ab0678fd0387', title: 'Materi 10 Part 2', subtitle: 'Continuous Joint Distribution', desc: 'Pembahasan mengenai distribusi peluang bersama kontinu dari multivariate random variable.' },
            { videoId: '6cc60daf-e74c-4c04-bf37-b382ca42b0ed', title: 'Materi 10 Part 3', subtitle: 'Conditional Joint Distribution', desc: 'Pembahasan mengenai distribusi peluang bersama bersyarat dari multivariate random variaable, baik untuk distribusi diskrit maupun kontinu.' },
            { videoId: 'e92ed72b-4bb5-451d-b323-a62c8ee7c7ef', title: 'Materi 10 Part 4', subtitle: 'Covariance & Correlation', desc: 'Pembahasan mengenai covariance dan correlation dari multivariate random variable.' },
            { videoId: 'fcfa004d-b00b-4138-ba95-97bf565a33fc', title: 'Materi 10 Part 5', subtitle: 'Multivariate Independence', desc: 'Pembahasan mengenai akibat independensi pada multivariate random variable.' },
            { videoId: '6b55011a-1deb-4501-8308-b97567d0b75c', title: 'Materi 11 Part 1', subtitle: 'Transformation Random Variable', desc: 'Pembahasan mengenai transformasi pada variabel acak dengan berbagai metode.' },
            { videoId: 'ba1f6ea8-15ca-4d36-8fa0-9c77dfe067c3', title: 'Materi 11 Part 2', subtitle: 'Order Statistics', desc: 'Pembahasan mengenai statistik terurut atau transformasi pada variabel acak untuk menghasilkan nilai tertinggi dan terendah dari data.' },
            { videoId: '5ea6556d-585c-49cb-90e1-ffcdca40b39d', title: 'Materi 11 Part 3', subtitle: 'Sum of Random Variable', desc: 'Pembahasan mengenai penjumlahan dari variabel acak serta sifat-sifatnya.' },
            { videoId: 'ca93c038-3603-439b-a6e6-4decd83f7d28', title: 'Materi 11 Part 4', subtitle: 'Double Expectation Formula', desc: 'Pembahasan mengenai double expectation atau ekspektasi dari ekspektasi suatu formula atau fungsi.' },
            { videoId: 'e6c6d6c8-8bd0-4632-a799-14f83a9ea65c', title: 'Materi 12 Part 1', subtitle: 'Population Variance Estimation', desc: 'Pembahasan mengenai sampling yang dilakukan untuk melakukan estimasi variance dari populasi.' },
            { videoId: '5d2fd59f-78bb-45cf-9026-814dc7d42fb8', title: 'Materi 12 Part 2', subtitle: 'Population Mean Estimation', desc: 'Pembahasan mengenai sampling yang dilakukan untuk melakukan estimasi mean dari populasi.' },
            { videoId: 'ef8ba7f8-5e61-4998-81bb-bb656538352f', title: 'Materi 12 Part 3', subtitle: 'Sample Size Estimation', desc: 'Pembahasan mengenai estimasi untuk memperkirakan jumlah sampel yang diperlukan berdasarkan beberapa kasus.' },
            { videoId: 'e2b5b4d3-3a2f-4100-8bab-debe63ab64a1', title: 'Materi 13 Part 1', subtitle: 'Pengenalan Uji Hipotesis', desc: 'Pendahuluan dan pengenalan terhadap uji hipotesis (null hypothesis dan alternative hypothesis).' },
            { videoId: '20844dfe-dcb2-4890-864a-c00d63dc5cfe', title: 'Materi 13 Part 2', subtitle: 'Contoh - Contoh Uji Hipotesis', desc: 'Pembahasan mengenai contoh-contoh dan jenis-jenis uji hipotesis.' },
            { videoId: '3868c960-dd6c-478f-861c-65cad1e80b6a', title: 'Materi 13 Part 3', subtitle: 'Type I and II Error', desc: 'Pembahasan mengenai type I dan type II error atau kesalahan penolakan hipotesis pada uji hipotesis.' },
            { videoId: 'efddd87c-121f-4bb6-a2d9-838b8e48cb2a', title: 'Materi 13 Part 4', subtitle: 'Independence Test for Contingency Table', desc: 'Pembahasan mengenai uji hipotesis untuk menguji independensi apakah 2 variabel saling independen atau tidak.' },
            { videoId: 'c4709201-a7cd-4e82-86cf-e85652ce8f5e', title: 'Materi 13 Part 5', subtitle: 'Goodness of Fit Test', desc: 'Pembahasan mengenai uji hipotesis untuk menguji apakah asumsi cocok atau tidak dengan data aktual.' }
        ],
        discussionVideos: [
            { videoId: '8362af55-d088-47cc-92dc-2b2225411e5c', title: 'No. 1-6', subtitle: 'Oktober 2020' },
            { videoId: 'e52349a2-e9ce-483b-afd9-4f0d4c742d8a', title: 'No. 1-6', subtitle: 'Juni 2021' },
            { videoId: 'e0314ec2-a3ff-4033-9dbc-f775fa99fb5d', title: 'No. 1-6', subtitle: 'November 2021' },
            { videoId: '8f598d51-ecf6-4166-a78c-9ed80ac2fc8a', title: 'No. 1-6', subtitle: 'April 2022' },
            { videoId: '41d21ed4-0fdc-4c75-8374-53cd130b85f1', title: 'No. 1-6', subtitle: 'Agustus 2022' },
            { videoId: '8ef2d7ae-8608-4aa7-8238-0599403e4025', title: 'No. 1-6', subtitle: 'Desember 2022' },
            { videoId: '495be8cd-cf8b-4987-b54f-515154a8ecd1', title: 'No. 1-6', subtitle: 'Mei 2023' },
            { videoId: 'cd25d745-3eac-49cc-a8ee-0bb27b388cde', title: 'No. 1-6', subtitle: 'Agustus 2023' },
            { videoId: '95a61b31-c410-4337-9f81-3f1d58b0eae2', title: 'No. 13-18', subtitle: 'Oktober 2020' },
            { videoId: '4e02fba2-81db-4fcf-b53a-86b9b5f8e98b', title: 'No. 13-18', subtitle: 'Juni 2021' },
            { videoId: 'f2be74a7-c3ba-4c0c-bd45-964223683659', title: 'No. 13-18', subtitle: 'November 2021' },
            { videoId: '60efa6e4-7145-4202-8a72-bfafc15ca23d', title: 'No. 13-18', subtitle: 'April 2022' },
            { videoId: '82019328-b97a-49d8-ab63-a752275ba5c5', title: 'No. 13-18', subtitle: 'Agustus 2022' },
            { videoId: '33c62112-7085-4656-98ed-dc78c93e300c', title: 'No. 13-18', subtitle: 'Desember 2022' },
            { videoId: 'a5a3a2c3-738b-4853-97c6-ea49dc0bbc17', title: 'No. 13-18', subtitle: 'Mei 2023' },
            { videoId: '81156867-a689-453d-81bb-c439442b9423', title: 'No. 13-18', subtitle: 'Agustus 2023' },
            { videoId: '5a340068-879a-4a0c-a0ad-4a248e956fc6', title: 'No. 19-24', subtitle: 'Oktober 2020' },
            { videoId: '5ff89956-1537-4d1b-ad12-89281dc4db1f', title: 'No. 19-24', subtitle: 'Juni 2021' },
            { videoId: '40e4e2e9-19fc-411e-99b1-eb5dcdd09619', title: 'No. 19-24', subtitle: 'November 2021' },
            { videoId: 'edd91c64-ec09-4c28-b465-9fe9b334d352', title: 'No. 19-24', subtitle: 'April 2022' },
            { videoId: '5771c818-6246-481d-b2ad-a3811bc72eb7', title: 'No. 19-24', subtitle: 'Agustus 2022' },
            { videoId: '2aa8553a-8a1e-4a5e-ad7b-71dca7f2ac26', title: 'No. 19-24', subtitle: 'Desember 2022' },
            { videoId: '9e0d5029-08bc-446a-9cd4-eb45f52782ec', title: 'No. 19-24', subtitle: 'Mei 2023' },
            { videoId: '9f546a2a-1c4f-4f76-97bb-d4948addd4b0', title: 'No. 19-24', subtitle: 'Agustus 2023' },
            { videoId: '7ab98c1a-2b8b-4877-96ce-bc30e481fa23', title: 'No. 25-30', subtitle: 'Oktober 2020' },
            { videoId: '684b1cc8-2a3a-45ff-a802-6482de17eb76', title: 'No. 25-30', subtitle: 'Juni 2021' },
            { videoId: 'aa1e3b7d-3105-49b0-9dba-1e923b2c5e8f', title: 'No. 25-30', subtitle: 'November 2021' },
            { videoId: '1fa65622-e2e7-4146-aba0-a4f56f5a99aa', title: 'No. 25-30', subtitle: 'April 2022' },
            { videoId: '9146a537-06a4-48e7-8625-f9ae47b5470b', title: 'No. 25-30', subtitle: 'Agustus 2022' },
            { videoId: 'bbcfb715-a6d8-476a-9004-0304c29ba433', title: 'No. 25-30', subtitle: 'Desember 2022' },
            { videoId: '85fa3afa-e69d-48da-be29-c66d68a11dd8', title: 'No. 25-30', subtitle: 'Mei 2023' },
            { videoId: 'b2558e63-b747-4954-a2b8-cd1aeb7d8c62', title: 'No. 25-30', subtitle: 'Agustus 2023' },
            { videoId: '13f59dc4-c87d-4911-b2c6-5189e0a20d87', title: 'No. 7-12', subtitle: 'Oktober 2020' },
            { videoId: 'c0642474-c3fb-476e-8ed4-e7707214608e', title: 'No. 7-12', subtitle: 'Juni 2021' },
            { videoId: '5cab765d-9af6-407f-a773-1c0e4f99ceff', title: 'No. 7-12', subtitle: 'November 2021' },
            { videoId: '18f38dc3-af21-4387-b565-c3df4506de3f', title: 'No. 7-12', subtitle: 'April 2022' },
            { videoId: 'aa92c3c4-47bc-48d5-96c7-ae48f47e9e8d', title: 'No. 7-12', subtitle: 'Agustus 2022' },
            { videoId: '9ca9dada-abd4-4b60-8085-c51521738ce4', title: 'No. 7-12', subtitle: 'Desember 2022' },
            { videoId: '9a7b1dbf-8377-40db-8561-e0bf83a52ded', title: 'No. 7-12', subtitle: 'Mei 2023' },
            { videoId: '103b329e-c606-4707-b0bd-b5604e6c41d3', title: 'No. 7-12', subtitle: 'Agustus 2023' }
        ]
    },
    'A40': {
        name: 'Akuntansi',
        desc: 'Deskripsi singkat tentang modul A40: Matematika Keuangan. Deskripsi singkat tentang modul A40 deskripsi singkat tentang modul A40 deskripsi singkat tentang modul A40.',
        materialVideos: [],
        discussionVideos: []
    }
}

export const privateTutorPackages = [
    {
        name: 'Mahasiswa',
        price: 'IDR225,000',
        tags: ['1 peserta', '1 pertemuan']
    },
    {
        name: 'Umum',
        price: 'IDR300,000',
        tags: ['1 peserta', '1 pertemuan']
    }
]

export const academyPackages = [
    {
        type: 'Paket Pembahasan Soal',
        period: '6 Bulan',
        originalPrice: 'IDR500.000',
        price: 'IDR299.000',
        facilities: [
            'Diskusi grup, Q & A',
            'Video pembahasan soal ujian PAI',
            'Kuis & try out',
            'Kelas online sinkronus dengan tutor (125k / pertemuan @ 1 jam)'
        ],
        theme: 'white'
    },
    {
        type: 'Paket Pembahasan Soal',
        period: 'Lifetime',
        originalPrice: 'IDR2.000.000',
        price: 'IDR599.000',
        facilities: [
            'Diskusi grup, Q & A',
            'Video pembahasan soal ujian PAI',
            'Kuis & try out',
            'Kelas online sinkronus dengan tutor (125k / pertemuan @ 1 jam)'
        ],
        theme: 'white'
    },
    {
        type: 'Paket Lengkap',
        period: '6 Bulan',
        originalPrice: 'IDR1.000.000',
        price: 'IDR699.000',
        facilities: [
            'Diskusi grup, Q & A',
            'Video materi',
            'Video pembahasan soal ujian PAI',
            'Kuis & try out',
            'Kelas online sinkronus dengan tutor (125k / pertemuan @ 1 jam)'
        ],
        theme: 'blue'
    },
    {
        type: 'Paket Lengkap',
        period: 'Lifetime',
        originalPrice: 'IDR4.000.000',
        price: 'IDR999.000',
        facilities: [
            'Diskusi grup, Q & A',
            'Video materi',
            'Video pembahasan soal ujian PAI',
            'Kuis & try out',
            'Kelas online sinkronus dengan tutor (125k / pertemuan @ 1 jam)'
        ],
        theme: 'blue'
    }
]

export const testimonies = [
    {
        name: 'Jessica Wahjudi',
        product: 'A10',
        grade: 93.33,
        image: '/src/assets/testimonies/default-female.png',
        text: 'Soal-soal latihan & review materi dari Actuary Academy sangat membantu saya untuk mempersiapkan diri mengambil ujian A10. Semangat terus Actuary Academy! Semoga  sukses selalu!',
    },
    {
        name: 'Atika Elsadining',
        product: 'A10',
        grade: 93.33,
        image: '/src/assets/testimonies/default-female.png',
        text: 'Materi yang disampaikan lengkap. Mentor sangat jelas dalam menjelaskan. Memang butuh waktu & fokus untuk belajar. Semoga si ujian berikutnya bisa lulus memuaskan & banyak waktu belajar!',
    },
    {
        name: 'Muhammad Rizki',
        product: 'A10',
        grade: 90,
        image: '/src/assets/testimonies/default-male.png',
        text: 'Mas Fabian mengajar dengan baik. Video pembelajarannya pun dapat dimengerti, mempermudah kita belajar untuk ujian Aktuaris & Alhamdulillah mendapatkan nilai yang memuaskan.',
    },
    {
        name: 'Grace Kurniawan',
        product: 'A20',
        grade: 90,
        image: '/src/assets/testimonies/default-female.png',
        text: 'Penjelasannya Kak Fabian mudah dimengerti di videonya & jadi dapat cara baru”untuk menyelesaikan soalnya.',
    },
    {
        name: 'Ratih Binadari',
        image: '/src/assets/testimonies/default-female.png',
        text: 'Kelasnya Mas Fabian asik. Penjelasan dari video mudah dimengerti. Insyaallah modul berikutnya ikut kelas Mas Fabian',
    },
    {
        name: 'Arif Kusharyadi',
        product: 'A10',
        grade: 96.67,
        image: '/src/assets/testimonies/default-male.png',
        text: 'Materinya yang diberikan sangat ringkas & bisa dipelajari dalam waktu singkat',
    },
    {
        name: 'Fildzah Fakhrana',
        image: '/src/assets/testimonies/default-female.png',
        text: 'Tiga kali tutor (PMAJ, Matematika Keuangan, Probabilitas Statistika) sama Kak Fabian mudah banget buat dimengerti, penjelasannya sangat membantu. Kalo ada setiap pertanyaan juga dijelasin secara menditail sampe kita bener2 paham & gapelit buat berbagi ilmu. Thank u kak Fabian, next pasti belajar di Actuary Academy lagi!',
    },
    {
        name: 'Astrid M.S.',
        image: '/src/assets/testimonies/default-female.png',
        text: 'Fabian merupakan pengajar yang sabar & sangat terperinci. Selain itu, materi yang diajarkannya pun dikupas tuntas. Di sela-sela pengajaran, Fabian juga menanyakan apakah sudah mengerti/masih ada yang dibingungkan.',
    },
    {
        name: 'Kharisma',
        image: '/src/assets/testimonies/default-female.png',
        text: 'Tutor sama kak Fabian santai banget tapi hal yang diajarkan itu bikin paham. Kak Fabian juga mengajarkannya step-by-step jadi lebih mudah untuk dipahami',
    }
]

export const tutors = [
    {
        name: 'Kezya Fabian Ramadhan',
        classes: 'A10, A20, A50, A60, A70',
        achievs: [
            'Founder & Director Actuary Academy',
            'Local & Reinsurance Actuary Intern AXA Financial Indonesia',
            'Mempunyai 7 sertifikasi ujian PAI (A10, A20, A30, A40, A50, A60, dan A70)',
            'Mahasiswa Ilmu Aktuaria UGM 2019'
        ],
        img: '/src/assets/tutors/fabian.png'
    },
    {
        name: 'William Kosasih',
        classes: 'A10, A20',
        achievs: [
            'General Banking Program Intern Bank Mandiri',
            'Mempunyai 2 sertifikasi ujian PAI (A10 dan A20)',
            'Peraih Medali Perak ONMIPA Bidang Matematika 2022',
            'Mahasiswa Matematika UGM 2020'
        ],
        img: '/src/assets/tutors/william.png'
    }
]

export const notifCount = 2;
export const purchaseCount = 3;
