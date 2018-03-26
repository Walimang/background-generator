var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonGen = document.getElementById("colorGen");


function randomColor() {
    return "#" + Math.random().toString(16).slice(2,8);
}

function setGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1.value + ", " + color2.value + ")";
    
    css.textContent = body.style.background + ";";
}

function colorGenerator(){
    var rancolor1 = randomColor();
    var rancolor2 = randomColor();
    body.style.background = "linear-gradient(to right, "
    + rancolor1 + ", " + rancolor2 + ")";
    
    css.textContent = body.style.background + ";"; 
   // console.log(rancolor1 + " " + rancolor2);
}


setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
buttonGen.addEventListener("click", colorGenerator);