// Cálculo do IMC do paciente
var pacientes = document.querySelectorAll(".paciente");
 
for (var i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
 
    var tdImc = paciente.querySelector(".info-imc");
 
    var alturaEhValida = true;
    var pesoEhValido = true;
 
    var peso = tdPeso.textContent;
    if (peso <= 0 || peso > 600) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!"
    }
 
    var altura = tdAltura.textContent;
    if (altura <= 0 || altura > 3) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
    }
 
    if (!pesoEhValido && !alturaEhValida) {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
 
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}
 
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}
 
 
form.js:
 
var botaoAdicionar = document.querySelector("#adicionar-paciente");
 
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
 
    var form = document.querySelector("#form-adiciona");
 
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
 
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
 
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);
 
    var pacienteTr = document.createElement("tr");
 
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
 
    var tabela = document.querySelector("#tabela-pacientes");
 
    tabela.appendChild(pacienteTr);
 
    form.reset();
})
 
principal.js:
 
// Alteração do título da página
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";