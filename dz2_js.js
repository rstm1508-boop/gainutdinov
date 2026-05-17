// Запрашиваем первое число
let firstNumber = Number(prompt("Введите первое число:"));

// Запрашиваем второе число
let secondNumber = Number(prompt("Введите второе число:"));

// Проверяем корректность ввода
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log("Ошибка: необходимо ввести числа.");
} else if (secondNumber === 0) {
    console.log("Ошибка: деление на ноль невозможно.");
} else {
    // Проверяем делимость
    let remainder = firstNumber % secondNumber;

    if (remainder === 0) {
        console.log(`Число ${firstNumber} делится на ${secondNumber} без остатка.`);
    } else {
        console.log(`Число ${firstNumber} не делится на ${secondNumber}. Остаток: ${remainder}.`);
    }
}