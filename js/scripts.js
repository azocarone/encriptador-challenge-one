const textoIngresado = document.querySelector(".input-area");
const textoModificado = document.querySelector(".output-area");
const copiar = document.querySelector(".btn-copiar");
copiar.style.display = "none";

// Encriptación

function btnEncriptar() {
    const textoEncriptado = encriptar(textoIngresado.value);
    textoIngresado.value = "Ingrese el texto aquí";
    textoModificado.style.backgroundImage = "none";
    textoModificado.textContent = textoEncriptado;
    copiar.style.display = "block";
}

//

function encriptar(texto) {

    let encriptado = new String();
    let oneCaracter = new String();
    let i = new Number();

    encriptado = "";

    for (i = 0; i <= texto.length - 1; i++) {

        oneCaracter = texto.substr(i, 1);

        switch (texto.substr(i, 1)) {
            case "a":
                encriptado = encriptado.concat("ai");
                break;
            case "e":
                encriptado = encriptado.concat("enter");
                break;
            case "i":
                encriptado = encriptado.concat("imes");
                break;
            case "o":
                encriptado = encriptado.concat("ober");
                break;
            case "u":
                encriptado = encriptado.concat("ufat");
                break;
            default:
                encriptado = encriptado.concat(oneCaracter);
        }
    }
    return encriptado;
}

// Desencriptar

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textoIngresado.value);
    textoIngresado.value = "Ingrese el texto aquí";
    textoModificado.style.backgroundImage = "none";
    textoModificado.textContent = textoDesencriptado;
    copiar.style.display = "block";
}

//

function desencriptar(texto) {

    let desencriptado = new String();
    let oneCaracter = new String();
    let i = new Number();

    desencriptado = "";
    i = 0;

    while (i <= texto.length - 1) {

        oneCaracter = texto.substr(i, 1);

        if (texto.substr(i, 2) == "ai") {
            desencriptado = desencriptado.concat("a");
            i = i + 1;
        } else {
            if (texto.substr(i, 5) == "enter") {
                desencriptado = desencriptado.concat("e");
                i = i + 4;
            } else {
                if (texto.substr(i, 4) == "imes") {
                    desencriptado = desencriptado.concat("i");
                    i = i + 3;
                } else {
                    if (texto.substr(i, 4) == "ober") {
                        desencriptado = desencriptado.concat("o");
                        i = i + 3;
                    } else {
                        if (texto.substr(i, 4) == "ufat") {
                            desencriptado = desencriptado.concat("u");
                            i = i + 3;
                        } else {
                            desencriptado = desencriptado.concat(oneCaracter);
                        }
                    }
                }
            }
        }
        i = i + 1;
    }
    return desencriptado;
}

// Copiar

function btnCopiar() {
    navigator.clipboard.writeText(textoModificado.textContent);
    textoModificado.textContent = "";
    textoModificado.style.backgroundImage = "url('img/munheco.png')"; 
    copiar.style.display = "none";
    alert("Texto copiado en Clipboard")
}