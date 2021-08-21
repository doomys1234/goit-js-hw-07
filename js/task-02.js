const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

ingredients.forEach(function (item) {
    const itemEl = document.createElement("li")
    itemEl.textContent = item
    console.log(itemEl);
    const listEl = document.querySelector("#ingredients")
    listEl.appendChild(itemEl)
})








