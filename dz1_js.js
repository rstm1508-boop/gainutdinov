
let name = prompt("Введите ваше имя:");


let age = prompt("Введите ваш возраст:");


age = Number(age);


if (isNaN(age)) {
    console.log("Ошибка: возраст должен быть числом.");
} else {
    console.log(`Привет, ${name}! Тебе ${age} лет.`);
}