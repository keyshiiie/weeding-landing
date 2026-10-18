import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // ============================================
  // ГЛАВНАЯ СТРАНИЦА (index.astro)
  // ============================================
  const heroTitle = document.querySelector('.hero__title');
  const heroText = document.querySelector('.hero__text');

  if (heroTitle && heroText) {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.from(heroTitle, { opacity: 0, y: 30, duration: 1.2, delay: 0.2 })
      .from(heroText, { opacity: 0, y: 20, duration: 1, stagger: 0.2 }, '-=0.8');
  }

  const cards = document.querySelectorAll('.image-card');
  if (cards.length > 0) {
    gsap.from(cards, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.home-grid',
        start: 'top 80%',
        once: true,
      }
    });
  }

  // ============================================
  // СТРАНИЦА DETAILS (details.astro)
  // ============================================
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

  const detailsIntro = document.querySelector('.details-intro__box');
  if (detailsIntro) {
    gsap.from(detailsIntro, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.details-intro',
        start: 'top 80%',
        once: true,
      }
    });
  }

  const detailsImage = document.querySelector('.details-image-full img');
  if (detailsImage) {
    gsap.from(detailsImage, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.details-image-full',
        start: 'top 85%',
        once: true,
      }
    });
  }

  const detailsCards = document.querySelectorAll('.details-info__card');
  if (detailsCards.length > 0) {
    gsap.from(detailsCards, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.details-info',
        start: 'top 80%',
        once: true,
      }
    });
  }

  const detailsBanner = document.querySelector('.details-banner__title');
  if (detailsBanner) {
    gsap.from(detailsBanner, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.details-banner',
        start: 'top 80%',
        once: true,
      }
    });
  }

  const features = document.querySelectorAll('.details-feature');
  if (features.length > 0) {
    gsap.from(features, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.details-features',
        start: 'top 80%',
        once: true,
      }
    });
  }

  // ============================================
  // REGISTRY BANNER (общий для обеих страниц)
  // ============================================
  const registryContent = document.querySelector('.registry-banner__content');
  if (registryContent) {
    // Используем fromTo для надежности — гарантируем, что конечное состояние будет opacity: 1
    gsap.fromTo(registryContent, 
      { opacity: 0, y: 30 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.registry-banner',
          start: 'top 85%', // Сработает, когда блок появится в поле зрения
          once: true,
        }
      }
    );
  }
}