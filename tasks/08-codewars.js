console.clear();

// function solution(str){
//     return str.split('').reverse().join('');
// }
// console.log(solution('world'));

// function areYouPlayingBanjo(name) {
//     let playing = '';
//     if(name[0] === 'R' || name[0] === 'r') {
//         playing = name + " plays banjo" 
//     } else {
//         playing = name + " does not play banjo"
//     }
//     return playing;
// }
// console.log(areYouPlayingBanjo('renald'));

// sum = numbers => numbers.reduce((a, b) => a + b, 0);
// console.log(sum([1, 5.2, 4, 0, -1]));

/*for (let i = 0; i < count; i++) {
    sum += marks[i];
    console.log(i, marks, marks[i], sum);
}*/

// function sumMix(x) {
//     let sum = 0;
//     for(let i = 0; i < x.length; i++){
//     if(typeof x[i] === 'string'){
//       x[i] = Number(x[i]);
//     }
//      sum += x[i];
//     }
//     return sum;
//     }
// console.log(sumMix([9, 3, '7', '3']));

function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) sum += arr[i]
    }
    return sum
}
    console.log(positiveSum([1,2,3,4,5]),15);
    console.log(positiveSum([1,-2,3,4,5]),13);
    console.log(positiveSum([]),0);
    console.log(positiveSum([-1,-2,-3,-4,-5]),0);
    console.log(positiveSum([-1,2,3,4,-5]),9);

    function bmi(weight, height) {
        let bmi = weight / (height**2);
        if(bmi < 18.5){
          return "Underweight";
        }else if (bmi < 25){
          return "Normal";
        }else if (bmi < 30){
          return "Overweight";
        }else{
          return "Obese";
        }
}
console.log(bmi(50, 1.80), "Normal");

// return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function greet(name){
    return `"Hello, ${name} how are you doing today?");`
}
console.log(greet("Ryan"), "Hello, Ryan how are you doing today?");
console.log(greet("Shingles"), "Hello, Shingles how are you doing today?");

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

