const btnOpen = document.querySelector('.js-open-menu');
const btnClose = document.querySelector('.js-close-menu');
const menuRef = document.querySelector('.js-mob-nav');
const anchorLink = document.querySelectorAll('.mob-nav__list');

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

anchorLink.forEach(el => {
  el.addEventListener("click", () => {
    menuRef.classList.toggle('open');
  btnOpen.classList.toggle('open');
  btnClose.classList.toggle('open');
  document.body.classList.toggle('js-body-hidden');
  })
});