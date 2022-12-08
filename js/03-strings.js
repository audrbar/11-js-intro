console.log('------------STRINGS---------------------');

const hi = 'labas';
console.log(hi);

const hey = 'rytas';
console.log(hey);

const sentense = hi + ' ' + hey;
console.log(sentense);

const user = 'John';
const userHi = 'Hi, ' + user + '!';
console.log(userHi);

console.log('------------kabutes tipai \ back slash---------------------');

const kabute1 = "'";
console.log(kabute1);

const kabute2 = "Tekstas (')";
console.log(kabute2);

const kabute3 = 'Tekstas (")';
console.log(kabute3);

const kabute = 'Tekstas (") ir dviguba (\')';
console.log(kabute);

const kabuteAll = 'Tekstas (\") ir dviguba (\')';
console.log(kabuteAll);
console.log('------------kabutes tipai \ back slash---------------------');

console.log(hey);

const sentense1 = hi + ' ' + hey;
console.log(sentense1);
const userHy = 'Hi, ' + user + '!';
console.log(userHy);

const viengubaKabute = "'";
const dvigubaKabute = '"';

const kabuciuSakinys = 'Vienguba kabute (' + viengubaKabute + ') ir dviguba kabute (' + dvigubaKabute + ').';
console.log(kabuciuSakinys);

const kabutesBacktick = `Vienguba kabute (') ir dviguba kabute ("") ir backtick (\`).`;
console.log(kabutesBacktick);

console.log('------------backtick and place holder---------------------');

const backtickSakinys = `Vienguba kabute (${viengubaKabute}) ir dviguba kabute (${dvigubaKabute}) ir backtick (\`).`;
console.log(backtickSakinys);

const userBacktick = `Hi, ${user}!`;
console.log(userBacktick);