function paperwork(n, m) {
    let paperwork = n*m;
    if(n < 0 || m < 0) {
        return 0;
    } else {
        return paperwork;
    }
}
// return n < 0 || m < 0 ? 0 : n * m;
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
console.log(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
console.log(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
console.log(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
console.log(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
console.log(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
    return str.slice(1, -1);
   };
   console.log(removeChar('eloquent'), 'loquen');
   console.log(removeChar('country'), 'ountr');
   console.log(removeChar('person'), 'erso');
   console.log(removeChar('place'), 'lac');
   console.log(removeChar('ooopsss'), 'oopss');


   function abbrevName(name){
    return name.split(" ").map(el => el[0].toUpperCase()).join(".");
}
console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");

function boolToWord( bool ){
    return bool === true ? 'Yes' : 'No';
}
console.log(boolToWord(true), 'Yes')
console.log(boolToWord(false), 'No')


function smash (words) {
    return words.join(' ');
};
console.log(smash(["hello", "world"]), "hello world");
console.log(smash(["hello", "amazing", "world"]), "hello amazing world");
console.log(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");

function litres(time) {
    return Math.floor(time/2);
}

console.log(litres(2), 1, 'should return 1 litre');
console.log(litres(1.4), 0, 'should return 0 litres');
console.log(litres(12.3), 6, 'should return 6 litres');
console.log(litres(0.82), 0, 'should return 0 litres');
console.log(litres(11.8), 5, 'should return 5 litres');
console.log(litres(1787), 893, 'should return 893 litres');
console.log(litres(0), 0, 'should return 0 litres');

function sumTwoSmallestNumbers(numbers) {  
    let first = Math.min(...numbers)
    numbers.splice(numbers.indexOf(first), 1)
    let second = Math.min(...numbers)
    return first + second
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]; // fix me!
}
console.log(minMax([1, 2, 3, 4, 5]));
console.log([[2334454, 5], [5, 2334454]]);
console.log([[5], [5, 5]]);

console.clear();

function findSmallestInt(args) {
        return Math.min(...args);
}
console.log(findSmallestInt([78,56,232,12,8]));
console.log(findSmallestInt([78,56,232,12,18]));
console.log(findSmallestInt([78,56,232,412,228]));
console.log(findSmallestInt([78,56,232,12,0]));
console.log(findSmallestInt([1,56,232,12,8]));

function rentalCarCost(d) {
    if (d >= 3 && d < 7) {
     return d * 40 - 20;
   }
   
   else if (d >= 7) {
   return d * 40 - 50;
   }
   else
   return d * 40;
 }
//  return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
 console.log(rentalCarCost(1), 40);
 console.log(rentalCarCost(2), 80);

 function doubleChar(str) {
    return str.split('').map(c => c + c).join('');
}
console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");

console.clear();

function invert(array) {
    return array.map(i => i === 0 ? i : -i);
}

console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
console.log(invert([]), []);
console.log(invert([0]), [-0]);

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
const quarterOf = (month) => {
    if (month < 4) return 1;
    if (month < 7) return 2;
    if (month < 10) return 3;
    return 4;  
}
// return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
console.log(quarterOf(3), 1);
console.log(quarterOf(8), 3);
console.log(quarterOf(11), 4);

// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
function lovefunc(flower1, flower2){
    if(flower1 % 2 == 0 && flower2 % 2 == 1){
        return true;
    }
     if(flower1 % 2 == 1 && flower2 % 2 == 0){
       return true;
    }
    else{
        return false;
        }
}
// return flower1 % 2 !== flower2 % 2;
console.log(lovefunc(1,4), true);
console.log(lovefunc(2,2), false);
console.log(lovefunc(0,1), true);
console.log(lovefunc(0,0), false);

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
function hoopCount (n) {
    return n < 11 ? "Keep at it until you get it" : "Great, now move on to tricks";    
 }
console.log(hoopCount(3),"Keep at it until you get it");
console.log(hoopCount(11),"Great, now move on to tricks");

function removeEveryOther(arr){
    return arr.filter((el,i) => i %2 ==0);  
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);


let number = function(array) {
    return array.map(function (line, index) {
        return (index + 1) + ": " + line;
      });
}
// return array.map((s, i) => `${++i}: ${s}`);
console.log(number([]), [], 'Empty array should return empty array');
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');

// Given a list of integers, determine whether the sum of its elements is odd or even. Give your answer as a string matching "odd" or "even". If the input array is empty consider it as: [0] (array with a zero).
function oddOrEven(array) {
    return array.reduce((a,b) => a + b, 0) % 2 === 0 ? 'even' : 'odd'; 
}
//   return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
console.log(oddOrEven([0]), 'even');
console.log(oddOrEven([1]), 'odd');
console.log(oddOrEven([]), 'even');
console.log(oddOrEven([0, 1, 5]), 'even');
console.log(oddOrEven([0, 1, 3]), 'even');
console.log(oddOrEven([1023, 1, 2]), 'even');

// Function, which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b keeping their order. If a value is present in b, all of its occurrences must be removed from the other:
function arrayDiff(a, b) {
    return a.filter(i => !b.includes(i));
}
console.log(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
console.log(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
console.log(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
console.log(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")

// Convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
function duplicateEncode(word){
    let str = word.toLowerCase();
    let unique = '';
        for (var i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
            unique += '(';
        } else
        unique += ')';
        }
        return unique;
}
console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
function cockroachSpeed(s) {
    return Math.floor(s * 1000 / 36);
}
// const cockroachSpeed = s => Math.floor(s / 0.036);
console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution(str, ending){
    return str.endsWith(ending);
}
console.log(solution('abcde', 'cde'), true);
console.log(solution('abcde', 'abc'), false);

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
}
console.log(Kata.getVolumeOfCuboid(1,2,2),  4);
console.log(Kata.getVolumeOfCuboid(6,2,5), 60);

// You will be given a number and you will need to return it as a string in Expanded Form.
function expandedForm(num) {
    let str = String(num).split('');
    for(let i = 0; i < str.length; i++ ){
        for(let j = str.length - i; j > 1; j--){
          if(str[i] == '0'){
            i++;
          }else{
           str[i] += '0'; 
          }
        }
    }
    return str.filter(item => item != '0').join(' + ');
}
// const expandedForm = n => n.toString().split("").reverse().map((a, i) => a * Math.pow(10, i)).filter(a => a > 0).reverse().join(" + ");
console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation. The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.
function setAlarm(employed, vacation){
    return employed == true && vacation == false ? true : false;
}
// const setAlarm = (employed, vacation) => employed && !vacation;
console.log(setAlarm(true, true),  false,"Should be false.");
console.log(setAlarm(false,true),  false, "Should be false.");
console.log(setAlarm(true, false), true,"Should be true.");

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1] ? true : false;
}
// return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
// return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
console.log(feast("great blue heron", "garlic naan"), true);
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("brown bear", "bear claw"), false);

// Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative. If the input is an empty array or is null, return an empty array.
function countPositivesSumNegatives(input) {
    let positiveNumbers = 0;
    let negativeNumbers = 0;
    if (input === null || input.length === 0) {
    return [];
    } else {
    input.forEach((num) => num > 0 ? positiveNumbers++ : negativeNumbers += num);
    }
    return [positiveNumbers , negativeNumbers];
}
//return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));

// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

const db = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
};
function greeting(language) {   
    return db[language] || db.english;
}
// return langs[lang]||langs['english'];
console.log(greeting('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
console.log(greeting('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
console.log(greeting('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");

// Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split("").reverse().join("") ? true : false;
}
console.log(isPalindrome("a"), true);
console.log(isPalindrome("aba"), true);
console.log(isPalindrome("Abba"), true);
console.log(isPalindrome("hello"), false);
console.log(isPalindrome("Bob"), true);
console.log(isPalindrome("Madam"), true);
console.log(isPalindrome("AbBa"), true);
console.log(isPalindrome(""), true);

// Given an array of integers, return a new array with each value doubled.
function maps(x){
    let result = [];
    x.forEach(function (el) { result.push(el + el);})
    return  result;
}
console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);

// Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive? Return True if yes, False otherwise :)
function hero(bullets, dragons){
    return bullets / dragons >= 2 ? true : false;
}
// return bullets >= dragons * 2
console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);
console.clear();