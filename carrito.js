const carritoDeCompras = [];

const carrito = (productoId)=>{

    // let cantidadProductos = carritoDeCompras.reduce((ac, prod) => ac, prod.cantidad, 0)
    // console.log(cantidadProductos);

    const contenedorCarrito = document.getElementById('carrito-contenedor');

        let producto = productos.find( producto => producto.id == productoId);

        console.log(carritoDeCompras);
        let cantidadProductos = carritoDeCompras.reduce((ac, producto) => ac, producto.cantidad, 0)
        console.log(cantidadProductos);

            // if(!carritoDeCompras.includes(producto)){
            //     carritoDeCompras.push(producto);
            //     let div = document.getElementById('cantidad');
            //     div.innerHTML = `Cantidad: ${producto.cantidad}`;
            // }

            if(!carritoDeCompras.includes(producto)){
                carritoDeCompras.push(producto);
            }

            let div = document.createElement('div')
            div.classList.add('productoEnCarrito')
            div.innerHTML= ' ';

            // FOREACH PARA RECORRER EL ARRAY Y REALIZAR EL INNERHTML ?????

                // console.log(carritoDeCompras)
                div.innerHTML = `<p>${producto.nombre}</p>
                                <p>Precio: ${producto.precio}</p>
                                <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                                <button id="eliminar-uno${producto.id}" class="eliminar-uno" ><i class="fa-solid fa-trash-can"></i></button>
                                <button id="agregar-uno${producto.id}" class="agregar-uno" ><i class="fa-solid fa-trash-can"></i></button>
                                <button id="eliminar${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>`;
    
                                contenedorCarrito.appendChild(div)


// DOS BOTONES EN CARRITO PARA SUMAR O RESTAR UN PRODCUTO - SEGUIRLO !
// DOS BOTONES EN CARRITO PARA SUMAR O RESTAR UN PRODCUTO - SEGUIRLO !


        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener('click', ()=>{
            if(carritoDeCompras.includes(producto.cantidad>1)){
                producto.cantidad--
            }
            let index = carritoDeCompras.indexOf(producto)
            console.log(index);
            carritoDeCompras.splice(index, 1)
            const contador = document.getElementById('contador-carrito')
            contador.innerHTML = `${carritoDeCompras.length}`
            alert(`Se ELIMINO ${producto.nombre} del carrito`)
            // console.log(carritoDeCompras);
            contenedorCarrito.removeChild(div);
        } )
};

// const contadorCarrito = () => {
//     let cantidadProductos = carritoDeCompras.reduce((ac, producto) => ac, producto.cantidad, 0)
//     console.log(cantidadProductos);
// }
// contadorCarrito()

// ACOMODAR QUE CUANDO COMPRAS EL MISMO PRODUCTO SOLO CAMBIE LA CANTIDAD !!!
// ACOMODAR QUE CUANDO COMPRAS EL MISMO PRODUCTO SOLO CAMBIE LA CANTIDAD !!!
// ACOMODAR QUE CUANDO COMPRAS EL MISMO PRODUCTO SOLO CAMBIE LA CANTIDAD !!!
// ACOMODAR QUE CUANDO COMPRAS EL MISMO PRODUCTO SOLO CAMBIE LA CANTIDAD !!!


// CUANDO TENES MAS DE UN MISMO PRODUCTO QUE BORRE CANTIDAD Y NO EL PRODUCTO COMPLETO



