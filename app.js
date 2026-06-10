/* ==========================================================
   HYDRAULIC PRECIS — App (rendering layer)
   ----------------------------------------------------------
   data.js 의 콘텐츠를 HTML 에 그려주는 역할만 합니다.
   디자인/레이아웃 변경은 styles 영역(HTML <style>)에서만 하세요.
   ========================================================== */

(function (window) {
  'use strict';

  /* ---------- 1. STATE ---------- */
  var state = {
    lang: 'KR'                      // 현재 언어 (KR / EN / CN)
  };

  /* ---------- 2. HELPERS ---------- */

  /** 다국어 값(`{KR,EN,CN}`) 또는 일반 문자열을 받아 현재 언어 텍스트를 반환 */
  function t(v) {
    if (v == null) return '';
    if (typeof v === 'string') return v;
    if (typeof v === 'object') {
      return v[state.lang] || v.KR || v.EN || '';
    }
    return String(v);
  }

  /** "company.address.full" 같은 경로를 따라 siteData 의 값을 꺼냄 */
  function path(p) {
    var parts = p.split('.');
    var cur = window.siteData;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return null;
      cur = cur[parts[i]];
    }
    return cur;
  }

  /** HTML 안전하게 이스케이프 (사용자 입력 방어용) */
  function esc(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /** 컨테이너 찾기 (없으면 조용히 무시) */
  function $(sel) { return document.querySelector(sel); }

  /** innerHTML 설정 */
  function fill(sel, html) {
    var el = $(sel);
    if (el) el.innerHTML = html;
  }

  /* ---------- 3. ICONS (SVG library) ---------- */
  var ICONS = {
    sun:   '<svg viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>',
    cube:  '<svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    bolt:  '<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    pin:   '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail:  '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    menu:  '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    langGlobe: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowSmall: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowBig: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    gear:  '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9,12 11,14 15,10"/></svg>',
    weld:  '<svg viewBox="0 0 24 24"><path d="M3 12l3-9 3 9 3-9 3 9 3-9 3 9"/><path d="M3 12v8M21 12v8"/></svg>',
    plus:  '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>',
    grid:  '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    eye:   '<svg viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/><path d="M9 12l2 2 4-4"/></svg>',
    target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/></svg>',
    support: '<svg viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-7h3v5zM3 19a2 2 0 0 0 2 2h1v-7H3v5z"/></svg>',
    doc:   '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>',
    user:  '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    cnc:   '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>',
    iso14001: '<svg viewBox="0 0 24 24"><path d="M12 2C8 2 4 6 4 12s4 10 8 10 8-4 8-10S16 2 12 2z"/><path d="M12 22v-8M12 14c-3 0-5-2-5-5"/></svg>',
    iso3834: '<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    iso9001: '<svg viewBox="0 0 24 24"><path d="M12 2l2 5h5l-4 3 1.5 5L12 12l-4.5 3L9 10 5 7h5z"/></svg>',
    dnv:   '<svg viewBox="0 0 24 24"><path d="M3 6h18M5 6v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6"/><rect x="9" y="3" width="6" height="3" rx="1"/><path d="M12 13l3 3-3 3M9 16h6"/></svg>',
    asme:  '<svg viewBox="0 0 24 24"><path d="M8 4v16M12 4v16M16 4v16M5 7h14M5 17h14"/></svg>',
    atex:  '<svg viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="14" rx="2"/><path d="M4 10h16M9 6V4M15 6V4"/></svg>',
    jis:   '<svg viewBox="0 0 24 24"><path d="M12 2l4 6-4 14-4-14z"/><path d="M8 8h8"/></svg>',
    web:   '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>'
  };
  function icon(name) { return ICONS[name] || ''; }

  /* ---------- 4. HEADER ---------- */
  function renderHeader(activeId) {
    var d = window.siteData;
    var navItems = d.nav.map(function (n) {
      var cls = n.id === activeId ? ' class="active"' : '';
      return '<a href="' + esc(n.href) + '"' + cls + '>' + esc(t(n.label)) + '</a>';
    }).join('');

    var langItems = d.meta.supportedLanguages.map(function (code, i) {
      var active = code === state.lang ? ' class="active"' : '';
      var sep = i < d.meta.supportedLanguages.length - 1 ? '<span class="sep">/</span>' : '';
      return '<a href="#"' + active + ' data-lang="' + code + '">' + code + '</a>' + sep;
    }).join('');

    fill('#site-header', ''
      + '<div class="container">'
      +   '<a href="index.html" class="brand">' + esc(d.site.brand) + '</a>'
      +   '<nav class="nav">' + navItems + '</nav>'
      +   '<div class="lang">' + ICONS.langGlobe + langItems + '</div>'
      +   '<button class="menu-toggle" aria-label="' + esc(t(d.i18n.menuLabel)) + '">' + ICONS.menu + '</button>'
      + '</div>'
    );

    // Mobile menu toggle
    var btn = document.querySelector('.menu-toggle');
    if (btn) btn.addEventListener('click', function () {
      var nav = document.querySelector('.nav');
      var visible = nav.style.display === 'flex';
      nav.style.display = visible ? 'none' : 'flex';
      if (!visible) {
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '72px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'var(--surface)';
        nav.style.padding = '20px 24px';
        nav.style.borderBottom = '1px solid var(--outline-variant)';
        nav.style.gap = '16px';
      }
    });
  }

  /* ---------- 5. FOOTER ---------- */
  function renderFooter() {
    var d = window.siteData;

    var socials = d.site.social.map(function (s) {
      var ico = s.type === 'linkedin' ? ICONS.linkedin : ICONS.web;
      return '<a href="' + esc(s.url) + '" aria-label="' + esc(t(s.label)) + '">' + ico + '</a>';
    }).join('');

    var cols = d.footer.columns.map(function (c) {
      var lis = c.links.map(function (l) {
        return '<li><a href="' + esc(l.href) + '">' + esc(t(l.label)) + '</a></li>';
      }).join('');
      return '<div><h4>' + esc(t(c.title)) + '</h4><ul>' + lis + '</ul></div>';
    }).join('');

    var nl = d.footer.newsletter;
    var newsletterMsg = esc(t(nl.successMessage)).replace(/'/g, "\\'");

    fill('#site-footer', ''
      + '<div class="container">'
      +   '<div class="brand-block">'
      +     '<span class="brand-label">' + esc(d.site.brand) + '</span>'
      +     '<p>' + esc(t(d.site.tagline)) + '</p>'
      +     '<div class="footer-socials">' + socials + '</div>'
      +   '</div>'
      +   cols
      +   '<div>'
      +     '<h4>' + esc(t(nl.title)) + '</h4>'
      +     '<p style="font-size: 13px; color: var(--on-primary-container); margin-bottom: 14px;">' + esc(t(nl.description)) + '</p>'
      +     '<form data-newsletter="1" style="display:flex; gap:8px;">'
      +       '<input type="email" placeholder="' + esc(t(nl.placeholder)) + '" required style="flex:1; padding:10px 14px; border-radius:4px; border:1px solid rgba(255,255,255,0.15); background:rgba(255,255,255,0.05); color:#fff; font-size:13px;" />'
      +       '<button type="submit" class="btn btn-secondary" style="padding: 0 14px;">' + ICONS.arrowSmall + '</button>'
      +     '</form>'
      +   '</div>'
      + '</div>'
      + '<div class="copyright"><div class="container">' + esc(d.site.copyright) + '</div></div>'
    );

    // Newsletter submit
    var f = document.querySelector('form[data-newsletter="1"]');
    if (f) f.addEventListener('submit', function (e) {
      e.preventDefault();
      alert(t(nl.successMessage));
      f.reset();
    });
  }

  /* ---------- 6. PAGE: HOME ---------- */
  function renderHome() {
    var d = window.siteData;
    var p = d.pages.home;

    // HERO
    var heroActions = p.hero.actions.map(function (a) {
      return '<a href="' + esc(a.href) + '" class="btn ' + esc(a.style) + '">' + esc(t(a.label)) + '</a>';
    }).join('');
    fill('#home-hero', ''
      + '<div class="hero-bg industrial-1"></div>'
      + '<div class="container">'
      +   '<h1>' + t(p.hero.title) + '</h1>'
      +   '<p>' + esc(t(p.hero.subtitle)) + '</p>'
      +   '<div class="hero-actions">' + heroActions + '</div>'
      + '</div>'
    );

    // ABOUT
    var stats = p.about.stats.map(function (s) {
      return '<div><div class="stat-num">' + esc(s.value) + '</div><div class="stat-label">' + esc(t(s.label)) + '</div></div>';
    }).join('');
    fill('#home-about', ''
      + '<div class="container">'
      +   '<div class="about-grid">'
      +     '<div class="about-content">'
      +       '<span class="eyebrow">' + esc(p.about.eyebrow) + '</span>'
      +       '<h2>' + esc(t(p.about.title)) + '</h2>'
      +       '<p>' + esc(t(p.about.body)) + '</p>'
      +       '<div class="stats">' + stats + '</div>'
      +     '</div>'
      +     '<div class="about-visual"></div>'
      +   '</div>'
      + '</div>'
    );

    // PRODUCT GALLERY (category tiles)
    var tiles = d.productCategories.map(function (c) {
      var desc = c.description ? '<p>' + esc(t(c.description)) + '</p>' : '';
      return ''
        + '<a href="products.html" class="product-tile ' + esc(c.style) + '">'
        +   '<div>'
        +     '<span class="tile-cat">' + esc(t(c.category)) + '</span>'
        +     '<h3>' + esc(t(c.name)) + '</h3>'
        +     desc
        +   '</div>'
        + '</a>';
    }).join('');
    fill('#home-gallery', ''
      + '<div class="container">'
      +   '<div class="section-heading">'
      +     '<h2>' + esc(t(p.productGallery.title)) + '</h2>'
      +     '<p>' + esc(t(p.productGallery.subtitle)) + '</p>'
      +   '</div>'
      +   '<div class="product-grid">' + tiles + '</div>'
      + '</div>'
    );

    // CORE TECH
    var techItems = p.coreTech.items.map(function (it) {
      return ''
        + '<div class="core-tech-item">'
        +   '<div class="icon">' + icon(it.icon) + '</div>'
        +   '<div>'
        +     '<h4>' + esc(t(it.title)) + '</h4>'
        +     '<p>' + esc(t(it.description)) + '</p>'
        +   '</div>'
        + '</div>';
    }).join('');
    fill('#home-core-tech', ''
      + '<div class="container">'
      +   '<div class="core-tech-grid">'
      +     '<div class="lead">'
      +       '<h2>' + esc(t(p.coreTech.title)) + '</h2>'
      +       '<p>' + esc(t(p.coreTech.subtitle)) + '</p>'
      +     '</div>'
      +     '<div class="core-tech-list">' + techItems + '</div>'
      +   '</div>'
      + '</div>'
    );

    // LOCATION
    fill('#home-location', ''
      + '<div class="container">'
      +   '<div class="location-grid">'
      +     '<div class="location-content">'
      +       '<h3>' + esc(t(p.location.title)) + '</h3>'
      +       '<p>' + esc(t(p.location.body)) + '</p>'
      +       '<div class="location-info">'
      +         '<div class="row">' + ICONS.pin + '<span>' + esc(t(d.company.address.short)) + '</span></div>'
      +         '<div class="row">' + ICONS.phone + '<span>' + esc(d.company.phone) + '</span></div>'
      +         '<div class="row">' + ICONS.mail + '<span>' + esc(d.company.email.sales) + '</span></div>'
      +       '</div>'
      +     '</div>'
      +     '<div class="map-stub"><div class="map-pin"></div></div>'
      +   '</div>'
      + '</div>'
    );
  }

  /* ---------- 7. PAGE: PRODUCTS ---------- */
  function renderProducts() {
    var d = window.siteData;
    var p = d.pages.products;

    // HERO
    fill('#products-hero', ''
      + '<div class="hero-bg industrial-2"></div>'
      + '<div class="container">'
      +   '<h1>' + t(p.hero.title) + '</h1>'
      +   '<p>' + esc(t(p.hero.subtitle)) + '</p>'
      + '</div>'
    );

    // CATALOG (intro + cards)
    var actions = p.catalogIntro.actions.map(function (a) {
      return '<a href="' + esc(a.href) + '" class="btn ' + esc(a.style) + '">' + esc(t(a.label)) + '</a>';
    }).join('');

    var cards = d.products.map(function (pr) {
      return renderProductCard(pr);
    }).join('');

    fill('#products-catalog', ''
      + '<div class="container">'
      +   '<div class="catalog-intro">'
      +     '<div class="lead">'
      +       '<h2>' + esc(t(p.catalogIntro.title)) + '</h2>'
      +       '<p>' + esc(t(p.catalogIntro.body)) + '</p>'
      +     '</div>'
      +     '<div class="actions">' + actions + '</div>'
      +   '</div>'
      +   '<div class="product-cards">' + cards + '</div>'
      + '</div>'
    );

    // BOTTOM FEATURE ROW
    var feats = p.features.map(function (f) {
      return ''
        + '<div class="feat">'
        +   '<div class="icon-circle">' + icon(f.icon) + '</div>'
        +   '<h4>' + esc(t(f.title)) + '</h4>'
        +   '<p>' + esc(t(f.description)) + '</p>'
        + '</div>';
    }).join('');
    fill('#products-features', '<div class="container"><div class="grid grid-4">' + feats + '</div></div>');
  }

  function renderProductCard(pr) {
    var chipHtml = pr.chip ? '<span class="chip">' + esc(t(pr.chip)) + '</span>' : '';
    var cardClass = 'product-card';
    if (pr.variant === 'dark') cardClass += ' welded-card';
    if (pr.variant === 'smart-dark') cardClass += ' smart-card';

    // Smart card: content first, image second
    if (pr.variant === 'smart-dark') {
      var features = (pr.features || []).map(function (f) {
        return '<li>' + ICONS.check + esc(t(f)) + '</li>';
      }).join('');
      var ctaHtml = pr.cta
        ? '<a href="' + esc(pr.cta.href) + '" class="btn btn-secondary" style="margin-top: 8px;">' + esc(t(pr.cta.label)) + '</a>'
        : '';
      var industryHtml = chipHtml
        ? '<div style="display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; color: var(--inverse-primary); text-transform: uppercase; margin-bottom: 10px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><path d="M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M12 2v2M12 20v2M5 19l1.5-1.5M17.5 6.5L19 5"/><circle cx="12" cy="12" r="4"/></svg>' + esc(t(pr.chip)) + '</div>'
        : '';
      return ''
        + '<div class="' + cardClass + '">'
        +   '<div class="pc-row">'
        +     '<div class="pc-content">'
        +       '<div>'
        +         industryHtml
        +         '<h3>' + esc(t(pr.name)) + '</h3>'
        +         '<p class="desc">' + esc(t(pr.description)) + '</p>'
        +         '<ul class="feature-list">' + features + '</ul>'
        +         ctaHtml
        +       '</div>'
        +     '</div>'
        +     '<div class="pc-image ' + esc(pr.style) + '"></div>'
        +   '</div>'
        + '</div>';
    }

    // Welded (dark variant): footer-action style
    if (pr.variant === 'dark') {
      var fa = pr.footerAction || {};
      return ''
        + '<div class="' + cardClass + '">'
        +   '<div class="pc-row">'
        +     '<div class="pc-image ' + esc(pr.style) + '"></div>'
        +     '<div class="pc-content">'
        +       '<div>'
        +         chipHtml
        +         '<h3>' + esc(t(pr.name)) + '</h3>'
        +         '<p class="desc">' + esc(t(pr.description)) + '</p>'
        +       '</div>'
        +       '<div class="footer-action">'
        +         '<div>'
        +           '<div class="key">' + esc(t(fa.key)) + '</div>'
        +           '<div style="font-size: 14px; font-weight: 600; margin-top: 4px;">' + esc(t(fa.value)) + '</div>'
        +         '</div>'
        +         ICONS.arrowBig
        +       '</div>'
        +     '</div>'
        +   '</div>'
        + '</div>';
    }

    // Light variant card with optional specs or stats
    var bottomHtml = '';
    if (pr.specs && pr.specs.length) {
      var specRows = pr.specs.map(function (s) {
        var ico = s.icon === 'gear' ? ICONS.gear : ICONS.clock;
        return ''
          + '<div class="spec-row">'
          +   '<span class="key">' + ico + esc(t(s.key)) + '</span>'
          +   '<span class="val">' + esc(t(s.val)) + '</span>'
          + '</div>';
      }).join('');
      var tagsHtml = '';
      if (pr.tags && pr.tags.length) {
        tagsHtml = '<div class="tags">' + pr.tags.map(function (t1) {
          return '<span class="chip chip-gray">' + esc(t(t1)) + '</span>';
        }).join('') + '</div>';
      }
      bottomHtml = specRows + tagsHtml;
    } else if (pr.stats && pr.stats.length) {
      var statsHtml = pr.stats.map(function (s) {
        return ''
          + '<div>'
          +   '<div style="font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--on-surface-variant); margin-bottom: 4px;">' + esc(t(s.label)) + '</div>'
          +   '<div style="font-size: 18px; font-weight: 700;">' + esc(t(s.value)) + '</div>'
          + '</div>';
      }).join('');
      bottomHtml = '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px; padding-top: 20px; border-top: 1px solid var(--outline-variant);">' + statsHtml + '</div>';
    }

    return ''
      + '<div class="' + cardClass + '">'
      +   '<div class="pc-row">'
      +     '<div class="pc-image ' + esc(pr.style) + '"></div>'
      +     '<div class="pc-content">'
      +       '<div>'
      +         chipHtml
      +         '<h3>' + esc(t(pr.name)) + '</h3>'
      +         '<p class="desc">' + esc(t(pr.description)) + '</p>'
      +         bottomHtml
      +       '</div>'
      +     '</div>'
      +   '</div>'
      + '</div>';
  }

  /* ---------- 8. PAGE: TECHNOLOGY ---------- */
  function renderTechnology() {
    var d = window.siteData;
    var p = d.pages.technology;

    // HERO
    fill('#tech-hero', ''
      + '<div class="hero-bg dark-flat"></div>'
      + '<div class="container">'
      +   '<span class="hero-eyebrow">' + esc(p.hero.eyebrow) + '</span>'
      +   '<h1>' + esc(t(p.hero.title)) + '</h1>'
      +   '<p>' + esc(t(p.hero.subtitle)) + '</p>'
      + '</div>'
    );

    // PROCESS
    var procCards = p.process.cards.map(function (c) {
      return ''
        + '<div class="process-card">'
        +   '<div class="process-img ' + esc(c.imageStyle) + '"></div>'
        +   '<div class="process-content">'
        +     '<div class="icon">' + icon(c.iconName) + '</div>'
        +     '<div>'
        +       '<h3>' + esc(t(c.title)) + '</h3>'
        +       '<p>' + esc(t(c.description)) + '</p>'
        +     '</div>'
        +   '</div>'
        + '</div>';
    }).join('');
    fill('#tech-process', ''
      + '<div class="container">'
      +   '<div class="section-label"><h2>' + esc(t(p.process.title)) + '</h2></div>'
      +   '<p style="font-size: 14px; color: var(--on-surface-variant); max-width: 720px; margin-bottom: 32px;">' + esc(t(p.process.body)) + '</p>'
      +   '<div class="process-cards">' + procCards + '</div>'
      + '</div>'
    );

    // QUALITY
    var qmCards = p.quality.items.map(function (q) {
      var bullets = (q.bullets || []).map(function (b) {
        return '<li>' + esc(t(b)) + '</li>';
      }).join('');
      return ''
        + '<div class="qm-card">'
        +   '<div class="icon-square">' + icon(q.iconName) + '</div>'
        +   '<h3>' + esc(t(q.title)) + '</h3>'
        +   '<p>' + esc(t(q.description)) + '</p>'
        +   '<ul>' + bullets + '</ul>'
        + '</div>';
    }).join('');
    fill('#tech-quality', ''
      + '<div class="container">'
      +   '<div class="section-heading">'
      +     '<span class="eyebrow">' + esc(p.quality.eyebrow) + '</span>'
      +     '<h2 style="margin-top: 8px;">' + esc(t(p.quality.title)) + '</h2>'
      +   '</div>'
      +   '<div class="qm-grid">' + qmCards + '</div>'
      + '</div>'
    );

    // INNOVATION
    var innItems = p.innovation.items.map(function (it) {
      return ''
        + '<div class="innov-item">'
        +   '<div class="icon">' + icon(it.iconName) + '</div>'
        +   '<div>'
        +     '<h4>' + esc(t(it.title)) + '</h4>'
        +     '<p>' + esc(t(it.description)) + '</p>'
        +   '</div>'
        + '</div>';
    }).join('');
    fill('#tech-innovation', ''
      + '<div class="container">'
      +   '<div class="innov-grid">'
      +     '<div class="innov-content">'
      +       '<span class="eyebrow">' + esc(p.innovation.eyebrow) + '</span>'
      +       '<h2>' + esc(t(p.innovation.title)) + '</h2>'
      +       '<div class="innov-list">' + innItems + '</div>'
      +     '</div>'
      +     '<div class="innov-visual">'
      +       '<div class="callout-15">'
      +         '<div class="num">' + esc(p.innovation.callout.number) + '</div>'
      +         '<div class="lbl">' + esc(t(p.innovation.callout.label)) + '</div>'
      +       '</div>'
      +     '</div>'
      +   '</div>'
      + '</div>'
    );

    // MATRIX
    var heads = p.matrix.headers.map(function (h) { return '<th>' + esc(t(h)) + '</th>'; }).join('');
    var rows  = p.matrix.rows.map(function (r) {
      return '<tr>'
        + '<td>' + esc(t(r.item)) + '</td>'
        + '<td>' + esc(t(r.range)) + '</td>'
        + '<td class="precision">' + esc(t(r.precision)) + '</td>'
        + '<td class="standard">' + esc(t(r.standard)) + '</td>'
        + '</tr>';
    }).join('');
    fill('#tech-matrix', ''
      + '<div class="container">'
      +   '<div class="lead">'
      +     '<h2>' + esc(t(p.matrix.title)) + '</h2>'
      +     '<p>' + esc(t(p.matrix.subtitle)) + '</p>'
      +   '</div>'
      +   '<div style="overflow-x: auto;">'
      +     '<table class="matrix-table">'
      +       '<thead><tr>' + heads + '</tr></thead>'
      +       '<tbody>' + rows + '</tbody>'
      +     '</table>'
      +   '</div>'
      + '</div>'
    );
  }

  /* ---------- 9. PAGE: CERTIFICATIONS ---------- */
  function renderCertifications() {
    var d = window.siteData;
    var p = d.pages.certifications;
    var c = d.certifications;

    // HERO
    fill('#cert-hero', ''
      + '<div class="hero-bg"></div>'
      + '<div class="container">'
      +   '<span class="hero-eyebrow">' + esc(t(p.hero.eyebrow)) + '</span>'
      +   '<h1>' + esc(t(p.hero.title)) + '</h1>'
      +   '<p>' + esc(t(p.hero.subtitle)) + '</p>'
      + '</div>'
    );

    // ISO
    var isoCards = c.iso.map(function (item) {
      var ico = ICONS[item.id.replace(/-/g, '')] || ICONS.iso9001;
      if (item.id === 'iso-9001')    ico = ICONS.iso9001;
      if (item.id === 'iso-3834-2')  ico = ICONS.iso3834;
      if (item.id === 'iso-14001')   ico = ICONS.iso14001;
      return ''
        + '<div class="card">'
        +   '<div class="card-icon-wrap">' + ico + '</div>'
        +   '<h3>' + esc(t(item.title)) + '</h3>'
        +   '<p>' + esc(t(item.description)) + '</p>'
        +   '<div class="card-footer">' + esc(t(item.footer)) + '</div>'
        + '</div>';
    }).join('');
    fill('#cert-iso', ''
      + '<div class="container">'
      +   '<div class="section-label">'
      +     '<h2>' + esc(t(p.sections.iso.heading)) + '</h2>'
      +     '<span class="sublabel">' + esc(t(p.sections.iso.sublabel)) + '</span>'
      +   '</div>'
      +   '<div class="cert-cards-3">' + isoCards + '</div>'
      + '</div>'
    );

    // SAFETY
    var safetyCards = c.safety.map(function (item) {
      return ''
        + '<div class="cert-card-row">'
        +   '<div class="badge">' + esc(item.badge) + '</div>'
        +   '<div class="content">'
        +     '<h3>' + esc(t(item.title)) + '</h3>'
        +     '<p>' + esc(t(item.description)) + '</p>'
        +   '</div>'
        + '</div>';
    }).join('');
    fill('#cert-safety', ''
      + '<div class="container">'
      +   '<div class="section-label">'
      +     '<h2>' + esc(t(p.sections.safety.heading)) + '</h2>'
      +     '<span class="sublabel">' + esc(t(p.sections.safety.sublabel)) + '</span>'
      +   '</div>'
      +   '<div class="cert-cards-2">' + safetyCards + '</div>'
      + '</div>'
    );

    // INDUSTRY
    var industryCards = c.industry.map(function (item) {
      var ico = ICONS[item.id] || ICONS.shield;
      return ''
        + '<div class="cert-card-mini">'
        +   '<div class="icon-mini">' + ico + '</div>'
        +   '<h4>' + esc(t(item.title)) + '</h4>'
        +   '<p>' + esc(t(item.description)) + '</p>'
        + '</div>';
    }).join('');
    fill('#cert-industry', ''
      + '<div class="container">'
      +   '<div class="section-label">'
      +     '<h2>' + esc(t(p.sections.industry.heading)) + '</h2>'
      +     '<span class="sublabel">' + esc(t(p.sections.industry.sublabel)) + '</span>'
      +   '</div>'
      +   '<div class="cert-cards-4">' + industryCards + '</div>'
      + '</div>'
    );

    // CTA
    var ctaActions = p.cta.actions.map(function (a) {
      return '<a href="' + esc(a.href) + '" class="btn ' + esc(a.style) + '">' + esc(t(a.label)) + '</a>';
    }).join('');
    fill('#cert-cta', ''
      + '<div class="container">'
      +   '<h2>' + esc(t(p.cta.title)) + '</h2>'
      +   '<p>' + esc(t(p.cta.body)) + '</p>'
      +   '<div class="actions">' + ctaActions + '</div>'
      + '</div>'
    );
  }

  /* ---------- 10. PAGE: CONTACT ---------- */
  function renderContact() {
    var d = window.siteData;
    var p = d.pages.contact;

    // INTRO
    fill('#contact-intro', ''
      + '<div class="container">'
      +   '<span class="eyebrow">' + esc(t(p.intro.eyebrow)) + '</span>'
      +   '<h1>' + esc(t(p.intro.title)) + '</h1>'
      +   '<p>' + esc(t(p.intro.subtitle)) + '</p>'
      + '</div>'
    );

    // GRID (form + sidebar)
    var f = p.form;
    var formHtml = ''
      + '<form id="inquiryForm">'
      +   '<div class="form-row">'
      +     '<div class="form-group">'
      +       '<label for="name">' + esc(t(f.fields.name.label)) + '</label>'
      +       '<input type="text" id="name" name="name" placeholder="' + esc(t(f.fields.name.placeholder)) + '"' + (f.fields.name.required ? ' required' : '') + ' />'
      +     '</div>'
      +     '<div class="form-group">'
      +       '<label for="company">' + esc(t(f.fields.company.label)) + '</label>'
      +       '<input type="text" id="company" name="company" placeholder="' + esc(t(f.fields.company.placeholder)) + '" />'
      +     '</div>'
      +   '</div>'
      +   '<div class="form-group">'
      +     '<label for="email">' + esc(t(f.fields.email.label)) + '</label>'
      +     '<input type="email" id="email" name="email" placeholder="' + esc(t(f.fields.email.placeholder)) + '"' + (f.fields.email.required ? ' required' : '') + ' />'
      +   '</div>'
      +   '<div class="form-group">'
      +     '<label for="message">' + esc(t(f.fields.message.label)) + '</label>'
      +     '<textarea id="message" name="message" placeholder="' + esc(t(f.fields.message.placeholder)) + '"' + (f.fields.message.required ? ' required' : '') + '></textarea>'
      +   '</div>'
      +   '<label class="form-consent">'
      +     '<input type="checkbox" required />'
      +     '<span>' + esc(t(f.consent)) + ' <a href="' + esc(f.consentLink.href) + '">' + esc(t(f.consentLink.label)) + '</a></span>'
      +   '</label>'
      +   '<button type="submit" class="btn btn-primary">' + esc(t(f.submit)) + ICONS.arrowSmall + '</button>'
      + '</form>';

    // HQ ROWS — use path() to look up nested company values
    var hqRows = p.hqCard.rows.map(function (r) {
      var ico = ICONS[r.iconName] || '';
      var val = path(r.valueKey);
      var valStr = (val && typeof val === 'object' && val.KR != null) ? t(val) : esc(val == null ? '' : val);
      return ''
        + '<div class="hq-row">'
        +   '<div class="icon">' + ico + '</div>'
        +   '<div class="info">'
        +     '<div class="label">' + esc(t(r.label)) + '</div>'
        +     '<div class="val">' + valStr + '</div>'
        +   '</div>'
        + '</div>';
    }).join('');

    var hoursLabel = esc(t(d.company.hours.statusLabel));
    var hoursTitle = esc(t(d.company.hours.label));
    var hoursStatus = esc(t(d.company.hours.openLabel));
    var hoursTime = esc(t(d.company.hours.schedule));

    var tilesHtml = p.tiles.map(function (tl) {
      var ico = ICONS[tl.iconName] || '';
      return '<a class="contact-tile" href="' + esc(tl.href) + '">' + ico + esc(t(tl.label)) + '</a>';
    }).join('');

    fill('#contact-grid', ''
      + '<div class="container">'
      +   '<div class="contact-grid">'
      +     '<div class="form-card">'
      +       '<h2>' + esc(t(f.title)) + '</h2>'
      +       formHtml
      +     '</div>'
      +     '<aside class="contact-side">'
      +       '<div class="hq-card">'
      +         '<h3>' + esc(t(p.hqCard.title)) + '</h3>'
      +         hqRows
      +       '</div>'
      +       '<div class="hours-card">'
      +         '<div class="hours-head">'
      +           '<div>'
      +             '<div class="label">' + hoursLabel + '</div>'
      +             '<h4>' + hoursTitle + '</h4>'
      +           '</div>'
      +           '<div class="right-col">'
      +             '<div class="status">' + hoursStatus + '</div>'
      +             '<div class="time">' + hoursTime + '</div>'
      +           '</div>'
      +         '</div>'
      +       '</div>'
      +       '<div class="contact-tiles">' + tilesHtml + '</div>'
      +     '</aside>'
      +   '</div>'
      +   '<div class="contact-map">'
      +     '<div class="map-marker-card">' + ICONS.support
      +       '<div>'
      +         '<span class="lbl">' + esc(d.site.brand) + '</span>'
      +         '<span class="name">' + esc(t(d.company.region)) + '</span>'
      +       '</div>'
      +     '</div>'
      +     '<div class="map-zoom">'
      +       '<button aria-label="확대">+</button>'
      +       '<button aria-label="축소">−</button>'
      +     '</div>'
      +   '</div>'
      + '</div>'
    );

    // Form submit
    var form = document.getElementById('inquiryForm');
    if (form) form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert(t(f.successMessage));
      form.reset();
    });
  }

  /* ---------- 11. BOOT ---------- */
  var pageRenderers = {
    home:           renderHome,
    products:       renderProducts,
    technology:     renderTechnology,
    certifications: renderCertifications,
    contact:        renderContact
  };

  function boot(pageId) {
    if (!window.siteData) {
      console.error('siteData not loaded. Make sure data.js is included before app.js.');
      return;
    }
    renderHeader(pageId);
    var r = pageRenderers[pageId];
    if (r) r();
    renderFooter();
  }

  /* ---------- 12. EXPORT ---------- */
  window.HP = {
    boot: boot,
    t: t,
    setLanguage: function (code) {
      state.lang = code;
      // re-render currently active page
      var activeNav = document.querySelector('.nav a.active');
      var id = 'home';
      if (activeNav) {
        var href = activeNav.getAttribute('href');
        var match = window.siteData.nav.find(function (n) { return n.href === href; });
        if (match) id = match.id;
      }
      boot(id);
    }
  };

})(window);
