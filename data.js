/**
 * FILE KONFIGURASI DATABASE OTUNSOCIETY
 * 
 * Cara menambah/mengubah anggota TikTok:
 * Cukup copy paste format di bawah ini, lalu isi `link` profil tiktoknya,
 * dan `role` (harus huruf kecil): "owner", "leader", "admin", atau "member".
 */

const tiktokMembers = [
    // --- OWNER ---
    {
        link: "https://www.tiktok.com/@nurefzdv?_r=1&_t=ZS-95WL24nuuQ5",
        role: "owner"
    },

    // --- LEADER ---
    {
        link: "https://www.tiktok.com/@rozzak_mcd?_r=1&_t=ZS-95WLQv8leZF",
        role: "leader"
    },
    {
        link: "https://www.tiktok.com/@aryainaja9?_r=1&_t=ZS-95WNNvl6glN",
        role: "leader"
    },
    {
        link: "https://www.tiktok.com/@zxn9.prst?_r=1&_t=ZS-95WPDjC4JSy",
        role: "leader"
    },

    // --- ADMIN (Akan di-sorting otomatis berdasarkan followers) ---
    {
        link: "https://www.tiktok.com/@dryannwangyy?_r=1&_t=ZS-95WMPBi49h3",
        role: "admin"
    },
    {
        link: "https://www.tiktok.com/@justnepekagain?_r=1&_t=ZS-95WLiXFr4Dt",
        role: "admin"
    },
    {
        link: "https://www.tiktok.com/@ifannyytokisaki?_r=1&_t=ZS-95WMi41LgdE",
        role: "admin"
    },

    // --- MEMBER (Akan di-sorting otomatis berdasarkan followers) ---
    {
        link: "https://www.tiktok.com/@machinegunnovass0",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@ridho_kancut_batman?_r=1&_t=ZS-95WLvnYOXll",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@gak__asik",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@capturne",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@presetdanang?_r=1&_t=ZS-95WN5j04B3X",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@verrajhhh",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@ramztyty?_r=1&_t=ZS-95WPRHlAjuH",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@fenrizedity",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@presetjoy411?is_from_webapp=1&sender_device=pc",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@loxyeetralalelo",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@danmekdi",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@fyvzhensem",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@zayssangatmalas",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@iann.not.sepuh?_r=1&_t=ZS-95Wtlbq5Nj7",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@puputdisini.1?_r=1&_t=ZS-95WwZr9E9FE",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@facry00?_r=1&_t=ZS-95X4mcVVTxV",
        role: "member"
    },
    {
        link: "https://www.tiktok.com/@manzypreset",
        role: "member"
    }
];

const talentedMembers = [
    {
        name: "Skyla Music",
        talent: "Music Producer",
        link: "https://open.spotify.com/artist/example",
        icon: "ri-music-2-fill",
        image: "https://images.unsplash.com/photo-1514525253361-bee8718a74a2?q=80&w=300&auto=format&fit=crop",
        ctaText: "Listen Now"
    },
    {
        name: "DevX Studio",
        talent: "App Developer",
        link: "https://play.google.com/store/apps/details?id=example",
        icon: "ri-apps-2-fill",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop",
        ctaText: "Download Apk"
    },
    {
        name: "ArtVortex",
        talent: "3D Artist",
        link: "https://www.artstation.com/example",
        icon: "ri-dv-fill",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=300&auto=format&fit=crop",
        ctaText: "View Portfolio"
    },
    {
        name: "Rizky Alfariz",
        talent: "Music Producer",
        link: "https://soundcloud.com/rizky-alfariz-879845258",
        icon: "ri-soundcloud-fill",
        image: "https://i1.sndcdn.com/avatars-cqQxPPBT4wtW5CuK-mqKDxg-t1080x1080.jpg",
        ctaText: "Listen on SoundCloud"
    }
];

const otunSeasons = [
    {
        src: "https://picsum.photos/seed/s1/600/400",
        title: "Season 1",
        link: "#"
    },
    {
        src: "https://picsum.photos/seed/s2/600/400",
        title: "Season 2",
        link: "#"
    }
];

