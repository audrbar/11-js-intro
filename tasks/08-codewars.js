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

