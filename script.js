const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";

const jokeContainer = document.querySelector(".joke");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (item) {
      joke = item.joke
      jokeContainer.innerHTML = joke  
    });
});
