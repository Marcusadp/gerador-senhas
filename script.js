let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button-generate");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let botaoBaixa = document.querySelector("#botao-baixa");
let botaoMedia = document.querySelector("#botao-media");
let botaoAlta = document.querySelector("#botao-alta");

let explicacao = document.querySelector("#span-explicacao")

let charsetLetras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charsetNumeros = "1234567890";
let charsetNumerosLetras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
let charsetNumerosLetrasSimbolos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&"
let charsetSimbolos = "!@#$%&*?"
let novaSenha = "";

let baixaselected = false
let mediaselected = false
let altaselected = false

let complexidadeSelecionada = 0

sizePassword.innerHTML = sliderElement.value;


slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}


function complexBaixa(){
    explicacao.textContent = "Apenas Letras"
    complexidadeSelecionada = 1
    
}

function complexMedia(){
    explicacao.textContent = "Letras e Numeros"
    complexidadeSelecionada = 2
}

function complexAlta(){
    explicacao.textContent = "Letras, Números e Símbolos"
    complexidadeSelecionada = 3 
}

function generatePassword() {
    let charset = ""
    if(complexidadeSelecionada==0){
        alert("Selecione uma complexidade")
    }
    else{
        console.log(complexidadeSelecionada)
        switch(complexidadeSelecionada) {
            case 1:
                charset = charsetLetras
                console.log("caso1")
                break;
            case 2:
                charset = charsetNumerosLetras
                console.log("caso2")
                break;
            case 3:
                charset = charsetNumerosLetrasSimbolos
                console.log("caso3")
                break;
        }
        console.log(charset)
        let pass = "";
        
        for(i = 0, n = charset.length; i < sliderElement.value; i++){
            pass += charset.charAt(Math.floor(Math.random() * n));
        }
        containerPassword.classList.remove("hide");
        password.innerHTML = pass;
        novaSenha = pass;
    }
    
}

function copyPassword(){
    alert("Senha copiada!")
    navigator.clipboard.writeText(novaSenha)
}

//botaoBaixa.classList.replace("background-color: background-color: #DFDFDF;", "background-color: background-color: #3e91d1;")



