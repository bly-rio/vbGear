# 🛠️ DevToolbox

Una colección de herramientas web para desarrolladores, diseñada con una estética moderna oscura y minimalista.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Características

- 🎨 **Diseño Premium Dark Mode** — Tema oscuro con acentos neón verde
- 📱 **Responsive** — Funciona en desktop, tablet y móvil
- ⚡ **Sin Backend** — Funciona completamente en el navegador
- 🔒 **Privacidad** — Todo el procesamiento es local (excepto IP Checker)

## 🧰 Herramientas Incluidas

### 🌐 IP Checker
Consulta tu dirección IP pública instantáneamente.
- Obtiene la IP usando la API de [ipify.org](https://ipify.org)
- Botón de copiar al portapapeles
- Actualización con un solo clic

### 💅 Code Beautifier
Formatea y embellece tu código desordenado.
- **Lenguajes soportados:**
  - HTML
  - CSS
  - JavaScript
  - JSON
  - SQL
- Opción para remover espacios extra
- Copiar resultado al portapapeles
- Powered by [Prettier](https://prettier.io/) y [sql-formatter](https://github.com/sql-formatter-org/sql-formatter)

### 👁️ Code Visualizer
Playground en vivo para experimentar con código web.
- Editores separados para HTML, CSS y JavaScript
- Vista previa en tiempo real
- **Modo Single File** — Escribe un documento HTML completo
- **Modo Split** — Combina HTML + CSS + JS automáticamente
- Botón de beautify integrado en cada editor

### 📝 Cornell Notes
Sistema de toma de notas estructurado usando el método Cornell.
- Campo de título/tema
- Notas con contenido y palabras clave
- Agregar, editar y eliminar notas
- Campo de resumen
- Exportar todas las notas al portapapeles

## 🚀 Instalación

No requiere instalación. Simplemente clona el repositorio y abre `index.html` en tu navegador.

```bash
git clone https://github.com/tu-usuario/gear.git
cd gear
open index.html  # macOS
# o simplemente abre index.html con tu navegador
```

## 📁 Estructura del Proyecto

```
gear/
├── index.html        # Página principal con grid de herramientas
├── ip.html           # IP Checker
├── beautifier.html   # Code Beautifier
├── visualizer.html   # Code Visualizer (playground)
├── notes.html        # Cornell Notes
├── style.css         # Estilos globales
├── script.js         # JavaScript para Cornell Notes
└── README.md
```

## 🎨 Paleta de Colores

| Variable             | Valor                  | Descripción        |
|----------------------|------------------------|--------------------|
| `--bg-dark`          | `#0a0a0a`              | Fondo principal    |
| `--bg-card`          | `#171717`              | Fondo de tarjetas  |
| `--text-primary`     | `#ededed`              | Texto principal    |
| `--text-secondary`   | `#a1a1a1`              | Texto secundario   |
| `--accent-primary`   | `#39ff14`              | Verde neón         |
| `--border-color`     | `#333333`              | Bordes             |

## 🔧 Dependencias Externas (CDN)

- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- [Prettier Standalone v2.8.8](https://prettier.io/docs/en/browser.html)
- [sql-formatter v12.2.0](https://github.com/sql-formatter-org/sql-formatter)

## 📄 Licencia

MIT License — Libre para uso personal y comercial.

---

<p align="center">
  <strong>DevToolbox</strong> — Built for speed and simplicity.
</p>

