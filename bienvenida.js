const bienvenida = () => {
    setTimeout(() => {
        Swal.fire({
            title: 'Bienvenido',
            input: 'email',
            inputLabel: 'Enterate de nuestras mejores ofertas',
            inputPlaceholder: 'Ingrese su correo',
            showCancelButton: true,
            }).then((result) => {
                console.log(result.value);
            })
    }, 1000);
}

