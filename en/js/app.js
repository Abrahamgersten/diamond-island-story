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
const CONTINUOUS_CHEVRON_SVG = `<svg class="continuous-dd__chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`;

function continuousSelectHTML(ch, idx, total) {
  const remaining = total - idx; // chapters from here to the end, including this one
  if (remaining <= 1) return ""; // last chapter - nothing to chain to
  const fixedOptions = [2, 3, 5].filter((n) => n < remaining);
  const choices = [{ value: "1", label: "This chapter only" }]
    .concat(fixedOptions.map((n) => ({ value: String(n), label: `${n} chapters` })))
    .concat([{ value: "all", label: `All ${remaining} chapters from here` }]);
  const items = choices
    .map(
      (c, i) =>
        `<li class="continuous-dd__option${i === 0 ? " is-selected" : ""}" role="option" data-value="${c.value}" aria-selected="${i === 0}" tabindex="-1">${c.label}</li>`
    )
    .join("");
  return `
      <div class="player-continuous">
        <span class="player-continuous__text">Play in a row:</span>
        <div class="continuous-dd" data-value="1">
          <button type="button" class="continuous-dd__btn" aria-haspopup="listbox" aria-expanded="false">
            <span class="continuous-dd__value">This chapter only</span>
            ${CONTINUOUS_CHEVRON_SVG}
          </button>
          <ul class="continuous-dd__list" role="listbox" aria-label="How many chapters to play in a row, starting from chapter ${ch.id}" hidden>${items}</ul>
        </div>
      </div>`;
}

