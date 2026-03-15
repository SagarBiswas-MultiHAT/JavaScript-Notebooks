const state = {
    catalog: null,
    activeCategory: 'all',
    query: ''
};

const elements = {
    statNotebooks: document.getElementById('stat-notebooks'),
    statPages: document.getElementById('stat-pages'),
    statSections: document.getElementById('stat-sections'),
    trackGrid: document.getElementById('track-grid'),
    notebookGrid: document.getElementById('notebook-grid'),
    filterGroup: document.getElementById('filter-group'),
    timeline: document.getElementById('timeline'),
    searchInput: document.getElementById('search-input'),
    resultsCount: document.getElementById('results-count'),
    currentYear: document.getElementById('current-year')
};

const TRACK_DETAILS = {
    foundations: {
        hero: 'JavaScript Basics',
        description:
            'Master the language fundamentals, operators, arrays, objects, constructors, and essential Math/Date APIs before moving into DOM work.'
    },
    'browser-apis': {
        hero: 'Web Storage API, DOM, BOM',
        description:
            'Build browser-aware interfaces by selecting elements, handling events, and understanding the BOM plus storage trade-offs.'
    },
    'modern-js': {
        hero: 'Best Practices, Error Handling, Canvas & ES6+',
        description:
            'Adopt defensive coding habits, modern syntax, modules, classes, and asynchronous thinking that production JavaScript uses.'
    }
};

const PROJECTS_TRACK = {
    id: 'projects',
    label: 'Project exploration',
    hero: 'Companion security and utility repos',
    description:
        'Apply what you learn with practical labs, QR utilities, multi-factor auth experiments, password scoring, and XSS defense tooling.',
    metrics: ['5 companion projects'],
    titles: [
        'WiFi QR Generator',
        'BruteforceLab1',
        'Multi-FA-Auth',
        'Password Strength Checker',
        'XSS WebGuard'
    ]
};

