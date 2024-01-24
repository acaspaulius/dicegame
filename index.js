function checkRefresh() {
  if (!sessionStorage.getItem("rollDice")) {
    sessionStorage.setItem("rollDice", "extra");
  } else rollTheDice();
}

function rollTheDice() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

  let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

  let image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
  }
}
document.querySelector("body").onload = checkRefresh();
/* 

var randomNumber1 = Math.floor(Math.random() * 6) + 1

if (randomNumber1 === 1) {
  document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
if (randomNumber1 === 2) {
  document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
if (randomNumber1 === 3) {
  document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
if (randomNumber1 === 4) {
  document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
if (randomNumber1 === 5) {
  document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}
if (randomNumber1 === 6) {
  document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber2 === 1) {
  document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
if (randomNumber2 === 2) {
  document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
if (randomNumber2 === 3) {
  document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
if (randomNumber2 === 4) {
  document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}
if (randomNumber2 === 5) {
  document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}
if (randomNumber2 === 6) {
  document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}

*/
