const guardarCarritoStorage = (carritoDeCompras) => {
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
};

const guardarEmail = (emailUsuario) => {
 localStorage.setItem('email', JSON.stringify(emailUsuario))
}

const obtenerEmail = () => {
    const emailStorage = JSON.parse(localStorage.getItem('email'));
    return emailStorage;
}
