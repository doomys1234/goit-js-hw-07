const inputEl = document.querySelector("#validation-input")
inputEl.addEventListener("input", onInputChange)

function onInputChange(event) {
    const length = event.currentTarget.value.length

    if (length < 6 && length > 1) {
        inputEl.classList.remove("valid")
        inputEl.classList.add("invalid")
    } else if (length >= 6) {
        inputEl.classList.remove("invalid")
        inputEl.classList.add("valid")

    } else {
        inputEl.classList.remove("invalid")

    }
}