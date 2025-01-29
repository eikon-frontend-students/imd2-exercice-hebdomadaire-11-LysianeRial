var button = document.querySelector(".button");

var like = document.querySelector(".like");

var text = document.querySelector(".text");

var number = document.querySelector(".number");

function changeColor() {
  button.classList.add("is-red");
  like.classList.add("is-white");
  text.classList.add("is-white");
  number.classList.add("is-white");
}

button.addEventListener("click", changeColor);
