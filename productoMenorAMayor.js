const menorAMayor = () => {
    const menorAMayor = document.getElementById('mas-barato')
    menorAMayor.addEventListener('click', ()=>{
        console.log('MAS BARATO!');
        ordenarMasBarato()
    })
};
menorAMayor()

console.log(productos);

const ordenarMasBarato = () =>{
    // Ordenar Array de productos por menor precio pero no lo muestra en el DOM
    productos.sort(
        function(a, b){
            return a.precio - b.precio
        }
    )
    console.log(productos);
};




