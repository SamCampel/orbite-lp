const navigation = document.querySelector('nav[aria-label="Navegação principal"]');
const menuToggle = navigation?.querySelector(".nav-menu-toggle");
const navigationLinks = navigation?.querySelectorAll(".nav-links a");

if (navigation && menuToggle && navigationLinks) {
  const setMenuOpen = (isOpen) => {
    navigation.dataset.menuOpen = String(isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação",
    );
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });
}
