'uso estricto';

let teNombre = document.getElementById("textEdit1");
let teApellido = document.getElementById("textEdit2");
let teCorreo = document.getElementById("textEdit3");
let teConsulta = document.getElementById("textEdit4");
let boton = document.getElementById("btn");


boton.addEventListener('click', () => {
    let nombreBool = true;
    let apellidoBool = true;
    let correoBool = true;
    let consultaBool = true;

    let nombre = new String(teNombre.value);
    let apellido = new String(teApellido.value);
    let correo = new String(teCorreo.value);
    let consulta = new String(teConsulta.value);

    if (nombre.length < 3)
        nombreBool = false;
    if (apellido.length < 3)
        apellidoBool = false;
    if (!ValidateEmail(correo))
        correoBool = false;
    if (consulta.length == 0)
        consultaBool = false;

    let showError = new String();
    showError = '';
    if (nombreBool === true && apellidoBool === true && correoBool === true && consultaBool === true) {
        alert("Consulta enviada con éxito!")
    }
    else {
        if (nombreBool)
            showError = "Nombre incorrecto.\n";
        if (apellidoBool)
            showError += "Apellido incorrecto.\n";
        if (correoBool)
            showError += "Correo inválido.\n";
        if (consultaBool)
            showError += "Consulta vacia."
        alert(showError);
    }
});

function ValidateEmail(inputText) {
    var email = new String(inputText);
    var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(mailformat)) {
        console.log('email correcto');
        return true;
    }
    else {
        console.log('email incorrecto');
        return false;
    }
}
