const inputTarjeta = document.getElementById("inputTarjeta");
const inputFecha = document.getElementById("inputFecha");
const inputCVV = document.getElementById("inputCVV");

const mascaraNumero ="####-####-####-####";
const mascaraFecha ="##-##";
const mascaraCVV ="###";


let TarjetaNumero=[];
let FechaNumero=[];
let cvvNumero=[];

inputTarjeta.addEventListener("keydown",(e) =>{
    if(e.key ==="Tab"){
        return;
    }
    e.preventDefault();
    ingresoDatos(mascaraNumero,e.key,TarjetaNumero);
    inputTarjeta.value = TarjetaNumero.join("");

});

inputFecha.addEventListener("keydown",(e) =>{
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();

    ingresoDatos(mascaraFecha,e.key,FechaNumero);4

});

inputCVV.addEventListener("keydown",(e) =>{
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();

    ingresoDatos(mascaraCVV,e.key,cvvNumero);
    inputCVV.value =cvvNumero.join("");

});

function ingresoDatos(mascara,key,arreglo){
    let numero =["0","1","2","3","4","5","6","7","8","9"];

    if(key ==="Backspace" && arreglo.length >0){
        arreglo.pop();
        return;
    }

    if(numeros.includes(key) && arreglo.length + 1 <=mascara.length){
        if(mascara[arreglo.length] === "-"|| mascara[arreglo.length] ==="/"){
         arreglo.push(mascara[arreglo.length],key);   
        }else{
            arreglo.push(key);
        }
    }
};
