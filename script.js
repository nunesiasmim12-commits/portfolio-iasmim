const projetos = [
    {
        titulo: "Projeto 1",
        descricao: "Um site simples desenvolvido em HTML."
    },
    {
        titulo: "Projeto 2",
        descricao: "Projeto básico para praticar estrutura de páginas."
    }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(function(projeto) {
    const card = document.createElement("div");

    card.innerHTML = `
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
    `;

    lista.appendChild(card);
});

function mostrarMensagem() {
    alert("Mensagem enviada com sucesso!");
}
