export default function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');

  function scrollAnimado() {
    const windowMetade = window.innerHeight * 0.6;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top; // pega a distancia do topo
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      // se a distancia do topo da tela até for menor que 60%, colocar classe ativo
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    scrollAnimado();
    window.addEventListener('scroll', scrollAnimado);
  }
}
initScrollAnimation();
