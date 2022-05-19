import * as rls from 'readline-sync';

let nombreUsuario : string = rls.question("Ingrese su nombre de usuario: ");
let contraseña : string = rls.question ("Ingrese su contraseña: ");


if (nombreUsuario == 'Juan' && contraseña == 'claveJuan') {
    console.log ("Usuario registrado correctamente");
  }   
    else {
          console.log ("El sistema no tiene registrado ese Usuario");
}