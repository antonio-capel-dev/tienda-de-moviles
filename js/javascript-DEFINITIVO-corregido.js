const mi_array = [
  {
    id: 1,
    nombre: "Samsung Galaxy S24 Ultra",
    descripcionCorta: "El buque insignia definitivo con cámara de 200MP y diseño en titanio.",
    precio: 1399,
    categoria: "smartphones",
    imagen: "img/Samsungs24ultra.webp",
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S24 Plus",
    descripcionCorta: "El equilibrio perfecto entre potencia premium y tamaño manejable.",
    precio: 1099,
    categoria: "smartphones",
    imagen: "img/Samsungs24plus.webp",
  },
  {
    id: 3,
    nombre: "Samsung Galaxy Tab S9 FE",
    descripcionCorta: "Tablet versátil con S Pen incluido para crear y producir.",
    precio: 549,
    categoria: "tablets",
    imagen: "img/Samsungs24plus.webp",
  },
  {
    id: 4,
    nombre: "Xiaomi 14T Pro",
    descripcionCorta: "Fotografía profesional Leica y procesamiento de élite.",
    precio: 799,
    categoria: "smartphones",
    imagen: "img/Xiaomi13Lite.webp",
  },
  {
    id: 5,
    nombre: "Redmi Note 13 Pro+ 5G",
    descripcionCorta: "El rey de la gama media con cámara de 200MP.",
    precio: 399,
    categoria: "smartphones",
    imagen: "img/RedmiNote13Pro+5G.webp",
  },
  {
    id: 6,
    nombre: "Xiaomi Pad 6 Pro",
    descripcionCorta: "Potencia y pantalla espectacular para productividad extrema.",
    precio: 499,
    categoria: "tablets",
    imagen: "img/XiaomiRedmiPad2Pro.webp",
  },
  {
    id: 7,
    nombre: "Xiaomi Smart Band 8 Pro",
    descripcionCorta: "Seguimiento completo de salud con pantalla AMOLED grande.",
    precio: 79,
    categoria: "wearables",
    imagen: "img/XIAOMISmartbandXiaomiRedmiSmartBandProNegro.webp",
  },
  {
    id: 8,
    nombre: "Xiaomi 13 Lite",
    descripcionCorta: "Diseño ultraligero con cámaras duales para selfies perfectos.",
    precio: 399,
    categoria: "smartphones",
    imagen: "img/Xiaomi13Lite.webp",
  },
  {
    id: 9,
    nombre: "iPhone 15 Pro Max",
    descripcionCorta: "El iPhone más avanzado con titanio y chip A17 Pro.",
    precio: 1469,
    categoria: "smartphones",
    imagen: "img/iphone17promax.webp",
  },
  {
    id: 10,
    nombre: "iPhone 15",
    descripcionCorta: "La experiencia iPhone esencial con Dynamic Island y USB-C.",
    precio: 959,
    categoria: "smartphones",
    imagen: "img/Iphone17.webp",
  },
  {
    id: 11,
    nombre: "MacBook Air M3",
    descripcionCorta: "Portátil ultraligero con chip M3 y 18 horas de autonomía.",
    precio: 1299,
    categoria: "portatiles",
    imagen: "img/AppleMacbookAir.webp",
  },
  {
    id: 12,
    nombre: "iPad Air M2 11″",
    descripcionCorta: "Potencia profesional en diseño ultraligero y versátil.",
    precio: 699,
    categoria: "tablets",
    imagen: "img/Ipad-Air-m2-11.webp",
  },
  {
    id: 13,
    nombre: "Apple Watch Series 9",
    descripcionCorta: "Salud avanzada con chip S9 y gestos Double Tap.",
    precio: 449,
    categoria: "wearables",
    imagen: "img/AppleWatchSeries9.webp",
  },
  {
    id: 14,
    nombre: "OPPO Find X7 Pro",
    descripcionCorta: "Sistema fotográfico Hasselblad para fotografía profesional móvil.",
    precio: 1199,
    categoria: "smartphones",
    imagen: "img/OppoFindX3pro5g.webp",
  },
  {
    id: 15,
    nombre: "Oppo Reno 11 Pro 5G",
    descripcionCorta: "Elegancia curva con cámara Sony y carga ultrarrápida.",
    precio: 599,
    categoria: "smartphones",
    imagen: "img/OppoReno6Pro5g.webp",
  },
  {
    id: 16,
    nombre: "Oppo A79 5G",
    descripcionCorta: "5G accesible con pantalla fluida y batería de larga duración.",
    precio: 249,
    categoria: "smartphones",
    imagen: "img/OppoA79.webp",
  },
  {
    id: 17,
    nombre: "Oppo Pad 2",
    descripcionCorta: "Tablet premium con pantalla 144Hz y sonido envolvente.",
    precio: 499,
    categoria: "tablets",
    imagen: "img/OppoPad2.webp",
  },
  {
    id: 18,
    nombre: "Oppo Enco Air 3 Pro",
    descripcionCorta: "Audio inalámbrico Hi-Res con cancelación de ruido inteligente.",
    precio: 89,
    categoria: "auriculares",
    imagen: "img/xiaomi15tpro.jpg",
  },
];

