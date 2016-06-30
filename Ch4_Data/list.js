var arrayToList = function(arr) {
  if (arr.length === 1) return {value: arr[0], rest: null};
  return {value: arr[0], rest: arrayToList(arr.slice(1))};
}

var listToArray = function(list) {
  var arr = [];
  for(var prop in list) {
    var value = list[prop]
    if (prop === "value") arr.push(value);
    else if (value !== null) {
      temp = listToArray(value);
      arr = arr.concat(temp);
    }
  }
  return arr;
}

var nth = function(list, num) {
  if (num === 0) return list.value;
  return nth(list.rest,num-1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
