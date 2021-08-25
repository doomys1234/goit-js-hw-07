const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

  const listEl = document.querySelector("#ingredients")
 const elements = ingredients.map(function (item) {
    const itemEl = document.createElement("li")
     itemEl.textContent = item
    return itemEl
    

}
)
  
listEl.append(...elements)









