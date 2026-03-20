// ════════════════════════════════════════
//  TRADUCCIONES COMPLETAS — ES / EN
// ════════════════════════════════════════
const TRANSLATIONS = {
  es: {
    'page.title':       'Calculadora de Interés Compuesto Gratuita | Simula tu Inversión',
    'nav.logo':         'Calculadora Financiera',
    'nav.calc':         'Calculadora',
    'nav.indices':      'Índices mundiales',
    'header.label':     'Herramienta financiera gratuita',
    'header.h1':        'Calculadora de Interés Compuesto',
    'header.p':         'Visualiza el crecimiento real de tu inversión con aportaciones periódicas y capitalización configurable. Resultados al instante, sin registro.',
    'stat.years':       'años de proyección',
    'stat.freq':        'frecuencias de capitalización',
    'stat.free':        'gratuito y sin registro',
    'form.h2':          'Configura tu simulación',
    'label.capital':    'Capital inicial',
    'label.aportacion': 'Aportación mensual',
    'label.tasa':       'Tasa de interés anual',
    'label.anos':       'Horizonte temporal',
    'label.freq':       'Frecuencia de capitalización',
    'freq.monthly':     'Mensual (×12)',
    'freq.quarterly':   'Trimestral (×4)',
    'freq.biannual':    'Semestral (×2)',
    'freq.annual':      'Anual (×1)',
    'freq.daily':       'Diaria (×365)',
    'unit.years':       'años',
    'results.h2':       'Resultados',
    'res.total':        'Capital Final',
    'res.interest':     'Intereses Ganados',
    'res.invested':     'Total Invertido',
    'res.multi':        'Multiplicador',
    'table.h2':         'Evolución anual',
    'th.year':          'Año',
    'th.capital':       'Capital aportado',
    'th.contributions': 'Aportaciones',
    'th.interest':      'Intereses',
    'th.total':         'Total acumulado',
    // Compartir
    'share.btn':        'Compartir simulación',
    'share.copied':     '¡Enlace copiado!',
    // Cookie banner
    'cookie.title':     'Este sitio utiliza cookies',
    'cookie.desc':      'Usamos cookies propias y de terceros (Google Analytics, Google AdSense) para analizar el tráfico y mostrar publicidad relevante. Puedes aceptar todas, rechazarlas o personalizar tu elección. Más información en nuestra ',
    'cookie.privacy':   'Política de Privacidad',
    'cookie.analytics': 'Cookies analíticas',
    'cookie.ga':        'Google Analytics',
    'cookie.ads':       'Cookies publicitarias',
    'cookie.adsense':   'Google AdSense',
    'cookie.reject':    'Rechazar todo',
    'cookie.save':      'Guardar selección',
    'cookie.accept':    'Aceptar todo',
    // ── Página de Privacidad ────────────────────
    'priv.page.title':  'Política de Privacidad y Cookies | Calculadora Financiera',
    'priv.h1':          'Política de Privacidad y Cookies',
    'priv.meta':        'Última actualización: marzo de 2026 · Versión 1.0',
    'priv.backlink':    'Volver a la calculadora',
    'priv.s1.h2':           '1. Responsable del tratamiento',
    'priv.s1.owner.label':  'Titular del sitio web:',
    'priv.s1.email.label':  'Correo electrónico de contacto:',
    // Exportar gráfico
    'export.btn': 'Exportar gráfico (PNG)',
    'export.saved': 'Gráfico descargado',
    'priv.s1.web.label':    'Sitio web:',
    'priv.s1.country.label':'País:',
    'priv.s1.country.val':  'España',
    'priv.s1.address.label':'Dirección postal:',
    'priv.s1.address.val':  'Disponible previa solicitud por correo electrónico.',
    'priv.s1.p':            'En cumplimiento del Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD) y la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa al usuario de la política de privacidad y cookies aplicada en este sitio web.',
    'priv.s2.h2':   '2. Datos personales que se tratan',
    'priv.s2.p1':   'Este sitio web no recoge datos personales directamente. No existe formulario de registro, ni suscripción, ni área privada. Los únicos datos que pueden tratarse son los generados de forma automática mediante el uso de cookies de terceros (Google), que se detallan en el apartado 5.',
    'priv.s2.p2':   'Los valores que el usuario introduce en la calculadora (capital, tasa de interés, años) no se envían a ningún servidor y se procesan exclusivamente en el navegador del usuario.',
    'priv.s3.h2':   '3. Finalidad del tratamiento y base legal',
    'priv.s3.th1':  'Finalidad',
    'priv.s3.th2':  'Base legal',
    'priv.s3.th3':  'Tercero implicado',
    'priv.s3.r1c1': 'Mostrar publicidad personalizada',
    'priv.s3.r1c2': 'Consentimiento (Art. 6.1.a RGPD)',
    'priv.s3.r2c1': 'Análisis de tráfico web',
    'priv.s3.r2c2': 'Consentimiento (Art. 6.1.a RGPD)',
    'priv.s3.r3c1': 'Funcionamiento técnico del sitio',
    'priv.s3.r3c2': 'Interés legítimo (Art. 6.1.f RGPD)',
    'priv.s4.h2':   '4. Destinatarios y transferencias internacionales',
    'priv.s4.p':    'Los datos pueden ser transferidos a los siguientes terceros:',
    'priv.s4.li1':  'Google LLC (EE.UU.) — para los servicios de Google AdSense y Google Analytics. Google está adherido a las garantías adecuadas para transferencias internacionales (Decisión de Adecuación UE-EE.UU. — Data Privacy Framework).',
    'priv.s4.li2':  'Netlify, Inc. (EE.UU.) — proveedor de alojamiento web. Los servidores pueden estar ubicados en la UE o EE.UU. según la configuración del CDN.',
    'priv.s4.p2':   'No se realizan otras transferencias internacionales de datos personales.',
    'priv.s5.h2':     '5. Política de Cookies',
    'priv.s5.intro':  'Una cookie es un pequeño fichero de texto que se almacena en el navegador del usuario cuando visita un sitio web. Este sitio utiliza cookies propias y de terceros para los fines descritos a continuación.',
    'priv.s5.h3a':    '5.1 Cookies técnicas (exentas de consentimiento)',
    'priv.s5.h3b':    '5.2 Cookies analíticas (requieren consentimiento)',
    'priv.s5.h3c':    '5.3 Cookies publicitarias (requieren consentimiento)',
    'priv.s5.h3d':    '5.4 Gestión de preferencias',
    'priv.tbl.name':     'Nombre',
    'priv.tbl.provider': 'Proveedor',
    'priv.tbl.purpose':  'Finalidad',
    'priv.tbl.duration': 'Duración',
    'priv.own':       'Propio',
    'priv.1year':     '1 año',
    'priv.2years':    '2 años',
    'priv.session':   'Sesión',
    'priv.s5.t1r1':   'Guardar las preferencias de cookies del usuario',
    'priv.s5.t2r1':   'Distinguir usuarios únicos',
    'priv.s5.t2r2':   'Mantener estado de sesión',
    'priv.s5.t3r1':   'Publicidad personalizada',
    'priv.s5.t3r2':   'Comprobar si el navegador acepta cookies',
    'priv.s5.t3r3':   'Publicidad basada en intereses',
    'priv.s5.google': 'Para más información sobre las cookies de Google, consulta su <a href="https://policies.google.com/technologies/cookies?hl=es" target="_blank" rel="noopener">política de cookies</a>.',
    'priv.s5.manage': 'Puedes revisar y cambiar tus preferencias de cookies en cualquier momento:',
    'priv.s5.reopen': 'Gestionar preferencias de cookies',
    'priv.s5.browser':'También puedes desactivar las cookies desde la configuración de tu navegador:',
    'priv.s6.h2':   '6. Derechos del usuario',
    'priv.s6.p':    'De acuerdo con el RGPD y la LOPDGDD, el usuario tiene derecho a:',
    'priv.s6.li1':  'Acceso: conocer qué datos personales se tratan.',
    'priv.s6.li2':  'Rectificación: corregir datos inexactos.',
    'priv.s6.li3':  'Supresión ("derecho al olvido"): solicitar la eliminación de sus datos.',
    'priv.s6.li4':  'Limitación: solicitar que se restrinja el tratamiento.',
    'priv.s6.li5':  'Portabilidad: recibir sus datos en formato estructurado.',
    'priv.s6.li6':  'Oposición: oponerse al tratamiento basado en interés legítimo.',
    'priv.s6.li7':  'Retirar el consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.',
    'priv.s6.contact': 'Para ejercer estos derechos, contacta en: <a href="mailto:calculadoracompuesta@gmail.com">calculadoracompuesta@gmail.com</a>. También tienes derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>: <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>.',
    'priv.s7.h2':   '7. Plazos de conservación',
    'priv.s7.p':    'Los datos asociados a cookies analíticas y publicitarias se conservan durante el período indicado en la tabla del apartado 5, o hasta que el usuario retire su consentimiento. Los registros de acceso del servidor (logs de Netlify) se conservan durante un máximo de 30 días.',
    'priv.s8.h2':   '8. Cambios en esta política',
    'priv.s8.p':    'Esta política puede actualizarse para adaptarse a cambios normativos o en los servicios utilizados. La fecha de última actualización siempre aparecerá indicada en la cabecera del documento. El uso continuado del sitio tras la publicación de cambios implica la aceptación de la nueva versión.',
    'sec1.h2':          '¿Qué es el interés compuesto y cómo funciona?',
    'sec1.p1':          'El interés compuesto es el mecanismo financiero por el cual los intereses generados en cada periodo se suman al capital principal, generando a su vez nuevos intereses en el siguiente ciclo. A diferencia del interés simple —donde los intereses siempre se calculan sobre el capital original—, el interés compuesto crea un efecto de bola de nieve que se acelera exponencialmente con el tiempo.',
    'sec1.p2':          'Este principio es la base de la mayoría de productos de inversión a largo plazo: fondos indexados, ETFs, planes de pensiones y cuentas de ahorro con reinversión automática de dividendos.',
    'ex.title':         'Ejemplo real con valores por defecto',
    'ex.capital':       'Capital inicial',
    'ex.monthly':       'Aportación mensual',
    'ex.rate':          'Tasa anual',
    'ex.period':        'Período',
    'ex.total':         'Total aportado',
    'ex.final':         'Capital final',
    'ex.interest':      'Intereses generados',
    'ex.note':          'Los intereses superan el 160% de lo aportado gracias a la capitalización compuesta.',
    'sec2.h2':          'Impacto de la frecuencia de capitalización',
    'sec2.lead':        'La misma inversión de 10.000 € al 7% durante 20 años produce resultados distintos según la frecuencia con la que se reinvierten los intereses:',
    'sec2.note':        '* Sin aportaciones mensuales. Capital inicial: 10.000 €, tasa: 7%, plazo: 20 años. La diferencia entre capitalización anual y diaria es menor de lo que muchos creen: tan solo 615 € en 20 años.',
    'th.freq':          'Frecuencia',
    'th.periods':       'Períodos/año',
    'th.finalcap':      'Capital final',
    'th.diff':          'Diferencia vs. anual',
    'freq.r.annual':    'Anual',
    'freq.r.biannual':  'Semestral',
    'freq.r.quarterly': 'Trimestral',
    'freq.r.monthly':   'Mensual',
    'freq.r.daily':     'Diaria',
    'sec3.h2':          'Claves para maximizar tu inversión',
    'acc1.title':       'El tiempo es tu mayor aliado',
    'acc1.body':        'Empezar a invertir 10 años antes puede duplicar o incluso triplicar tu capital final. La diferencia entre comenzar a los 25 o a los 35 años es enorme gracias a la capitalización. Cada año que pasa sin invertir es tiempo que el dinero no puede recuperar. Con un 7% anual, el dinero se dobla aproximadamente cada 10 años (Regla del 72: 72 ÷ 7 = 10,3 años).',
    'acc2.title':       'Estrategia de aportaciones periódicas (DCA)',
    'acc2.body':        'El Dollar Cost Averaging (DCA) o inversión periódica consiste en aportar una cantidad fija cada mes independientemente del precio del mercado. Esta estrategia reduce el riesgo de comprar en máximos y aprovecha las caídas para acumular más participaciones. Combinada con el interés compuesto, es la estrategia más recomendada para inversores particulares a largo plazo.',
    'acc3.title':       '¿Dónde invertir para obtener interés compuesto?',
    'acc3.body':        'Los fondos indexados y ETFs que replican índices como el S&P 500 o el MSCI World son los vehículos más eficientes para aprovechar el interés compuesto. Han ofrecido rentabilidades históricas de entre el 7% y el 10% anual a largo plazo. Otras opciones incluyen planes de pensiones con reinversión automática, cuentas de ahorro de alta rentabilidad o bonos con cupón reinvertido.',
    'sec4.h2':          'Preguntas frecuentes sobre el interés compuesto',
    'faq1.q':           '¿Qué es exactamente el interés compuesto?',
    'faq1.a':           'El interés compuesto es el proceso por el cual los intereses generados en cada período se suman al capital y generan a su vez nuevos intereses. Es decir, ganas intereses sobre los intereses ya acumulados. Este efecto se conoce popularmente como "la bola de nieve financiera" y es la razón por la que Einstein supuestamente lo llamó "la octava maravilla del mundo".',
    'faq2.q':           '¿Con cuánto dinero puedo empezar a invertir?',
    'faq2.a':           'Puedes empezar con cualquier cantidad. La mayoría de los brokers modernos como Interactive Brokers, Degiro o MyInvestor permiten empezar desde 1 €. Lo más importante no es la cantidad inicial sino la constancia en las aportaciones periódicas y el horizonte temporal. Una aportación de 100 € al mes durante 30 años al 7% anual genera más de 120.000 €.',
    'faq3.q':           '¿Qué rentabilidad anual es realista esperar?',
    'faq3.a':           'El S&P 500 ha ofrecido una rentabilidad media anual de aproximadamente un 10% en términos nominales y un 7% ajustado por inflación en los últimos 50 años. Para una cartera global diversificada, una estimación conservadora y realista oscila entre el 5% y el 8% anual neto de comisiones. Rentabilidades superiores al 10% exigen mayor riesgo o son excepcionales.',
    'faq4.q':           '¿Qué diferencia hay entre capitalización mensual y anual?',
    'faq4.a':           'La capitalización mensual calcula y reinvierte los intereses cada mes, mientras que la anual lo hace una vez al año. Cuanto más frecuente, mayor capital final. Sin embargo, como muestra nuestra tabla comparativa, la diferencia real entre capitalización anual y diaria para inversiones típicas es menor de lo que parece: unos 600 € en 20 años sobre 10.000 € al 7%.',
    'faq5.q':           '¿Qué es el multiplicador que muestra la calculadora?',
    'faq5.a':           'El multiplicador indica cuántas veces has multiplicado tu dinero respecto al total que has aportado. Un multiplicador de 3× significa que por cada euro invertido obtienes 3 euros al final del período, incluyendo tanto el capital aportado como los intereses generados. Es una forma intuitiva de visualizar el poder real del interés compuesto en tu inversión concreta.',
    'faq6.q':           '¿Los resultados de la calculadora tienen en cuenta la inflación?',
    'faq6.a':           'No, los resultados son en términos nominales, es decir, sin descontar el efecto de la inflación. Para obtener el valor real del capital futuro, puedes restar la inflación esperada (habitualmente 2-3%) a la tasa de rentabilidad que introduces. Por ejemplo, si esperas un 7% de rentabilidad y una inflación del 2,5%, introduce un 4,5% para ver el valor en euros de hoy.',
    'footer.disclaimer': 'Aviso legal: Esta calculadora tiene carácter exclusivamente informativo y educativo. Los resultados mostrados son estimaciones basadas en los parámetros introducidos y no constituyen asesoramiento financiero, fiscal ni de inversión. Las rentabilidades pasadas no garantizan resultados futuros. Consulta siempre con un asesor financiero certificado antes de tomar decisiones de inversión.',
    'footer.privacy':   'Política de Privacidad y Cookies',
    'footer.copy':      '© 2026 Calculadora Financiera · Actualizado en marzo de 2026',
    'idx.header.label': 'Datos históricos · 2010–2024',
    'idx.header.h1':    'Rentabilidad de los Grandes Índices Bursátiles',
    'idx.header.p':     'Compara el comportamiento histórico de los principales índices del mundo y entiende qué rentabilidad habrías obtenido invirtiendo desde 2010.',
    'idx.stat1':        'índices analizados',
    'idx.stat2':        'años de datos',
    'idx.filters.h2':   'Selecciona los índices a comparar',
    'idx.chart1.h2':    'Crecimiento acumulado de 10.000 € invertidos en 2010',
    'idx.chart1.p':     'Muestra cuánto habrían crecido 10.000 € invertidos a principios de 2010 en cada índice, en moneda local y sin comisiones ni impuestos.',
    'idx.chart2.h2':    'Rentabilidad anual por índice (%)',
    'idx.chart2.p':     'Cada barra representa el porcentaje de subida o bajada del índice durante ese año. Los años en rojo representan pérdidas.',
    'idx.table.h2':     'Estadísticas 2010–2024',
    'idx.edu.h2':       '¿Cómo interpretar estos datos?',
    'idx.edu.h3a':      'Rentabilidad pasada y futura',
    'idx.edu.pa':       'Los datos históricos son una referencia útil pero no garantizan resultados futuros. Mercados como el S&P 500 han tenido periodos de caídas superiores al 50% (como en 2008-2009) seguidos de fuertes recuperaciones. La clave es mantener la inversión a largo plazo.',
    'idx.edu.h3b':      'Divisa y cobertura',
    'idx.edu.pb':       'Los índices americanos (S&P 500, NASDAQ) cotizan en USD. Un inversor europeo obtiene una rentabilidad diferente dependiendo de la evolución EUR/USD. Los datos mostrados son en moneda local de cada índice, sin cobertura de divisa.',
    'idx.label.index':  'Ver índice:',
    'idx.th.index':     'Índice',
    'idx.th.region':    'Región',
    'idx.th.avg':       'Rent. media anual',
    'idx.th.best':      'Mejor año',
    'idx.th.worst':     'Peor año',
    'idx.th.final':     '10.000 € → hoy',
    'idx.footer.disc':  'Aviso: Los datos de rentabilidad son aproximados y de carácter educativo. No constituyen asesoramiento financiero ni recomendación de inversión.',
    'nav.conversor':        'Conversor divisas',
    'conv.header.label':    'Tipos de cambio en tiempo real',
    'conv.header.h1':       'Conversor de Divisas',
    'conv.header.p':        'Convierte entre las principales monedas del mundo al instante. Datos actualizados diariamente por el Banco Central Europeo.',
    'conv.stat1':           'monedas disponibles',
    'conv.stat2':           'fuente oficial',
    'conv.loading':         'Cargando tipos de cambio…',
    'conv.amount':          'Cantidad',
    'conv.from':            'De',
    'conv.result':          'Resultado',
    'conv.to':              'A',
    'conv.table.h2':        'Tabla de tipos cruzados',
    'conv.table.p':         'Equivalencia de 1 unidad de cada moneda respecto al Euro (EUR). Actualizado diariamente con datos del BCE.',
    'conv.th.currency':     'Moneda',
    'conv.th.code':         'Código',
    'conv.th.rate':         '1 EUR =',
    'conv.th.inverse':      '1 unidad = EUR',
    'conv.edu.h2':          '¿Cómo funcionan los tipos de cambio?',
    'conv.edu.p1':          'El tipo de cambio es el precio al que una moneda se intercambia por otra. Los mercados de divisas (Forex) mueven más de 7 billones de dólares diarios, siendo el mayor mercado financiero del mundo.',
    'conv.edu.p2':          'Los datos provienen de la API de Frankfurter con los tipos de referencia oficiales del BCE cada día hábil. El tipo real en un banco incluirá una comisión adicional del 1–3%.',
    'conv.edu.box.title':   'Monedas principales',
    'conv.footer.disc':     'Los tipos de cambio mostrados son de referencia (BCE) y pueden diferir del tipo aplicado por entidades financieras. No constituyen asesoramiento financiero.',

  },

  en: {
    'page.title':       'Free Compound Interest Calculator | Investment Simulator',
    'nav.logo':         'Financial Calculator',
    'nav.calc':         'Calculator',
    'nav.indices':      'World Indices',
    'header.label':     'Free financial tool',
    'header.h1':        'Compound Interest Calculator',
    'header.p':         'Visualize the real growth of your investment with periodic contributions and configurable compounding. Instant results, no sign-up required.',
    'stat.years':       'years projection',
    'stat.freq':        'compounding frequencies',
    'stat.free':        'free & no sign-up',
    'form.h2':          'Configure your simulation',
    'label.capital':    'Initial capital',
    'label.aportacion': 'Monthly contribution',
    'label.tasa':       'Annual interest rate',
    'label.anos':       'Time horizon',
    'label.freq':       'Compounding frequency',
    'freq.monthly':     'Monthly (×12)',
    'freq.quarterly':   'Quarterly (×4)',
    'freq.biannual':    'Semi-annual (×2)',
    'freq.annual':      'Annual (×1)',
    'freq.daily':       'Daily (×365)',
    'unit.years':       'years',
    'results.h2':       'Results',
    'res.total':        'Final Capital',
    'res.interest':     'Interest Earned',
    'res.invested':     'Total Invested',
    'res.multi':        'Multiplier',
    'table.h2':         'Annual breakdown',
    'th.year':          'Year',
    'th.capital':       'Capital invested',
    'th.contributions': 'Contributions',
    'th.interest':      'Interest',
    'th.total':         'Total accumulated',
    // Share
    'share.btn':        'Share simulation',
    'share.copied':     'Link copied!',        
    // Export chart
    'export.btn': 'Export chart (PNG)',
    'export.saved': 'Chart downloaded',

    // Cookie banner
    'cookie.title':     'This site uses cookies',
    'cookie.desc':      'We use our own and third-party cookies (Google Analytics, Google AdSense) to analyze traffic and display relevant advertising. You can accept all, reject them or customize your choice. More information in our ',
    'cookie.privacy':   'Privacy Policy',
    'cookie.analytics': 'Analytics cookies',
    'cookie.ga':        'Google Analytics',
    'cookie.ads':       'Advertising cookies',
    'cookie.adsense':   'Google AdSense',
    'cookie.reject':    'Reject all',
    'cookie.save':      'Save selection',
    'cookie.accept':    'Accept all',
    // ── Privacy Page ────────────────────
    'priv.page.title':  'Privacy & Cookie Policy | Financial Calculator',
    'priv.h1':          'Privacy & Cookie Policy',
    'priv.meta':        'Last updated: March 2026 · Version 1.0',
    'priv.backlink':    'Back to calculator',
    'priv.s1.h2':           '1. Data controller',
    'priv.s1.owner.label':  'Website owner:',
    'priv.s1.email.label':  'Contact email:',
    'priv.s1.web.label':    'Website:',
    'priv.s1.country.label':'Country:',
    'priv.s1.country.val':  'Spain',
    'priv.s1.address.label':'Postal address:',
    'priv.s1.address.val':  'Available upon request by email.',
    'priv.s1.p':            'In compliance with Regulation (EU) 2016/679 (GDPR), the Spanish Organic Law 3/2018 on Personal Data Protection (LOPDGDD) and Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the user is informed of the privacy and cookie policy applied on this website.',
    'priv.s2.h2':   '2. Personal data collected',
    'priv.s2.p1':   'This website does not collect personal data directly. There is no registration form, subscription, or private area. The only data that may be processed is automatically generated through third-party cookies (Google), detailed in section 5.',
    'priv.s2.p2':   "Values entered by the user in the calculator (capital, interest rate, years) are not sent to any server and are processed exclusively in the user's browser.",
    'priv.s3.h2':   '3. Purpose and legal basis',
    'priv.s3.th1':  'Purpose',
    'priv.s3.th2':  'Legal basis',
    'priv.s3.th3':  'Third party',
    'priv.s3.r1c1': 'Display personalised advertising',
    'priv.s3.r1c2': 'Consent (Art. 6.1.a GDPR)',
    'priv.s3.r2c1': 'Web traffic analysis',
    'priv.s3.r2c2': 'Consent (Art. 6.1.a GDPR)',
    'priv.s3.r3c1': 'Technical operation of the site',
    'priv.s3.r3c2': 'Legitimate interest (Art. 6.1.f GDPR)',
    'priv.s4.h2':   '4. Recipients and international transfers',
    'priv.s4.p':    'Data may be transferred to the following third parties:',
    'priv.s4.li1':  'Google LLC (USA) — for Google AdSense and Google Analytics services. Google adheres to adequate safeguards for international transfers (EU-US Data Privacy Framework).',
    'priv.s4.li2':  'Netlify, Inc. (USA) — web hosting provider. Servers may be located in the EU or USA depending on CDN configuration.',
    'priv.s4.p2':   'No other international transfers of personal data are made.',
    'priv.s5.h2':     '5. Cookie Policy',
    'priv.s5.intro':  "A cookie is a small text file stored in the user's browser when visiting a website. This site uses first-party and third-party cookies for the purposes described below.",
    'priv.s5.h3a':    '5.1 Technical cookies (consent-exempt)',
    'priv.s5.h3b':    '5.2 Analytics cookies (require consent)',
    'priv.s5.h3c':    '5.3 Advertising cookies (require consent)',
    'priv.s5.h3d':    '5.4 Preference management',
    'priv.tbl.name':     'Name',
    'priv.tbl.provider': 'Provider',
    'priv.tbl.purpose':  'Purpose',
    'priv.tbl.duration': 'Duration',
    'priv.own':       'Own',
    'priv.1year':     '1 year',
    'priv.2years':    '2 years',
    'priv.session':   'Session',
    'priv.s5.t1r1':   'Store user cookie preferences',
    'priv.s5.t2r1':   'Distinguish unique users',
    'priv.s5.t2r2':   'Maintain session state',
    'priv.s5.t3r1':   'Personalised advertising',
    'priv.s5.t3r2':   'Check if browser accepts cookies',
    'priv.s5.t3r3':   'Interest-based advertising',
    'priv.s5.google': 'For more information about Google cookies, see their <a href="https://policies.google.com/technologies/cookies?hl=en" target="_blank" rel="noopener">cookie policy</a>.',
    'priv.s5.manage': 'You can review and change your cookie preferences at any time:',
    'priv.s5.reopen': 'Manage cookie preferences',
    'priv.s5.browser':'You can also disable cookies from your browser settings:',
    'priv.s6.h2':   '6. User rights',
    'priv.s6.p':    'Under the GDPR and LOPDGDD, users have the right to:',
    'priv.s6.li1':  'Access: know what personal data is processed.',
    'priv.s6.li2':  'Rectification: correct inaccurate data.',
    'priv.s6.li3':  'Erasure ("right to be forgotten"): request deletion of your data.',
    'priv.s6.li4':  'Restriction: request that processing be restricted.',
    'priv.s6.li5':  'Portability: receive your data in a structured format.',
    'priv.s6.li6':  'Objection: object to processing based on legitimate interest.',
    'priv.s6.li7':  'Withdraw consent at any time, without affecting the lawfulness of prior processing.',
    'priv.s6.contact': 'To exercise these rights, contact: <a href="mailto:calculadoracompuesta@gmail.com">calculadoracompuesta@gmail.com</a>. You also have the right to lodge a complaint with the <strong>Spanish Data Protection Agency (AEPD)</strong>: <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>.',
    'priv.s7.h2':   '7. Retention periods',
    'priv.s7.p':    'Data associated with analytics and advertising cookies is retained for the period indicated in the table in section 5, or until the user withdraws consent. Server access logs (Netlify) are retained for a maximum of 30 days.',
    'priv.s8.h2':   '8. Changes to this policy',
    'priv.s8.p':    'This policy may be updated to adapt to regulatory changes or changes in the services used. The date of the last update will always be indicated in the document header. Continued use of the site after the publication of changes implies acceptance of the new version.',
    'sec1.h2':          'What is compound interest and how does it work?',
    'sec1.p1':          'Compound interest is the financial mechanism by which the interest generated each period is added to the principal capital, generating new interest in the next cycle. Unlike simple interest — where interest is always calculated on the original capital — compound interest creates a snowball effect that grows exponentially over time.',
    'sec1.p2':          'This principle is the basis of most long-term investment products: index funds, ETFs, pension plans and savings accounts with automatic dividend reinvestment.',
    'ex.title':         'Real example with default values',
    'ex.capital':       'Initial capital',
    'ex.monthly':       'Monthly contribution',
    'ex.rate':          'Annual rate',
    'ex.period':        'Period',
    'ex.total':         'Total invested',
    'ex.final':         'Final capital',
    'ex.interest':      'Interest generated',
    'ex.note':          'Interest exceeds 160% of the total invested thanks to compound growth.',
    'sec2.h2':          'Impact of compounding frequency',
    'sec2.lead':        'The same investment of €10,000 at 7% over 20 years produces different results depending on how often interest is reinvested:',
    'sec2.note':        '* No monthly contributions. Initial capital: €10,000, rate: 7%, term: 20 years. The difference between annual and daily compounding is smaller than many think: only €615 over 20 years.',
    'th.freq':          'Frequency',
    'th.periods':       'Periods/year',
    'th.finalcap':      'Final capital',
    'th.diff':          'Difference vs. annual',
    'freq.r.annual':    'Annual',
    'freq.r.biannual':  'Semi-annual',
    'freq.r.quarterly': 'Quarterly',
    'freq.r.monthly':   'Monthly',
    'freq.r.daily':     'Daily',
    'sec3.h2':          'Keys to maximizing your investment',
    'acc1.title':       'Time is your greatest ally',
    'acc1.body':        'Starting to invest 10 years earlier can double or even triple your final capital. The difference between starting at 25 or 35 is enormous thanks to compounding. Every year that passes without investing is time that money cannot recover. At 7% per year, money doubles approximately every 10 years (Rule of 72: 72 ÷ 7 = 10.3 years).',
    'acc2.title':       'Periodic contribution strategy (DCA)',
    'acc2.body':        'Dollar Cost Averaging (DCA) consists of contributing a fixed amount each month regardless of market price. This strategy reduces the risk of buying at peaks and takes advantage of market dips to accumulate more shares. Combined with compound interest, it is the most recommended strategy for individual long-term investors.',
    'acc3.title':       'Where to invest to get compound interest?',
    'acc3.body':        'Index funds and ETFs that replicate indices like the S&P 500 or MSCI World are the most efficient vehicles to take advantage of compound interest. They have delivered historical returns of between 7% and 10% annually over the long term. Other options include pension plans with automatic reinvestment, high-yield savings accounts or bonds with reinvested coupons.',
    'sec4.h2':          'Frequently asked questions about compound interest',
    'faq1.q':           'What exactly is compound interest?',
    'faq1.a':           'Compound interest is the process by which interest generated each period is added to the capital and generates further interest in turn. You earn interest on already accumulated interest. This effect is popularly known as the "financial snowball" and is why Einstein supposedly called it "the eighth wonder of the world".',
    'faq2.q':           'How much money do I need to start investing?',
    'faq2.a':           'You can start with any amount. Most modern brokers like Interactive Brokers, DEGIRO or MyInvestor allow you to start from €1. The most important thing is not the initial amount but the consistency of periodic contributions and the time horizon. A contribution of €100 per month over 30 years at 7% per year generates over €120,000.',
    'faq3.q':           'What annual return is realistic to expect?',
    'faq3.a':           'The S&P 500 has delivered an average annual return of approximately 10% in nominal terms and 7% adjusted for inflation over the last 50 years. For a globally diversified portfolio, a conservative and realistic estimate ranges between 5% and 8% per year net of fees. Returns above 10% require greater risk or are exceptional.',
    'faq4.q':           'What is the difference between monthly and annual compounding?',
    'faq4.a':           'Monthly compounding calculates and reinvests interest each month, while annual compounding does so once a year. The more frequent, the higher the final capital. However, as our comparison table shows, the real difference between annual and daily compounding for typical investments is smaller than it seems: about €600 over 20 years on €10,000 at 7%.',
    'faq5.q':           'What is the multiplier shown by the calculator?',
    'faq5.a':           'The multiplier indicates how many times you have multiplied your money compared to the total you have contributed. A multiplier of 3× means that for every euro invested you get 3 euros at the end of the period, including both the contributed capital and the generated interest.',
    'faq6.q':           'Do the calculator results account for inflation?',
    'faq6.a':           "No, the results are in nominal terms, without discounting the effect of inflation. To get the real value of future capital, subtract expected inflation (usually 2-3%) from the return rate you enter. For example, if you expect a 7% return and 2.5% inflation, enter 4.5% to see the value in today's euros.",
    'footer.disclaimer': 'Legal notice: This calculator is for informational and educational purposes only. Results shown are estimates based on the parameters entered and do not constitute financial, tax or investment advice. Past performance does not guarantee future results. Always consult a certified financial advisor before making investment decisions.',
    'footer.privacy':   'Privacy & Cookie Policy',
    'footer.copy':      '© 2026 Financial Calculator · Updated March 2026',
    'idx.header.label': 'Historical data · 2010–2024',
    'idx.header.h1':    "Performance of the World's Major Stock Indices",
    'idx.header.p':     "Compare the historical performance of the world's leading indices and understand what return you would have obtained investing since 2010.",
    'idx.stat1':        'indices analyzed',
    'idx.stat2':        'years of data',
    'idx.filters.h2':   'Select indices to compare',
    'idx.chart1.h2':    'Cumulative growth of €10,000 invested in 2010',
    'idx.chart1.p':     'Shows how much €10,000 invested at the beginning of 2010 would have grown in each index, in local currency and without fees or taxes.',
    'idx.chart2.h2':    'Annual return by index (%)',
    'idx.chart2.p':     'Each bar represents the percentage gain or loss of the index during that year. Red years represent losses.',
    'idx.table.h2':     'Statistics 2010–2024',
    'idx.edu.h2':       'How to interpret this data?',
    'idx.edu.h3a':      'Past and future performance',
    'idx.edu.pa':       'Historical data is a useful reference but does not guarantee future results. Markets like the S&P 500 have had periods of falls exceeding 50% (such as 2008-2009) followed by strong recoveries. The key is to maintain the investment over the long term.',
    'idx.edu.h3b':      'Currency and hedging',
    'idx.edu.pb':       "US indices (S&P 500, NASDAQ) are quoted in USD. A European investor obtains a different return depending on the EUR/USD exchange rate. The data shown is in each index's local currency, without currency hedging.",
    'idx.label.index':  'View index:',
    'idx.th.index':     'Index',
    'idx.th.region':    'Region',
    'idx.th.avg':       'Avg. annual return',
    'idx.th.best':      'Best year',
    'idx.th.worst':     'Worst year',
    'idx.th.final':     '€10,000 → today',
    'idx.footer.disc':  'Notice: Return data is approximate and for educational purposes only. It does not constitute financial advice or investment recommendation.',
    'nav.conversor':        'Currency converter',
    'conv.header.label':    'Real-time exchange rates',
    'conv.header.h1':       'Currency Converter',
    'conv.header.p':        'Convert between the world\'s major currencies instantly. Rates updated daily by the European Central Bank.',
    'conv.stat1':           'currencies available',
    'conv.stat2':           'official source',
    'conv.loading':         'Loading exchange rates…',
    'conv.amount':          'Amount',
    'conv.from':            'From',
    'conv.result':          'Result',
    'conv.to':              'To',
    'conv.table.h2':        'Cross-rate table',
    'conv.table.p':         'Equivalent of 1 unit of each currency vs Euro (EUR). Updated daily with ECB data.',
    'conv.th.currency':     'Currency',
    'conv.th.code':         'Code',
    'conv.th.rate':         '1 EUR =',
    'conv.th.inverse':      '1 unit = EUR',
    'conv.edu.h2':          'How do exchange rates work?',
    'conv.edu.p1':          'An exchange rate is the price at which one currency is exchanged for another. Forex markets move more than $7 trillion daily, making it the world\'s largest financial market.',
    'conv.edu.p2':          'Data comes from the Frankfurter API with official ECB reference rates each business day. The actual rate at a bank will include an additional 1–3% commission.',
    'conv.edu.box.title':   'Major currencies',
    'conv.footer.disc':     'Exchange rates shown are for reference (ECB) and may differ from rates applied by financial institutions. Not financial advice.',
  }
};

