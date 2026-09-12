// 메뉴 클릭 → 미리보기 전환. JS가 없으면 메뉴는 로그 페이지 링크로 동작한다.
(function () {
  var tabs = document.querySelectorAll('.menu a[data-project]');
  if (!tabs.length) return;
  var panels = document.querySelectorAll('.preview[id^="pv-"]');
  function select(id) {
    tabs.forEach(function (t) {
      var on = t.dataset.project === id;
      t.classList.toggle('on', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panels.forEach(function (p) { p.hidden = p.id !== 'pv-' + id; });
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function (e) {
      e.preventDefault();
      select(t.dataset.project);
    });
  });
})();
