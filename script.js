// =========================
// Config images (NOMS EXACTS)
// =========================

const HERO_IMAGES = [
  { src: "DJI_0752.jpg", title: "Drone – Paysage", caption: "Prise de vue drone (exemple)." },
  { src: "DJI_0755.jpg", title: "Drone – Paysage", caption: "Prise de vue drone (exemple)." },
  { src: "DJI_0757.jpg", title: "Drone – Paysage", caption: "Prise de vue drone (exemple)." },
  { src: "_DSC9312.avif", title: "Portrait / Visuel", caption: "Visuel (format AVIF)." },
];

const GALLERY_ITEMS = [
  // Drone / paysages
  { src: "DJI_0739.jpg", title: "Vue drone – 0739", tags: ["drone"], caption: "Paysage / terrain." },
  { src: "DJI_0752.jpg", title: "Vue drone – 0752", tags: ["drone"], caption: "Paysage / terrain." },
  { src: "DJI_0755.jpg", title: "Vue drone – 0755", tags: ["drone"], caption: "Paysage / terrain." },
  { src: "DJI_0757.jpg", title: "Vue drone – 0757", tags: ["drone"], caption: "Paysage / terrain." },

  // Terrain
  { src: "3644.jpg", title: "Terrain – 3644", tags: ["terrain"], caption: "Activité / contexte terrain." },
  { src: "3645.jpg", title: "Terrain – 3645", tags: ["terrain"], caption: "Activité / contexte terrain." },
  { src: "3775.jpg", title: "Terrain – 3775", tags: ["terrain"], caption: "Activité / contexte terrain." },
  { src: "3776.jpg", title: "Terrain – 3776", tags: ["terrain"], caption: "Activité / contexte terrain." },
  { src: "3897 (1).jpg", title: "Terrain – 3897", tags: ["terrain"], caption: "Activité / contexte terrain." },
  { src: "Media-3.jpeg", title: "Groupe – Terrain", tags: ["terrain"], caption: "Photo de groupe / session." },

  // Affiches / supports
  { src: "fahadiovana-1_p1.png", title: "Affiche – Fahadiovana", tags: ["affiches"], caption: "Support pédagogique (hygiène)." },
  { src: "1ELEVE1ARBRE_p1.png", title: "Affiche – 1 élève 1 arbre", tags: ["affiches"], caption: "Support de sensibilisation." },
  { src: "bienfait-de-la-foret_p1.png", title: "Affiche – Bienfait de la forêt", tags: ["affiches"], caption: "Support pédagogique." },
  { src: "13.png", title: "Visuel – 13", tags: ["affiches"], caption: "Visuel / support." },
  { src: "16.png", title: "Visuel – 16", tags: ["affiches"], caption: "Visuel / support." },

  // Illustrations
  { src: "unnamed.jpg", title: "Illustration – scène", tags: ["illustrations"], caption: "Illustration (scène de vie)." },
  { src: "unnamed (2).jpg", title: "Illustration – marché", tags: ["illustrations"], caption: "Illustration (scènes / marché)." },
  { src: "CUTIE.jpg", title: "Illustration – CUTIE", tags: ["illustrations"], caption: "Illustration / visuel." },

  // Divers
  { src: "aur.jpg", title: "Visuel – aur", tags: ["all"], caption: "Visuel divers." },
  { src: "11722.jpg", title: "Photo – 11722", tags: ["terrain"], caption: "Photo terrain." },
];

const CERTS = [
  {
    src: "Attestation.jpg",
    title: "UNICEF / UNGEI – Éducation transformatrice de genre",
    desc: "Attestation de formation (ex. plateforme Agora).",
    tags: ["certif"]
  },
  {
    src: "Education-Transformatrice-de-Genre_Certificat_p1.png",
    title: "Certificat – Éducation transformatrice de genre",
    desc: "Version image (certificat).",
    tags: ["certif"]
  },
  {
    src: "IFDD-1_p1.png",
    title: "IFDD / Université Senghor – Développement durable (Session 2022)",
    desc: "Attestation de suivi du cours en ligne ouvert.",
    tags: ["certif"]
  },
  {
    src: "IFDD-2_p1.png",
    title: "IFDD / Université Senghor – Droit & protection de l’environnement (Session 2021)",
    desc: "Attestation de suivi du cours en ligne ouvert.",
    tags: ["certif"]
  },
  {
    src: "BPA.png",
    title: "BPA – Document",
    desc: "Pièce / document (image).",
    tags: ["certif"]
  },
  {
    src: "Certificat-Gestion-de-projet-OIT_p1.png",
    title: "OIT – Certificat gestion de projet",
    desc: "Certificat / preuve de formation.",
    tags: ["certif"]
  },
  {
    src: "0491204667JR_p1.png",
    title: "Document – 0491204667JR",
    desc: "Document / preuve (image).",
    tags: ["certif"]
  },
];

