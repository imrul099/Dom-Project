/**
 * Project Reference :
 * Change the background color by genrating random gex color by clicking a button
 * Also display the hex code to a display input field 
 */

// Steps:

//setp 1: create onload handler
window.onload = () => {
    main();
};

function main() {
    const root = document.getElementById('main-container');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');

    btn.addEventListener('click', function(){
        const bgColor = generateColor();

        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });
}


 //step 2 : random color generator funtion;
function generateColor() {
    //
    const red = Math.floor(Math.random() *255)
    const green = Math.floor(Math.random() *255)
    const blue = Math.floor(Math.random() *255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};
