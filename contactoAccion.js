const enviarMail = () => {
    const btn = document.getElementById('button');

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        const nombreContacto = document.getElementById('from_name')
        const mensajeContacto = document.getElementById('message')
        const correoContacto = document.getElementById('email_id')

        if(nombreContacto.value==""){
            Swal.fire('Nombre sin completar!', '', 'error')
        }else if (mensajeContacto.value==""){
            Swal.fire('Mensaje sin completar!', '', 'error')
        }else if(correoContacto.value==""){
            Swal.fire('Correo sin completar!', '', 'error')
        }
        else{
            btn.value = 'Sending...';

            const serviceID = 'default_service';
            const templateID = 'template_s4itemf';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                        btn.value = 'Send Email';
                        Swal.fire(`Gracias ${nombreContacto.value}!\nEl correo fue enviado con éxito!`, '', 'success')
                        emailUsuario = {
                            email: ""
                        }
                        guardarEmail(emailUsuario)
                        //alert('Email Enviado!');
                }, (err) => {
                    btn.value = 'Send Email';
                    Swal.fire('Se ha producido un error.', '', 'error')
                    //alert(JSON.stringify(err));
                });
            }
        }
    );

};
