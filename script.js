// ════════════════════════════════════════
//  CHART — inicialización
// ════════════════════════════════════════
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [
      {
        label: 'Capital aportado',
        data: [],
        backgroundColor: 'rgba(99,102,241,0.7)',
        borderRadius: 4,
        stack: 'stack'
      },
      {
        label: 'Intereses',
        data: [],
        backgroundColor: 'rgba(34,211,238,0.7)',
        borderRadius: 4,
        stack: 'stack'
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 },
    plugins: {
      legend: { labels: { color: '#94a3b8', font: { size: 11 } } },
      tooltip: {
        callbacks: {
          label: c => ` ${c.dataset.label}: ${fmt(c.parsed.y)}`
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#64748b', maxTicksLimit: 10 },
        grid: { display: false }
      },
      y: {
        ticks: { color: '#64748b', callback: v => fmt(v) },
        grid: { color: 'rgba(255,255,255,0.04)' }
      }
    }
  }
});

// ════════════════════════════════════════
//  SYNC — slider ↔ number input
// ════════════════════════════════════════
function syncFromSlider(id) {
  const slider = document.getElementById(id);
  const num    = document.getElementById(id + '-num');
  num.value    = slider.value;
}

function syncFromNumber(id) {
  const num    = document.getElementById(id + '-num');
  const slider = document.getElementById(id);
  let val      = parseFloat(num.value);
  if (isNaN(val)) return;
  val          = Math.min(Math.max(val, +slider.min), +slider.max);
  slider.value = val;
}

// ════════════════════════════════════════
//  UTILS
// ════════════════════════════════════════
function fmt(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M €';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K €';
  return n.toFixed(0) + ' €';
}

function fmtFull(n) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(n);
}

// ════════════════════════════════════════
//  CÁLCULO
//  Optimizado: para n=365 usa fórmula directa
//  en lugar de bucle interno de 365 pasos
// ════════════════════════════════════════
function calcular(P, pmt, r, t, n) {
  const rows = [];
  const rn   = r / n;
  const pmtPerPeriod = (pmt * 12) / n;

  const factorYear  = Math.pow(1 + rn, n);
  const annuityYear = rn > 0 ? (factorYear - 1) / rn : n;

  let balance = P;
  for (let yr = 1; yr <= t; yr++) {
    balance = balance * factorYear + pmtPerPeriod * annuityYear;
    const aportado = P + pmt * 12 * yr;
    rows.push({
      year:      yr,
      balance:   balance,
      aportado:  aportado,
      intereses: balance - aportado
    });
  }
  return rows;
}

// ════════════════════════════════════════
//  DEBOUNCE
// ════════════════════════════════════════
let _updateTimer = null;
function update() {
  clearTimeout(_updateTimer);
  _updateTimer = setTimeout(_doUpdate, 40);
}

