var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];

function dwarfRollCall(dwarves) {
  var list = "";
  /* The loops iterates through the dwarves array. The variable "list" then gets a number
  and dwarf name added to it. If the array has more than one dwarf in it, the "list" variable
  also gets a space. The complete numbered list of dwarves if then returned. */
  for (var i = 0; i < dwarves.length; i++){
    list += `${i + 1}. ${dwarves[i]}`;
    if (list.length > i + 1){
      list += ' '
    }
  }
  return list;
}

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

function summonCaptainPlanet(planeteerCalls){
  /* The loop iterates through the planeteerCalls array and capitalizes and appends an
  exclamation point to each string in the array.*/
  for (var i = 0; i < planeteerCalls.length; i++){
    planeteerCalls[i] = planeteerCalls[i].toUpperCase();
    planeteerCalls[i] = planeteerCalls[i] + '!';
  }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  /* The loop iterates through the words array. If any of the strings in the array are
  longer than 4 characters the function returns true. */
  for (var i = 0; i < words.length; i++){
    if (words[i].length < 5){
      return false;
    } else {
      return true;
    }
  }
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
  /* The first for loop iterates through the foods array passed into the findTheCheese
  function. The second for loop iterates through the cheese array. If foods[i] equals
  cheese[j], then the cheese that is found is returned. */
  for (var i = 0; i < foods.length; i++){
    for (var j = 0; j < cheese.length; j++){
      if (foods[i] === cheese[j]){
        return cheese[j];
      }
    }
  }
  return "no cheese!"
}
