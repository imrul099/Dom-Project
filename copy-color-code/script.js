/**
 * Project Reference :
 * Change the background color by genrating random gex color by clicking a button
 * Also display the hex code to a display input field 
 * add a button to copy the color code.
 */


// Step : 


//setp 1: create onload handler

window.onload = () => {
    mainColor()
};

function mainColor(){
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const changeBtn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('btn-copy')

    changeBtn.addEventListener('click', function(){
        const cngColorBg = randomColorGenerate();
        root.style.backgroundColor = cngColorBg;
        output.value = cngColorBg;
    });

    copyBtn.addEventListener('click', function(){
        window.navigator.clipboard.writeText(output.value)
    })
}



//step 2 : random color generator funtion;

function randomColorGenerate(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