const otunEvents = [
    {
        src: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/oUAE6DF75EDEvvAANfAgfwEwnvI8RY6BUA22YC~tplv-tiktokx-origin.image?dr=14575&x-expires=1776348000&x-signature=IeqVcsZtj%2FDMuEePcahp4C1OVdI%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        title: "V1 - The Beginning",
        link: "https://www.tiktok.com/@otunsociety/video/7489314020986539272"
    },
    {
        src: "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/ooBBGBAARYiAYI5KE7QcrAsLasEvvUdaynii3~tplv-tiktokx-origin.image?dr=14575&x-expires=1776348000&x-signature=tFvNMb1EUyi5ZRV7I2qqgMxTqd4%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        title: "V2 - The Evolution",
        link: "https://www.tiktok.com/@otunsociety/video/7524562430899326264"
    },
    {
        src: "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/okEbPLEBAxSCuB5UZaXIFsQEg2AKA1YiAOdii~tplv-tiktokx-origin.image?dr=14575&x-expires=1776348000&x-signature=IN8GbhfuKNo%2Bsf3w0%2FuDm4wjTD0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        title: "V3 - Creative Peak",
        link: "https://www.tiktok.com/@otunsociety/video/7543939656996457734"
    },
    {
        src: "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/o0TJfAU5ekAJgEQiFfFfFIAYF4JAC6IoGADpRS~tplv-tiktokx-origin.image?dr=14575&x-expires=1776348000&x-signature=FvqYDnBK1Mv11KXhhktvbxy1RlU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        title: "V4 - Cinematic Journey",
        link: "https://www.tiktok.com/@otunsociety/video/7547998393189043512"
    },
    {
        src: "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/os1GLEs1FIrAzHJYIAAkIeeNSU2fRQAO4CMjgW~tplv-tiktokx-origin.image?dr=14575&x-expires=1776348000&x-signature=amX1Cu34RDpNaiwsn5CncUI%2BgRA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        title: "V5 - Artistic Vision",
        link: "https://www.tiktok.com/@otunsociety/video/7560462444259314964"
    },
    {
        src: "https://p19-common-sign.tiktokcdn.com/tos-alisg-p-0037/okAfTFdJA0OR0DfXIVNBNRAWA6EELpyUgACtEA~tplv-tiktokx-origin.image?dr=14575&x-expires=1776348000&x-signature=fZvOEjXnlGcEJyLCsLzN1pmRuqo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        title: "V6 - Visual Harmony",
        link: "https://www.tiktok.com/@otunsociety/video/7578772681596636423"
    },
    {
        src: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/oYjlEOB0AwAIcBIiAizLfAVAGbrBoi1JyOcRWC~tplv-tiktokx-origin.image?dr=14575&x-expires=1776348000&x-signature=I%2FQiH0VnBljZCjieIDW5jZX6mlA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        title: "V7 - Emotional Depth",
        link: "https://www.tiktok.com/@otunsociety/video/7585824590530628885"
    },
    {
        src: "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oEQWhog83HgzAeMPJA8MXfAQAXQsfAIzGkfliJ~tplv-tiktokx-origin.image?dr=14575&x-expires=1776348000&x-signature=oyY4EqCQVWk%2FrNSoiYmSzouILPY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        title: "V8 - Masterful Craft",
        link: "https://www.tiktok.com/@otunsociety/video/7601833150280437000"
    },
    {
        src: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/og0ESeaGbAnrGLAIAafIATFS0DDLEWbfTcabAC~tplv-tiktokx-origin.image?dr=14575&x-expires=1776348000&x-signature=uFm08Y9XH4%2Fd%2F%2Brt3Ep%2FMoSgsKo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        title: "V9 - Technical Brilliance",
        link: "https://www.tiktok.com/@otunsociety/video/7603997686697659668"
    },
    {
        src: "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oAzDgKGHLezXg5BCvjSaAC4I1eoQQ4CeAT8NQI~tplv-tiktokx-origin.image?dr=14575&x-expires=1776348000&x-signature=BHyb3B1cmAdhv2ushJIloqa5UBU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        title: "V10 - Boundary Breaker",
        link: "https://www.tiktok.com/@otunsociety/video/7620623340650106133"
    },
    {
        src: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/oYwXBWI7iiDAFiYWBP7BTYLdI9iBKr41AaAvE~tplv-tiktokx-origin.image?dr=14575&x-expires=1776348000&x-signature=1AyN9u%2BESIqX7gm7LvkF7ZAhSOA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        title: "V11 - The Ultimate Chapter",
        link: "https://www.tiktok.com/@otunsociety/video/7626289684225871124"
    }
];
