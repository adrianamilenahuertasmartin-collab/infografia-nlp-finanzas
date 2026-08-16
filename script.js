function toggleConcepto(id) {
  const textos = {
    concepto1: "Tokenización: proceso de dividir un texto en unidades mínimas como palabras o frases. Ejemplo: 'El banco procesa datos' → ['El', 'banco', 'procesa', 'datos'].",
    concepto2: "Lematización: reducir palabras a su forma base. Ejemplo: 'corriendo', 'corrió' → 'correr'. Esto ayuda a unificar significados.",
    concepto3: "Modelos de lenguaje: algoritmos que aprenden patrones del texto. Ejemplo: GPT puede predecir la siguiente palabra en una frase.",
    concepto4: "Embeddings: representar palabras como vectores numéricos. Ejemplo: 'banco' y 'dinero' tendrán vectores cercanos en el espacio semántico.",
    concepto5: "Transformers: arquitecturas modernas como BERT y GPT que entienden contexto completo. Ejemplo: detectar intención en una consulta bancaria.",
    aplicacion1: "Análisis de PQRS: clasifica y prioriza peticiones, quejas y reclamos. Ejemplo: un sistema que detecta automáticamente reclamos urgentes.",
    aplicacion2: "Chatbots financieros: atención al cliente 24/7. Ejemplo: un bot que responde preguntas sobre saldo y transferencias.",
    aplicacion3: "Prevención de fraude: detecta patrones sospechosos en transacciones. Ejemplo: alertar si una tarjeta se usa en dos países al mismo tiempo.",
    aplicacion4: "Predicción de riesgos: analiza contratos y documentos. Ejemplo: identificar cláusulas de alto riesgo en préstamos.",
    aplicacion5: "Educación financiera: asistentes virtuales que explican productos. Ejemplo: un bot que enseña cómo funciona un crédito hipotecario."
  };

  const div = document.getElementById(id);
  if (div.style.display === "block") {
    div.style.display = "none"; // ocultar si ya está visible
  } else {
    div.innerHTML = textos[id];
    div.style.display = "block"; // mostrar con animación
  }
}
