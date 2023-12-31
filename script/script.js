
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");

  menu.classList.toggle("header__nav--active");

  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("header__nav--active");

    document.body.classList.remove("stop-scroll");
  });
});

const btnMore = document.querySelector('.articles-more');
const blogItem = document.querySelectorAll('.blog__item');

btnMore.addEventListener('click', () => {
  blogItem.forEach(el => {el.classList.add('blog__item--visible')});
  btnMore.closest('.articles-center').classList.add('articles-center--hidden');
})
