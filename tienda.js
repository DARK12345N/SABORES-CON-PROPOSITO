const CLAVE_CARRITO = "sabores-con-proposito-carrito";
const TELEFONO_NEGOCIO = "59168947878";

const productos = [
    { id: 1, nombre: "Chips de Plátano Orgánico", descripcion: "Crujientes rodajas horneadas con sal marina.", categoria: "Horneado", precio: 15, stock: 50, imagen: "https://images.pexels.com/photos/9191924/pexels-photo-9191924.jpeg?auto=compress&cs=tinysrgb&w=900", textoImagen: "Chips de plátano crujientes" },
    { id: 2, nombre: "Mix Energético Andino", descripcion: "Quinua pop, almendras, pasas y semillas.", categoria: "Energía natural", precio: 22.5, stock: 30, imagen: "https://images.pexels.com/photos/30291266/pexels-photo-30291266.jpeg?auto=compress&cs=tinysrgb&w=900", textoImagen: "Frutas deshidratadas y frutos secos" },
    { id: 3, nombre: "Galletas de Avena y Miel", descripcion: "Endulzadas naturalmente, sin conservantes.", categoria: "Artesanal", precio: 12, stock: 40, imagen: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85", textoImagen: "Galletas recién horneadas" },
    { id: 4, nombre: "Tostadas Dulces con Fruta", descripcion: "Tostadas con fruta fresca y un toque de miel.", categoria: "Desayuno", precio: 18, stock: 28, imagen: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=85", textoImagen: "Tostadas con banana y arándanos" },
    { id: 5, nombre: "Granola de Avena y Cacao", descripcion: "Mezcla crujiente de avena con el sabor del cacao.", categoria: "Energía natural", precio: 13, stock: 35, imagen: "https://images.pexels.com/photos/6823306/pexels-photo-6823306.jpeg?auto=compress&cs=tinysrgb&w=900", textoImagen: "Granola con avena" },
    { id: 6, nombre: "Manzanas Frescas", descripcion: "Manzanas seleccionadas para una merienda fresca.", categoria: "Fruta", precio: 14, stock: 22, imagen: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=900&q=85", textoImagen: "Manzanas frescas" },
    { id: 7, nombre: "Pan Integral de Semillas", descripcion: "Pan artesanal con una mezcla crujiente de semillas.", categoria: "Horneado", precio: 19.5, stock: 18, imagen: "https://images.pexels.com/photos/5869670/pexels-photo-5869670.jpeg?auto=compress&cs=tinysrgb&w=900", textoImagen: "Pan artesanal con semillas de sésamo" },
    { id: 8, nombre: "Galletas de Cacao Artesanal", descripcion: "Galletas de sabor intenso para acompañar tu pausa.", categoria: "Artesanal", precio: 16, stock: 24, imagen: "https://images.pexels.com/photos/8081573/pexels-photo-8081573.jpeg?auto=compress&cs=tinysrgb&w=900", textoImagen: "Galletas con chispas de chocolate" },
    { id: 9, nombre: "Frutillas Frescas", descripcion: "Frutillas seleccionadas para una merienda dulce.", categoria: "Fruta", precio: 17.5, stock: 25, imagen: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=85", textoImagen: "Frutillas frescas" },
    { id: 10, nombre: "Arándanos para la Merienda", descripcion: "Pequeños frutos para disfrutar solos o acompañados.", categoria: "Fruta", precio: 18, stock: 24, imagen: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=900&q=85", textoImagen: "Arándanos frescos" },
    { id: 11, nombre: "Miel Pura de Bosque", descripcion: "Miel para endulzar tus desayunos y meriendas.", categoria: "Endulzantes", precio: 25, stock: 20, imagen: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=85", textoImagen: "Miel dorada" },
    { id: 12, nombre: "Croissants Artesanales", descripcion: "Hojaldre dorado para acompañar una pausa especial.", categoria: "Horneado", precio: 20, stock: 18, imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85", textoImagen: "Croissants recién horneados" },
    { id: 13, nombre: "Tostadas con Frutos Rojos", descripcion: "Tostadas dulces con fruta para compartir.", categoria: "Desayuno", precio: 21.5, stock: 15, imagen: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=85", textoImagen: "Tostadas con fruta fresca" },
    { id: 14, nombre: "Manzana con Canela", descripcion: "Rodajas de manzana con un toque de canela.", categoria: "Fruta", precio: 14.5, stock: 22, imagen: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=900&q=85", textoImagen: "Manzanas frescas" },
    { id: 15, nombre: "Galletas con Chispas de Chocolate", descripcion: "Galletas horneadas para acompañar el café o el té.", categoria: "Artesanal", precio: 15, stock: 26, imagen: "https://images.pexels.com/photos/8081573/pexels-photo-8081573.jpeg?auto=compress&cs=tinysrgb&w=900", textoImagen: "Galletas con chispas de chocolate" },
    { id: 16, nombre: "Bocados de Chocolate Amargo", descripcion: "Pequeños bocados con el sabor intenso del cacao.", categoria: "Cacao", precio: 17.5, stock: 21, imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85", textoImagen: "Chocolate oscuro" }
];

function cargarCarrito() {
    try {
        const guardado = localStorage.getItem(CLAVE_CARRITO);
        const items = guardado ? JSON.parse(guardado) : [];
        if (!Array.isArray(items)) throw new TypeError("El contenido guardado no es una lista.");

        return items.reduce((carritoValido, item) => {
            const producto = productos.find(opcion => opcion.id === Number(item.id));
            const cantidad = Number(item.cantidad);
            if (producto && Number.isInteger(cantidad) && cantidad > 0) {
                carritoValido.push({ ...producto, cantidad: Math.min(cantidad, producto.stock) });
            }
            return carritoValido;
        }, []);
    } catch (error) {
        console.error("No se pudo leer el carrito guardado.", error);
        return [];
    }
}

let carrito = cargarCarrito();
let temporizadorNotificacion;

function guardarCarrito() {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
    actualizarContador();
}

function actualizarContador() {
    const cantidad = carrito.reduce((total, item) => total + item.cantidad, 0);
    document.querySelectorAll("[data-cart-count]").forEach(contador => {
        contador.textContent = cantidad;
        contador.setAttribute("aria-label", `${cantidad} ${cantidad === 1 ? "producto" : "productos"}`);
    });
}

function mostrarNotificacion(mensaje) {
    const notificacion = document.getElementById("notificacion");
    if (!notificacion) return;
    notificacion.textContent = mensaje;
    notificacion.hidden = false;
    clearTimeout(temporizadorNotificacion);
    temporizadorNotificacion = setTimeout(() => {
        notificacion.hidden = true;
    }, 3200);
}

function renderizarProductos() {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

    contenedor.innerHTML = productos.map(producto => {
        const cantidad = carrito.find(item => item.id === producto.id)?.cantidad || 0;
        const disponibles = producto.stock - cantidad;
        return `
            <article class="product-card">
                <div class="product-art">
                    <img src="${producto.imagen}" alt="${producto.textoImagen}" loading="lazy" decoding="async">
                </div>
                <div class="product-content">
                    <span class="product-category">${producto.categoria}</span>
                    <h2>${producto.nombre}</h2>
                    <p class="product-description">${producto.descripcion}</p>
                    <div class="product-meta">
                        <span class="product-price">Bs. ${producto.precio.toFixed(2)}</span>
                        <span class="product-stock">${disponibles} disponibles</span>
                    </div>
                    <button class="add-button" type="button" data-add-id="${producto.id}" ${disponibles <= 0 ? "disabled" : ""}>
                        ${disponibles <= 0 ? "Sin stock disponible" : "Agregar al carrito"}
                    </button>
                </div>
            </article>
        `;
    }).join("");
}

function renderizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    if (!lista) return;

    const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
    document.getElementById("total-carrito").textContent = total.toFixed(2);
    const vaciar = document.getElementById("vaciar-carrito");
    const prepararPedido = document.getElementById("enviar-pedido");
    const botonGenerarRecibo = document.getElementById("generar-recibo");
    vaciar.disabled = carrito.length === 0;
    prepararPedido.setAttribute("aria-disabled", String(carrito.length === 0));
    if (botonGenerarRecibo) botonGenerarRecibo.disabled = carrito.length === 0;

    if (carrito.length === 0) {
        lista.innerHTML = `
            <div class="empty-state">
                <h2>Tu carrito está vacío</h2>
                <p>Agrega tus snacks favoritos para empezar.</p>
                <a class="primary-link" href="productos.html">Ver productos</a>
            </div>
        `;
        prepararPedido.href = `https://wa.me/${TELEFONO_NEGOCIO}`;
        return;
    }

    lista.innerHTML = carrito.map(item => `
        <article class="cart-item">
            <div>
                <h2>${item.nombre}</h2>
                <p>Bs. ${item.precio.toFixed(2)} por unidad</p>
                <div class="cart-item-actions">
                    <button class="quantity-button" type="button" data-action="decrease" data-id="${item.id}" aria-label="Quitar una unidad de ${item.nombre}">−</button>
                    <span class="quantity-value">${item.cantidad}</span>
                    <button class="quantity-button" type="button" data-action="increase" data-id="${item.id}" aria-label="Agregar una unidad de ${item.nombre}">+</button>
                    <button class="remove-button" type="button" data-action="remove" data-id="${item.id}">Eliminar</button>
                </div>
            </div>
            <span class="cart-item-total">Bs. ${(item.precio * item.cantidad).toFixed(2)}</span>
        </article>
    `).join("");

    const mensaje = [
        "Hola, quiero hacer este pedido:",
        "",
        ...carrito.map(item => `${item.cantidad} x ${item.nombre} — Bs. ${(item.precio * item.cantidad).toFixed(2)}`),
        "",
        `Total: Bs. ${total.toFixed(2)}`
    ].join("\n");
    prepararPedido.href = `https://wa.me/${TELEFONO_NEGOCIO}?text=${encodeURIComponent(mensaje)}`;
}

function generarReciboPdf() {
    const ahora = new Date();
    const codigo = `SCP-${ahora.getTime().toString(36).toUpperCase()}`;
    const fecha = new Intl.DateTimeFormat("es-BO", {
        dateStyle: "medium",
        timeStyle: "short"
    }).format(ahora);
    const filas = carrito.map(item => `
        <tr>
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>Bs. ${item.precio.toFixed(2)}</td>
            <td>Bs. ${(item.precio * item.cantidad).toFixed(2)}</td>
        </tr>
    `).join("");
    const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);

    document.getElementById("recibo-impresion").innerHTML = `
        <header class="receipt-header">
            <h1>Sabores con Propósito</h1>
            <p>Recibo del pedido</p>
        </header>
        <div class="receipt-meta">
            <p><strong>Número de pedido:</strong> ${codigo}</p>
            <p><strong>Fecha:</strong> ${fecha}</p>
            <p><strong>WhatsApp:</strong> +591 68947878</p>
        </div>
        <table class="receipt-table">
            <thead>
                <tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th></tr>
            </thead>
            <tbody>${filas}</tbody>
        </table>
        <p class="receipt-total">Total: Bs. ${total.toFixed(2)}</p>
        <p class="receipt-status">Pedido pendiente de confirmación y pago. Este recibo no acredita que el pago se haya realizado.</p>
    `;

    window.print();
}

function actualizarInterfaz() {
    guardarCarrito();
    actualizarContador();
    renderizarProductos();
    renderizarCarrito();
}

const contenedorProductos = document.getElementById("contenedor-productos");
if (contenedorProductos) {
    contenedorProductos.addEventListener("click", event => {
        const boton = event.target.closest("[data-add-id]");
        if (!boton) return;

        const producto = productos.find(opcion => opcion.id === Number(boton.dataset.addId));
        if (!producto) return;
        const existente = carrito.find(item => item.id === producto.id);
        if (existente && existente.cantidad >= producto.stock) {
            mostrarNotificacion("Alcanzaste el stock disponible de este producto.");
            return;
        }

        if (existente) existente.cantidad += 1;
        else carrito.push({ ...producto, cantidad: 1 });
        actualizarInterfaz();
        mostrarNotificacion(`${producto.nombre} agregado al carrito.`);
    });
}

const listaCarrito = document.getElementById("lista-carrito");
if (listaCarrito) {
    listaCarrito.addEventListener("click", event => {
        const boton = event.target.closest("[data-action]");
        if (!boton) return;

        const item = carrito.find(opcion => opcion.id === Number(boton.dataset.id));
        if (!item) return;
        const producto = productos.find(opcion => opcion.id === item.id);

        if (boton.dataset.action === "increase") {
            if (item.cantidad < producto.stock) item.cantidad += 1;
            else mostrarNotificacion("Alcanzaste el stock disponible de este producto.");
        } else if (boton.dataset.action === "decrease") {
            item.cantidad -= 1;
            if (item.cantidad <= 0) carrito = carrito.filter(opcion => opcion.id !== item.id);
        } else if (boton.dataset.action === "remove") {
            carrito = carrito.filter(opcion => opcion.id !== item.id);
        }

        actualizarInterfaz();
    });
}

const botonVaciar = document.getElementById("vaciar-carrito");
if (botonVaciar) {
    botonVaciar.addEventListener("click", () => {
        carrito = [];
        actualizarInterfaz();
        mostrarNotificacion("Se vació tu carrito.");
    });
}

const enlacePedido = document.getElementById("enviar-pedido");
if (enlacePedido) {
    enlacePedido.addEventListener("click", event => {
        if (carrito.length === 0) event.preventDefault();
    });
}

const botonGenerarRecibo = document.getElementById("generar-recibo");
if (botonGenerarRecibo) {
    botonGenerarRecibo.addEventListener("click", () => {
        if (carrito.length > 0) generarReciboPdf();
    });
}

actualizarContador();
renderizarProductos();
renderizarCarrito();
