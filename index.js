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

// Popup window 

const portfolio = document.querySelector('#portfolio');

const projectArray = [
  {
    mobileImg: 'images/tonic-section.svg',
    desktopImg: 'images/desktop-snap1.png',
    cardTitle: 'Tonic',
    cardDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    class:'card',
  },
  
  {
    mobileImg: 'images/availability-section.svg',
    desktopImg: 'images/desktop-snap2.png',
    cardTitle: 'Multi-Post Stories',
    cardDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    class: 'card-2'
  },

  {
    mobileImg: 'images/tonic-section.svg',
    desktopImg: 'images/desktop-snap1.png',
    cardTitle: 'Tonic',
    cardDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    class: 'card'
  },

  {
    mobileImg: 'images/tonic-section.svg',
    desktopImg: 'images/desktop-snap1.png',
    cardTitle: 'Tonic',
    cardDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    class: 'card-2'
  }
]

portfolio.innerHTML = projectArray.map((project) => {
  return html = `
  <section class="card ${project.class} work">
  <img class= "mobile-img" src="${project.mobileImg}" alt="" aria-hidden="true">
  <img class= "desktop-img" src="${project.desktopImg}" alt="" aria-hidden="true">

  <div class="content">
      <h2>${project.cardTitle}</h2>
      <div class="experience-section">
          <p class="canopy">Canopy</p>
          <img src="images/Counter.svg" alt="" aria-hidden="true">
          <p class="bullet">Back End Dev</p>
          <img src="images/Counter.svg" alt="" aria-hidden="true">
          <p class="bullet">2015</p>
      </div>
      <p class="card-text">${project.cardDesc}</p>
      <ul class="skills">
          <li>html</li>
          <li>css</li>
          <li>javaScript</li>
      </ul>
      <button class="submit" type="submit">See Project</button>
  </div>
</section>
  `
});


const submitButton = document.querySelectorAll('.submit');
const popup = document.querySelector('.popup');
const cancel = document.querySelector('.cancel');
const mainContent = document.querySelector('.page-content');

submitButton.forEach(button =>{
  button.addEventListener('click', ()=>{
    popup.classList.remove('hide');
    mainContent.classList.add('blur');
  });
});

cancel.addEventListener('click', ()=>{
  popup.classList.add('hide');
  mainContent.classList.remove('blur');
});