function _doUpdate() {
  const P   = +document.getElementById('capital').value;
  const pmt = +document.getElementById('aportacion').value;
  const r   = parseFloat(document.getElementById('tasa').value) / 100;
  const t   = +document.getElementById('anos').value;
  const n   = +document.getElementById('freq').value;

  const rows = calcular(P, pmt, r, t, n);
  const last = rows[rows.length - 1];

  document.getElementById('res-total').textContent     = fmtFull(last.balance);
  document.getElementById('res-intereses').textContent = fmtFull(last.intereses);
  document.getElementById('res-invertido').textContent = fmtFull(last.aportado);
  document.getElementById('res-multi').textContent     = (last.balance / last.aportado).toFixed(2) + '×';

  // Gráfico
  const step     = Math.max(1, Math.floor(t / 20));
  const filtered = rows.filter((_, i) => (i + 1) % step === 0 || i === rows.length - 1);

  myChart.data.labels           = filtered.map(r => 'Año ' + r.year);
  myChart.data.datasets[0].data = filtered.map(r => r.aportado);
  myChart.data.datasets[1].data = filtered.map(r => Math.max(0, r.intereses));
  myChart.update('none');

  // Tabla
  const tbody     = document.getElementById('tabla-cuerpo');
  tbody.innerHTML = '';
  const showStep  = t > 30 ? 5 : t > 15 ? 2 : 1;

  rows.forEach((row, i) => {
    if ((i + 1) % showStep !== 0 && i !== rows.length - 1) return;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.year}</td>
      <td>${fmtFull(row.aportado)}</td>
      <td>${fmtFull(pmt * 12 * row.year)}</td>
      <td class="pos">${fmtFull(row.intereses)}</td>
      <td><strong>${fmtFull(row.balance)}</strong></td>
    `;
    tbody.appendChild(tr);
  });
}

// ════════════════════════════════════════
//  ACCORDION
// ════════════════════════════════════════
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body   = btn.nextElementSibling;
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.accordion-btn').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });

    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      body.classList.add('open');
    }
  });
});

// ════════════════════════════════════════
//  COMPARTIR — URL con parámetros
// ════════════════════════════════════════

// Al cargar: lee params de la URL y aplica valores a sliders e inputs
(function loadFromURL() {
  const p = new URLSearchParams(window.location.search);
  const set = (id, val) => {
    if (!val) return;
    const slider = document.getElementById(id);
    const num    = document.getElementById(id + '-num');
    if (!slider || !num) return;
    const v = Math.min(Math.max(parseFloat(val), +slider.min), +slider.max);
    slider.value = v;
    num.value    = v;
  };
  set('capital',    p.get('capital'));
  set('aportacion', p.get('aportacion'));
  set('tasa',       p.get('tasa'));
  set('anos',       p.get('anos'));

  if (p.get('freq')) {
    const sel     = document.getElementById('freq');
    const allowed = ['1', '2', '4', '12', '365'];
    if (sel && allowed.includes(p.get('freq'))) sel.value = p.get('freq');
  }
})();

// Textos del menú nativo de compartir según idioma activo
const SHARE_TEXTS = {
  es: {
    title: 'Mi simulación de interés compuesto',
    text:  '¡Mira cuánto puede crecer mi inversión!'
  },
  en: {
    title: 'My compound interest simulation',
    text:  'Look how much my investment can grow!'
  }
};

// Genera URL con los valores actuales y la copia al portapapeles
function shareResult() {
  const params = new URLSearchParams({
    capital:    document.getElementById('capital').value,
    aportacion: document.getElementById('aportacion').value,
    tasa:       document.getElementById('tasa').value,
    anos:       document.getElementById('anos').value,
    freq:       document.getElementById('freq').value,
  });

  const url   = window.location.origin + window.location.pathname + '?' + params.toString();
  const btn   = document.getElementById('share-btn');
  const toast = document.getElementById('share-toast');

  // Lee el idioma activo desde i18n.js (currentLang) o del <html lang>
  const lang = (typeof currentLang !== 'undefined' ? currentLang : document.documentElement.lang) || 'es';
  const shareT = SHARE_TEXTS[lang] || SHARE_TEXTS.es;

  // Web Share API — abre menú nativo en móvil
  if (navigator.share) {
    navigator.share({
      title: shareT.title,
      text:  shareT.text,
      url:   url
    }).catch(() => {});
    return;
  }

  // Desktop: copiar al portapapeles
  const showToast = () => {
    btn.classList.add('copied');
    toast.classList.add('visible');
    setTimeout(() => {
      btn.classList.remove('copied');
      toast.classList.remove('visible');
    }, 2500);
  };

  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(showToast).catch(() => fallbackCopy(url, showToast));
  } else {
    fallbackCopy(url, showToast);
  }
}

function fallbackCopy(text, cb) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  cb();
}
function exportChartPNG() {
    const canvas = document.getElementById("myChart");
    if (!canvas) return;

    const link = document.createElement("a");
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");

    link.download = `simulacion-interes-compuesto-${yyyy}${mm}${dd}.png`;
    link.href = canvas.toDataURL("image/png", 1.0);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const toast = document.getElementById("export-toast");
    if (!toast) return;

    toast.classList.add("visible");
    setTimeout(() => {
        toast.classList.remove("visible");
    }, 2500);
}


// Render inicial
_doUpdate();