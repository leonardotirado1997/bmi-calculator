var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        exibeMensagemErro(erros);
        return;
    }

    if (!paciente.altura || !paciente.gordura || !paciente.nome || !paciente.peso) {
    var validacao = document.querySelector("#MsgErro")
    
    validacao.textContent = "Erro: TODOS OS CAMPOS DEVEM SER PREENCHIDOS!";

    return;
        
    }

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
})

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTd(dado) {
    var td = document.createElement("td");
    td.textContent = dado;

    return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");

    pacienteTr.appendChild(montaTd(paciente.nome));
    pacienteTr.appendChild(montaTd(paciente.peso));
    pacienteTr.appendChild(montaTd(paciente.altura));
    pacienteTr.appendChild(montaTd(paciente.gordura));
    pacienteTr.appendChild(montaTd(paciente.imc));

    return pacienteTr;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("Nome é obrigatório!");
    }
    if (paciente.altura.length == 0){
        erros.push("Altura é obrigatório!");
    }
    if (paciente.peso.length == 0){
        erros.push("Peso é obrigatório!");
    }
    if (paciente.gordura.length == 0){
        erros.push("Gordura é obrigatório!");
    }
    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido.");
    }
    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    }

    return erros;
    
}

function exibeMensagemErro(erros){
    var ul = document.querySelector("#MsgErro");
    ul.innerHTML = "";
    
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}