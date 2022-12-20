export default function scrollSuave() {
  const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollTosection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInterno.forEach((link) => {
    link.addEventListener('click', scrollTosection);
  });
}
