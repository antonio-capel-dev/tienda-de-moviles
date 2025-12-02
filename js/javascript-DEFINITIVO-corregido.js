// ================================================
// TELEFONÍA CAPEL - E-COMMERCE DE MÓVILES
// Sistema con Stock Counter y Favoritos
// Código 100% Inmutable - Apuntes de Santiago
// ================================================

// ============================================
// DATOS - Array de productos con stock
// ============================================
const mi_array = [
  {
    id: 1,
    nombre: "Samsung Galaxy S24 Ultra",
    descripcionCorta: "El buque insignia definitivo con cámara de 200MP y diseño en titanio.",
    precio: 1399,
    categoria: "smartphones",
    imagen: "img/Samsungs24ultra.webp",
    stock: 15  // Stock inicial
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

// ============================================
// VARIABLES GLOBALES
// ============================================
let carrito = [];          // Array de productos en el carrito
let stockProductos = {};   // Objeto que gestiona el stock por ID de producto  
let favoritos = [];        // Array de IDs de productos marcados como favoritos


// ============================================
// SISTEMA DE STOCK - Gestión Inmutable
// ============================================

/**
 * Inicializa el stock desde el array de productos
 * Se ejecuta al cargar la página
 * NOTA: El stock se resetea cada vez que refrescas (no se guarda)
 */
function inicializarStock() {
  // Inicializamos el stock con los valores originales del array
  // Usamos forEach para recorrer cada producto
  mi_array.forEach(producto => {
    // Guardamos el stock de cada producto usando su ID como clave
    stockProductos[producto.id] = producto.stock || 10; // Default 10 si no tiene
  });
}

/**
 * Obtiene el stock disponible de un producto por su ID
 * @param {number} productoId - ID del producto
 * @returns {number} - Cantidad de stock disponible (0 si no existe)
 */
function obtenerStock(productoId) {
  return stockProductos[productoId] ||0;
}

/**
 * Reduce el stock de un producto (al agregar al carrito)
 * @param {number} productoId - ID del producto
 * @param {number} cantidad - Cantidad a reducir (default 1)
 * @returns {boolean} - true si se pudo reducir, false si no hay stock
 */
function reducirStock(productoId, cantidad = 1) {
  // Verificamos que haya stock suficiente antes de reducir
  if (stockProductos[productoId] >= cantidad) {
    // Reducimos el stock
    stockProductos[productoId] -= cantidad;
    return true;
  }
  return false;
}

/**
 * Aumenta el stock de un producto (al eliminar del carrito)
 * @param {number} productoId - ID del producto Product
 * @param {number} cantidad - Cantidad a aumentar (default 1)
 */
function aumentarStock(productoId, cantidad = 1) {
  // Aumentamos el stock
  stockProductos[productoId] += cantidad;
}


// ============================================
// SISTEMA DE FAVORITOS - Gestión Inmutable
// ============================================

/**
 * Verifica si un producto está marcado como favorito
 * @param {number} productoId - ID del producto a verificar
 * @returns {boolean} - true si es favorito, false si no
 */
function esFavorito(productoId) {
  // includes() verifica si el ID está en el array de favoritos
  return favoritos.includes(productoId);
}

/**
 * Toggle favorito - Agrega o elimina un producto de favoritos
 * IMPORTANTE: Usa event.target y event.currentTarget correctamente
 * 
 * @param {number} productoId - ID del producto
 * @param {Event} event - Evento del click
 * 
 * EXPLICACIÓN event.target vs event.currentTarget:
 * - event.currentTarget = El elemento que TIENE el evento onclick (el botón)
 * - event.target = El elemento que REALMENTE recibió el click (puede ser el img dentro del botón)
 */
function toggleFavorito(productoId, event) {
  // Evitar que el click se propague a elementos padres
  event.stopPropagation();
  
  // event.currentTarget siempre será el botón (tiene el onclick)
const botonFavorito = event.currentTarget;
  
  // Buscamos la imagen del corazón dentro del botón
  // querySelector busca DENTRO del botón
  const imagenCorazon = botonFavorito.querySelector('.icon-heart');
  
  // Verificamos si el producto YA es favorito
  if (esFavorito(productoId)) {
    // ========== ELIMINAR DE FAVORITOS ==========
    // ✅ INMUTABLE: Usamos filter() que crea un NUEVO array
    // filter() devuelve solo los IDs que NO son el productoId
    favoritos = favoritos.filter(id => id !== productoId);
    
    // Actualizar la imagen a corazón vacío (gris)
    imagenCorazon.src = 'corazon.svg';
    imagenCorazon.classList.remove('activo');
    
    mostrarNotificacion('Eliminado de favoritos');
    
  } else {
    // ========== AGREGAR A FAVORITOS ==========
    // ✅ INMUTABLE: Usamos spread operator [...] para crear NUEVO array
    // El nuevo array contiene todos los favoritos anteriores + el nuevo ID
    favoritos = [...favoritos, productoId];
    
    // Actualizar la imagen a corazón rojo
    imagenCorazon.src = 'corazon-rojo.svg';
    imagenCorazon.classList.add('activo');
    
    mostrarNotificacion('Añadido a favoritos');
  }
  
  // NOTA: Los favoritos NO se guardan, se pierden al refrescar
}


// ============================================
// RENDERIZADO - Creación dinámica de tarjetas
// ============================================

/**
 * Crea el HTML de una tarjeta de producto
 * Incluye: imagen, nombre, descripción, precio, stock badge, botón favorito, botón añadir
 * @param {Object} producto - Objeto con datos del producto
 * @returns {string} - HTML de la tarjeta
 */
function crearTarjeta(producto) {
  // Obtener el stock actual del producto
  const stockActual = obtenerStock(producto.id);
  
  // Verificar si el producto es favorito
  const esProductoFavorito = esFavorito(producto.id);
  
  // Determinar qué imagen de corazón mostrar (rojo si es favorito, gris si no)
  const corazonSrc = esProductoFavorito ? 'corazon-rojo.svg' : 'corazon.svg';
  const corazonClase = esProductoFavorito ? 'icon-heart activo' : 'icon-heart';
  
  // Crear badge de stock (verde si hay, rojo si no hay)
  const stockBadge = stockActual > 0 
    ? `<span class="stock-badge">Stock: ${stockActual}</span>`
    : `<span class="stock-badge sin-stock">Sin stock</span>`;
  
  // Template string con el HTML completo de la tarjeta
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

/**
 * Muestra todas las tarjetas de productos en el contenedor
 * ✅ INMUTABLE: Usa map() que NO modifica el array original
 * @param {Array} productos - Array de productos a mostrar
 */
function mostrarTarjetas(productos) {
  const contenedor = document.querySelector(".tarjetas");
  // map() transforma cada producto a HTML
  // join("") une todos los strings HTML en uno solo
  contenedor.innerHTML = productos.map(crearTarjeta).join("");
}


// ============================================
// FILTR ADO DE PRODUCTOS
// ============================================

/**
 * Filtra productos por categoría
 * ✅ INMUTABLE: Usa filter() que crea un NUEVO array
 * @param {string} categoria - Categoría a filtrar ("todos", "smartphones", etc.)
 * @returns {Array} - Array filtrado de productos
 */
function filtrarProducto(categoria) {
  // Si la categoría es "todos", devolver el array completo
  if (categoria === "todos") {
    return mi_array;
  }
  // filter() devuelve NUEVO array con productos que coincidan
  return mi_array.filter(p => p.categoria === categoria);
}

/**
 * Configura el filtro de búsqueda por texto
 * Busca en tiempo real mientras el usuario escribe
 */
function configurarFiltros() {
  const input = document.querySelector("#buscar");
  // El evento "input" se dispara cada vez que cambia el texto
  input.addEventListener("input", () => {
    const texto = input.value.toLowerCase();
    // ✅ INMUTABLE: filter() crea NUEVO array
    // includes() verifica si el texto está en el nombre
    const filtrados = mi_array.filter(p => 
      p.nombre.toLowerCase().includes(texto)
    );
    mostrarTarjetas(filtrados);
  });
}

/**
 * Configura los botones de categorías (Todos, Smartphones, etc.)
 * Agrega evento click a cada botón de categoría
 */
function configurarBotonesCategorias() {
  const botones = document.querySelectorAll("nav button[data-cat]");
  // forEach recorre cada botón
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      // Quitar clase "activo" de todos los botones
      botones.forEach(b => b.classList.remove("activo"));
      // Agregar clase "activo" al botón clickeado
      boton.classList.add("activo");
      // Obtener la categoría del atributo data-cat
      const categoria = boton.getAttribute("data-cat");
      // Filtrar y mostrar productos de esa categoría
      const productos = filtrarProducto(categoria);
      mostrarTarjetas(productos);
    });
  });
}


