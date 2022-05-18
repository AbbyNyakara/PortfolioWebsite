const openMenu = document.querySelector('.menu-icon button');
const closeMenu = document.querySelector('.mobile-menu button');
const menuItems = document.querySelectorAll('.mobile-menu a');
const form = document.querySelector('form');
const email = document.getElementById('email');
const errorMsg = document.querySelector('small');

openMenu.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.add('show');
});

closeMenu.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.remove('show');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('show');
  });
});

// Form Validation

form.addEventListener('submit', (e) => {
  const emailValue = email.value;
  if (emailValue !== emailValue.toLowerCase()) {
    e.preventDefault();
    errorMsg.classList.add('display-content');
  } 
});