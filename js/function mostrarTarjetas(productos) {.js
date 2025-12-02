function mostrarTarjetas(productos) {
  const contenedor = document.querySelector(".tarjetas");
  contenedor.innerHTML = productos.map(crearTarjeta).join("");
  //Agregar a todos los botones
    const botones = contenedor.querySelectorAll('btn-ver-mas');
    botonesCambiarColor.forEach(boton => {
    boton.addEventListener('click', (e) => {
    e.target.classList.add('boton-agregado');
    e.target.textContent = 'Agregado';
  });
});
}





let favoritos = [];

function crearFavorito(id, event) {
  const boton = event.target;
  const index = favoritos.indexOf(id);

  if (index === 1) {
    favoritos.push(id);
    boton.textContent = '❤️'
  }
}