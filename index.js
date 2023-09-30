var randNO1= Math.floor(Math.random()*6)+1;
var randDiceImage= "dice"+randNO1+".png";
var randImageSrc= "images/"+randDiceImage;

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randImageSrc);

var randNO2= Math.floor(Math.random()*6)+1;
var randImageSrc2= "images/dice"+randNO2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randImageSrc2);

if(randNO1>randNO2){
    document.querySelector("h1").innerHTML="Player 1 wins !!!";
}

else if(randNO2>randNO1){
    document.querySelector("h1").innerHTML="Player 2 wins !!!"; 
}
else{
    document.querySelector("h1").innerHTML="Draw !!!";
}