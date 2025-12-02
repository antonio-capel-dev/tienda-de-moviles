// ================================================
// TELEFONÍA CAPEL - E-COMMERCE DE MÓVILES
// Código 100% Inmutable
// ================================================

const mi_array = [
  {
    id: 1,
    nombre: "Samsung Galaxy S24 Ultra",
    descripcionCorta: "El buque insignia definitivo con cámara de 200MP y diseño en titanio.",
    precio: 1399,
    categoria: "smartphones",
    imagen: "img/Samsungs24ultra.webp",
    stock: 15
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S24 Plus",
    descripcionCorta: "El equilibrio perfecto entre potencia premium y tamaño manejable.",
    precio: 1099,
    categoria: "smartphones",
    imagen: "img/Samsungs24plus.webp",
    stock: 20
  },
  {
    id: 3,
    nombre: "Samsung Galaxy Tab S9 FE",
    descripcionCorta: "Tablet versátil con S Pen incluido para crear y producir.",
    precio: 549,
    categoria: "tablets",
    imagen: "img/Samsungs24plus.webp",
    stock: 10
  },
  {
    id: 4,
    nombre: "Xiaomi 14T Pro",
    descripcionCorta: "Fotografía profesional Leica y procesamiento de élite.",
    precio: 799,
    categoria: "smartphones",
    imagen: "img/Xiaomi13Lite.webp",
    stock: 12
  },
  {
    id: 5,
    nombre: "Redmi Note 13 Pro+ 5G",
    descripcionCorta: "El rey de la gama media con cámara de 200MP.",
    precio: 399,
    categoria: "smartphones",
    imagen: "img/RedmiNote13Pro+5G.webp",
    stock: 25
  },
  {
    id: 6,
    nombre: "Xiaomi Pad 6 Pro",
    descripcionCorta: "Potencia y pantalla espectacular para productividad extrema.",
    precio: 499,
    categoria: "tablets",
    imagen: "img/XiaomiRedmiPad2Pro.webp",
    stock: 8
  },
  {
    id: 7,
    nombre: "Xiaomi Smart Band 8 Pro",
    descripcionCorta: "Seguimiento completo de salud con pantalla AMOLED grande.",
    precio: 79,
    categoria: "wearables",
    imagen: "img/XIAOMISmartbandXiaomiRedmiSmartBandProNegro.webp",
    stock: 30
  },
  {
    id: 8,
    nombre: "Xiaomi 13 Lite",
    descripcionCorta: "Diseño ultraligero con cámaras duales para selfies perfectos.",
    precio: 399,
    categoria: "smartphones",
    imagen: "img/Xiaomi13Lite.webp",
    stock: 18
  },
  {
    id: 9,
    nombre: "iPhone 15 Pro Max",
    descripcionCorta: "El iPhone más avanzado con titanio y chip A17 Pro.",
    precio: 1469,
    categoria: "smartphones",
    imagen: "img/iphone17promax.webp",
    stock: 10
  },
  {
    id: 10,
    nombre: "iPhone 15",
    descripcionCorta: "La experiencia iPhone esencial con Dynamic Island y USB-C.",
    precio: 959,
    categoria: "smartphones",
    imagen: "img/Iphone17.webp",
    stock: 15
  },
  {
    id: 11,
    nombre: "MacBook Air M3",
    descripcionCorta: "Portátil ultraligero con chip M3 y 18 horas de autonomía.",
    precio: 1299,
    categoria: "portatiles",
    imagen: "img/AppleMacbookAir.webp",
    stock: 7
  },
  {
    id: 12,
    nombre: "iPad Air M2 11″",
    descripcionCorta: "Potencia profesional en diseño ultraligero y versátil.",
    precio: 699,
    categoria: "tablets",
    imagen: "img/Ipad-Air-m2-11.webp",
    stock: 12
  },
  {
    id: 13,
    nombre: "Apple Watch Series 9",
    descripcionCorta: "Salud avanzada con chip S9 y gestos Double Tap.",
    precio: 449,
    categoria: "wearables",
    imagen: "img/AppleWatchSeries9.webp",
    stock: 20
  },
  {
    id: 14,
    nombre: "OPPO Find X7 Pro",
    descripcionCorta: "Sistema fotográfico Hasselblad para fotografía profesional móvil.",
    precio: 1199,
    categoria: "smartphones",
    imagen: "img/OppoFindX3pro5g.webp",
    stock: 6
  },
  {
    id: 15,
    nombre: "Oppo Reno 11 Pro 5G",
    descripcionCorta: "Elegancia curva con cámara Sony y carga ultrarrápida.",
    precio: 599,
    categoria: "smartphones",
    imagen: "img/OppoReno6Pro5g.webp",
    stock: 14
  },
  {
    id: 16,
    nombre: "Oppo A79 5G",
    descripcionCorta: "5G accesible con pantalla fluida y batería de larga duración.",
    precio: 249,
    categoria: "smartphones",
    imagen: "img/OppoA79.webp",
    stock: 22
  },
  {
    id: 17,
    nombre: "Oppo Pad 2",
    descripcionCorta: "Tablet premium con pantalla 144Hz y sonido envolvente.",
    precio: 499,
    categoria: "tablets",
    imagen: "img/OppoPad2.webp",
    stock: 9
  },
  {
    id: 18,
    nombre: "Oppo Enco Air 3 Pro",
    descripcionCorta: "Audio inalámbrico Hi-Res con cancelación de ruido inteligente.",
    precio: 89,
    categoria: "auriculares",
    imagen: "img/xiaomi15tpro.jpg",
    stock: 35
  },
];

