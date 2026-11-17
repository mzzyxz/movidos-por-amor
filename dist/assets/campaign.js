(() => {
  'use strict';
  const favorite = document.querySelector('[data-favorite]');
  const storageKey = 'campaign-favorite:' + location.pathname.replace(/\/$/, '');
  const notice = document.querySelector('[data-notice]');
  let noticeTimeout;

  function announce(message) {
    if (!notice) return;
    notice.textContent = message;
    clearTimeout(noticeTimeout);
    noticeTimeout = setTimeout(() => { notice.textContent = ''; }, 4500);
  }

  function updateFavorite(saved) {
    if (!favorite) return;
    favorite.setAttribute('aria-pressed', String(saved));
    favorite.setAttribute('aria-label', saved ? 'Remover dos favoritos' : 'Favoritar esta campanha');
  }

  try { updateFavorite(localStorage.getItem(storageKey) === 'true'); } catch (_) { /* Storage can be unavailable. */ }
  favorite?.addEventListener('click', () => {
    const saved = favorite.getAttribute('aria-pressed') !== 'true';
    updateFavorite(saved);
    try { localStorage.setItem(storageKey, String(saved)); } catch (_) { /* Keep the control usable. */ }
    announce(saved ? 'Campanha adicionada aos favoritos neste dispositivo.' : 'Campanha removida dos favoritos.');
  });

  function showLink(url) {
    const dialog = document.querySelector('[data-copy-dialog]');
    const input = document.querySelector('[data-copy-link]');
    if (!dialog || !input) return;
    input.value = url;
    dialog.showModal();
    input.focus();
    input.select();
  }

  async function shareCampaign() {
    const url = new URL(location.pathname, location.origin).href;
    const data = {
      title: document.title,
      text: document.querySelector('meta[name="description"]')?.content || 'Conheça e compartilhe esta campanha.',
      url
    };
    if (typeof navigator.share === 'function') {
      try { await navigator.share(data); return; }
      catch (error) { if (error.name === 'AbortError') return; }
    }
    try {
      await navigator.clipboard.writeText(url);
      announce('Link copiado! Compartilhe esta campanha.');
    } catch (_) { showLink(url); }
  }

  document.querySelectorAll('[data-share]').forEach(button => button.addEventListener('click', shareCampaign));
  document.querySelector('[data-close-dialog]')?.addEventListener('click', () => {
    document.querySelector('[data-copy-dialog]')?.close();
  });

  const bar = document.querySelector('.action-bar');
  function syncBarHeight() {
    if (!bar) return;
    const height = Math.ceil(bar.getBoundingClientRect().height) + 'px';
    document.documentElement.style.setProperty('--bar-height', height);
    document.documentElement.style.setProperty('--bottom-bar-h', height);
  }
  if (bar && typeof ResizeObserver === 'function') new ResizeObserver(syncBarHeight).observe(bar);
  window.addEventListener('load', syncBarHeight);
  window.addEventListener('resize', syncBarHeight);
  syncBarHeight();
})();
