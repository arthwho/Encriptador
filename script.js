const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const aviso = document.querySelector("#aviso-texto");

document.getElementById("aparece").style.display = 'none';
document.getElementById("sol").style.display = 'none';
document.getElementById("logo-bege").style.display = 'none';
document.getElementById("img-escuro").style.display = 'none';

function copiar(){
    copyText = document.getElementById("mensagem");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    inputTexto.value = "";
}


function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    inputVerifica();
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
          stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

function inputVerifica(){
    if(inputTexto.value.trim() == ''){
        aviso.style.color = 'red';s
        return false;
    }
    else{
        aviso.style.color = 'black';
        document.getElementById("desaparece").style.display = 'none';
        document.getElementById("aparece").style.display = 'block';
        return true;
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("lua").style.display = 'none';
    document.getElementById("sol").style.display = 'inline-block';
    document.getElementById("logo-preto").style.display = 'none';
    document.getElementById("logo-bege").style.display = 'flex';
    document.getElementById("img-claro").style.display = 'none';
    document.getElementById("img-escuro").style.display = '';
 }

 function lightMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("lua").style.display = 'inline-block';
    document.getElementById("sol").style.display = 'none';
    document.getElementById("logo-preto").style.display = 'flex';
    document.getElementById("logo-bege").style.display = 'none';
    document.getElementById("img-escuro").style.display = 'none';
    document.getElementById("img-claro").style.display = '';
 }

 function reloadPage(){
    window.location.reload();
 }