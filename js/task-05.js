const inputEl = document.querySelector("#name-input")
const placeHolderEl = document.querySelector("#name-output")

inputEl.addEventListener("input", onInputChange)
function onInputChange(event) {
    if (event.currentTarget.value === ""){
        placeHolderEl.textContent = "незнакомец"
    
    } else {
        placeHolderEl.textContent = event.currentTarget.value
    }
    
}
