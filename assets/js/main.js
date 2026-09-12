// dacotton.dev — 홈(스크롤 헤더·팝업), 프로젝트 슬라이드, 목록 필터·펼침. 전부 있어야만 동작하는 건 없다.
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // 홈: 스크롤하면 고정 헤더, 현재 구역 표시, 궤도 클릭은 부드럽게
  var bar = $('.bar.fixed');
  if (bar) {
    var secs = ['projects', 'log', 'mistakes'].map(function (id) { return document.getElementById(id); });
    var navs = $$('[data-nav]');
    var mark = function (id) { navs.forEach(function (a) { a.classList.toggle('on', a.dataset.nav === id); }); };
    var onScroll = function () {
      var y = window.scrollY || 0;
      bar.classList.toggle('show', y > 260);
      var cur = 'home';
      if (y > 260) secs.forEach(function (el) { if (el && y + 220 >= el.offsetTop) cur = el.id; });
      mark(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 홈: 별 → HUD 팝업
  var ov = $('#hud');
  if (ov) {
    var panels = $$('[data-hud-panel]', ov), picks = $$('[data-hud-pick]', ov), name = $('#hud-name');
    var select = function (id) {
      panels.forEach(function (p) { p.hidden = p.dataset.hudPanel !== id; });
      picks.forEach(function (a) { var on = a.dataset.hudPick === id; a.classList.toggle('on', on); if (on) name.textContent = a.children[2].textContent; });
    };
    var open = function (id) { select(id); ov.hidden = false; document.body.style.overflow = 'hidden'; };
    var close = function () { ov.hidden = true; document.body.style.overflow = ''; };
    $$('[data-hud-open]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); open(a.dataset.hudOpen); }); });
    picks.forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); select(a.dataset.hudPick); }); });
    $$('[data-hud-close]', ov).forEach(function (b) { b.addEventListener('click', close); });
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    window.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !ov.hidden) close(); });
  }

  // 프로젝트 설명: 화면 슬라이드
  var obs = $('[data-slides]');
  if (obs) {
    var slides = $$('[data-slide]', obs), tag = $('[data-slide-tag]', obs), tabs = $$('[data-slide-to]');
    var names = tabs.map(function (b) { return b.textContent.replace(/^[■□]\s*/, ''); });
    var cur = 0;
    var go = function (n) {
      cur = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.hidden = i !== cur; });
      tabs.forEach(function (b, i) { b.classList.toggle('on', i === cur); b.textContent = (i === cur ? '■ ' : '□ ') + names[i]; });
      if (tag) tag.textContent = ('0' + (cur + 1)).slice(-2) + ' ' + (names[cur] || '');
    };
    var prev = $('[data-slide-prev]', obs), next = $('[data-slide-next]', obs);
    if (prev) prev.addEventListener('click', function () { go(cur - 1); });
    if (next) next.addEventListener('click', function () { go(cur + 1); });
    tabs.forEach(function (b, i) { b.addEventListener('click', function () { go(i); }); });
  }

  // 목록: 프로젝트 필터 (로그 전체, 오답노트)
  var group = $('[data-filter-group]');
  if (group) {
    var btns = $$('[data-filter]', group), rows = $$('[data-project]'), count = $('[data-count]');
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        var f = b.dataset.filter;
        btns.forEach(function (x) { x.classList.toggle('on', x === b); });
        var n = 0;
        rows.forEach(function (r) { var show = !f || r.dataset.project === f; r.hidden = !show; if (show && r.classList.contains('row')) n++; });
        if (count) count.textContent = n;
        $$('.month').forEach(function (m) { var route = m.nextElementSibling; m.hidden = !!route && !$$('.ent:not([hidden])', route).length; });
      });
    });
  }

  // 오답노트: 줄을 누르면 그 자리에서 펼침
  $$('[data-toggle]').forEach(function (row) {
    row.addEventListener('click', function (e) {
      e.preventDefault();
      var d = row.nextElementSibling, open = row.classList.contains('open');
      $$('.row.open').forEach(function (r) { r.classList.remove('open'); r.querySelector('.go').textContent = '▼'; if (r.nextElementSibling) r.nextElementSibling.hidden = true; });
      if (!open) { row.classList.add('open'); row.querySelector('.go').textContent = '▲'; if (d) d.hidden = false; }
    });
  });
})();