// ════════════════════════════════════════
//  IDIOMA
// ════════════════════════════════════════
let currentLang = localStorage.getItem('lang') || 'es';

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.documentElement.lang = lang;
  if (t['page.title'] && !document.querySelector('[data-i18n="priv.page.title"]')) {
    document.title = t['page.title'];
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';

  localStorage.setItem('lang', lang);
  currentLang = lang;

  // Si el banner de cookies ya está en el DOM, actualiza sus textos
  _updateBannerTexts(lang, t);
  // Si estamos en conversor.html, actualiza monedas
  if (document.getElementById('currency-from')) {
    window.populateSelects?.();
  }

}

// Actualiza textos del banner sin recrearlo
function _updateBannerTexts(lang, t) {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  const keys = {
    '#cookie-title':          'cookie.title',
    '.cb-actions .cb-reject': 'cookie.reject',
    '.cb-actions .cb-custom': 'cookie.save',
    '.cb-actions .cb-accept': 'cookie.accept',
  };
  Object.entries(keys).forEach(([sel, key]) => {
    const el = banner.querySelector(sel);
    if (el && t[key]) el.textContent = t[key];
  });
  const labels = banner.querySelectorAll('.cb-toggle-label');
  if (labels[0] && t['cookie.analytics'] && t['cookie.ga'])
    labels[0].innerHTML = `${t['cookie.analytics']} <small>(${t['cookie.ga']})</small>`;
  if (labels[1] && t['cookie.ads'] && t['cookie.adsense'])
    labels[1].innerHTML = `${t['cookie.ads']} <small>(${t['cookie.adsense']})</small>`;
}

