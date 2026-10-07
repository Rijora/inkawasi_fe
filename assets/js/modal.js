'use strict';

/**
 * MODAL POPUP
 * 
 * Modal que se abre automáticamente al cargar la página
 * Se puede cerrar haciendo clic en la X o fuera del modal
 */

// Obtener elementos del modal
const modal = document.getElementById("imageModal");
const modalClose = document.querySelector(".modal-close");

// Abrir modal después de que la página cargue
window.addEventListener("load", function() {
  setTimeout(() => {
    modal.classList.add("show");
  }, 1000); // Espera 1 segundo después de cargar
});

// Cerrar modal al hacer clic en la X
modalClose.addEventListener("click", function() {
  modal.classList.remove("show");
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

// Cerrar modal con la tecla ESC
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    modal.classList.remove("show");
  }
});
