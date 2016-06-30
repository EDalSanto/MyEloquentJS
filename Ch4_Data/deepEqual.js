var deepEqual = function(obj1,obj2) {

  // Check if both are values and equal
  if (obj1 === obj2) return true;

  if (obj1 === null || obj2 === null) {
    return false;
  }

  if ((typeof(obj1) === "object") && (typeof(obj2) === "object"))  {
    // Check if they have the same number of keys
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    // Iterate over keys in obj1, check if in obj2, and check if values equal for same property
    for (var prop in obj1) {
      if (!(prop in obj2)) return false;
      if (!deepEqual(obj1[prop],obj2[prop])) return false;
    }
    // If we've passed all these tests, return true
    return true;
  }

  // both arguments don't match any of above conditions, so equality must be false
  return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
