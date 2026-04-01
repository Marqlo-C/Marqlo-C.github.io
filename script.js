const projects = [
  {
    title: "Toes Down — Multiplayer Study Game",
    summary: "Built a responsive React/Next.js experience for a collaborative study game with the Google Developer Student Club.",
    tags: ["React", "Next.js", "Team Project"],
    link: "https://github.com/Marqlo-C/Toes-Down"
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
    date: "2026",
    role: "B.S. Computer Science, Software Engineering emphasis",
    place: "UC Davis",
    blurb: "Projects with Google Developer Student Club plus group builds and hackathons; focus on dependable systems and expressive UX."
  },
  {
    date: "2024",
    role: "A.S. Computer Science, Mathematics & Physics (Summa Cum Laude)",
    place: "San Joaquin Delta College",
    blurb: "4.0 GPA; transferred with a foundation in math-heavy problem solving."
  },
  {
    date: "2023 — 2024",
    role: "Team Projects & Hackathons",
    place: "Student-led builds",
    blurb: "Gameplay programming crews and weekend hackathons—shipping small scopes quickly with teammates."
  },
  {
    date: "Jan 2020 — Jun 2021",
    role: "Regional Account Manager",
    place: "Cogent Communications, Los Angeles",
    blurb: "Hit monthly sales goals by pairing technical offerings with client needs; honed listening and communication."
  },
  {
    date: "2016 — 2020",
    role: "Sr. Business Account Executive",
    place: "Spectrum Enterprise, Los Angeles",
    blurb: "Led full sales cycles for fiber and cloud solutions; partnered with engineering teams to clear implementation blockers."
  },
  {
    date: "2013 — 2017",
    role: "Cryptologic Technician - Networking",
    place: "US Navy, Los Angeles",
    blurb: "Provided network-centric defense expertise; hands-on incident response and active defense strategies."
  }
];

const projectGrid = document.getElementById("project-grid");
const timelineList = document.getElementById("timeline-list");

function renderProjects() {
  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "card project-card";
    card.innerHTML = `
      <div class="card-title">${project.title}</div>
      <p>${project.summary}</p>
      <div class="chip-row">${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
      ${project.link ? `<a class="link" href="${project.link}" target="_blank" rel="noopener">View project →</a>` : ''}
    `;
    projectGrid.appendChild(card);
  });
}

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

// mailto fallback to Gmail if no mail app is configured
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

// Resume modal
(() => {
  const modal = document.getElementById('resume-modal');
  const openBtn = document.getElementById('resume-btn');
  const closeBtn = modal.querySelector('.resume-close');
  const backdrop = modal.querySelector('.resume-modal-backdrop');

  const open = () => { modal.hidden = false; document.body.style.overflow = 'hidden'; };
  const close = () => { modal.hidden = true; document.body.style.overflow = ''; };

  openBtn.addEventListener('click', open);
  document.getElementById('resume-btn-contact').addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();

// Active nav highlight
(() => {
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
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

// Scroll reveal
(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else if (entry.boundingClientRect.top > 0) {
        // Element is below the viewport — user scrolled back up, hide it
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

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
})();

// Starfield canvas — twinkling stars + shooting stars
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

// CSS-driven typewriter for elements with .typewriter
(() => {
  const typewriters = Array.from(document.querySelectorAll(".typewriter"));
  const defaultDuration = 2; // seconds
  let cumulativeDelay = 0;
  let lastCursorEl = null;

  const estimateAccelDuration = (chars, base, min, factor) => {
    let total = 0;
    let current = base;
    for (let i = 0; i < chars; i += 1) {
      total += current;
      current = Math.max(min, current * factor);
    }
    return total / 1000; // convert ms to seconds
  };

  const typeQueue = [...typewriters];

  const typeNext = () => {
    const el = typeQueue.shift();
    if (!el) return;

    const originalHTML = el.innerHTML;
    const text = (el.textContent || "").trim();
    const chars = text.length || 1;
    const pause = Number(el.dataset.pause) || 0; // seconds
    const startPause = Number(el.dataset.startpause) || 0; // seconds
    const accelerate = el.dataset.accelerate === "true";

    if (accelerate) {
      const base = Number(el.dataset.speed) || 140; // ms
      const min = Number(el.dataset.minspeed) || 80; // ms
      const factor = Number(el.dataset.accelfactor) || 0.9;
      const pauseMs = pause * 1000;

      // Prepare for manual typing
      el.textContent = "";
      el.style.whiteSpace = "nowrap";
      el.style.maxWidth = "none";

        // Move cursor to this element
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

      // Show cursor during any start pause.
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
          // Restore markup; keep cursor blinking here until next line starts.
          el.innerHTML = originalHTML;
          el.style.whiteSpace = "normal";
          el.style.maxWidth = "none";
          el.style.borderRightWidth = "3px";
          el.style.animation = `blink ${blink.trim()} step-end infinite`;

          setTimeout(() => {
            typeNext();
          }, pauseMs);
        }
      };

      // Wait for optional start pause, cursor blinking while idle.
      setTimeout(tick, startPause * 1000);
    } else {
      const duration = Number(el.dataset.duration) || defaultDuration;
      el.style.setProperty("--chars", chars);
      el.style.setProperty("--typing-duration", `${duration}s`);
      el.style.setProperty("--typing-delay", `${cumulativeDelay}s`);
      cumulativeDelay += duration + pause;

      // Reset and re-trigger animation
      el.classList.remove("active");
      // force reflow
      void el.offsetWidth;
      el.classList.add("active");

      // After typing finishes, allow wrapping so long text can break lines on small screens.
      const onEnd = (e) => {
        if (e.animationName !== "typing") return;
        el.style.whiteSpace = "normal";
        el.style.maxWidth = "none";
        el.removeEventListener("animationend", onEnd);
      };
      el.addEventListener("animationend", onEnd);
    }
  };

  typeNext();
})();

// Mobile menu toggle
(() => {
  const button = document.querySelector(".hamburger");
  const menu = document.getElementById("mobile-menu");
  if (!button || !menu) return;

  const toggle = () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
    menu.style.display = isOpen ? "none" : "block";
  };

  button.addEventListener("click", toggle);

  // Close on nav click
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      menu.hidden = true;
      menu.style.display = "none";
    });
  });
})();
