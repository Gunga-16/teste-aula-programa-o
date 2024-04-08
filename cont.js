const adicionarBotao = document.getElementById('adicionar');
const listaObjetivos = document.getElementById('listaObjetivos');

window.onload = function() {
    const objetivos = JSON.parse(localStorage.getItem('objetivos')) || [];
    objetivos.forEach(objetivo => {
        const novoObjetivo = document.createElement('div');
        novoObjetivo.classList.add('objetivos');
        novoObjetivo.innerHTML = `<span>${objetivo}</span><button class="deletar">x</button>`;
        listaObjetivos.appendChild(novoObjetivo);

        novoObjetivo.querySelector('.deletar').onclick = function() {
            const index = objetivos.indexOf(objetivo);
            if (index !== -1) {
                objetivos.splice(index, 1);
                localStorage.setItem('objetivos', JSON.stringify(objetivos));
                novoObjetivo.remove();
            }
        }
    });
}

adicionarBotao.onclick = function() {
    const pessoa = document.getElementById('pessoa').value;
    const objetivo = document.getElementById('objetivo').value;
    const tempo = document.getElementById('tempo').value;

    const novoObjetivo = document.createElement('div');
    novoObjetivo.classList.add('objetivos');
    novoObjetivo.innerHTML = `<span>${objetivo} - ${pessoa}</span><button class="deletar">x</button>`;
    listaObjetivos.appendChild(novoObjetivo);

    const objetivos = JSON.parse(localStorage.getItem('objetivos')) || [];
    objetivos.push(`${objetivo} - ${pessoa}`);
    localStorage.setItem('objetivos', JSON.stringify(objetivos));

    novoObjetivo.querySelector('.deletar').onclick = function() {
        const index = objetivos.indexOf(`${objetivo} - ${pessoa}`);
        if (index !== -1) {
            objetivos.splice(index, 1);
            localStorage.setItem('objetivos', JSON.stringify(objetivos));
            novoObjetivo.remove();
        }
    }
}
