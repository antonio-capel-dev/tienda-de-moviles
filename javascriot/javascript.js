// Array de productos con los datos
const productos = [
    {
        id: 1,
        nombre: "Samsung Galaxy S24 Ultra",
        precio: 1399,
        categoria: "smartphones",
        imagen: "img/Samsungs24ultra.webp",
        descripcion: "El smartphone más potente de Samsung con IA integrada y cámara de 200MP."
    },
    {
        id: 2,
        nombre: "iPhone 15 Pro",
        precio: 1200,
        categoria: "smartphones",
        imagen: "img/Iphone17.webp",
        descripcion: "Diseño en titanio, chip A17 Pro y botón de acción personalizable."
    },
    {
        id: 3,
        nombre: "iPad Air M2",
        precio: 700,
        categoria: "tablets",
        imagen: "img/Ipad-Air-m2-11.webp",
        descripcion: "Potencia increíble con el chip M2 en un diseño ultra delgado."
    },
    {
        id: 4,
        nombre: "MacBook Air M3",
        precio: 1299,
        categoria: "portatiles",
        imagen: "img/AppleMacbookAir.webp",
        descripcion: "El portátil más popular del mundo, ahora con el chip M3."
    },
    {
        id: 5,
        nombre: "Xiaomi Smart Band 8",
        precio: 49,
        categoria: "wearables",
        imagen: "img/XIAOMISmartbandXiaomiRedmiSmartBandProNegro.webp",
        descripcion: "Tu mejor compañera de entrenamiento con batería de 16 días."
    },
    {
        id: 6,
        nombre: "Sony WH-1000XM5",
        precio: 350,
        categoria: "auriculares",
        imagen: "img/xiaomi15tpro.jpg",
        descripcion: "La mejor cancelación de ruido del mercado con sonido premium."
    },
    {
        id: 7,
        nombre: "Samsung Galaxy Tab S9",
        precio: 899,
        categoria: "tablets",
        imagen: "img/Samsungs24plus.webp",
        descripcion: "Tablet resistente al agua y polvo con S Pen incluido."
    },
    {
        id: 8,
        nombre: "Oppo Reno 10",
        precio: 499,
        categoria: "smartphones",
        imagen: "img/OppoReno6Pro5g.webp",
        descripcion: "Experto en retratos con teleobjetivo y carga rápida."
    }
];

let carrito = [];
let favoritos = [];

// Renderizamos los productos en el HTML
function renderizarProductos(listaProductos) {
    const contenedor = document.getElementById('contenedor-productos');
    
    // Usamos map para crear el HTML de cada tarjeta
    const html = listaProductos.map(producto => {
        const claseFav = favoritos.includes(producto.id) ? 'activo' : '';
        
        return `
            <article class="tarjeta" data-id="${producto.id}">
                <div class="contenedor-img-tarjeta">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-tarjeta">
                    <button class="btn-fav ${claseFav}" data-accion="toggle-fav" data-id="${producto.id}">
                        ♥
                    </button>
                </div>
                <div class="info-tarjeta">
                    <span class="cat-tarjeta">${producto.categoria}</span>
                    <h3>${producto.nombre}</h3>
                    <span class="precio-tarjeta">${producto.precio}€</span>
                </div>
                <button class="btn-agregar" data-accion="agregar-carrito" data-id="${producto.id}">
                    Añadir al Carrito
                </button>
            </article>
        `;
    }).join('');

    contenedor.innerHTML = html;
}

// Pintamos el carrito actualizado
function renderizarCarrito() {
    const contenedor = document.getElementById('cuerpo-carrito');
    const elementoTotal = document.getElementById('total-carrito');
    const elementoContador = document.getElementById('contador-carrito');

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p style="text-align:center; padding:20px;">El carrito está vacío</p>';
        elementoTotal.textContent = '0€';
        elementoContador.textContent = '0';
        return;
    }

    // Generamos el HTML de los items del carrito
    contenedor.innerHTML = carrito.map(item => `
        <div class="item-carrito">
            <img src="${item.imagen}" alt="${item.nombre}">
            <div class="info-carrito">
                <h4>${item.nombre}</h4>
                <p>${item.precio}€</p>
                <div class="controles-carrito">
                    <button class="btn-cantidad" data-accion="restar-cantidad" data-id="${item.id}">-</button>
                    <span>${item.cantidad}</span>
                    <button class="btn-cantidad" data-accion="sumar-cantidad" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="btn-eliminar" data-accion="eliminar-item" data-id="${item.id}">🗑️</button>
        </div>
    `).join('');

    // Calculamos el precio total
    const total = carrito.reduce((acumulador, item) => acumulador + (item.precio * item.cantidad), 0);
    elementoTotal.textContent = `${total}€`;
    
    // Actualizamos el contador del icono
    const totalItems = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);
    elementoContador.textContent = totalItems;
}

// Añadir producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const itemEnCarrito = carrito.find(item => item.id === id);

    if (itemEnCarrito) {
        // Si ya está, sumamos uno
        carrito = carrito.map(item => 
            item.id === id ? {...item, cantidad: item.cantidad + 1} : item
        );
    } else {
        // Si no, lo añadimos nuevo
        carrito = [...carrito, {...producto, cantidad: 1}];
    }
    
    renderizarCarrito();
    document.getElementById('modal-carrito').classList.add('abierto');
}

