
const botonContacto = document.getElementById('contacto')

botonContacto.addEventListener('click', ()=>{

    console.log('Contacto Ok');
    const etiquetaTitulo = document.getElementById('titulo')
    nombreSeccion = 'Contactanos'
    etiquetaTitulo.innerHTML = `<h2>...${nombreSeccion}</h2>`
    contenedorProductos.innerHTML= ""
    contenedorProductos.innerHTML=`
        <div class="container">
            <form id="form" class="row g-3 mt-3">
                <div class="col6">
                <label for="from_name">Tu nombre:</label>
                <input type="text" class="form-control" id="from_name" placeholder="Escribe tu Nombre...">
                </div>
                <div class="col6">
                    <label for="message">Mensaje</label>
                    <textarea type="text" class="form-control" name="message" id="message" placeholder="Escribe tu Mensaje..."></textarea>
                </div>
                <div class="col6">
                    <label for="email_id">Tu Email:</label>
                    <input type="text" class="form-control" name="email_id" id="email_id" value="${emailUsuario.email}">
                </div>
                <div class="col6" id="divButton">
                    <button type="submit" id="button" class="btn btn-primary" value="Send Email">
                    Enviar
                    </button>
                </div>
            </form>
        </div>
    `;
    enviarMail()
});



