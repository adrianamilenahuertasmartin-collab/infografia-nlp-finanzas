// BASE DE DATOS DE LA ACTIVIDAD ACADÉMICA
const db = {
  conceptos: [
    {
      id: "tok",
      titulo: "🔤 Tokenización",
      desc: "Divide un texto continuo en tokens (palabras o símbolos).",
      ejemplo: "['El', 'banco', 'aprobó', 'el', 'crédito']",
      icon: "🔤"
    },
    {
      id: "lem",
      titulo: "📚 Lematización",
      desc: "Reduce palabras a su raíz lematizada analizando el contexto gramatical.",
      ejemplo: "pagando / pagará ➔ 'pagar'",
      icon: "📚"
    },
    {
      id: "emb",
      titulo: "🌐 Embeddings",
      desc: "Representación vectorial numérica que captura similitud semántica entre palabras.",
      ejemplo: "similitud('Crédito', 'Préstamo') = 0.92",
      icon: "🌐"
    },
    {
      id: "mod",
      titulo: "🧠 Modelos NLP",
      desc: "Algoritmos capaces de clasificar opiniones, entender contexto y responder.",
      ejemplo: "Predicción de intención del cliente.",
      icon: "🧠"
    }
  ],
  librerias: [
    {
      id: "nltk",
      titulo: "NLTK Toolkit",
      desc: "Librería estándar para docencia e investigación en Python.",
      ejemplo: "Capacidad: Tokenización y POS Tagging. Límite: Lenta para tiempo real.",
      icon: "📘"
    },
    {
      id: "spacy",
      titulo: "spaCy Industrial",
      desc: "Optimizada para entorno de producción de alta velocidad.",
      ejemplo: "Capacidad: Extracción NER de datos en contratos. Límite: Menos personalizable.",
      icon: "⚡"
    },
    {
      id: "gensim",
      titulo: "Gensim Models",
      desc: "Especializada en modelado de temas y algoritmos Word2Vec.",
      ejemplo: "Capacidad: Topic Modeling en corpus de clientes.",
      icon: "📊"
    }
  ],
  aplicaciones: [
    {
      id: "pqrs",
      titulo: "Análisis de PQRS",
      desc: "Clasificación automática de reclamos y urgencia en canales digitales.",
      ejemplo: "Prioriza casos críticos de fraudes o cobros no autorizados.",
      icon: "📥"
    },
    {
      id: "bot",
      titulo: "Chatbots Bancarios",
      desc: "Asistentes 24/7 para respuestas inmediatas de saldos y productos.",
      ejemplo: "Reduce la saturación en canales de soporte telefónico.",
      icon: "🤖"
    },
    {
      id: "fraude",
      titulo: "Detección Fraude",
      desc: "Análisis de texto en descripciones de transferencias y alertas.",
      ejemplo: "Detecta patrones anómalos previniendo el lavado de dinero.",
      icon: "🛡️"
    },
    {
      id: "score",
      titulo: "Scoring Documental",
      desc: "Extracción automática (NER) de datos en certificaciones de renta.",
      ejemplo: "Aprobación veloz de créditos analizando PDFs adjuntos.",
      icon: "📄"
    }
  ]
};

let currentCategory = 'conceptos';

function renderNodes(categoryKey) {
  const wrapper = document.getElementById('nodes-wrapper');
  wrapper.innerHTML = '';
  
  const items = db[categoryKey];
  const total = items.length;
  
  // Radio del círculo dinámico
  const radius = window.innerWidth < 600 ? 130 : 200; 

  items.forEach((item, index) => {
    const angle = (index / total) * (2 * Math.PI) - (Math.PI / 2);
    const x = Math.round(radius * Math.cos(angle));
    const y = Math.round(radius * Math.sin(angle));

    const node = document.createElement('div');
    node.className = 'node-item';
    node.style.transform = `translate(${x}px, ${y}px)`;
    
    node.innerHTML = `
      <span class="node-icon">${item.icon}</span>
      <span class="node-label">${item.titulo.split(' ')[0]}</span>
    `;

    node.onclick = () => selectNode(item, node);
    wrapper.appendChild(node);
  });
}

function selectNode(item, nodeElem) {
  document.querySelectorAll('.node-item').forEach(n => n.classList.remove('selected'));
  nodeElem.classList.add('selected');

  const core = document.getElementById('core-display');
  core.innerHTML = `
    <div class="core-active-content">
      <h3>${item.titulo}</h3>
      <p>${item.desc}</p>
      <div class="core-badge-box">${item.ejemplo}</div>
    </div>
  `;
}

function switchCategory(catKey, btnElem) {
  currentCategory = catKey;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  btnElem.classList.add('active');

  // Reset core display
  document.getElementById('core-display').innerHTML = `
    <div class="core-placeholder">
      <span class="core-icon">🔮</span>
      <h3>Explora el Diagrama</h3>
      <p>Selecciona un elemento circular del anillo para desplegar los detalles aquí.</p>
    </div>
  `;

  renderNodes(catKey);
}

document.addEventListener('DOMContentLoaded', () => {
  renderNodes('conceptos');
});