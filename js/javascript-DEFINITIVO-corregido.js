
const mi_array = [
  {
    nombre: "Samsung Galaxy S24 Ultra",
    descripcionCorta: "El buque insignia definitivo con cámara de 200MP y diseño en titanio.",
    precio: 1399,
    categoria: "smartphones",
    imagen: "img/Samsungs24ultra.webp"
  },
  {
    nombre: "Samsung Galaxy S24 Plus",
    descripcionCorta: "El equilibrio perfecto entre potencia premium y tamaño manejable.",
    precio: 1099,
    categoria: "smartphones",
    imagen: "img/Samsungs24plus.webp"
  },
  {
    nombre: "Samsung Galaxy Tab S9 FE",
    descripcionCorta: "Tablet versátil con S Pen incluido para crear y producir.",
    precio: 549,
    categoria: "tablets",
    imagen: "img/Samsungs24plus.webp"
  },
  {
    nombre: "Xiaomi 14T Pro",
    descripcionCorta: "Fotografía profesional Leica y procesamiento de élite.",
    precio: 799,
    categoria: "smartphones",
    imagen: "img/Xiaomi13Lite.webp"
  },
  {
    nombre: "Redmi Note 13 Pro+ 5G",
    descripcionCorta: "El rey de la gama media con cámara de 200MP.",
    precio: 399,
    categoria: "smartphones",
    imagen: "img/RedmiNote13Pro+5G.webp"
  },
  {
    nombre: "Xiaomi Pad 6 Pro",
    descripcionCorta: "Potencia y pantalla espectacular para productividad extrema.",
    precio: 499,
    categoria: "tablets",
    imagen: "img/XiaomiRedmiPad2Pro.webp"
  },
  {
    nombre: "Xiaomi Smart Band 8 Pro",
    descripcionCorta: "Seguimiento completo de salud con pantalla AMOLED grande.",
    precio: 79,
    categoria: "wearables",
    imagen: "img/XIAOMISmartbandXiaomiRedmiSmartBandProNegro.webp"
  },
  {
    nombre: "Xiaomi 13 Lite",
    descripcionCorta: "Diseño ultraligero con cámaras duales para selfies perfectos.",
    precio: 399,
    categoria: "smartphones",
    imagen: "img/Xiaomi13Lite.webp"
  },
  {
    nombre: "iPhone 15 Pro Max",
    descripcionCorta: "El iPhone más avanzado con titanio y chip A17 Pro.",
    precio: 1469,
    categoria: "smartphones",
    imagen: "img/iphone17promax.webp"
  },
  {
    nombre: "iPhone 15",
    descripcionCorta: "La experiencia iPhone esencial con Dynamic Island y USB-C.",
    precio: 959,
    categoria: "smartphones",
    imagen: "img/Iphone17.webp"
  },
  {
    nombre: "MacBook Air M3",
    descripcionCorta: "Portátil ultraligero con chip M3 y 18 horas de autonomía.",
    precio: 1299,
    categoria: "portatiles",
    imagen: "img/AppleMacbookAir.webp"
  },
  {
    nombre: "iPad Air M2 11″",
    descripcionCorta: "Potencia profesional en diseño ultraligero y versátil.",
    precio: 699,
    categoria: "tablets",
    imagen: "img/Ipad-Air-m2-11.webp"
  },
  {
    nombre: "Apple Watch Series 9",
    descripcionCorta: "Salud avanzada con chip S9 y gestos Double Tap.",
    precio: 449,
    categoria: "wearables",
    imagen: "img/AppleWatchSeries9.webp"
  },
  {
    nombre: "OPPO Find X7 Pro",
    descripcionCorta: "Sistema fotográfico Hasselblad para fotografía profesional móvil.",
    precio: 1199,
    categoria: "smartphones",
    imagen: "img/OppoFindX3pro5g.webp"
  },
  {
    nombre: "Oppo Reno 11 Pro 5G",
    descripcionCorta: "Elegancia curva con cámara Sony y carga ultrarrápida.",
    precio: 599,
    categoria: "smartphones",
    imagen: "img/OppoReno6Pro5g.webp"
  },
  {
    nombre: "Oppo A79 5G",
    descripcionCorta: "5G accesible con pantalla fluida y batería de larga duración.",
    precio: 249,
    categoria: "smartphones",
    imagen: "img/OppoA79.webp"
  },
  {
    nombre: "Oppo Pad 2",
    descripcionCorta: "Tablet premium con pantalla 144Hz y sonido envolvente.",
    precio: 499,
    categoria: "tablets",
    imagen: "img/OppoPad2.webp"
  },
  {
    nombre: "Oppo Enco Air 3 Pro",
    descripcionCorta: "Audio inalámbrico Hi-Res con cancelación de ruido inteligente.",
    precio: 89,
    categoria: "auriculares",
    imagen: "img/xiaomi15tpro.jpg"
  }
];


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
        <button class="btn-ver-mas" data-nombre="${producto.nombre}">
          <span class="icono-carrito">🛒</span>
          Añadir
        </button>
      </div>
    </article>
  `;
}

function filtrarProducto(categoria) {
  if (!categoria || categoria === 'todos') return mi_array;
  return mi_array.filter(pepe => pepe.categoria === categoria);
}

function mostrarTarjetas(productos) {
  const contenedor = document.querySelector('.tarjetas');
  contenedor.innerHTML = productos.map(crearTarjeta).join('');
  console.log('Pintadas ' + productos.length + ' tarjetas');
}
  
function configurarFiltros() {
  const input = document.querySelector('#buscar');
  input.addEventListener('input', () => {
   const texto = input.value.trim().toLowerCase();
    if (texto === '') {
      mostrarTarjetas(mi_array);
    } else {
      const filtrados = mi_array.filter(pepe => pepe.nombre.toLowerCase().includes(texto));
      mostrarTarjetas(filtrados);
    }
  });
}
  
  
  

    
  
  

  

//  INICIALIZAR LA PÁGINA
  document.addEventListener('DOMContentLoaded', function() {
  console.log('Iniciando tienda...');
  mostrarTarjetas(mi_array);
  configurarFiltros();

  
});