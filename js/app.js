(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const GALLERY = [1, 4, 7, 10, 2, 5, 12, 8].map(n => `img/interior/hall-${n}.jpg`);
  const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";

  let lang = pickLang();
  let activeCat = MENU[0].id;

  function pickLang() {
    try {
      const saved = localStorage.getItem("coochini-lang");
      if (LANGS.includes(saved)) return saved;
    } catch (e) {}
    const nav = (navigator.language || "hy").slice(0, 2).toLowerCase();
    return LANGS.includes(nav) ? nav : "hy";
  }

  function price(n) {
    const s = n.toLocaleString("en-US");
    if (lang === "fa") return s.replace(/\d/g, d => FA_DIGITS[d]).replace(/,/g, "٬");
    return s;
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem("coochini-lang", l); } catch (e) {}
    render();
  }

  function render() {
    const t = T[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.body.dataset.lang = lang;

    $$("[data-t]").forEach(el => { el.textContent = t[el.dataset.t]; });
    $$("[data-nav]").forEach(el => { el.textContent = t.nav[+el.dataset.nav]; });
    $("#storyBody").innerHTML = t.story.map(p => `<p>${p}</p>`).join("");

    $("#langs").innerHTML = LANGS.map(l =>
      `<button class="${l === lang ? "on" : ""}" data-lang="${l}" lang="${l}">${LANG_LABELS[l]}</button>`).join("");

    renderTabs();
    renderMenu();
  }

  function renderTabs() {
    $("#tabs").innerHTML = MENU.map(c =>
      `<button role="tab" aria-selected="${c.id === activeCat}" data-cat="${c.id}">${c.title[lang]}</button>`).join("");
  }

  function renderMenu() {
    const t = T[lang];
    const cat = MENU.find(c => c.id === activeCat);
    const imgs = cat.images.map(src => `<img src="${src}" alt="" loading="lazy" width="800" height="600">`).join("");
    const items = cat.items.map(it => {
      const alt = lang === "fa" ? it.name.en : it.name.fa;
      const desc = it.desc[lang] ? `<p class="dish-desc">${it.desc[lang]}</p>` : "";
      return `<article class="dish">
        <div class="dish-head">
          <h3>${it.name[lang]}</h3><span class="dots"></span>
          <span class="dish-price">${price(it.price)} <small>${t.currency}</small></span>
        </div>
        <p class="dish-alt" lang="${lang === "fa" ? "en" : "fa"}">${alt}</p>
        ${desc}
      </article>`;
    }).join("");
    $("#menuPanel").innerHTML =
      `<div class="menu-strip">
         <button class="strip-nav prev" data-strip="-1" aria-label="Previous">‹</button>
         <div class="strip-track" id="stripTrack">${imgs}</div>
         <button class="strip-nav next" data-strip="1" aria-label="Next">›</button>
       </div>
       <h3 class="cat-title">${cat.title[lang]}</h3>
       <div class="dishes">${items}</div>`;
    const track = $("#stripTrack");
    track.addEventListener("scroll", updateStripNav, { passive: true });
    requestAnimationFrame(updateStripNav);
  }

  function updateStripNav() {
    const track = $("#stripTrack");
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const pos = Math.abs(track.scrollLeft); // RTL reports negative values
    $(".strip-nav.prev").hidden = pos < 4;
    $(".strip-nav.next").hidden = pos > max - 4;
  }

  function renderGallery() {
    $("#galleryGrid").innerHTML = GALLERY.map((src, i) =>
      `<button class="g-item g${i}" data-src="${src}"><img src="${src}" alt="Coochini interior" loading="lazy"></button>`).join("");
  }

  // events
  document.addEventListener("click", e => {
    const l = e.target.closest("#langs [data-lang]");
    if (l) return setLang(l.dataset.lang);

    const sn = e.target.closest("[data-strip]");
    if (sn) {
      const track = $("#stripTrack");
      const rtl = document.documentElement.dir === "rtl" ? -1 : 1;
      track.scrollBy({ left: +sn.dataset.strip * rtl * track.clientWidth * 0.9, behavior: "smooth" });
      return;
    }

    const c = e.target.closest("[data-cat]");
    if (c) {
      activeCat = c.dataset.cat;
      renderTabs(); renderMenu();
      const on = $(`#tabs [data-cat="${activeCat}"]`);
      const tabs = $("#tabs");
      tabs.scrollTo({ left: on.offsetLeft - (tabs.clientWidth - on.offsetWidth) / 2, behavior: "smooth" });
      return;
    }

    const g = e.target.closest(".g-item");
    if (g) {
      const lb = $("#lightbox");
      $("img", lb).src = g.dataset.src;
      lb.hidden = false;
      return;
    }
    if (e.target.closest("#lightbox")) { $("#lightbox").hidden = true; return; }

    if (e.target.closest("#burger")) {
      const open = document.body.classList.toggle("nav-open");
      $("#burger").setAttribute("aria-expanded", open);
      return;
    }
    if (e.target.closest("#nav a")) document.body.classList.remove("nav-open");
  });

  document.addEventListener("keydown", e => { if (e.key === "Escape") $("#lightbox").hidden = true; });

  const bar = $(".topbar");
  const onScroll = () => bar.classList.toggle("solid", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // reveal on scroll
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => {
    es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 }) : null;
  $$(".section .wrap > *, .music-inner").forEach(el => { el.classList.add("reveal"); io ? io.observe(el) : el.classList.add("in"); });

  $("#year").textContent = new Date().getFullYear();
  renderGallery();
  render();
})();
