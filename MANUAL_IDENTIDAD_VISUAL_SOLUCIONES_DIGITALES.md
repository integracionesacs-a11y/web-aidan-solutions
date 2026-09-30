# Manual de Identidad Visual y Sistema de Diseño: Soluciones Digitales

> **Fuente Oficial Auditada**: [`https://soluciones-digitales.com/`](https://soluciones-digitales.com/)  
> **Fecha de Extracción**: Septiembre 2026  
> **Estado**: Documento Técnico y Especificaciones de Producción

---

## 1. Visión y Arquetipo Estético de la Marca

* **Nombre de Marca**: Soluciones Digitales
* **Liderazgo Tecnológico**: Rafael Paucar & Equipo de Innovación
* **Lema Principal**: *"Transforma Tu Negocio Con Soluciones Digitales [Inteligentes | Innovadoras | Trascendentes]"*
* **Propuesta de Valor**: *"Impulsamos el potencial tecnológico de tu empresa con Desarrollo de Software, Automatización RPA, Inteligencia Artificial, y Analítica de Datos."*
* **Arquetipo de Diseño**: **Dark Tech Futurista & Aurora Neon**. Combina una atmósfera cinematográfica oscura (`#000000` / `#09090B`) con un gradiente vibrante de alta energía (Púrpura -> Magenta -> Coral -> Ámbar) y una alternancia intencional de secciones de alta respiración en blanco y gris suave (`#FFFFFF` / `#F9FAFB`).

---

## 2. Paleta de Colores y Tokens de Diseño

La identidad se fundamenta en un gradiente insignia de cuatro paradas luminosas y una base de superficies oscuras neutras (escala Zinc / Neutral de alta densidad).

### 2.1. El Gradiente Insignia (*Primary Brand Gradient*)
Es el activo cromático más reconocible de la marca. Se aplica en botones principales, badges, textos con clip-path y barras de progreso animadas.

```css
/* Token CSS Oficial */
--primary-gradient: linear-gradient(
  to right,
  #7D2E87, /* Brand Dark Pink / Púrpura Profundo */
  #E81D78, /* Brand Magenta / Fucsia Eléctrico */
  #FE3B41, /* Brand Red / Rojo Coral Vibrante */
  #FEAC38  /* Brand Orange / Naranja Ámbar Solar */
);
```

| Tono | Nombre de Token | HSL | HEX | RGB | Función y Uso |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ![#7D2E87](https://dummyimage.com/16/7D2E87/7D2E87) | `--brand-dark-pink` | `hsl(293, 49.3%, 35.5%)` | **`#7D2E87`** | `rgb(125, 46, 135)` | Origen del degradado, sombras ricas y profundidad |
| ![#E81D78](https://dummyimage.com/16/E81D78/E81D78) | `--brand-magenta` | `hsl(333, 81.8%, 51.2%)` | **`#E81D78`** | `rgb(232, 29, 120)` | Color primario de marca (`--primary`), acento y hover |
| ![#FE3B41](https://dummyimage.com/16/FE3B41/FE3B41) | `--brand-red` | `hsl(358, 98.6%, 61.2%)` | **`#FE3B41`** | `rgb(254, 59, 65)` | Punto medio vibrante, llamadas a la acción y calor |
| ![#FEAC38](https://dummyimage.com/16/FEAC38/FEAC38) | `--brand-orange` | `hsl(35, 99.1%, 60.8%)` | **`#FEAC38`** | `rgb(254, 172, 56)` | Salida del degradado, destellos de luz e indicadores |

---

### 2.2. Superficies, Fondos y Neutrales

#### Modo Oscuro (Predominante)
* **Fondo Absoluto Hero & Casos**: `#000000` (Negro puro para máximo contraste de vídeo y 3D).
* **Fondo General Dark (`--background`)**: `hsl(240, 10%, 3.9%)` -> **`#09090B`** (Zinc 950).
* **Fondo de Tarjetas (`bg-neutral-900`)**: **`#171717`** (Superficie táctil sobria).
* **Borde de Tarjetas (`border-neutral-800`)**: **`#262626`** (Delimitador técnico sutil).
* **Borde Hover Tarjetas (`hover:border-neutral-700`)**: **`#404040`** (Feedback de interacción).
* **Borde Aurora Icons (`--icon-border`)**: `hsl(210, 10%, 35%)` -> **`#505962`**.

#### Modo Claro (Secciones de Proceso y Métodos)
* **Fondo de Sección de Trabajo**: `#FFFFFF` / `#F9FAFB` (Gray 50).
* **Superficie de Tarjeta Light**: `linear-gradient(to bottom right, #FFFFFF, #F9FAFB)` con bordes `#F3F4F6`.

---

### 2.3. Jerarquía de Textos
* **Texto Primario Dark**: `#FFFFFF` (Blanco puro, máxima legibilidad).
* **Texto Secundario Dark**: `#9CA3AF` (Gray 400) / `#A1A1AA` (Zinc 400).
* **Texto Primario Light**: `#111827` (Gray 900).
* **Texto Secundario Light**: `#4B5563` (Gray 600).
* **Texto Degradado Dinámico (`.text-gradient`)**:
  ```css
  background-image: linear-gradient(to right, #7D2E87, #E81D78, #FE3B41, #FEAC38);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  ```
* **Texto de Cifras / Indicadores (`.text-indicator-gradient`)**:
  ```css
  background-image: linear-gradient(to right, #E81D78, #FE3B41, #FEAC38);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  ```

---

## 3. Tipografía & Jerarquía de Texto

La marca utiliza **Space Grotesk** como única tipografía corporativa unificada, garantizando un aspecto técnico, vanguardista y legible.

```html
<!-- Importación Oficial de Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Escala Tipográfica y Usos:
1. **H1 Hero Display**: 
   * Tamaño: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` (36px - 60px).
   * Peso: `700` (Bold).
   * Estructura: Texto estático blanco + span dinámico en `.text-gradient` con cursor `animate-pulse`.
2. **H2 Titular de Sección**:
   * Tamaño: `text-3xl md:text-4xl` (30px - 36px).
   * Peso: `700` (Bold).
3. **H3 Título de Tarjetas / Features**:
   * Tamaño: `text-xl md:text-2xl` (20px - 24px).
   * Peso: `600` (SemiBold) o `700` (Bold).
4. **Cifras de Métricas (Contadores)**:
   * Tamaño: `text-3xl lg:text-4xl font-bold` con clase `.text-indicator-gradient`.
5. **Cuerpo de Texto (Body)**:
   * Tamaño: `text-sm md:text-base` (14px - 16px).
   * Interlineado: `leading-relaxed` (1.625).
   * Peso: `400` (Regular) o `300` (Light).
6. **Badges / Etiquetas de Categoría**:
   * Tamaño: `text-xs md:text-sm` (12px - 14px).
   * Peso: `500` (Medium).
   * Mayúsculas o Capitalizado con `rounded-full`.

---

## 4. Integración 3D y WebGL (Spline 3D)

La web incorpora un modelo tridimensional embebido en tiempo real que eleva el valor percibido tecnológico.

### 4.1. Especificación del Recurso 3D
* **Nombre de Escena**: Earth (Clouds) / World Planet.
* **Proveedor**: [Spline 3D](https://spline.design) (`@splinetool/runtime`).
* **URL de Escena Embebida**:
  ```text
  https://my.spline.design/worldplanet-THcRYGslYxNkr3g7RdqRgH9h/
  ```

### 4.2. Implementación en la Tarjeta de Contacto
El modelo se sitúa como fondo translúcido detrás del contenido interactivo de contacto:

```jsx
<div className="relative bg-neutral-900 rounded-xl shadow-xl p-10 md:p-16 border border-neutral-800 max-w-4xl w-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-neutral-700 overflow-hidden">
  {/* Capa de Escena 3D Spline */}
  <div className="absolute inset-0 z-0 opacity-50">
    <iframe
      src="https://my.spline.design/worldplanet-THcRYGslYxNkr3g7RdqRgH9h/"
      frameBorder="0"
      width="100%"
      height="100%"
      title="3D World Spline"
    />
  </div>

  {/* Contenido en Primer Plano */}
  <div className="relative z-10 text-center">
    <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contáctanos</h3>
    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
      Escríbenos y comencemos esta transformación juntos.
    </p>
    <a
      href="https://cal.com/rafael-paucar/soluciones-digitales"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-center mx-auto bg-primary-gradient text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
    >
      <span>Conversemos</span>
      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
</div>
```

---

## 5. Componentes de Interfaz de Usuario (UI System)

### 5.1. Barra de Navegación (Header / Navbar)
* **Comportamiento**: Sticky fija con `bg-black/90 backdrop-blur-md`.
* **Altura**: `h-20` (80px).
* **Logo**: Archivo en negativo `/lovable-uploads/soluciones_logo_negative.png` con altura `h-14`.
* **Enlaces**: Botones con `px-5 py-3 text-white hover:bg-white/10 rounded-md transition-colors`.
* **CTA Principal de Cabecera**:
  ```jsx
  <a
    href="https://cal.com/rafael-paucar/soluciones-digitales"
    className="px-5 py-2.5 rounded-md text-base font-medium border-2 bg-white text-black border-white hover:bg-white/90 transition-all inline-block"
  >
    Conversemos
  </a>
  ```

---

### 5.2. Botones Principales y Secundarios

#### Botón Primario con Gradiente Dinámico
```css
.bg-primary-gradient {
  background-image: linear-gradient(to right, #7D2E87, #E81D78, #FE3B41, #FEAC38);
  background-size: 200% auto;
  transition: background-position 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.bg-primary-gradient:hover {
  background-position: right center;
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 10px 25px -5px rgba(232, 29, 120, 0.4);
}
```

#### Botón Secundario Outline
```css
.btn-secondary-outline {
  background: transparent;
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  padding: 12px 32px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.btn-secondary-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.02);
}
```

---

### 5.3. Badges / Píldoras de Sección
Utilizadas encima de cada titular para clasificar la temática:
```jsx
<div className="inline-block mb-4 px-5 py-2 bg-primary-gradient text-white rounded-full text-sm font-medium shadow-lg">
  Nuestros Servicios
</div>
```

---

### 5.4. Tarjetas de Servicios con Reveal (B&N a Color en Hover)
Presentan imágenes en escala de grises que revelan su color completo y aumentan el tamaño del icono al posar el cursor:
* **Estructura**:
  ```jsx
  <div className="feature-item rounded-xl overflow-hidden transform transition-all duration-500 relative shadow-lg group hover:-translate-y-1 h-[300px]">
    {/* Fondo con imagen y reveal B&N a color */}
    <img 
      src={service.image} 
      className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0" 
    />
    <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-all duration-500" />
    
    {/* Contenido */}
    <div className="relative z-10 flex flex-col justify-between p-6 h-full">
      <div>
        <div className="inline-block p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg transition-all duration-300 transform group-hover:scale-110 mb-4">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
        <p className="text-white/80 text-sm">{service.description}</p>
      </div>
      {/* Línea animada en hover con gradiente */}
      <div className="h-0.5 mt-4 transition-all duration-500 w-0 group-hover:w-full bg-primary-gradient-bar" />
    </div>
  </div>
  ```

---

### 5.5. Carrusel 3D Coverflow de Casos de Éxito
Un carrusel en perspectiva tridimensional que posiciona las tarjetas según el índice activo:
* **Algoritmo de Posicionamiento**:
  ```javascript
  const getCardTransform = (index, activeIndex, total) => {
    if (index === activeIndex) {
      return "scale-100 opacity-100 z-20"; // Tarjeta frontal
    }
    if (index === (activeIndex + 1) % total) {
      return "translate-x-[40%] scale-95 opacity-60 z-10"; // Tarjeta derecha
    }
    if (index === (activeIndex - 1 + total) % total) {
      return "-translate-x-[40%] scale-95 opacity-60 z-10"; // Tarjeta izquierda
    }
    return "scale-90 opacity-0"; // Ocultas
  };
  ```
* **Rotación Automática**: Cada 4 segundos mediante `setInterval`, pausándose al interactuar (`onMouseEnter`).
* **Cinta de Logos Infinita**: Con máscara CSS de desvanecimiento en los bordes:
  ```css
  mask-image: linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%);
  ```

---

### 5.6. Borde Técnico con Máscara de Degradado (`.icon-aurora-bg`)
Un borde circular de 2px implementado con máscaras CSS:
```css
.icon-aurora-bg {
  position: relative;
  border-radius: 9999px;
}

.icon-aurora-bg::before {
  content: "";
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  border-radius: inherit;
  padding: 2px;
  background: hsl(var(--icon-border)); /* #505962 */
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```

---

## 6. Animaciones, Movimiento y Microinteracciones

| Animación | Definición Keyframes | Uso en la Web |
| :--- | :--- | :--- |
| **`typewriter`** | Intervalo de 150ms escritura / 100ms borrado / pausa 2000ms | Rota entre: *"Inteligentes"*, *"Innovadoras"*, *"Trascendentes"* en el Hero |
| **`cursor-pulse`** | `animate-pulse` (opacidad 0.7 <-> 0.2) | Barra vertical `\|` del typewriter |
| **`aurora`** | `0% { background-position: 0% 50% } 100% { background-position: 100% 50% }` | Efecto de aura en degradados continuos |
| **`shimmer`** | `0% { background-position: -200% 0 } 100% { background-position: 200% 0 }` | Reflejo metálico en bordes y botones |
| **`pulse-slow`** | `0%, 100% { opacity: 1 } 50% { opacity: 0.8 }` | Luces de fondo y resplandor |
| **`infinite-scroll-slow`** | Desplazamiento horizontal continuo `translateX(0)` a `translateX(-100%)` | Carrusel infinito de logos corporativos de clientes |
| **`spin-slow`** | `transform: rotate(360deg)` con duración de `20s` | Engranaje continuo en la sección de Metodología Ágil |
| **`progress-bar-cycle`** | Incremento de 0% a 100% en un bucle de 5 segundos | Barra interactiva de fases: *Descubrimiento -> Planificación -> Desarrollo -> Testing -> Despliegue* |

---

## 7. Activos Multimedia y Enlaces Oficiales

* **Vídeo de Fondo Hero**: `/lovable-uploads/video_soluciones_hero_section.mp4`
* **Poster Vídeo**: `/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png`
* **Logo en Negativo**: `/lovable-uploads/soluciones_logo_negative.png`
* **Integración de Citas**: `https://cal.com/rafael-paucar/soluciones-digitales`
* **Redes Sociales**:
  * LinkedIn: `https://www.linkedin.com/company/89609361`
  * YouTube: `https://www.youtube.com/@rafael-paucar`
  * Instagram: `https://www.instagram.com/rafael.paucar.ai/`

---

## 8. Tokens de Configuración para Proyectos (Tailwind Token Config)

Para reproducir fielmente este diseño en cualquier proyecto nuevo, integra estos tokens en tu archivo `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          darkPink: '#7D2E87',
          magenta: '#E81D78',
          red: '#FE3B41',
          orange: '#FEAC38',
        },
        darkBg: '#09090B',
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #7D2E87, #E81D78, #FE3B41, #FEAC38)',
        'indicator-gradient': 'linear-gradient(to right, #E81D78, #FE3B41, #FEAC38)',
      },
    },
  },
};
```
