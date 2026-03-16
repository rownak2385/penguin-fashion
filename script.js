// Tailwind CDN configuration used by the utility classes in index.html.
tailwind.config = {
  theme: {
    extend: {
      // Project color palette based on the provided Penguin Fashion mockup.
      colors: {
        cream: "#FFFBF0",
        ink: "#363958",
        body: "#3E3E3E",
        accent: "#FABE4C",
        olive: "#A4BC46",
        surface: "#F1F1F1"
      },
      // Custom card shadow for product and feature panels.
      boxShadow: {
        card: "0 12px 30px rgba(0, 0, 0, 0.08)"
      }
    }
  }
};

// Mobile menu toggle with animated hamburger-to-close transition.
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuButton || !mobileMenu) {
    return;
  }

  const mobileLinks = mobileMenu.querySelectorAll("a");

  const closeMenu = () => {
    menuButton.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    mobileMenu.classList.add("is-closing");

    window.setTimeout(() => {
      if (menuButton.getAttribute("aria-expanded") === "false") {
        mobileMenu.hidden = true;
        mobileMenu.classList.remove("is-closing");
      }
    }, 180);
  };

  const openMenu = () => {
    mobileMenu.hidden = false;
    mobileMenu.classList.remove("is-closing");
    menuButton.classList.add("is-open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation menu");
  };

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      closeMenu();
      return;
    }

    openMenu();
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024 && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
    }
  });
});
