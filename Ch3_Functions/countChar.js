var countBs = function(str) {
  return countChar(str, 'B');
}

var countChar = function(str, char) {
  var count = 0;
  for (i = 0; i < str.length; i++) {
    if(str[i] === char) {
      count += 1;
    }
  }
  return count
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
