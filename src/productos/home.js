const botonHome = document.getElementById('home')

botonHome.addEventListener('click', ()=>{
    nombreSeccion = 'Controladores Midi'
    etiquetaTitulo.innerHTML = `<h2>...${nombreSeccion}</h2>`
    console.log('HOME!');
    ordenarPorId()
    // location.reload()
})

const ordenarPorId = async () =>{
    const productos = await obtenerProductos()
    productos.sort(
        function(a, b){
            return a.id - b.id
        }
    )
    contenedorProductos.innerHTML=""
    pintarProductosEnElDom(productos)
}