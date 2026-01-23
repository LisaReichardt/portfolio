// scroll-effects.js

// Alle Bilder + Videos auswählen
const media = document.querySelectorAll('img, video');

const mediaObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        // Einblenden
        entry.target.classList.add('is-visible');

        // Wenn es ein Video ist, zusätzlich abspielen
        if (entry.target.tagName === 'VIDEO') {
          entry.target.play().catch(() => {});
        }

        // Nicht mehr beobachten (nur einmal einblenden)
        observer.unobserve(entry.target);
      } else {
        // Wenn es ein Video ist, pausieren, wenn es aus dem Viewport verschwindet
        if (entry.target.tagName === 'VIDEO') {
          entry.target.pause();
        }
      }
    });
  },
  {
    threshold: 0.2
  }
);

media.forEach((item) => {
  mediaObserver.observe(item);
});