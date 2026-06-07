// Task 1

// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список
/*

function doLog(string, element) {
  console.log(string);
  console.log(element);
}

// 1.1
const body = document.querySelector('body');
doLog('1.1', body);
// 1.2
const title = document.querySelector('title');
doLog('1.2', title);
// 1.3
const list = document.querySelector('.list');
doLog('1.3', list);
// 1.4
const dataTopics = document.querySelectorAll('[data-topic]');
doLog('1.4', dataTopics);
console.log('1.4.1');
dataTopics.forEach((dataTopic) => { console.log(dataTopic)});
// 1.5
const dataTopicFirst = document.querySelector('[data-topic]');
doLog('1.5', dataTopicFirst);
// 1.6
const dataTopicLast = Array.from(dataTopics).at(-1);
doLog('1.6', dataTopicLast);
// 1.7
const h1 = document.querySelector('h1');
doLog('1.7', h1.nextElementSibling);
// 1.8
const h3List = document.querySelectorAll('h3');
doLog('1.8', h3List);
console.log('1.8.1');
h3List.forEach((element) => { console.log(element) });
// 1.9
h3List.forEach((element) => { element.classList.add('active') });
// 1.10
const navigation = document.querySelector('li[data-topic="navigation"]')
doLog('1.10', navigation);
// 1.11
navigation.style.backgroundColor = 'yellow';
// 1.12
const p = navigation.querySelector('p');
p.innerHTML = 'Я змінив тут текст!';
// 1.13
const currentTopic = 'manipulation';
const manipulation = document.querySelector(`[data-topic="${currentTopic}"]`);
doLog('1.13', manipulation);
// 1.14
manipulation.style.backgroundColor = 'blue';
// 1.15
const completedHeader = document.querySelector('h1.completed, h2.completed, h3.completed, h4.completed, h5.completed, h6.completed');
doLog('1.15', completedHeader);
// 1.16
if (completedHeader) {
  completedHeader.closest('li').remove();
}
// 1.17
if (h1) {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";
  h1.insertAdjacentElement('afterend', newParagraph);
}
// 1.18
if (list) {
  const newItem = document.createElement('li');
  const newH3 = document.createElement('h3');
  newH3.innerHTML = 'Властивість innerHTML';
  newItem.appendChild(newH3);
  const newParagraph = document.createElement('p');
  newParagraph.innerHTML = 'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
  newItem.appendChild(newParagraph);
  list.appendChild(newItem);
}
// 1.19
const strTemplate = `
  <li>
    <h3>Функція insertAdjacentHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
  </li>`;
if (list) {
  list.insertAdjacentHTML('beforeend', strTemplate);
}
// 1.20
if (list) {
  list.textContent = '';
}
*/





// Task 2

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).
/*

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numberContainer = document.createElement('div');
numberContainer.classList.add('number-container');
const body = document.querySelector('body');
if (body) {
  body.append(numberContainer);
}

let idx = 100;
do {

  const elem = document.createElement('div');
  elem.classList.add('number');
  const value = randomNumber();
  elem.textContent = String(value);
  elem.classList.add((value % 2 === 0) ? 'even' : 'odd');
  numberContainer.append(elem);
  
  idx--;
} while (idx > 0);
*/





// Task 3

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
/*
const input = document.querySelector('form input');
if (input) {
  input.addEventListener('input', () => {
    if (input.value.length > 6) {
      input.classList.add('success');
      input.classList.remove('error');
    } else {
      input.classList.remove('success');
      input.classList.add('error');
    }
  });
}
*/

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
/*
if (input) {
  input.addEventListener('focus', () => {
    input.style.outline = (input.value.trim() === '') ? '3px solid red' : '3px solid green';
  });
}
*/

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
/*
if (input) {
  input.addEventListener('blur', () => {
    input.style.outline = (input.value.trim() === '') ? '3px solid red' : '3px solid lime';
  });
}
*/

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне значення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.
/*
const userSpan = document.querySelector('.js-username-output');
if (input) {
  input.addEventListener('input', () => {
    if (userSpan) {
      userSpan.textContent = (input.value.trim() === '') ? 'Anonymous' : `${input.value.trim()}`;
    }
  });
}
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = event.currentTarget.elements['userName'].value.trim();
    const accept = event.currentTarget.elements['accept'].checked;

    if (userName === '') {
      console.log('User Name is empty');
    } else if (!accept) {
      console.log('User did not accept privacy policy')
    } else {
      const obj = {userName: userName};
      console.log(`${JSON.stringify(obj)}`);
    }

    form.reset();
    if (userSpan) {
      userSpan.textContent = 'Anonymous';
    }
  });
}
*/




// Task 4

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
/*

const refs = {
  box: document.querySelector('.box'),
  btnIncrease: document.querySelector('.js-increase'),
  btnDecrease: document.querySelector('.js-decrease')
}

const cDelta = 20;

if (refs.btnIncrease) {
  refs.btnIncrease.addEventListener('click', () => {
    if (refs.box) {
      refs.box.style.width = refs.box.offsetWidth + cDelta + 'px';
      refs.box.style.height = refs.box.offsetHeight + cDelta + 'px';
    }
  });
}

if (refs.btnDecrease) {
  refs.btnDecrease.addEventListener('click', () => {
    if ((refs.box) && (refs.box.offsetWidth > cDelta) && (refs.box.offsetHeight > cDelta)) {
      refs.box.style.width = refs.box.offsetWidth - cDelta + 'px';
      refs.box.style.height = refs.box.offsetHeight - cDelta + 'px';
    }
  });
}
*/

