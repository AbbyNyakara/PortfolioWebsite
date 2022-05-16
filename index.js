const openMenu = document.querySelector('.menu-icon button');
const closeMenu = document.querySelector('.mobile-menu button');

openMenu.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.add('show');
})

closeMenu.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.remove('show');
});