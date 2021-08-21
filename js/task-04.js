const counterValue = document.querySelector("#value")
console.log(counterValue);

const buttonIncrEl = document.querySelector('#counter button[data-action = "increment"]')
buttonIncrEl.addEventListener("click", increment)
const buttonDecrEl = document.querySelector('#counter button[data-action = "decrement"]')
buttonDecrEl.addEventListener("click", decrement)
function increment() {
    counterValue.textContent = Number(counterValue.textContent) + 1;

}
function decrement() {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}


