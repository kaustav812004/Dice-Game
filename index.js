var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "images/dice" + randomnumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice" + randomnumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);

//Conditions for winning

if(randomnumber1 > randomnumber2)
{
    document.querySelector(".heading").innerHTML=" 🚩Player 1 Wins!";    
}
else if(randomnumber2 > randomnumber1)
{
    document.querySelector(".heading").innerHTML=" 🚩Player 2 Wins!";    
}
else
{
    document.querySelector(".heading").innerHTML=" 🚩Draw!";    
}