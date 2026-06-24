const tarjetas = document.querySelectorAll(".testimonios__tarjeta");
const puntos = document.querySelectorAll(".testimonios__punto");
const btnIzq = document.querySelector(
    ".testimonios__flecha--izquierda",
);
const btnDer = document.querySelector(
    ".testimonios__flecha--derecha",
);
const barras = [];

let actual = 0;
const total = tarjetas.length;
let timer;
let ciclando = false;

const mostrar = (idx) => {
    if (ciclando) return;
    ciclando = true;

    tarjetas.forEach((t) => t.removeAttribute("data-activa"));
    puntos.forEach((p) => p.removeAttribute("data-activo"));

    tarjetas[idx]?.setAttribute("data-activa", "");

    if (window.innerWidth > 1279) {
        tarjetas[(idx + 1) % total]?.setAttribute("data-activa", "");
    }

    puntos[idx]?.setAttribute("data-activo", "");
    actual = idx;
    barras.forEach((actualizar) => actualizar());

    const rm = document.documentElement.classList.contains(
        "modo-sin-movimiento",
    );
    setTimeout(
        () => {
            ciclando = false;
        },
        rm ? 0 : 300,
    );
};

const siguiente = () => mostrar((actual + 1) % total);
const anterior = () => mostrar((actual - 1 + total) % total);

const pausar = () => clearInterval(timer);
const iniciar = () => {
    pausar();
    if (!document.documentElement.classList.contains("modo-sin-movimiento")) {
        timer = setInterval(siguiente, 5000);
    }
};

mostrar(0);
iniciar();

btnIzq?.addEventListener("click", () => {
    pausar();
    anterior();
    iniciar();
});
btnDer?.addEventListener("click", () => {
    pausar();
    siguiente();
    iniciar();
});

puntos.forEach((p) =>
    p.addEventListener("click", () => {
        pausar();
        mostrar(Number(p.getAttribute("data-index")));
        iniciar();
    }),
);

const contenedor = document.querySelector(".testimonios__contenedor");
contenedor?.addEventListener("mouseenter", pausar);
contenedor?.addEventListener("mouseleave", iniciar);

document.addEventListener("acc-change", (event) => {
    const e = event;
    if (e.detail && e.detail.mode === "modo-sin-movimiento") {
        e.detail.active ? pausar() : iniciar();
    }
});

/* ── Scrollbar personalizada ─────────────────────────────────── */
const prepararBarra = (cuerpo) => {
    const scroll = cuerpo.querySelector("[data-scroll]");
    const bar = cuerpo.querySelector("[data-bar]");
    const thumb = cuerpo.querySelector("[data-thumb]");
    if (!scroll || !bar || !thumb) return;

    const actualizar = () => {
        const scrollHeight = scroll.scrollHeight;
        const clientHeight = scroll.clientHeight;
        const barHeight = bar.clientHeight;
        const maxScrollTop = Math.max(scrollHeight - clientHeight, 0);
        if (barHeight === 0) return;
        if (maxScrollTop === 0) {
            bar.style.opacity = "0";
            return;
        }
        bar.style.opacity = "1";
        const minThumb = barHeight * 0.08;
        const maxThumb = barHeight * 0.25;
        const rawThumb =
            maxScrollTop > 0
                ? (clientHeight / scrollHeight) * barHeight
                : barHeight * 0.18;
        const thumbHeight = Math.min(Math.max(rawThumb, minThumb), maxThumb);
        const maxThumbTop = Math.max(barHeight - thumbHeight, 0);
        const thumbTop =
            maxScrollTop > 0 ? (scroll.scrollTop / maxScrollTop) * maxThumbTop : 0;
        thumb.style.height = `${thumbHeight}px`;
        thumb.style.transform = `translateY(${Math.min(Math.max(thumbTop, 0), maxThumbTop)}px)`;
    };

    scroll.addEventListener("scroll", actualizar, { passive: true });

    let arrastrando = false,
        inicioY = 0,
        inicioScroll = 0;
    const moverThumb = (evento) => {
        if (!arrastrando) return;
        const barHeight = bar.clientHeight;
        const thumbHeight = thumb.offsetHeight;
        const maxThumbTop = barHeight - thumbHeight;
        const maxScrollTop = scroll.scrollHeight - scroll.clientHeight;
        if (maxThumbTop <= 0 || maxScrollTop <= 0) return;
        const delta = evento.clientY - inicioY;
        scroll.scrollTop = Math.min(
            Math.max(inicioScroll + (delta / maxThumbTop) * maxScrollTop, 0),
            maxScrollTop,
        );
    };

    thumb.addEventListener("pointerdown", (evento) => {
        arrastrando = true;
        inicioY = evento.clientY;
        inicioScroll = scroll.scrollTop;
        thumb.setPointerCapture(evento.pointerId);
    });
    thumb.addEventListener("pointermove", moverThumb);
    thumb.addEventListener("pointerup", () => {
        arrastrando = false;
    });
    thumb.addEventListener("pointercancel", () => {
        arrastrando = false;
    });

    bar.addEventListener("pointerdown", (evento) => {
        if (evento.target === thumb) return;
        const rect = bar.getBoundingClientRect();
        const clickY = evento.clientY - rect.top;
        const barHeight = bar.clientHeight;
        const thumbHeight = thumb.offsetHeight;
        const maxThumbTop = barHeight - thumbHeight;
        const maxScrollTop = scroll.scrollHeight - scroll.clientHeight;
        if (maxThumbTop <= 0 || maxScrollTop <= 0) return;
        scroll.scrollTop =
            (Math.min(Math.max(clickY - thumbHeight / 2, 0), maxThumbTop) /
                maxThumbTop) *
            maxScrollTop;
    });

    actualizar();
    barras.push(actualizar);
};

document
    .querySelectorAll(".testimonios__cuerpo")
    .forEach((cuerpo) => prepararBarra(cuerpo));
window.addEventListener("resize", () => {
    barras.forEach((actualizar) => actualizar());
});
