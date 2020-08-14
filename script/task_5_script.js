"use strict";
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
 * @returns {float} возврашает результат деления параметров a и b
 */
function division (a = 2 , b = 2) {
    return a / b;
}

/**
 * Функция выполняющая арифметические операции
 * @param {number} arg1 параметр 
 * @param {number} arg2 параметр
 * @param {string} знак арифметический операции
 * @returns {number} возвращает результат операции с параметрами arg1 и arg2      
 */
function mathOperation (arg1, arg2, operation) {
    switch(operation) {
        case '+': 
            return summa(arg1, arg2);
            break;
        case '-':
            return subtraction(arg1, arg2); 
            break;
        case '*':
            return composition(arg1, arg2);
            break;   
        case '/':
            return division(arg1, arg2);
            break;
        default: 
            return 'Нет такой арифметической операции!';
    }
}

let x = 3;
let y = 7;
alert(mathOperation(x, y, prompt('Введите арифметическую операцию')));