let revealObserver = null;

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function loadCatalog() {
    return fetch('data/notebooks.json', { cache: 'no-store' }).then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to load catalog: ${response.status}`);
        }

        return response.json();
    });
}

function updateStats(catalog) {
    elements.statNotebooks.textContent = String(catalog.stats.notebooks);
    elements.statPages.textContent = String(catalog.stats.pages);
    elements.statSections.textContent = String(catalog.stats.sections);
}

function renderTracks(catalog) {
    const grouped = catalog.categories.map((category) => {
        const notebooks = catalog.notebooks.filter((notebook) => notebook.category === category.id);
        const titles = notebooks.map((notebook) => notebook.title);
        const pageTotal = notebooks.reduce((sum, notebook) => sum + notebook.pages, 0);

        return {
            ...category,
            count: notebooks.length,
            pageTotal,
            titles,
            metrics: [`${notebooks.length} notebook${notebooks.length === 1 ? '' : 's'}`, `${pageTotal} pages`]
        };
    });

    const tracks = grouped.map((group) => ({
        ...group,
        hero: TRACK_DETAILS[group.id]?.hero || group.titles[0] || group.label,
        description: TRACK_DETAILS[group.id]?.description || ''
    }));

    tracks.push(PROJECTS_TRACK);

    elements.trackGrid.innerHTML = tracks
        .map((group) => {
            return `
        <article class="track-card">
          <div class="track-card-head">
            <p class="track-eyebrow">${escapeHtml(group.label)}</p>
            <h3>${escapeHtml(group.hero)}</h3>
          </div>
          <div class="track-metrics">
            ${(group.metrics || [])
                    .map((metric) => `<span>${escapeHtml(metric)}</span>`)
                    .join('')}
          </div>
          <p class="track-description">${escapeHtml(group.description || '')}</p>
          <p class="track-list">${escapeHtml((group.titles || []).join(', '))}</p>
        </article>
      `;
        })
        .join('');

    setupRevealAnimations();
}

function renderFilters(catalog) {
    const filters = [{ id: 'all', label: 'All' }, ...catalog.categories];

    elements.filterGroup.innerHTML = filters
        .map(
            (filter) => `
        <button
          type="button"
          class="filter-button"
          data-filter="${escapeHtml(filter.id)}"
          aria-pressed="${filter.id === state.activeCategory}"
        >
          ${escapeHtml(filter.label)}
        </button>
      `
        )
        .join('');

    elements.filterGroup.querySelectorAll('[data-filter]').forEach((button) => {
        button.addEventListener('click', () => {
            state.activeCategory = button.dataset.filter;
            renderFilters(catalog);
            renderNotebookGrid(catalog);
        });
    });
}

function getFilteredNotebooks(catalog) {
    const query = state.query.trim().toLowerCase();

    return catalog.notebooks.filter((notebook) => {
        const matchesCategory =
            state.activeCategory === 'all' || notebook.category === state.activeCategory;

        if (!matchesCategory) {
            return false;
        }

        if (!query) {
            return true;
        }

        const searchableText = [
            notebook.title,
            notebook.summary,
            notebook.level,
            notebook.duration,
            ...notebook.highlights,
            ...notebook.sections,
            ...notebook.outcomes
        ]
            .join(' ')
            .toLowerCase();

        return searchableText.includes(query);
    });
}

function renderNotebookGrid(catalog) {
    const notebooks = getFilteredNotebooks(catalog);

    elements.resultsCount.textContent = `Showing ${notebooks.length} of ${catalog.notebooks.length} notebooks`;

    if (notebooks.length === 0) {
        elements.notebookGrid.innerHTML = `
      <div class="notice">
        <strong>No matches found.</strong>
        <p>Try a broader keyword or switch back to the full catalog.</p>
      </div>
    `;
        setupRevealAnimations();
        return;
    }

    elements.notebookGrid.innerHTML = notebooks
        .map((notebook) => {
            const pdfHref = encodeURI(notebook.file);
            const highlights = notebook.sections.slice(0, 6);
            const outcomes = notebook.outcomes.slice(0, 3);

            return `
        <article class="notebook-card">
          <div class="card-accent"></div>
          <div class="card-body">
            <div class="card-topline">
              <span class="card-part">Part ${notebook.part}</span>
              <span class="meta-pill">${escapeHtml(notebook.level)}</span>
            </div>

            <div>
              <h3>${escapeHtml(notebook.title)}</h3>
              <p class="card-copy">${escapeHtml(notebook.summary)}</p>
            </div>

            <div class="meta-row">
              <span class="meta-pill">${notebook.pages} pages</span>
              <span class="meta-pill">${escapeHtml(notebook.duration)}</span>
              <span class="meta-pill">${escapeHtml(
                catalog.categories.find((category) => category.id === notebook.category)?.label ||
                notebook.category
            )}</span>
            </div>

            <div>
              <p class="section-title">Key topics</p>
              <div class="section-row">
                ${highlights
                    .map((section) => `<span class="section-pill">${escapeHtml(section)}</span>`)
                    .join('')}
              </div>
            </div>

            <div>
              <p class="section-title">Learning outcomes</p>
              <div class="outcome-row">
                ${outcomes
                    .map((outcome) => `<span class="outcome-pill">${escapeHtml(outcome)}</span>`)
                    .join('')}
              </div>
            </div>

            <div class="card-actions">
              <a class="card-link primary" href="${pdfHref}" target="_blank" rel="noreferrer">
                Open PDF
              </a>
              <a class="card-link secondary" href="${pdfHref}" download>
                Download
              </a>
            </div>
          </div>
        </article>
      `;
        })
        .join('');

    setupRevealAnimations();
}

function renderTimeline(catalog) {
    elements.timeline.innerHTML = catalog.notebooks
        .map(
            (notebook) => `
        <article class="timeline-item">
          <div class="timeline-step">${notebook.part}</div>
          <div>
            <h3>${escapeHtml(notebook.title)}</h3>
            <p>${escapeHtml(notebook.summary)}</p>
          </div>
        </article>
      `
        )
        .join('');

    setupRevealAnimations();
}

function setupRevealAnimations() {
    const targets = document.querySelectorAll(
        '.hero, .section, .hero-panel, .track-card, .notebook-card, .timeline-item, .value-card, .project-card, .faq-list details, .related-list li'
    );

    if (!targets.length) {
        return;
    }

    targets.forEach((target) => {
        target.classList.add('reveal');
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        targets.forEach((target) => target.classList.add('is-visible'));
        return;
    }

    if (!('IntersectionObserver' in window)) {
        targets.forEach((target) => target.classList.add('is-visible'));
        return;
    }

    if (revealObserver) {
        revealObserver.disconnect();
    }

    revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: '0px 0px -8% 0px'
        }
    );

    targets.forEach((target) => {
        if (!target.classList.contains('is-visible')) {
            revealObserver.observe(target);
        }
    });
}

function renderPage(catalog) {
    updateStats(catalog);
    renderTracks(catalog);
    renderFilters(catalog);
    renderNotebookGrid(catalog);
    renderTimeline(catalog);
    elements.currentYear.textContent = `Updated ${catalog.lastUpdated}`;
    setupRevealAnimations();
}

function renderError(error) {
    const message = escapeHtml(error.message || 'Unknown error');

    elements.notebookGrid.innerHTML = `
    <div class="notice">
      <strong>Catalog unavailable.</strong>
      <p>${message}</p>
      <p>Serve this repository through a local or hosted web server so the structured data file can be loaded.</p>
    </div>
  `;

    setupRevealAnimations();
}

async function init() {
    elements.currentYear.textContent = `${new Date().getFullYear()}`;

    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', (event) => {
            state.query = event.target.value;
            if (state.catalog) {
                renderNotebookGrid(state.catalog);
            }
        });
    }

    try {
        state.catalog = await loadCatalog();
        renderPage(state.catalog);
    } catch (error) {
        renderError(error);
    }
}

init();
