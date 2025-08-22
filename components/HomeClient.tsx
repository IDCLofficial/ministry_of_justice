"use client"
import { useEffect } from "react";

export default function HomeClient() {
useEffect(() => {
    if (typeof window === 'undefined') return;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right, .reveal-pop')
    );
    if (elements.length === 0) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return(
    <></>
  )
}