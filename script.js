console.log("вёрстка валидная +10");
console.log("вёрстка семантическая +16");

console.log("для оформления СV используются css-стили +10");
console.log(
  "контент размещается в блоке, который горизонтально центрируется на странице +10"
);
console.log("вёрстка адаптивная 0");
console.log("есть меню. Ссылки в пунктах меню ведут на основные разделы CV 0");
console.log("на странице СV присутствует изображение +10");
console.log(
  "контакты для связи и перечень навыков оформлены в виде списка ul > li +10"
);
console.log("V содержит контакты для связи +10");
console.log("CV содержит пример вашего кода 0");
console.log("CV содержит изображения-ссылки на выполненные вами проекты 0");
console.log("CV выполнено на английском языке +10");
console.log("выполнены требования к Pull Request +10");
console.log("есть видеорезюме автора CV на английском языке 0");
console.log("качество выполнения CV не ниже чем в примерах CV 0");
console.log("In total 96/150");

// burger menu

const iconMenu = document.querySelector(".menu_icon");
if (iconMenu) {
  const menuBody = document.querySelector(".menu_body");
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

//const iconMenu = document.querySelector(".menu_body");