// =========================
// Helpers
// =========================

const $ = (sel, parent=document) => parent.querySelector(sel);
const $$ = (sel, parent=document) => Array.from(parent.querySelectorAll(sel));

function safeImg(src, onLoad){
  const img = new Image();
  img.loading = "lazy";
  img.alt = "";
  img.src = src;
  img.onerror = () => {
    // If missing, return null element
    onLoad(null);
  };
  img.onload = () => onLoad(img);
}

// =========================
// Navigation (pages cachées)
// =========================

const pages = $$("[data-page]");
const navButtons = $$("[data-nav]");

function showPage(pageKey){
  pages.forEach(p => p.classList.toggle("is-visible", p.dataset.page === pageKey));
  // active buttons
  $$("[data-nav]").forEach(btn => btn.classList.toggle("is-active", btn.dataset.nav === pageKey));

  // close mobile nav if open
  closeMobileNav();

  // scroll top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navButtons.forEach(btn => {
  btn.addEventListener("click", () => showPage(btn.dataset.nav));
});

// =========================
// Mobile nav
// =========================

const burger = $("#burger");
const mobileNav = $("#mobileNav");
const closeMobile = $("#closeMobileNav");

function openMobileNav(){
  mobileNav.hidden = false;
  burger.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}
function closeMobileNav(){
  if (!mobileNav) return;
  mobileNav.hidden = true;
  burger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

burger?.addEventListener("click", () => {
  const expanded = burger.getAttribute("aria-expanded") === "true";
  expanded ? closeMobileNav() : openMobileNav();
});
closeMobile?.addEventListener("click", closeMobileNav);

// click outside panel closes
mobileNav?.addEventListener("click", (e) => {
  if (e.target === mobileNav) closeMobileNav();
});

// =========================
// Hero media (simple carousel swap)
// =========================

const heroMedia = $("#heroMedia");
let heroIndex = 0;

function renderHero(){
  if (!heroMedia) return;
  heroMedia.innerHTML = "";

  const current = HERO_IMAGES[heroIndex % HERO_IMAGES.length];
  safeImg(current.src, (img) => {
    if(!img){
      heroMedia.innerHTML = `
        <div class="card" style="padding:14px; border-radius:18px;">
          <div style="font-weight:900;">Image introuvable</div>
          <div class="muted" style="margin-top:6px;">${current.src}</div>
          <div class="muted" style="margin-top:8px;">Ajoute le fichier dans le même dossier que le site.</div>
        </div>`;
      return;
    }

    img.className = "hero-media__img";
    img.alt = current.title;
    img.addEventListener("click", () => openLightbox(current.src, current.title, current.caption));
    heroMedia.appendChild(img);
  });
}

function nextHero(){
  heroIndex++;
  renderHero();
}

// auto rotate
setInterval(nextHero, 5200);

// =========================
// Gallery
// =========================

const gallery = $("#gallery");
const filters = $$(".filter");
let activeFilter = "all";

function matchesFilter(item){
  if (activeFilter === "all") return true;
  return item.tags.includes(activeFilter);
}

function renderGallery(){
  if(!gallery) return;
  gallery.innerHTML = "";

  const items = GALLERY_ITEMS.filter(matchesFilter);

  items.forEach((it) => {
    const card = document.createElement("article");
    card.className = "item";
    card.dataset.tags = it.tags.join(",");

    const media = document.createElement("div");
    media.className = "item__media";

    const meta = document.createElement("div");
    meta.className = "item__meta";
    meta.innerHTML = `
      <div class="item__title">${it.title}</div>
      <div class="item__tags">
        ${it.tags.map(t => `<span class="tag ${t==='drone'?'':'tag--soft'}">${t}</span>`).join("")}
      </div>
      <div class="muted" style="font-size:.92rem; line-height:1.45">${it.caption || ""}</div>
    `;

    safeImg(it.src, (img) => {
      if(!img){
        media.innerHTML = `
          <div style="padding:12px;">
            <div style="font-weight:900;">Image introuvable</div>
            <div class="muted" style="margin-top:6px;">${it.src}</div>
          </div>`;
      } else {
        img.alt = it.title;
        img.addEventListener("click", () => openLightbox(it.src, it.title, it.caption));
        media.appendChild(img);
      }
    });

    card.appendChild(media);
    card.appendChild(meta);
    gallery.appendChild(card);
  });

  // Stats on home
  const statPhotos = $("#statPhotos");
  if (statPhotos) statPhotos.textContent = `${GALLERY_ITEMS.length + HERO_IMAGES.length}`;
}

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;
    filters.forEach(b => b.classList.toggle("is-active", b === btn));
    renderGallery();
  });
});

