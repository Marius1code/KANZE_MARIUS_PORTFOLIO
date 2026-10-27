document.addEventListener("DOMContentLoaded", () => {
  function makeProjectThumb(title, accentA, accentB) {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${accentA}" />
            <stop offset="100%" stop-color="${accentB}" />
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="#08111f"/>
        <rect width="1200" height="800" fill="url(#g)" opacity="0.93"/>
        <circle cx="975" cy="160" r="190" fill="rgba(255,255,255,0.10)"/>
        <circle cx="180" cy="620" r="220" fill="rgba(255,255,255,0.08)"/>
        <path d="M120 560h960" stroke="rgba(7,17,31,0.18)" stroke-width="26"/>
        <path d="M140 610h720" stroke="rgba(7,17,31,0.18)" stroke-width="18"/>
        <rect x="70" y="70" width="260" height="72" rx="20" fill="rgba(7,17,31,0.42)"/>
        <text x="100" y="116" fill="#ecf4f8" font-family="Space Grotesk, Arial, sans-serif" font-size="44" font-weight="700">${title}</text>
      </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  const services = [
    {
      title: "Développement web",
      icon: "fa-solid fa-code",
      copy: "Création de sites vitrines, boutiques en ligne et applications métier adaptés aux besoins de votre activité.",
      points: ["Sites et plateformes web", "E-commerce et gestion", "Interfaces administratives"]
    },
    {
      title: "Applications mobiles",
      icon: "fa-solid fa-mobile-screen-button",
      copy: "Applications Android et Flutter pour des usages terrain, des équipes internes ou des produits orientés client.",
      points: ["Flutter", "Android natif", "UX mobile"]
    },
    {
      title: "IoT et automatisation",
      icon: "fa-solid fa-microchip",
      copy: "Objets connectés, capteurs, supervision et contrôle à distance pour des cas d'usage concrets.",
      points: ["ESP32", "Capteurs", "Supervision temps réel"]
    },
    {
      title: "Intégration de services et d'API",
      icon: "fa-solid fa-diagram-project",
      copy: "Connexion de vos applications à des services externes pour simplifier les échanges et enrichir les fonctionnalités.",
      points: ["API et webhooks", "Notifications et e-mails", "Services tiers"]
    },
    {
      title: "Paiement et facturation",
      icon: "fa-solid fa-credit-card",
      copy: "Mise en place de parcours de paiement et d'outils de suivi adaptés à votre activité et à vos clients.",
      points: ["Paiement en ligne", "Mobile Money compatible", "Facturation et suivi"]
    },
    {
      title: "Maintenance et assistance",
      icon: "fa-solid fa-screwdriver-wrench",
      copy: "Suivi technique de vos sites et applications pour corriger les problèmes et faire évoluer vos outils.",
      points: ["Correction de bugs", "Performance et SEO technique", "Sécurité et évolutions"]
    },
    {
      title: "Hébergement et déploiement",
      icon: "fa-solid fa-cloud-arrow-up",
      copy: "Mise en production de vos projets et configuration des services nécessaires à leur bon fonctionnement.",
      points: ["Hébergement et VPS", "Domaines et certificats SSL", "Bases de données et sauvegardes"]
    },
    {
      title: "Automatisation et intelligence artificielle",
      icon: "fa-solid fa-wand-magic-sparkles",
      copy: "Automatisation de tâches et intégration de fonctionnalités numériques pour améliorer la productivité.",
      points: ["Tâches répétitives", "Fonctionnalités d'IA", "Génération de documents"]
    },
    {
      title: "Conseil numérique",
      icon: "fa-solid fa-compass-drafting",
      copy: "Accompagnement de la définition du besoin jusqu'au choix d'une solution adaptée à votre activité.",
      points: ["Analyse des besoins", "Cahier des charges", "Choix des technologies"]
    }
  ];

  const skills = [
    {
      title: "Développement web",
      icon: "fa-solid fa-code",
      copy: "Création d'interfaces, de boutiques et d'applications métier.",
      tags: ["HTML5", "CSS3", "JavaScript", "PHP", "Symfony", "Next.js", "Node.js", "Bootstrap", "API REST", "MySQL"]
    },
    {
      title: "E-commerce et paiements",
      icon: "fa-solid fa-cart-shopping",
      copy: "Parcours de commande, gestion commerciale et suivi des transactions.",
      tags: ["Catalogue et variantes", "Panier et commandes", "Paiement à la livraison", "Mobile Money", "Facturation", "Suivi des paiements"]
    },
    {
      title: "API et services externes",
      icon: "fa-solid fa-plug",
      copy: "Échanges de données et fonctionnalités connectées aux applications.",
      tags: ["API REST", "Webhooks", "Notifications", "E-mails", "SMS", "OTP à 6 chiffres"]
    },
    {
      title: "Mobile et IoT",
      icon: "fa-solid fa-microchip",
      copy: "Applications mobiles, objets connectés et supervision d'équipements.",
      tags: ["Flutter", "Android natif", "ESP32", "Capteurs", "Supervision", "Contrôle à distance"]
    },
    {
      title: "Déploiement et maintenance",
      icon: "fa-solid fa-server",
      copy: "Mise en ligne, sécurisation et suivi des applications en production.",
      tags: ["Hébergement", "VPS", "Domaines et SSL", "Bases de données", "Sauvegardes", "Git / GitHub", "SEO technique"]
    },
    {
      title: "Automatisation et IA",
      icon: "fa-solid fa-gears",
      copy: "Automatisation de flux et intégration de fonctionnalités pour réduire les tâches manuelles.",
      tags: ["Automatisation", "Intégration IA", "Génération de documents", "Services tiers"]
    },
    {
      title: "Conception et conseil",
      icon: "fa-solid fa-diagram-project",
      copy: "Cadrage fonctionnel et conception de solutions cohérentes avec les objectifs métier.",
      tags: ["Analyse des besoins", "Cahier des charges", "UML", "MCD / MLD", "Architecture", "Python", "Cartographie"]
    }
  ];

  const projects = [
    {
      category: "E-commerce / Matériel informatique",
      title: "Hardware 229",
      desc: "Boutique en ligne de matériel informatique au Bénin : catalogue avec variantes, panier et commandes avec paiement à la réception en espèces ou Mobile Money.",
      impact: "Suivi de commande par SMS, confirmation de compte par code à 6 chiffres et administration du stock, des ventes, retours, livraisons et équipes.",
      tags: ["E-commerce", "Mobile Money", "SMS / OTP", "Stock", "Administration", "Exports CSV"],
      siteUrl: "https://hardware229.vercel.app",
      image: makeProjectThumb("Hardware 229", "#6ca7ff", "#ff8a4d")
    },
    {
      category: "SaaS / Gestion des équipes",
      title: "PGP MEHD CONSULT",
      desc: "Plateforme de pilotage de la performance qui centralise le pointage, le scoring, la validation par les managers et les tableaux de bord de direction.",
      impact: "Parcours de l'agent à la direction, évaluations trimestrielles et données isolées par entreprise avec gestion des rôles.",
      tags: ["SaaS", "Multi-entreprises", "Scoring", "Tableaux de bord", "Gestion des rôles"],
      siteUrl: "https://pgp.mehdconsult.bj/",
      image: makeProjectThumb("PGP MEHD", "#72d39f", "#6ca7ff")
    },
    {
      category: "Web / Gestion PME",
      title: "Stockora",
      desc: "Solution de gestion de stocks et de suivi d'activité pour PME et MPME, avec traçabilité et historique.",
      impact: "Aide au suivi des mouvements et à la visibilité sur l'activité.",
      tags: ["Gestion de stock", "Traçabilité", "Historique", "PME / MPME"],
      siteUrl: "https://stockora-app.onerender.com",
      image: makeProjectThumb("Stockora", "#7b88ff", "#6ca7ff")
    },
    {
      category: "Web / Photo et documents professionnels",
      title: "Onesnapid",
      desc: "Plateforme de création de photos professionnelles (identité, permis, scolaire, passeport) et de cartes personnalisées, adaptées aux formats de différents pays et imprimeurs.",
      impact: "Création de cartes pour une ou plusieurs personnes en une seule opération, avec mise au format d'impression.",
      tags: ["Photo d'identité", "Cartes professionnelles", "Génération en lot", "Formats d'impression"],
      siteUrl: "https://onesnapid-lbtech.site",
      image: makeProjectThumb("Onesnapid", "#c66bff", "#6ca7ff")
    },
    {
      category: "SaaS / Maintenance",
      title: "SIGMI Africa - GMAO",
      desc: "Plateforme de gestion de maintenance assistée par ordinateur pour bâtiments, équipements, interventions et suivi des techniciens.",
      impact: "Cadrage de la maintenance, suivi opérationnel et tableau de bord centralisé.",
      tags: ["Symfony", "MySQL", "API REST", "Dashboard"],
      siteUrl: "",
      image: makeProjectThumb("SIGMI Africa", "#6ca7ff", "#ff8a4d")
    },
    {
      category: "IoT / Smart Building",
      title: "SIGMI Africa - Smart Monitoring",
      desc: "Application de supervision énergétique pour le suivi en temps réel de la consommation électrique et d'eau via ESP32.",
      impact: "Contrôle à distance et visualisation claire des données terrain.",
      tags: ["ESP32", "IoT", "Dashboard", "Capteurs"],
      siteUrl: "",
      image: makeProjectThumb("Smart Monitoring", "#8fd0e6", "#6ca7ff")
    },
    {
      category: "IoT / Connecté",
      title: "PetFeeder - Kanlicedadunu",
      desc: "Distributeur automatique intelligent avec pilotage à distance, bracelet connecté et historique des consommations.",
      impact: "Expérience produit orientée confort et contrôle à distance.",
      tags: ["IoT", "Application Web", "Embarqué"],
      siteUrl: "",
      image: makeProjectThumb("PetFeeder", "#ff8a4d", "#f5b27f")
    },
    {
      category: "Mobile / Play Store",
      title: "Gotchéké",
      desc: "Application mobile de recherche de produits avec comptes utilisateurs, API dédiée et optimisation ASO.",
      impact: "Produit mobile publié avec approche acquisition.",
      tags: ["Android", "Java", "API", "ASO"],
      siteUrl: "",
      image: makeProjectThumb("Gotchéké", "#72d39f", "#8fd0e6")
    },
    {
      category: "SIG / Optimisation",
      title: "Planification réseau fibre optique",
      desc: "Application Python calculant un tracé optimisé de réseau fibre avec carte interactive et optimisation des coûts.",
      impact: "Optimisation de parcours et visualisation cartographique.",
      tags: ["Python", "Folium", "NetworkX", "Algorithme génétique"],
      siteUrl: "",
      image: makeProjectThumb("Fibre Network", "#ffb36b", "#ff8a4d")
    },
    {
      category: "Web / Éducation",
      title: "Plateforme universitaire",
      desc: "Gestion des actualités, admissions, pré-inscriptions, vérification des diplômes et partenariats.",
      impact: "Centralisation des parcours étudiants et des informations utiles.",
      tags: ["PHP", "MySQL", "Authentification"],
      siteUrl: "",
      image: makeProjectThumb("University", "#6ca7ff", "#72d39f")
    }
  ];

  const moreProjects = [
    { title: "Project Pro", desc: "Outil de rédaction de projets pour gestionnaires, étudiants et PME." },
    { title: "Cours à domicile", desc: "Réservation de cours, paiement et gestion enseignants / étudiants." },
    { title: "Site de tourisme", desc: "Cartes interactives, hôtels, restaurants et attractions touristiques." },
    { title: "E-commerce téléphones", desc: "Catalogue, panier, paiement et gestion des commandes." }
  ];

  const experience = [
    { date: "Avr. 2026 - Aujourd'hui", role: "Placement professionnel", org: "KNR Expertises - Stage, Cotonou (12e Arr.)", desc: "Développement au sein de l'équipe produit et contribution aux plateformes web de l'entreprise." },
    { date: "Fév. 2026 - Mars 2026", role: "Participant", org: "Job Booster Bénin - Stage, Abomey-Calavi", desc: "Programme intensif orienté pratique : développement web et mobile (HTML, CSS, Bootstrap, JS, PHP, Symfony, Flutter)." },
    { date: "Juin 2025 - Août 2025", role: "Formateur en développement web", org: "T-PAPY - Temps partiel, Porto-Novo", desc: "Formation en développement web et bases de données relationnelles." },
    { date: "Fév. 2025 - Mai 2025", role: "Stagiaire développeur web", org: "BLEU LIFE TECH - Stage, Akpakpa", desc: "Conception de sites web statiques et dynamiques, hébergement et mise en ligne de projets." },
    { date: "Juin 2024 - Août 2024", role: "Stagiaire développeur web", org: "CITHEC SARL - Stage, Abomey-Calavi (Agori)", desc: "Bases de données, développement web et applications Android." },
    { date: "Juil. 2023 - Oct. 2023", role: "Stagiaire - Graphisme & développement web", org: "T-PAPY - Stage, Abomey-Calavi", desc: "Graphisme, web design, administration de bases de données, sites dynamiques et desktop avec WinDev." }
  ];

  const education = [
    { date: "Sept. 2022 - Juin 2025", role: "Licence, Système Informatique & Logiciel", org: "Les cours sonou", desc: "Développement web et mobile : HTML, CSS, Bootstrap, JavaScript, PHP, Symfony, Flutter." },
    { date: "Mai 2025 - Juin 2025", role: "Développement web natif", org: "BLEU LIFE TECH", desc: "Conception de sites statiques et dynamiques, hébergement et mise en ligne." },
    { date: "Fév. 2026 - Mars 2026", role: "Participant", org: "Job Booster Career Accelerator", desc: "Soft skills, leadership, esprit d'équipe, gestion du temps et sens de l'organisation." },
    { date: "Sept. 2021 - Juin 2022", role: "Formation - Graphisme", org: "Centre SP Service", desc: "Photoshop, création d'affiches, cartes de visite, détourage et design graphique." },
    { date: "Août 2018 - Juil. 2019", role: "Initiation à l'informatique & entrepreneuriat", org: "CENS Savalou", desc: "Prise en main de l'outil informatique, Word, PowerPoint, Excel et usage d'Internet." }
  ];

  function renderServices() {
    const servicesGrid = document.getElementById("servicesGrid");
    if (!servicesGrid) return;

    services.forEach((service) => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-3";
      col.setAttribute("data-reveal", "");
      col.innerHTML = `
        <article class="mk-service-card">
          <div class="mk-service-top">
            <span class="mk-service-icon"><i class="${service.icon}"></i></span>
            <h3 class="mk-service-title">${service.title}</h3>
          </div>
          <p class="mk-service-copy">${service.copy}</p>
          <ul class="mk-service-list">
            ${service.points.map((point) => `<li><i class="fa-solid fa-check"></i><span>${point}</span></li>`).join("")}
          </ul>
        </article>`;
      servicesGrid.appendChild(col);
    });
  }

  function renderSkills() {
    const skillsGrid = document.getElementById("skillsGrid");
    if (!skillsGrid) return;

    skills.forEach((skill) => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4";
      col.setAttribute("data-reveal", "");
      col.innerHTML = `
        <article class="mk-skill-card">
          <div class="mk-skill-card-head">
            <span class="mk-skill-icon"><i class="${skill.icon}"></i></span>
            <div>
              <h3 class="mk-skill-card-title">${skill.title}</h3>
              <p class="mk-skill-copy">${skill.copy}</p>
            </div>
          </div>
          <div class="mk-skill-tags">
            ${skill.tags.map((tag) => `<span class="mk-tag">${tag}</span>`).join("")}
          </div>
        </article>`;
      skillsGrid.appendChild(col);
    });
  }

  function renderProjects() {
    const projectsGrid = document.getElementById("projectsGrid");
    if (!projectsGrid) return;

    projects.forEach((project) => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4";
      col.setAttribute("data-reveal", "");
      const siteAction = project.siteUrl
        ? `<a href="${project.siteUrl}" target="_blank" rel="noopener noreferrer" class="mk-project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Voir le projet</a>`
        : `<span class="mk-project-link is-disabled"><i class="fa-solid fa-link-slash"></i> Lien bientôt disponible</span>`;

      col.innerHTML = `
        <article class="mk-project-card">
          <div class="mk-project-media">
            <img src="${project.image}" alt="Aperçu de ${project.title}" loading="lazy">
          </div>
          <div class="mk-project-body">
            <div class="mk-project-category">${project.category}</div>
            <h3 class="mk-project-title">${project.title}</h3>
            <p class="mk-project-desc">${project.desc}</p>
            <p class="mk-service-copy"><strong>À retenir :</strong> ${project.impact}</p>
            <div class="mk-project-tags">
              ${project.tags.map((tag) => `<span class="mk-tag">${tag}</span>`).join("")}
            </div>
            <div class="mk-project-actions">${siteAction}</div>
          </div>
        </article>`;
      projectsGrid.appendChild(col);
    });

    const moreList = document.getElementById("moreProjectsList");
    if (moreList) {
      moreProjects.forEach((project) => {
        const item = document.createElement("div");
        item.className = "mk-more-item";
        item.innerHTML = `<strong>${project.title}</strong><span>${project.desc}</span>`;
        moreList.appendChild(item);
      });
    }
  }

  function renderTimeline(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    items.forEach((item) => {
      const el = document.createElement("article");
      el.className = "mk-tl-item";
      el.setAttribute("data-reveal", "");
      el.innerHTML = `
        <span class="mk-tl-date">${item.date}</span>
        <h4 class="mk-tl-role">${item.role}</h4>
        <p class="mk-tl-org">${item.org}</p>
        <p class="mk-tl-desc">${item.desc}</p>`;
      container.appendChild(el);
    });
  }

  function setupParcoursMore() {
    const toggle = document.getElementById("mkMoreParcoursToggle");
    const panel = document.getElementById("mkMoreParcours");
    if (!toggle || !panel) return;

    toggle.addEventListener("click", () => {
      const isHidden = panel.hasAttribute("hidden");
      if (isHidden) {
        panel.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "true");
        toggle.textContent = "Voir moins";
      } else {
        panel.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Voir plus";
      }
    });
  }

  function setupCounters() {
    const statProjects = document.getElementById("statProjects");
    const statDomains = document.getElementById("statDomains");
    const statYears = document.getElementById("statYears");
    const statCerts = document.getElementById("statCerts");
    if (statProjects) statProjects.textContent = `${projects.length}+`;
    if (statDomains) statDomains.textContent = "4";
    if (statYears) statYears.textContent = "3+";
    if (statCerts) statCerts.textContent = "1";
  }

  function setupNav() {
    const navToggle = document.getElementById("mkNavToggle");
    const navLinks = document.getElementById("mkNavLinks");
    if (!navToggle || !navLinks) return;

    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setupScrollTrace() {
    const fill = document.getElementById("scrollTraceFill");
    function updateScrollTrace() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (fill) fill.style.width = `${pct}%`;
    }

    window.addEventListener("scroll", updateScrollTrace, { passive: true });
    updateScrollTrace();
  }

  function setupReveal() {
    const revealEls = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.14,
      rootMargin: "0px 0px -50px 0px"
    });

    revealEls.forEach((el) => observer.observe(el));
  }

  function setupForm() {
    const form = document.getElementById("mkForm");
    const formNote = document.getElementById("mkFormNote");
    if (!form || !formNote) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("mkName").value.trim();
      formNote.textContent = `Merci ${name || "pour votre message"} ! Le formulaire est prêt à être connecté à un service d'envoi (EmailJS, Formspree ou mailto).`;
      form.reset();
    });
  }

  const tbYear = document.getElementById("tbYear");
  if (tbYear) tbYear.textContent = new Date().getFullYear();

  renderServices();
  renderSkills();
  renderProjects();
  renderTimeline("experienceTimeline", experience.slice(0, 3));
  renderTimeline("educationTimeline", education.slice(0, 3));
  renderTimeline("experienceMoreTimeline", experience.slice(3));
  renderTimeline("educationMoreTimeline", education.slice(3));
  setupParcoursMore();
  setupCounters();
  setupNav();
  setupScrollTrace();
  setupReveal();
  setupForm();
});
