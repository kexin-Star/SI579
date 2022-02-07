/*
* Excercise 1
*
*/
const currentColor = document.getElementById("color-name");
const colorBlock = document.getElementById("color-block");

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(click == true){ //change color from red to background color
        //change the background color using JS
        colorBlock.style.backgroundColor = "#ff1493";
        //Change the text of the color using the span id color-name
        currentColor.innerHTML = "#FF1493";
        click = false;
    }
    else{
        //change the background color using JS
        colorBlock.style.backgroundColor = "#F08080";
        //Change the text of the color using the span id color-name
        currentColor.innerHTML = "#F08080";
        click = true;
    }
}

var click = new Boolean(true); //unclick status

colorBlock.addEventListener('click', (e)=>{
    changeColor();
});

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const covertButton = document.getElementById("convertbtn");
const inputBox = document.getElementById("f-input");
const outputTemp = document.getElementById("c-output");
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    const inputTemp = inputBox.value;
    var fTemp = inputTemp;
    var cTemp = (fTemp - 32)*5/9;
    //Send the calculated temperature to HTML
    outputTemp.innerHTML = cTemp;
}

inputBox.addEventListener("change", (e) => {
    convertTemp();
});