// ============================================
// CARRITO DE COMPRAS - Sistema Inmutable
// ============================================

/**
 * Carga el carrito desde localStorage al iniciar
 * NOTA: El carrito SÍ se guarda (ya lo tenías así)
 */
function cargarCarrito() {
  const guardado = localStorage.getItem('carrito');
  if (guardado) {
    carrito = JSON.parse(guardado);
  }
  actualizar();
}

/**
 * Guarda el carrito en localStorage
 * También recalcula el total y actualiza el badge
 */
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  calcularTotal(); 
  actualizar();
}

/**
 * Agrega un producto al carrito CON VALIDACIÓN DE STOCK
 * ✅ VERSIÓN 100% INMUTABLE - Crea nuevos arrays en lugar de mutar
 * @param {number} id - ID del producto a agregar
 * @param {Event} event - Evento del botón (para animación)
 */
function agregarCarrito(id, event) {
  // 1. Buscar el producto en el catálogo
  // ✅ INMUTABLE: find() NO modifica el array, solo busca
  const producto = mi_array.find(p => p.id === id);
  if (!producto) {
    mostrarNotificacion('Producto no encontrado');
    return;
  }
  
  // 2. VALIDAR STOCK DISPONIBLE
  const stockDisponible = obtenerStock(id);
  if (stockDisponible <= 0) {
    mostrarNotificacion('Producto sin stock', 'error');
    return;
  }
  
  // 3. Verificar si el producto YA está en el carrito
  const productoEnCarrito = carrito.find(p => p.id === id);
  
  if (productoEnCarrito) {
    // ========== PRODUCTO YA EXISTE EN CARRITO ==========
    
    // Verificar si hay stock para agregar uno más
    if (stockDisponible <= productoEnCarrito.cantidad) {
      mostrarNotificacion('No hay más stock disponible', 'error');
      return;
    }
    
    // ✅ INMUTABLE: Usar map() para crear NUEVO carrito
    // map() recorre el carrito y crea un NUEVO array
    carrito = carrito.map(p => 
      p.id === id 
        ? { ...p, cantidad: p.cantidad + 1 }  // Si es el producto, crear NUEVO objeto con cantidad +1
        : p  // Si no es el producto, mantenerlo igual
    );
    
  } else {
    // ========== PRODUCTO NUEVO EN CARRITO ==========
    
    // ✅ INMUTABLE: Usar spread operator para crear NUEVO carrito
    // [...carrito] copia todos los productos existentes
    // {...producto, cantidad: 1} crea un NUEVO objeto con cantidad inicial 1
    carrito = [...carrito, { ...producto, cantidad: 1 }];
  }
  
  // 4. Reducir el stock del producto
  reducirStock(id, 1);
  
  // 5. Guardar carrito en localStorage
  guardarCarrito();
  
  // 6. Mostrar notificación de éxito
  mostrarNotificacion('Producto añadido');
  
  // 7. Re-renderizar productos para actualizar badge de stock
  const categoriaActual = document.querySelector('nav button.activo');
  if (categoriaActual) {
    const categoria = categoriaActual.getAttribute('data-cat');
    const productos = filtrarProducto(categoria);
    mostrarTarjetas(productos);
  }
  
  // 8. Animación del botón (feedback visual)
  if (event) {
    event.target.classList.add('boton-agregado');
    event.target.textContent = '🛒Añadido';
    setTimeout(() => {
      event.target.classList.remove('boton-agregado');
      event.target.textContent = 'Añadir';
    }, 2000);
  }
}

