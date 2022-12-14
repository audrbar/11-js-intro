/*
IF sablonai
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} else if () {} ...  else if () {}
if () {} else if () {} ...  else if () {} else {}
Palyginimo operatoriai:
    Naudotini: <, >, >=, =<, ===, !== (tikrina tipa ir reiksme)
    Nenaudotini: ==, != (tikrina tipa)
Loginiai operatoriai:
&& - AND - turi tenkinti visas salygas
|| - OR - turi tenkinti bent viena
*/

const a = 7;
const b = 5;

console.log('start');
if (a > b) {
    console.log(`${a} daugiau us ${b}`);
} else {
    console.log(`${a} nera daugiau us ${b}`);
}
console.log('end');

console.log('start');
if (a == b) {
    console.log(`${a} yra lygu ${b}`);
} else {
    console.log(`${a} nera lygu ${b}`);
}
console.log('end');

console.log('start');
if (a != b) {
    console.log(`${a} ne lygu ${b}`);
} else {
    console.log(`${a} lygu ${b}`);
}
console.log('end');
console.log('--------------<<<>>>----------------');
const c = 11;
const d = 13;

console.log('start');
if (c > d) {
    console.log(`C daugiau uz D`);
} else if (c < d) {
    console.log(`C maziau uz D`);
} else if (c == d) {
        console.log(`C lygu D`);
}
console.log('end');
console.log('--------------<<<>>>----------------');
console.log('start');
if (c > d) {
    console.log(`C daugiau uz D`);
} else if (c < d) {
    console.log(`C maziau uz D`);
} else if (c == d) {
        console.log(`C lygu D`);
}
console.log('end');
console.log('--------------<<<>>>----------------');
console.log('start');
if ('labas' === 'Labas') {
    console.log('vienodi');
} else {
    console.log('skirtingi');
}
console.log('end');

console.log('--------------<<<>>>----------------');
const suma = '5';
if (typeof suma === 'number') {
    console.log('Pavedinmas');
} else {
    console.log('Jokio pavedimo');
}
console.log('--------------Code Nesting----------------');
const day = 8;

if (day === 1) {
    console.log('pirmadienis');
} else {
    if (day === 2) {
        console.log('antradienis');
    } else {
        if (day === 3) {
            console.log('trciadienis');
        } else {
            if (day === 4) {
                console.log('ketvirtadienis');
            } else {
                if (day === 5) {
                    console.log('penktadienis');
                } else {
                    if (day === 6) {
                        console.log('sestadienis');
                    } else {
                        if (day === 7) {
                            console.log('sekmadienis');
                        } else {
                            console.log('tokios savates dienos nera');
                        }
                    }
                }
            }
        }
    }
}
console.log('is naujo:');
if (day === 1) {console.log('pirmadienis');
} else if (day === 2) {
    console.log('antradienis');
} else if (day === 3) {
    console.log('trciadienis');
} else if (day === 4) {
    console.log('ketvirtadienis');
} else if (day === 5) {
    console.log('penktadienis');
} else if (day === 6) {
    console.log('sestadienis');
} else if (day === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokios savates dienos nera');
};
console.log('--------------Code Economy----------------');
const parkasDirba = true;
const bijauAukscio = true;

if (parkasDirba === true) {
    console.log('Einu i parka, nes dirba.');
} else {
    if (bijauAukscio)
    console.log('Parkas nedirba. Bandykite kita karta.');
};

if (parkasDirba && bijauAukscio) {
    console.log('Maaaaaaaa!');
} else if (parkasDirba && !bijauAukscio) {
    console.log('Einu i parka, bus smagu.');
} else if (!parkasDirba && bijauAukscio) {
    console.log('Nedirba. Man pasiseke!');
} else if (!parkasDirba && !bijauAukscio) {
    console.log('Paskas nedirba. Man liudna, nes norejau.');
} else {
    console.log('Neimanomas pasiekti atvejis');
};

console.log('--------------Logic Operators----------------');
const amzius = 45;
const amziausRiba = 20;
const ugis = 150;
const ugioRiba = 180;
const turiuPinigu = 5;
const kaina = 10;

if (amzius >= amziausRiba) {
    if (ugis >= ugioRiba) {
        if (turiuPinigu >= kaina) {
            console.log('Einu');
        } else {
            console.log('Negalima');
        }
    } else {
        console.log('Negalima');
    }
} else {
    console.log('Negalima');
}

if (amzius >= amziausRiba
    && ugis >= ugioRiba
    && turiuPinigu >= kaina) {
        console.log('Einu');
    } else {
        console.log('Negalima');
}

if (amzius < amziausRiba) {
    console.log('Negalima');
} else if (ugis < ugioRiba) {
    console.log('Negalima');
} else if (turiuPinigu < kaina) {
    console.log('Negalima');
} else {
    console.log('Einu');
}