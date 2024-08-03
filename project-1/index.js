/**
 * Project Requirements:
 * Change the background color by generating random rgb color clicking a button;
 */
    window.onload = () =>{
        changeBgColor()
    }


    const btnClick =document.getElementById('change-btn');
    btnClick.addEventListener('click', function(){
        const container = document.getElementById('root');
        
        const bgColr = changeBgColor()
        container.style.backgroundColor = bgColr;
    })



// generating color:

function changeBgColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    
    
}

changeBgColor()