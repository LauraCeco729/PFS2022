'uso estricto';

let boton = document.getElementById("btn");
let cBox = document.getElementById("cbox1");
let tEdit = document.getElementById("textEdit1");
let myDiv = document.getElementById("divisor");

let checkBox1 = false;

cBox.addEventListener('click', ()=>{
    checkBox1 = cBox.checked; 
})

boton.addEventListener('click', () => {
    let localLabel;
    if(checkBox1)
    {
        localLabel = document.createElement("h1");
        localLabel.style.color = 'red';
    }
    else{
        localLabel = document.createElement("h5");
        localLabel.style.color = 'blue';
    }
    localLabel.innerHTML = tEdit.value;
    myDiv.replaceChildren(localLabel);
});



