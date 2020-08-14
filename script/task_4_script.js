/**
 * Фунукция сложения
 * @param {number} a параметр передоваемый в функцию
 * @param {number} b другой параметр передоваемый в функцию
 * @returns {number} возврашает результат сложения параметров a и b
 */
const summa = (a, b) => a + b;

/**
 * Фунукция разности
 * @param {number} a параметр передоваемый в функцию
 * @param {number} b другой параметр передоваемый в функцию
 * @returns {number} возврашает результат вычитания параметров a и b
 */
const subtraction = function (a, b) {
    return a - b;
}

/**
 * Фунукция произведения
 * @param {number} a параметр передоваемый в функцию
 * @param {number} b другой параметр передоваемый в функцию
 * @returns {number} возврашает результат произведения параметров a и b
 */
let composition = function (a, b) {
    return a * b;
}

/**
 * Фунукция частного
 * @param {number} a параметр передоваемый в функцию
 * @param {number} b другой параметр передоваемый в функцию
 * @returns {number} возврашает результат деления параметров a и b
 */
function division (a = 2 , b = 2) {
    return a / b;
}

let x = 3;
let y = 7;
let resSumma = summa(x, y);
console.log(`Сумма: ${resSumma}`);
console.log(`Разность: ${subtraction(x, y)}`);
console.log(`Произведение: ${composition(x, y)}`);
console.log(`Частное: ${division(x, y)}`);