document.addEventListener('DOMContentLoaded', ()=>{
    mostrarProductos();
    //bienvenida()

    if(localStorage.getItem('carrito')){
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito)
    }
})
