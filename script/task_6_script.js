"use strict";
/**
 * Функция возвращает слово "рубль" в правильном падеже
 * @param {string} arg1 параметр, число ввиде строки 
 * @return {string} возвращает строку "рубль" в правильном падеже     
 */
function cashMachine (arg1) {
    let res = null;
    // определяем длину строки и возвращаем последнюю цифру
    let last = arg1.charAt(arg1.length - 1);
    switch(last) {
        case '0':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9': 
            res = 'рублей';
            break;
        case '1':
            res = 'рубль'; 
            break;
        case '2':
        case '3':
        case '4':
            res = 'рубля';
            break;   
    }
    return res;
}

let summa = prompt('Введите сумму');
let rubl = null; 
try {
    if (+summa <= 0 || isNaN(summa)) { 
        throw new Error("Не правильный формат данных, сумма должна быть\nцелым положительным числом, отличной от нуля!");
    }
    rubl = cashMachine(summa);
    alert(`Ваша сумма в ${summa} ${rubl} успешно зачислена.`);
} catch(err) {
    err.name = "Ошибка";
    alert(err);
}