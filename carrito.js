let carritoDeCompras = [];

const carrito = (productoId) => {

    if(localStorage.getItem('carrito')){
        carritoDeCompras = obtenerCarritoStorage()
    }

    let producto = productos.find( producto => producto.id == productoId);
    const productoRepetido = carritoDeCompras.find(producto => producto.id == productoId)
    productoRepetido ? productoRepetido.cantidad++ : carritoDeCompras.push(producto);

    contadorCarrito();
    guardarCarritoStorage(carritoDeCompras)

    const contenedorCarrito = document.getElementById('carrito-contenedor');
    const productosEnElCarritoModal = () =>{
        contenedorCarrito.innerHTML = ''
        carritoDeCompras.forEach(producto => {
            const div = document.createElement('div')
            div.classList.add('productoEnCarrito')
            div.innerHTML = `<p>${producto.nombre}</p>
            <p>Precio: ${producto.precio}</p>
            <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
            <button id="eliminar-uno${producto.id}" value="${producto.id}" class="eliminar-uno" >"-"</button>
            <button id="agregar-uno${producto.id}" value="${producto.id}" class="agregar-uno" >"+"</button>
            <button id="eliminar${producto.id}" value="${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>
            <p></p>`;

            contenedorCarrito.appendChild(div)
        })
    }
    productosEnElCarritoModal()
};

// Contador del Carrito
const contadorCarrito = () => {

    let contadorCarrito = carritoDeCompras.reduce((acc,item)=>acc + item.cantidad,0);
    const contador = document.getElementById('contador-carrito')
    contador.innerHTML = `${contadorCarrito}`

    let total = carritoDeCompras.reduce((acc,item)=>acc + item.precio * item.cantidad,0);
    const precioTotal = document.getElementById('precio-total')
    precioTotal.innerHTML = `Total: $${total}`

};

// pintarCarrito recibe por parametro un array de objetos
const pintarCarrito = (carrito) => {
    const contenedorCarrito = document.getElementById('carrito-contenedor');
    contenedorCarrito.innerHTML = ''
            carrito.forEach(producto => {
                let div = document.createElement('div')
                div.classList.add('productoEnCarrito')
                div.innerHTML = `<p>${producto.nombre}</p>
                <p>Precio: ${producto.precio}</p>
                <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                <button id="eliminar-uno${producto.id}" value="${producto.id}" class="eliminar-uno" >"-"</button>
                <button id="agregar-uno${producto.id}" value="${producto.id}" class="agregar-uno" >"+"</button>
                <button id="eliminar${producto.id}" value="${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>
                <p></p>`;

                contenedorCarrito.appendChild(div)
            })

            // PARA QUE SUME TOTAL Y CONTADOR DE STORAGE
            contadorStorage = carrito.reduce((acc,item)=>acc + item.cantidad,0)
            const contador = document.getElementById('contador-carrito')
            contador.innerHTML = `${contadorStorage}`

            totalPreciosStorage = carrito.reduce((acc,item)=>acc + item.precio * item.cantidad,0)
            const precioTotal = document.getElementById('precio-total')
            precioTotal.innerHTML = `Total: $${totalPreciosStorage}`
}

const eliminarProducto = (productoId) => {
    const productoAEliminar = productos.find(producto => producto.id == productoId);
    let index = carritoDeCompras.indexOf(productoAEliminar);
    carritoDeCompras.splice(index, 1)
    guardarCarritoStorage(carritoDeCompras);
    pintarCarrito(carritoDeCompras);
}

const agregarProducto = (productoId) => {

    let producto = productos.find(producto => producto.id == productoId);
    let productoAAgregar = carritoDeCompras.find(producto => productoId == producto.id)
    productoAAgregar.cantidad++
    guardarCarritoStorage(carritoDeCompras);
    pintarCarrito(carritoDeCompras);
}

const eliminarUno = (productoId) =>{

    let producto = productos.find(producto => producto.id == productoId);
    let productoEnArray = carritoDeCompras.find(producto => productoId == producto.id)
    if(productoEnArray.cantidad > 1){
        productoEnArray.cantidad--
    }
    guardarCarritoStorage(carritoDeCompras);
    pintarCarrito(carritoDeCompras);
}

console.log(...productos);