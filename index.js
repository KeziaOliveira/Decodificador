
//Mudar parte do lado direito para mostrar texto
function exibirMensagem () {
    let placeholder = document.getElementById("mostrarMensagem");
    let resultado = document.getElementById("output__copiar");
    
    placeholder.style.display = "none";
    resultado.style.display = "flex";
};

//Função criptografar
function criptografar () {
    let convert = document.getElementById('input__text').value;
    
    if (/[^a-z\s]/g.test(convert)) {
        alert("Não são aceitas letras maiúsculas ou caracteres especiais, por favor insira outro texto");
        return;}
    
    let convertInput = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"    
    }

    convert = convert.replace(/a|e|i|o|u/gi, function(matched) {
    return convertInput[matched]
    });

    document.getElementById("output").innerHTML = convert;
};

//Função descriptografar
function descriptografar () {
    let desconvert = document.getElementById('input__text').value;

    if (/[^a-z\s]/g.test(desconvert)) {
        alert("Não são aceitas letras maiúsculas ou caracteres especiais, por favor insira outro texto");
        return;}

    let desconvertInput = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
    };
    
    desconvert = desconvert.replace(/ai|enter|imes|ober|ufat/gi, function(matched) {
        return desconvertInput[matched]
    });

    document.getElementById("output").innerHTML = desconvert;
};

//Copiar mensagem
function copiar() {
    let copiar = document.getElementById("output").innerHTML;
    navigator.clipboard.writeText(copiar)
    document.getElementById('input__text').value = ""
}
