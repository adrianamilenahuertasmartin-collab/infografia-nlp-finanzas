// Base de datos estructurada con contenido detallado
const conceptosData = {
  tokenizacion: {
    titulo: "🔤 Tokenización en Datos Financieros",
    descripcion: "La tokenización es el proceso fundamental de segmentación de un flujo de texto no estructurado en unidades discretas (tokens), tales como palabras, subpalabras o caracteres numéricos.",
    tecnico: "En la banca, los tokenizadores deben adaptarse para manejar correctamente cifras monetarias (ej. '$1,500.50 USD'), fechas de vencimiento y códigos SWIFT sin descomponer la entidad clave.",
    ejemplo: "Texto original: 'El cliente transfirió $2,500 el 15/08/2026.'\nTokens: ['El', 'cliente', 'transfirió', '$2,500', 'el', '15/08/2026', '.']",
    impacto: "Métrica clave: Reduce en un 35% la ambigüedad lingüística en motores de procesamiento previo."
  },
  lematizacion: {
    titulo: "📚 Lematización vs. Lematización en Finanzas",
    descripcion: "Consiste en la normalización morfológica del texto. La lematización reduce una palabra a su forma canónica (lema) analizando el contexto gramatical, a diferencia del stemming que corta prefijos y sufijos por reglas brutas.",
    tecnico: "En análisis de riesgo crediticio, permite unificar términos como 'reembolsaron', 'reembolsará', 'reembolso' bajo el único lema 'reembolsar', evitando la dispersión en las matrices de vocabulario.",
    ejemplo: "Entrada: 'Los analistas financieros estuvieron revisando las cotizaciones.'\nResultado: 'El analista financiero estar revisar el cotización.'",
    impacto: "Optimización: Compacta el tamaño del diccionario de entrenamiento hasta en un 40%."
  },
  embeddings: {
    titulo: "🌐 Embeddings Vectoriales y Semántica Financiera",
    descripcion: "Transformación de conceptos textuales en vectores numéricos continuos en espacios multidimensionales (Word2Vec, FastText, Ada-002). Capturan relaciones de afinidad semántica mediante distancia coseno.",
    tecnico: "Permiten calcular equivalencias financieras donde la ecuación vectorial conserva lógica del negocio: Vector('Banco') - Vector('Dinero') + Vector('Acciones') ≈ Vector('Bolsa de Valores').",
    ejemplo: "cos_sim( Vector('Hipotecario'), Vector('Préstamo') ) = 0.89\ncos_sim( Vector('Hipotecario'), Vector('Nube') ) = 0.12",
    impacto: "Precisión: Fundamento principal para los motores de búsqueda semántica en repositorios normativos."
  },
  transformers: {
    titulo: "⚙️ Arquitectura Transformers y Auto-Atención",
    descripcion: "Introducidos por Vaswani et al., reemplazaron a las redes recurrentes (LSTM) gracias al mecanismo de 'Self-Attention', permitiendo evaluar dependencias a larga distancia paralelizando el cómputo.",
    tecnico: "Permiten analizar un contrato de 50 páginas identificando si una cláusula al inicio contradice una exclusión de responsabilidad ubicada al final del documento.",
    ejemplo: "Atención cruzada: Asocia el pronombre 'esta' directamente con 'política de amortización' mencionada 3 párrafos antes.",
    impacto: "Rendimiento: Permite el procesamiento paralelo acelerado por arquitectura de GPU/TPU."
  },
  llms: {
    titulo: "🧠 Modelos de Lenguaje Financieros (Fin-LLMs)",
    descripcion: "Modelos masivos de parámetros (LLMs) ajustados con finetuning instruccional sobre bibliotecas especializadas (BloombergGPT, FinBERT).",
    tecnico: "Especializados en interpretar balances generales, notas explicativas de auditores y jerga regulatoria con baja probabilidad de alucinación.",
    ejemplo: "Prompt: 'Resuma la perspectiva de riesgo de liquidez del reporte 10-K.'\nSalida: Análisis resumido con citas de métricas EBITDA y coberturas de deuda.",
    impacto: "Eficiencia: Reduce los tiempos de lectura de informes anuales de horas a segundos."
  }
};

