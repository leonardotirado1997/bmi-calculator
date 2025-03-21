var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
    if (event.target.classList.contains("fa-trash-alt")) {
    event.target.parentNode.parentNode.parentNode.classList.add("fadeOut");
    
    var btnExcluir = document.querySelector("#excluir");

    setTimeout(() => {
        event.target.parentNode.parentNode.parentNode.remove();
    }, 1000);

    }   
    
})