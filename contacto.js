const botonContacto = document.getElementById('contacto')

botonContacto.addEventListener('click', ()=>{
    console.log('Contacto Ok');
    contenedorProductos.innerHTML= ""
    contenedorProductos.innerHTML=`
        <div class="container">
            <form class="row g-3 mt-3">
                <div class="col6">
                <label for="from_name">Tu nombre:</label>
                <input type="text" class="form-control" id="from_name" placeholder="Escribe tu Nombre...">
                </div>
                <div class="col6">
                    <label for="message">Mensaje</label>
                    <input type="text" class="form-control" name="message" id="message" placeholder="Escribe tu Mensaje...">
                </div>
                <div class="col6">
                    <label for="email_id">Tu Email:</label>
                    <input type="text" class="form-control" name="email_id" id="email_id" placeholder="Escribe tu Email...">
                </div>
                <div class="col6">
                    <label for="reply_to">reply_to</label>
                    <input type="text" class="form-control" name="reply_to" id="reply_to">
                </div>
                <div class="col6">
                    <button type="submit" class="btn btn-primary"> 
                    Enviar
                    </button>
                </div>
            </form>
        </div>
    `
    }
)