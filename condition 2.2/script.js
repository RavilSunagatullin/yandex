// Что-то про асинхронность от яндекса

const hideBtn = (document.querySelector("#hideBtn").onclick = () => {
  form.classList.toggle("hide");
});

// Переменная для хранения данных от сервера
let cards;

//Получение элементов формы
const studentEmail = "ravils465@gmail.com";
const nameInput = document.querySelector("#heroName");
const descriptionInput = document.querySelector("#heroDescription");
const imgInput = document.querySelector("#heroUrl");
const strInput = document.querySelector("#heroStr");
const agiInput = document.querySelector("#heroAgi");
const hpInput = document.querySelector("#heroHp");
const intInput = document.querySelector("#heroInt");
const ultInput = document.querySelector("#heroUlt");
const heroesContainer = document.querySelector("#heroesContainer");
const addHeroButton = document.querySelector("#addButton");
const errorText = document.querySelector("#errorText");

//При полной загрузке
fetch(
  `https://api-code.practicum-team.ru/heroes?_where[_or][0][studentEmail]=${studentEmail}&_where[_or][1][studentEmail]=`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // В консоли можно исследовать полученные данные
    cards = data; // Записываем данные в переменную
    renderCards(cards); // Функция отрисовки полученных данных
  })
  .catch((error) => console.error("Ошибка:", error));

// Передаём массив с данными аргументом в функцию отрисовки карточек
function renderCards(cardsData) {
  // Чистим контейнер для карточек
  heroesContainer.innerHTML = "";

  //  В цикле достаём из каждого объекта данные о персонаже и вставляем в вёрстку карточки
  for (let card of cardsData) {
    let hero = card;

    // Создаём вёрстку карточки и вставляем значения характеристик персонажа
    const cardHtml = `
    <div class="card">
    <div class="card-info">
      <h3>${hero.title}</h3>
      <p>${hero.description}</p>
      <svg class="bin-icon" viewBox="0 0 24 24" width="512" height="512" data-id=${hero.id}>
        <g id="_01_align_center" data-name="01 align center">
          <path
            d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z"
          />
          <rect x="9" y="10" width="2" height="8" />
          <rect x="13" y="10" width="2" height="8" />
        </g>
      </svg>
      <div class="card-parameters">
        <div class="card-parameter">
          <p class="card-parameter-title">Strenght</p>
          <p class="card-parameter-value">${hero.str}</p>
        </div>
        <div class="card-parameter">
          <p class="card-parameter-title">Agility</p>
          <p class="card-parameter-value">${hero.agi}</p>
        </div>
        <div class="card-parameter">
          <p class="card-parameter-title">Health ponits</p>
          <p class="card-parameter-value">${hero.hp}</p>
        </div>
        <div class="card-parameter">
          <p class="card-parameter-title">Intellect</p>
          <p class="card-parameter-value">${hero.int}</p>
        </div>
        <div class="card-parameter">
          <p class="card-parameter-title">Ultimate</p>
          <p class="card-parameter-value">${hero.ult}</p>
        </div>
      </div>
    </div>
    <img
      class="card__img"
      src="${hero.img}"
      alt="photo"
    />
  </div>
    `;

    // Добавляем вёрстку карточки в контейнер
    heroesContainer.innerHTML += cardHtml;
  }
}

// Вешаем на неё обработчик события submit
form.addEventListener("submit", function (evt) {
  // Отменяем стандартное поведение
  evt.preventDefault();
  // Отключаем кнопку "Добавить героя"
  addHeroButton.setAttribute('disabled', "disabled");
  addHeroButton.textContent = "Отправляем данные...";

  // Создаём объект с новым персонажем и записываем данные
  // Добавляем поле с почтой, чтобы сервер узнавал твои карточки
  let newHero = {
    title: nameInput.value,
    description: descriptionInput.value,
    img:imgInput.value,
    str: strInput.value,
    agi: agiInput.value,
    hp: hpInput.value,
    int: intInput.value,
    ult:ultInput.value,
    studentEmail: studentEmail,
  };
  // Формируем JSON-строку из объекта
  let newHeroJSON = JSON.stringify(newHero);

  fetch("https://api-code.practicum-team.ru/heroes", {
    method: "POST", // POST нужен для сохранения и записи данных
    body: newHeroJSON, // Тело запроса в JSON-формате
    headers: {
      // Добавляем необходимые заголовки
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Смотрим ответ сервера на наш запрос
      cards.push(data); // Добавляем в переменную cards данные о новой карточке
      renderCards(cards); // Отображаем обновлённый набор карточек
      form.reset(); // Сбрасываем все поля формы
    })
    .catch((err) => {
      errorText.textContent = err;
    })
    .finally(() => {
      addHeroButton.removeAttribute('disabled');
      addHeroButton.textContent = "Отправить";
    });
});
