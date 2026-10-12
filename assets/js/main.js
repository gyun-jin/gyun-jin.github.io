const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("main > section[id]");
const navLinks = document.querySelectorAll(".side-nav a");
const caseOpeners = document.querySelectorAll("[data-case-open]");
const caseDialogs = document.querySelectorAll(".case-dialog");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: "-35% 0px -55%", threshold: 0 }
);

sections.forEach((section) => sectionObserver.observe(section));

caseOpeners.forEach((opener) => {
  opener.addEventListener("click", () => {
    const dialog = document.querySelector(`#${opener.dataset.caseOpen}`);
    if (!dialog || typeof dialog.showModal !== "function") return;
    dialog.showModal();
    document.body.classList.add("modal-open");
  });
});

caseDialogs.forEach((dialog) => {
  const closeButton = dialog.querySelector("[data-case-close]");

  closeButton?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    if (!document.querySelector(".case-dialog[open]")) {
      document.body.classList.remove("modal-open");
    }
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
