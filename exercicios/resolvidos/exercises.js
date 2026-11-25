(() => {
  "use strict";

  document.querySelectorAll("[data-menu-button]").forEach((button) => {
    const menuId = button.getAttribute("aria-controls");
    const menu = document.getElementById(menuId);
    if (!menu) return;

    const setMenuState = (isOpen) => {
      button.setAttribute("aria-expanded", String(isOpen));
      menu.hidden = !isOpen;
      button.textContent = isOpen ? "Fechar menu" : "Abrir menu";
    };

    setMenuState(false);
    button.addEventListener("click", () => {
      setMenuState(button.getAttribute("aria-expanded") !== "true");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
        setMenuState(false);
        button.focus();
      }
    });
  });

  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    const status = form.querySelector("[data-form-status]");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status.textContent = "Formulário validado. Nenhum dado foi enviado.";
    });
  });

  document.querySelectorAll("[data-contrast-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const isActive = document.body.classList.toggle("high-contrast");
      button.setAttribute("aria-pressed", String(isActive));
      button.textContent = isActive ? "Desativar alto contraste" : "Ativar alto contraste";
    });
  });

  document.querySelectorAll("[data-privacy-checklist]").forEach((list) => {
    const boxes = [...list.querySelectorAll('input[type="checkbox"]')];
    const status = document.querySelector("[data-checklist-status]");
    const update = () => {
      const checked = boxes.filter((box) => box.checked).length;
      status.textContent = checked === boxes.length
        ? "Auditoria concluída: todos os itens foram revisados."
        : `${checked} de ${boxes.length} itens revisados.`;
    };
    boxes.forEach((box) => box.addEventListener("change", update));
    update();
  });
})();
