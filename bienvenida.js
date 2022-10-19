const bienvenida = () => {
    setTimeout(() => {
        Swal.fire({
            title: 'Bienvenido',
            input: 'email',
            inputLabel: 'Enterate de nuestas Ofertas!',
            inputPlaceholder: 'Ingrese su email',
            showCancelButton: true,
            }).then((result) => {
                console.log(result.value);
                email(result.value)
                if(result.value!=undefined){
                    guardarEmail(emailUsuario)
                }
            })
    }, 1000);
}

let emailUsuario = {};

const email = (email) => {
    emailUsuario = {
        email: email,
    }
}