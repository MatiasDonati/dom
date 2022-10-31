const menorAMayor = document.getElementById('mas-barato')
const contenedorProductos = document.getElementById('producto-contenedor')
const cards = document.getElementsByClassName('card')

menorAMayor.addEventListener('click', ()=>{
    nombreSeccion = 'Controladores Midi'
    etiquetaTitulo.innerHTML = `<h2>...${nombreSeccion}</h2>`
    console.log('MAS BARATO!');
    ordenarMasBarato()
    }
)

const ordenarMasBarato = async () =>{
    const productos = await obtenerProductos()
    productos.sort(
        function(a, b){
            return a.precio - b.precio
        }
    )
    contenedorProductos.innerHTML=""
    pintarProductosEnElDom(productos)
}