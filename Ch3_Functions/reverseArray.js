var reverseArray = function(arr) {
  var newArr = [];
  for(i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

var reverseArrayInPlace = function(arr) {
  for(i = 0; i < Math.floor(arr.length/2); i++) {
    temp = arr[i]
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
