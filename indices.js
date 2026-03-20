// ════════════════════════════════════════
//  DATOS HISTÓRICOS — Rentabilidades anuales
//
//  Fuentes de referencia (datos de dominio
//  público, uso educativo libre):
//  · S&P 500: Macrotrends.net / S&P Global
//  · NASDAQ 100: Nasdaq.com historical data
//  · MSCI World: MSCI.com fact sheets
//  · IBEX 35: Bolsas y Mercados Españoles (BME)
//  · DAX 40: Deutsche Börse Group
//  · Nikkei 225: Nikkei Inc. historical data
//
//  Rentabilidades en precio (sin dividendos),
//  moneda local, aproximadas. Solo fines educativos.
// ════════════════════════════════════════

const YEARS = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024];

// Contexto histórico por año para tooltips educativos
const CONTEXT = {
  2010: 'Recuperación post-crisis 2008. QE2 de la Fed.',
  2011: 'Crisis deuda soberana europea. Rebaja AAA a EEUU.',
  2012: 'Draghi: "Whatever it takes". Rescate bancario España.',
  2013: 'Taper Tantrum. S&P 500 en máximos históricos.',
  2014: 'Desplome del petróleo. Fortaleza del dólar USD.',
  2015: 'Desaceleración China. Primera subida de tipos Fed.',
  2016: 'Brexit. Elección Trump. Rally de reflación.',
  2017: 'Boom tecnológico. Reforma fiscal Trump. Mercados calmos.',
  2018: 'Guerra comercial EEUU-China. 4 subidas de tipos Fed.',
  2019: 'Pausa Fed. Tregua comercial. Rally generalizado.',
  2020: 'COVID-19: caída -34% en marzo, recuperación histórica.',
  2021: 'Vacunas + estímulos fiscales masivos. Inflación emergente.',
  2022: 'Inflación máximos 40 años. Subidas tipos agresivas.',
  2023: 'IA generativa (ChatGPT). Resiliencia economía EEUU.',
  2024: 'Bajadas de tipos. Nuevos máximos históricos en EEUU.'
};

const INDICES = {
  sp500: {
    label:   'S&P 500',
    region:  'EE.UU. (USD)',
    color:   '#3b82f6',
    returns: [15.06, 2.11, 16.00, 32.39, 13.69, 1.38, 11.96, 21.83, -4.38, 31.49, 18.40, 28.71, -18.11, 26.29, 23.31]
  },
  nasdaq: {
    label:   'NASDAQ 100',
    region:  'EE.UU. (USD)',
    color:   '#22d3ee',
    returns: [19.22, 2.71, 17.74, 36.61, 19.00, 9.47, 7.09, 32.66, -1.04, 39.46, 48.92, 27.26, -32.58, 53.81, 24.88]
  },
  msci: {
    label:   'MSCI World',
    region:  'Global (USD)',
    color:   '#10b981',
    returns: [11.76, -5.54, 15.83, 26.68, 4.94, -0.87, 7.51, 22.40, -8.71, 27.67, 15.90, 21.82, -18.14, 23.79, 19.22]
  },
  ibex: {
    label:   'IBEX 35',
    region:  'España (EUR)',
    color:   '#f59e0b',
    returns: [-17.43, -13.11, -4.66, 21.42, 3.66, -7.15, -2.01, 7.40, -14.97, 11.82, -15.45, 7.93, -5.57, 22.76, 14.78]
  },
  dax: {
    label:   'DAX 40',
    region:  'Alemania (EUR)',
    color:   '#a78bfa',
    returns: [16.06, -14.69, 29.06, 25.48, 2.65, 9.56, 6.87, 12.51, -18.26, 25.48, 3.55, 15.79, -12.35, 20.31, 18.85]
  },
  nikkei: {
    label:   'Nikkei 225',
    region:  'Japón (JPY)',
    color:   '#fb923c',
    returns: [-3.01, -17.34, 22.94, 56.72, 7.12, 9.07, 0.42, 19.10, -12.08, 18.20, 16.01, 4.91, -9.37, 28.24, 19.22]
  }
};

// ── Utilidades ──────────────────────────
function calcCumulative(returns) {
  const result = [10000];
  let val = 10000;
  returns.forEach(r => { val = val * (1 + r / 100); result.push(Math.round(val)); });
  return result;
}

function calcStats(returns) {
  const avg      = returns.reduce((a, b) => a + b, 0) / returns.length;
  const best     = Math.max(...returns);
  const worst    = Math.min(...returns);
  const final    = calcCumulative(returns).at(-1);
  return {
    avg, best, worst, final,
    bestYear:  YEARS[returns.indexOf(best)],
    worstYear: YEARS[returns.indexOf(worst)]
  };
}

const fmtEur = n => new Intl.NumberFormat('es-ES', {
  style: 'currency', currency: 'EUR', maximumFractionDigits: 0
}).format(n);

const fmtPct = n => (n > 0 ? '+' : '') + n.toFixed(2) + '%';

const cumLabels = [2009, ...YEARS];

// ════════════════════════════════════════
//  CHART 1 — Crecimiento acumulado (líneas)
// ════════════════════════════════════════
const ctxCum = document.getElementById('chartCumulativo').getContext('2d');

const datasetsCum = Object.entries(INDICES).map(([key, idx]) => ({
  label:            idx.label,
  data:             calcCumulative(idx.returns),
  borderColor:      idx.color,
  backgroundColor:  idx.color + '15',
  borderWidth:      2.5,
  pointRadius:      0,
  pointHoverRadius: 6,
  pointHoverBackgroundColor: idx.color,
  tension:          0.3,
  fill:             false,
  indexKey:         key
}));

