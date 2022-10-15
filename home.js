const botonHome = document.getElementById('home')

botonHome.addEventListener('click', ()=>{
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
    console.log(productos);
    contenedorProductos.innerHTML=""
    pintarProductosEnElDom(productos)
}