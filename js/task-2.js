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

  // Итерируем по массиву изображений и добавим их в галерею
  images.forEach(function (image) {
    // Создаем новый элемент li
    const liElement = document.createElement('li');

    // Создаем новый элемент img
    const imgElement = document.createElement('img');

    // Установим атрибуты для изображения
    imgElement.src = image.url;
    imgElement.alt = image.alt;

    // Добавим изображение в элемент списка
    liElement.append(imgElement);

    // Добавляем элемент списка в галерею
    galleryList.append(liElement);
  });

  // Добавим стили через JS
  galleryList.style.display = 'flex';
  galleryList.style.padding = '0';
  galleryList.style.listStyle = 'none';

  const galleryImages = document.querySelectorAll('.gallery img');
  galleryImages.forEach(function (img) {
    img.style.width = '360px';
    img.style.height = '300px';
  });
});
