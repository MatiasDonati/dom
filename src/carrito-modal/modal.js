const modalContenedor = document.querySelector('.modal-container')
const abrirCarrito = document.getElementById('open')
const cerrarCarrito = document.getElementById('cerrar')
const modalCarrito = document.querySelector('.modal-carrito')
const carritoContenedor = document.getElementById('carrito-contenedor');
const comprar = document.getElementById('compra-final')
const vaciarCarrito = document.getElementById('vaciar-carrito')

const cerrarModalTimer = (tiempo) => {
    setTimeout(() => {
        cerrarCarrito.click();
        }, tiempo);
}

abrirCarrito.addEventListener('click', ()=> {
    modalContenedor.classList.toggle('modal-active')
    console.log("modal activado !");
    mensajeCarritoVacio()
    if(carritoDeCompras.length==0){
        cerrarModalTimer(2500)
    }
});

cerrarCarrito.addEventListener('click', ()=> {
    modalContenedor.classList.remove('modal-active')
});

modalContenedor.addEventListener('click',() =>{
    cerrarCarrito.click();
});

modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation();
});

carritoContenedor.addEventListener('click', (e) => {
    e.stopPropagation();
    if(e.target.parentNode.classList.contains('boton-eliminar')){
        Swal.fire({
            title: 'Esta seguro?!',
            text: 'Va a eliminar el producto',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result)=>{
            console.log(result.isConfirmed);
            if(result.isConfirmed){
                Swal.fire({
                    icon: 'success',
                    title: 'El producto se elimino de su compra.',
                    showConfirmButton: false,
                    timer: 1500
                })
                eliminarProducto(e.target.parentNode.value);
                mensajeCarritoVacio()
                if(carritoDeCompras.length==0){
                    cerrarModalTimer(2500)
                }
            }
        })
    }
    else if (e.target.classList.contains('agregar-uno')){
        console.log(`Agregar un producto value: ${e.target.value}`);
        let producto = carritoDeCompras.find(producto => producto.id == e.target.value)
        Toastify({
            text: `Agregaste un ${producto.nombre}`,
            duration: 3000,
            position: 'left',
            gravity: 'bottom',
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
            }
        }).showToast();
        agregarProducto(e.target.value)
    }
    else if(e.target.classList.contains('eliminar-uno')){
        console.log(`Eliminar un producto value: ${e.target.value}`);
        let producto = carritoDeCompras.find(producto => producto.id == e.target.value)
        let { cantidad } = producto
        if(cantidad != 1) {
            Toastify({
                text: `Eliminaste un ${producto.nombre}`,
                duration: 3000,
                position: 'left',
                gravity: 'bottom',
                style: {
                    background: 'linear-gradient(to right, #00b09b, #96c92d)'
                }
            }).showToast();
            eliminarUno(e.target.value)
        }
    }
});

let nombreUsuario;

const nombre = (nombre) => {
    nombreUsuario = nombre
}

comprar.addEventListener('click', ()=>{
    const emailStorage = obtenerEmail()
    console.log('Comprar Modal!');
    if(carritoDeCompras.length>0){
        totalPreciosStorage = carritoDeCompras.reduce((acc,item)=>acc + item.precio * item.cantidad,0)
        Swal.fire({
            title: `Desea realizar la compra por un total de: $${totalPreciosStorage}?`,
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `Todavía no`,
            }).then((result) => {
                if (result.isConfirmed) {
                    cerrarCarrito.click()
                    finalizarCompra()
                    }
                })
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Elejí tus productos para comprar!',
                        showConfirmButton: true,
                        timer: 2500
                    })
                    cerrarModalTimer(3500)
                }
    }
);

vaciarCarrito.addEventListener('click', () => {
    if(carritoDeCompras.length==0){
        Swal.fire({
            icon: 'error',
            title: 'El carrito se encuentra vacío',
            showConfirmButton: false,
            timer: 1500
        })
        cerrarModalTimer(2000)
    }else{
        Swal.fire({
            title: `Desea realizar vaciar el Carrito?`,
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Carrito vacío',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    carritoDeCompras = []
                    guardarCarritoStorage(carritoDeCompras);
                    pintarCarrito(carritoDeCompras);
                    mensajeCarritoVacio()
                    cerrarModalTimer(2750)
                }
            })
    }
})

const mensajeCarritoVacio = () => {
    if(carritoDeCompras.length==0){
        const contenedorCarrito = document.getElementById('carrito-contenedor');
        contenedorCarrito.innerHTML = ""
        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `<p>El carrito se encuentra vacío</p>`
        contenedorCarrito.appendChild(div)
    }
}