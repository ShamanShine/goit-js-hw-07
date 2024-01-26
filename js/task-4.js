document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // запрещаем перезагрузку страницы при отправке формы

    //   убираем пробелы
    const emailInput = loginForm.elements.email.value.trim();
    const passwordInput = loginForm.elements.password.value.trim();

    // Проверка заполнены ли поля
    if (!emailInput || !passwordInput) {
      alert('All form fields must be filled in');
      return;
    }

    // собираем значение полей в обьект
    const formData = {
      email: emailInput,
      password: passwordInput,
    };

    // выводим обьект в консоль
    console.log(formData);

    // очищаем поля формы
    loginForm.reset();
  });
});
