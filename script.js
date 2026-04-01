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
    link: "https://www.linkedin.com/in/marq-lott/details/projects/"
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
      <a class="link" href="${project.link}">View project →</a>
    `;
    projectGrid.appendChild(card);
  });
}

function renderTimeline() {
  experiences.forEach((item) => {
    const entry = document.createElement("article");
    entry.className = "timeline-item";
    entry.innerHTML = `
      <div class="timeline-date">${item.date}</div>
      <div>
        <div class="timeline-role">${item.role}</div>
        <div class="timeline-meta">${item.place}</div>
        <p>${item.blurb}</p>
      </div>
    `;
    timelineList.appendChild(entry);
  });
}

renderProjects();
renderTimeline();

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
          setTimeout(tick, current);
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
