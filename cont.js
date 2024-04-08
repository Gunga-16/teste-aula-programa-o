const adicionarBotao = document.getElementById('adicionar');
const listaObjetivos = document.getElementById('listaObjetivos');

// Carrega os objetivos do localStorage ao carregar a página
window.onload = function() {
    const objetivos = JSON.parse(localStorage.getItem('objetivos')) || [];
    objetivos.forEach(objetivo => {
        const novoObjetivo = document.createElement('button');
        novoObjetivo.classList.add('objetivos');
        novoObjetivo.innerHTML = objetivo;
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
    });
}

adicionarBotao.onclick = function() {
    const pessoa = document.getElementById('pessoa').value;
    const objetivo = document.getElementById('objetivo').value;
    const tempo = document.getElementById('tempo').value;

    const novoObjetivo = document.createElement('button');
    novoObjetivo.classList.add('objetivos');
    novoObjetivo.innerHTML = `${objetivo} - ${pessoa}`;
    listaObjetivos.appendChild(novoObjetivo);

    // Salva o objetivo no localStorage
    const objetivos = JSON.parse(localStorage.getItem('objetivos')) || [];
    objetivos.push(`${objetivo} - ${pessoa}`);
    localStorage.setItem('objetivos', JSON.stringify(objetivos));

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

