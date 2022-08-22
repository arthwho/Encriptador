const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const aviso = document.querySelector("#aviso-texto")

function copiar(){
    copyText = document.getElementById("mensagem");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}


function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    //document.style.backgroundImage = "none"
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
        return true;
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 function reloadPage(){
    window.location.reload();
 }