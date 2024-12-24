<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

    document.getElementById("login-form").addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "yaseen" && password === "yaseen") {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        fetchMatchData();
      } else {
        document.getElementById("error-message").style.display = "block";
      }

    });

    const matchCategories = document.getElementById("match-categories");
    const header = document.getElementById("header");

    async function fetchMatchData() {
      try {
        const response1 = await fetch('https://raw.githubusercontent.com/drmlive/fancode-live-events/refs/heads/main/fancode.json');
        const data1 = await response1.json();
        const matches1 = data1.matches.map(match => ({
          ...match,
          category: 'FanCode',
          subcategory: match.category || 'General'
        }));

        const response2 = await fetch('https://raw.githubusercontent.com/drmlive/sliv-live-events/refs/heads/main/sonyliv.json');
        const data2 = await response2.json();
        const matches2 = data2.matches.map(match => ({
          ...match,
          category: 'SonyLIV'
        }));

        const liveChannels = [
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'AstroHD',
            src: 'https://dj7fdt04hl8tv.cloudfront.net/acm/media/njoi/njoi-apps-acmmasthead-_njoi-acmasthead-cricket-656x388.jpg',
            dai_url: 'https://shz.al/6sjG.html',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Bein Sports 1',
            src: 'https://www.kds.tw/upload/images/logo/logo/6615e67686998_5g00.png',
            dai_url: 'https://livecrichdofficial.pages.dev/cricxfootball?id=abein1', 
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Bein Sports 2',
            src: 'https://dj7fdt04hl8tv.cloudfront.net/acm/media/njoi/beinsports-2_1.jpg', 
            dai_url: 'https://livecrichdofficial.pages.dev/cricxfootball?id=abein2', 
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Bein Sports 3',
            src: 'https://dj7fdt04hl8tv.cloudfront.net/acm/media/njoi/beinsports-3.jpg', 
            dai_url: 'https://livecrichdofficial.pages.dev/cricxfootball?id=abein3', 
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'CBS Sports',
            src: 'https://logowik.com/content/uploads/images/cbs-sports6150.jpg', 
            dai_url: 'https://shz.al/Sffb/livecricplayer.html?dtv=https://play1nm.hnyongshun.cn/live/ballbar_30760.m3u8?bdstreams.bio.link',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Sky Sports Box Office',
            src: 'https://static.skyassets.com/contentstack/assets/blt31e50ba245397204/blt176b39a5e4b3b643/5fd214aea84f233eaf6105ec/download',
            dai_url: 'https://shz.al/Sffb/livecricplayer.html?dtv=https://hastycast.live/hls/griogoehvn2.m3u8?st=Vz1pq-1wPilRS0poU3WNQC2BH3Quf4ZhHCbkGlViiVg&e=1734813124',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Fox Sports 501 (use phone)',
            src: 'https://gotrialpro.com/wp-content/uploads/edd/2024/10/Fox-Sports-Free-Trial.png',
            dai_url: 'https://m118753.protect-cdn.net/live/m1-index.m3u8',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Laliga Football',
            src: 'https://images.seeklogo.com/logo-png/48/1/la-liga-logo-png_seeklogo-480414.png?v=1958566091862699680',
            dai_url: 'https://livecrichdofficial.pages.dev/cricxfootball?id=laligatv',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'NBC Sports',
            src: 'https://cdn6.aptoide.com/imgs/5/5/f/55feaa868842f483fcbd131bafaba6a0_fgraphic.jpg',
            dai_url: 'https://livecrichdofficial.pages.dev/cricxfootball?id=nbc',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Star Sports 1 ENG',
            src: 'https://exchange4media.gumlet.io/news-photo/93752-StarSports1Kannada.jpg?w=900&dpr=2.6', 
            dai_url: 'https://livecrichdm3u8player.pages.dev/?dtv=https://matrixm3u8.govag55623.workers.dev/https://vkvsd14.okcdn.ru/cmaf/7479532849895/sig/QKq-QpCPyq0/expires/1734833391698/srcIp/13.202.34.144/urls/185.226.52.66/clientType/13/srcAg/CHROME/mid/9171296398311/get/hls_9171296398311.cGxuCiq8K1E.m3u8',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Sony Sports 2HD (use phone)',
            src: 'https://bdixtv24.com/uploads/tv_image/sony-ten-2-hd.jpg',
            dai_url: 'https://dai.google.com/ssai/event/Syu8F41-R1y_JmQ7x0oNxQ/master.m3u8',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Sports 18',
            src: 'https://v3img.voot.com/v3Storage/assets/sports-1650022814422.png',
            dai_url: 'https://livecrichdm3u8player.pages.dev/?dtv=https://jiotvbpklive.cdn.jio.com/bpk-tv/IDCDemo_IPL23_Sports18_MOB/Fallback/index.m3u8',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Tnt Sports 1',
            src: 'https://cdn.comedy.co.uk/images/channels/tnt_sports_1.jpg',
            dai_url: 'https://livecrichdofficial.pages.dev/Tnt1',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Tnt Sports 2',
            src: 'https://cdn.comedy.co.uk/images/channels/tnt_sports_2.jpg',
            dai_url: 'https://livecrichdofficial.pages.dev/Tnt2',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Tnt Sports 3',
            src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilXTAQNlBzLL4p2Efk0pN4eftd3VRPXf3BxYFCaCj34__FKqW-gHbFD-Nk5AUBIZPMiKh2oiXec2F3uuAxnNh4C-SYiNL2be1TuyV9_y1vfs6PEnX5Diji3vthT2kqnyg8AwXQ96hkb0qP9SLT6dpb9vcZcxGVV_W0irEgITGchbiF-RqPVHPy84HQdvo/s311/download.png',
            dai_url: 'https://livecrichdofficial.pages.dev/Tnt3',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Tennis 24/7',
            src: 'https://i0.wp.com/tennisthreads.net/wp-content/uploads/2021/08/tennis-channel-logo-e1629452205432.png',
            dai_url: 'https://shz.al/Sffb/livecricplayer.html?dtv=https://d3qg0hadt0dkov.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-3sfgyrfz9zduo-prod/amgtennisus/playlist.m3u8',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'USA network Football',
            src: 'https://i.pinimg.com/564x/6a/18/67/6a18674907fc30d607e5570e62be133c.jpg',
            dai_url: 'https://livecrichdofficial.pages.dev/cricxfootball?id=usanetwork',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Willow HD',
            src: 'https://static.toiimg.com/thumb/msid-98738864,width-1280,height-720,resizemode-4/98738864.jpg',
            dai_url: 'https://crictos99.pages.dev/willow',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'Willow Xtra (VPN)',
            src: 'https://bdixtv24.com/uploads/tv_image/willowextra.png',
            dai_url: 'https://livecrichdofficial.pages.dev/Xtra',
          },
          {
            category: 'Live Sports Channels',
            subcategory: 'General',
            match_name: 'WWE',
            src: 'https://i.pinimg.com/736x/6c/97/79/6c9779422ba862490503f6fe3cab5723.jpg',
            dai_url: 'https://shz.al/Sffb/livecricplayer.html?dtv=https://sparkforge.store/live/random/chunks.m3u8?bongls.com',
          },
        ];

        const response3 = await fetch('https://raw.githubusercontent.com/GyanibroCricketChannel/Jiocinema/refs/heads/main/index.html');
        const data3 = await response3.text();
        const regex = /src="(https:\/\/gyanibro2024\.github\.io\/Players\/\?dtv=https:\/\/[^\"]+)"/g;
        const jiocinemaMatches = [];
        let match;

        while ((match = regex.exec(data3)) !== null) {
          const dtvUrl = match[1].split('?dtv=')[1];

          if (dtvUrl && dtvUrl.includes(".m3u8")) {
            const matchName = "Pak vs SA"; 
            let thumbnailUrl = "";

            if (matchName === "Pak vs SA") {
              thumbnailUrl = "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/2nd_odi_sa_vs_pak_live_clean_ctv-1734587785278.jpg";
            }

            jiocinemaMatches.push({
              category: 'JioCinema',
              subcategory: 'General',
              match_name: matchName,
              src: thumbnailUrl || `https://gyanibro2024.github.io/Players/?dtv=${dtvUrl}`,
              dai_url: dtvUrl,
            });
          }
        }

        jiocinemaMatches.push({
          category: 'JioCinema',
          subcategory: 'General',
          match_name: "Big Boss",
          src: "https://v3img.voot.com/v3Storage/assets/16x9-1728316195515.jpg",
          dai_url: "https://prod-ent-live-cf.jiocinema.com/hls/live/2101885/uhd_akamai_atv_avc_eptv_bbhindi_s18_day77/master.m3u8",
        });

        const allMatches = [...liveChannels, ...matches1, ...matches2, ...jiocinemaMatches];
        displayCategories(allMatches);
        setHeaderBackground(allMatches);
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    }

    function displayCategories(matches) {
      const categories = {};
      matches.forEach(match => {

        if (!match.src || !match.dai_url) {
          return; 
        }

        const category = match.category || "Other";
        if (!categories[category]) categories[category] = {};

        const subcategory = match.subcategory || "General";
        if (!categories[category][subcategory]) categories[category][subcategory] = [];

        categories[category][subcategory].push(match);
      });

      matchCategories.innerHTML = "";
      Object.entries(categories).forEach(([category, subcategories]) => {
        createCategorySection(category, subcategories);
      });
    }

    function createCategorySection(category, subcategories) {
      const section = document.createElement("div");
      section.classList.add("category-section");
      section.innerHTML = `<h2>${category}</h2>`;

      Object.entries(subcategories).forEach(([subcategory, matches]) => {
        const subcategoryDiv = document.createElement("div");
        subcategoryDiv.classList.add("subcategory");
        subcategoryDiv.innerHTML = `<h3>${subcategory}</h3>`;

        const wrapper = document.createElement("div");
        wrapper.classList.add("matches-list-wrapper");

        matches.forEach(match => {
          const card = document.createElement("div");
          card.classList.add("match");
          card.innerHTML = `
            <img src="${match.src}" alt="${match.match_name}">
            <div class="match-overlay">
              <p>${match.match_name}</p>
            </div>`;

          card.addEventListener("click", () => {
            let playerUrl;

            if (match.category === 'Live Sports Channels') {
              playerUrl = match.dai_url;
            } else {
              playerUrl = `https://shz.al/Sffb/livecricplayer.html?dtv=${encodeURIComponent(match.dai_url)}`;
            }

            window.open(playerUrl, '_blank');
          });

          wrapper.appendChild(card);
        });

        subcategoryDiv.appendChild(wrapper);
        section.appendChild(subcategoryDiv);
      });

      matchCategories.appendChild(section);
    }

    function setHeaderBackground(matches) {
      const randomMatch = matches[Math.floor(Math.random() * matches.length)];
      header.style.backgroundImage = `url('${randomMatch.src}')`;
    }