const aplicacionesData = {
  pqrs: {
    titulo: "📊 Clasificación Automatizada de PQRS",
    descripcion: "Sistemas inteligentes para la recepción, enrutamiento y priorización automática de Peticiones, Quejas, Reclamos y Sugerencias en banca masiva.",
    funcionalidad: "Analiza el sentimiento e intención mediante modelos BERT multilingües, etiquetando los casos críticos (ej. 'Cobro no autorizado' o 'Fraude') para dar prioridad de atención inmediata.",
    beneficio: "Atención prioritaria y reducción del 60% en el tiempo de respuesta inicial.",
    ejemplo_uso: "Un reclamo con tono de insatisfacción alto es escalado automáticamente a la división legal o de defensoría del consumidor."
  },
  chatbots: {
    titulo: "🤖 Chatbots Conversacionales Financieros",
    descripcion: "Agentes virtuales impulsados por IA Generativa e integración RAG (Retrieval-Augmented Generation) sobre las bases de conocimiento del banco.",
    funcionalidad: "Permiten a los usuarios realizar consultas de saldo, generación de certificados, asesoría en tarjetas de crédito e instrucciones paso a paso.",
    beneficio: "Disponibilidad 24/7 con resolución de solicitudes de primer nivel superior al 80%.",
    ejemplo_uso: "'¿Cuál es la tasa de interés vigente para un crédito vehicular?' → Respuestas personalizadas en tiempo real."
  },
  fraude: {
    titulo: "🛡️ Detección de Fraude en Transacciones",
    descripcion: "Módulos de NLP aplicados a la supervisión continua del texto no estructurado en transferencias electrónicas y mensajes interbancarios.",
    funcionalidad: "Escanea las notas o conceptos de las transferencias buscando patrones de suplantación, lavado de activos o términos restringidos por entes de control.",
    beneficio: "Mitigación de riesgo de fraude operativo en tiempo de ejecución sin ralentizar la pasarela.",
    ejemplo_uso: "Identificación de incongruencias textuales entre el remitente y la justificación monetaria enviada."
  },
  riesgo: {
    titulo: "📈 Evaluación de Riesgo Crediticio y Documental",
    descripcion: "Extracción automática de información clave (NER) desde estados financieros, declaraciones de renta y extractos bancarios.",
    funcionalidad: "Convierte PDF escaneados no estructurados en JSON estructurado para alimentar los motores de scoring crediticio de la institución.",
    beneficio: "Aprobaciones de crédito en minutos reduciendo la tasa de error manual.",
    ejemplo_uso: "Extracción instantánea de ingresos brutos, retenciones y patrimonio líquido de un cliente solicitante."
  }
};

// Función para alternar el contenido de los Conceptos
function mostrarDetalle(key, btn) {
  const data = conceptosData[key];
  const container = document.getElementById('content-display-1');

  // Actualizar botones activos
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Insertar contenido HTML dinámico
  container.innerHTML = `
    <div class="detail-card">
      <h3>${data.titulo}</h3>
      <p>${data.descripcion}</p>
      
      <div class="grid-2col">
        <div class="info-block">
          <h4>Enfoque Técnico y Financiero</h4>
          <p>${data.tecnico}</p>
          <span class="metric-badge">${data.impacto}</span>
        </div>
        
        <div class="info-block">
          <h4>Demostración Práctica</h4>
          <pre class="code-snippet">${data.ejemplo}</pre>
        </div>
      </div>
    </div>
  `;
}

// Función para alternar el contenido de las Aplicaciones
function mostrarApp(key, btn) {
  const data = aplicacionesData[key];
  const container = document.getElementById('content-display-2');

  // Actualizar botones activos
  document.querySelectorAll('.tab-btn-app').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Insertar contenido HTML dinámico
  container.innerHTML = `
    <div class="detail-card">
      <h3>${data.titulo}</h3>
      <p>${data.descripcion}</p>
      
      <div class="grid-2col">
        <div class="info-block">
          <h4>Mecanismo de Operación</h4>
          <p>${data.funcionalidad}</p>
        </div>
        
        <div class="info-block">
          <h4>Caso de Uso y Beneficio</h4>
          <p><strong>Ejemplo:</strong> ${data.ejemplo_uso}</p>
          <span class="metric-badge">${data.beneficio}</span>
        </div>
      </div>
    </div>
  `;
}

// Carga inicial por defecto al abrir la página
document.addEventListener('DOMContentLoaded', () => {
  const primerBtnConcepto = document.querySelector('.tab-btn');
  const primerBtnApp = document.querySelector('.tab-btn-app');
  
  if(primerBtnConcepto) mostrarDetalle('tokenizacion', primerBtnConcepto);
  if(primerBtnApp) mostrarApp('pqrs', primerBtnApp);
});