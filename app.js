const burger = document.querySelector("#burger-btn");
const header = document.querySelector('.header-part');
const button = document.querySelector('.btn');
const area = document.querySelector('.navigation');
const moneyDisccustion= document.querySelector(".money-discussion")
console.log(moneyDisccustion);
let buttonSpawned = false; // Добавляем флаг для отслеживания создания кнопки
let secButtonSpawned=false;
let buttonClone;
burger.addEventListener('click', function toggleClass(e) {
    e.preventDefault();
    header.classList.toggle('open');
    if (header.classList.contains('open')) {
        burger.style.backgroundColor = 'black';
        spawnButton(); // Вызываем spawnButton, если класс open появился
    } else {
        burger.style.backgroundColor = 'aqua';
        removeButton(); // Вызываем removeButton, если класс open удален
    }
});

function spawnButton() {
    
if (!buttonSpawned ) { // Проверяем, не создана ли уже кнопка
         buttonClone = button.cloneNode(true);

        buttonClone.style.display = 'block';
        buttonClone.style.backgroundColor = 'red';
        buttonClone.style.transform = 'translate(37px,10px)';
        console.log(buttonClone);
        area.appendChild(buttonClone);
        buttonSpawned = true; // Устанавливаем флаг в true
    }
    secButtonSpawned=true
}
function removeButton() {
   
    if (buttonSpawned) { // Проверяем, была ли создана кнопка
        const spawnedButton = area.querySelector('.btn');
        if (spawnedButton) {
            area.removeChild(spawnedButton);
        }
        buttonSpawned = false; // Устанавливаем флаг в false
    }
}
