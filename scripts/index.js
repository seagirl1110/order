const orderContainer = document.querySelector('.order-container');
const form = orderContainer.querySelector('.form');
const formInputColl = form.querySelectorAll('.form__input');
const btnContainer = orderContainer.querySelector('.buttons-container');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  formInputColl.forEach((input) => {
    input.value = '';
  });

  btnContainer.classList.add('buttons-container--open');
});
