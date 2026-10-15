"use strict";

/* ---------------------------------------------------------------
   Chapter data
--------------------------------------------------------------- */
const CHAPTERS = [
  {
    id: 1,
    title: "משפחה בצריף הקר",
    teaser: "משפחתו הענייה של משה מתמודדת עם עוד לילה קשה - ומשה מחליט שמחר הכול עומד להשתנות.",
    audio: "assets/audio/ch1-sfx.mp3",
    images: [
      { src: "assets/images/ch1.jpg", alt: "איור: משה יושב עם ילדיו בצריף עני וקר, נר דולק על השולחן" },
    ],
  },
  {
    id: 2,
    title: "יום בשוק",
    teaser: "משה מחפש עבודה בשוק הסואן, ופתאום שומע שמועה מוזרה שתשנה לו את החיים.",
    audio: "assets/audio/ch2-sfx.mp3",
    images: [
      { src: "assets/images/ch2.jpg", alt: "איור: משה מחפש עבודה בשוק ליד דוכן ירקות" },
      { src: "assets/images/ch2b.jpg", alt: "איור: משה שומע במקרה שני גברים לוחשים על אי היהלומים" },
    ],
  },
  {
    id: 3,
    title: "השמועה על אי היהלומים",
    teaser: "אי רחוק, שכולו עשוי יהלומים? ספינה אחת בלבד מפליגה אליו - וממריאה כבר מחר.",
    audio: "assets/audio/ch3-sfx.mp3",
    images: [
      { src: "assets/images/ch3.jpg", alt: "איור: אי קסום עם עצי יהלומים צף מעל בקתה כפרית, בדמיונו של משה" },
    ],
  },
  {
    id: 4,
    title: "הדרך לנמל",
    teaser: "משה נפרד ביד כבדה ממשפחתו, ויוצא להרפתקה הגדולה של חייו.",
    audio: "assets/audio/ch4-sfx.mp3",
    images: [
      { src: "assets/images/ch4.jpg", alt: "איור: משה מחבק בעצב את ילדיו לפני שהוא יוצא לדרך" },
      { src: "assets/images/ch4b.jpg", alt: "איור: משה לוחץ ידיים עם רב החובל על סיפון הספינה" },
    ],
  },
  {
    id: 5,
    title: "ההפלגה הארוכה",
    teaser: "חודשיים בלב ים, גלים, מחלת ים - וציפייה ענקית לרגע שבו סוף־סוף יראה את האי.",
    audio: "assets/audio/ch5-sfx.mp3",
    images: [
      { src: "assets/images/ch5.jpg", alt: "איור: משה מטפס בסולם חבלים לראש התורן, קשת בענן ברקע" },
    ],
  },
  {
    id: 6,
    title: "חוף היהלומים",
    teaser: "החוף כולו נוצץ באלפי יהלומים אמיתיים! אבל משה עומד לגלות שהוא לגמרי לבד באי.",
    audio: "assets/audio/ch6-sfx.mp3",
    images: [
      { src: "assets/images/ch6.jpg", alt: "איור: משה עומד המום מול חוף עצום שכולו יהלומים נוצצים" },
    ],
  },
  {
    id: 7,
    title: "אל תוך הג'ונגל",
    teaser: "מעבר לג'ונגל הסבוך מחכה הפתעה גדולה: כפר שלם, עם רחוב מרוצף ביהלומים.",
    audio: "assets/audio/ch7-sfx.mp3",
    images: [
      { src: "assets/images/ch7.jpg", alt: "איור: מבעד לג'ונגל סבוך נגלה כפר שלם עם רחוב מרוצף ביהלומים" },
    ],
  },
  {
    id: 8,
    title: "מסעדת גפילטע פיש",
    teaser: "משה מגלה משהו מוזר מאוד: באי הזה, יהלומים לא שווים כלום.",
    audio: "assets/audio/ch8-sfx.mp3",
    images: [
      { src: "assets/images/ch8.jpg", alt: "איור: בעל מסעדת גפילטע פיש צוחק כשמשה מציע לו יהלום בתשלום" },
    ],
  },
  {
    id: 9,
    title: "כשהמטבח הופך לבמה",
    teaser: "שטיפת כלים רגילה הופכת פתאום למופע שכולם עוצרים כדי לצפות בו.",
    audio: "assets/audio/ch9-sfx.mp3",
    images: [
      { src: "assets/images/ch9.jpg", alt: "איור: משה שוטף כלים בתנועות מהפנטות וקהל מתקהל להביט בו" },
    ],
  },
  {
    id: 10,
    title: "כששטיפת כלים הופכת למופע מצליח",
    teaser: "אמרגן מפורסם מציע למשה הצעה שתשנה הכול.",
    audio: "assets/audio/ch10-sfx.mp3",
    images: [
      { src: "assets/images/ch10.jpg", alt: "איור: משה לוחץ ידיים לברונו האמרגן, קהל מוחא כפיים" },
    ],
  },
  {
    id: 11,
    title: "חצי שנה של הצלחה, ורגע אחד של געגוע",
    teaser: "משה הופך לכוכב הגדול של האי, אבל לבו נמשך הביתה, אל מי שהכי אוהב.",
    audio: "assets/audio/ch11-sfx.mp3",
    images: [
      { src: "assets/images/ch11.jpg", alt: "איור: משה מופיע על במה בתיאטרון מלא, מלהטט בצלחות מול קהל נלהב" },
    ],
  },
  {
    id: 12,
    title: "הפרידה מהאי",
    teaser: "משה חוזר סוף־סוף הביתה. אבל האם הביא איתו את הדבר הכי חשוב באמת?",
    audio: "assets/audio/ch12-sfx.mp3",
    images: [
      { src: "assets/images/ch12.jpg", alt: "איור: משה מנופף לשלום לתושבי האי ועולה על הספינה בדרך הביתה" },
      { src: "assets/images/ch12b.jpg", alt: "איור: משה מוציא יהלומים קטנים מכיסו ליד חביות שומן האווז" },
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
  const choices = [{ value: "1", label: "פרק זה בלבד" }]
    .concat(fixedOptions.map((n) => ({ value: String(n), label: `${n} פרקים` })))
    .concat([{ value: "all", label: `כל ${remaining} הפרקים מכאן` }]);
  const items = choices
    .map(
      (c, i) =>
        `<li class="continuous-dd__option${i === 0 ? " is-selected" : ""}" role="option" data-value="${c.value}" aria-selected="${i === 0}" tabindex="-1">${c.label}</li>`
    )
    .join("");
  return `
      <div class="player-continuous">
        <span class="player-continuous__text">נגן ברצף:</span>
        <div class="continuous-dd" data-value="1">
          <button type="button" class="continuous-dd__btn" aria-haspopup="listbox" aria-expanded="false">
            <span class="continuous-dd__value">פרק זה בלבד</span>
            ${CONTINUOUS_CHEVRON_SVG}
          </button>
          <ul class="continuous-dd__list" role="listbox" aria-label="כמה פרקים לנגן ברצף, מתחילים מפרק ${ch.id}" hidden>${items}</ul>
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
          ? `<button class="chapter-card__thumb" type="button" data-swap aria-label="החלף לתמונה השנייה של הפרק">
               <img src="${thumb.src}" alt="${thumb.alt}" loading="lazy">
             </button>`
          : ""
      }
    </div>
    <div class="chapter-card__body">
      <span class="chapter-card__eyebrow">פרק ${ch.id}</span>
      <h3 class="chapter-card__title">${ch.title}</h3>
      <p class="chapter-card__teaser">${ch.teaser}</p>
      <div class="player-wrap">
        <div class="player" data-src="${ch.audio}" data-chapter="${ch.id}">
          <button class="player__btn" type="button" aria-label="הפעל הקראה של פרק ${ch.id}">▶</button>
          <div class="player__body">
            <input class="player__seek" type="range" min="0" max="100" value="0" step="0.1" aria-label="התקדמות ההקראה">
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
    c.btn.setAttribute("aria-label", playing ? "השהה" : c.pos > 0 ? "המשך הקראה" : c.playLabel);
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

  const dismissKey = "di-install-dismissed";
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
    subEl.textContent = "האזינו לסיפור גם בלי אינטרנט, ישר מהמסך הראשי";
    showBanner();
  });

  window.addEventListener("appinstalled", () => {
    dismiss();
  });

  const instructions = document.createElement("div");
  instructions.className = "install-steps";
  instructions.innerHTML = isIOS
    ? `<button class="install-steps__close" type="button" aria-label="סגירה">✕</button>
       <h3>איך מתקינים באייפון?</h3>
       <ol>
         <li>הקישו על כפתור השיתוף ⬆️ בסרגל הכלים של Safari</li>
         <li>גללו ובחרו "הוסף למסך הבית" (Add to Home Screen)</li>
         <li>הקישו "הוספה" - וזהו, האפליקציה מוכנה!</li>
       </ol>`
    : `<button class="install-steps__close" type="button" aria-label="סגירה">✕</button>
       <h3>איך מתקינים?</h3>
       <ol>
         <li>פתחו את התפריט (שלוש הנקודות) בדפדפן</li>
         <li>בחרו "התקן אפליקציה" או "הוסף למסך הבית"</li>
         <li>אשרו - וזהו, האפליקציה מוכנה!</li>
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
    subEl.textContent = "הוסיפו למסך הבית וקבלו אפליקציה אמיתית לטלפון";
    showBanner();
  } else {
    // Give Chrome/Android a brief moment to fire beforeinstallprompt; otherwise fall back to instructions banner.
    setTimeout(() => {
      if (!deferredPrompt && banner.hidden) {
        subEl.textContent = "הוסיפו את האפליקציה למסך הבית שלכם";
        showBanner();
      }
    }, 2500);
  }
}

/* ---------------------------------------------------------------
   Service worker
--------------------------------------------------------------- */
function setupServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
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
