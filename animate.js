var slider = document.getElementById("myRange");
var levelOne = document.getElementById("levelOne");
var levelTwo = document.getElementById("levelTwo");
var levelThree = document.getElementById("levelThree");


// log the value of the slider
// slider.oninput = function () {
//   console.log(this.value);
// }

slider.oninput = function () {
  if (this.value < 33) {
levelOne.classList.remove("hidden");
levelTwo.classList.add("hidden");
levelThree.classList.add("hidden");
  }
  else if (this.value >= 33 && this.value < 66) {
  levelOne.classList.add("hidden");
levelTwo.classList.remove("hidden");
levelThree.classList.add("hidden");  
  }
  else if (this.value >= 66) {
  levelOne.classList.add("hidden");
levelTwo.classList.add("hidden");
levelThree.classList.remove("hidden");  
  }
}