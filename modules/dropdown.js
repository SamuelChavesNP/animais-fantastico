export default function initDropdown() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active');
    outsideClick();
  }

  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function outsideClick() {
    const html = document.documentElement;
    html.addEventListener('click', handleOutsideClick);
  }
}
