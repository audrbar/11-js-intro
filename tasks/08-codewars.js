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
    return `[ ${array.map(x=> x*-1).join(' , ')} ]`;
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

console.clear();

function removeEveryOther(arr){
    return arr.filter((el,i) => i %2 ==0);  
}
console.log();
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);