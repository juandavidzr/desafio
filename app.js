var texto = null;
var textoE = null;
var textoD = null;

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML =  document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptar()
{
    
    texto = document.getElementById("txtEncriptado").value;

    textoE = texto.replaceAll("e","enter");
    textoE = textoE.replaceAll("i","imes");
    textoE = textoE.replaceAll("a","ai");
    textoE = textoE.replaceAll("o","ober");
    textoE = textoE.replaceAll("u","ufat");

    document.getElementById("txtDesencriptado").value = textoE;
    
}

function desencriptar()
{
    texto = document.getElementById("txtDesencriptado").value;

    textoD = texto.replaceAll("enter","e");
    textoD = textoD.replaceAll("imes","i");
    textoD = textoD.replaceAll("ai","a");
    textoD = textoD.replaceAll("ober","o");
    textoD = textoD.replaceAll("ufat","u");

    document.getElementById("txtEncriptado").value = textoD;
}