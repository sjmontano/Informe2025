// @ts-nocheck
/* ─── Lupa — magnificador con seguimiento suave ─── */

document.addEventListener("DOMContentLoaded", () => {
  let lens = null;
  let zoomContent = null;
  let active = false;
  let running = false;

  const MAG = 1.5;
  const SZ = 200;

  let mouse = { x: 0, y: 0 };
  let smooth = { x: 0, y: 0 };

  function lerp(a, b, n) {
    return (1 - n) * a + n * b;
  }

  function build() {
    if (lens) return;

    lens = document.createElement("div");
    lens.id = "lupa-lens";
    lens.style.cssText =
      "position:fixed;top:0;left:0;z-index:99999;" +
      "width:" + SZ + "px;height:" + SZ + "px;" +
      "border-radius:50%;overflow:hidden;pointer-events:none;" +
      "border:3px solid var(--coral,#ef7e7b);" +
      "box-shadow:0 0 24px rgba(0,0,0,.25);" +
      "opacity:0;will-change:transform";

    const src = document.querySelector(".scene-wrapper") || document.body;
    zoomContent = src.cloneNode(true);
    zoomContent.id = "lupa-content";
    zoomContent.style.cssText =
      "transform-origin:0 0;position:absolute;top:0;left:0;will-change:transform";
    zoomContent.style.top = -window.scrollY + "px";
    zoomContent.style.left = -window.scrollX + "px";

    lens.appendChild(zoomContent);
    document.body.appendChild(lens);
  }

  function tick(now) {
    if (!active) { running = false; return; }

    smooth.x = lerp(smooth.x, mouse.x, 0.17);
    smooth.y = lerp(smooth.y, mouse.y, 0.17);

    lens.style.transform =
      "translate(calc(" + smooth.x + "px - 50%), calc(" + smooth.y + "px - 50%))";

    zoomContent.style.transform =
      "translate(" + (SZ / 2 - mouse.x * MAG + window.scrollX * (1 - MAG)) + "px," +
      (SZ / 2 - mouse.y * MAG + window.scrollY * (1 - MAG)) + "px) scale(" + MAG + ")";

    if (Math.abs(smooth.x - mouse.x) < 0.5 &&
        Math.abs(smooth.y - mouse.y) < 0.5) {
      running = false;
      return;
    }

    requestAnimationFrame(tick);
  }

  function onMouse(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    if (e.target.closest(".acc-controls, .acc-panel, #acc-toggle")) {
      if (lens) lens.style.opacity = "0";
      return;
    }
    if (lens) lens.style.opacity = "1";
    if (!running) { running = true; requestAnimationFrame(tick); }
  }

  function onScroll() {
    if (!zoomContent) return;
    zoomContent.style.top = -window.scrollY + "px";
    zoomContent.style.left = -window.scrollX + "px";
  }

  function onKey(e) {
    if (e.key === "Escape" && active) {
      const btn = document.getElementById("acc-lupa");
      if (btn) btn.click();
    }
  }

  function activate() {
    if (document.documentElement.classList.contains("modo-lectura")) {
      const btn = document.getElementById("acc-lectura");
      if (btn) btn.click();
    }
    if (!lens) build();
    active = true;
    if (!running) { running = true; requestAnimationFrame(tick); }
    document.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
  }

  function deactivate() {
    active = false;
    running = false;
    if (lens) lens.style.opacity = "0";
    document.removeEventListener("mousemove", onMouse);
    window.removeEventListener("scroll", onScroll);
    document.removeEventListener("keydown", onKey);
  }

  // Handle persisted state on page load
  if (document.documentElement.classList.contains("modo-lupa")) {
    activate();
  }

  document.addEventListener("acc-change", (e) => {
    if (e.detail.mode !== "modo-lupa") return;
    if (e.detail.active) activate();
    else deactivate();
  });
});
