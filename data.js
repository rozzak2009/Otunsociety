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
        src: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=600&auto=format&fit=crop",
        title: "Season 1",
        link: "#"
    },
    {
        src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
        title: "Season 2",
        link: "#"
    }
];

const otunEvents = [
    {
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
        title: "V1 - The Beginning",
        link: "https://www.tiktok.com/@otunsociety/video/7489314020986539272"
    },
    {
        src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop",
        title: "V2 - The Evolution",
        link: "https://www.tiktok.com/@otunsociety/video/7524562430899326264"
    },
    {
        src: "https://images.unsplash.com/photo-1514525253361-bee8718a74a2?q=80&w=600&auto=format&fit=crop",
        title: "V3 - Creative Peak",
        link: "https://www.tiktok.com/@otunsociety/video/7543939656996457734"
    }
];
