console.clear();

function solution(str){
    return str.split('').reverse().join('');
}
console.log(solution('world'));

function areYouPlayingBanjo(name) {
    let playing = '';
    if(name[0] === 'R' || name[0] === 'r') {
        playing = name + " plays banjo" 
    } else {
        playing = name + " does not play banjo"
    }
    return playing;
}
console.log(areYouPlayingBanjo('renald'));

sum = numbers => numbers.reduce((a, b) => a + b, 0);
console.log(sum([1, 5.2, 4, 0, -1]));

/*for (let i = 0; i < count; i++) {
    sum += marks[i];
    console.log(i, marks, marks[i], sum);
}*/