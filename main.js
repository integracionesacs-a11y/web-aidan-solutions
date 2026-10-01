// Soluciones Digitales - Interactivity & Motion Logic (Optimized for Instant Load)

import {
  createIcons,
  Calendar,
  Menu,
  ArrowRight,
  Layout,
  Cpu,
  MessageSquare,
  Sparkles,
  BarChart3,
  Box,
  ShieldCheck,
  Network,
  Settings,
  ChevronLeft,
  ChevronRight,
  Users,
  Briefcase,
  Award,
  Star,
  X,
  Linkedin
} from 'lucide';

const APP_ICONS = {
  Calendar,
  Menu,
  ArrowRight,
  Layout,
  Cpu,
  MessageSquare,
  Sparkles,
  BarChart3,
  Box,
  ShieldCheck,
  Network,
  Settings,
  ChevronLeft,
  ChevronRight,
  Users,
  Briefcase,
  Award,
  Star,
  X,
  Linkedin
};

function renderIcons() {
  createIcons({ icons: APP_ICONS });
}

function initApp() {
  // 0. Render local SVG icons immediately
  renderIcons();

  // 1. Typewriter Effect in Hero Section
  initTypewriter();

  // 2. Mobile Drawer Navigation
  initMobileDrawer();

  // 3. Adaptive Process Progress Tracker
  initProcessTracker();

  // 4. 3D Coverflow Carousel for Casos de Éxito
  initCoverflowCarousel();

  // 5. Dynamic Counter for Metrics
  initMetricsCounter();

  // 6. Cal.com Booking Modal (On-demand Lazy Loading)
  initCalModal();

  // 7. Navbar Scroll Transition
  initNavbarScroll();

  // 8. Spline Viewer Dynamic Local Loading
  initSplineViewer();

  // 9. Lazy Embeds (Contact 3D Scene)
  initLazyEmbeds();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/* -------------------------------------------------------------
 * Spline Viewer Dynamic Loading & Optimization
 * ------------------------------------------------------------- */
function initSplineViewer() {
  const heroSpline = document.getElementById('heroSpline');
  if (!heroSpline) return;

  initSplineViewerClean(heroSpline);
}

function initSplineViewerClean(heroSpline) {
  function removeLogo() {
    try {
      if (heroSpline && heroSpline.shadowRoot) {
        const logo = heroSpline.shadowRoot.querySelector('#logo');
        if (logo) logo.remove();
        if (!heroSpline.shadowRoot.querySelector('#clean-spline-style')) {
          const style = document.createElement('style');
          style.id = 'clean-spline-style';
          style.textContent = '#logo, a[href*="spline.design"] { display: none !important; opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; }';
          heroSpline.shadowRoot.appendChild(style);
        }
      }
    } catch (_) {}
  }

  heroSpline.addEventListener('load', removeLogo);
  removeLogo();
  setTimeout(removeLogo, 200);
  setTimeout(removeLogo, 600);
}

/* -------------------------------------------------------------
 * Lazy Embeds (Contact Spline Planet)
 * ------------------------------------------------------------- */
function initLazyEmbeds() {
  const lazyEmbeds = document.querySelectorAll('iframe[data-src]:not(#calModal iframe)');
  if (lazyEmbeds.length === 0) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.dataset.src) {
            el.src = el.dataset.src;
          }
          obs.unobserve(el);
        }
      });
    }, { rootMargin: '300px 0px' });

    lazyEmbeds.forEach(el => observer.observe(el));
  } else {
    lazyEmbeds.forEach(el => {
      if (el.dataset.src) el.src = el.dataset.src;
    });
  }
}

/* -------------------------------------------------------------
 * 1. Typewriter Effect
 * Pre-rendered first word for 0ms initial visual delay
 * ------------------------------------------------------------- */
function initTypewriter() {
  const target = document.getElementById('typewriter');
  if (!target) return;

  const words = ['Vender Más', 'Ahorrar Tiempo', 'Tener El Control'];
  let wordIndex = 0;
  let charIndex = words[0].length;
  let isDeleting = true;
  const typeSpeed = 120;
  const deleteSpeed = 75;
  const pauseTime = 2400;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
      target.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      target.textContent = currentWord.substring(0, charIndex);
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 350;
    }

    setTimeout(type, delay);
  }

  // First word is already displayed in HTML, pause before starting the deletion
  setTimeout(type, pauseTime);
}

/* -------------------------------------------------------------
 * 2. Mobile Drawer Navigation
 * ------------------------------------------------------------- */
function initMobileDrawer() {
  const toggle = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const menuIcon = document.getElementById('menuIcon');
  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    if (menuIcon) {
      menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
      renderIcons();
    }
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      if (menuIcon) {
        menuIcon.setAttribute('data-lucide', 'menu');
        renderIcons();
      }
    });
  });
}

