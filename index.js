function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (var i = 0; i<musicians.length; i++){
<<<<<<< HEAD
   array.push(musicians[i] + " plays " + instruments[i]);
=======
   array.push(musicians[0] + " plays " + instruments[0]);
>>>>>>> ac136eb3611a56bace5cd5bb0676d3ae85656c6f
  }
  return array;
}

function iLoveTheBeatles(n){
  var newarray=[]
  do{
<<<<<<< HEAD
    newarray.push("I love the Beatles!")
    n++
  } while(n<15);
  return newarray
}

function johnLennonFacts(facts){
   var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
=======
    newarray.push("I love the Beatles!" + n)
    n++
  } while(n<15);
  return newarray
>>>>>>> ac136eb3611a56bace5cd5bb0676d3ae85656c6f
}