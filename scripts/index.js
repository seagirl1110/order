const orderContainer = document.querySelector('.order-container');
const form = orderContainer.querySelector('.form');
const formInputColl = form.querySelectorAll('.form__input');
const btnContainer = orderContainer.querySelector('.buttons-container');
const notificationsContainer = orderContainer.querySelector(
  '.notifications-container'
);

const createEl = (tag, className) => {
  const el = document.createElement(tag);
  el.setAttribute('class', className);
  return el;
};

const createNotification = (title, text, bgColor) => {
  const notification = createEl('div', 'notification');
  notification.innerHTML = `
  <span class="material-symbols-outlined notification__check"> check </span>
  <h3>${title}</h3>
  <p>${text}</p>
  `;
  notification.style.backgroundColor = bgColor;
  notificationsContainer.append(notification);

  const closeBtn = createEl(
    'span',
    'material-symbols-outlined notification__btn-close'
  );
  closeBtn.textContent = 'close';
  notification.append(closeBtn);

  closeBtn.addEventListener('click', () => {
    notification.remove();
  });
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  formInputColl.forEach((input) => {
    input.value = '';
  });

  btnContainer.classList.add('buttons-container--open');

  createNotification(
    'Заказ создан',
    'Ожидайте дальнейшей информации',
    '#3fc53f'
  );
});
