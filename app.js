const mostrarProductos = () => {

    const etiquetaTitulo = document.getElementById('titulo')
    etiquetaTitulo.innerHTML = `<h2>....${nombreSeccion}</h2>`

    const contenedorProductos = document.getElementById('producto-contenedor')
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción:  ${producto.desc}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                            </div>
                        </div>`
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', ()=>{
            console.log('hola')
            if(carritoDeCompras.includes(producto)){
                alert(`El ${producto.nombre} ya se encuentra en su carrito, SE SUMA CANTIDAD`)
                producto.cantidad++
            }else{
                alert(`Se agrego ${producto.nombre} al carrito`)
            }
            carrito(producto.id)
        })
    })
};
// mostrarProductos()