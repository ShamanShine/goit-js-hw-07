function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.change-color');
  const spanColor = document.querySelector('.color');

  button.addEventListener('click', function () {
    // генерируем случайный цвет
    const randomColor = getRandomHexColor();
    // устанавливаем цвет фона body
    document.body.style.backgroundColor = randomColor;
    // цвет внутри span
    spanColor.textContent = randomColor;
  });
});