/**
 * Elimina un producto del carrito Y DEVUELVE EL STOCK
 * ✅ INMUTABLE: Usa filter() que crea un NUEVO array
 * @param {number} index - Índice del producto en el carrito
 */
function eliminarDelCarrito(index) {
  const producto = carrito[index];
  
  // 1. Devolver el stock al inventario
  aumentarStock(producto.id, producto.cantidad);
  
  // 2. ✅ INMUTABLE: Crear NUEVO carrito sin ese elemento
  // filter() crea un array con todos los elementos EXCEPTO el del índice
  carrito = carrito.filter((item, i) => i !== index);
  
  // 3. Guardar y actualizar
  guardarCarrito();
  renderizarCarrito();
  mostrarNotificacion('Producto eliminado', 'error');
  
  // 4. Re-renderizar productos para actualizar stock
  const categoriaActual = document.querySelector('nav button.activo');
  if (categoriaActual) {
    const categoria = categoriaActual.getAttribute('data-cat');
    const productos = filtrarProducto(categoria);
    mostrarTarjetas(productos);
  }
}

/**
 * Vacía completamente del carrito Y DEVUELVE TODO EL STOCK
 */
function vaciarCarrito() {
  if (carrito.length === 0) {
    mostrarNotificacion('El carrito está vacío');
    return;
  }
  
  if (confirm('¿Vaciar el carrito?')) {
    // 1. Devolver el stock de TODOS los productos del carrito
    // forEach() recorre cada producto y devuelve su stock
    carrito.forEach(producto => {
      aumentarStock(producto.id, producto.cantidad);
    });
    
    // 2. Vaciar el carrito (crear nuevo array vacío)
    carrito = [];
    
    // 3. Guardar y actualizar
    guardarCarrito();
    renderizarCarrito();
    mostrarNotificacion('Carrito vaciado');
    
    // 4. Re-renderizar productos
    const categoriaActual = document.querySelector('nav button.activo');
    if (categoriaActual) {
      const categoria = categoriaActual.getAttribute('data-cat');
      const productos = filtrarProducto(categoria);
      mostrarTarjetas(productos);
    }
  }
}

