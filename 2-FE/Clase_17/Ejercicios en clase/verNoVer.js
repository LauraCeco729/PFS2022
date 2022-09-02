'uso estricto';
let btnVerNoVer = document.querySelectorAll('.btnVerNoVer');
// btnVerNoVer.addEventListener('clic', () => {
// si (btnVerNoVer.innerHTML=='Ver') {
// btnVerNoVer.innerHTML='No Ver';
// } más {
// btnVerNoVer.innerHTML='Ver';
// }
// btnVerNoVer.nextElementSibling.classList.toggle('ocultar');  
// });
for (sea i = 0; i < btnVerNoVer.longitud; i++) {
    btnVerNoVer[i].addEventListener('clic', VerNoVer);
}
función VerNoVer() {
    if (this.innerHTML=='Ver') {
        this.innerHTML='No Ver';
    } más {
        this.innerHTML='Ver';
    }
    this.nextElementSibling.classList.toggle('ocultar');  
}
// para (sea i = 0; i < btnVerNoVer.longitud; i++) {
// btnVerNoVer[i].addEventListener('clic', () => {
// if (this.innerHTML=='Ver') {
// this.innerHTML='No Ver';
// } más {
// this.innerHTML='Ver';
// }
// this.nextElementSibling.classList.toggle('ocultar');  
// });
// }