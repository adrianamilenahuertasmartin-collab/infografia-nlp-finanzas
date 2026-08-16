const modalData = {
  tokenizacion: {
    titulo: "🔤 Tokenización de Texto",
    cuerpo: "Proceso de dividir un texto no estructurado en partes individuales llamadas <strong>tokens</strong> (palabras, frases o números).",
    caso: "<strong>Ejemplo en Banca:</strong><br>'El cliente solicitó un crédito por $5,000'<br>➔ <code>['El', 'cliente', 'solicitó', 'un', 'crédito', 'por', '$5,000']</code>"
  },
  normalizacion: {
    titulo: "📚 Lematización y Stemming",
    cuerpo: "Son métodos para transformar las palabras a su raíz canónica. El Stemming recorta prefijos o sufijos, mientras que la Lematización analiza el contexto gramatical completo.",
    caso: "<strong>Ejemplo:</strong><br>Palabras: <em>pagando, pagó, pagará</em><br>➔ Lema único: <strong>pagar</strong>"
  },
  embeddings: {
    titulo: "🌐 Embeddings Vectoriales",
    cuerpo: "Representación matemática de palabras en un espacio numérico vectorial. Permite a las máquinas entender la cercanía semántica entre conceptos.",
    caso: "<strong>Aporte:</strong> La palabra <em>'Préstamo'</em> queda matemáticamente muy cerca de <em>'Crédito'</em> y lejos de <em>'Automóvil'</em>."
  },
  modelos: {
    titulo: "🧠 Modelos de Lenguaje",
    cuerpo: "Algoritmos avanzados capaces de entender la intención del usuario y predecir o generar texto coherente.",
    caso: "<strong>Aplicación:</strong> Motores de búsqueda interna dentro del portal de banca en línea."
  },
  nltk: {
    titulo: "📚 NLTK (Natural Language Toolkit)",
    cuerpo: "Librería clásica de Python ideal para educación y aprendizaje de algoritmos iniciales.",
    caso: "<strong>Capacidades:</strong> Tokenización y análisis gramatical.<br><strong>Limitación:</strong> Lenta para procesar datos masivos en tiempo real."
  },
  spacy: {
    titulo: "⚡ spaCy (Industrial NLP)",
    cuerpo: "Diseñada para entornos de alta velocidad en producción bancaria.",
    caso: "<strong>Capacidades:</strong> Reconocimiento de Entidades (NER) para extraer nombres, fechas y montos en contratos de crédito."
  },
  gensim: {
    titulo: "🌐 Gensim",
    cuerpo: "Especializada en modelado de temas (Topic Modeling) y vectores de palabras (Word2Vec).",
    caso: "<strong>Capacidades:</strong> Agrupa grandes volúmenes de documentos de reclamos por temáticas afines."
  },
  pqrs: {
    titulo: "📊 Clasificación de PQRS",
    cuerpo: "Analiza y clasifica Peticiones, Quejas, Reclamos y Sugerencias de usuarios.",
    caso: "<strong>Aporte de Valor:</strong> Detecta automáticamente reclamos urgentes (ej. 'cobro indebido') reduciendo el tiempo de respuesta."
  },
  chatbots: {
    titulo: "🤖 Chatbots Financieros 24/7",
    cuerpo: "Asistentes virtuales que atienden dudas de clientes en lenguaje natural.",
    caso: "<strong>Aporte de Valor:</strong> Resuelven consultas sobre saldos y tarjetas sin saturar el call center."
  },
  fraude: {
    titulo: "🛡️ Detección de Fraude",
    cuerpo: "Revisión de texto en transferencias y mensajes bancarios buscando patrones sospechosos.",
    caso: "<strong>Aporte de Valor:</strong> Previene suplantaciones y lavado de activos antes de procesar el pago."
  },
  scoring: {
    titulo: "📄 Scoring Documental de Crédito",
    cuerpo: "Extracción automática de datos desde certificados e informes de renta.",
    caso: "<strong>Aporte de Valor:</strong> Aprueba solicitudes de crédito en minutos al leer automáticamente los PDF."
  }
};

function openModal(key) {
  const data = modalData[key];
  if (!data) return;

  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <h3 class="modal-header-title">${data.titulo}</h3>
    <p>${data.cuerpo}</p>
    <div class="modal-box-info">${data.caso}</div>
  `;

  document.getElementById('modal-container').style.display = 'flex';
}

function closeModalDirect() {
  document.getElementById('modal-container').style.display = 'none';
}

function closeModal(event) {
  if (event.target.id === 'modal-container') {
    closeModalDirect();
  }
}