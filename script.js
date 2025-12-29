let a = 0;
let counterEl = document.getElementById("counter");
let resetEl = document.getElementById("reset");
let incEl = document.getElementById("inc");
let decEl = document.getElementById("dec");
resetEl.addEventListener("click", function () {
  counterEl.innerHTML = "0";
});
incEl.addEventListener("click", function () {
  a++;
  counterEl.innerHTML = a;
});
decEl.addEventListener("click", function () {
  a--;
  counterEl.innerHTML = a;
});
