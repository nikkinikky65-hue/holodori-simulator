// Site-level navigation only. Add routes here; feature pages keep their own UI.
(() => {
  const base = document.currentScript.src;
  const pages = [
    {label: 'カード一覧', file: 'card-catalog.html'},
    {label: 'リーダー', file: 'leader.html'},
    {label: 'ライブラリ', file: 'library.html#saved-cards'},
    {label: '編成シミュ', file: 'unit-simulator.html'},
    {label: 'イベント編成探索（開発中）', file: 'event.html'},
    {label: '編成一覧', file: 'unit-formations.html'},
    {label: 'カード保存', file: 'library.html#card-registration'}
  ];
  const currentPath = location.pathname.endsWith('/')
    ? new URL('index.html', location.href).pathname : location.pathname;
  const header = document.createElement('header');
  header.className = 'siteHeader';
  const inner = document.createElement('div');
  inner.className = 'wrap siteHeaderInner';
  const title = document.createElement('div');
  title.className = 'siteTitle';
  title.textContent = 'ホロドリ';
  const nav = document.createElement('nav');
  nav.className = 'globalNav';
  nav.setAttribute('aria-label', 'サイトの主要機能');
  for(const page of pages){
    const link = document.createElement('a');
    const url = new URL(page.file, base);
    link.href = url.href;
    link.textContent = page.label;

    nav.append(link);
  }
  inner.append(title, nav);
  header.append(inner);
  document.body.prepend(header);
  function updateNavigation(){
    const section = location.hash || '#saved-cards';
    for(const link of nav.children){
      const url = new URL(link.href);
      const active = url.pathname === currentPath && (!url.hash || url.hash === section);
      if(active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    }
    const active = nav.querySelector('[aria-current="page"]');
    if(active) nav.scrollLeft = active.offsetLeft;
    if(currentPath.endsWith('/library.html')){
      const target = document.getElementById(section.slice(1));
      if(target){
        target.style.scrollMarginTop = `${header.getBoundingClientRect().height + 12}px`;
        target.scrollIntoView({block:'start'});
      }
    }
  }
  window.addEventListener('hashchange', updateNavigation);
  window.addEventListener('load', updateNavigation);
  updateNavigation();
})();
