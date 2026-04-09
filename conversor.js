// ════════════════════════════════════════
//  CONVERSOR DE DIVISAS
//  Primary:  api.frankfurter.dev (v2, ECB)
//  Fallback: api.exchangerate-api.com (no key)
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

  // Intento 1: Frankfurter v2 (nueva URL)
  try {
    const res = await fetch('https://api.frankfurter.dev/v1/latest?base=EUR');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    rates = { EUR: 1, ...data.rates };
    lastDate = data.date;
    onRatesLoaded();
    return;
  } catch (e) {
    console.warn('Frankfurter v2 falló, probando fallback…', e);
  }

  // Intento 2: Frankfurter v1 (URL antigua, por si sigue activa)
  try {
    const res = await fetch('https://api.frankfurter.app/latest?base=EUR');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    rates = { EUR: 1, ...data.rates };
    lastDate = data.date;
    onRatesLoaded();
    return;
  } catch (e) {
    console.warn('Frankfurter v1 falló, probando segundo fallback…', e);
  }

  // Intento 3: ExchangeRate-API (sin key, base EUR)
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/EUR');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    if (data.result !== 'success') throw new Error('API error');
    rates = data.rates; // ya incluye EUR:1
    // Construir fecha desde time_last_update_unix
    const d = new Date(data.time_last_update_unix * 1000);
    lastDate = d.toISOString().split('T')[0];
    onRatesLoaded();
    return;
  } catch (e) {
    console.error('Todos los proveedores fallaron', e);
    setStatus('error');
  }
}

function onRatesLoaded() {
  setStatus('ok');
  populateSelects();
  renderRatesTable();
  convertFrom();
  updateUpdatedLabel();
}

function setStatus(state) {
  const el = document.getElementById('conv-status');
  if (!el) return;
  el.className = 'conv-status conv-' + state;
  if (state === 'loading') {
    el.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg><span>Cargando tipos de cambio…</span>`;
    el.style.display = 'flex';
  } else if (state === 'error') {
    el.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><span>No se pudo cargar. <button onclick="loadRates()" style="background:none;border:none;color:inherit;font-weight:700;cursor:pointer;text-decoration:underline;padding:0;">Reintentar</button></span>`;
    el.style.display = 'flex';
  } else {
    el.style.display = 'none';
  }
}

// ── Poblar selects ────────────────────────────────────────────
function populateSelects() {
  const lang = localStorage.getItem('lang') || 'es';
  const names = lang === 'en' ? CURRENCIES_EN : CURRENCIES;

  const codes = ['EUR', ...Object.keys(CURRENCIES).filter(c => c !== 'EUR')];

  const fromSel = document.getElementById('currency-from');
  const toSel = document.getElementById('currency-to');

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

  renderRatesTable();
}

// ── Conversión ────────────────────────────────────────────────
function getRate(from, to) {
  return rates[to] / rates[from];
}

function convertFrom() {
  if (!Object.keys(rates).length) return;
  const from = document.getElementById('currency-from').value;
  const to = document.getElementById('currency-to').value;
  const amount = parseFloat(document.getElementById('amount-from').value) || 0;
  const result = amount * getRate(from, to);
  document.getElementById('amount-to').value = formatAmount(result);
  updateRateBadge(from, to);
}

function convertTo() {
  if (!Object.keys(rates).length) return;
  const from = document.getElementById('currency-from').value;
  const to = document.getElementById('currency-to').value;
  const amount = parseFloat(document.getElementById('amount-to').value) || 0;
  const result = amount * getRate(to, from);
  document.getElementById('amount-from').value = formatAmount(result);
  updateRateBadge(from, to);
}

function swapCurrencies() {
  const fromSel = document.getElementById('currency-from');
  const toSel = document.getElementById('currency-to');
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
  const lang = localStorage.getItem('lang') || 'es';
  const names = lang === 'en' ? CURRENCIES_EN : CURRENCIES;
  const tbody = document.getElementById('rates-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  Object.keys(CURRENCIES).forEach(code => {
    if (rates[code] === undefined) return;
    const rate = rates[code];
    const inverse = 1 / rate;
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
  if (Math.abs(n) >= 1000) return n.toFixed(2);
  if (Math.abs(n) >= 1) return n.toFixed(4);
  return n.toFixed(6);
}

function formatRate(n) {
  if (Math.abs(n) >= 100) return n.toFixed(2);
  if (Math.abs(n) >= 1) return n.toFixed(4);
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

window.loadRates = loadRates;
window.convertFrom = convertFrom;
window.convertTo = convertTo;
window.swapCurrencies = swapCurrencies;