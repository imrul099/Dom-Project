/**
 * Project Reference :
 * Change the background color by genrating random gex color by clicking a button
 * Also display the hex code to a display input field
 * add a button to copy the color code.
 * add a toast massage when copied
 */

// Step :

// Global : 
let div = null;

//setp 1: create onload handler

window.onload = () => {
  mainColor();
};

function mainColor() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("btn-copy");

  changeBtn.addEventListener("click", function () {
    const cngColorBg = randomColorGenerate();
    root.style.backgroundColor = cngColorBg;
    output.value = cngColorBg;
  });

  copyBtn.addEventListener("click", function () {
    window.navigator.clipboard.writeText(output.value);
    if(div !== null){
        div.remove();
        div = null;
    }

    generateToastMessge(`${output.value} copied!`);
  });
}

//step 2 : random color generator funtion;

function randomColorGenerate() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function generateToastMessge(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-in";

  div.addEventListener("click", function () {
    div.classList.remove("toast-message-in");
    div.classList.add("toast-message-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });

  });

  document.body.appendChild(div);
}

// step 3: collect all necessary references;

// step 4 : handle the change button click event;

// step 5: handle the copy button click event.

// step 6 : activate toast message;

// step 7 : create a dynamic toast message ;

// step 8 : clear toast message:
