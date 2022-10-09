const masCaro = document.getElementById('mas-caro')

masCaro.addEventListener('click', ()=>{
        console.log('MAS CAROO!');
        ordenarMasCaro()
    }
)

const ordenarMasCaro = () =>{
    productos.sort(
        function(a, b){
            return b.precio - a.precio
        }
    )
    contenedorProductos.innerHTML=""

    mostrarProductos()
}