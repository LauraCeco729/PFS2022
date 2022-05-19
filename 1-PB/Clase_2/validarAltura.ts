import * as rls from 'readline-sync';

let altura: number = rls.questionFloat("Ingrese su altura en cm: ");
console.log("Su altura es: ", altura);
if (altura >= 130) {
   console.log("Subir montaña rusa");
}
else {
   console.log("No subir montaña rusa");
}

