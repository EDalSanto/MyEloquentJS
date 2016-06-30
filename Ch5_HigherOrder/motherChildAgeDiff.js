function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


var hasKnownMother = ancestry.filter(function(person) {
  return person.mother in byName;
});

var diffs = hasKnownMother.map(function(person) {
  var mother = person.mother;
  return person.born - byName[mother]["born"];
});

console.log(average(diffs));

// → 31.2
