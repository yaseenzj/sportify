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
      // Add your live channel data here...
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
  // Your function code here
}

function setHeaderBackground(matches) {
  // Your function code here
}
