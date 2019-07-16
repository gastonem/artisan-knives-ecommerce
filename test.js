const str = "hello";
const test = str.split("").reverse().join("");
function palindrome(words) {
    const test = words.split("").reverse().join("");
    if (words === test){
        console.log("true");
    } else {
        console.log("false");
    }
}

for (var i = 0; i < 100; i++) {
    if (i % 3 === 0) {
        console.log("FIZZ because" + i + " is divisible by 3");
    } else if (i % 5 === 0) {
        console.log("BUZZ because" + i + " is divisible by 5");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZ BUZZ because" + i + " is divisible by 3 & 5");
    } else {
        console.log(i);
    }
}

const anagram = (x, y) => {

} 