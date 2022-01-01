const btnOpen = document.querySelector('.js-open-menu');
const btnClose = document.querySelector('.js-close-menu');
const menuRef = document.querySelector('.js-mob-nav');
// const anchorLink = document.querySelectorAll('.js-link-close');

btnOpen.addEventListener('click', () => {
  menuRef.classList.toggle('open');
  btnOpen.classList.toggle('open');
  btnClose.classList.toggle('open');
  document.body.classList.toggle('js-body-hidden');
});
btnClose.addEventListener('click', () => {
  menuRef.classList.toggle('open');
  btnOpen.classList.toggle('open');
  btnClose.classList.toggle('open');
  document.body.classList.toggle('js-body-hidden');
});
