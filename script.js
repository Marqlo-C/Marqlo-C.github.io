const projects = [
  {
    title: "Toes Down — Multiplayer Study Game",
    summary: "Built a responsive React/Next.js experience for a collaborative study game with the Google Developer Student Club.",
    tags: ["React", "Next.js", "Team Project"],
    link: "https://github.com/Marqlo-C/Toes-Down",
    liveLink: "https://toesdown.vercel.app/"
  },
  {
    title: "Embergency — Wildfire Response Web App",
    summary: "Overlaid real-time wildfire data with cell-tower coverage to surface dead zones and support responders.",
    tags: ["Maps", "APIs", "Operations"],
    link: "https://github.com/Marqlo-C/Embergency"
  },
  {
    title: "Trashform — AI-Powered Recycling",
    summary: "Trained a model to classify common waste items from images and give fast, user-friendly feedback.",
    tags: ["Python", "ML", "UX"],
    link: "https://github.com/Marqlo-C/TrashForm"
  },
  {
    title: "EcoCar Mobility Team Backend",
    summary: "Scripted data ingestion pipelines and diagnostics for vehicle telemetry and analytics reporting.",
    tags: ["APIs", "Data", "Analytics"],
    link: ""
  },
  {
    title: "Grocer's Gauntlet",
    summary: "Gameplay programming on a team-built title—tightened core loops, polish, and playtest-driven tweaks.",
    tags: ["Game Dev", "Team", "Gameplay"],
    link: "https://github.com/Marqlo-C/Grocers-Gauntlet"
  },
  {
    title: "Aggie-gility — Adaptive Aerodynamics Prototype",
    summary: "Arduino-powered model that adjusts aerodynamic surfaces on braking to increase downforce; handled programming, sensors, and motor control in a UC Davis AvenueE team.",
    tags: ["Arduino", "Embedded", "Hardware", "Sensors"],
    link: "https://www.linkedin.com/in/marq-lott/details/projects/#1727734114532"
  },
  {
    title: "Note Taking App",
    summary: "Lightweight notes app with a clean UI for fast capture and organization of ideas.",
    tags: ["Notes", "Productivity"],
    link: "https://github.com/Marqlo-C/NoteTakingApp"
  }
];

