const numbers = [11, 2, 50, 1, 6, 99];

numbers.sort(function(a, b) 
{
  return b - a; 
});

console.log(numbers);