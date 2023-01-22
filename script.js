//a- ai
//e- enter
//i- imes
//o- ober
//u- ufat

function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("muheco").style.display = "none";
    document.getElementById("texto0").style.display = "none";
    document.getElementById("texto3").style.color = "black";
    document.getElementById("texto1").innerHTML = txtCifrado;
    document.getElementById("texto1").style.marginTop = "20px";
    
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    

    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    

    document.getElementById("muheco").style.display = "none";
    document.getElementById("texto0").style.display = "none";
    document.getElementById("texto3").style.color = "black";
    document.getElementById("texto1").innerHTML = txtCifrado;
    document.getElementById("texto1").style.marginTop = "20px";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function copy(){
var contenido = document.querySelector("#texto1");
contenido.select();
document.execCommand("copy");
alert("copiado");
}