const experiences = [
  {
    date: "2025 to now",
    role: "B.S. Computer Science",
    place: "UC Davis, College of Engineering",
    blurb: "Program Advisor for AvenueE Summer Bridge, mentoring 60 first-generation engineering students from low-income and underrepresented backgrounds through a two-week intensive. Building backend infrastructure for EcoCAR Mobility: migrated API keys to the server, wrote scrapers to log carshare usage data so we can see where cars stop and help underserved communities get actual access to mobility, refactored TamperMonkey to run server-side instead of in the browser, fixed the OpenAI chatbot to maintain context across conversations for people who aren't technically inclined. Worked with the Aggie Mobility project using Arduino to explore adaptive aerodynamics for emergency braking. Shipped three applications over 2025: Emergency at HackDavis, Trashform at CalHacks AI, and a Note Taking App at CalHacks with different teams. Contributed to Toes Down for Google Developer Student Club. Active in NSBE and SAA. CalHacks 2026 coming."
  },
  {
    date: "2024 to 2025",
    role: "A.S. Computer Science & Physics",
    place: "San Joaquin Delta College",
    blurb: "Spent my savings living frugally and cramming what could have been three years of coursework into two. Graduated with an Associates in Computer Science, an Associates in Physics, and one class short of an Associates in Mathematics. Maintained a 4.0 GPA. The work meant no life outside of classes and studying. Collaborated with the Physics, Mathematics, and Computer Science Club on a solar system simulation in Python that modeled orbital mechanics and gravitational interactions from first principles."
  },
  {
    date: "2020 to 2024",
    role: "Stepped back",
    place: "California",
    blurb: "Left sales. Made the intentional call to go back to school because I knew I wanted to build systems, not sell them. That decision costs you in money, time, and pride. But it forces clarity."
  },
  {
    date: "2020 to 2021",
    role: "Sr. Business Account Executive",
    place: "Spectrum Enterprise, Los Angeles",
    blurb: "Came back for a second run at Spectrum. By this point most of the region was already built out with fiber, so the work was different. Less about landing new accounts and more about selling fiber upgrades and helping existing customers plan for their growing bandwidth demands. The pool of prospects was smaller but the technical depth went deeper. Fewer people to sell to meant conversations shifted toward understanding what their actual infrastructure needed to look like three years out."
  },
  {
    date: "2020",
    role: "Regional Account Manager",
    place: "Cogent Communications, Los Angeles",
    blurb: "In my first quarter, I hit 143% of quota selling enterprise telecom infrastructure. The role involved working with customers and our engineering team to design customized network buildouts across fiber, data centers, bandwidth, VPN, and server solutions. It wasn't about moving boxes off a spec sheet. It was understanding what a customer actually needed to accomplish, then working with our engineers to design a solution that would actually work for their situation, then making sure it got implemented correctly."
  },
  {
    date: "2016 to 2020",
    role: "Sr. Business Account Executive",
    place: "Spectrum Enterprise, Los Angeles",
    blurb: "Top performer in the region for four years straight. Owned Fortune 500 accounts from initial discovery through ongoing partnership. The real work was understanding what they had to accomplish with their network, proposing the right services and solutions, then staying involved through deployment to make sure everything actually worked the way they expected. Long sales cycles force you to understand the customer's problem or you don't close the deal. The relationships that stuck were the ones where they were still happy years later."
  },
  {
    date: "2013 to 2017",
    role: "Cryptologic Technician - Networking",
    place: "US Navy, Los Angeles",
    blurb: "Spent four years in network defense and incident response. Vulnerability assessment, threat detection, rebuilding what happened after systems got hit. Systems fail in predictable ways if you understand them. Understanding how something breaks is as important as knowing how it works, maybe more so. In a results-driven world, uptime, reliability, availability, security, and privacy aren't nice-to-haves. They're what determines whether people trust your system or avoid it entirely. Understanding the underlying weaknesses is as important as understanding the design."
  }
];

const projectGrid = document.getElementById("project-grid");
const timelineList = document.getElementById("timeline-list");

// Stamps project cards into the grid from the projects array above.
function renderProjects() {
  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "card project-card";
    const starIcon = `<span class="project-link-icon project-link-icon-star" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2.5l2.8 6.4 6.7 2.4-6.7 2.4L12 20.1l-2.8-6.4-6.7-2.4 6.7-2.4z"></path></svg></span>`;
    const links = [
      project.liveLink ? `<a class="link" href="${project.liveLink}" target="_blank" rel="noopener"><span>Live site ↗</span></a>` : '',
      project.link ? `<a class="link" href="${project.link}" target="_blank" rel="noopener"><span>View project</span>${starIcon}</a>` : ''
    ].filter(Boolean).join('');
    card.innerHTML = `
      <div class="card-title">${project.title}</div>
      <p>${project.summary}</p>
      <div class="chip-row">${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
      ${links}
    `;
    projectGrid.appendChild(card);
  });
}

