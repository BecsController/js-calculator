document.addEventListener('DOMContentLoaded', start)

function start() {
    addEventListeners()
}
function addEventListeners() {

var buttons = document.getElementsByClassName("buttons")
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", calculate)
 }
}
 //add click event listener to each button in turn
//so that when user clicks on button, display function is called.
var temp = ''; // set up temp string for display
var entries = [];  //set up empty array for calculation

function calculate (evt) {
  var val = evt.target.id  //add button text to value
  if (val === 'C') {
    temp = '';  //if id is C, wipe string and array and print string
    entries = [];
    document.getElementById("answer").innerHTML = temp;
  }
  else if (val === 'squared') { //if id is squared, square root the string and push it's value to string
    document.getElementById("answer").innerHTML = (Math.sqrt(temp));
  }
  else if (val === 'back') {  //if id is back, slice the last char off string
    document.getElementById("answer").innerHTML = temp.slice(0, - 1);
  }
  else if (val === 'start') {
    temp = '0';
    document.getElementById("answer").innerHTML = temp;
  }

  else if (val === '=') {
    var answer = eval(entries.join(''));
    var compute = answer;
    document.getElementById("answer").innerHTML = compute;
    temp = compute;

  } else {
    temp += val;
    entries.push(val);
    document.getElementById("answer").innerHTML = temp;
  }
}
