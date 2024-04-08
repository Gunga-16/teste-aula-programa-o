const adicionarBotao = document.getElementById('adicionar');
const listaObjetivos = document.getElementById('listaObjetivos');

window.onload = function() {
    const objetivos = JSON.parse(localStorage.getItem('objetivos')) || [];
    objetivos.forEach(objetivo => {
        const novoObjetivo = criarObjetivoElemento(objetivo);
        listaObjetivos.appendChild(novoObjetivo);
    });
}

function criarObjetivoElemento(objetivo) {
    const novoObjetivo = document.createElement('div');
    novoObjetivo.classList.add('objetivos');
    novoObjetivo.innerHTML = `<span>${objetivo}</span><button class="deletar">Deletar</button>`;
    
    novoObjetivo.querySelector('.deletar').onclick = function() {
        removerObjetivo(objetivo);
        novoObjetivo.remove();
    }

    return novoObjetivo;
}

function removerObjetivo(objetivo) {
    const objetivos = JSON.parse(localStorage.getItem('objetivos')) || [];
    const index = objetivos.indexOf(objetivo);
    if (index !== -1) {
        objetivos.splice(index, 1);
        localStorage.setItem('objetivos', JSON.stringify(objetivos));
    }
}

adicionarBotao.onclick = function() {
    const pessoa = document.getElementById('pessoa').value;
    const objetivo = document.getElementById('objetivo').value;
    const tempo = document.getElementById('tempo').value;

    const novoObjetivo = criarObjetivoElemento(`${objetivo} - ${pessoa}`);
    listaObjetivos.appendChild(novoObjetivo);

    const objetivos = JSON.parse(localStorage.getItem('objetivos')) || [];
    objetivos.push(`${objetivo} - ${pessoa}`);
    localStorage.setItem('objetivos', JSON.stringify(objetivos));
}