/* -------------------------------------------------------------
 * 3. Adaptive Process Progress Tracker
 * Cycles 0% -> 100% every 5 seconds, activating stages 1 -> 5
 * ------------------------------------------------------------- */
function initProcessTracker() {
  const progressFill = document.getElementById('stageProgress');
  const stageItems = document.querySelectorAll('.stage-item');
  if (!progressFill || stageItems.length === 0) return;

  let progress = 0;
  const duration = 5000; // 5 seconds cycle
  const interval = 50;   // Update every 50ms
  const step = 100 / (duration / interval);

  setInterval(() => {
    progress += step;
    if (progress > 100) {
      progress = 0;
    }

    progressFill.style.width = `${progress}%`;

    // Calculate active stage index (0 to 4)
    const activeStage = Math.min(4, Math.floor(progress / 20));
    stageItems.forEach((item, idx) => {
      if (idx <= activeStage) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }, interval);

  // Allow manual clicking on stage dots
  stageItems.forEach((item, idx) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      progress = (idx / (stageItems.length - 1)) * 100;
      progressFill.style.width = `${progress}%`;
      stageItems.forEach((it, i) => {
        if (i <= idx) it.classList.add('active');
        else it.classList.remove('active');
      });
    });
  });

  // Smooth framing on navigation click
  document.querySelectorAll('a[href="#metodo"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.getElementById('metodo');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* -------------------------------------------------------------
 * 4. 3D Coverflow Carousel (Casos de Éxito)
 * ------------------------------------------------------------- */
function initCoverflowCarousel() {
  const stage = document.getElementById('coverflowStage');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const carouselWrap = document.getElementById('coverflowCarousel');
  if (!stage || !prevBtn || !nextBtn) return;

  const cards = Array.from(stage.querySelectorAll('.case-card'));
  const total = cards.length;
  let activeIndex = 0;
  let autoplayTimer = null;
  let isHovered = false;

  function updateCards() {
    cards.forEach((card, idx) => {
      card.classList.remove('state-active', 'state-next', 'state-prev', 'state-hidden');

      if (idx === activeIndex) {
        card.classList.add('state-active');
      } else if (idx === (activeIndex + 1) % total) {
        card.classList.add('state-next');
      } else if (idx === (activeIndex - 1 + total) % total) {
        card.classList.add('state-prev');
      } else {
        card.classList.add('state-hidden');
      }
    });
  }

  function next() {
    activeIndex = (activeIndex + 1) % total;
    updateCards();
  }

  function prev() {
    activeIndex = (activeIndex - 1 + total) % total;
    updateCards();
  }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  // Clicking an adjacent card brings it to front
  cards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      if (!card.classList.contains('state-active')) {
        e.preventDefault();
        activeIndex = idx;
        updateCards();
      }
    });
  });

  // Autoplay with hover pause
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (!isHovered) {
        next();
      }
    }, 4500);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  if (carouselWrap) {
    carouselWrap.addEventListener('mouseenter', () => { isHovered = true; });
    carouselWrap.addEventListener('mouseleave', () => { isHovered = false; });
  }

  // Keyboard navigation when in viewport
  window.addEventListener('keydown', (e) => {
    const rect = stage.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    }
  });

  updateCards();
  startAutoplay();
}

/* -------------------------------------------------------------
 * 5. Dynamic Counter for Metrics (IntersectionObserver)
 * ------------------------------------------------------------- */
function initMetricsCounter() {
  const metricNumbers = document.querySelectorAll('.metric-number');
  if (metricNumbers.length === 0) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateAllCounters();
      }
    });
  }, { threshold: 0.3 });

  const aboutSection = document.getElementById('nosotros');
  if (aboutSection) {
    observer.observe(aboutSection);
  }

  function animateAllCounters() {
    metricNumbers.forEach(el => {
      const target = parseInt(el.getAttribute('data-target') || '0', 10);
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out quad
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOut * target);

        el.textContent = `${prefix}${currentVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = `${prefix}${target}${suffix}`;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }
}

/* -------------------------------------------------------------
 * 6. Cal.com Booking Modal (On-demand Lazy Loading)
 * ------------------------------------------------------------- */
function initCalModal() {
  const modal = document.getElementById('calModal');
  const closeBtn = document.getElementById('modalClose');
  const openButtons = document.querySelectorAll('.open-cal-modal');
  if (!modal) return;

  const iframe = modal.querySelector('iframe');

  function openModal() {
    if (iframe && !iframe.src && iframe.dataset.src) {
      iframe.src = iframe.dataset.src;
    }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => btn.addEventListener('click', openModal));

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------
 * 7. Navbar Scroll Transition
 * ------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.background = 'rgba(0, 0, 0, 0.95)';
      navbar.style.borderBottomColor = 'rgba(232, 29, 120, 0.2)';
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
    } else {
      navbar.style.background = 'rgba(0, 0, 0, 0.85)';
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
      navbar.style.boxShadow = 'none';
    }
  });
}
