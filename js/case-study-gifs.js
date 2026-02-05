function fitCaseStudyGifs() {
  document.querySelectorAll(".case-study-gifs").forEach((wrap) => {
    const imgs = [...wrap.querySelectorAll("img")];
    if (imgs.length !== 2) return;

    const [a, b] = imgs;

    // Reset, damit Resize sauber neu berechnet
    a.style.height = "";
    b.style.height = "";

    // Sicherstellen, dass beide geladen sind
    const aw = a.naturalWidth, ah = a.naturalHeight;
    const bw = b.naturalWidth, bh = b.naturalHeight;
    if (!aw || !ah || !bw || !bh) return;

    // Seitenverhältnisse (Breite pro 1px Höhe)
    const arA = aw / ah;
    const arB = bw / bh;

    // Nächsten project-content finden
    const projectContent = wrap.closest(".project-content");
    if (!projectContent) return;

    // Verfügbare Breite = project-content Innenbreite ohne Padding
    const styles = getComputedStyle(projectContent);
    const padL = parseFloat(styles.paddingLeft) || 0;
    const padR = parseFloat(styles.paddingRight) || 0;
    const availableWidth = projectContent.clientWidth - padL - padR;

    // Höhe so, dass beide nebeneinander exakt in availableWidth passen:
    // (H*arA) + (H*arB) = availableWidth  => H = availableWidth / (arA + arB)
    const H = availableWidth / (arA + arB);

    // Höhe setzen: beide gleich hoch, proportional, nichts abgeschnitten
    a.style.height = `${H}px`;
    b.style.height = `${H}px`;
  });
}

// Beim Laden und bei Resize ausführen
window.addEventListener("load", fitCaseStudyGifs);
window.addEventListener("resize", fitCaseStudyGifs);

// Falls einzelne Bilder später laden (GIF/PNG), nachladen abfangen
document.querySelectorAll(".case-study-gifs img").forEach((img) => {
  if (img.complete) return;
  img.addEventListener("load", fitCaseStudyGifs);
});