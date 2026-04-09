// ════════════════════════════════════════
//  COOKIE BANNER — RGPD / LSSI-CE España
//  v2.0 — i18n, paleta dinámica, init fiable
// ════════════════════════════════════════

const COOKIE_KEY = 'cookie_consent';

// ── Leer/escribir preferencias ──────────
function getConsent() {
  const raw = localStorage.getItem(COOKIE_KEY);
  return raw ? JSON.parse(raw) : null;
}

function saveConsent(analytics, advertising) {
  const consent = {
    analytics:   analytics,
    advertising: advertising,
    timestamp:   new Date().toISOString(),
    version:     '1.0'
  };
  localStorage.setItem(COOKIE_KEY, JSON.stringify(consent));
  applyConsent(consent);
}

function applyConsent(consent) {
  if (consent.analytics)   loadGoogleAnalytics();
  if (consent.advertising) loadAdSense();
}

// ── Cargar scripts de terceros ──────────
function loadGoogleAnalytics() {
  if (window._gaLoaded) return;
  window._gaLoaded = true;
  const s = document.createElement('script');
  s.src   = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
}

function loadAdSense() {
  if (window._adsLoaded) return;
  window._adsLoaded = true;
  const s    = document.createElement('script');
  s.src      = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';
  s.async    = true;
  s.crossOrigin = 'anonymous';
  document.head.appendChild(s);
}

// ── Obtener texto traducido ─────────────
// Funciona tanto si i18n.js ya cargó como si no
function cbT(key) {
  // Si el sistema i18n está disponible, úsalo
  if (window.TRANSLATIONS) {
    const lang = localStorage.getItem('lang') || 'es';
    const t = window.TRANSLATIONS[lang] || window.TRANSLATIONS['es'];
    if (t && t[key]) return t[key];
  }
  // Fallback hardcoded bilingüe
  const lang = localStorage.getItem('lang') || 'es';
  const fallbacks = {
    es: {
      'cookie.title':      'Este sitio utiliza cookies',
      'cookie.desc':       'Usamos cookies propias y de terceros (Google Analytics, Google AdSense) para analizar el tráfico y mostrar publicidad relevante. Puedes aceptar todas, rechazarlas o personalizar tu elección.',
      'cookie.privacy':    'Política de Privacidad',
      'cookie.analytics':  'Cookies analíticas',
      'cookie.ga':         'Google Analytics',
      'cookie.ads':        'Cookies publicitarias',
      'cookie.adsense':    'Google AdSense',
      'cookie.reject':     'Rechazar todo',
      'cookie.save':       'Guardar selección',
      'cookie.accept':     'Aceptar todo',
    },
    en: {
      'cookie.title':      'This site uses cookies',
      'cookie.desc':       'We use our own and third-party cookies (Google Analytics, Google AdSense) to analyze traffic and display relevant advertising. You can accept all, reject them or customize your choice.',
      'cookie.privacy':    'Privacy Policy',
      'cookie.analytics':  'Analytics cookies',
      'cookie.ga':         'Google Analytics',
      'cookie.ads':        'Advertising cookies',
      'cookie.adsense':    'Google AdSense',
      'cookie.reject':     'Reject all',
      'cookie.save':       'Save selection',
      'cookie.accept':     'Accept all',
    }
  };
  return (fallbacks[lang] && fallbacks[lang][key]) || (fallbacks['es'][key]) || key;
}

// ── Construir el banner ─────────────────
function createBanner() {
  // Evitar duplicados
  if (document.getElementById('cookie-banner')) return;

  const privacyPath = (function() {
    // Detecta si estamos en una subpágina o en raíz
    const p = window.location.pathname;
    if (p === '/' || p.endsWith('index.html')) return '/privacidad.html';
    return '/privacidad.html';
  })();

  const banner = document.createElement('div');
  banner.id    = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-modal', 'true');
  banner.setAttribute('aria-labelledby', 'cookie-title');
  banner.innerHTML = `
    <div class="cb-inner">
      <div class="cb-text">
        <p class="cb-title" id="cookie-title">${cbT('cookie.title')}</p>
        <p class="cb-desc">
          ${cbT('cookie.desc')}
          <a href="${privacyPath}">${cbT('cookie.privacy')}</a>.
        </p>
      </div>
      <div class="cb-toggle-row">
        <div class="cb-toggle-item">
          <label class="cb-toggle">
            <input type="checkbox" id="cb-analytics" checked>
            <span class="cb-slider"></span>
          </label>
          <span class="cb-toggle-label">${cbT('cookie.analytics')} <small>(${cbT('cookie.ga')})</small></span>
        </div>
        <div class="cb-toggle-item">
          <label class="cb-toggle">
            <input type="checkbox" id="cb-advertising" checked>
            <span class="cb-slider"></span>
          </label>
          <span class="cb-toggle-label">${cbT('cookie.ads')} <small>(${cbT('cookie.adsense')})</small></span>
        </div>
      </div>
      <div class="cb-actions">
        <button class="cb-btn cb-reject" onclick="cookieReject()">${cbT('cookie.reject')}</button>
        <button class="cb-btn cb-custom" onclick="cookieSaveCustom()">${cbT('cookie.save')}</button>
        <button class="cb-btn cb-accept" onclick="cookieAcceptAll()">${cbT('cookie.accept')}</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);
  requestAnimationFrame(() => banner.classList.add('cb-visible'));
}

function hideBanner() {
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    banner.classList.remove('cb-visible');
    setTimeout(() => banner.remove(), 400);
  }
}

// ── Acciones del banner ─────────────────
function cookieAcceptAll() {
  saveConsent(true, true);
  hideBanner();
}

function cookieReject() {
  saveConsent(false, false);
  hideBanner();
}

function cookieSaveCustom() {
  const analytics   = document.getElementById('cb-analytics').checked;
  const advertising = document.getElementById('cb-advertising').checked;
  saveConsent(analytics, advertising);
  hideBanner();
}

// ── Reabre el banner (desde política de privacidad) ──
function reopenCookieBanner() {
  localStorage.removeItem(COOKIE_KEY);
  // Si i18n ya cargó, el banner tendrá el idioma correcto
  createBanner();
}
window.reopenCookieBanner = reopenCookieBanner;

// ── Init — garantiza que el DOM existe ──
(function init() {
  const consent = getConsent();
  if (!consent) {
    // Primera visita: esperar siempre al DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createBanner);
    } else {
      // DOM ya listo (script cargado en defer/al final del body)
      createBanner();
    }
  } else {
    applyConsent(consent);
  }
})();