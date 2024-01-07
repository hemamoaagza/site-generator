var button = document.querySelector(".ancor");
var closew = document.querySelector(".close");
var clicksh3 = document.querySelector("span");


// input setup to return values as number

let input;
let linkvalue;

function returntext() {
  input = document.querySelector("#inp").valueAsNumber;
  linkvalue = document.querySelector("#linkui").value;
}


// function for opening , closing the window

let mywindow;

function e() {

  mywindow = window.open(`${linkvalue}`, "");
}

function c() {
  mywindow.close();
}


// the final function that contain all functions and add interval and clear it

let x = 0;
let counter;

function test() {
  if (input < 1) {
    alert("Error!");
    location.reload();
    return false;
  }
  e();
  setTimeout(() => {
  c();
  }, 6000);
  x++;

  clicksh3.innerText = ` ${x}`;
  if (x === input) {
    clearInterval(counter);
    alert("Job Done!");
  }
}

// add eventlistener to the click to interval the test function

button.addEventListener("click", function () {
  counter = setInterval(test, 7000);
});
