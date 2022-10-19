const whatsApp = () => {
    const whatsApp = document.getElementById('whats-app')
    whatsApp.addEventListener('click', ()=>{
        console.log('WhatsApp!');
        window.open('https://walink.co/52ef48', '_blank');
        // Swal.fire({
        //     title: '<strong><i class="fa-brands fa-whatsapp"></i></strong>',
        //     // icon: 'info',
        //     html:
        //       'Para enviarnos un WhatsApp clickea en siguiente enlace: ' +
        //       '<a href="https://walink.co/52ef48">WhatsApp!</a> ',
        //     // showCloseButton: true,
        //     showCancelButton: true,
        //     // focusConfirm: false,
        //     confirmButtonText:
        //       '<i class="fa fa-thumbs-up"></i> WhatsApp!',
        //     confirmButtonAriaLabel: 'Thumbs up, great!',
        //     cancelButtonText:
        //       '<i class="fa fa-thumbs-down"></i>',
        //     cancelButtonAriaLabel: 'Thumbs down'
        //   })
    })
}
whatsApp()