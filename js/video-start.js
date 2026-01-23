// Alle Videos auswählen, die automatisch starten sollen
  const videos = document.querySelectorAll('.autoplay-video');

  // Intersection Observer erstellen
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        // Das aktuell beobachtete Video-Element
        const video = entry.target;

        if (entry.isIntersecting) {
          // Video ist im sichtbaren Bereich → abspielen
          video.play().catch(() => {
            // Falls der Browser das Abspielen blockiert
            // (z.B. extrem restriktive Autoplay-Regeln)
          });
        } else {
          // Video ist nicht mehr sichtbar → pausieren
          video.pause();
        }
      });
    },
    {
      // Ab wann das Video als "sichtbar" gilt
      threshold: 0.5
      // 0.5 = mindestens 50 % des Videos im Viewport
    }
  );

  // Jedes Video dem Observer übergeben
  videos.forEach((video) => {
    observer.observe(video);
  });

   // Prüfen, ob der User reduzierte Animationen möchte
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (!prefersReducedMotion) {
    const videos = document.querySelectorAll('.autoplay-video');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videos.forEach((video) => observer.observe(video));
  }