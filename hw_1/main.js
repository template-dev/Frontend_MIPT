// 1. Клонирование массива

// Напишите функцию на JavaScript для клонирования массива.

// Тестовые данные:
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// Ожидаемый вывод:
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function array_Clone(arr) {
    return [...arr];
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// 2. Первые элементы массива

// Напишите функцию на JavaScript для получения первого элемента массива.
// Передавая параметр 'n', можно получить первые 'n' элементов массива.

// Тестовые данные:
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// Ожидаемый вывод:
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function first(arr, n = 1) {
    if (n <= 0) return [];
    return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// 3. Последние элементы массива

// Напишите функцию на JavaScript для получения последнего элемента массива.
// Передавая параметр 'n', можно получить последние 'n' элементов массива.

// Тестовые данные:
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// Ожидаемый вывод:
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

function last(arr, n = 1) {
    if (n <= 0) return [];
    return n === 1 ? arr[arr.length - 1] : arr.slice(-n);
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

// 4. Соединение элементов массива

// Напишите простую программу на JavaScript для объединения
// всех элементов следующего массива в строку.

// Пример массива: `myColor = ["Red", "Green", "White", "Black"];`

// Ожидаемый вывод:
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));
console.log(myColor.toString());
console.log(myColor.join("+"));

// 5. Вставка дефисов между четными числами

// Напишите программу на JavaScript, которая принимает число
// в качестве ввода и вставляет дефисы (-) между каждым чётным числом.
// Например, если ввести 025468, вывод должен быть 0-254-6-8.

function insertHyphens(num) {
    const str = num.toString();
    let result = str[0];
    
    for (let i = 1; i < str.length; i++) {
      if (str[i-1] % 2 === 0 && str[i] % 2 === 0) {
        result += '-' + str[i];
      } else {
        result += str[i];
      }
    }
    
    return result;
}

console.log(insertHyphens(025468));

// 6. Сортировка массива

// Напишите программу на JavaScript для сортировки элементов массива.

// Пример массива:
// const arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// Ожидаемый вывод:
// -4,-3,1,2,3,5,6,7,8

const arr0 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(arr0.sort((a, b) => a - b).toString());

// 7. Самый частый элемент массива

// Напишите программу на JavaScript для нахождения самого частого элемента в массиве.

// Пример массива:
// const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Ожидаемый вывод:
// a ( 5 раз )

function mostFrequent(arr) {
    const frequency = {};
    let maxCount = 0;
    let maxItem = null;
    
    arr.forEach(item => {
      frequency[item] = (frequency[item] || 0) + 1;
      if (frequency[item] > maxCount) {
        maxCount = frequency[item];
        maxItem = item;
      }
    });
    
    return `${maxItem} ( ${maxCount} раз )`;
}

const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr1));

// 8. Переключение регистра в строке

// Напишите программу на JavaScript, которая принимает строку и
// меняет регистр каждого символа.
// Например, если ввести 'The Quick Brown Fox',
// вывод должен быть 'tHE qUICK bROWN fOX'.

function swapCase(str) {
    return str.split('').map(c => 
      c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
    ).join('');
}

console.log(swapCase("The Quick Brown Fox"));

// 9. Сумма квадратов элементов массива

// Напишите программу на JavaScript для нахождения
// суммы квадратов чисел в массиве.

function sumOfSquares(arr) {
    return arr.reduce((sum, num) => sum + num * num, 0);
}

console.log(sumOfSquares([1, 2, 3, 4, 5]));

// 10. Сумма и произведение элементов массива

// Напишите программу на JavaScript для вычисления суммы и
// произведения элементов массива целых чисел.

function sumAndProduct(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    const product = arr.reduce((a, b) => a * b, 1);
    return { sum, product };
}

console.log(sumAndProduct([1, 2, 3, 4, 5]));

// 11. Удаление дубликатов

// Напишите программу на JavaScript для удаления дублирующихся
// элементов из массива (игнорируя чувствительность к регистру).

function removeDuplicates(arr) {
    const seen = new Set();
    return arr.filter(item => {
      const lower = typeof item === 'string' ? item.toLowerCase() : item;
      return seen.has(lower) ? false : seen.add(lower);
    });
}

console.log(removeDuplicates([1, 2, 1, 4, 2]));
console.log(removeDuplicates(["Hello", "Hello"]));

// 12. Вывод цветов с порядковыми номерами

// У нас есть следующие массивы:
// color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// o = ["th", "st", "nd", "rd"]
// Напишите программу на JavaScript для отображения цветов в следующем формате:
// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red."
// Примечание: Используйте порядковые числительные для указания их позиции.

const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];

color.forEach((c, i) => {
  const pos = i + 1;
  let suffix = o[0];
  
  if (pos % 100 >= 11 && pos % 100 <= 13) {
    suffix = o[0];
  } else {
    switch (pos % 10) {
      case 1: suffix = o[1]; break;
      case 2: suffix = o[2]; break;
      case 3: suffix = o[3]; break;
    }
  }
  
  console.log(`${pos}${suffix} choice is ${c}.`);
});