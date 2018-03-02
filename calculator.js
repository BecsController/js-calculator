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
    temp = '';
    entries = [];
    document.getElementById("answer").innerHTML = temp;
  }
  if (val === 'squared') {
    temp = (Math.sqrt(temp));
    document.getElementById("answer").innerHTML = temp;
  }
  if (val === 'back') {
    temp = temp.slice(0, - 1);
    document.getElementById("answer").innerHTML = temp;
  }

  if (val === '=') {
    var answer = eval(entries.join(' '));
    var compute = answer;
    document.getElementById("answer").innerHTML = compute;
    temp = '';
    entries = [];

  } else {
    temp += val;
    document.getElementById("answer").innerHTML = temp;
    entries.push(val);
  }
}
