var drumCount = document.querySelectorAll(".drum").length;

// Detecting keyboard press

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Detecting mouse button press

for (var i = 0; i <= drumCount; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

function makeSound(key) {
  switch (key) {
    case 'w':
    case 'W':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
    case 'A':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
    case "S":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
    case "D":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
    case "J":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
    case "K":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
    case "L":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
  }

}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");

  var delayInMilliseconds = 20;
  setTimeout(function() {
    activeButton.classList.remove("pressed");
    }, delayInMilliseconds);

}
