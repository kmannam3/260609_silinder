/* ==========================================================
   HYDRAULIC PRECIS — Admin App
   ----------------------------------------------------------
   사이드바·헤더 렌더링과 메뉴 구성을 한 곳에서 관리합니다.
   ========================================================== */

(function (window) {
  'use strict';

  /* ---------- 메뉴 정의 ---------- */
  var menu = [
    { id: 'dashboard',      label: 'Dashboard',     icon: 'dashboard', href: 'dashboard.html' },
    { id: 'inquiries',      label: '문의 관리',     icon: 'mail',      href: '#' },
    { id: 'products',       label: '제품 관리',     icon: 'box',       href: '#' },
    { id: 'certifications', label: '인증서 관리',   icon: 'shield',    href: '#' },
    { id: 'history',        label: '연혁 관리',     icon: 'clock',     href: '#' },
    { id: 'translations',   label: '다국어 관리',   icon: 'globe',     href: '#' },
    { id: 'settings',       label: '사이트 설정',   icon: 'gear',      href: '#' }
  ];

  var brand = 'HYDRAULIC PRECIS';

  var user = {
    name: 'Admin',
    initials: 'AD',
    email: 'admin@hp-precis.com'
  };

  /* ---------- 아이콘 라이브러리 ---------- */
  var ICONS = {
    dashboard: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>',
    mail:      '<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    box:       '<svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>',
    shield:    '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    clock:     '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    globe:     '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    gear:      '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    bell:      '<svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    logout:    '<svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>',
    plus:      '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>',
    arrowUp:   '<svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    arrowDown: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>'
  };

  /* ---------- 헬퍼 ---------- */
  function esc(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function $(sel) { return document.querySelector(sel); }

  /* ---------- 사이드바 ---------- */
  function renderSidebar(activeId) {
    var items = menu.map(function (m) {
      var cls = m.id === activeId ? ' class="active"' : '';
      var ico = ICONS[m.icon] || '';
      return '<li><a href="' + esc(m.href) + '"' + cls + '>' + ico + '<span>' + esc(m.label) + '</span></a></li>';
    }).join('');

    var el = $('#admin-sidebar');
    if (!el) return;
    el.innerHTML = ''
      + '<div class="sidebar-brand"><span class="dot"></span>' + esc(brand) + '</div>'
      + '<div class="sidebar-section-label">메뉴</div>'
      + '<ul class="sidebar-menu">' + items + '</ul>'
      + '<div class="sidebar-footer">© 2024 HP Admin</div>';
  }

  /* ---------- 헤더 ---------- */
  function renderHeader(pageTitle) {
    var el = $('#admin-header');
    if (!el) return;
    el.innerHTML = ''
      + '<h1>' + esc(pageTitle) + '</h1>'
      + '<div class="admin-header-right">'
      +   '<button class="btn-icon" aria-label="알림">' + ICONS.bell + '</button>'
      +   '<button class="btn-icon" id="adm-logout" aria-label="로그아웃">' + ICONS.logout + '</button>'
      +   '<div class="admin-avatar">' + esc(user.initials) + '</div>'
      + '</div>';

    // Logout button → login.html (인증 없음, 단순 이동)
    var logoutBtn = document.getElementById('adm-logout');
    if (logoutBtn) logoutBtn.addEventListener('click', function () {
      window.location.href = 'login.html';
    });
  }

  /* ---------- BOOT ---------- */
  function renderLayout(activeId, pageTitle) {
    renderSidebar(activeId);
    renderHeader(pageTitle);
  }

  /* ---------- EXPORT ---------- */
  window.HPAdmin = {
    renderLayout: renderLayout,
    icons: ICONS,
    menu: menu,
    user: user
  };

})(window);
