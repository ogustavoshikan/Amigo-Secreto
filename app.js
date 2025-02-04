//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array que armazenará os nomes dos amigos
let Amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let nomeAmigo = document.getElementById("amigo").value;

    // Validação para garantir que o campo não está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    Amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";

    // Atualiza a lista de amigos exibida na página
    atualizarListaDeAmigos();
}

// Função para atualizar a lista de amigos na página
function atualizarListaDeAmigos() {
    // Seleciona o elemento da lista onde os amigos serão exibidos
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista existente
    lista.innerHTML = "";

    // Percorre o array de amigos e cria um item de lista <li> para cada nome
    for (let i = 0; i < Amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = Amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (Amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * Amigos.length);

    // Obtem o nome sorteado
    let amigoSorteado = Amigos[indiceAleatorio];

    // Exibe o resultado na lista de resultados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
