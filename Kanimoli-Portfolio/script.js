/* =========================================================
   A. Kanimoli – Portfolio
   ---------------------------------------------------------
   EASY EDIT AREA: the CERTIFICATES list below controls every
   card in the Certifications section.

   To ADD a certificate:
     1. Put the file in  assets/certificates/
     2. Copy one line in the list, then change the values.

   Fields
     title    – certificate name shown on the card
     org      – organisation / issuer
     category – "Courses", "Internships" or "Events" (used by the filter buttons)
     type     – "image" (opens in the viewer) or "pdf" (opens in a new tab)
     file     – path to the certificate file
     preview  – small picture shown on the card (optional).
                For images it can be the same file; for a PDF, add a .jpg screenshot.
                If it is left empty or missing, a neat placeholder icon is shown.
     meta     – short extra line (period, event name...). Leave "" if you don't know.
   ========================================================= */

const CERTIFICATES = [
  // ---------- Courses ----------
  { title: "NPTEL – Cloud Computing", org: "NPTEL · IIT Kharagpur", category: "Courses", type: "pdf",
    file: "assets/certificates/nptel-cloud-computing.pdf",
    preview: "assets/certificates/previews/nptel-cloud-computing.jpg", meta: "Jan – Apr 2026 · 12-week course" },

  { title: "Infosys – Introduction to Cloud Computing", org: "Infosys Springboard", category: "Courses", type: "pdf",
    file: "assets/certificates/infosys-cloud-computing.pdf",
    preview: "assets/certificates/previews/infosys-cloud-computing.jpg", meta: "Course completion certificate" },

  { title: "HP LIFE – Design Thinking", org: "HP LIFE · HP Foundation", category: "Courses", type: "pdf",
    file: "assets/certificates/hp-life-design-thinking.pdf",
    preview: "assets/certificates/previews/hp-life-design-thinking.jpg", meta: "Online course" },

  { title: "Alison – An Introduction to Java Programming", org: "Alison", category: "Courses", type: "image",
    file: "assets/certificates/alison-intro-to-java.jpg",
    preview: "assets/certificates/previews/alison-intro-to-java.jpg", meta: "Online course" },

  { title: "Alison – Java Programming For Complete Beginners", org: "Alison", category: "Courses", type: "image",
    file: "assets/certificates/alison-java-for-beginners.jpg",
    preview: "assets/certificates/previews/alison-java-for-beginners.jpg", meta: "Online course" },

  { title: "Alison – Introduction to Embedded Systems Design", org: "Alison", category: "Courses", type: "image",
    file: "assets/certificates/alison-intro-embedded-systems-design.jpg",
    preview: "assets/certificates/previews/alison-intro-embedded-systems-design.jpg", meta: "Online diploma course" },

  { title: "Alison – Master Embedded Systems: Challenges and Concepts", org: "Alison", category: "Courses", type: "image",
    file: "assets/certificates/alison-master-embedded-systems.jpg",
    preview: "assets/certificates/previews/alison-master-embedded-systems.jpg", meta: "Online course" },

  { title: "Operating System – Student Learning Assessment", org: "AICTE · Student Learning Assessment", category: "Courses", type: "pdf",
    file: "assets/certificates/aicte-operating-system-assessment.pdf",
    preview: "assets/certificates/previews/aicte-operating-system-assessment.jpg", meta: "Self-assessment report" },

  // ---------- Internships ----------
  { title: "Web Development Internship", org: "ESEC Innovation & Incubation Foundation", category: "Internships", type: "pdf",
    file: "assets/certificates/web-development-internship.pdf",
    preview: "assets/certificates/previews/web-development-internship.jpg", meta: "Internship completion · 5 days" },

  { title: "UI/UX Design Internship", org: "Accent Techno Soft, Coimbatore", category: "Internships", type: "pdf",
    file: "assets/certificates/ui-ux-internship.pdf",
    preview: "assets/certificates/previews/ui-ux-internship.jpg", meta: "Internship training · 15 days" },

  // ---------- Events ----------
  { title: "Paper Presentation – Spring Fest 2K26", org: "K.S.R. College of Engineering", category: "Events", type: "image",
    file: "assets/certificates/ksr-paper-presentation.jpg",
    preview: "assets/certificates/previews/ksr-paper-presentation.jpg", meta: "Certificate of participation" },

  { title: "Webathon – TEXPERIA 2026", org: "SNS College of Technology", category: "Events", type: "pdf",
    file: "assets/certificates/sns-texperia-webathon.pdf",
    preview: "assets/certificates/previews/sns-texperia-webathon.jpg", meta: "Certificate of appreciation" },

  { title: "Technical Quiz – UDHAYAM'25", org: "KIT – Kalaignarkarunanidhi Institute of Technology", category: "Events", type: "pdf",
    file: "assets/certificates/kit-technical-quiz.pdf",
    preview: "assets/certificates/previews/kit-technical-quiz.jpg", meta: "Certificate of appreciation" },

  { title: "Gamez – UDHAYAM'25", org: "KIT – Kalaignarkarunanidhi Institute of Technology", category: "Events", type: "pdf",
    file: "assets/certificates/kit-gamez.pdf",
    preview: "assets/certificates/previews/kit-gamez.jpg", meta: "Certificate of appreciation" },

  { title: "Quiz Whizzess – YUVA Techfest'25", org: "KPR Institute of Engineering and Technology", category: "Events", type: "pdf",
    file: "assets/certificates/yuva-techfest-quiz-whizzess.pdf",
    preview: "assets/certificates/previews/yuva-techfest-quiz-whizzess.jpg", meta: "Certificate of participation" }

  // ---------- Template for a new certificate (copy, remove the // and edit) ----------
  // ,{ title: "Certificate name", org: "Organisation", category: "Courses", type: "pdf",
  //    file: "assets/certificates/your-file.pdf", preview: "", meta: "" }
];