function toggleLang() {
  applyTranslations(currentLang === 'es' ? 'en' : 'es');
}
window.toggleLang = toggleLang;

// ════════════════════════════════════════
//  TEMA
// ════════════════════════════════════════
let currentTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  currentTheme = theme;
  updateChartColors(theme);
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}
window.toggleTheme = toggleTheme;

function updateChartColors(theme) {
  if (typeof Chart === 'undefined') return;
  const tick   = theme === 'light' ? '#6b7280' : '#4f608a';
  const grid   = theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.04)';
  const legend = theme === 'light' ? '#374151' : '#8b9cc8';
  ['myChart', 'chartCumulativo', 'chartAnual'].forEach(id => {
    const chart = Chart.getChart(id);
    if (!chart) return;
    const s = chart.options.scales;
    if (s?.x) { s.x.ticks.color = tick; if (s.x.grid) s.x.grid.color = grid; }
    if (s?.y) { s.y.ticks.color = tick; if (s.y.grid) s.y.grid.color = grid; }
    if (chart.options.plugins?.legend?.labels)
      chart.options.plugins.legend.labels.color = legend;
    if (chart.options.plugins?.tooltip) {
      chart.options.plugins.tooltip.backgroundColor = theme === 'light' ? '#ffffff' : '#0f1628';
      chart.options.plugins.tooltip.titleColor      = theme === 'light' ? '#064e3b' : '#f0f4ff';
      chart.options.plugins.tooltip.bodyColor       = theme === 'light' ? '#374151' : '#8b9cc8';
      chart.options.plugins.tooltip.borderColor     = theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)';
    }
    chart.update('none');
  });
}

// ════════════════════════════════════════
//  INIT
// ════════════════════════════════════════
(function init() {
  applyTheme(currentTheme);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyTranslations(currentLang);
      setTimeout(() => updateChartColors(currentTheme), 150);
    });
  } else {
    applyTranslations(currentLang);
    setTimeout(() => updateChartColors(currentTheme), 150);
  }
})();