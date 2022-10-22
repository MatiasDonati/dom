const modalContenedor = document.querySelector('.modal-container')
const abrirCarrito = document.getElementById('open')
const cerrarCarrito = document.getElementById('cerrar')
const modalCarrito = document.querySelector('.modal-carrito')
const carritoContenedor = document.getElementById('carrito-contenedor');
const comprar = document.getElementById('compra-final')


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
    console.log(emailStorage);
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
            /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                // Aca meter un Multiple Input !
                    Swal.fire({
                        title: 'Ingrese su Nombre',
                        input: 'text',
                        inputLabel: 'Ingrese su nombre por favor',
                        inputPlaceholder: 'Ingrese su nombre',
                        showCancelButton: false,
                        }).then((result) => {
                            nombre(result.value)
                            emailStorage.email=="" ? Swal.fire(`<p>${nombreUsuario}</p>\nSu compra fue realizada con éxito!`, '', 'success') : Swal.fire(`<p>${nombreUsuario}\nCorreo: ${emailStorage.email}</p>\nSu compra fue realizada con éxito!`, '', 'success')
                            carritoDeCompras=[]
                            emailUsuario=null
                            guardarEmail(emailUsuario)
                            guardarCarritoStorage(carritoDeCompras);
                            pintarCarrito(carritoDeCompras);
                            })
                        }
                    })
                }else{
                    Swal.fire('Debera seleccionar un producto.', '', 'error')
            }
    }
);