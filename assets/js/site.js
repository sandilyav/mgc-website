(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');

  if (!toggle || !menu) return;

  const openClass = 'nav-open';

  const setExpanded = (expanded) => {
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    document.body.classList.toggle(openClass, expanded);
    menu.hidden = !expanded;
  };

  setExpanded(false);

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!expanded);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (!expanded) return;
    setExpanded(false);
    toggle.focus();
  });

  menu.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.closest('a')) {
      setExpanded(false);
    }
  });
})();
