document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
      duration: 1200,
    });

  const yearElement = document.querySelector('.year');
  yearElement.textContent = new Date().getFullYear();
});

const sendEmail = () => {
  event.preventDefault();
  const errors = document.querySelector('.errors');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const phone = document.querySelector('#phone');
  const message = document.querySelector('#message');
  if(name.value == '' || email.value == '' || phone.value == '' || message.value == ''){
    errors.classList.remove('hidden');
    errors.innerHTML = `
      <p>Todos los campos son obligatorios</p>
    `;

    setTimeout(() => {
      errors.innerHTML = '';
      errors.classList.add('hidden');
    }, 3000);
  }else{
    errors.innerHTML = '';
    if(!errors.classList.contains('hidden')){
      errors.classList.add('hidden');
    }
    fetch('https://javidev-emails.000webhostapp.com/emailTest.php', {
      method: 'POST',
      body: new URLSearchParams({
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value
      })
    }).then(data => data.json()).then(res => {
      if(res.status == 200){
        Swal.fire({
          title: res.msg,
          text: 'Si no te llegó el email revisa tu spam o vuelve a mandar el formulario.',
          icon: 'success'
        }).then(result => {
          if(result.isConfirmed) {
            name.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
          }
        })
      }
      return res;
    })
    .catch(err => {
      Swal.fire('¡Oops!', 'Ha ocurrido un error, porfavor, intente mas tarde', 'error');
    });
  }
}