const FILTERS = ["All", "Courses", "Internships", "Events"];

/* ---------------------------------------------------------
   Everything below runs after the page is ready
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const svgIcon = (id) => `<svg class="icon" aria-hidden="true"><use href="#${id}"/></svg>`;

  /* ----- Footer year ----- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----- Profile image fallback ----- */
  const profileImg = $("#profileImg");
  const photoFrame = profileImg ? profileImg.closest(".photo-frame") : null;
  const showPhotoFallback = () => photoFrame && photoFrame.classList.add("no-photo");
  if (profileImg) {
    profileImg.addEventListener("error", showPhotoFallback);
    if (profileImg.complete && profileImg.naturalWidth === 0) showPhotoFallback();
  }

  /* ----- Mobile navigation ----- */
  const header = $(".site-header");
  const navToggle = $("#navToggle");
  const navMenu = $("#navMenu");
  const navLinks = $$(".nav-link");

  const setMenu = (open) => {
    navMenu.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  navToggle.addEventListener("click", () => setMenu(!navMenu.classList.contains("open")));
  navLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("click", (e) => {
    if (navMenu.classList.contains("open") && !header.contains(e.target)) setMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("open")) { setMenu(false); navToggle.focus(); }
  });
  window.addEventListener("resize", () => { if (window.innerWidth > 960) setMenu(false); });

  /* ----- Header shadow, back-to-top, active nav link ----- */
  const toTop = $("#toTop");
  const sections = $$("main section[id]");
  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 10);
    toTop.classList.toggle("show", y > 600);

    const probe = y + header.offsetHeight + 120;
    let current = sections[0] ? sections[0].id : "home";
    sections.forEach((s) => { if (s.offsetTop <= probe) current = s.id; });
    // reached the bottom of the page -> highlight the last section
    if (window.innerHeight + y >= document.documentElement.scrollHeight - 4) current = sections[sections.length - 1].id;

    navLinks.forEach((link) => {
      const on = link.getAttribute("href") === "#" + current;
      link.classList.toggle("active", on);
      if (on) link.setAttribute("aria-current", "true"); else link.removeAttribute("aria-current");
    });
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ----- Scroll reveal ----- */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("in-view"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    // small stagger for items that share a grid
    revealEls.forEach((el) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal")) : [];
      const idx = siblings.indexOf(el);
      if (idx > 0) el.style.transitionDelay = Math.min(idx, 4) * 70 + "ms";
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  /* ----- Placeholder project links (no real URL yet) ----- */
  $$("[data-placeholder]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      el.setAttribute("title", el.dataset.placeholder);
    });
  });

  /* =======================================================
     CERTIFICATES
     ======================================================= */
  const grid = $("#certGrid");
  const filterBar = $("#certFilters");
  let activeFilter = "All";

  const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function buildFilters() {
    filterBar.innerHTML = "";
    FILTERS.forEach((name) => {
      const count = name === "All" ? CERTIFICATES.length : CERTIFICATES.filter((c) => c.category === name).length;
      if (name !== "All" && count === 0) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.dataset.filter = name;
      btn.setAttribute("aria-pressed", String(name === activeFilter));
      btn.textContent = `${name} (${count})`;
      btn.addEventListener("click", () => setFilter(name));
      filterBar.appendChild(btn);
    });
  }

  function setFilter(name) {
    activeFilter = name;
    $$(".chip", filterBar).forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === name)));
    renderCertificates();
  }

  function renderCertificates() {
    const list = CERTIFICATES.filter((c) => activeFilter === "All" || c.category === activeFilter);
    grid.innerHTML = "";

    list.forEach((cert, i) => {
      const isImage = cert.type === "image";
      const card = document.createElement("article");
      card.className = "cert-card";
      card.style.animationDelay = Math.min(i, 8) * 45 + "ms";

      const previewSrc = cert.preview || (isImage ? cert.file : "");
      card.innerHTML = `
        <div class="cert-thumb${previewSrc ? "" : " no-img"}">
          ${previewSrc ? `<img src="${escapeHTML(previewSrc)}" alt="Preview of ${escapeHTML(cert.title)} certificate" loading="lazy">` : ""}
          <span class="thumb-fallback" aria-hidden="true">${svgIcon("i-award")}</span>
          <span class="cert-type">${isImage ? "Image" : "PDF"}</span>
        </div>
        <div class="cert-body">
          <h3>${escapeHTML(cert.title)}</h3>
          <p class="cert-org">${escapeHTML(cert.org)}</p>
          ${cert.meta ? `<p class="cert-meta">${escapeHTML(cert.meta)}</p>` : `<p class="cert-meta">Details can be added later</p>`}
        </div>`;

      // broken preview -> show placeholder instead of a broken-image icon
      const img = $("img", card);
      if (img) img.addEventListener("error", () => { img.remove(); $(".cert-thumb", card).classList.add("no-img"); });

      // "View Certificate" – modal for images, new tab for PDFs
      const body = $(".cert-body", card);
      let action;
      if (isImage) {
        action = document.createElement("button");
        action.type = "button";
        action.className = "btn btn-sm btn-primary";
        action.innerHTML = `${svgIcon("i-image")}View Certificate`;
        action.setAttribute("aria-label", `View certificate: ${cert.title}`);
        action.addEventListener("click", () => openModal(cert, action));
      } else {
        action = document.createElement("a");
        action.className = "btn btn-sm btn-primary";
        action.href = cert.file;
        action.target = "_blank";
        action.rel = "noopener noreferrer";
        action.innerHTML = `${svgIcon("i-external")}View Certificate`;
        action.setAttribute("aria-label", `View certificate (opens in a new tab): ${cert.title}`);
      }
      body.appendChild(action);
      grid.appendChild(card);
    });
  }

  buildFilters();
  renderCertificates();

  // "See certificate" links in the internship cards jump to the matching filter
  $$("[data-filter-jump]").forEach((link) => {
    link.addEventListener("click", () => setFilter(link.dataset.filterJump));
  });

  /* =======================================================
     CERTIFICATE MODAL (lightbox)
     ======================================================= */
  const modal = $("#certModal");
  const modalImg = $("#modalImg");
  const modalTitle = $("#modalTitle");
  const modalOrg = $("#modalOrg");
  const modalClose = $("#modalClose");
  let lastFocused = null;

  function openModal(cert, trigger) {
    lastFocused = trigger || document.activeElement;
    modalTitle.textContent = cert.title;
    modalOrg.textContent = cert.org;
    modalImg.alt = `${cert.title} – ${cert.org}`;
    modalImg.src = cert.file;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modalClose.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    modalImg.src = "";
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") { closeModal(); return; }
    // keep keyboard focus inside the dialog
    if (e.key === "Tab") {
      const focusable = $$("button, a[href]", modal).filter((el) => !el.disabled);
      if (focusable.length === 0) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
});
