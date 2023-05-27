function validaEntrada(evt) {
    let code = evt.keyCode;
    if (code >= 97 && code <= 122 || code == 32 || code == 8 || code == 13) {
        return true;
    } else {
        return false;
    }
}

function encriptar() {
    let entrada = document.getElementById("entrada").value,
        resultado = document.getElementById("resultado"),
        textoEncriptado = '',
        long = entrada.length;
    for (i=0; i<long; i++) {
        sigLetra = entrada[i];
        switch (sigLetra) {
            case 'a':
                letra = 'ai';
                break;
            case 'e':
                letra = 'enter';
                break;
            case 'i':
                letra = 'imes';
                break;
            case 'o':
                letra = 'ober';
                break;
            case 'u':
                letra = 'ufat';
                break;
            default:
                letra = sigLetra;
        }
        textoEncriptado += letra;
    }
    resultado.textContent = textoEncriptado;
    document.getElementById("boton-copiar").style.display = "block";
}

function desencriptar() {
    let entrada = document.getElementById("entrada").value,
        resultado = document.getElementById("resultado"),
        textoEncriptado = '',
        long = entrada.length,
        i = 0;
    do {
        sigLetra = entrada[i];
        switch (sigLetra) {
            case 'a':
                suma = 2;
                break;
            case 'e':
                suma = 5;
                break;
            case 'i':
                suma = 4;
                break;
            case 'o':
                suma = 4;
                break;
            case 'u':
                suma = 4;
                break;
            default:
                suma = 1;
        }
        textoEncriptado += sigLetra;
        i = i + suma;
    } while (i < long);
    resultado.textContent = textoEncriptado;
    document.getElementById("boton-copiar").style.display = "block";
}

function copiar() {
    let resultado = document.getElementById("resultado").value;
    document.getElementById("resultado").textContent = "";
    document.getElementById("entrada").value = resultado;
    document.getElementById("boton-copiar").style.display = "none";
}

function limpiar() {
    document.getElementById("entrada").value = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("boton-copiar").style.display = "none";
    document.getElementById("entrada").focus();
}