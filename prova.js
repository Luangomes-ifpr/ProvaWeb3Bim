const frm = document.querySelector ("Form");
const respNumeros = document.querySelector ("span");
const respLista = document.querySelector ("h3");

const numeros = [];

frm.addEventListener("submit", (e) =>{ 
    e.preventDefault();

    const numero = frm.inNumero.value;
    numeros.push(numero);
    numeros.sort((a,b) => a - b);
    console.log(numeros)

    let lista = "";

    for(let i=0; i<numeros.length;i++){
        lista += `${numeros[i]}\n`
    }

    respLista.innerText = lista;
    frm.inNumero.value = "";
    frm.inNumero.focus();
})