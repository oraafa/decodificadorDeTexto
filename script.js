const textArea= document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');
const btnCriptografar = document.querySelector('.btn-encriptar');
const btnDescriptografar = document.querySelector('.btn-desencriptar');
const btnCopiar = document.querySelector('.btn-copiar');


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    mensagem.classList.add('ativo')
    textArea.value = ''
}

function btnDesencriptar() {
    const textoDesencriptado = descriptar(mensagem.value)
    mensagem.value = textoDesencriptado;
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [ ['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat'] ];

    stringEncriptada = stringEncriptada.toLowerCase()

    for( let i = 0; i < matrizCodigo.length; i ++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replace(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function descriptar(stringDesencriptada) {
    let matrizCodigo = [ ['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat'] ];

    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replace(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}


btnCriptografar.addEventListener('click', btnEncriptar)
btnDescriptografar.addEventListener('click', btnDesencriptar)

btnCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(mensagem.value)
})
