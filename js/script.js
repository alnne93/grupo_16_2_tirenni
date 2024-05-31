

/* 
let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let apellidoInput = document.getElementById("apellidoInput");
let title = document.getElementById("title");

signIn.onclick = function () {
    nameInput.style.maxHeight = "0";
    apellidoInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}
signUp.onclick = function () {
    nameInput.style.maxHeight = "60px";
    apellidoInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}
*/
// Validacion

function validar() {
    console.log('** Validación **');
    const mail = 'admin@admin.com';
    const password = '1234';

    var obtenerMail = document.getElementById('mail').value;
    var obtenerPass = document.getElementById('pwd').value; 

    console.log("mail: " + obtenerMail);
    console.log("password: " + obtenerPass); 

    if (mail === obtenerMail && password === obtenerPass) {
        alert('Credenciales Correctas');
        redireccionar(); 
    } else {
        alert('Credenciales Incorrectas');
    }
}

function redireccionar() { 
    window.location.replace("./pages/index2.html"); 
}
