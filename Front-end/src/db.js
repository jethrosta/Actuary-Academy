// TEMPORARY DATA BEFORE REAL DATABASE IS READY FOR USE

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
        desc: 'Deskripsi singkat tentang modul A10: Matematika Keuangan. Deskripsi singkat tentang modul A10 deskripsi singkat tentang modul A10 deskripsi singkat tentang modul A10.',
        videos: [
            { category: 'Materi 1 Part 1', title: 'Introduction A10', videoId: '2b25fb78-7a20-4db1-bf9e-f2148f00d53d' },
            { category: 'Materi 2 Part 1', title: 'Proses Pembungaan', videoId: '2e0bbe9b-86f5-44a6-ad08-b6c386ec1293' },
            { category: 'Materi 2 Part 2', title: 'Jenis Bunga Berdasarkan Cara Perhitungannya', videoId: 'd8de9752-bb1b-4f81-88ee-97cf5197d130' },
            { category: 'Materi 2 Part 3', title: 'Jenis Bunga Periodik (Sesi 1)', videoId: '1e8b13f1-50b4-4081-9f72-8db8cfe03b8e' },
            { category: 'Materi 2 Part 4', title: 'Jenis Bunga Periodik (Sesi 2)', videoId: '362f0a16-2304-4b27-aefe-71227d55179a' },
            { category: 'Materi 2 Part 5', title: 'Ekuivalensi Bunga Periodik', videoId: '3f01383b-ea43-4bdc-a105-60063fd82894' },
            { category: 'Materi 3 Part 1', title: 'Time Value Of Money', videoId: '65d8ed78-348a-4808-b096-50e6da350e95' },
            { category: 'Materi 4 Part 1', title: 'Pengenalan Anuitas', videoId: 'c33dc552-7217-4802-853a-344f1665938e' },
            { category: 'Materi 4 Part 2', title: 'Anuitas Akhir (Sesi 1)', videoId: 'c32838dd-3e39-4496-9184-5041e7573eed' },
            { category: 'Materi 4 Part 2', title: 'Anuitas Awal (Sesi 2)', videoId: '9806a1d4-2ec8-436b-ad3d-effdd17fd015' },
            { category: 'Materi 4 Part 3', title: 'Hubungan Anuitas Akhir - Awal', videoId: '0340cb2f-ef20-4994-97c1-51fdacd333e8' },
            { category: 'Materi 4 Part 4', title: 'Perpetuitas', videoId: 'aa8e0323-d8b3-4fad-b031-a1d04a27b36d' },
            { category: 'Materi 4 Part 5', title: 'Differing Payment - Interest Conversion Period', videoId: 'bba73a7c-fad0-4efa-854a-69f137b3861a' },
            { category: 'Materi 5 Part 1', title: 'Arithmetic Annuity - Perpetuity', videoId: '3b7d09be-273c-4871-81db-9ddadd0f725c' },
            { category: 'Materi 5 Part 2', title: 'Geometric Annuity - Perpetuity', videoId: '838b847c-a637-4d82-8c04-add680297229' },
            { category: 'Materi 6 Part 1', title: 'Deferred Annuity', videoId: '2565c1f6-4ee1-49da-a667-425be79f067d' },
            { category: 'Materi 7 Part 1', title: 'Pengenalan Metode', videoId: '2667c812-a724-4c14-b8f1-a2752f30145c' },
            { category: 'Materi 7 Part 2', title: 'Outstanding Loan Balance', videoId: 'b7ba2bad-8e64-4e1f-a9b1-1fd6b6a5a64b' },
            { category: 'Materi 7 Part 3', title: 'Ammortization', videoId: 'd287f92d-e156-4a1d-97b6-a7adcc798b6c' },
            { category: 'Materi 7 Part 4', title: 'Sinking Fund', videoId: '84c06030-b556-4229-88b8-aaf552e38513' },
            { category: 'Materi 8 Part 1', title: 'Pengenalan Obligasi', videoId: '86a2fb6c-a248-4f01-a6f3-06117e812f79' },
            { category: 'Materi 8 Part 2', title: 'Menghitung Obligasi', videoId: 'd0d50d7a-a916-4fcf-8e6a-701845adefc5' },
            { category: 'Materi 8 Part 3', title: 'Soal Obligasi', videoId: '12c8b502-f3e4-4931-8fed-e7d2dfe807ae' },
            { category: 'Materi 8 Part 4', title: 'Bond Ammortization', videoId: 'c299e928-f060-4634-9792-f15bc1af3d24' },
            { category: 'Materi 9 Part 1', title: 'Reinvestment', videoId: '4d4e41c6-24c5-4679-919d-1f52517939c6' },
            { category: 'Materi 10 Part 1', title: 'Time Weighted Rate of Interest', videoId: '87722507-a514-4d41-a671-27ff33b2bf49' },
            { category: 'Materi 10 Part 2', title: 'Dollar Weighted Rate of Interest', videoId: 'fbbea29f-7572-48b1-aae0-b74ff04788a5' },
            { category: 'Materi 10 Part 3', title: 'Soal Materi 10', videoId: '48571cea-a8cb-4af7-98d4-41c9b5b7802c' },
            { category: 'Materi 11 Part 1', title: 'Inflasi', videoId: 'da13c509-d9f0-4fd2-adbb-30da2d645cb1' }
        ]
    },
    'A20': {
        name: 'Probabilita dan Statistika',
        desc: 'Deskripsi singkat tentang modul A20: Matematika Keuangan. Deskripsi singkat tentang modul A20 deskripsi singkat tentang modul A20 deskripsi singkat tentang modul A20.',
        videos: [
            { category: 'Materi 1 Part 1', title: 'Introduction A20', videoId: 'f0955310-b4eb-4d4b-b26a-515eef776638' },
            { category: 'Materi 2 Part 1', title: 'Single-Stage Probability', videoId: '9e9437bd-5824-4ca2-854d-1eae60eb61b2' },
            { category: 'Materi 2 Part 2', title: 'Multi-Stage Probability', videoId: 'c1042012-cf54-4d21-91d3-0e947b12bc73' },
            { category: 'Materi 2 Part 3', title: 'Sampling - Distribution for Equally Likely Outcome 1', videoId: 'be19b6d4-59a9-428b-8e07-1a593695d6a4' },
            { category: 'Materi 2 Part 4', title: 'Sampling - Distribution for Equally Likely Outcome 2', videoId: '7dd57e63-52be-4569-abd9-81d5a331ca76' },
            { category: 'Materi 3 Part 1', title: 'Important Probability Rules', videoId: '9d1eecd9-c94d-4994-a74c-424fd6204387' },
            { category: 'Materi 3 Part 2', title: 'Conditional Probability', videoId: '2faeb011-42a5-4c02-a30b-f870ffcfd8f8' },
            { category: 'Materi 3 Part 3', title: 'Bayesian Theorem', videoId: '5b687e4e-00dc-4b77-a666-5e77ea15e81d' },
            { category: 'Materi 4 Part 1', title: 'Pengenalan Random Variable', videoId: 'fc5e8aef-5e03-4020-8f23-d550da898aef' },
            { category: 'Materi 4 Part 2', title: 'Random Variable Probability Function', videoId: '1dbc4ee5-4080-463c-821a-fa1f3ff7a28c' },
            { category: 'Materi 4 Part 3', title: 'Random Variable Measuring of Central Tendency', videoId: '8e859bd3-f861-49c3-99bd-4566645da10b' },
            { category: 'Materi 4 Part 4', title: 'Random Variable Measuring of Dispersion', videoId: '4f0a51cc-3cbb-4efc-9798-e50fc142f39e' },
            { category: 'Materi 4 Part 5', title: 'Percentiles - Quartiles', videoId: 'd1da1040-fdd5-4b48-a9ca-53eb9df178f8' },
            { category: 'Materi 5 Part 1', title: 'Conditional Probability of Random Variable', videoId: 'a6caaec1-eb99-4b5b-9b34-cc4fd0828828' },
            { category: 'Materi 5 Part 2', title: 'Expected Value of Conditional Random Variable', videoId: '0abc1f17-9704-4285-af46-dcaad211eb04' },
            { category: 'Materi 5 Part 3', title: 'Dispersion of Conditional Random Variable', videoId: '1987e8ee-ec9f-4089-9c5e-7423f06ac7dd' },
            { category: 'Materi 5 Part 4', title: 'Deductible Insurance', videoId: 'efad6831-8b8e-4152-b203-4f508751a08d' },
            { category: 'Materi 5 Part 5', title: 'Moment Generating Function (MGF)', videoId: '16b5b4c5-6df3-4f18-adad-425ef702dc65' },
            { category: 'Materi 6 Part 1', title: 'Pengenalan Distribusi', videoId: '8701b071-8576-43c1-b66a-ea5aeeeca0aa' },
            { category: 'Materi 6 Part 2', title: 'Discrete Uniform Distribution', videoId: '46b92eae-a2bb-46d6-82d3-b2cfaa2548be' },
            { category: 'Materi 6 Part 3', title: 'Bernoulli Trial - Binomial Distribution', videoId: 'a9ffa022-cdb1-4e40-8866-1431a2aabd27' },
            { category: 'Materi 6 Part 4', title: 'Geometric Distribution', videoId: 'b956e3a8-d857-4d47-970d-36cf591e563a' },
            { category: 'Materi 6 Part 5', title: 'Negative Binomial Distribution', videoId: '20171676-38d6-44f3-8d97-9f7fcbf4a14d' },
            { category: 'Materi 6 Part 6', title: 'Poisson Distribution', videoId: '4a0be437-7242-4896-b823-f69aada1616d' },
            { category: 'Materi 6 Part 7', title: 'Hyper-Geometric Distribution', videoId: '2e94a340-bc82-4a07-8391-8ab99c33add5' },
            { category: 'Materi 7 Part 1', title: 'Continuous Uniform Distribution', videoId: '1daca3ba-d278-40f9-8399-e0b89569da5b' },
            { category: 'Materi 7 Part 2', title: 'Exponential Distribution', videoId: '7d535f64-981a-4c38-98b1-b35c3f2f72b1' },
            { category: 'Materi 7 Part 3', title: 'Gamma Distribution', videoId: '0fcd5a51-894c-47d3-9da8-0255d1359d20' },
            { category: 'Materi 7 Part 4', title: 'Normal Distribution', videoId: '88738ba2-1100-41a9-8c2f-d71b4b5ca937' },
            { category: 'Materi 7 Part 5', title: 'Chi-Square Distribution', videoId: '6c53496e-c7da-43c1-9bfa-52a2b7284d55' },
            { category: 'Materi 8 Part 1', title: 'Pengenalan CLT', videoId: '58295224-3cff-4127-811c-bcf03b28fd88' },
            { category: 'Materi 8 Part 2', title: 'Central Limit Theorem', videoId: 'b647388b-a8ed-4907-ae13-a776567a6147' },
            { category: 'Materi 9 Part 1', title: 'Law of Large Number', videoId: '27046ba3-0d5c-48c5-8de8-d6a53e96861f' },
            { category: 'Materi 9 Part 2', title: 'Chebyshev_s Theorem', videoId: '64e982b6-5f1e-41d6-b535-df534da0a787' },
            { category: 'Materi 10 Part 1', title: 'Discrete Joint Distribution', videoId: '3b567b61-b46b-4541-8aa0-f661a7068859' },
            { category: 'Materi 10 Part 2', title: 'Continuous Joint Distribution', videoId: '10a11d96-3be0-44ba-a89d-ab0678fd0387' },
            { category: 'Materi 10 Part 3', title: 'Conditional Joint Distribution', videoId: '6cc60daf-e74c-4c04-bf37-b382ca42b0ed' },
            { category: 'Materi 10 Part 4', title: 'Covariance - Correlation', videoId: 'e92ed72b-4bb5-451d-b323-a62c8ee7c7ef' },
            { category: 'Materi 10 Part 5', title: 'Multivariate Independence', videoId: 'fcfa004d-b00b-4138-ba95-97bf565a33fc' },
            { category: 'Materi 11 Part 1', title: 'Transformation Random Variable', videoId: '6b55011a-1deb-4501-8308-b97567d0b75c' },
            { category: 'Materi 11 Part 2', title: 'Order Statistics', videoId: 'ba1f6ea8-15ca-4d36-8fa0-9c77dfe067c3' },
            { category: 'Materi 11 Part 3', title: 'Sum of Random Variable', videoId: '5ea6556d-585c-49cb-90e1-ffcdca40b39d' },
            { category: 'Materi 11 Part 4', title: 'Double Expectation Formula', videoId: 'ca93c038-3603-439b-a6e6-4decd83f7d28' },
            { category: 'Materi 12 Part 1', title: 'Population Variance Estimastion', videoId: 'e6c6d6c8-8bd0-4632-a799-14f83a9ea65c' },
            { category: 'Materi 12 Part 2', title: 'Population Mean Estimation', videoId: '5d2fd59f-78bb-45cf-9026-814dc7d42fb8' },
            { category: 'Materi 12 Part 3', title: 'Sample Size Estimation (1)', videoId: 'ef8ba7f8-5e61-4998-81bb-bb656538352f' },
            { category: 'Materi 13 Part 1', title: 'Pengenalan Uji Hipotesis', videoId: 'e2b5b4d3-3a2f-4100-8bab-debe63ab64a1' },
            { category: 'Materi 13 Part 2', title: 'Contoh - Contoh Uji Hipotesis', videoId: '20844dfe-dcb2-4890-864a-c00d63dc5cfe' },
            { category: 'Materi 13 Part 3', title: 'Type I and II Error', videoId: '3868c960-dd6c-478f-861c-65cad1e80b6a' },
            { category: 'Materi 13 Part 4', title: 'Independence Test for Contingency Table', videoId: 'efddd87c-121f-4bb6-a2d9-838b8e48cb2a' },
            { category: 'Materi 13 Part 5', title: 'Goodness of Fit Test', videoId: 'c4709201-a7cd-4e82-86cf-e85652ce8f5e' }
        ]
    },
    'A40': {
        name: 'Akuntansi',
        desc: 'Deskripsi singkat tentang modul A40: Matematika Keuangan. Deskripsi singkat tentang modul A40 deskripsi singkat tentang modul A40 deskripsi singkat tentang modul A40.',
        videos: []
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
        originalPrice: 'IDR599.000',
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

export const tutors = [
    {
        name: 'Firstname Lastname',
        classes: 'A10, A20, A70',
        achievs: [
            'Mahasiswa Ilmu Aktuaria UGM 2019',
            'Achievement 1',
            'Achievement 2',
            'Achievement 3'
        ],
        img: '/src/assets/tutors/1.png'
    },
    {
        name: 'Firstname Lastname',
        classes: 'A50, A60',
        achievs: [
            'Mahasiswa Ilmu Aktuaria UGM 2019',
            'Achievement 1',
            'Achievement 2',
            'Achievement 3'
        ],
        img: '/src/assets/tutors/2.png'
    },
    {
        name: 'Firstname Lastname',
        classes: 'A10, A20, A70',
        achievs: [
            'Mahasiswa Ilmu Aktuaria UGM 2019',
            'Achievement 1',
            'Achievement 2',
            'Achievement 3'
        ],
        img: '/src/assets/tutors/3.png'
    }
]

export const notifCount = 2;
export const purchaseCount = 3;
