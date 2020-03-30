let curloc = 1;
let nextloc;
let snakes = [[14,4],[19,8],[22,20],[24,16]];
let ladders = [[3,11],[6,17],[9,18],[10,12]];

let turn = function() {
  console.log("current position of player is: " + curloc);
  let steps = dicetoss();
  console.log("you tossed the dice and you got a " + steps + "!")
  nextloc = curloc + steps;
  if(nextloc > 25) {
    console.log("woah, you beat the game!");
    return;
  }
  console.log("the new position of the player is: " + nextloc);
  for(let i=0;i<snakes.length;i++){
    if (nextloc == snakes[i][0]){
      nextloc = snakes[i][1];
      console.log("oh no, you stepped on a snake! your new position is: " + nextloc);
    }
  }
  for(let i=0;i<ladders.length;i++){
    if (nextloc == ladders[i][0]){
      nextloc = ladders[i][1];
      console.log("woohoo, you found a ladder! your new position is: " + nextloc);
    }
  }
  console.log("end of turn.")
  curloc = nextloc;
}

let dicetoss = function(){
  return Math.floor(Math.random() * 6) + 1;
}

while(curloc < 25) {
  turn();
}
