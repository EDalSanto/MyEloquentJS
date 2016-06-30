function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var groupBy = function(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if(!(groupName in groups))
      groups[groupName] = [element];
    else
      groups[groupName].push(element);
  });
  return groups
}

var byCentury = groupBy(ancestry, function(person) {
  var century = Math.ceil(person.died / 100);
  return century;
  });

for(var century in byCentury) {

  ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });

  console.log(century + ": " + average(ages));
};



// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
