document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. SCROLL & NAVBAR ANIMATIONS
       ========================================= */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const observeFadeElements = () => {
        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    };

    /* =========================================
       2. THEME & HERO SLIDER LOGIC
       ========================================= */
       
    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    const rootEl = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    if (currentTheme === 'light') {
        rootEl.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '<i class="ri-sun-fill"></i>';
    }

    themeBtn.addEventListener('click', () => {
        let theme = rootEl.getAttribute('data-theme');
        if (theme === 'light') {
            rootEl.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            themeBtn.innerHTML = '<i class="ri-moon-fill"></i>';
        } else {
            rootEl.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeBtn.innerHTML = '<i class="ri-sun-fill"></i>';
        }
    });

    // Hero Slider
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 10000); // 10 seconds crossfade
    }

    /* =========================================
       3. HELPER FUNCTIONS
       ========================================= */
    
    const parseNumber = (str) => {
        if (!str) return 0;
        let numStr = str.toString().toUpperCase().replace(/,/g, '');
        let multi = 1;
        if (numStr.includes('M')) { multi = 1000000; numStr = numStr.replace('M', ''); }
        else if (numStr.includes('K')) { multi = 1000; numStr = numStr.replace('K', ''); }
        return parseFloat(numStr) * multi;
    };

    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        return num;
    };

    // Extract @username from TikTok URL or directly given username
    const getUsernameFromLink = (url) => {
        try {
            // Strip out query params first
            let cleanUrl = url.split('?')[0];
            if (cleanUrl.endsWith('/')) cleanUrl = cleanUrl.slice(0, -1);

            // If it contains @, extract the part after it
            if (cleanUrl.includes('@')) {
                return cleanUrl.split('@')[1].replace(/\//g, '');
            } 
            
            // Handle mobile/short links (vm.tiktok.com)
            if (cleanUrl.includes('vm.tiktok.com')) {
                return "TikTokUser";
            }

            // Try to get the last segment if it's not a domain
            const parts = cleanUrl.split('/');
            const lastPart = parts[parts.length - 1];
            if (lastPart && !lastPart.includes('http') && !lastPart.includes('tiktok') && !lastPart.includes('.')) {
                return lastPart;
            }

            return "Member";
        } catch(e) {
            return "unknown";
        }
    };

    /* =========================================
       4. PREPARE & ENRICH TIKTOK MEMBERS DATA
       ========================================= */
       
    // Pre-process raw link inputs into workable objects
    const enrichedMembers = tiktokMembers.map(item => {
        const username = getUsernameFromLink(item.link);
        
        // Defaults if localStorage is totally empty
        let currentLikes = "0", currentFollowers = "0", currentPosts = "0";
        let currentAvatar = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=150&q=80"; // Default abstract user

        // Merge with LocalStorage (Saved) Data if exists
        const savedStr = localStorage.getItem('tiktok_' + username);
        if (savedStr) {
            try {
                const savedData = JSON.parse(savedStr);
                currentLikes = savedData.likes;
                currentFollowers = savedData.followers;
                currentPosts = savedData.posts;
                if(savedData.avatar) currentAvatar = savedData.avatar;
            } catch(e) { console.error(e); }
        }
        
        return {
            link: item.link,
            role: item.role,
            username: username,
            currentLikes: currentLikes,
            currentFollowers: currentFollowers,
            currentPosts: currentPosts,
            currentAvatar: currentAvatar,
            rawFollowers: parseNumber(currentFollowers)
        };
    });

    // Filtering and Auto-sorting
    const owners = enrichedMembers.filter(m => m.role === 'owner');
    const leaders = enrichedMembers.filter(m => m.role === 'leader');
    const admins = enrichedMembers.filter(m => m.role === 'admin')
                                 .sort((a, b) => b.rawFollowers - a.rawFollowers);
    const membersList = enrichedMembers.filter(m => m.role === 'member')
                                 .sort((a, b) => b.rawFollowers - a.rawFollowers);

    /* =========================================
       5. GENERATE HTML CARDS
       ========================================= */
       
    const generateCardHTML = (member, isHorizontal = false, index = null) => {
        const horizontalClass = isHorizontal ? 'horizontal-card' : '';
        const profileUrl = member.username === "TikTokUser" || member.username === "Member" 
            ? member.link 
            : `https://www.tiktok.com/@${member.username}`;
        
        const numberTag = index !== null ? `<div class="card-number">${index}</div>` : '';
        
        return `
            <a href="${profileUrl}" target="_blank" class="tiktok-card glass-panel ${horizontalClass}" id="card-${member.username}">
                ${numberTag}
                <div class="card-header">
                    <div class="profile-pic">
                        <img src="${member.currentAvatar}" class="avatar-img" alt="${member.username}">
                    </div>
                    <div class="profile-info">
                        <h4>@${member.username}</h4>
                        <span class="badge badge-${member.role}">${member.role}</span>
                    </div>
                    <div class="tiktok-link"><i class="ri-tiktok-fill"></i></div>
                </div>
                <div class="card-stats">
                    <div class="stat">
                        <span class="stat-value val-likes">${member.currentLikes}</span>
                        <span class="stat-label">Likes</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value val-followers">${member.currentFollowers}</span>
                        <span class="stat-label">Followers</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value val-posts">${member.currentPosts}</span>
                        <span class="stat-label">Posts</span>
                    </div>
                </div>
            </a>
        `;
    };

    // Inject into DOM
    const elOwner = document.getElementById('container-owner');
    if(elOwner) elOwner.innerHTML = owners.map(m => generateCardHTML(m)).join('');
    
    const elLeader = document.getElementById('container-leader');
    if(elLeader) elLeader.innerHTML = leaders.map(m => generateCardHTML(m)).join('');
    
    const elAdmin = document.getElementById('container-admin');
    if(elAdmin) elAdmin.innerHTML = admins.map(m => generateCardHTML(m)).join('');
    
    // Check if member container exists (safeguard for compatibility)
    const memberContainer = document.getElementById('container-member');
    if(memberContainer) {
        memberContainer.innerHTML = membersList.map((m, idx) => generateCardHTML(m, true, idx + 1)).join('');
    }

    /* =========================================
       6. RENDER GALLERY
       ========================================= */
       
    if (typeof galleryMasterpieces !== 'undefined') {
        const galleryHTML = galleryMasterpieces.map((item, index) => {
            const tallClass = item.isTall ? 'grid-item-tall' : '';
            const isVideo = item.src.match(/\.(mp4|webm|ogg)$/i);
            
            const mediaTag = isVideo 
                ? `<video src="${item.src}" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover; pointer-events:none;"></video>`
                : `<img src="${item.src}" alt="${item.title}">`;

            return `
                <div class="grid-item ${tallClass}">
                    ${mediaTag}
                    <div class="item-overlay">
                        <i class="ri-${isVideo ? 'movie-fill' : 'image-edit-line'}"></i>
                        <span>${item.title}</span>
                    </div>
                </div>
            `;
        }).join('');
        document.getElementById('gallery-container').innerHTML = galleryHTML;
    }

    /* =========================================
       7. RENDER SEASONS & EVENTS (NETFLIX SLIDER)
       ========================================= */
       
    const renderNetflixSlider = (containerId, dataArray, prefixIfEmpty, countIfEmpty) => {
        let finalData = dataArray;
        
        // Buatkan kotak bayangan jika pengguna belum sinkronisasi file aslinya
        if (!finalData || finalData.length === 0) {
            finalData = [];
            for (let i = 1; i <= countIfEmpty; i++) {
                finalData.push({
                    src: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=300&auto=format&fit=crop", 
                    title: `${prefixIfEmpty}${i}`
                });
            }
        }
        
        const sliderHTML = finalData.map(item => {
            const isVideo = item.src.match(/\.(mp4|webm|ogg)$/i);
            const mediaTag = isVideo 
                ? `<video src="${item.src}" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover; pointer-events:none;"></video>`
                : `<img src="${item.src}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover;">`;

            const itemLink = item.link || '#';
            const externalAttr = itemLink.startsWith('http') ? 'target="_blank"' : '';

            return `
                <a href="${itemLink}" ${externalAttr} class="slider-item">
                    ${mediaTag}
                    <div class="slider-overlay">
                        <span class="slider-title">${item.title}</span>
                    </div>
                </a>
            `;
        }).join('');
        
        const container = document.getElementById(containerId);
        if(container) container.innerHTML = sliderHTML;
    };

    if (typeof otunSeasons !== 'undefined') renderNetflixSlider('slider-seasons', otunSeasons, 'Season ', 3);
    else renderNetflixSlider('slider-seasons', null, 'Season ', 3);
    
    // Sesuai permintaan: V1 - V11
    if (typeof otunEvents !== 'undefined') renderNetflixSlider('slider-events', otunEvents, 'V', 11);
    else renderNetflixSlider('slider-events', null, 'V', 11);

    /* =========================================
       7.5 RENDER TALENTS
       ========================================= */
       
    const renderTalents = () => {
        const container = document.getElementById('talents-container');
        if (!container || typeof talentedMembers === 'undefined') return;

        container.innerHTML = talentedMembers.map(item => `
            <div class="talent-card fade-up">
                <div class="talent-image-wrapper">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="talent-icon-badge">
                        <i class="${item.icon}"></i>
                    </div>
                </div>
                <div class="talent-info">
                    <h3>${item.name}</h3>
                    <p>${item.talent}</p>
                    <a href="${item.link}" target="_blank" class="talent-cta">
                        ${item.ctaText} <i class="ri-arrow-right-up-line"></i>
                    </a>
                </div>
            </div>
        `).join('');
    };

    renderTalents();

    observeFadeElements();

    /* =========================================
       8. REAL-TIME STATS FETCHING (PROXY)
       ========================================= */
       
    const fetchRealtimeStats = async () => {
        for (const item of tiktokMembers) {
            const username = getUsernameFromLink(item.link);
            if(username === "unknown") continue;

            try {
                const url = `https://www.tikwm.com/api/user/info?unique_id=${username}`;
                const response = await fetch(url);
                const data = await response.json();

                if (data && data.code === 0 && data.data) {
                    const user = data.data.user;
                    const stats = data.data.stats;

                    const realtimeLikes = formatNumber(stats.heartCount);
                    const realtimeFollowers = formatNumber(stats.followerCount);
                    const realtimePosts = formatNumber(stats.videoCount);
                    // Gunakan foto profil tiktok jika ada, kalau tidak, abaikan
                    const realtimeAvatar = user.avatarMedium || null;

                    const savedCache = {
                        likes: realtimeLikes,
                        followers: realtimeFollowers,
                        posts: realtimePosts
                    };
                    if(realtimeAvatar) savedCache.avatar = realtimeAvatar;

                    // Update LocalStorage for next time
                    localStorage.setItem('tiktok_' + username, JSON.stringify(savedCache));

                    // Update UI Directly
                    const card = document.getElementById('card-' + username);
                    if(card) {
                        card.querySelector('.val-likes').textContent = realtimeLikes;
                        card.querySelector('.val-followers').textContent = realtimeFollowers;
                        card.querySelector('.val-posts').textContent = realtimePosts;
                        if(realtimeAvatar) card.querySelector('.avatar-img').src = realtimeAvatar;
                    }
                    
                    // Re-sort mechanism conceptually handled on refresh to avoid layout jumping
                }
            } catch(e) {
                console.log("Error fetching API or Rate limited for " + username);
            }
        }
    };

    fetchRealtimeStats();

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
