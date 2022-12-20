export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('.modal-container');
  const containerModal = document.querySelector('[data-modal="container"]');

  function abrirModal(event) {
    event.preventDefault();
    modal.classList.add('ativo');
  }

  function fecharModal(event) {
    event.classList.remove('ativo');
  }

  function cliqueFora(event) {
    if (event.target === this) {
      fecharModal();
    }
  }

  botaoAbrir.addEventListener('click', abrirModal);
  botaoFechar.addEventListener('click', fecharModal);
  containerModal.addEventListener('click', cliqueFora);
}
