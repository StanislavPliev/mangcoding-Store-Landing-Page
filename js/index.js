// этот код означает что перед тем как выполнить код, начиная с 4 строки, он должен проверить чтобы все остальное было загружено
// потому что если этот код загрузится раньше то он не отработает. все должно выполниться в нужный момент времени
// slider
$(function() {
  $('.what-we-give__right-column').slick({
    // arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});

// log-in modal window
const loginBtn = document.querySelector('#js-log-in-btn');
const loginModal = document.querySelector('#js-log-in-modal');
const modalWindowUsernameField = document.querySelector('#js-modal-window-username-field');
const modalWindowPasswordField = document.querySelector('#js-modal-window-password-field');

loginBtn.addEventListener('click', () => {
  loginModal.classList.add('opened');

  document.body.style.overflow = 'hidden';
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    loginModal.classList.remove('opened');

    modalWindowPasswordField.value = '';
    modalWindowUsernameField.value = '';

    document.body.style.overflow = '';
  }
})

const closeModalBtn = document.querySelector('#js-close-modal-btn');

closeModalBtn.addEventListener('click', () => {
  loginModal.classList.remove('opened');
  
  modalWindowPasswordField.value = '';
  modalWindowUsernameField.value = '';

  document.body.style.overflow = '';
})

const modalLoginBtn = document.querySelector('#js-modal-log-in-btn');

modalLoginBtn.addEventListener('click', () => {
  loginModal.classList.remove('opened');
  
  modalWindowPasswordField.value = '';
  modalWindowUsernameField.value = '';

  document.body.style.overflow = '';
})

loginModal.addEventListener('click', (e) => {
  // console.log(e.target);
  if (loginModal === e.target) {
    loginModal.classList.remove('opened');
    
    modalWindowPasswordField.value = '';
    modalWindowUsernameField.value = '';

    document.body.style.overflow = '';
  }
})

/* register modal window */
const registerBtn = document.querySelector('#js-register-btn');
const lowerRegisterBtn = document.querySelector('#js-lower-reg-btn')
const registerModal = document.querySelector('#js-register-modal');
const closeRegModalBtn = document.querySelector('#js-close-reg-modal-btn');
const regModalUsernameField = document.querySelector('#js-reg-modal-username');
const regModalEmailField = document.querySelector('#js-reg-modal-email');
const regModalPasswordField = document.querySelector('#js-reg-modal-password');
const regModalRegBtn = document.querySelector('#js-modal-reg-btn');
const bodyNode = document.querySelector('body');

registerBtn.addEventListener('click', () => {
  registerModal.classList.add('opened');

  document.body.style.overflow = 'hidden';
})

lowerRegisterBtn.addEventListener('click', () => {
  registerModal.classList.add('opened');

  document.body.style.overflow = 'hidden';
})

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    registerModal.classList.remove('opened');

    regModalUsernameField.value = '';
    regModalEmailField.value = '';
    regModalPasswordField.value = ''; 

    document.body.style.overflow = '';
  }
})

closeRegModalBtn.addEventListener('click', () => {
  registerModal.classList.remove('opened');

  regModalUsernameField.value = '';
  regModalEmailField.value = '';
  regModalPasswordField.value = ''; 

  document.body.style.overflow = '';
})

regModalRegBtn.addEventListener('click', () => {
  registerModal.classList.remove('opened');

  regModalUsernameField.value = '';
  regModalEmailField.value = '';
  regModalPasswordField.value = ''; 

  document.body.style.overflow = '';
})

registerModal.addEventListener('click', (e) => {
  if (e.target === registerModal) {
    registerModal.classList.remove('opened');

    regModalUsernameField.value = '';
    regModalEmailField.value = '';
    regModalPasswordField.value = ''; 

    document.body.style.overflow = '';
  }
})

// see all modal window
const seeAllBtn = document.querySelector('#js-see-all-btn');
const seeAllModal = document.querySelector('#js-see-all-modal');
const closeSeeAllModalBtn = document.querySelector('#js-close-courses-modal');

seeAllBtn.addEventListener('click', () => {
  seeAllModal.classList.add('opened');

  document.body.style.overflow = 'hidden';
})

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    seeAllModal.classList.remove('opened');

    document.body.style.overflow = '';
  }
})

closeSeeAllModalBtn.addEventListener('click', () => {
  seeAllModal.classList.remove('opened');

  document.body.style.overflow = '';
})

seeAllModal.addEventListener('click', (e) => {
  if (e.target === seeAllModal) {
    seeAllModal.classList.remove('opened');
    
    document.body.style.overflow = '';
  }
})

/* courses footer links */
const htmlCssCourse = document.querySelector('#html-css');
const htmlCssCourseLink = document.querySelector('#html-css-link');

htmlCssCourseLink.addEventListener('click', () => {
  htmlCssCourse.classList.add('chosen-course');
})

htmlCssCourse.addEventListener('animationend', () => {
  htmlCssCourse.classList.remove('chosen-course')
})

const javascriptCourse = document.querySelector('#javascript');
const javascriptCourseLink = document.querySelector('#javascript-link');

javascriptCourseLink.addEventListener('click', () => {
  javascriptCourse.classList.add('chosen-course');
})

javascriptCourse.addEventListener('animationend', () => {
  javascriptCourse.classList.remove('chosen-course');
})

const photographerCourse = document.querySelector('#photographer');
const photographerCourseLink = document.querySelector('#photographer-link');

photographerCourseLink.addEventListener('click', () => {
  photographerCourse.classList.add('chosen-course');
})

photographerCourse.addEventListener('animationend', () => {
  photographerCourse.classList.remove('chosen-course');
})

const designGraphicsCourseCard = document.querySelector('#design-graphics');
const designGraphicsCourseLink = document.querySelector('#design-graphics-link');

designGraphicsCourseLink.addEventListener('click', () => {
  designGraphicsCourseCard.classList.add('chosen-course');
})

designGraphicsCourseCard.addEventListener('animationend', () => {
  designGraphicsCourseCard.classList.remove('chosen-course');
})