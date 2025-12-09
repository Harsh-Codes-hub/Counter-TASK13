let a = 0;
let counterEl = document.getElementById("counter");
let incEl = document.getElementById("inc");
let decEl = document.getElementById("dec");

incEl.addEventListener('click', function() {
    a++;
    counterEl.innerHTML = a;
})
decEl.addEventListener('click', function() {
    a--;
    counterEl.innerHTML = a;
})