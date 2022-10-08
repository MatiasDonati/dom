const modalContenedor = document.querySelector('.modal-container')
const abrirCarrito = document.getElementById('open')
const cerrarCarrito = document.getElementById('cerrar')
const modalCarrito = document.querySelector('.modal-carrito')
const carritoContenedor = document.getElementById('carrito-contenedor');


abrirCarrito.addEventListener('click', ()=> {
    modalContenedor.classList.toggle('modal-active')
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
            if(result.isConfirmed){
                Swal.fire(
                    // Eliminar Producto!
                    'Eliminado ea ea ea .. compralo cagón!',
                    'El producto se elimino paaa',
                    'success'
                )
            }
        })
        eliminarProducto(e.target.parentNode.value);
    }
    else if (e.target.classList.contains('agregar-uno')){
        console.log(`Agregar un producto value: ${e.target.value}`);

        agregarProducto(e.target.value)
    }
    else if(e.target.classList.contains('eliminar-uno')){
        console.log(`Eliminar un producto value: ${e.target.value}`);
        eliminarUno(e.target.value)
    }
});
