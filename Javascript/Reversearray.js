const string = "This is a Sunny Day ";

let reversedString = string.split(' ')
                 .map(word=>word.split('').reverse().join(''))
                 .join(' ');

console.log(reversedString);