/**
 * Cambia la cantidad de un producto en el carrito CON VALIDACIÓN DE STOCK
 * ✅ INMUTABLE: Usa map() para crear NUEVO carrito
 * @param {number} index - Índice del producto en el carrito
 * @param {number} cambio - Cantidad a sumar/restar (+1 o -1)
 */
function cambiarCantidad(index, cambio) {
  const producto = carrito[index];
  const nuevaCantidad = producto.cantidad + cambio;

  // Si la nueva cantidad es 0 o menos, eliminar del carrito
  if (nuevaCantidad <= 0) {
    eliminarDelCarrito(index);
    return;
  }
  
  // Si aumenta cantidad (+1), verificar stock
  if (cambio > 0) {
    const stockDisponible = obtenerStock(producto.id);
    if (stockDisponible <= 0) {
      mostrarNotificacion('No hay más stock disponible', 'error');
      return;
    }
    // Reducir stock al aumentar cantidad
    reducirStock(producto.id, 1);
  } else {
    // Si disminuye cantidad (-1), devolver stock
    aumentarStock(producto.id, 1);
  }
  
  // ✅ INMUTABLE: Crear NUEVO carrito con cantidad actualizada
  carrito = carrito.map((p, i) => 
    i === index 
      ? { ...p, cantidad: nuevaCantidad }  // Crear NUEVO objeto con nueva cantidad
      : p  // Mantener los demás productos igual
  );
  
  guardarCarrito();
  renderizarCarrito();
  
  // Re-renderizar productos para actualizar stock
  const categoriaActual = document.querySelector('nav button.activo');
  if (categoriaActual) {
    const categoria = categoriaActual.getAttribute('data-cat');
    const productos = filtrarProducto(categoria);
    mostrarTarjetas(productos);
  }
}