let carrito = [];
let stockProductos = {};
let favoritos = [];


// ===== SISTEMA DE STOCK =====

function inicializarStock() {
  mi_array.forEach(producto => {
    stockProductos[producto.id] = producto.stock || 10;
  });
}

function obtenerStock(productoId) {
  return stockProductos[productoId] || 0;
}

function reducirStock(productoId, cantidad = 1) {
  if (stockProductos[productoId] >= cantidad) {
    stockProductos[productoId] -= cantidad;
    return true;
  }
  return false;
}

function aumentarStock(productoId, cantidad = 1) {
  stockProductos[productoId] += cantidad;
}


// ===== SISTEMA DE FAVORITOS =====

function esFavorito(productoId) {
  return favoritos.includes(productoId);
}

// event.currentTarget = elemento con el onclick (el botón)
// event.target = elemento que recibió el click (puede ser la imagen dentro)
function toggleFavorito(productoId, event) {
  event.stopPropagation();
  
  const botonFavorito = event.currentTarget;
  const imagenCorazon = botonFavorito.querySelector('.icon-heart');
  
  if (esFavorito(productoId)) {
    // Eliminar de favoritos usando filter (INMUTABLE)
    favoritos = favoritos.filter(id => id !== productoId);
    imagenCorazon.src = 'corazon.svg';
    imagenCorazon.classList.remove('activo');
    mostrarNotificacion('Eliminado de favoritos');
  } else {
    // Agregar a favoritos usando spread (INMUTABLE)
    favoritos = [...favoritos, productoId];
    imagenCorazon.src = 'corazon-rojo.svg';
    imagenCorazon.classList.add('activo');
    mostrarNotificacion('Añadido a favoritos');
  }
}


// ===== RENDERIZADO =====

function crearTarjeta(producto) {
  const stockActual = obtenerStock(producto.id);
  const esProductoFavorito = esFavorito(producto.id);
  
  const corazonSrc = esProductoFavorito ? 'corazon-rojo.svg' : 'corazon.svg';
  const corazonClase = esProductoFavorito ? 'icon-heart activo' : 'icon-heart';
  
  const stockBadge = stockActual > 0 
    ? `<span class="stock-badge">Stock: ${stockActual}</span>`
    : `<span class="stock-badge sin-stock">Sin stock</span>`;
  
  return `
    <article class="tarjeta">
      <div class="tarjeta-imagen">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        ${stockBadge}
        <button class="btn-favorito" onclick="toggleFavorito(${producto.id}, event)">
          <img class="${corazonClase}" src="${corazonSrc}" alt="Favorito">
        </button>
      </div>
      
      <div class="tarjeta-contenido">
        <div class="tarjeta-info">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcionCorta}</p>
        </div>
      </div>
      
      <div class="tarjeta-precio">
        <span class="precio">${producto.precio}€</span>
        <button class="btn-ver-mas" onclick="agregarCarrito(${producto.id}, event)">
            <i class="bi bi-cart-plus"></i> Añadir
        </button>
      </div>
    </article>
  `;
}

