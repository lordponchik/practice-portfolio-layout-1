const btnOpen = document.querySelector('.js-open-menu');
const menuRef = document.querySelector('.js-mob-nav');

btnOpen.addEventListener('click', () => {
  menuRef.classList.toggle('open');
  btnOpen.classList.toggle('open');
  document.body.classList.toggle('js-body-hidden');
});
