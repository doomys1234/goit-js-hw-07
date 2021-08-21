const listEl = document.querySelector("#categories")
const itemEl = listEl.querySelectorAll(".item")
console.log(itemEl);
console.log(`В списке ${itemEl.length} категории`);
const titleEl = listEl.querySelectorAll("h2")

titleEl.forEach(function (item) {
    item.textContent
    console.log("Категория:", item);

})
itemEl.forEach(function (el) {
    const itemElLength = el.querySelectorAll("li")
    console.log("Количество элементов:", itemElLength.length);

})

