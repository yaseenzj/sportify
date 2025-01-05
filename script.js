src="https://cdn.jsdelivr.net/npm/hls.js@latest">

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
          category: 'Ongoing Matches',
          subcategory: match.category || 'Works on PC/Phone'
        }));

        const response2 = await fetch('https://raw.githubusercontent.com/drmlive/sliv-live-events/refs/heads/main/sonyliv.json');
        const data2 = await response2.json();
        const matches2 = data2.matches.map(match => ({
          ...match,
          category: 'Ongoing Matches',
          subcategory: 'Works on Phone'
}));


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
      category: 'Ongoing Matches',
      subcategory: 'Works on PC/Phone',
      match_name: matchName,
      src: thumbnailUrl || `https://gyanibro2024.github.io/Players/?dtv=${dtvUrl}`,
      dai_url: dtvUrl,
    });
  }
}

jiocinemaMatches.push({
  category: 'Ongoing Matches',
  subcategory: 'Works on PC/Phone',
  match_name: "Big Boss Hindi",
  src: "https://v3img.voot.com/resizeMedium,w_1090,h_613/v3Storage/assets/16x9-1728316195515.jpg",
  dai_url: "https://prod-ent-live-gm.jiocinema.com/hls/live/2105436/hd_akamai_iosmob_avc_24x7_bbhindi_s18_day04/master.m3u8",
});


