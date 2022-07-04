// const boton = document.querySelector('#boton');
// boton.addEventListener('click', function() {
//     console.log('diste click');
// });


const boton = document.querySelector('#boton');
boton.addEventListener('click' , () => {
    Notification.requestPermission()
    .then(resultado => console.log('el resultado es  ${resultado}'))
})

if (Notification.permission =='granted'){
    new Notification('Notificación TG', {
        icon: 'img/oms.png' ,
        body: 'Notificación'
    })
}