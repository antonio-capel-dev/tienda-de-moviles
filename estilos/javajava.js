// ========== FAQ DESPLEGABLE ==========

function toggleFAQ(numero) {
  const faqItem = document.getElementById(`faq-item-${numero}`);
  const icono = document.getElementById(`icono-${numero}`);
  const estaActivo = faqItem.classList.contains('activo');
  
  // Cerrar todos los demás FAQs
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('activo');
    // Restaurar todos los iconos a +
    const itemIcono = item.querySelector('.faq-icono');
    if (itemIcono) {
      itemIcono.textContent = '+';
    }
  });
  
  // Si no estaba activo, abrirlo
  if (!estaActivo) {
    faqItem.classList.add('activo');
    icono.textContent = '−';
  }
}