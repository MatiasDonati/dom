const bienvenida = () => {
    emailStorage = obtenerEmail()
    if(emailStorage==null || emailUsuario.email==""){
        setTimeout(() => {
            Swal.fire({
                title: 'Bienvenido',
                input: 'email',
                inputLabel: `Ingresa tu correo para el sorteo de un Minilab Edicion Especial!\nEnterate de nuestas Ofertas!🎹🎹`,
                inputPlaceholder: 'Ingrese su email',
                imageUrl: `public/img/4.webp`,
                showCancelButton: true,
                }).then((result) => {
                    console.log(result.value);
                    email(result.value)
                    if(result.value==undefined){
                        emailUsuario.email = ""
                    }
                    guardarEmail(emailUsuario)
                })
        }, 1000);
    }
}

let emailUsuario = {};

const email = (email) => {
    emailUsuario = {
        email: email,
    }
}

if(localStorage.getItem('email')){
    emailUsuario = obtenerEmail()
}