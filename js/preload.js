// ------------------------------
// Responsive Video Loader (2 Videos)
// ------------------------------

// Video 1 Quellen
const video1Webm = document.getElementById("video1-webm");
const video1Mp4 = document.getElementById("video1-mp4");

// Video 2 Quellen
const video2Webm = document.getElementById("video2-webm");
const video2Mp4 = document.getElementById("video2-mp4");

// Videos selbst
const video1 = video1Webm.closest("video");
const video2 = video2Webm.closest("video");

// Funktion: Quellen setzen je nach Viewport
function setVideoSources() {
  const isMobile = window.innerWidth < 640;

  if (isMobile) {
    // Mobile Quellen
    video1Webm.src = "images/ma-thesis-video1-720x300.webm";
    video1Mp4.src = "images/ma-thesis-video1-720x300.mp4";

    video2Webm.src = "images/ma-thesis-video2-720x405.webm";
    video2Mp4.src = "images/ma-thesis-video2-720x405.mp4";
  } else {
    // Desktop Quellen
    video1Webm.src = "images/ma-thesis-video1.webm";
    video1Mp4.src = "images/ma-thesis-video1.mp4";

    video2Webm.src = "images/ma-thesis-video2.webm";
    video2Mp4.src = "images/ma-thesis-video2.mp4";
  }

  // Browser muss die neuen Quellen laden
  video1.load();
  video2.load();
}

// Intersection Observer für Autoplay (wie vorher)
function setupAutoplayObserver() {
  const videos = document.querySelectorAll(".autoplay-video");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;

      if (entry.intersectionRatio >= 0.5) {
        video.play().catch(() => console.log("Autoplay blockiert"));
        video.classList.add("is-visible");
      } else {
        video.pause();
        video.classList.remove("is-visible");
      }
    });
  }, {
    threshold: [0.5]
  });

  videos.forEach(video => observer.observe(video));
}

// Initial
setVideoSources();
setupAutoplayObserver();

// Bei Resize neu setzen
window.addEventListener("resize", setVideoSources);
