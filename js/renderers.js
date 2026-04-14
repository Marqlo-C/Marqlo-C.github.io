// DOM render helpers for data-backed sections.
(() => {
  function renderProjects(projects, root) {
    if (!root) return;

    projects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "card project-card";

      const starIcon = `<span class="project-link-icon project-link-icon-star" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2.5l2.8 6.4 6.7 2.4-6.7 2.4L12 20.1l-2.8-6.4-6.7-2.4 6.7-2.4z"></path></svg></span>`;
      const links = [
        project.liveLink ? `<a class="link" href="${project.liveLink}" target="_blank" rel="noopener"><span>Live site ↗</span></a>` : "",
        project.link ? `<a class="link" href="${project.link}" target="_blank" rel="noopener"><span>View project</span>${starIcon}</a>` : ""
      ].filter(Boolean).join("");

      card.innerHTML = `
        <div class="card-title">${project.title}</div>
        <p>${project.summary}</p>
        <div class="chip-row">${project.tags.map((tag) => `<span class="chip chip-token">${tag}</span>`).join("")}</div>
        ${links}
      `;

      root.appendChild(card);
    });
  }

  function renderTimeline(experiences, root) {
    if (!root) return;

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

      root.appendChild(entry);
    });
  }

  window.SiteRenderers = { renderProjects, renderTimeline };
})();
