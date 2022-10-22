const finalizarCompra = () => {
    contenedorProductos.innerHTML= ""
    contenedorProductos.innerHTML=`
    <div class="container">
        <form id="formulario" class="row g-3 mt-3">
            <div class="col6">
            <label for="from_name">Nombre:</label>
            <input type="text" class="form-control" id="nombre-usuario" placeholder="Escribe tu Nombre...">
            </div>
            <div class="col6">
                <label for="message">Apellido</label>
                <input type="text" class="form-control" id="apellido-usuario" placeholder="Escribe tu Apellido...">
            </div>
            <div class="col6">
                <label for="message">Tarjeta</label>
                <input type="text" class="form-control" id="tarjeta-usuario" placeholder="Escribe numero de tu Tarjeta...">
            </div>
            <div class="col6">
                <label for="message">Codigo Seguridad</label>
                <input type="text" class="form-control" id="codigo-seguridad-usuario" placeholder="Escribe el código de seguridad...">
            </div>
            <div class="col6">
                <label for="email_id">Tu Email:</label>
                <input type="text" class="form-control" name="email_id" id="email-usuario" value="${emailUsuario.email}">
            </div>
            <div class="col6">
                <button type="submit" id="button" class="btn btn-primary" value="Send Email">
                Comprar
                </button>
            </div>
        </form>
    </div>
    `;
    compraFinal()
}