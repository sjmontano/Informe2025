// @ts-nocheck
// AccControls script moved out of the Astro component to avoid inline type checking issues.

document.addEventListener("DOMContentLoaded", () => {
    // ─── Helpers ───
    const setClass = (name, on) => {
        document.documentElement.classList.toggle(name, on);
    };

    const persist = (key, val) => {
        try {
            localStorage.setItem(key, String(val));
        } catch (_) { }
    };

    const load = (key, def) => {
        try {
            return localStorage.getItem(key) ?? def;
        } catch (_) {
            return def;
        }
    };

    // ─── Toggle panel ───
    const toggle = document.getElementById("acc-toggle");
    const panel = document.getElementById("acc-panel");
    if (toggle instanceof HTMLButtonElement) {
        toggle.addEventListener("click", () => {
            const open = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", String(!open));
            panel?.classList.toggle("acc-panel--open");
        });
    }

    // ─── Generic toggle factory ───
    function makeToggle(btnId, className, storageKey) {
        const btn = document.getElementById(btnId);
        if (!(btn instanceof HTMLButtonElement)) return;
        const apply = (on) => {
            setClass(className, on);
            btn.setAttribute("aria-pressed", String(on));
            persist(storageKey, String(on));
        };
        if (load(storageKey, "false") === "true") apply(true);
        btn.addEventListener("click", () => apply(btn.getAttribute("aria-pressed") !== "true"));
    }

    makeToggle("acc-hc", "modo-alto-contraste", "acc-hc");
    makeToggle("acc-rm", "modo-sin-movimiento", "acc-rm");
    makeToggle("acc-night", "modo-noche", "acc-night");

    // ─── Font size ───
    let level = 0;
    const LEVELS = ["", "letra-md", "letra-lg", "letra-xl"];
    const minus = document.getElementById("acc-font-minus");
    const plus = document.getElementById("acc-font-plus");

    const saved = parseInt(load("acc-letra", "0"), 10);
    if (saved > 0 && saved < LEVELS.length) {
        level = saved;
        setClass(LEVELS[level], true);
    }

    const updateBtns = () => {
        if (minus instanceof HTMLButtonElement) minus.disabled = level === 0;
        if (plus instanceof HTMLButtonElement) plus.disabled = level >= LEVELS.length - 1;
    };

    if (minus instanceof HTMLButtonElement) {
        minus.addEventListener("click", () => {
            if (level <= 0) return;
            setClass(LEVELS[level], false);
            level--;
            setClass(LEVELS[level], true);
            persist("acc-letra", String(level));
            updateBtns();
        });
    }

    if (plus instanceof HTMLButtonElement) {
        plus.addEventListener("click", () => {
            if (level >= LEVELS.length - 1) return;
            setClass(LEVELS[level], false);
            level++;
            setClass(LEVELS[level], true);
            persist("acc-letra", String(level));
            updateBtns();
        });
    }

    // ─── Reset ───
    const resetBtn = document.getElementById("acc-reset");
    if (resetBtn instanceof HTMLButtonElement) {
        resetBtn.addEventListener("click", () => {
            LEVELS.forEach((c) => setClass(c, false));
            level = 0;
            persist("acc-letra", "0");
            updateBtns();
            ["modo-alto-contraste", "modo-sin-movimiento", "modo-noche"].forEach((c) => setClass(c, false));
            persist("acc-hc", "false");
            persist("acc-rm", "false");
            persist("acc-night", "false");
            ["acc-hc", "acc-rm", "acc-night"].forEach((id) => {
                const btn = document.getElementById(id);
                if (btn instanceof HTMLButtonElement) {
                    btn.setAttribute("aria-pressed", "false");
                }
            });
        });
    }

    updateBtns();
});
