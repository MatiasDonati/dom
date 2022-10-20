const enviarMail = () => {
    const btn = document.getElementById('button');

    document.getElementById('form').addEventListener('submit', function(event) {
       event.preventDefault();

       btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_s4itemf';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Email Enviado!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
        }
    );
};