function mostrarTarjetas(productos) {
  const contenedor = document.querySelector(".tarjetas");
  contenedor.innerHTML = productos.map(crearTarjeta).join("");
}


// ===== FILTRADO =====

function filtrarProducto(categoria) {
  if (categoria === "todos") {
    return mi_array;
  }
  return mi_array.filter(p => p.categoria === categoria);
}

function configurarFiltros() {
  const input = document.querySelector("#buscar");
  input.addEventListener("input", () => {
    const texto = input.value.toLowerCase();
    const filtrados = mi_array.filter(p => 
      p.nombre.toLowerCase().includes(texto)
    );
    mostrarTarjetas(filtrados);
  });
}

function configurarBotonesCategorias() {
  const botones = document.querySelectorAll("nav button[data-cat]");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      botones.forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");
      const categoria = boton.getAttribute("data-cat");
      const productos = filtrarProducto(categoria);
      mostrarTarjetas(productos);
    });
  });
}


// ===== CARRITO =====

function cargarCarrito() {
  const guardado = localStorage.getItem('carrito');
  if (guardado) {
    carrito = JSON.parse(guardado);
  }
  actualizar();
}

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  calcularTotal(); 
  actualizar();
}

function agregarCarrito(id, event) {
  const producto = mi_array.find(p => p.id === id);
  if (!producto) {
    mostrarNotificacion('Producto no encontrado');
    return;
  }
  
  const stockDisponible = obtenerStock(id);
  if (stockDisponible <= 0) {
    mostrarNotificacion('Producto sin stock', 'error');
    return;
  }
  
  const productoEnCarrito = carrito.find(p => p.id === id);
  
  if (productoEnCarrito) {
    if (stockDisponible <= productoEnCarrito.cantidad) {
      mostrarNotificacion('No hay más stock disponible', 'error');
      return;
    }
    
    // INMUTABLE: map crea un nuevo carrito
    carrito = carrito.map(p => 
      p.id === id 
        ? { ...p, cantidad: p.cantidad + 1 }
        : p
    );
  } else {
    // INMUTABLE: spread crea un nuevo carrito
    carrito = [...carrito, { ...producto, cantidad: 1 }];
  }
  
  reducirStock(id, 1);
  guardarCarrito();
  mostrarNotificacion('Producto añadido');
  
  // Re-renderizar para actualizar stock
  const categoriaActual = document.querySelector('nav button.activo');
  if (categoriaActual) {
    const categoria = categoriaActual.getAttribute('data-cat');
    mostrarTarjetas(filtrarProducto(categoria));
  }
  
  if (event) {
    event.target.classList.add('boton-agregado');
    event.target.textContent = '🛒Añadido';
    setTimeout(() => {
      event.target.classList.remove('boton-agregado');
      event.target.textContent = 'Añadir';
    }, 2000);
  }
}

function eliminarDelCarrito(index) {
  const producto = carrito[index];
  aumentarStock(producto.id, producto.cantidad);
  
  // INMUTABLE: filter crea un nuevo carrito
  carrito = carrito.filter((item, i) => i !== index);
  
  guardarCarrito();
  renderizarCarrito();
  mostrarNotificacion('Producto eliminado', 'error');
  
  const categoriaActual = document.querySelector('nav button.activo');
  if (categoriaActual) {
    const categoria = categoriaActual.getAttribute('data-cat');
    mostrarTarjetas(filtrarProducto(categoria));
  }
}

function vaciarCarrito() {
  if (carrito.length === 0) {
    mostrarNotificacion('El carrito está vacío');
    return;
  }
  
  if (confirm('¿Vaciar el carrito?')) {
    carrito.forEach(producto => {
      aumentarStock(producto.id, producto.cantidad);
    });
    
    carrito = [];
    guardarCarrito();
    renderizarCarrito();
    mostrarNotificacion('Carrito vaciado');
    
    const categoriaActual = document.querySelector('nav button.activo');
    if (categoriaActual) {
      const categoria = categoriaActual.getAttribute('data-cat');
      mostrarTarjetas(filtrarProducto(categoria));
    }
  }
}