const chartCum = new Chart(ctxCum, {
  type: 'line',
  data: { labels: cumLabels, datasets: datasetsCum },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 300 },
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        labels: { color: '#8b9cc8', font: { size: 11 }, boxWidth: 14, padding: 16 }
      },
      tooltip: {
        backgroundColor: '#0f1628',
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
        padding: 14,
        titleColor: '#f0f4ff',
        bodyColor: '#8b9cc8',
        titleFont: { size: 13, weight: '700' },
        bodyFont: { size: 12 },
        callbacks: {
          title: items => {
            const year = items[0].label;
            return `${year}  ·  ${CONTEXT[year] || ''}`;
          },
          label: c => {
            const year  = cumLabels[c.dataIndex];
            const ret   = INDICES[Object.keys(INDICES)[c.datasetIndex]]?.returns[c.dataIndex - 1];
            const retStr = ret !== undefined ? ` (${fmtPct(ret)} ese año)` : '';
            return `  ${c.dataset.label}: ${fmtEur(c.parsed.y)}${retStr}`;
          },
          afterBody: () => ['', '  Inversión inicial: 10.000 €']
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#4f608a', font: { size: 11 } },
        grid:  { color: 'rgba(255,255,255,0.04)' }
      },
      y: {
        ticks: { color: '#4f608a', callback: v => fmtEur(v) },
        grid:  { color: 'rgba(255,255,255,0.04)' }
      }
    }
  }
});

// ════════════════════════════════════════
//  CHART 2 — Rentabilidad anual (barras)
//  Tooltip enriquecido con contexto histórico
// ════════════════════════════════════════
const ctxBar    = document.getElementById('chartAnual').getContext('2d');
const initialKey = 'sp500';

const chartBar = new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: YEARS,
    datasets: [{
      label:           INDICES[initialKey].label,
      data:            INDICES[initialKey].returns,
      backgroundColor: INDICES[initialKey].returns.map(r =>
        r >= 0 ? 'rgba(16,185,129,0.75)' : 'rgba(239,68,68,0.75)'
      ),
      hoverBackgroundColor: INDICES[initialKey].returns.map(r =>
        r >= 0 ? 'rgba(16,185,129,1)' : 'rgba(239,68,68,1)'
      ),
      borderRadius: 5
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 250 },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#0f1628',
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
        padding: 16,
        titleColor: '#f0f4ff',
        bodyColor: '#8b9cc8',
        titleFont:  { size: 14, weight: '800' },
        bodyFont:   { size: 12 },
        callbacks: {
          // Título: año + retorno grande
          title: items => {
            const val = items[0].parsed.y;
            const sign = val >= 0 ? '▲' : '▼';
            return `${items[0].label}   ${sign} ${Math.abs(val).toFixed(2)}%`;
          },
          // Cuerpo: contexto histórico
          beforeBody: items => {
            const year = items[0].label;
            return CONTEXT[year] ? [`  ${CONTEXT[year]}`] : [];
          },
          label: () => null, // quita la línea duplicada
          // Pie: valor acumulado de 10.000€
          afterBody: items => {
            const idx  = document.getElementById('sel-index').value;
            const data = INDICES[idx];
            const cum  = calcCumulative(data.returns);
            const pos  = YEARS.indexOf(+items[0].label);
            if (pos < 0) return [];
            const val  = cum[pos + 1];
            const ini  = cum[pos];
            const diff = val - ini;
            const sign = diff >= 0 ? '+' : '';
            return [
              '',
              `  10.000 € en 2010 → ${fmtEur(val)}`,
              `  Variación ese año: ${sign}${fmtEur(diff)}`
            ];
          }
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#4f608a', font: { size: 11 } },
        grid:  { display: false }
      },
      y: {
        ticks: { color: '#4f608a', callback: v => v + '%' },
        grid:  { color: 'rgba(255,255,255,0.04)' }
      }
    }
  }
});

function updateBarChart() {
  const key = document.getElementById('sel-index').value;
  const idx = INDICES[key];
  chartBar.data.datasets[0].label              = idx.label;
  chartBar.data.datasets[0].data               = idx.returns;
  chartBar.data.datasets[0].backgroundColor    = idx.returns.map(r =>
    r >= 0 ? 'rgba(16,185,129,0.75)' : 'rgba(239,68,68,0.75)'
  );
  chartBar.data.datasets[0].hoverBackgroundColor = idx.returns.map(r =>
    r >= 0 ? 'rgba(16,185,129,1)' : 'rgba(239,68,68,1)'
  );
  chartBar.update();
}
window.updateBarChart = updateBarChart;

// ════════════════════════════════════════
//  TABLA RESUMEN
// ════════════════════════════════════════
const tbody = document.getElementById('tabla-indices-body');
Object.values(INDICES).forEach(idx => {
  const s  = calcStats(idx.returns);
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><span class="idx-dot" style="background:${idx.color}"></span>${idx.label}</td>
    <td>${idx.region}</td>
    <td class="${s.avg >= 0 ? 'pos' : 'neg'}">${fmtPct(s.avg)}</td>
    <td class="pos">${fmtPct(s.best)} (${s.bestYear})</td>
    <td class="neg">${fmtPct(s.worst)} (${s.worstYear})</td>
    <td><strong>${fmtEur(s.final)}</strong></td>
  `;
  tbody.appendChild(tr);
});

// ════════════════════════════════════════
//  FILTROS — mostrar/ocultar líneas
// ════════════════════════════════════════
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.index;
    btn.classList.toggle('active');
    const ds = chartCum.data.datasets.find(d => d.indexKey === key);
    if (ds) { ds.hidden = !btn.classList.contains('active'); chartCum.update(); }
  });
});
