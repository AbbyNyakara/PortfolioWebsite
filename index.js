const openMenu = document.querySelector('.menu-icon button');
const closeMenu = document.querySelector('.mobile-menu button');
const menuItems = document.querySelectorAll('.mobile-menu a');
const form = document.querySelector('form');
const email = document.getElementById('email');
const userName = document.getElementById('name');
const messageContent = document.getElementById('user-message');
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

// Enable Local storage for the form

function populateStorage() {
  const nameValue = userName.value;
  const emailValue = email.value;
  const userMessage = messageContent.value;

  const userInputs = {
    name: nameValue,
    email: emailValue,
    message: userMessage
  }

  localStorage.setItem(userInputs, JSON.stringify(userInputs));
}

const parsedInputs = JSON.parse(localStorage.getItem('userInputs'));

if (parsedInputs) {
  userName.value = parsedFormInputs.name;
  email.value = parsedFormInputs.email;
  messageContent.value = parsedFormInputs.message;
}

form.addEventListener('input', () => {
  populateStorage();
});