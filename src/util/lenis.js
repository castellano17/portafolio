let lenisInstance = null;

export function setLenis(instance) {
  lenisInstance = instance;
}

export function scrollToSection(target, options = {}) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -90, duration: 1.2, ...options });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
    return;
  }
  const el = typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: "smooth" });
}
