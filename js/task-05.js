const inputEl = document.querySelector("#name-input")
const placeHolderEl = document.querySelector("#name-output")

inputEl.addEventListener("input", onInputChange)
function onInputChange(event) {

    placeHolderEl.textContent = event.currentTarget.value

}
console.log(inputEl.currentTarget.value);