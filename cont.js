const botoes = document.querySelectorAll('.objetivos');
const texto = document.querySelectorAll('.aba-conteudo');

const adicionarBotao = document.getElementById('adicionar');
const listaObjetivos = document.getElementById('listaObjetivos');

adicionarBotao.onclick = function() {
    const pessoa = document.getElementById('pessoa').value;
    const objetivo = document.getElementById('objetivo').value;
    const tempo = document.getElementById('tempo').value;

    const novoObjetivo = document.createElement('div');
    novoObjetivo.innerHTML = `<h3>${pessoa}</h3><p>${objetivo}</p><p>${tempo}</p>`;
    listaObjetivos.appendChild(novoObjetivo);
}
