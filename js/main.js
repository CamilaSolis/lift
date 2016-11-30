
function validateForm(){
//Password
	valpass = document.getElementById("input-password").value;
	if( valpass == null || valpass.length < 6 || /^\s+$/.test(valpass)) {
		alert("Su password debe tener minimo 6 caracteres");
	}
	if (valpass==="password" || valpass==="123456" || valpass==="098754") {
		alert("Su password no puede ser 'password', '123456' ni '098754'")
	}

//email
valemail = document.getElementById("input-email").value;
	if( !(/\S+@\S+\.\S+/.test(valemail)) ) {
		alert("Correo no valido");
	}
}
//boton
var element = document.querySelector(".form-signup");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});