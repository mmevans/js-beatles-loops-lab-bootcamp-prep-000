function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  
  for(var i = 0; i < musicians.length; i++) {
    empty.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return empty;
}

function johnLennonFacts(facts) {
  var results = [];
  var i = 0;
  while(i < facts.length) {
    results.push(facts[i] + "!!!");
    i++;
  }
  return results;
}

function iLoveTheBeatles(num) {
  var emptyArray = [];
  var i = 0;
  function incrementVariable()
  {
    i = i + 1;
    return i;
  }
  do {
    emptyArray.push("I love the Beatles!");
  } while (num < incrementVariable());
}