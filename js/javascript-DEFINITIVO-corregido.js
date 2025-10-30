// ===== 1) Tus datos tal cual =====
const mi_array = [
  {
    nombre: "Samsung Galaxy S24 Ultra",
    descripcionCorta: "El buque insignia definitivo con cámara de 200MP y diseño en titanio.",
    descripcionLarga: "El Samsung Galaxy S24 Ultra redefine la excelencia móvil con su procesador Snapdragon 8 Gen 3, pantalla Dynamic AMOLED 2X de 6.8″ con brillo de 2600 nits, y sistema de cámara profesional encabezado por un sensor de 200MP. Su construcción en titanio grado aeroespacial combina resistencia extrema con diseño premium, mientras que la integración del S Pen lo convierte en la herramienta definitiva para productividad y creatividad.",
    precio: 1399,
    categoria: "smartphones",
    imagen: "img/Samsungs24ultra.webp"
  },
  {
    nombre: "Samsung Galaxy S24 Plus",
    descripcionCorta: "El equilibrio perfecto entre potencia premium y tamaño manejable.",
    descripcionLarga: "El Galaxy S24 Plus ofrece casi todas las prestaciones del Ultra en un formato más compacto. Su pantalla Dynamic AMOLED 2X de 6.7″ a 120Hz garantiza una experiencia visual fluida, mientras que su batería de 4900mAh asegura autonomía para todo el día. Con cámara principal de 50MP y zoom óptico 3x, es ideal para quienes buscan flagship sin comprometer la portabilidad.",
    precio: 1099,
    categoria: "smartphones",
    imagen: "img/Samsungs24plus.webp"
  },
  {
    nombre: "Samsung Galaxy Z Flip 6",
    descripcionCorta: "Estilo plegable compacto que cabe en tu bolsillo.",
    descripcionLarga: "El Galaxy Z Flip 6 revoluciona el diseño con su pantalla exterior Super AMOLED de 3.4″ totalmente funcional y sistema de bisagra Flex mejorado. Cuando se despliega revela una pantalla principal FHD+ de 6.7″ a 120Hz. Perfecto para selfies con FlexCam y grabación hands-free, combina innovación tecnológica con un factor de forma único que redefine la portabilidad.",
    precio: 1099,
    categoria: "smartphones",
    imagen: "img/SamsungGalaxyZ Flip7.webp"
  },
  {
    nombre: "Samsung Galaxy Tab S9 FE",
    descripcionCorta: "Tablet versátil con S Pen incluido para crear y producir.",
    descripcionLarga: "La Galaxy Tab S9 FE con pantalla LCD de 12.4″ a 90Hz es la compañera perfecta para estudios, trabajo creativo y entretenimiento. Incluye S Pen sin necesidad de carga, procesador Exynos 1380 eficiente y batería de 10090mAh para jornadas completas. Con resistencia IP68 y Samsung DeX, se transforma en un verdadero ordenador portátil con teclado opcional.",
    precio: 549,
    categoria: "tablets",
    imagen: "img/Samsungs24plus.webp"
  },
  {
    nombre: "Xiaomi 14T Pro",
    descripcionCorta: "Fotografía profesional Leica y procesamiento de élite.",
    descripcionLarga: "El Xiaomi 14T Pro eleva la fotografía móvil con su colaboración Leica, integrando sistema de cámara triple de 50MP con ópticas Summilux y procesamiento computacional avanzado. Equipado con MediaTek Dimensity 9300+, pantalla AMOLED CrystalRes de 6.67″ a 144Hz y carga HyperCharge de 120W que alcanza el 100% en 19 minutos. El equilibrio perfecto entre innovación fotográfica y rendimiento extremo.",
    precio: 799,
    categoria: "smartphones",
    imagen: "img/Xiaomi13Lite.webp"
  },
  {
    nombre: "Redmi Note 13 Pro+ 5G",
    descripcionCorta: "El rey de la gama media con cámara de 200MP.",
    descripcionLarga: "El Redmi Note 13 Pro+ 5G redefine las expectativas de precio-calidad con su impresionante cámara principal de 200MP con OIS, pantalla Curved AMOLED de 6.67″ a 120Hz con brillo pico de 1800 nits y carga ultrarrápida de 120W. Su procesador MediaTek Dimensity 7200-Ultra ofrece rendimiento fluido, mientras que su diseño premium con acabados curvos compite con modelos flagship.",
    precio: 399,
    categoria: "smartphones",
    imagen: "img/RedmiNote13Pro+5G.webp"
  },
  {
    nombre: "Xiaomi Pad 6 Pro",
    descripcionCorta: "Potencia y pantalla espectacular para productividad extrema.",
    descripcionLarga: "La Xiaomi Pad 6 Pro combina procesador Snapdragon 8+ Gen 1 con pantalla de 11″ a 144Hz y resolución 2.8K para una experiencia visual y de rendimiento excepcional. Con sistema de audio cuádruple Dolby Atmos, batería de 8600mAh y soporte para stylus, es perfecta para estudiantes, creativos y profesionales. Compatible con teclado magnético para máxima versatilidad.",
    precio: 499,
    categoria: "tablets",
    imagen: "img/XiaomiRedmiPad2Pro.webp"
  },
  {
    nombre: "Xiaomi Smart Band 8 Pro",
    descripcionCorta: "Seguimiento completo de salud con pantalla AMOLED grande.",
    descripcionLarga: "La Smart Band 8 Pro eleva el seguimiento fitness con pantalla AMOLED rectangular de 1.74″, GPS integrado y más de 150 modos deportivos profesionales. Monitoriza frecuencia cardíaca 24/7, SpO2, calidad del sueño y niveles de estrés con sensores de alta precisión. Resistencia 5ATM y autonomía de hasta 14 días hacen de esta pulsera la compañera perfecta para tu estilo de vida activo.",
    precio: 79,
    categoria: "wearables",
    imagen: "img/XIAOMISmartbandXiaomiRedmiSmartBandProNegro.webp"
  },
  {
    nombre: "Xiaomi 13 Lite",
    descripcionCorta: "Diseño ultraligero con cámaras duales para selfies perfectos.",
    descripcionLarga: "El Xiaomi 13 Lite destaca por su enfoque en fotografía frontal con sistema dual de 32MP + 8MP ultrawide para selfies de nivel profesional. Su procesador Snapdragon 7 Gen 1 garantiza fluidez, mientras que la pantalla AMOLED curva de 6.55″ a 120Hz y el grosor de solo 7.23mm lo convierten en uno de los smartphones más elegantes y ligeros del mercado.",
    precio: 399,
    categoria: "smartphones",
    imagen: "img/Xiaomi13Lite.webp"
  },
  {
    nombre: "iPhone 15 Pro Max",
    descripcionCorta: "El iPhone más avanzado con titanio y chip A17 Pro.",
    descripcionLarga: "El iPhone 15 Pro Max representa la cúspide de la ingeniería Apple con construcción en titanio grado 5 que reduce un 19% el peso, chip A17 Pro con GPU de 6 núcleos para gaming de consola, y sistema de cámara profesional con teleobjetivo tetraprismático de 5x. La llegada de USB-C con Thunderbolt/USB 3 y el botón de Acción personalizable elevan la productividad y creatividad al máximo nivel.",
    precio: 1469,
    categoria: "smartphones",
    imagen: "img/iphone17promax.webp"
  },
  {
    nombre: "iPhone 15",
    descripcionCorta: "La experiencia iPhone esencial con Dynamic Island y USB-C.",
    descripcionLarga: "El iPhone 15 introduce Dynamic Island en la línea principal, transformando las notificaciones en una experiencia interactiva fluida. Su cámara principal de 48MP con teleobjetivo 2x, chip A16 Bionic y diseño renovado con acabados en vidrio con infusión de color ofrecen rendimiento premium. La transición a USB-C universal y mejoras en autonomía lo convierten en el iPhone perfecto para la mayoría.",
    precio: 959,
    categoria: "smartphones",
    imagen: "img/Iphone17.webp"
  },
  {
    nombre: "MacBook Air M3",
    descripcionCorta: "Portátil ultraligero con chip M3 y 18 horas de autonomía.",
    descripcionLarga: "El MacBook Air con chip M3 redefine la portabilidad profesional con solo 1.24kg de peso y 1.13cm de grosor. Su CPU de 8 núcleos y GPU de hasta 10 núcleos manejan tareas exigentes sin esfuerzo ni ventiladores, mientras que la pantalla Liquid Retina de 13.6″ con brillo de 500 nits garantiza claridad perfecta. Con 18 horas de batería, audio espacial y MagSafe 3, es la herramienta definitiva para movilidad sin compromisos.",
    precio: 1299,
    categoria: "portatiles",
    imagen: "img/AppleMacbookAir.webp"
  },
  {
    nombre: "iPad Air M2 11″",
    descripcionCorta: "Potencia profesional en diseño ultraligero y versátil.",
    descripcionLarga: "El iPad Air M2 integra el potente chip M2 con CPU de 8 núcleos en un cuerpo de solo 461g. Compatible con Apple Pencil Pro para creatividad avanzada y Magic Keyboard para productividad tipo laptop, ofrece pantalla Liquid Retina de 11″ con True Tone y USB-C Thunderbolt. Perfecto para diseñadores, estudiantes y creadores que necesitan potencia profesional en formato ultraportátil.",
    precio: 699,
    categoria: "tablets",
    imagen: "img/Ipad-Air-m2-11.webp"
  },
  {
    nombre: "Apple Watch Series 9",
    descripcionCorta: "Salud avanzada con chip S9 y gestos Double Tap.",
    descripcionLarga: "El Apple Watch Series 9 con chip S9 introduce Double Tap para control sin tocar la pantalla, procesamiento Siri on-device para privacidad máxima, y pantalla 2x más brillante que alcanza 2000 nits. Monitoriza oxígeno en sangre, ECG, temperatura cutánea y fases del sueño con precisión médica. Fabricado con carbono neutro y materiales 100% reciclados, combina sostenibilidad con tecnología de vanguardia.",
    precio: 449,
    categoria: "wearables",
    imagen: "img/AppleWatchSeries9.webp"
  },
  {
    nombre: "OPPO Find X7 Pro",
    descripcionCorta: "Sistema fotográfico Hasselblad para fotografía profesional móvil.",
    descripcionLarga: "El Oppo Find X7 Pro establece nuevos estándares fotográficos con su colaboración Hasselblad Master, integrando sistema periscopio dual con zoom 6x y sensor principal de 50MP con OIS. El procesador Snapdragon 8 Gen 3 y pantalla LTPO AMOLED de 6.82″ a 120Hz con brillo pico de 4500 nits garantizan rendimiento y visibilidad excepcionales. Incluye carga SuperVOOC de 100W y batería de 5000mAh.",
    precio: 1199,
    categoria: "smartphones",
    imagen: "img/OppoFindX3pro5g.webp"
  },
  {
    nombre: "Oppo Reno 11 Pro 5G",
    descripcionCorta: "Elegancia curva con cámara Sony y carga ultrarrápida.",
    descripcionLarga: "El Reno 11 Pro combina diseño sofisticado con pantalla curva AMOLED de 6.74″ a 120Hz, sensor Sony IMX890 de 50MP con OIS para fotografía nocturna excepcional, y carga SUPERVOOC de 80W que alcanza el 100% en 27 minutos. Su procesador MediaTek Dimensity 8200 y batería de 4600mAh ofrecen el equilibrio perfecto entre rendimiento, diseño y autonomía.",
    precio: 599,
    categoria: "smartphones",
    imagen: "img/OppoReno6Pro5g.webp"
  },
  {
    nombre: "Oppo A79 5G",
    descripcionCorta: "5G accesible con pantalla fluida y batería de larga duración.",
    descripcionLarga: "El Oppo A79 5G democratiza la conectividad de nueva generación con pantalla FHD+ de 6.72″ a 90Hz, procesador MediaTek Dimensity 6020 eficiente y batería de 5000mAh con carga SUPERVOOC de 33W. Su diseño resistente con certificación IP54 y cámara dual de 50MP lo convierten en la opción ideal para quienes buscan prestaciones completas sin comprometer el presupuesto.",
    precio: 249,
    categoria: "smartphones",
    imagen: "img/OppoA79.webp"
  },
  {
    nombre: "Oppo Pad 2",
    descripcionCorta: "Tablet premium con pantalla 144Hz y sonido envolvente.",
    descripcionLarga: "La Oppo Pad 2 integra procesador MediaTek Dimensity 9000 flagship con pantalla LCD 2.8K de 11.61″ a 144Hz para fluidez excepcional. Su sistema de audio cuádruple con Dolby Atmos y batería de 9510mAh garantizan entretenimiento inmersivo durante horas. Con 8GB RAM y soporte para stylus, es perfecta para productividad, estudios digitales y consumo multimedia premium.",
    precio: 499,
    categoria: "tablets",
    imagen: "img/OppoPad2.webp"
  },
  {
    nombre: "Oppo Enco Air 3 Pro",
    descripcionCorta: "Audio inalámbrico Hi-Res con cancelación de ruido inteligente.",
    descripcionLarga: "Los Oppo Enco Air 3 Pro ofrecen certificación Hi-Res Audio con códec LHDC 5.0, cancelación activa de ruido hasta 49dB y modo transparencia adaptativo. Sus drivers dinámicos de 12.4mm titanizados entregan graves potentes y agudos cristalinos, mientras que la autonomía de 30 horas con estuche compacto y carga rápida los convierte en compañeros perfectos para el día a día.",
    precio: 89,
    categoria: "auriculares",
    imagen: "img/xiaomi15tpro.jpg"
  }
];

