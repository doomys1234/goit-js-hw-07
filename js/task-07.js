const value = window
    .getComputedStyle(document.querySelector('body'))
    .getPropertyValue('font-size');
const controlEl = document.getElementById('font-size-control');
controlEl.value = 0;
const text = document.getElementById('text');
controlEl.addEventListener('input', onFontSizeChange);

function onFontSizeChange() {
    text.style.fontSize = `${parseInt(value) * (parseInt(controlEl.value) + 1)}px`;
}