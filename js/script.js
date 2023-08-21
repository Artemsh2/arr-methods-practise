'use strict'

//1. Відсортувати масив об'єктів за віком за спаданням.
// [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 30 },
//     { name: 'Bob', age: 20 },
//   ]
// const arr = [
//         { name: 'John', age: 25 },
//         { name: 'Jane', age: 30 },
//         { name: 'Bob', age: 20 },
//     ]

// const sortArr = (arr) => arr.sort((a, b) => b.age - a.age)
// console.log(sortArr(arr));

//2. Знайти середнє значення чисел у масиві. [1, 2, 3, 4, 5]
// const arr = [1, 2, 3, 4, 5];
// function sumOfArr(arr){
//     return arr.reduce((sum, current) => sum + current, 0) / arr.length;
// }
// console.log(`Середнє значення чисел у масиві ${arr}: ` ,sumOfArr(arr));

//3. Видалити дублікати з масиву за допомогою методу reduce.
// const arr = [1, 2, 3, 1, 2, 5, 5];
// const deleteDublicate = arr.reduce((sum, current) => {
//     if(!sum.includes(current)){
//         sum.push(current);
//     }
//     return sum;
// }, []);
// console.log(deleteDublicate);

//4. Знайти кількість повторень кожного слова у рядку.
// const string = `привіт я я я мене звати звати Артем Артем Артем`
// function findNumOfDublicate(str){
//     const splitedStr = str.split(/\s+/);
//     const wordCount = {};
//     for(let item of splitedStr){
//         if(item in wordCount){
//             wordCount[item]++;
//         }else{
//             wordCount[item] = 1;
//         }
//     }
//     return wordCount;
// }
// console.log(findNumOfDublicate(string));

//5. Знайти перетин двох масивів. [1, 2, 3, 4, 5] & [4, 5, 6, 7, 8] -> [4, 5]
// const arrFirts = [1, 2, 3, 4, 5];
// const arrSecond = [4, 5, 6, 7, 8];
// function findCrossOfArrays(arrFirts, arrSecond){
//     let thirdArr = [];
//     for(let item of arrFirts){
//         if(arrSecond.includes(item)){
//             thirdArr.push(item);
//         }
//     }
//     return thirdArr;
// }
// console.log(findCrossOfArrays(arrFirts, arrSecond));

//6. Перетворити масив об'єктів у рядок з певним роздільником.
// [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Bob' },
//   ]

// const arr = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Bob' },
// ];
// const fromArrToStr = (arr) => arr.map(obj => `${obj.id}: ${obj.name}.`).join('; ')
// console.log(fromArrToStr(arr));

//7. Знайти суму всіх парних чисел у масиві. [1, 2, 3, 4, 5, 6] -> 12
// const arr = [1, 2, 3, 4, 5, 6];
// let sumOfEven = arr.reduce((sum,current) => {
//     if(current % 2 === 0){
//         return sum += current;
//     }
//     return sum;
// }, 0)

// console.log(sumOfEven);

//8. Знайти максимальне і мінімальне значення у масиві чисел.
// let arr = [2, 5, 9, 10, 14];
// const maxNum = Math.max(...arr)
// const minNum = Math.min(...arr)
// console.log(`Мінімальне число в масиві ${arr}: ${minNum}
// Максимальне число в масиві ${arr}: ${maxNum}`);

//9. Знайти суму квадратів всіх парних чисел масиву. [1, 2, 3, 4, 5, 6] -> 56
// const arr = [1, 2, 3, 4, 5, 6];
// const SumOfEven = arr.reduce((sum, current) => {
//     if(current % 2 === 0){
//         return sum += current ** 2;
//     }
//     return sum;
// }, 0)
// console.log(SumOfEven);

//10. Перевірити, чи є дане слово паліндромом (читається однаково зліва направо і справа наліво). 'Radar'
// const str = 'radar'
// function isPalindorm(str){
//     const lowerStr = str.toLowerCase();
//     const reverseWord = str.toLowerCase().split('').reverse().join('');
//     if(lowerStr === reverseWord){
//         return 'слово є паліндромом'
//     }else return 'Слово не є паліндромом'
// }
// console.log(isPalindorm(str));

// 11. Перевірити, чи є дане слово анаграмою іншого слова (складається з тих самих літер, але в іншому порядку).
// 'listen', 'silent' -> true
// const firstWord = 'listen';
// const secWord = 'silent';
// function isAnograma(firstWord, secWord){
//     const sortFirstWord = firstWord.split('').sort().join('')
//     const sortSecWord = secWord.split('').sort().join('')
//     if(sortFirstWord === sortSecWord){
//         return 'Слово є анограмою'
//     }else return 'Слово не є анограмою'
// }
// console.log(isAnograma(firstWord, secWord));

//12. Поєднати два масиви, відсортувати їх за зростанням і видалити дублікати. 
// const arr1 = [2, 4, 5, 6, 8];
// const arr2 = [1, 3, 5, 6, 7];
// function unitedSortDeleteArrays(arr1, arr2){
//     const unitedArr = arr1.concat(arr2).sort((a, b) => a - b);
//     const deleteDublicate = unitedArr.reduce((sum, current) => {
//         if(!sum.includes(current)){
//             sum.push(current)
//         }
//         return sum;
//     }, [])
//     return deleteDublicate;
// }
// console.log(unitedSortDeleteArrays(arr1, arr2));

//13. Видалити найменше і найбільше число з масиву і повернути новий масив без цих елементів. [3, 1, 6, 2, 8, 4]
// const arr = [3, 1, 6, 2, 8, 4];
// function deleteMinAndMax(arr){
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     const sortArr = arr.filter(el => el !== min && el !== max);
//     return sortArr;
// }
// console.log(deleteMinAndMax(arr));