// Cambiar cantidad de un producto
function modificarCantidad(id, cambio) {
    carrito = carrito.map(item => {
        if (item.id === id) {
            return {...item, cantidad: item.cantidad + cambio};
        }
        return item;
    }).filter(item => item.cantidad > 0); // Si baja de 1, se borra

    renderizarCarrito();
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    renderizarCarrito();
}

// Vaciar todo el carrito
function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
}

// Marcar o desmarcar favorito
function toggleFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(favId => favId !== id);
    } else {
        favoritos = [...favoritos, id];
    }
    
    // Actualizamos la vista
    const categoriaActiva = document.querySelector('.btn-cat.activo').dataset.cat;
    filtrarYRenderizar(categoriaActiva, document.getElementById('input-buscador').value);
}

// Filtrar productos por categoría y texto
function filtrarYRenderizar(categoria, textoBusqueda) {
    let resultado = productos;

    if (categoria !== 'todos') {
        resultado = resultado.filter(p => p.categoria === categoria);
    }

    if (textoBusqueda) {
        const texto = textoBusqueda.toLowerCase();
        resultado = resultado.filter(p => p.nombre.toLowerCase().includes(texto));
    }

    renderizarProductos(resultado);
}

// Abrir modal con detalles del producto
function abrirModalProducto(id) {
    const producto = productos.find(p => p.id === id);
    const modal = document.getElementById('modal-producto');
    const cuerpo = document.getElementById('cuerpo-modal');

    cuerpo.innerHTML = `
        <div class="contenedor-img-modal">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="img-modal">
        </div>
        <div class="detalles-modal">
            <h2>${producto.nombre}</h2>
            <p class="desc-modal">${producto.descripcion}</p>
            <span class="precio-modal">${producto.precio}€</span>
            <button class="btn-agregar" onclick="agregarAlCarrito(${producto.id}); document.getElementById('modal-producto').classList.remove('abierto');">
                Añadir al Carrito
            </button>
        </div>
    `;

    modal.classList.add('abierto');
}

// Eventos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos(productos);
    renderizarCarrito();

    // Eventos en el contenedor de productos (Delegacion)
    document.getElementById('contenedor-productos').addEventListener('click', (e) => {
        const target = e.target;
        
        // Botón añadir
        if (target.closest('.btn-agregar')) {
            e.stopPropagation();
            const id = parseInt(target.closest('.btn-agregar').dataset.id);
            agregarAlCarrito(id);
            return;
        }

        // Botón favorito
        if (target.closest('.btn-fav')) {
            e.stopPropagation();
            const id = parseInt(target.closest('.btn-fav').dataset.id);
            toggleFavorito(id);
            return;
        }

        // Clic en la tarjeta para abrir modal
        const tarjeta = target.closest('.tarjeta');
        if (tarjeta) {
            const id = parseInt(tarjeta.dataset.id);
            abrirModalProducto(id);
        }
    });

    // Eventos en el carrito
    document.getElementById('cuerpo-carrito').addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        const accion = btn.dataset.accion;
        const id = parseInt(btn.dataset.id);

        if (accion === 'sumar-cantidad') modificarCantidad(id, 1);
        if (accion === 'restar-cantidad') modificarCantidad(id, -1);
        if (accion === 'eliminar-item') eliminarDelCarrito(id);
    });

    // Filtros por categoría
    document.getElementById('nav-categorias').addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-cat')) {
            document.querySelectorAll('.btn-cat').forEach(b => b.classList.remove('activo'));
            e.target.classList.add('activo');

            const categoria = e.target.dataset.cat;
            const texto = document.getElementById('input-buscador').value;
            filtrarYRenderizar(categoria, texto);
        }
    });

    // Buscador
    document.getElementById('input-buscador').addEventListener('input', (e) => {
        const texto = e.target.value;
        const categoria = document.querySelector('.btn-cat.activo').dataset.cat;
        filtrarYRenderizar(categoria, texto);
    });

    // Abrir y cerrar modales
    document.getElementById('btn-abrir-carrito').addEventListener('click', () => {
        document.getElementById('modal-carrito').classList.add('abierto');
    });

    document.getElementById('btn-cerrar-carrito').addEventListener('click', () => {
        document.getElementById('modal-carrito').classList.remove('abierto');
    });

    document.getElementById('btn-cerrar-modal').addEventListener('click', () => {
        document.getElementById('modal-producto').classList.remove('abierto');
    });

    // Cerrar al hacer clic fuera
    document.querySelectorAll('.fondo-modal').forEach(fondo => {
        fondo.addEventListener('click', (e) => {
            if (e.target === fondo) {
                fondo.classList.remove('abierto');
            }
        });
    });

    // Menú móvil
    document.getElementById('btn-menu-movil').addEventListener('click', () => {
        document.getElementById('nav-categorias').classList.toggle('activo');
    });

    // Botones del pie del carrito
    document.getElementById('btn-vaciar').addEventListener('click', vaciarCarrito);
    document.getElementById('btn-comprar').addEventListener('click', () => {
        if (carrito.length > 0) {
            alert('¡Gracias por tu compra!');
            vaciarCarrito();
            document.getElementById('modal-carrito').classList.remove('abierto');
        } else {
            alert('El carrito está vacío');
        }
    });
});
