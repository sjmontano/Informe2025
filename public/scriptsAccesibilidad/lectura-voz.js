// @ts-nocheck
/**
 * lectura-voz.js — Modo de lectura por voz
 *
 * Navegación con flechas (ArrowDown/ArrowUp) entre elementos [data-read].
 * Al seleccionar un bloque, SpeechSynthesis lee el texto en voz alta.
 * Hover sobre un bloque también lo activa cuando el modo está encendido.
 *
 * Se activa/desactiva vía clase `modo-lectura` en <html>,
 * controlada por el toggle `#acc-lectura` en AccControls.astro.
 */

document.addEventListener("DOMContentLoaded", () => {
  let bloques = [];
  let indice = -1;

  function recolectarBloques() {
    bloques = [...document.querySelectorAll("[data-read]")].filter(
      (el) => el.textContent.trim().length > 0,
    );
  }

  function limpiarLectura() {
    window.speechSynthesis.cancel();
    bloques.forEach((el) => el.removeAttribute("data-reading"));
    indice = -1;
  }

  function leerBloque(el) {
    if (!el || !el.textContent.trim()) return;
    window.speechSynthesis.cancel();
    bloques.forEach((b) => b.removeAttribute("data-reading"));
    el.setAttribute("data-reading", "");
    const texto = el.textContent.trim();
    const voz = texto.replace(/\bCOP\s*\$|\$/g, "pesos colombianos");
    const utterance = new SpeechSynthesisUtterance(voz);
    utterance.lang = "es-CO";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function activar() {
    // Deactivate lupa if active (mutual exclusion)
    if (document.documentElement.classList.contains("modo-lupa")) {
      const btn = document.getElementById("acc-lupa");
      if (btn) btn.click();
    }
    recolectarBloques();
    if (bloques.length === 0) return;
    indice = 0;
    leerBloque(bloques[0]);
  }

  function desactivar() {
    limpiarLectura();
  }

  function navegar(delta) {
    if (bloques.length === 0) return;
    const nuevo = indice + delta;
    if (nuevo < 0 || nuevo >= bloques.length) return;
    indice = nuevo;
    leerBloque(bloques[indice]);
  }

  // ─── Teclado ───
  document.addEventListener("keydown", (e) => {
    if (!document.documentElement.classList.contains("modo-lectura")) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      navegar(1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      navegar(-1);
    } else if (e.key === "Escape") {
      e.preventDefault();
      desactivar();
      const btn = document.getElementById("acc-lectura");
      if (btn instanceof HTMLButtonElement) {
        btn.setAttribute("aria-pressed", "false");
      }
      document.documentElement.classList.remove("modo-lectura");
    }
  });

  // ─── Mouse hover ───
  document.addEventListener(
    "mouseover",
    (e) => {
      if (!document.documentElement.classList.contains("modo-lectura")) return;
      const bloque = e.target.closest("[data-read]");
      if (bloque) {
        const idx = bloques.indexOf(bloque);
        if (idx !== -1 && idx !== indice) {
          indice = idx;
          leerBloque(bloque);
        }
      }
    },
    { passive: true },
  );

  // ─── Toggle desde AccControls ───
  const toggle = document.getElementById("acc-lectura");
  if (toggle instanceof HTMLButtonElement) {
    toggle.addEventListener("click", () => {
      const activo =
        toggle.getAttribute("aria-pressed") === "true";
      toggle.setAttribute("aria-pressed", String(!activo));
      document.documentElement.classList.toggle("modo-lectura", !activo);
      if (!activo) {
        activar();
      } else {
        desactivar();
      }
    });
  }

  // ─── Escuchar cambios de clase desde reset ───
  document.addEventListener("acc-change", (e) => {
    if (e.detail && e.detail.mode === "modo-lectura" && !e.detail.active) {
      desactivar();
    }
  });

  // ─── Re-colectar si el DOM cambia ───
  const obs = new MutationObserver(() => recolectarBloques());
  obs.observe(document.body, { childList: true, subtree: true });
});
