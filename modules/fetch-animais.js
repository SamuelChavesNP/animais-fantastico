import initNumeroAnimado from './modules/numero-animado.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const dadosResponse = await fetch(url);
      const animaisJson = await dadosResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initNumeroAnimado();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./animaisapi.json');
}
