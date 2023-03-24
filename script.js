// Level 1
// Найти индекс заданного числа в массиве: {3, 6, 4, 7, 2, 1, 9}
// Алгоритм на вход должен получать любой массив и одну цифру, индекс которой требуется найти.
// Задание считается выполненным если: использован ”Линейный подход”
//  и алгоритм соответствует характеристикам алгоритма и выдает верный результат.


// let array = [3, 6, 4, 7, 2, 1, 9, 44, 13, 22];

// console.log(array);

// let number = Number(prompt());

// console.log(array.indexOf(number));

// console.log(array.indexOf(6)); // для наглядности



// Level 2
// Реализовать алгоритм, который будет находить сумму квадратов всех элементов массива!  {3, 6, 4, 7, 2, 1, 9}

let array = [3, 6, 4, 7, 2, 1, 9, 44, 13, 22];

let newArray = [];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    let sqr = array[i] * array[i]
    newArray.push(sqr);
}

console.log(array);
console.log(newArray);

   for (let j = 0; j < newArray.length; j++) {
    sum += newArray[j]   
}

console.log(sum);