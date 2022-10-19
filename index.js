document.addEventListener('DOMContentLoaded', ()=>{
    mostrarProductos();
    bienvenida()

    if(localStorage.getItem('carrito')){
        carritoDeCompras = obtenerCarritoStorage()
        pintarCarrito(carritoDeCompras)
    }
})
