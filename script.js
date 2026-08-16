const textos = {
  concepto1: "<strong>Tokenización:</strong> Proceso de dividir un texto en unidades mínimas como palabras o frases.<br><em>Ejemplo:</em> 'El banco procesa datos' → ['El', 'banco', 'procesa', 'datos'].",
  concepto2: "<strong>Lematización:</strong> Reducir palabras a su forma base o lema.<br><em>Ejemplo:</em> 'corriendo', 'corrió' → 'correr'.",
  concepto3: "<strong>Modelos de Lenguaje:</strong> Algoritmos que aprenden patrones estadísticos o semánticos del texto para predecir secuencias.<br><em>Ejemplo:</em> GPT o BERT.",
  concepto4: "<strong>Embeddings:</strong> Representación matemática de palabras en vectores numéricos.<br><em>Ejemplo:</em> 'banco' y 'dinero' quedan ubicados cerca en el espacio vectorial.",
  concepto5: "<strong>Transformers:</strong> Arquitecturas avanzadas basadas en mecanismos de atención para procesar contexto completo de manera paralela.",
  aplicacion1: "<strong>Análisis de PQRS:</strong> Clasifica y prioriza automáticamente Peticiones, Quejas, Reclamos y Sugerencias de clientes bancarios.",
  aplicacion2: "<strong>Chatbots Financieros:</strong> Asistentes virtuales con procesamiento de lenguaje para soporte al cliente 24/7.",
  aplicacion3: "<strong>Prevención de Fraude:</strong> Detecta patrones anómalos o sospechosos en textos de transacciones y comunicaciones.",
  aplicacion4: "<strong>Predicción de Riesgos:</strong> Analiza automáticamente contratos, informes financieros y documentación legal.",
  aplicacion5: "<strong>Educación Financiera:</strong> Asistentes interactivos que explican términos y productos crediticios a los usuarios."
};

function toggleConcepto(id, btnElement) {
  const box = document.getElementById(id);
  
  if (box.style.display === "block") {
    box.style.display = "none";
    btnElement.classList.remove("active");
  } else {
    box.innerHTML = textos[id];
    box.style.display = "block";
    btnElement.classList.add("active");
  }
}