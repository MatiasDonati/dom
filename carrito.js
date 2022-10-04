const carritoDeCompras = [];

const carrito = (productoId) => {
    let producto = productos.find( producto => producto.id == productoId);
    if(localStorage.getItem('carrito')){
        
    }
    if(!carritoDeCompras.includes(producto)){
        carritoDeCompras.push(producto);
    }
    contadorCarrito();
    guardarCarritoStorage(carritoDeCompras)

    const contenedorCarrito = document.getElementById('carrito-contenedor');
        const productosEnElCarritoModal = () =>{
            contenedorCarrito.innerHTML = ''
            carritoDeCompras.forEach(producto => {
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
        }
        productosEnElCarritoModal()

        // Boton eliminar producto del carrito
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener('click', ()=>{
            console.log('EVENTO CLICK ELIMINAR!');
            console.log(carritoDeCompras);
            if(producto.cantidad > 1){
                console.log('tengo mas de uno!!!!!');
                producto.cantidad--
                alert(`Borrar un producto de: ${producto.nombre}`)
                contadorCarrito();
                productosEnElCarritoModal()
                guardarCarritoStorage(carritoDeCompras)
                console.log(carritoDeCompras);
            }else{
                console.log('tengo solo uunooooo!!!!');
                let index = carritoDeCompras.indexOf(producto)
                carritoDeCompras.splice(index, 1)
                console.log(carritoDeCompras);
                alert(`Se ELIMINO ${producto.nombre} del carrito`)
                contadorCarrito();
                productosEnElCarritoModal()
                guardarCarritoStorage(carritoDeCompras)
                contenedorCarrito.removeChild(div);

            }
        } )

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

