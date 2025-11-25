# 🛠️ DevToolbox

A collection of web tools for developers, designed with a modern dark and minimalist aesthetic.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **Premium Dark Mode Design** — Dark theme with neon green accents
- 📱 **Responsive** — Works on desktop, tablet and mobile
- ⚡ **No Backend** — Runs entirely in the browser
- 🔒 **Privacy** — All processing is local (except IP Checker)
- 🌐 **All content in English** — Consistent language across all tools

## 🧰 Tools Included

### 📁 Projects

#### 📝 Cornell Notes
Structured note-taking system using the Cornell method.
- Title/topic field
- Notes with content and keywords
- Add, edit and delete notes
- Summary field
- Export all notes to clipboard

#### 📅 Calendar
Calculate business and calendar days to a future date.
- Interactive calendar view
- Highlights today's date
- Navigate between months
- Select any future date
- Calculates business days (weekdays only)
- Calculates calendar days (all days)

### 🔧 Tools

#### 🌐 IP Checker
Check your public IP address instantly.
- Gets IP using the [ipify.org](https://ipify.org) API
- Copy to clipboard button
- One-click refresh

#### 💅 Code Beautifier
Format and beautify your messy code.
- **Supported languages:**
  - HTML
  - CSS
  - JavaScript
  - JSON
  - SQL
- Option to remove extra spaces
- Copy result to clipboard
- Powered by [Prettier](https://prettier.io/) and [sql-formatter](https://github.com/sql-formatter-org/sql-formatter)

#### 👁️ Code Visualizer
Live playground to experiment with web code.
- Separate editors for HTML, CSS and JavaScript
- Real-time preview
- **Single File Mode** — Write a complete HTML document
- **Split Mode** — Combine HTML + CSS + JS automatically
- Built-in beautify button in each editor

## 🚀 Installation

No installation required. Simply clone the repository and open `index.html` in your browser.

```bash
git clone https://github.com/your-username/gear.git
cd gear
open index.html  # macOS
# or simply open index.html with your browser
```

## 📁 Project Structure

```
gear/
├── index.html        # Main page with tools grid
├── ip.html           # IP Checker
├── beautifier.html   # Code Beautifier
├── visualizer.html   # Code Visualizer (playground)
├── notes.html        # Cornell Notes
├── calendar.html     # Calendar (business days calculator)
├── navbar.js         # Dynamic navigation component
├── style.css         # Global styles
├── script.js         # JavaScript for Cornell Notes
└── README.md
```

## 🎨 Color Palette

| Variable             | Value                  | Description        |
|----------------------|------------------------|--------------------|
| `--bg-dark`          | `#0a0a0a`              | Main background    |
| `--bg-card`          | `#171717`              | Card background    |
| `--text-primary`     | `#ededed`              | Primary text       |
| `--text-secondary`   | `#a1a1a1`              | Secondary text     |
| `--accent-primary`   | `#39ff14`              | Neon green         |
| `--border-color`     | `#333333`              | Borders            |

## 🔧 External Dependencies (CDN)

- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- [Prettier Standalone v2.8.8](https://prettier.io/docs/en/browser.html)
- [sql-formatter v12.2.0](https://github.com/sql-formatter-org/sql-formatter)

## 📄 License

MIT License — Free for personal and commercial use.

---

<p align="center">
  <strong>DevToolbox</strong> — Built for speed and simplicity.
</p>
