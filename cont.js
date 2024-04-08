const adicionarBotao = document.getElementById('adicionar');
const listaObjetivos = document.getElementById('listaObjetivos');
const descricao = document.getElementById('descricao');

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
    novoObjetivo.innerHTML = `<span>${objetivo.texto}</span><button class="deletar">Deletar</button>`;
    
    novoObjetivo.onclick = function() {
        mostrarDescricao(objetivo.descricao);
    }

    novoObjetivo.querySelector('.deletar').onclick = function(event) {
        event.stopPropagation(); // Impede que o clique no botão propague para o elemento pai (o objetivo)
        removerObjetivo(objetivo);
        novoObjetivo.remove();
    }

    return novoObjetivo;
}

function mostrarDescricao(descricaoObjetivo) {
    descricao.innerHTML = `<p>${descricaoObjetivo}</p>`;
}

function removerObjetivo(objetivo) {
    const objetivos = JSON.parse(localStorage.getItem('objetivos')) || [];
    const index = objetivos.findIndex(obj => obj.texto === objetivo.texto);
    if (index !== -1) {
        objetivos.splice(index, 1);
        localStorage.setItem('objetivos', JSON.stringify(objetivos));
    }
}

adicionarBotao.onclick = function() {
    const pessoa = document.getElementById('pessoa').value;
    const objetivo = document.getElementById('objetivo').value;
    const tempo = document.getElementById('tempo').value;
    const descricao = document.getElementById('descricaoObjetivo').value;

    const novoObjetivo = {
        texto: `${objetivo} - ${pessoa}`,
        descricao: descricao
    };

    const novoObjetivoElemento = criarObjetivoElemento(novoObjetivo);
    listaObjetivos.appendChild(novoObjetivoElemento);

    const objetivos = JSON.parse(localStorage.getItem('objetivos')) || [];
    objetivos.push(novoObjetivo);
    localStorage.setItem('objetivos', JSON.stringify(objetivos));
}
