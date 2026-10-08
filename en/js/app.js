"use strict";

/* ---------------------------------------------------------------
   Chapter data (English narration, all 12 chapters)
--------------------------------------------------------------- */
const CHAPTERS = [
  {
    id: 1,
    title: "A Family in the Cold Hut",
    teaser: "Moshe's poor family faces yet another hard night - and Moshe decides tomorrow, everything is going to change.",
    audio: "../assets/audio/en/ch1-sfx.mp3",
    images: [
      { src: "../assets/images/ch1.jpg", alt: "Illustration: Moshe sits with his children in a poor, cold hut, a candle burning on the table" },
    ],
  },
  {
    id: 2,
    title: "A Day at the Market",
    teaser: "Moshe searches for work in the bustling market, and suddenly overhears a strange rumor that will change his life.",
    audio: "../assets/audio/en/ch2-sfx.mp3",
    images: [
      { src: "../assets/images/ch2.jpg", alt: "Illustration: Moshe looks for work in the market near a vegetable stall" },
      { src: "../assets/images/ch2b.jpg", alt: "Illustration: Moshe overhears two men whispering about Diamond Island" },
    ],
  },
  {
    id: 3,
    title: "The Rumor About Diamond Island",
    teaser: "A faraway island, made entirely of diamonds? Only one ship sails there - and it leaves tomorrow.",
    audio: "../assets/audio/en/ch3-sfx.mp3",
    images: [
      { src: "../assets/images/ch3.jpg", alt: "Illustration: A magical island with diamond trees floating above a village hut, in Moshe's imagination" },
    ],
  },
  {
    id: 4,
    title: "The Road to the Harbor",
    teaser: "Moshe says a heavy goodbye to his family, and sets off on the greatest adventure of his life.",
    audio: "../assets/audio/en/ch4-sfx.mp3",
    images: [
      { src: "../assets/images/ch4.jpg", alt: "Illustration: Moshe hugs his children sadly before setting off" },
      { src: "../assets/images/ch4b.jpg", alt: "Illustration: Moshe shakes hands with the ship's captain on deck" },
    ],
  },
  {
    id: 5,
    title: "The Long Voyage",
    teaser: "Two months at sea, waves, seasickness - and huge anticipation for the moment he'll finally see the island.",
    audio: "../assets/audio/en/ch5-sfx.mp3",
    images: [
      { src: "../assets/images/ch5.jpg", alt: "Illustration: Moshe climbs a rope ladder to the top of the mast, a rainbow in the background" },
    ],
  },
  {
    id: 6,
    title: "Diamond Beach",
    teaser: "The beach sparkles with thousands of real diamonds! But Moshe is about to discover he's completely alone on the island.",
    audio: "../assets/audio/en/ch6-sfx.mp3",
    images: [
      { src: "../assets/images/ch6.jpg", alt: "Illustration: Moshe stands amazed before a huge beach covered in sparkling diamonds" },
    ],
  },
  {
    id: 7,
    title: "Into the Jungle",
    teaser: "Beyond the tangled jungle waits a big surprise: a whole village, with a street paved in diamonds.",
    audio: "../assets/audio/en/ch7-sfx.mp3",
    images: [
      { src: "../assets/images/ch7.jpg", alt: "Illustration: Beyond a tangled jungle, a whole village appears, with a street paved in diamonds" },
    ],
  },
  {
    id: 8,
    title: "The Gefilte Fish Restaurant",
    teaser: "Moshe discovers something very strange: on this island, diamonds are worth nothing at all.",
    audio: "../assets/audio/en/ch8-sfx.mp3",
    images: [
      { src: "../assets/images/ch8.jpg", alt: "Illustration: The gefilte fish restaurant owner laughs when Moshe offers a diamond as payment" },
    ],
  },
  {
    id: 9,
    title: "When the Kitchen Becomes a Stage",
    teaser: "Ordinary dishwashing suddenly turns into a show everyone stops to watch.",
    audio: "../assets/audio/en/ch9-sfx.mp3",
    images: [
      { src: "../assets/images/ch9.jpg", alt: "Illustration: Moshe washes dishes with hypnotic movements as a crowd gathers to watch" },
    ],
  },
  {
    id: 10,
    title: "When Dishwashing Becomes a Hit Show",
    teaser: "A famous promoter offers Moshe a deal that will change everything.",
    audio: "../assets/audio/en/ch10-sfx.mp3",
    images: [
      { src: "../assets/images/ch10.jpg", alt: "Illustration: Moshe shakes hands with Bruno the promoter, as the crowd applauds" },
    ],
  },
  {
    id: 11,
    title: "Six Months of Success, and One Moment of Longing",
    teaser: "Moshe becomes the island's biggest star, but his heart is pulled home, to the one he loves most.",
    audio: "../assets/audio/en/ch11-sfx.mp3",
    images: [
      { src: "../assets/images/ch11.jpg", alt: "Illustration: Moshe performs on stage in a packed theater, juggling plates before an excited crowd" },
    ],
  },
  {
    id: 12,
    title: "Farewell to the Island",
    teaser: "Moshe finally returns home. But did he bring back the thing that truly matters most?",
    audio: "../assets/audio/en/ch12-sfx.mp3",
    images: [
      { src: "../assets/images/ch12.jpg", alt: "Illustration: Moshe waves goodbye to the islanders and boards the ship home" },
      { src: "../assets/images/ch12b.jpg", alt: "Illustration: Moshe takes small diamonds from his pocket next to barrels of goose fat" },
    ],
  },
];

