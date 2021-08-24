//Calculating Random Number from 1 to 6 range
var randomNumber1=(Math.floor(Math.random()*6)+1);
var randomNumber2=(Math.floor(Math.random()*6)+1);

//Adding images to website depending on the number generated
document.querySelector(".img1").setAttribute("src","dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","dice"+randomNumber2+".png");

//Changing title depending on the randomNumber1 and randomNumber2
if(randomNumber1===randomNumber2)
{
  document.querySelector("#title").textContent="Draw!";
}
else if(randomNumber1>randomNumber2)
{
  document.querySelector("#title").innerHTML="🚩 Player 1 Wins!";
}
else {
  document.querySelector("#title").innerHTML="Player 2 Wins! 🚩"
}