// =========================
// Certifs
// =========================

const certGrid = $("#certGrid");

function renderCerts(){
  if(!certGrid) return;
  certGrid.innerHTML = "";

  CERTS.forEach((c) => {
    const wrap = document.createElement("article");
    wrap.className = "card cert";

    const thumb = document.createElement("div");
    thumb.className = "cert__thumb";

    const body = document.createElement("div");
    body.className = "cert__body";

    body.innerHTML = `
      <div class="cert__title">${c.title}</div>
      <div class="cert__desc">${c.desc}</div>
      <div class="cert__actions">
        <button class="btn btn--small" data-open="${c.src}">Aperçu</button>
        <a class="btn btn--small" href="${c.src}" target="_blank" rel="noopener">Ouvrir ↗</a>
      </div>
    `;

    safeImg(c.src, (img) => {
      if(!img){
        thumb.innerHTML = `<div style="padding:12px;">
          <div style="font-weight:900;">Fichier introuvable</div>
          <div class="muted" style="margin-top:6px;">${c.src}</div>
        </div>`;
      } else {
        img.alt = c.title;
        img.addEventListener("click", () => openLightbox(c.src, c.title, c.desc));
        thumb.appendChild(img);
      }
    });

    wrap.appendChild(thumb);
    wrap.appendChild(body);
    certGrid.appendChild(wrap);
  });

  const statCerts = $("#statCerts");
  if (statCerts) statCerts.textContent = `${CERTS.length}`;
}

// =========================
// Lightbox
// =========================

const lightbox = $("#lightbox");
const lightboxImg = $("#lightboxImg");
const lightboxTitle = $("#lightboxTitle");
const lightboxCaption = $("#lightboxCaption");
const lightboxOpen = $("#lightboxOpen");

function openLightbox(src, title="Aperçu", caption=""){
  if(!lightbox) return;

  lightbox.hidden = false;
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  lightboxTitle.textContent = title;
  lightboxCaption.textContent = caption || "";
  lightboxOpen.href = src;

  // reset
  lightboxImg.src = "";
  lightboxImg.alt = title;

  // load
  lightboxImg.src = src;
}

function closeLightbox(){
  if(!lightbox) return;
  lightbox.hidden = true;
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

$$("[data-close='1']").forEach(el => el.addEventListener("click", closeLightbox));
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeLightbox();
});

// buttons that open assets
document.addEventListener("click", (e) => {
  const t = e.target;
  if(!(t instanceof HTMLElement)) return;

  const openSrc = t.getAttribute("data-open");
  if(openSrc){
    openLightbox(openSrc, "Aperçu", openSrc);
  }
});

// =========================
// Contact (mailto)
// =========================

const contactForm = $("#contactForm");
contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const subject = encodeURIComponent($("#subject").value.trim());
  const message = encodeURIComponent($("#message").value.trim());
  const mail = "ton.email@exemple.com"; // <-- mets ton email ici
  window.location.href = `mailto:${mail}?subject=${subject}&body=${message}`;
});

// =========================
// Init
// =========================

$("#year").textContent = String(new Date().getFullYear());

renderHero();
renderGallery();
renderCerts();

// Default page home
showPage("home");
