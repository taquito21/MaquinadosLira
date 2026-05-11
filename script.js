// Reemplazar este número por el número real de Maquinados Lira en formato internacional.
// Ejemplo México: 52 + lada + número, sin espacios ni guiones.
const whatsappNumber = "5215569351985";

const whatsappMessages = {
  cotizar:
    "Hola, me interesa cotizar una pieza maquinada. Tengo una muestra/plano/requerimiento y me gustaría saber qué información necesitan para revisarlo.",
  revision:
    "Hola, quiero enviar una pieza para revisión y saber si es viable fabricarla o ajustarla.",
  orientacion: "Hola, me gustaría solicitar orientación sobre una pieza maquinada.",
};

function createWhatsAppLink(messageKey) {
  const message = whatsappMessages[messageKey] || whatsappMessages.cotizar;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach((button) => {
  const messageKey = button.getAttribute("data-whatsapp");
  button.setAttribute("href", createWhatsAppLink(messageKey));
  button.setAttribute("target", "_blank");
  button.setAttribute("rel", "noopener noreferrer");
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent =
      "Gracias por tu mensaje. Para una atención más rápida, también puedes contactarnos por WhatsApp.";
    contactForm.reset();
  });
}

const currentYear = document.getElementById("current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
