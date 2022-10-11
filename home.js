const botonHome = document.getElementById('home')

botonHome.addEventListener('click', ()=>{
    ordenarPorId()
    mostrarProductos()
    // location.reload()
})

const ordenarPorId = () =>{
    productos.sort(
        function(a, b){
            return a.id - b.id
        }
    )
    contenedorProductos.innerHTML=""
}