# 💻 GUÍA TÉCNICA PASO A PASO: Código y Arquitectura
## *Manual de Implementación para el Curso de Creación de Landing Page 3D*

---

## 📌 ÍNDICE DE IMPLEMENTACIÓN
1. [Fase 1: Setup y Configuración del Entorno](#fase-1-setup-y-configuración-del-entorno)
2. [Fase 2: El Sistema de Diseño CSS (Dark Tech & Tokens)](#fase-2-el-sistema-de-diseño-css-dark-tech--tokens)
3. [Fase 3: Integración de la Escena 3D Spline en Pantalla Completa](#fase-3-integración-de-la-escena-3d-spline-en-pantalla-completa)
4. [Fase 4: Desarrollo de la Lógica Interactiva (Vanilla JS)](#fase-4-desarrollo-de-la-lógica-interactiva-vanilla-js)
5. [Fase 5: Pipeline Vectorial de Marca (Logo SVG & Favicon)](#fase-5-pipeline-vectorial-de-marca-logo-svg--favicon)
6. [Fase 6: Embudos de Conversión (Cal.com + WhatsApp API)](#fase-6-embudos-de-conversión-calcom--whatsapp-api)
7. [Fase 7: Despliegue CI/CD en GitHub y Netlify](#fase-7-despliegue-cicd-en-github-y-netlify)

---

## Fase 1: Setup y Configuración del Entorno

### 1. Inicialización con Vite
Creamos un proyecto ligero sin la complejidad de frameworks:
```bash
npm init -y
npm install -D vite lucide
```

### 2. Estructura de Carpetas
```text
├── index.html          # Punto de entrada y maquetación semántica
├── style.css           # Sistema de diseño Dark Tech y animaciones
├── main.js             # Lógica e interactividad del DOM
├── netlify.toml        # Reglas de build y redirecciones SPA
├── package.json        # Dependencias y scripts
└── public/
    └── assets/         # Modelos, imágenes WebP, iconos y logos SVG
```

### 3. Configuración de Scripts en `package.json`
```json
{
  "name": "aidan-solutions-web",
  "type": "module",
  "scripts": {
    "dev": "vite --host --port 5173",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

## Fase 2: El Sistema de Diseño CSS (Dark Tech & Tokens)

### 1. Variables de Marca (`:root`)
Definimos los tokens de color Dark Tech para garantizar consistencia:
```css
:root {
  --bg-black: #0B0F19;
  --surface-dark: #161D2F;
  --brand-cyan: #00D2FF;
  --brand-blue: #0051FF;
  --brand-emerald: #10B981;
  --text-white: #FFFFFF;
  --text-muted: #94A3B8;
  --font-main: 'Space Grotesk', -apple-system, sans-serif;
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 2. Glassmorphism y Bordes Tecnológicos
Para que las tarjetas parezcan páneles de control flotantes:
```css
.card-glass {
  background: rgba(22, 29, 47, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 210, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  transition: var(--transition-smooth);
}

.card-glass:hover {
  border-color: rgba(0, 210, 255, 0.5);
  box-shadow: 0 15px 40px -5px rgba(0, 210, 255, 0.25);
  transform: translateY(-4px);
}
```

---

## Fase 3: Integración de la Escena 3D Spline en Pantalla Completa

### 1. Precarga en el `<head>` para evitar pantallas en blanco
```html
<link rel="preload" href="https://prod.spline.design/XJypBQwOG98yOOnb/scene.splinecode" as="fetch" crossorigin>
<script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
```

### 2. Contenedor a Pantalla Completa en HTML
```html
<section class="hero-section" id="hero">
  <div class="spline-hero-bg">
    <spline-viewer
      id="heroSpline"
      url="https://prod.spline.design/XJypBQwOG98yOOnb/scene.splinecode"
      loading-anim-type="spinner-small-dark"
    ></spline-viewer>
  </div>
  <div class="hero-overlay-gradient"></div>
  
  <div class="hero-content">
    <h1 class="hero-title">
      Digitaliza Tu Negocio Para <span class="typewriter-text" id="typewriter"></span>
    </h1>
    <p class="hero-subtitle">
      Eliminamos cuellos de botella con software a medida, automatizaciones RPA y agentes de IA.
    </p>
    <div class="hero-cta-group">
      <button class="btn-primary open-cal-modal">Agendar Diagnóstico</button>
      <a href="#servicios" class="btn-secondary">Ver Soluciones</a>
    </div>
  </div>
</section>
```

### 3. Limpieza de Watermark de Spline mediante JavaScript
Accedemos al Shadow DOM del Web Component:
```javascript
function initSplineViewerClean() {
  const heroSpline = document.getElementById('heroSpline');
  if (!heroSpline) return;

  function removeLogo() {
    try {
      if (heroSpline.shadowRoot) {
        const logo = heroSpline.shadowRoot.querySelector('#logo');
        if (logo) logo.remove();
      }
    } catch (_) {}
  }

  heroSpline.addEventListener('load', removeLogo);
  setTimeout(removeLogo, 1200);
  setTimeout(removeLogo, 3000);
}
```

---

## Fase 4: Desarrollo de la Lógica Interactiva (Vanilla JS)

### 1. Efecto Máquina de Escribir (Typewriter)
```javascript
function initTypewriter() {
  const target = document.getElementById('typewriter');
  if (!target) return;

  const words = ['Vender Más', 'Ahorrar Tiempo', 'Tener El Control'];
  let wordIndex = 0, charIndex = 0, isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    target.textContent = currentWord.substring(0, charIndex);

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    let delay = isDeleting ? 90 : 140;

    if (!isDeleting && charIndex === currentWord.length + 1) {
      delay = 2200; // Pausa al completar la palabra
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}
```

### 2. Contadores Dinámicos con `IntersectionObserver`
```javascript
function initMetricsCounter() {
  const metricNumbers = document.querySelectorAll('.metric-number');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        metricNumbers.forEach(el => {
          const target = parseInt(el.getAttribute('data-target') || '0', 10);
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 2000;
          const startTime = performance.now();

          function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            el.textContent = `${prefix}${Math.floor(easeOut * target)}${suffix}`;
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = `${prefix}${target}${suffix}`;
          }
          requestAnimationFrame(update);
        });
      }
    });
  }, { threshold: 0.3 });

  const section = document.getElementById('nosotros');
  if (section) observer.observe(section);
}
```

---

## Fase 5: Pipeline Vectorial de Marca (Logo SVG & Favicon)

### El Secreto de los Logotipos en SVG
Cuando un SVG se incrusta mediante `<img src="logo.svg">`, los navegadores aíslan el documento y **bloquean fuentes externas**. Por ello, vectorizamos la tipografía *Space Grotesk* en coordenadas puras `<path d="...">`:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 54" fill="none">
  <!-- Mascota Oficial en Alta Resolución con Transparencia -->
  <g transform="translate(2, 2)">
    <image href="data:image/png;base64,..." x="0" y="0" width="53.5" height="50" />
  </g>

  <!-- Tipografía Space Grotesk Bold Vectorizada -->
  <g transform="translate(66, 0)">
    <!-- Letra A -->
    <path d="M2.7 31L0.8 31L7.2 11.4..." fill="#FFFFFF" />
    <!-- Barra Técnica Invertida '\' -->
    <path d="..." fill="#00D2FF" />
    <!-- Subtítulo SOLUT\ONS -->
    <path d="..." fill="#94A3B8" />
  </g>
</svg>
```

---

## Fase 6: Embudos de Conversión (Cal.com + WhatsApp API)

### 1. Botón Flotante Fijo con Anillo Neón Pulsante
```html
<a href="https://wa.me/51985332135?text=Hola%20AIDAN%20SOLUTIONS,%20vengo%20de%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="floating-whatsapp" 
   aria-label="Conversemos por WhatsApp">
  <span class="floating-whatsapp-text">Conversemos</span>
  <div class="floating-whatsapp-icon">
    <!-- SVG oficial de WhatsApp -->
  </div>
</a>
```

### 2. Animación CSS del Pulso
```css
@keyframes pulse-ring {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.25); opacity: 0; }
  100% { transform: scale(1.25); opacity: 0; }
}
```

---

## Fase 7: Despliegue CI/CD en GitHub y Netlify

### 1. `netlify.toml` para Automatización Total
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### 2. Comandos Git de Publicación
```bash
git init
git add .
git commit -m "feat: Lanzamiento oficial landing page A\DAN SOLUT\ONS"
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```
Luego, en [Netlify](https://app.netlify.com):
**"Add new site" → "Import from GitHub" → Seleccionar repositorio → Deploy.**
