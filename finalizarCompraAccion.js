const compraFinal = () => {

    const botonCompraFinal = document.getElementById('formulario')
    botonCompraFinal.addEventListener('submit', (e) => {
        e.preventDefault()

        const nombreUsuario = document.getElementById('nombre-usuario')
        const apellidoUsuario = document.getElementById('apellido-usuario')
        const tarjetaUsuario = document.getElementById('tarjeta-usuario')
        const codigoSeguridadUsuario = document.getElementById('codigo-seguridad-usuario')
        const emailFinalUsuario = document.getElementById('email-usuario')

        if(nombreUsuario.value==""){
            Swal.fire('Nombre sin completar!', '', 'error')
        }else if (apellidoUsuario.value==""){
            Swal.fire('Apellido sin completar!', '', 'error')
        }else if(tarjetaUsuario.value=="" || tarjetaUsuario.value.length != 16){
            Swal.fire('El numero de tarjeta debe ser de 16 números', '', 'error')
        }else if(codigoSeguridadUsuario.value=="" || codigoSeguridadUsuario.value.length != 3){
            Swal.fire('El código de seguridad debe tener 3 números', '', 'error')
        }else if(emailFinalUsuario==""){
            Swal.fire('Correo sin completar!', '', 'error')
        }else{
        Swal.fire({
            title: `<p>Felicitaciones ${nombreUsuario.value} ${apellidoUsuario.value}\n</p>\nSu compra fue realizada con éxito!`,
            icon: 'success',
            confirmButtonText: 'Ok',
        }).then((result) => {
            if(result.isConfirmed){
                    ordenarPorId()
            }
            carritoDeCompras=[]
            emailUsuario=null
            guardarEmail(emailUsuario)
            guardarCarritoStorage(carritoDeCompras);
            pintarCarrito(carritoDeCompras);
        })
        }
    })
}