// Stamps timeline entries into the timeline list from the experiences array above.
function renderTimeline() {
  experiences.forEach((item) => {
    const entry = document.createElement("article");
    entry.className = "timeline-item";
    entry.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-role">${item.role}</div>
      <div class="timeline-meta">${item.place}</div>
      <p>${item.blurb}</p>
    `;
    timelineList.appendChild(entry);
  });
}

renderProjects();
renderTimeline();

// Draws a responsive hand-drawn arrow from the "now" text to the role badge.
(() => {
  const hero = document.querySelector('.hero');
  const startEl = document.querySelector('.now-anchor');
  const endEl = document.querySelector('.hero-role');
  const statusChip = document.querySelector('.status-chip');
  const ledeEl = document.querySelector('.lede-delayed');
  const arrowSvg = document.querySelector('.hero-now-arrow');
  const arrowPath = arrowSvg ? arrowSvg.querySelector('.hero-now-arrow-line') : null;
  if (!hero || !startEl || !endEl || !arrowSvg || !arrowPath) return;

  let arrowReady = false;

  const updateArrow = () => {
    const heroRect = hero.getBoundingClientRect();
    const startRect = startEl.getBoundingClientRect();
    const endRect = endEl.getBoundingClientRect();

    const startNudge = Math.max(12, startRect.width * 0.2);
    const sx = startRect.right - heroRect.left + startNudge;
    const sy = startRect.top - heroRect.top + startRect.height * 0.82 - 5;
    const endpointStep = endRect.height * 0.10;
    const ex = endRect.left - heroRect.left - 14 + endpointStep * 2;
    const ey = endRect.top - heroRect.top + endRect.height * 0.24;

    const dx = ex - sx;
    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    let bendX = sx + dx * 0.74;

    if (statusChip) {
      const chipRect = statusChip.getBoundingClientRect();
      const chipRight = chipRect.right - heroRect.left;

      // Keep the horizontal drift until just after the chip ends.
      bendX = clamp(chipRight + 40, sx + dx * 0.64, ex - 64);
    }

    // Quarter-oval style: stay flatter longer, then bend down near the end.
    const c1x = bendX;
    const c1y = sy + 2;
    const c2x = ex - 58;
    const c2y = ey - 22;
    const d = `M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`;

    arrowSvg.setAttribute('viewBox', `0 0 ${Math.max(1, heroRect.width)} ${Math.max(1, heroRect.height)}`);
    arrowPath.setAttribute('d', d);
    arrowPath.setAttribute('marker-end', 'url(#hero-now-arrow-head)');
  };

  const activateArrow = () => {
    if (arrowReady) return;
    arrowReady = true;

    if (ledeEl) {
      const isTablet = window.matchMedia('(min-width: 721px) and (max-width: 1199px)').matches;
      const ledeDelayMs = isTablet ? 125 : 100;
      setTimeout(() => {
        ledeEl.classList.add('ready');
      }, ledeDelayMs);
    }

    updateArrow();

    // On tablets, wait longer for text wrapping to fully settle
    const isTablet = window.matchMedia('(min-width: 721px) and (max-width: 1199px)').matches;
    const delayMs = isTablet ? 600 : 400;

    setTimeout(() => {
      arrowSvg.classList.add('ready');
      updateArrow();
    }, delayMs);

    window.addEventListener('resize', updateArrow);
    window.addEventListener('scroll', updateArrow, { passive: true });
    window.addEventListener('load', updateArrow);

    // Recompute once webfonts settle so the start point stays attached to "now".
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateArrow).catch(() => {});
    }
  };

  document.addEventListener('heroTypewriterDone', activateArrow, { once: true });
})();

// Keeps section jumps aligned with the floating header by using a dynamic offset.
(() => {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  if (!header || navLinks.length === 0) return;

  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const smoothScrollTo = (targetTop) => {
    const startTop = window.scrollY;
    const distance = targetTop - startTop;
    const isMobile = window.matchMedia('(max-width: 720px)').matches;
    const duration = isMobile ? 920 : 620;
    const startTs = performance.now();

    const step = (ts) => {
      const progress = Math.min(1, (ts - startTs) / duration);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startTop + distance * eased);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const getOffset = () => {
    const rect = header.getBoundingClientRect();
    const breathingRoom = window.matchMedia('(max-width: 720px)').matches ? 32 : 20;
    return rect.bottom + breathingRoom;
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId) return;

      if (link.classList.contains('nav-top')) {
        event.preventDefault();
        smoothScrollTo(0);
        history.replaceState(null, '', '#top');
        return;
      }

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();

      const top = target.getBoundingClientRect().top + window.scrollY - getOffset();
      smoothScrollTo(Math.max(0, top));
      history.replaceState(null, '', targetId);
    });
  });
})();

// Adds a subtle tightened state to the floating header once the page is scrolled.
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const updateHeaderState = () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  };

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
})();

// Shows desktop quick actions after the hero CTA row has been scrolled past.
(() => {
  const floatingMenu = document.querySelector('.floating-cta');
  const floatingTab = floatingMenu ? floatingMenu.querySelector('.floating-cta-tab') : null;
  const floatingLinks = floatingMenu ? floatingMenu.querySelectorAll('.floating-cta-link') : [];
  const heroCtaRow = document.querySelector('.hero .cta-row');
  const header = document.querySelector('.site-header');
  const mobileQuery = window.matchMedia('(max-width: 960px)');
  if (!floatingMenu || !heroCtaRow || !header) return;

  let touchStartX = 0;
  let touchStartY = 0;

  const setTabState = (isOpen) => {
    if (!floatingTab) return;
    floatingTab.setAttribute('aria-expanded', String(isOpen));
  };

  const updateVisibility = () => {
    const triggerBottom = heroCtaRow.getBoundingClientRect().bottom + window.scrollY;
    const headerBottom = header.getBoundingClientRect().bottom;
    const passedHeroCta = window.scrollY + headerBottom > triggerBottom + 6;
    floatingMenu.classList.toggle('visible', passedHeroCta);
    if (!passedHeroCta) {
      floatingMenu.classList.remove('open');
      setTabState(false);
    }
  };

  if (floatingTab) {
    floatingTab.addEventListener('click', () => {
      if (!mobileQuery.matches) return;
      const isOpen = !floatingMenu.classList.contains('open');
      floatingMenu.classList.toggle('open', isOpen);
      setTabState(isOpen);
    });
  }

  floatingLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (!mobileQuery.matches) return;
      floatingMenu.classList.remove('open');
      setTabState(false);
    });
  });

  updateVisibility();

  window.addEventListener('touchstart', (event) => {
    if (!mobileQuery.matches || !floatingMenu.classList.contains('visible')) return;
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });

  window.addEventListener('touchend', (event) => {
    if (!mobileQuery.matches || !floatingMenu.classList.contains('visible')) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;
    const horizontalSwipe = Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3;
    if (!horizontalSwipe) return;

    const isOpen = floatingMenu.classList.contains('open');

    // Swipe left to close when drawer is open.
    if (isOpen && deltaX < -40) {
      floatingMenu.classList.remove('open');
      setTabState(false);
      return;
    }

    // Swipe right from the edge strip to open when drawer is closed.
    const nearRightEdge = touchStartX > window.innerWidth - 34;
    if (!isOpen && deltaX > 40 && nearRightEdge) {
      floatingMenu.classList.add('open');
      setTabState(true);
    }
  }, { passive: true });

  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', () => {
    if (!mobileQuery.matches) {
      floatingMenu.classList.remove('open');
      setTabState(false);
    }
    updateVisibility();
  });
})();

// If the user doesn't have a mail client set up, fall back to Gmail compose in a new tab.
document.querySelectorAll('a[data-gmail-fallback]').forEach(link => {
  link.addEventListener('click', () => {
    const fallback = link.dataset.gmailFallback;
    const start = Date.now();
    setTimeout(() => {
      if (Date.now() - start < 1500) {
        window.open(fallback, '_blank');
      }
    }, 1000);
  });
});

// Resume modal - opens from both the hero and contact section buttons.
(() => {
  const modal = document.getElementById('resume-modal');
  const openBtn = document.getElementById('resume-btn');
  const floatingOpenBtn = document.getElementById('resume-btn-floating');
  const closeBtn = modal.querySelector('.resume-close');
  const backdrop = modal.querySelector('.resume-modal-backdrop');

  const open = () => { modal.hidden = false; document.body.style.overflow = 'hidden'; };
  const close = () => { modal.hidden = true; document.body.style.overflow = ''; };

  openBtn.addEventListener('click', open);
  if (floatingOpenBtn) floatingOpenBtn.addEventListener('click', open);
  document.getElementById('resume-btn-contact').addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();

// Highlights the nav link that corresponds to the section currently in view.
(() => {
  const navLinks = document.querySelectorAll('.nav a[href^="#"]:not(.nav-top)');
  const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const intersecting = new Set();

  const setActive = () => {
    const active = sections.find(s => intersecting.has(s.id));
    navLinks.forEach(link => {
      link.classList.toggle('active', active ? link.getAttribute('href') === `#${active.id}` : false);
    });
    sections.forEach(s => {
      s.classList.toggle('active-section', active ? s.id === active.id : false);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        intersecting.add(entry.target.id);
      } else {
        intersecting.delete(entry.target.id);
      }
    });
    setActive();
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
})();

