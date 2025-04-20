# 🕸️ AgentRunner API - Ejemplo de Consumo JS

¡Bienvenido al repo! Este es un ejemplo súper simple, dinámico y visual para consumir señales de **arbitraje triangular** desde la API de [AgentRunner](https://api.agentrunner.netrunbot.com) ⚡

> ¿Querés ver cómo consultar señales de arbitraje triangular desde JS puro con un grid estilo tabla hecho en HTML/CSS? Este repo es para vos. 🙌

---

## 🧠 ¿Qué hace este ejemplo?

Consulta a la API `api.agentrunner.netrunbot.com` y renderiza en pantalla los datos del endpoint `/dna180/signals`, que devuelve una lista con las oportunidades de arbitraje triangular actuales. Los datos se muestran en un **grid responsive** hecho únicamente con `HTML + CSS` 💅

---

## 🛠️ Tecnologías utilizadas

- 🌐 **HTML** para la estructura
- 🎨 **CSS** para el estilo tipo tabla
- ⚙️ **JavaScript** puro para consumir la API

---

## 📡 Endpoint consultado

```
GET https://api.agentrunner.netrunbot.com/dna180/signals
```

### 🔐 Headers necesarios

| Header         | Valor              |
|----------------|--------------------|
| Authorization  | `Bearer TU_TOKEN`  |
| netrunner-id   | `netrunbot.com`    |

Ejemplo en código:

```js
fetch('https://agentrunner.netrunbot.com/trianglesignals', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer TU_TOKEN',
    'netrunner-id': 'netrunbot.com'
  }
})
```

---

## 📊 Visualización

El resultado se muestra como una **tabla simulada usando `div` y `CSS Grid`**, con una fila por cada señal de arbitraje:

| Fecha         | Par 1 | Precio 1 | Par 2 | Precio 2 | Par 3 | Precio 3 | Profit |
|---------------|--------|----------|--------|----------|--------|----------|--------|
| `13/04/2025 15:43` | BTC/USDT | 69000 | ETH/BTC | 0.074 | ETH/USDT | 5100 | `+0.62%` |

🧩 Cada fila es una estructura `div.grid-row`, y cada celda un `div.grid-item`.

---

## 🚀 ¿Para qué sirve?

- Para aprender a consumir una API REST con JS.
- Para ver cómo mapear una respuesta a objetos y visualizarlos.
- Como base para integraciones más complejas con tu bot o sistema.

---

## 📥 ¿Te gustaría contribuir?

¡Pull requests y mejoras visuales son bienvenidas! Podés agregar animaciones, filtros, ordenamientos, o incluso armar una SPA completa.

---

## 👾 Autor

**Dotnetrunner**  
📸 [Instagram](https://instagram.com/dotnetrunner)  
💻 [GitHub](https://github.com/dotnetrunner2077)

---

> “Crea tu propio netrunner.” ⚡🧠💻
