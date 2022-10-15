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
            })
    }, 1000);
}

const email = (email) => {
    emailUsuario = email
}