function setupContinuousDropdowns() {
  // Each chapter-card has overflow:hidden (to clip its image to the card's
  // rounded corners), which also silently clips any position:absolute
  // dropdown that opens near the card's bottom edge. Fix: move every list to
  // <body> (outside any clipping ancestor) and position it with
  // position:fixed from the trigger's own on-screen position.
  const entries = Array.from(document.querySelectorAll(".continuous-dd")).map((dd) => {
    const btn = dd.querySelector(".continuous-dd__btn");
    const list = dd.querySelector(".continuous-dd__list");
    document.body.appendChild(list);
    return { dd, btn, list, options: Array.from(list.querySelectorAll(".continuous-dd__option")) };
  });
  const isRtl = document.documentElement.dir === "rtl";

  function positionList(entry) {
    const r = entry.btn.getBoundingClientRect();
    entry.list.style.top = `${r.bottom + 6}px`;
    entry.list.style.minWidth = `${r.width}px`;
    if (isRtl) {
      entry.list.style.right = `${window.innerWidth - r.right}px`;
      entry.list.style.left = "auto";
    } else {
      entry.list.style.left = `${r.left}px`;
      entry.list.style.right = "auto";
    }
  }
  function closeDropdown(entry) {
    entry.list.hidden = true;
    entry.btn.setAttribute("aria-expanded", "false");
  }
  function closeAll(except) {
    entries.forEach((entry) => { if (entry !== except) closeDropdown(entry); });
  }
  function openDropdown(entry) {
    closeAll(entry);
    positionList(entry);
    entry.list.hidden = false;
    entry.btn.setAttribute("aria-expanded", "true");
  }
  function selectOption(entry, li) {
    const valueEl = entry.btn.querySelector(".continuous-dd__value");
    entry.options.forEach((o) => {
      o.classList.toggle("is-selected", o === li);
      o.setAttribute("aria-selected", o === li ? "true" : "false");
    });
    entry.dd.dataset.value = li.dataset.value;
    valueEl.textContent = li.textContent;
  }

  entries.forEach((entry) => {
    const { btn, options } = entry;

    btn.addEventListener("click", () => {
      if (entry.list.hidden) {
        openDropdown(entry);
        (options.find((o) => o.classList.contains("is-selected")) || options[0]).focus();
      } else {
        closeDropdown(entry);
      }
    });
    btn.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDropdown(entry);
        (options.find((o) => o.classList.contains("is-selected")) || options[0]).focus();
      }
    });

    options.forEach((li, i) => {
      li.addEventListener("click", () => { selectOption(entry, li); closeDropdown(entry); btn.focus(); });
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectOption(entry, li);
          closeDropdown(entry);
          btn.focus();
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          (options[i + 1] || options[0]).focus();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          (options[i - 1] || options[options.length - 1]).focus();
        } else if (e.key === "Escape") {
          e.preventDefault();
          closeDropdown(entry);
          btn.focus();
        } else if (e.key === "Tab") {
          closeDropdown(entry);
        }
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".continuous-dd") && !e.target.closest(".continuous-dd__list")) closeAll();
  });
  window.addEventListener("scroll", () => closeAll(), { passive: true, capture: true });
  window.addEventListener("resize", () => closeAll());
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
  // "Play in a row" (2026-10-15, Avraham: "it plays 2 or 3 chapters in a row and then stops, even if I asked for
  // many more"). Two causes, both fixed here:
  // 1. Any pause that did not come from the page's own button cancelled the chain - a WhatsApp notification sound,
  //    a phone call or the lock screen pauses the media for a moment, the chapter carries on, and at its end the
  //    chain was already gone (reproduced on the live site: one such pause stopped a 4-chapter chain after chapter
  //    1). Now only the page's pause button cancels it.
  // 2. Every chapter had its own media element, and with the screen locked or the browser in the background a phone
  //    may refuse to start a NEW element without a tap. Now one element plays every chapter (like a podcast app):
  //    the next chapter is the same element with another file, which the phone lets continue.
  const audio = new Audio();
  audio.preload = "none";
  let active = null; // the chapter whose file is loaded in the shared element
  let pendingSeek = 0; // where to start a chapter that was resumed or scrubbed before its file loaded
  let continuousPlan = null; // { remaining } while a multi-chapter chain is in progress

  const chapters = players.map((el, idx) => ({
    el,
    idx,
    src: el.dataset.src,
    btn: el.querySelector(".player__btn"),
    seek: el.querySelector(".player__seek"),
    current: el.querySelector(".player__current"),
    duration: el.querySelector(".player__duration"),
    dd: el.closest(".player-wrap")?.querySelector(".continuous-dd"),
    playLabel: el.querySelector(".player__btn").getAttribute("aria-label"),
    pos: 0,
    seeking: false,
  }));

  function showPlaying(c, playing) {
    c.btn.textContent = playing ? "⏸" : "▶";
    c.btn.classList.toggle("is-playing", playing);
    c.btn.setAttribute("aria-label", playing ? "Pause" : c.pos > 0 ? "Resume narration" : c.playLabel);
  }

  function load(c) {
    if (active === c) return;
    if (active) {
      active.pos = audio.currentTime || active.pos;
      showPlaying(active, false);
    }
    active = c;
    pendingSeek = c.pos;
    audio.src = c.src;
  }

  function start(c) {
    load(c);
    audio.play().catch(() => showPlaying(c, false));
  }

  function setMediaSession(c) {
    if (!("mediaSession" in navigator) || typeof MediaMetadata !== "function") return;
    const card = c.el.closest(".chapter-card");
    const title = card?.querySelector(".chapter-card__title")?.textContent || document.title;
    const img = card?.querySelector(".chapter-card__main-img");
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title,
        artist: document.querySelector(".hero__title")?.textContent.trim() || "",
        artwork: img ? [{ src: img.currentSrc || img.src }] : [],
      });
    } catch (e) {
      // lock-screen details are a nicety only
    }
  }

  audio.addEventListener("loadedmetadata", () => {
    if (!active) return;
    active.seek.max = audio.duration || 0;
    active.duration.textContent = formatTime(audio.duration);
    if (pendingSeek > 0 && pendingSeek < audio.duration) audio.currentTime = pendingSeek;
    pendingSeek = 0;
  });
  audio.addEventListener("timeupdate", () => {
    if (!active || active.seeking) return;
    active.seek.value = audio.currentTime;
    active.current.textContent = formatTime(audio.currentTime);
  });
  audio.addEventListener("play", () => {
    if (!active) return;
    pauseBackgroundMusic();
    showPlaying(active, true);
    setMediaSession(active);
  });
  audio.addEventListener("pause", () => {
    // no plan change here: this also fires for pauses the user did not make (notifications, calls, lock screen)
    if (active && !audio.ended) {
      active.pos = audio.currentTime;
      showPlaying(active, false);
    }
  });
  audio.addEventListener("ended", () => {
    if (!active) return;
    const c = active;
    c.pos = 0;
    showPlaying(c, false);
    c.seek.value = 0;
    c.current.textContent = "0:00";
    continueChainFrom(c.idx);
  });

  chapters.forEach((c) => {
    c.btn.addEventListener("click", () => {
      if (active === c && !audio.paused) {
        continuousPlan = null; // the user's own pause: the chain stops here
        audio.pause();
        return;
      }
      const choice = c.dd ? c.dd.dataset.value : "1";
      continuousPlan = choice === "1" ? null : { remaining: choice === "all" ? Infinity : Number(choice) - 1 };
      start(c);
    });

    // the background-music button pauses the narration (the chain is kept, as before)
    c.el.addEventListener("di-pause-request", () => {
      if (active === c && !audio.paused) audio.pause();
    });

    c.seek.addEventListener("input", () => {
      c.seeking = true;
      c.current.textContent = formatTime(Number(c.seek.value));
    });
    c.seek.addEventListener("change", () => {
      const t = Number(c.seek.value);
      if (active === c && audio.readyState > 0) audio.currentTime = t;
      else if (active === c) pendingSeek = t;
      else c.pos = t;
      c.seeking = false;
    });
  });

  function continueChainFrom(idx) {
    if (!continuousPlan || continuousPlan.remaining <= 0) { continuousPlan = null; return; }
    const next = chapters[idx + 1];
    if (!next) { continuousPlan = null; return; }
    continuousPlan.remaining -= 1;
    next.pos = 0;
    start(next);
    document.querySelectorAll(".chapter-card")[idx + 1]?.scrollIntoView({ behavior: "smooth", block: "center" });
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
  setupContinuousDropdowns();
  setupPlayers();
  setupSparkles();
  setupScrollReveal();
  setupInstallBanner();
  setupServiceWorker();
});
