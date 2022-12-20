export default function initAcordion() {
  const allDts = document.querySelectorAll('.js-acordionlist dt');

  function mostrarTexto() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  if (allDts.length) {
    allDts[0].classList.add('ativo');
    allDts[0].nextElementSibling.classList.add('ativo');

    allDts.forEach((text) => {
      text.addEventListener('click', mostrarTexto);
    });
  }
}
