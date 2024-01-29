document.addEventListener('DOMContentLoaded', function () {
  // Получим ссылку на галерею ul по "class"
  const galleryList = document.querySelector('.gallery');
  // Массив объектов с изображениями
  const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
    {
      url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Elephant Beside on Baby Elephant',
    },
    {
      url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Blue Geeen and Orange Parrot',
    },
    {
      url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Zebras on Zebra',
    },
  ];

  const galleryHtml = images
    .map(function (image) {
      return `<li><img src="${image.url}" alt="${image.alt}" style="width: 360px; height: 300px;"></li>`;
    })
    .join(''); // объединяем все элементы в одну строку

  // Добавляем строку html в галерею
  galleryList.innerHTML = galleryHtml;

  // Добавим стили через JS
  galleryList.style.display = 'flex';
  galleryList.style.padding = '0';
  galleryList.style.listStyle = 'none';
});

// На що буде звертати увагу ментор при перевірці:
// Створена й додана в DOM галерея із шести зображень
// Галерея додана у список ul.gallery і являє собою 6 елементів <li>, в які вкладені елементи <img>
// Для створення елементів <img> використані дані з масиву об’єктів images
// Усі елементи галереї додані в DOM за одну операцію додавання
// Є мінімальне оформлення галереї флексбоксами через CSS класи

// Извиняюсь, в ТЗ указано 6 элеменов, поэтому я добавил 6 (как на макете) Убрать?
