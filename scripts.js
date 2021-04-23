
// side

function openNav() {
	document.getElementById("mySidebar").style.width = "300px";	
}
  

  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
}

//   go top

window.onscroll = function(){
	if(document.documentElement.scrollTop > 100){
		document.querySelector('.go-top-container')
		.classList.add('show-b');
	}else{
		document.querySelector('.go-top-container')
		.classList.remove('show-b');
	}
}

// contact form
//Firebase init
firebase.initializeApp(firebaseConfig);

// referencia a contactInfo
let contactInfo = firebase.database().ref("contact");

// event listener del submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   input de lo valores
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}


// success

function sendAnimation(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Mensaje enviado!'
    })
  }

  // error
  function errorAnimation(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: 'No se pudo enviar el mensaje'
    })
  }



// Guarga el mensaje en firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push()
  sendAnimation()
  newContactInfo.set({
    name,
    email,
    message
  })
  .catch(() => errorAnimation());
}

