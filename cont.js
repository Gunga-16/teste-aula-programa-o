const adicionarBotao = document.getElementById('adicionar');
const listaObjetivos = document.getElementById('listaObjetivos');

adicionarBotao.onclick = function() {
    const pessoa = document.getElementById('pessoa').value;
    const objetivo = document.getElementById('objetivo').value;
    const tempo = document.getElementById('tempo').value;

    const novoObjetivo = document.createElement('button');
    novoObjetivo.classList.add('objetivos');
    novoObjetivo.innerHTML = `${objetivo} - ${pessoa}`;
    listaObjetivos.appendChild(novoObjetivo);

    novoObjetivo.onclick = function() {
        const index = Array.from(listaObjetivos.children).indexOf(novoObjetivo);
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove('ativo');
            texto[j].classList.remove('ativa');
        }
        novoObjetivo.classList.add('ativo');
        texto[index].classList.add('ativa');
    }
}
