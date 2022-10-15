const masCaro = document.getElementById('mas-caro')

masCaro.addEventListener('click', ()=>{
        console.log('MAS CAROO!');
        ordenarMasCaro()
    }
)

const ordenarMasCaro = async () =>{
    const productos = await obtenerProductos()
    productos.sort(
        function(a, b){
            return b.precio - a.precio
        }
    )
    console.log(productos);
    contenedorProductos.innerHTML=""
    pintarProductosEnElDom(productos)
}