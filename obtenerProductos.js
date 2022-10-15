const obtenerProductos = async () => {
    try {
        const response = await fetch('stock.json');
        const data = await response.json();
        console.log(data);

        return data;

    } catch (error) {
        console.log('Hubo un error: ', error);
    };
};

// Dnde pinto los productos llamo a esta funcion dentro de una variable llamada productos asi me queda igual q los otros
// y a la funcion gral le pongo async y a la otra await ... ver ejemplo del shopping

