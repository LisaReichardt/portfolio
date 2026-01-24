// iOS erkennen
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (isIOS) {
  document.querySelectorAll("video").forEach(video => {
    video.preload = "auto";
  });
}