jiocinemaMatches.push({
  category: 'Ongoing Matches',
  subcategory: 'Works on PC/Phone',
  match_name: "Big Boss Kannada",
  src: "https://v3img.voot.com/v3Storage/assets/16x9-1727606765857.jpg",
  dai_url: "https://prod-ent-live-cf.jiocinema.com/hls/live/2106328/hd_akamai_iosmob_avc_eptv_bbkannada_day99/master.m3u8",
});


        const liveChannels = [
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'AstroHD',
    src: 'https://dj7fdt04hl8tv.cloudfront.net/acm/media/njoi/njoi-apps-acmmasthead-_njoi-acmasthead-cricket-656x388.jpg',
    dai_url: 'https://livecrichdofficial.pages.dev/Astro',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Bein Sports 1',
    src: 'https://www.kds.tw/upload/images/logo/logo/6615e67686998_5g00.png',
    dai_url: 'https://livecrichdofficial.pages.dev/cricxfootball?id=abein1', 
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Bein Sports 2',
    src: 'https://dj7fdt04hl8tv.cloudfront.net/acm/media/njoi/beinsports-2_1.jpg', 
    dai_url: 'https://livecrichdofficial.pages.dev/cricxfootball?id=abein2', 
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Bein Sports 3',
    src: 'https://dj7fdt04hl8tv.cloudfront.net/acm/media/njoi/beinsports-3.jpg', 
    dai_url: 'https://livecrichdofficial.pages.dev/cricxfootball?id=abein3', 
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'CBS Sports',
    src: 'https://logowik.com/content/uploads/images/cbs-sports6150.jpg', 
    dai_url: 'https://shz.al/Sffb/livecricplayer.html?dtv=https://play1nm.hnyongshun.cn/live/ballbar_30760.m3u8?bdstreams.bio.link',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Fox Sports 501',
    src: 'https://gotrialpro.com/wp-content/uploads/edd/2024/10/Fox-Sports-Free-Trial.png',
    dai_url: 'https://livecrichdxtv.pages.dev/?id=12',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'JioSports 24/7',
    src: 'https://yt3.googleusercontent.com/doyYQe6EoT1tbXb6iBSd3jGamd06HsoOMpcBZ-oyywMsDRf2ojlS-l1STi4IaRDDHcF5LQo=s900-c-k-c0x00ffffff-no-rj', 
    dai_url: 'https://shz.al/Sffb/livecricplayer.html?dtv=https://prod-ent-live-gm.jiocinema.com/bpk-tv/JV_SportsHD15_DIG_MOB/Fallback/JV_SportsHD15_DIG_MOB-audio_98836_eng=98800-video=2293600.m3u8',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Laliga TV',
    src: 'https://1000logos.net/wp-content/uploads/2023/05/laliga-logo.jpg',
    dai_url: 'https://livecrichdofficial.pages.dev/cricxfootball?id=laligatv',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'NBC Sports',
    src: 'https://cdn6.aptoide.com/imgs/5/5/f/55feaa868842f483fcbd131bafaba6a0_fgraphic.jpg',
    dai_url: 'https://livecrichdofficial.pages.dev/cricxfootball?id=nbc',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Sky Sports Box Office',
    src: 'https://static.skyassets.com/contentstack/assets/blt31e50ba245397204/blt176b39a5e4b3b643/5fd214aea84f233eaf6105ec/download',
    dai_url: 'https://shz.al/Sffb/livecricplayer.html?dtv=https://hastycast.live/hls/griogoehvn2.m3u8?st=Vz1pq-1wPilRS0poU3WNQC2BH3Quf4ZhHCbkGlViiVg&e=1734813124',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Star Sports 1 ENG',
    src: 'https://tnpl.cricket/assets/images/sp-1.png', 
    dai_url: 'https://livecrichdm3u8player.pages.dev/?dtv=https://matrixm3u8.govag55623.workers.dev/https://vkvsd14.okcdn.ru/cmaf/7479532849895/sig/QKq-QpCPyq0/expires/1734833391698/srcIp/13.202.34.144/urls/185.226.52.66/clientType/13/srcAg/CHROME/mid/9171296398311/get/hls_9171296398311.cGxuCiq8K1E.m3u8',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Star Sports 2 ENG',
    src: 'https://images.freekaamaal.com/post_images/1641380069.webp', 
    dai_url: 'https://livecrichdxtv.pages.dev/?id=11',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Sony Sports 2HD (use phone)',
    src: 'https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/afaqs/media/post_attachments/2130343e0d6771c8468d3c25f7558dc87e7a9cbd0e67a00a712ccd71709f2fdf.png',
    dai_url: 'https://dai.google.com/ssai/event/Syu8F41-R1y_JmQ7x0oNxQ/master.m3u8',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Sports 18',
    src: 'https://v3img.voot.com/v3Storage/assets/sports-1650022814422.png',
    dai_url: 'https://livecrichdm3u8player.pages.dev/?dtv=https://jiotvbpklive.cdn.jio.com/bpk-tv/IDCDemo_IPL23_Sports18_MOB/Fallback/index.m3u8',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'SSC Arabic',
    src: 'https://saudipedia.com/en/saudipediaen/uploads/images/2024/11/19/128197.jpg',
    dai_url: 'https://livecrichdofficial.pages.dev/cricxfootball?id=SSC4',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Tnt Sports 1',
    src: 'https://cdn.comedy.co.uk/images/channels/tnt_sports_1.jpg',
    dai_url: 'https://livecrichdofficial.pages.dev/Tnt1',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Tnt Sports 2',
    src: 'https://cdn.comedy.co.uk/images/channels/tnt_sports_2.jpg',
    dai_url: 'https://livecrichdofficial.pages.dev/Tnt2',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Tnt Sports 3',
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilXTAQNlBzLL4p2Efk0pN4eftd3VRPXf3BxYFCaCj34__FKqW-gHbFD-Nk5AUBIZPMiKh2oiXec2F3uuAxnNh4C-SYiNL2be1TuyV9_y1vfs6PEnX5Diji3vthT2kqnyg8AwXQ96hkb0qP9SLT6dpb9vcZcxGVV_W0irEgITGchbiF-RqPVHPy84HQdvo/s311/download.png',
    dai_url: 'https://livecrichdofficial.pages.dev/Tnt3',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Tnt Sports 4',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-KlZkvOp-ZucXKLzRpxhzWa0wdnXRdRYNg5GoosbhtX6A5-lN',
    dai_url: 'https://livecrichdofficial.pages.dev/Tnt4',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Tennis 24/7',
    src: 'https://i0.wp.com/tennisthreads.net/wp-content/uploads/2021/08/tennis-channel-logo-e1629452205432.png',
    dai_url: 'https://shz.al/Sffb/livecricplayer.html?dtv=https://d3qg0hadt0dkov.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-3sfgyrfz9zduo-prod/amgtennisus/playlist.m3u8',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'USA Network ',
    src: 'https://i.pinimg.com/564x/6a/18/67/6a18674907fc30d607e5570e62be133c.jpg',
    dai_url: 'https://livecrichdofficial.pages.dev/cricxfootball?id=usanetwork',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Willow HD',
    src: 'https://static.toiimg.com/thumb/msid-98738864,width-1280,height-720,resizemode-4/98738864.jpg',
    dai_url: 'https://crictos99.pages.dev/willow',
  },
  {
    category: 'Live Sports Channels',
    subcategory: 'Works Worldwide',
    match_name: 'Willow Xtra',
    src: 'data:image/jpeg;base64,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',
    dai_url: 'https://t20wc.pages.dev/willowextra',
  },

];
  

        
        
      
        const allMatches = [,...matches1, ...matches2, ...jiocinemaMatches, ...liveChannels];
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

        const subcategory = match.subcategory || "Works Worldwide";
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

  // allows direct opening for "Live Sports Channels"
  if (match.category === 'Live Sports Channels') {
    playerUrl = match.dai_url;
  } else {
    playerUrl = `https://shz.al/Sffb/livecricplayer.html?dtv=${encodeURIComponent(match.dai_url)}`;
  }

  
  window.open(playerUrl, '_blank');
});
  
          card.addEventListener("click", () => {
            const playerUrl = `https://shz.al/Sffb/livecricplayer.html?dtv=${encodeURIComponent(match.dai_url)}`;
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
