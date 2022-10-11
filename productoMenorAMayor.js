const menorAMayor = document.getElementById('mas-barato')
const contenedorProductos = document.getElementById('producto-contenedor')

const cards = document.getElementsByClassName('card')

menorAMayor.addEventListener('click', ()=>{
    console.log('MAS BARATO!');
    ordenarMasBarato()
    }
)

const ordenarMasBarato = () =>{
    productos.sort(
        function(a, b){
            return a.precio - b.precio
        }
    )
    contenedorProductos.innerHTML=""
    mostrarProductos()
}