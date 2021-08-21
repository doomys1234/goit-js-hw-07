const inputEl = document.querySelector("#name-input")
const placeHolderEl = document.querySelector("#name-output")

inputEl.addEventListener("focus")
console.log(inputEl.currentTarget.value);