/* ---------------------------------------------------------------
   Utilities
--------------------------------------------------------------- */
function formatTime(sec) {
  if (!isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function safeStorage() {
  try {
    const k = "__di_test__";
    localStorage.setItem(k, "1");
    localStorage.removeItem(k);
    return localStorage;
  } catch (e) {
    return null;
  }
}
const storage = safeStorage();

/* ---------------------------------------------------------------
   Render chapters
--------------------------------------------------------------- */
function continuousSelectHTML(ch, idx, total) {
  const remaining = total - idx; // chapters from here to the end, including this one
  if (remaining <= 1) return ""; // last chapter - nothing to chain to
  const fixedOptions = [2, 3, 5].filter((n) => n < remaining);
  const options = [`<option value="1">This chapter only</option>`]
    .concat(fixedOptions.map((n) => `<option value="${n}">${n} chapters</option>`))
    .concat([`<option value="all">All ${remaining} chapters from here</option>`])
    .join("");
  return `
      <label class="player-continuous">
        <span>Play in a row:</span>
        <select class="player-continuous__select" aria-label="How many chapters to play in a row, starting from chapter ${ch.id}">${options}</select>
      </label>`;
}

function chapterCardHTML(ch, idx) {
  const reverseClass = idx % 2 === 1 ? " chapter-card--reverse" : "";
  const [main, thumb] = ch.images;
  return `
  <article class="chapter-card${reverseClass}" data-chapter="${ch.id}">
    <div class="chapter-card__media">
      <span class="chapter-card__number">${ch.id}</span>
      <img class="chapter-card__main-img" src="${main.src}" alt="${main.alt}" loading="lazy" data-full="${main.src}">
      ${
        thumb
          ? `<button class="chapter-card__thumb" type="button" data-swap aria-label="Show the chapter's other picture">
               <img src="${thumb.src}" alt="${thumb.alt}" loading="lazy">
             </button>`
          : ""
      }
    </div>
    <div class="chapter-card__body">
      <span class="chapter-card__eyebrow">Chapter ${ch.id}</span>
      <h3 class="chapter-card__title">${ch.title}</h3>
      <p class="chapter-card__teaser">${ch.teaser}</p>
      <div class="player-wrap">
        <div class="player" data-src="${ch.audio}" data-chapter="${ch.id}">
          <button class="player__btn" type="button" aria-label="Play the narration for chapter ${ch.id}">▶</button>
          <div class="player__body">
            <input class="player__seek" type="range" min="0" max="100" value="0" step="0.1" aria-label="Narration progress">
            <div class="player__times">
              <span class="player__current">0:00</span>
              <span class="player__duration">--:--</span>
            </div>
          </div>
        </div>
        ${continuousSelectHTML(ch, idx, CHAPTERS.length)}
      </div>
    </div>
  </article>`;
}

function renderChapters() {
  const list = document.getElementById("chapters-list");
  list.innerHTML = CHAPTERS.map(chapterCardHTML).join("");
}

/* ---------------------------------------------------------------
   Image swap (chapters with 2 illustrations) + lightbox
--------------------------------------------------------------- */
function setupMediaInteractions() {
  const list = document.getElementById("chapters-list");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  list.addEventListener("click", (e) => {
    const swapBtn = e.target.closest("[data-swap]");
    if (swapBtn) {
      const media = swapBtn.closest(".chapter-card__media");
      const mainImg = media.querySelector(".chapter-card__main-img");
      const thumbImg = swapBtn.querySelector("img");
      const tmpSrc = mainImg.src;
      const tmpAlt = mainImg.alt;
      mainImg.style.opacity = "0";
      setTimeout(() => {
        mainImg.src = thumbImg.src;
        mainImg.alt = thumbImg.alt;
        mainImg.dataset.full = thumbImg.src;
        thumbImg.src = tmpSrc;
        thumbImg.alt = tmpAlt;
        mainImg.style.opacity = "1";
      }, 120);
      return;
    }

    const mainImg = e.target.closest(".chapter-card__main-img");
    if (mainImg) {
      lightboxImg.src = mainImg.dataset.full || mainImg.src;
      lightboxImg.alt = mainImg.alt;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    }
  });

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}

/* ---------------------------------------------------------------
   Audio players
--------------------------------------------------------------- */
function setupPlayers() {
  const players = Array.from(document.querySelectorAll(".player"));
  const bgMusic = document.getElementById("background-music");
  let activeAudio = null;
  const controllers = []; // one per chapter, in order - lets the "ended" handler start the next one
  let continuousPlan = null; // { remaining } while a multi-chapter chain is in progress

  players.forEach((el, idx) => {
    const src = el.dataset.src;
    const btn = el.querySelector(".player__btn");
    const seek = el.querySelector(".player__seek");
    const current = el.querySelector(".player__current");
    const duration = el.querySelector(".player__duration");
    const continuousSelect = el.closest(".player-wrap")?.querySelector(".player-continuous__select");
    let audio = null;
    let seeking = false;
    let pausedByOther = false; // true only when di-pause-request paused us (another chapter starting) - not a manual pause

    function ensureAudio() {
      if (audio) return audio;
      audio = new Audio(src);
      audio.preload = "none";

      audio.addEventListener("loadedmetadata", () => {
        seek.max = audio.duration || 0;
        duration.textContent = formatTime(audio.duration);
      });
      audio.addEventListener("timeupdate", () => {
        if (seeking) return;
        seek.value = audio.currentTime;
        current.textContent = formatTime(audio.currentTime);
      });
      audio.addEventListener("play", () => {
        players.forEach((other) => {
          if (other !== el) other.dispatchEvent(new CustomEvent("di-pause-request"));
        });
        pauseBackgroundMusic();
        btn.textContent = "⏸";
        btn.classList.add("is-playing");
        btn.setAttribute("aria-label", "Pause");
        activeAudio = audio;
      });
      audio.addEventListener("pause", () => {
        btn.textContent = "▶";
        btn.classList.remove("is-playing");
        btn.setAttribute("aria-label", "Resume narration");
        // A manual pause (not another chapter in the chain starting, which pauses
        // every other player via di-pause-request) cancels the plan.
        if (!pausedByOther) continuousPlan = null;
        pausedByOther = false;
      });
      audio.addEventListener("ended", () => {
        btn.textContent = "▶";
        btn.classList.remove("is-playing");
        seek.value = 0;
        current.textContent = "0:00";
        continueChainFrom(idx);
      });
      return audio;
    }

    btn.addEventListener("click", () => {
      const a = ensureAudio();
      if (a.paused) {
        const choice = continuousSelect ? continuousSelect.value : "1";
        continuousPlan = choice === "1" ? null : { remaining: choice === "all" ? Infinity : Number(choice) - 1 };
        a.play().catch(() => {});
      } else {
        a.pause();
      }
    });

    el.addEventListener("di-pause-request", () => {
      if (audio && !audio.paused) {
        pausedByOther = true;
        audio.pause();
      }
    });

    seek.addEventListener("input", () => {
      seeking = true;
      current.textContent = formatTime(Number(seek.value));
    });
    seek.addEventListener("change", () => {
      const a = ensureAudio();
      a.currentTime = Number(seek.value);
      seeking = false;
    });

    controllers[idx] = {
      playFromStart() {
        const a = ensureAudio();
        a.currentTime = 0;
        a.play().catch(() => {});
      },
    };
  });

  function continueChainFrom(idx) {
    if (!continuousPlan || continuousPlan.remaining <= 0) { continuousPlan = null; return; }
    const nextIdx = idx + 1;
    if (!controllers[nextIdx]) { continuousPlan = null; return; }
    continuousPlan.remaining -= 1;
    controllers[nextIdx].playFromStart();
    document.querySelectorAll(".chapter-card")[nextIdx]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function pauseBackgroundMusic() {
    if (bgMusic && !bgMusic.paused) {
      bgMusic.pause();
      musicToggleEl.classList.remove("is-on");
      musicToggleEl.setAttribute("aria-pressed", "false");
    }
  }

  const musicToggleEl = document.getElementById("music-toggle");
  musicToggleEl.addEventListener("click", () => {
    if (bgMusic.paused) {
      players.forEach((p) => p.dispatchEvent(new CustomEvent("di-pause-request")));
      bgMusic.play().catch(() => {});
      musicToggleEl.classList.add("is-on");
      musicToggleEl.setAttribute("aria-pressed", "true");
    } else {
      bgMusic.pause();
      musicToggleEl.classList.remove("is-on");
      musicToggleEl.setAttribute("aria-pressed", "false");
    }
  });
}

/* ---------------------------------------------------------------
   Hero sparkles
--------------------------------------------------------------- */
function setupSparkles() {
  const wrap = document.querySelector(".hero__sparkles");
  if (!wrap) return;
  const count = 16;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.className = "sparkle";
    s.textContent = Math.random() > 0.5 ? "✦" : "✧";
    s.style.left = `${Math.random() * 100}%`;
    s.style.top = `${Math.random() * 100}%`;
    s.style.fontSize = `${8 + Math.random() * 16}px`;
    s.style.animationDelay = `${Math.random() * 3.6}s`;
    s.style.animationDuration = `${3 + Math.random() * 2.5}s`;
    wrap.appendChild(s);
  }
}

/* ---------------------------------------------------------------
   Scroll reveal
--------------------------------------------------------------- */
function setupScrollReveal() {
  const cards = document.querySelectorAll(".chapter-card");
  if (!("IntersectionObserver" in window)) {
    cards.forEach((c) => c.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  cards.forEach((c) => io.observe(c));
}

/* ---------------------------------------------------------------
   Mobile "install the app" banner (PWA)
   - Never shown on desktop.
   - Android/Chrome: native beforeinstallprompt flow.
   - iOS Safari (no beforeinstallprompt support): manual instructions.
--------------------------------------------------------------- */
function setupInstallBanner() {
  const banner = document.getElementById("install-banner");
  const actionBtn = document.getElementById("install-banner-action");
  const closeBtn = document.getElementById("install-banner-close");
  const subEl = document.getElementById("install-banner-sub");

  const ua = navigator.userAgent || "";
  const isIOS =
    /iPhone|iPad|iPod/.test(ua) ||
    (ua.includes("Macintosh") && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/.test(ua);
  const isMobileUA = isIOS || isAndroid || /Mobi/i.test(ua);

  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  const dismissKey = "di-install-dismissed-en";
  const alreadyDismissed = storage && storage.getItem(dismissKey) === "1";

  if (!isMobileUA || isStandalone || alreadyDismissed) return;

  let deferredPrompt = null;

  function showBanner() {
    banner.hidden = false;
  }

  function hideBanner() {
    banner.hidden = true;
  }

  function dismiss() {
    hideBanner();
    if (storage) storage.setItem(dismissKey, "1");
    closeInstructions();
  }

  closeBtn.addEventListener("click", dismiss);

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    subEl.textContent = "Listen to the story offline too, right from your home screen";
    showBanner();
  });

  window.addEventListener("appinstalled", () => {
    dismiss();
  });

  const instructions = document.createElement("div");
  instructions.className = "install-steps";
  instructions.innerHTML = isIOS
    ? `<button class="install-steps__close" type="button" aria-label="Close">✕</button>
       <h3>How to install on iPhone</h3>
       <ol>
         <li>Tap the Share button ⬆️ in Safari's toolbar</li>
         <li>Scroll down and choose "Add to Home Screen"</li>
         <li>Tap "Add" - and that's it, the app is ready!</li>
       </ol>`
    : `<button class="install-steps__close" type="button" aria-label="Close">✕</button>
       <h3>How to install</h3>
       <ol>
         <li>Open your browser's menu (three dots)</li>
         <li>Choose "Install app" or "Add to Home Screen"</li>
         <li>Confirm - and that's it, the app is ready!</li>
       </ol>`;
  document.body.appendChild(instructions);

  function openInstructions() {
    instructions.classList.add("is-open");
  }
  function closeInstructions() {
    instructions.classList.remove("is-open");
  }
  instructions.querySelector(".install-steps__close").addEventListener("click", closeInstructions);

  actionBtn.addEventListener("click", async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice.catch(() => null);
      deferredPrompt = null;
      if (choice && choice.outcome === "accepted") dismiss();
    } else {
      openInstructions();
    }
  });

  // No beforeinstallprompt on iOS / some browsers - show banner with instructions flow anyway.
  if (isIOS) {
    subEl.textContent = "Add it to your home screen for a real app on your phone";
    showBanner();
  } else {
    // Give Chrome/Android a brief moment to fire beforeinstallprompt; otherwise fall back to instructions banner.
    setTimeout(() => {
      if (!deferredPrompt && banner.hidden) {
        subEl.textContent = "Add the app to your home screen";
        showBanner();
      }
    }, 2500);
  }
}

/* ---------------------------------------------------------------
   Service worker (shared with the Hebrew site, root-scoped)
--------------------------------------------------------------- */
function setupServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("../sw.js").catch(() => {});
    });
  }
}

/* ---------------------------------------------------------------
   Init
--------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderChapters();
  setupMediaInteractions();
  setupPlayers();
  setupSparkles();
  setupScrollReveal();
  setupInstallBanner();
  setupServiceWorker();
});
