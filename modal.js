const modalContenedor = document.querySelector('.modal-container')
const abrirCarrito = document.getElementById('open')
const cerrarCarrito = document.getElementById('cerrar')
const modalCarrito = document.querySelector('.modal-carrito')
const carritoContenedor = document.getElementById('carrito-contenedor');

abrirCarrito.addEventListener('click', ()=> {
    modalContenedor.classList.toggle('modal-active')
    console.log("modal activado !");
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
                Swal.fire(
                    'Eliminado!',
                    'El producto se elimino de su compra.',
                    'success'
                )
                eliminarProducto(e.target.parentNode.value);
            }
        })
    }
    else if (e.target.classList.contains('agregar-uno')){
        console.log(`Agregar un producto value: ${e.target.value}`);
        Toastify({
            text: `Agregaste un producto`,
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
                text: `Eliminaste un producto`,
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
