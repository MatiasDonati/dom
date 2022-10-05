let carritoDeCompras = [];

const carrito = (productoId) => {

    // Cuando aplico esto se me desactiva la entrada al else y no hace producto.cantidad++ sino q lo mete de nuevo al objeto entero

    // Con IF Ternario
    // localStorage.getItem('carrito') ? carritoDeCompras = obtenerCarritoStorage()
    if(localStorage.getItem('carrito')){
        carritoDeCompras = obtenerCarritoStorage()
    }

    let producto = productos.find( producto => producto.id == productoId);

    console.log(carritoDeCompras.includes(producto));

    // Con IF Ternario
    carritoDeCompras.includes(producto) ? producto.cantidad++ : carritoDeCompras.push(producto);
    // if(!carritoDeCompras.includes(producto)){
    //     carritoDeCompras.push(producto);
    // }else{
    //     console.log('PRODUCTO CANTIDAD++');
    //     producto.cantidad++
    // }

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

    // Boton Agregar un producto del carrito
    const botonAgregar = document.getElementById(`agregar-uno${producto.id}`)
    botonAgregar.addEventListener('click', ()=>{
        console.log('Agregar Producto');
    })

    // Boton eliminarUno producto del carrito
    const botonEliminarUno = document.getElementById(`eliminar-uno${producto.id}`)
    botonEliminarUno.addEventListener('click', () =>{
        console.log('Eliminar un Producto');
    })
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