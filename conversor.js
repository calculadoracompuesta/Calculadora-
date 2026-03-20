// ════════════════════════════════════════
//  CONVERSOR DE DIVISAS — Frankfurter API
// ════════════════════════════════════════

const CURRENCIES = {
  EUR: 'Euro',
  USD: 'Dólar estadounidense',
  GBP: 'Libra esterlina',
  JPY: 'Yen japonés',
  CHF: 'Franco suizo',
  CAD: 'Dólar canadiense',
  AUD: 'Dólar australiano',
  CNY: 'Yuan chino',
  MXN: 'Peso mexicano',
  BRL: 'Real brasileño',
  NOK: 'Corona noruega',
  SEK: 'Corona sueca',
  DKK: 'Corona danesa',
  PLN: 'Esloti polaco',
  CZK: 'Corona checa',
  HUF: 'Forinto húngaro',
  KRW: 'Won surcoreano',
  SGD: 'Dólar de Singapur',
  HKD: 'Dólar de Hong Kong',
  INR: 'Rupia india',
};

const CURRENCIES_EN = {
  EUR: 'Euro',
  USD: 'US Dollar',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  CHF: 'Swiss Franc',
  CAD: 'Canadian Dollar',
  AUD: 'Australian Dollar',
  CNY: 'Chinese Yuan',
  MXN: 'Mexican Peso',
  BRL: 'Brazilian Real',
  NOK: 'Norwegian Krone',
  SEK: 'Swedish Krona',
  DKK: 'Danish Krone',
  PLN: 'Polish Zloty',
  CZK: 'Czech Koruna',
  HUF: 'Hungarian Forint',
  KRW: 'South Korean Won',
  SGD: 'Singapore Dollar',
  HKD: 'Hong Kong Dollar',
  INR: 'Indian Rupee',
};

// rates almacena { USD: x, GBP: y, ... } con EUR como base
let rates = {};
let lastDate = '';

// ── Carga de datos ────────────────────────────────────────────
async function loadRates() {
  setStatus('loading');
  try {
    const res = await fetch('https://api.frankfurter.app/latest?base=EUR');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    rates = { EUR: 1, ...data.rates };
    lastDate = data.date;
    setStatus('ok');
    populateSelects();
    renderRatesTable();
    convertFrom();
    updateUpdatedLabel();
  } catch (e) {
    setStatus('error');
  }
}

function setStatus(state) {
  const el = document.getElementById('conv-status');
  if (!el) return;
  el.className = 'conv-status conv-' + state;
  if (state === 'loading') {
    el.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg><span>Cargando tipos de cambio…</span>`;
    el.style.display = 'flex';
  } else if (state === 'error') {
    el.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><span>No se pudo cargar. Comprueba tu conexión.</span>`;
    el.style.display = 'flex';
  } else {
    el.style.display = 'none';
  }
}

// ── Poblar selects ────────────────────────────────────────────
function populateSelects() {
  const lang = localStorage.getItem('lang') || 'es';
  const names = lang === 'en' ? CURRENCIES_EN : CURRENCIES;
  
  // EUR siempre primero
  const codes = ['EUR', ...Object.keys(CURRENCIES).filter(c => c !== 'EUR')];
  
  const fromSel = document.getElementById('currency-from');
  const toSel   = document.getElementById('currency-to');

  [fromSel, toSel].forEach((sel, i) => {
    const prev = sel.value;
    sel.innerHTML = '';
    codes.forEach(code => {
      if (rates[code] === undefined) return;
      const opt = document.createElement('option');
      opt.value = code;
      opt.textContent = `${code} — ${names[code] || code}`;
      sel.appendChild(opt);
    });
    sel.value = prev || (i === 0 ? 'EUR' : 'USD');
  });
  
  // Actualiza tabla con nuevo idioma
  renderRatesTable();
}




// ── Conversión ────────────────────────────────────────────────
function getRate(from, to) {
  // Convierte via EUR como base
  return rates[to] / rates[from];
}

function convertFrom() {
  if (!Object.keys(rates).length) return;
  const from   = document.getElementById('currency-from').value;
  const to     = document.getElementById('currency-to').value;
  const amount = parseFloat(document.getElementById('amount-from').value) || 0;
  const result = amount * getRate(from, to);
  document.getElementById('amount-to').value = formatAmount(result);
  updateRateBadge(from, to);
}

function convertTo() {
  if (!Object.keys(rates).length) return;
  const from   = document.getElementById('currency-from').value;
  const to     = document.getElementById('currency-to').value;
  const amount = parseFloat(document.getElementById('amount-to').value) || 0;
  const result = amount * getRate(to, from);
  document.getElementById('amount-from').value = formatAmount(result);
  updateRateBadge(from, to);
}

function swapCurrencies() {
  const fromSel = document.getElementById('currency-from');
  const toSel   = document.getElementById('currency-to');
  [fromSel.value, toSel.value] = [toSel.value, fromSel.value];
  convertFrom();
}

function updateRateBadge(from, to) {
  const badge = document.getElementById('rate-badge');
  if (!badge) return;
  const rate = getRate(from, to);
  badge.textContent = `1 ${from} = ${formatRate(rate)} ${to}`;
}

// ── Tabla de tipos cruzados ───────────────────────────────────
function renderRatesTable() {
  const lang  = localStorage.getItem('lang') || 'es';
  const names = lang === 'en' ? CURRENCIES_EN : CURRENCIES;
  const tbody = document.getElementById('rates-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  Object.keys(CURRENCIES).forEach(code => {
    if (rates[code] === undefined) return;
    const rate    = rates[code];           // 1 EUR = rate CODE
    const inverse = 1 / rate;             // 1 CODE = inverse EUR
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${names[code] || code}</td>
      <td><span class="currency-badge">${code}</span></td>
      <td><strong>${formatRate(rate)}</strong></td>
      <td>${formatRate(inverse)}</td>`;
    tbody.appendChild(tr);
  });
}

// ── Helpers ───────────────────────────────────────────────────
function formatAmount(n) {
  if (isNaN(n)) return '';
  // Más de 6 cifras: sin decimales; si es grande elimina ruido
  if (Math.abs(n) >= 1000) return n.toFixed(2);
  if (Math.abs(n) >= 1)    return n.toFixed(4);
  return n.toFixed(6);
}

function formatRate(n) {
  if (Math.abs(n) >= 100)  return n.toFixed(2);
  if (Math.abs(n) >= 1)    return n.toFixed(4);
  return n.toFixed(6);
}

function updateUpdatedLabel() {
  const el = document.getElementById('conv-updated');
  if (!el || !lastDate) return;
  const lang = localStorage.getItem('lang') || 'es';
  el.textContent = lang === 'en'
    ? `Last updated: ${lastDate} · Source: European Central Bank`
    : `Última actualización: ${lastDate} · Fuente: Banco Central Europeo`;
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', loadRates);

// Exponer globalmente para los onchange/onclick del HTML
window.convertFrom      = convertFrom;
window.convertTo        = convertTo;
window.swapCurrencies   = swapCurrencies;
