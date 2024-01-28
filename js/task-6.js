function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const controlsDiv = document.getElementById('controls');
  const input = controlsDiv.querySelector('input');
  const createButton = controlsDiv.querySelector('[data-create]');
  const destroyButton = controlsDiv.querySelector('[data-destroy]');
  const boxesDiv = document.getElementById('boxes');

  createButton.addEventListener('click', function () {
    const amount = Number(input.value);

    // Проверяем, введено ли корректное число в пределах от 1 до 100
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount, boxesDiv);
      input.value = ''; // Очищаем значение input
    } else {
      alert('Введите число от 1 до 100.');
    }
  });

  destroyButton.addEventListener('click', function () {
    destroyBoxes(boxesDiv);
  });
});

function createBoxes(amount, parent) {
  const initialSize = 30;
  const step = 10;
  // функция создает указанное количество div элементов, устанавливает для каждого размеры, цвет фона. После она добавляет эти элементы в родительский элемент (переданный как аргумент).
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${initialSize + i * step}px`;
    box.style.height = `${initialSize + i * step}px`;
    box.style.backgroundColor = getRandomHexColor();
    parent.appendChild(box);
  }
}

function destroyBoxes(parent) {
  parent.innerHTML = '';
}
// очищает содержимое родительского єлемента
