/*
FOR - ciklas (loop)
kartojame norima logika n kartu iki kol reikia
reikia patikrinimo salygos
Sablonas
for () {
    logika kartoti n kartu;
}
*/
// isspausdinti skaicius nuo 0 iki 5
console.log('------Print Sequense-------');
let i = 0;
console.log('Atsakymas: ', i++);
console.log('Atsakymas: ', i++);
console.log('Atsakymas: ', i++);

for (let i = 0; i<=5; i++) {
    console.log('For ciklo atsakymas: ', i);
}

// isspausdinti skaicius nuo 0 iki 10
for (let i = 5; i<=10; i++) {
    console.log('Ciklo atsakymas: ', i);
}

// isspausdinti skaicius nuo -10 iki -5
for (let i = -10; i<=-5; i++) {
    console.log('Ciklo atsakymas neigiamas: ', i);
}

// isspausdinti skaicius nuo 10 iki 5
for (let i = 10; i>=5; i--) {
    console.log('Ciklo atsakymas atvirkscias: ', i);
}

console.log('---------Marks Average Count--------');
const marks = [10, 2, 8, 4, 6];
const count = marks.length;
let sum = 0

for (let i = 0; i < count; i++) {
    sum += marks[i];
    console.log(i, marks, marks[i], sum);
}

const average = sum / count;
console.log('Pazymiu vidurkis: ', average);

console.log('---------Marks Average Count--------');

const petras = [10, 8, 6];
const count2 = petras.length;
let sum2 = 0;

for (let i = 0; i < count2; i++) {
    sum2 += petras[i];
}
console.log('Petro vidurkis: ', sum2);

const maryte = [6, 9, 7];
const count3 = maryte.length;
let sum3 = 0;

for (let i = 0; i < count3; i++) {
    sum3 += maryte[i];
}
console.log('Marytes vidurkis: ', sum3);

console.log('---------Marks Average Count Function--------');

function marksAverage(marksArray) {
    let sum = 0;
    for (let i = 0; i < marksArray.length; i++) {
        sum += marksArray[i];
    }
    return sum / marksArray.length;
};

const student1 = {
    name: 'Jonas',
    marks: [6, 8, 9 , 6]
};

const student2 = {
    name: 'Ona',
    marks: [6, 8, 9 , 6]
};

const student3 = {
    name: 'Aloyzas',
    marks: [6, 8, 9 , 6]
};

const student4 = {
    name: 'Marius',
    marks: []
};

const vidurkis1 = marksAverage(student1.marks);
const vidurkis2 = marksAverage(student2.marks);
const vidurkis3 = marksAverage(student3.marks);
const vidurkis4 = marksAverage(student4.marks);

console.log(`${student1.name} pazymiu vidurkis yra: ${vidurkis1}.`);
console.log(`${student2.name} pazymiu vidurkis yra: ${vidurkis2}.`);
console.log(`${student3.name} pazymiu vidurkis yra: ${vidurkis3}.`);
console.log(`${student4.name} pazymiu vidurkis yra: ${vidurkis4}.`);