/**
 * Calcula el precio total del carrito
 * ✅ INMUTABLE: Usa reduce() que NO modifica el array
 * @returns {number} - Precio total
 */
function calcularTotal() {
  // reduce() suma todos los precios*cantidad
  // Empieza en 0 y va sumando cada producto
  return carrito.reduce((total, p) => total + (p.precio * p.cantidad), 0);
}

/**
 * Actualiza el badge del carrito con la cantidad total de artículos
 */
function actualizar() {
  // reduce() suma todas las cantidades de productos
  const totalArticulos = carrito.reduce((total, p) => total + p.cantidad, 0);
  document.getElementById('badge-carrito').textContent = totalArticulos;
}


// ============================================
// INTERFAZ DEL CARRITO LATERAL
// ============================================

/**
 * Abre el modal del carrito lateral
 */
function abrirCarrito() {
  document.getElementById('carrito-modal').classList.add('activo');
  calcularTotal();
  renderizarCarrito();
}

/**
 * Cierra el modal del carrito lateral
 */
function cerrarCarrito() {
  document.getElementById('carrito-modal').classList.remove('activo');
}

/**
 * Renderiza el contenido del carrito lateral
 * Muestra la lista de productos o mensaje de carrito vacío
 */
function renderizarCarrito() {
  const contenedor = document.getElementById('carrito-lista');
  const total = document.getElementById('total-precio');
  
  // Si el carrito está vacío, mostrar mensaje
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
  
  // ✅ INMUTABLE: map() crea un NUEVO array con el HTML de cada producto
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
  
  // Mostrar el total calculado
  total.textContent = calcularTotal() + '€';
}


// ============================================
// PREGUNTAS FRECUENTES (FAQ)
// ============================================

/**
 * Maneja la apertura/cierre de preguntas frecuentes (Accordion)
 * @param {number} numero - Número de la pregunta (1, 2, 3)
 */
function manejarPreguntaFrecuentes(numero) {
  const pregunta = document.getElementById(`faq-item-${numero}`);
  const icono = document.getElementById(`icono-${numero}`);
  
  if(!pregunta || !icono) {
    console.error(`Elementos FAQ-${numero} no encontrados`);
    return;
  }
  
  const estaAbierta = pregunta.classList.contains('activo');
  
  // Cerrar todas las preguntas
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('activo');
    const icono = i.querySelector('.faq-icono');
    if(icono) {
      icono.textContent = "+";
    }
  });
  
  // Si no estaba abierta, abrirla
  if(!estaAbierta) {
    pregunta.classList.add('activo');
    icono.textContent = '-';
  }
}


// ============================================
// NOTIFICACIONES
// ============================================

/**
 * Muestra una notificación temporal en la esquina superior derecha
 * @param {string} mensaje - Texto a mostrar
 * @param {string} tipo - Tipo de notificación ("exito" o "error")
 */
function mostrarNotificacion(mensaje, tipo = "exito") {
  // Crear elemento de notificación
  const notif = document.createElement("div");
  notif.className = `notificacion ${tipo}`;
  notif.textContent = mensaje;
  document.body.appendChild(notif);
  
  // Animación de entrada
  setTimeout(() => notif.classList.add("mostrar"), 10);
  
  // Animación de salida y eliminación
  setTimeout(() => {
    notif.classList.remove("mostrar");
    setTimeout(() => notif.remove(), 300);
  }, 2500);
}


// ============================================
// INICIALIZACIÓN - Se ejecuta al cargar la página
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicializar sistema de stock
  inicializarStock();
  
  // 2. Cargar carrito guardado (SÍ usa localStorage)
  cargarCarrito();
  
  // 3. Mostrar todos los productos
  mostrarTarjetas(mi_array);
  
  // 4. Configurar filtros de búsqueda
  configurarFiltros();
  
  // 5. Configurar botones de categorías
  configurarBotonesCategorias();
});