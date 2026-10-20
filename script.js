function adicionarTarefa() {

    const input = document.getElementById("tarefaInput");

    const texto = input.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const lista = document.getElementById("listaTarefas");

    const tarefa = document.createElement("li");

    tarefa.innerHTML = `
        <span onclick="concluirTarefa(this)">${texto}</span>
        <button onclick="excluirTarefa(this)">Excluir</button>
    `;

    lista.appendChild(tarefa);

    salvarTarefas();
    atualizarContador();

    input.value = "";
}


function concluirTarefa(tarefa) {

    tarefa.style.textDecoration = "line-through";

    salvarTarefas();
}


function excluirTarefa(botao) {

    botao.parentElement.remove();

    salvarTarefas();

    atualizarContador();
}


function salvarTarefas() {

    const tarefas = [];

    document.querySelectorAll("#listaTarefas li").forEach(function(tarefa) {

        tarefas.push(tarefa.innerText);

    });

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}


function carregarTarefas() {

    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];

    const lista = document.getElementById("listaTarefas");

    tarefasSalvas.forEach(function(texto) {

        const tarefa = document.createElement("li");

        tarefa.innerHTML = `
            <span onclick="concluirTarefa(this)">${texto.replace("Excluir", "")}</span>
            <button onclick="excluirTarefa(this)">Excluir</button>
        `;

        lista.appendChild(tarefa);

    });
}


carregarTarefas();
atualizarContador();

function atualizarContador() {

    const quantidade = document.querySelectorAll("#listaTarefas li").length;

    const contador = document.getElementById("contador");

    if (quantidade === 1) {
        contador.textContent = "Você tem 1 tarefa";
    } else {
        contador.textContent = `Você tem ${quantidade} tarefas`;
    }
}
function alternarTema() {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {

        localStorage.setItem("tema", "escuro");

    } else {

        localStorage.setItem("tema", "claro");

    }
}
function carregarTema() {

    const tema = localStorage.getItem("tema");

    if (tema === "escuro") {

        document.body.classList.add("escuro");

    }
}
carregarTema();