let carrito = [];

// ==================== RENDERIZADO ====================
function crearTarjeta(producto) {
  return `
    <article class="tarjeta">
      <div class="tarjeta-imagen">
        <img src="${producto.imagen}" alt="${producto.nombre}">
      </div>
      
      <div class="tarjeta-contenido">
        <div class="tarjeta-info">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcionCorta}</p>
        </div>
      </div>
      
      <div class="tarjeta-precio">
        <span class="precio">${producto.precio}€</span>
        <button class="btn-ver-mas" onclick="agregarCarrito(${producto.id})">
          🛒 Añadir
        </button>
      </div>
    </article>
  `;
}

function mostrarTarjetas(productos) {
  const contenedor = document.querySelector(".tarjetas");
  contenedor.innerHTML = productos.map(crearTarjeta).join("");
}

// ==================== FILTRADO ====================
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

// ==================== CARRITO ====================
function cargarCarrito() {
  const guardado = localStorage.getItem('carrito');
  if (guardado) {
    carrito = JSON.parse(guardado);
  }
  actualizarBadge();
}

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarBadge();
}

function agregarCarrito(id) {
  const producto = mi_array.find(p => p.id === id);
  if (producto) {
    carrito.push(producto);
    guardarCarrito();
    mostrarNotificacion('✅ Producto añadido');
  }
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  renderizarCarrito();
  mostrarNotificacion('🗑️ Producto eliminado', 'error');
}

function vaciarCarrito() {
  if (carrito.length === 0) {
    mostrarNotificacion('ℹ️ El carrito está vacío', 'error');
    return;
  }
  if (confirm('¿Vaciar el carrito?')) {
    carrito = [];
    guardarCarrito();
    renderizarCarrito();
    mostrarNotificacion('🗑️ Carrito vaciado');
  }
}

function calcularTotal() {
  return carrito.reduce((total, p) => total + p.precio, 0);
}

function actualizarBadge() {
  document.getElementById('badge-carrito').textContent = carrito.length;
}

// ==================== INTERFAZ CARRITO ====================
function abrirCarrito() {
  document.getElementById('carrito-modal').classList.add('activo');
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
        <h4>${p.nombre}</h4>
        <span class="precio-item">${p.precio}€</span>
      </div>
      <button class="btn-eliminar" onclick="eliminarDelCarrito(${i})">🗑️</button>
    </div>
  `).join('');
  
  total.textContent = calcularTotal() + '€';
}

// ==================== NOTIFICACIONES ====================
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

// ==================== INICIO ====================
document.addEventListener("DOMContentLoaded", () => {
  cargarCarrito();
  mostrarTarjetas(mi_array);
  configurarFiltros();
  configurarBotonesCategorias();
})