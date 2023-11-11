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
        desc: 'Deskripsi singkat tentang modul A10: Matematika Keuangan. Deskripsi singkat tentang modul A10 deskripsi singkat tentang modul A10 deskripsi singkat tentang modul A10.'
    },
    'A20': {
        name: 'Probabilita dan Statistika',
        desc: 'Deskripsi singkat tentang modul A20: Matematika Keuangan. Deskripsi singkat tentang modul A20 deskripsi singkat tentang modul A20 deskripsi singkat tentang modul A20.'
    },
    'A40': {
        name: 'Akuntansi',
        desc: 'Deskripsi singkat tentang modul A40: Matematika Keuangan. Deskripsi singkat tentang modul A40 deskripsi singkat tentang modul A40 deskripsi singkat tentang modul A40.'
    }
}

export const privateTutorPackages = [
    {
        name: 'Paket Reguler',
        price: 'IDR180,000',
        tags: ['1 peserta', '1 pertemuan'],
        facilities: [
            'Zoom meeting dengan durasi 2 jam',
            'Video rekaman dan materi dari tutor',
            'Bebas memilih materi yang akan dipelajari'
        ]
    },
    {
        name: 'Paket Eksklusif',
        price: 'IDR800,000',
        tags: ['1 kelas', '1 pertemuan'],
        facilities: [
            'Zoom meeting dengan durasi 2 jam',
            'Video rekaman dan materi dari tutor',
            'Bebas memilih materi yang akan dipelajari'
        ]
    }
]

export const academyPackages = [
    {
        name: 'Paket Lengkap',
        price: 'IDR699.000',
        facilities: [
            'Diskusi grup, Q & A',
            'Video materi',
            'Video pembahasan soal ujian PAI',
            'Kuis & try out',
            'Kelas online sinkronus dengan tutor (125k / pertemuan @ 1 jam)'
        ]
    },
    {
        name: 'Paket Pembahasan Soal',
        price: 'IDR299.000',
        facilities: [
            'Diskusi grup, Q & A',
            'Video pembahasan soal ujian PAI',
            'Kuis & try out',
            'Kelas online sinkronus dengan tutor (125k / pertemuan @ 1 jam)'
        ]
    }
]

export const companyTrainingPackages = [
    {
        name: 'Paket Privat + Akademi Lengkap',
        price: 'IDR17,000,000',
        tags: ['1 mata ujian', '10 pertemuan'],
        facilities: [
            'Zoom meeting dengan durasi 2 jam',
            'Video rekaman dan materi dari tutor',
            'Video pembelajaran akademi',
            'Akses akademi 6 bulan',
            'Try out + pembahasan (1-2 kali)',
            'Request materi / sesuai timeline tutor',
            'Tidak ada maksimal jumlah peserta'
        ]
    },
    {
        name: 'Paket Privat + Akademi',
        price: 'IDR15,000,000',
        tags: ['1 mata ujian', '10 pertemuan'],
        facilities: [
            'Zoom meeting dengan durasi 2 jam',
            'Video rekaman dan materi dari tutor',
            'Video pembelajaran akademi',
            'Akses akademi 6 bulan',
            'Bebas memilih materi yang dipelajari',
            'Tidak ada maksimal jumlah peserta'
        ]
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
            'Achievement 3',
            '...',
        ],
        img: 'src/assets/tutors/1.png'
    }
]

export const notifCount = 2;
export const purchaseCount = 3;
