const etiquetaTitulo = document.getElementById('titulo')
etiquetaTitulo.innerHTML = `<h2>...${nombreSeccion}</h2>`

const mostrarProductos = async () => {

    const contenedorProductos = document.getElementById('producto-contenedor')

    const productos = await obtenerProductos()

    pintarProductosEnElDom(productos)

};

const pintarProductosEnElDom = (productos) => {
    productos.forEach(producto => {
        // DESESTRUCTURACION DE OBJETO
        const { img, nombre, desc, precio, id } = producto
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${nombre}</h5>
                                <p class="card-text">Descripción:  ${desc}</p>
                                <p class="card-text">Precio:$ ${precio}</p>
                                <button class="btn btn-primary" id=boton${id}>Comprar</button>
                            </div>
                        </div>`
        contenedorProductos.appendChild(div)
        botonComprar(producto)
    })
}

const botonComprar = ({id, nombre}) => {
    const boton = document.getElementById(`boton${id}`);
        boton.addEventListener('click', ()=>{
            Swal.fire({
                icon: 'success',
                title: `Felicitaciones!`,
                text: 'Ya casi es tuyo.',
                // position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                imageUrl: `src/img/${id}.webp`,
                imageWidth: 300,
                imageHeight: 150,
                imageAlt: 'Custom image',
                duration: 1000
            });
            // Toastify({
            //     text: 'Producto agregado al Carrito!',
            //     duration: 3000
            // }).showToast();
            Toastify({
                text: `${nombre}`,
                duration: 3000,
                position: 'left',
                gravity: 'bottom',
                style: {
                    background: 'linear-gradient(to right, #00b09b, #96c92d)'
                },
                // destination:'https://www.google.com.ar/',
                newWindow: true,
            }).showToast();
        carrito(id)
        })
}