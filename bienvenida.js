const bienvenida = () => {
    setTimeout(() => {
        Swal.fire({
            title: 'Bienvenido',
            input: 'email',
            inputLabel: 'Enterate de nuestras mejores ofertas',
            inputPlaceholder: 'Ingrese su correo',
            showCancelButton: true,
            })
    }, 1000);
}

