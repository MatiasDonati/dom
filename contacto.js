const botonContacto = document.getElementById('contacto')

botonContacto.addEventListener('click', ()=>{
    console.log('Contacto Ok');
    contenedorProductos.innerHTML= ""
    contenedorProductos.innerHTML=`
        <div class="container">
            <form class="row">
                <div class="col6">
                    <input type="email" class="form-control" id="emailInput" placeholder="Escribe tu Email...">
                </div>
            </form>
        </div>
    `
    }
)