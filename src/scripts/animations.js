import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// Универсальная функция для анимации появления
// ============================================
function animateOnScroll(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return;

  const {
    y = 30,
    duration = 1,
    stagger = 0,
    scale = 1,
    trigger = null,
    start = 'top 80%',
    delay = 0,
  } = options;

  gsap.from(elements, {
    opacity: 0,
    y,
    scale,
    duration,
    stagger,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: trigger ? trigger : elements[0],
      start,
      once: true,
    }
  });
}

export function initAnimations() {
  // ============================================
  // ГЛАВНАЯ СТРАНИЦА (index.astro)
  // ============================================
  
  // Hero — сложная анимация с таймлайном (при загрузке)
  const heroTitle = document.querySelector('.hero__title');
  const heroText = document.querySelector('.hero__text');

  if (heroTitle && heroText) {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.from(heroTitle, { opacity: 0, y: 30, duration: 1.2, delay: 0.2 })
      .from(heroText, { opacity: 0, y: 20, duration: 1, stagger: 0.2 }, '-=0.8');
  }

  // Сетка карточек на главной
  animateOnScroll('.image-card', {
    y: 40,
    stagger: 0.15,
    trigger: '.home-grid',
  });

  // ============================================
  // СТРАНИЦА DETAILS (details.astro)
  // ============================================
  
  // Заголовок баннера — при загрузке
  const detailsTitle = document.querySelector('.details-hero__title');
  if (detailsTitle) {
    gsap.from(detailsTitle, {
      opacity: 0,
      y: 30,
      duration: 1.2,
      delay: 0.2,
      ease: 'power2.out',
    });
  }

  // Остальные блоки — при скролле
  animateOnScroll('.details-intro__box', { 
    y: 40, 
    trigger: '.details-intro' 
  });

  animateOnScroll('.details-image-full img', { 
    y: 0, 
    scale: 0.95, 
    trigger: '.details-image-full', 
    start: 'top 85%' 
  });

  animateOnScroll('.details-info__card', { 
    y: 40, 
    stagger: 0.2, 
    trigger: '.details-info' 
  });

  animateOnScroll('.details-banner__title', { 
    y: 30, 
    trigger: '.details-banner' 
  });

  animateOnScroll('.details-feature', { 
    y: 40, 
    stagger: 0.2, 
    trigger: '.details-features' 
  });

  // ============================================
  // СТРАНИЦА OUR STORY (our-story.astro)
  // ============================================

  // Верхний полароид
  animateOnScroll('.story__polaroid--top', {
    y: 30,
    duration: 1.2,
    scale: 0.95,
    trigger: '.story__top',
  });

  // Заголовок
  animateOnScroll('.story__title', {
    y: 20,
    trigger: '.story__top',
    delay: 0.3,
  });

  // Верхний текст
  const storyTextTop = document.querySelector('.story__top .story__text');
  if (storyTextTop) {
    gsap.from(storyTextTop, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.story__top',
        start: 'top 80%',
        once: true,
      }
    });
  }

  // Коллаж
  animateOnScroll('.story__collage', {
    y: 40,
    duration: 1.2,
    scale: 0.95,
    trigger: '.story__collage',
    start: 'top 85%',
  });

  // Нижний текст и кнопка — используем fromTo для надёжности
  const storyBottom = document.querySelector('.story__bottom');
  if (storyBottom) {
    gsap.fromTo(storyBottom,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.story__bottom',
          start: 'top 95%',
          once: true,
        }
      }
    );
  }

  // ============================================
  // REGISTRY BANNER (общий для всех страниц)
  // ============================================
  const registryContent = document.querySelector('.registry-banner__content');
  if (registryContent) {
    gsap.fromTo(registryContent, 
      { opacity: 0, y: 30 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.registry-banner',
          start: 'top 85%',
          once: true,
        }
      }
    );
  }
}