function cambiarCantidad(index, cambio) {
  const producto = carrito[index];
  const nuevaCantidad = producto.cantidad + cambio;

  if (nuevaCantidad <= 0) {
    eliminarDelCarrito(index);
    return;
  }
  
  if (cambio > 0) {
    const stockDisponible = obtenerStock(producto.id);
    if (stockDisponible <= 0) {
      mostrarNotificacion('No hay más stock disponible', 'error');
      return;
    }
    reducirStock(producto.id, 1);
  } else {
    aumentarStock(producto.id, 1);
  }
  
  // INMUTABLE: map crea un nuevo carrito
  carrito = carrito.map((p, i) => 
    i === index 
      ? { ...p, cantidad: nuevaCantidad }
      : p
  );
  
  guardarCarrito();
  renderizarCarrito();
  
  const categoriaActual = document.querySelector('nav button.activo');
  if (categoriaActual) {
    const categoria = categoriaActual.getAttribute('data-cat');
    mostrarTarjetas(filtrarProducto(categoria));
  }
}

function calcularTotal() {
  return carrito.reduce((total, p) => total + (p.precio * p.cantidad), 0);
}

function actualizar() {
  const totalArticulos = carrito.reduce((total, p) => total + p.cantidad, 0);
  document.getElementById('badge-carrito').textContent = totalArticulos;
}


// ===== INTERFAZ CARRITO =====

function abrirCarrito() {
  document.getElementById('carrito-modal').classList.add('activo');
  calcularTotal();
  renderizarCarrito();
}

function cerrarCarrito() {
  document.getElementById('carrito-modal').classList.remove('activo');
}

function renderizarCarrito() {
  const contenedor = document.getElementById('carrito-lista');
  const total = document.getElementById('total-precio');
  
  if (carrito.length === 0) {
    contenedor.innerHTML = `
      <div class="carrito-vacio">
        <h3>🛒</h3>
        <p>Tu carrito está vacío</p>
      </div>
    `;
    total.textContent = '0€';
    return;
  }
  
  contenedor.innerHTML = carrito.map((p, i) => `
    <div class="carrito-item">
      <img src="${p.imagen}" alt="${p.nombre}">
      <div class="carrito-item-info">
        <h4>
          ${p.nombre}
          <span class="cantidad-carrito">x${p.cantidad}</span>
        </h4>
        <p class="precio-item">
          ${p.precio * p.cantidad}€
          <span class="precio-item">(${p.precio}€ x${p.cantidad})</span>
        </p>
        <div class="controles-cantidad">
          <button class="btn-cantidad" onclick="cambiarCantidad(${i}, -1)">-</button>
          <span class="cantidad-actual">${p.cantidad}</span>
          <button class="btn-cantidad" onclick="cambiarCantidad(${i}, 1)">+</button>
        </div>
      </div>
      <button class="btn-eliminar" onclick="eliminarDelCarrito(${i})"></button>
    </div>
  `).join('');
  
  total.textContent = calcularTotal() + '€';
}


// ===== FAQ =====

function manejarPreguntaFrecuentes(numero) {
  const pregunta = document.getElementById(`faq-item-${numero}`);
  const icono = document.getElementById(`icono-${numero}`);
  
  if (!pregunta || !icono) {
    console.error(`Elementos FAQ-${numero} no encontrados`);
    return;
  }
  
  const estaAbierta = pregunta.classList.contains('activo');
  
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('activo');
    const icono = i.querySelector('.faq-icono');
    if (icono) {
      icono.textContent = "+";
    }
  });
  
  if (!estaAbierta) {
    pregunta.classList.add('activo');
    icono.textContent = '-';
  }
}


// ===== NOTIFICACIONES =====

function mostrarNotificacion(mensaje, tipo = "exito") {
  const notif = document.createElement("div");
  notif.className = `notificacion ${tipo}`;
  notif.textContent = mensaje;
  document.body.appendChild(notif);
  
  setTimeout(() => notif.classList.add("mostrar"), 10);
  setTimeout(() => {
    notif.classList.remove("mostrar");
    setTimeout(() => notif.remove(), 300);
  }, 2500);
}


// ===== INICIALIZACIÓN =====

document.addEventListener("DOMContentLoaded", () => {
  inicializarStock();
  cargarCarrito();
  mostrarTarjetas(mi_array);
  configurarFiltros();
  configurarBotonesCategorias();
});