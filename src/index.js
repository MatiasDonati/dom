document.addEventListener('DOMContentLoaded', ()=>{
    mostrarProductos();
    setTimeout(() => {
        bienvenida()
    }, 2500);

    if(localStorage.getItem('carrito')){
        carritoDeCompras = obtenerCarritoStorage()
        pintarCarrito(carritoDeCompras)
    }
})