// ===== 2) Render de tarjetas =====
function crearTarjeta(producto) {
  return `
    <div class="tarjeta">
      <div class="tarjeta-contenido">
        <div class="tarjeta-imagen">
          <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="tarjeta-info">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcionCorta}</p>
        </div>
        <div class="tarjeta-precio">
          <p class="precio">${producto.precio}€</p>
        </div>
      </div>
      <div class="tarjeta-footer">
        <button class="btn-ver-mas"><span class="icono-carrito">🛒</span> Añadir al carrito</button>
      </div>
    </div>
  `;
}

function mostrarTarjetas(productos) {
  const contenedor = document.querySelector('.tarjetas');
  
  if (!contenedor) {
    console.error('❌ No existe .tarjetas en el DOM');
    return;
  }
  
  contenedor.innerHTML = productos.map(crearTarjeta).join('');
  console.log(` Pintadas ${productos.length} tarjetas`);
}

// ===== 3) SISTEMA DE FILTROS =====

function filtrarProducto(categoria) {
  if (categoria === 'todos') {
    return mi_array;
  }
  return mi_array.filter(producto => producto.categoria === categoria);
}

function activarBoton(botonActivo) {
  const todosLosBotones = document.querySelectorAll('.seccion.filtros button');
  todosLosBotones.forEach(boton => {
    boton.classList.remove('activo');
  });
  botonActivo.classList.add('activo');
}

function configurarFiltros() {
  const botonesFiltro = document.querySelectorAll('.seccion.filtros button');
  
  botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
      // Obtener la categoría del botón
      const categoriaElegida = boton.getAttribute('data-cat');
      
      // Filtrar los productos
      const productosFiltrados = filtrarProducto(categoriaElegida);
      
      // Marcar visualmente el botón activo
      activarBoton(boton);
      
      // Repintar las tarjetas
      mostrarTarjetas(productosFiltrados);
      
      console.log(`🔍 Filtrado por: ${categoriaElegida}`);
    });
  });
}

// ===== 4) INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
  console.log(' Iniciando tienda...');
  mostrarTarjetas(mi_array);
  configurarFiltros();
  console.log(' Tienda lista');
});
