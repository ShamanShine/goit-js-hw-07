// выбираем список 'categories'
const categoriesList = document.getElementById('categories');
// затем все элементы li.item в списке ul#categories
const categoryItems = categoriesList.querySelectorAll('li.item');
// потом выводим количество категорий в консоль
console.log(`Numbers of categories: ${categoryItems.length}`);

// проходимся по каждому элементу li.item, находим заголовки h2,и ищем все элементы li в вкладках, потом результат в консоль - это текст и количество элементов
categoryItems.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const subcategoryItems = category.querySelectorAll('ul li');
  console.log(
    `Category: ${categoryTitle},\nElements: ${subcategoryItems.length}`,
  );
});