// Fades panels and cards in as they scroll into view; reverses on scroll up.
(() => {
  const isMobile = window.matchMedia('(max-width: 720px)').matches;
  const isTablet = window.matchMedia('(min-width: 721px) and (max-width: 1199px)').matches;
  const aboutSection = document.querySelector('#about');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (isTablet && entry.target === aboutSection) return;
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else if (!isMobile) {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: isMobile ? 0.12 : 0.2, rootMargin: isMobile ? '-4% 0px -20% 0px' : '-10% 0px -10% 0px' });

  document.querySelectorAll('.panel').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  const observeCards = () => {
    document.querySelectorAll('.card, .timeline-item').forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 4) * 80}ms`;
      observer.observe(el);
    });
  };

  if (document.readyState === 'complete') {
    observeCards();
  } else {
    window.addEventListener('load', observeCards);
  }

  if (isTablet && aboutSection) {
    aboutSection.classList.add('tablet-about-pre-scroll');
    aboutSection.classList.remove('visible');
    window.addEventListener('load', () => {
      requestAnimationFrame(() => {
        aboutSection.classList.add('visible');
      });
    }, { once: true });

    const syncAboutPreScroll = () => {
      const nearTop = window.scrollY <= 2;
      aboutSection.classList.toggle('tablet-about-pre-scroll', nearTop);
    };

    syncAboutPreScroll();
    window.addEventListener('scroll', syncAboutPreScroll, { passive: true });
    window.addEventListener('wheel', syncAboutPreScroll, { passive: true });
    window.addEventListener('touchmove', syncAboutPreScroll, { passive: true });
  }
})();

// Parallax exit for the hero - portrait and text drift at different rates as you scroll.
(() => {
  const portrait  = document.querySelector('.portrait-stack');
  const heroText  = document.querySelector('.hero-text');
  if (!portrait || !heroText) return;

  const mobileParallax = window.matchMedia('(max-width: 720px)').matches;

  function onScroll() {
    const heroEl = document.querySelector('.hero');
    const heroH  = heroEl ? heroEl.offsetHeight : window.innerHeight;
    const y      = window.scrollY;
    const divisor = mobileParallax ? heroH * 1.1 : heroH * 0.7;
    const p      = Math.min(y / divisor, 1);
    const fadeProgress = Math.min(y / divisor, 1);

    portrait.style.transform = `translateY(${-p * (mobileParallax ? 20 : 46)}px)`;
    portrait.style.opacity   = Math.max(0, 1 - fadeProgress);

    heroText.style.opacity   = 1;
    heroText.style.transform = `translateY(${-p * (mobileParallax ? 16 : 38)}px)`;
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Starfield canvas - twinkling stars + shooting stars
(() => {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [], shooters = [];
  let lastTs = 0, nextShot = 1500 + Math.random() * 2000;

  const beemo = new Image();
  beemo.src = './resources/images/beemo easter egg.png';

  const serverBeemo = new Image();
  serverBeemo.src = './resources/images/server rack beemo easter.png';

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeStar() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.3,
      base: Math.random() * 0.5 + 0.25,
      phase: Math.random() * Math.PI * 2,
      freq: Math.random() * 0.8 + 0.2,
    };
  }

  function spawnShooter() {
    const fromTop = Math.random() > 0.3;
    const roll = Math.random();
    const easterEgg = roll < 0.15 ? 'beemo' : roll < 0.30 ? 'serverBeemo' : null;
    shooters.push({
      x: fromTop ? Math.random() * W * 0.8 : W + 10,
      y: fromTop ? -10 : Math.random() * H * 0.4,
      vx: -(250 + Math.random() * 350),
      vy:   200 + Math.random() * 250,
      tail: 100 + Math.random() * 120,
      life: 1,
      easterEgg,
      easterEggSize: 32 + Math.random() * 64,
    });
  }

  function draw(ts) {
    const dt = Math.min((ts - lastTs) / 1000, 0.05);
    lastTs = ts;
    nextShot -= dt * 1000;

    ctx.clearRect(0, 0, W, H);

    for (const s of stars) {
      const a = s.base + Math.sin(ts / 1000 * s.freq + s.phase) * 0.25;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, a))})`;
      ctx.fill();
    }

    for (let i = shooters.length - 1; i >= 0; i--) {
      const s = shooters[i];
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.life -= dt * 0.65;

      if (s.life <= 0 || s.x < -150 || s.y > H + 100) {
        shooters.splice(i, 1);
        continue;
      }

      const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
      const nx = s.vx / speed;
      const ny = s.vy / speed;

      const eggImg = s.easterEgg === 'beemo' ? beemo : s.easterEgg === 'serverBeemo' ? serverBeemo : null;
      if (eggImg && eggImg.complete && eggImg.naturalWidth > 0) {
        const size = s.easterEggSize;
        ctx.save();
        ctx.globalAlpha = s.life;
        ctx.drawImage(eggImg, s.x - size / 2, s.y - size / 2, size, size);
        ctx.restore();
      } else {
        const tx = s.x - nx * s.tail;
        const ty = s.y - ny * s.tail;

        const g = ctx.createLinearGradient(tx, ty, s.x, s.y);
        g.addColorStop(0, 'rgba(255,255,255,0)');
        g.addColorStop(0.6, `rgba(200,240,255,${s.life * 0.35})`);
        g.addColorStop(1, `rgba(255,255,255,${s.life})`);

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.life})`;
        ctx.fill();
      }
    }

    if (nextShot <= 0) {
      spawnShooter();
      nextShot = 2000 + Math.random() * 4000;
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  stars = Array.from({ length: 200 }, makeStar);
  requestAnimationFrame(draw);
})();

// Typewriter effect - types each .typewriter element in sequence, accelerating per character with a bit of jitter.
(() => {
  const typewriters = Array.from(document.querySelectorAll(".typewriter"));
  const defaultDuration = 2;
  const typeSpeedFactor = 0.85;
  const delayScale = 1 / typeSpeedFactor;
  let cumulativeDelay = 0;
  let lastCursorEl = null;

  // Estimates total typing duration for accelerating mode so CSS delays can chain correctly.
  const estimateAccelDuration = (chars, base, min, factor) => {
    let total = 0;
    let current = base;
    for (let i = 0; i < chars; i += 1) {
      total += current;
      current = Math.max(min, current * factor);
    }
    return total / 1000;
  };

  const typeQueue = [...typewriters];

  const typeNext = () => {
    const el = typeQueue.shift();
    if (!el) {
      document.dispatchEvent(new CustomEvent('heroTypewriterDone'));
      return;
    }

    const hasHighlightedName = Boolean(el.querySelector('.highlight-name'));
    const lineDelayMultiplier = hasHighlightedName ? 1.35 : 1;

    const originalHTML = el.innerHTML;
    const text = (el.textContent || "").trim();
    const chars = text.length || 1;
    const pause = Number(el.dataset.pause) || 0;
    const startPause = Number(el.dataset.startpause) || 0;
    const accelerate = el.dataset.accelerate === "true";

    if (accelerate) {
      const isMobilePhone = window.matchMedia('(max-width: 720px)').matches;
      const maxPhoneTypeWidth = isMobilePhone ? Math.floor(window.innerWidth * 0.85) : Infinity;
      const lockMobileLine = window.matchMedia('(max-width: 720px)').matches && el.classList.contains('no-cursor');
      const measuredWidth = lockMobileLine ? Math.ceil(el.getBoundingClientRect().width) : 0;
      const lockedWidth = lockMobileLine ? Math.min(measuredWidth, maxPhoneTypeWidth) : 0;
      const base = (Number(el.dataset.speed) || 140) * delayScale * lineDelayMultiplier;
      const min = (Number(el.dataset.minspeed) || 80) * delayScale * lineDelayMultiplier;
      const factor = Number(el.dataset.accelfactor) || 0.9;
      const pauseMs = pause * 1000;

      el.textContent = "";
      el.style.whiteSpace = isMobilePhone ? "normal" : "nowrap";
      el.style.maxWidth = lockMobileLine && lockedWidth ? `${lockedWidth}px` : (isMobilePhone ? '85vw' : 'none');
      if (lockMobileLine && lockedWidth) {
        el.style.width = `${lockedWidth}px`;
        el.style.minWidth = `${lockedWidth}px`;
      }

        if (lastCursorEl && lastCursorEl !== el) {
          lastCursorEl.style.borderRightWidth = "0";
          lastCursorEl.style.animation = "none";
        }
        lastCursorEl = el;

        el.style.borderRightWidth = "3px";
        el.style.borderRightStyle = "solid";
        el.style.borderRightColor = "var(--ink)";
        const blink = getComputedStyle(el).getPropertyValue("--cursor-blink") || "0.8s";
        el.style.animation = `blink ${blink.trim()} step-end infinite`;

      el.textContent = " ";

      let current = base;
      let i = 0;

      const tick = () => {
        el.textContent = text.slice(0, i + 1);
        i += 1;
        if (i < chars) {
          current = Math.max(min, current * factor);
          const jitter = (Math.random() - 0.5) * current * 0.4;
          setTimeout(tick, Math.max(min, current + jitter));
        } else {
          el.innerHTML = originalHTML;
          el.style.whiteSpace = isMobilePhone ? "normal" : (lockMobileLine ? "nowrap" : "normal");
          el.style.maxWidth = lockMobileLine && lockedWidth ? `${lockedWidth}px` : (isMobilePhone ? '85vw' : 'none');
          el.style.borderRightWidth = "3px";
          el.style.animation = `blink ${blink.trim()} step-end infinite`;

          setTimeout(() => {
            typeNext();
          }, pauseMs);
        }
      };

      setTimeout(tick, startPause * 1000);
    } else {
      const duration = (Number(el.dataset.duration) || defaultDuration) * delayScale * lineDelayMultiplier;
      el.style.setProperty("--chars", chars);
      el.style.setProperty("--typing-duration", `${duration}s`);
      el.style.setProperty("--typing-delay", `${cumulativeDelay}s`);
      cumulativeDelay += duration + pause;

      el.classList.remove("active");
      void el.offsetWidth;
      el.classList.add("active");

      const onEnd = (e) => {
        if (e.animationName !== "typing") return;
        el.style.whiteSpace = "normal";
        el.style.maxWidth = "none";
        el.removeEventListener("animationend", onEnd);
        
        const pause = Number(el.dataset.pause) || 0;
        setTimeout(() => {
          typeNext();
        }, pause * 1000);
      };
      el.addEventListener("animationend", onEnd);
    }
  };

  typeNext();
})();

