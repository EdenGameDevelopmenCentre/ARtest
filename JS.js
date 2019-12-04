var initialVarible = document.querySelector("#ducky")
var badVarible = document.querySelector("#avocadoy")
var goodVarible = document.querySelector("#brainstemy")
var imageVarible = document.querySelector("#imagetest")


function codeAddress() {
  initialVarible.setAttribute('visible',true);
  badVarible.setAttribute('visible',false);
  goodVarible.setAttribute('visible',false);
  console.log(goodVarible)
  alert('ok');
}
window.onload = codeAddress;

function myFunctionMid(){
    alert("middle clicked");
    
      initialVarible.setAttribute('visible',false);
      badVarible.setAttribute('visible',true);
      goodVarible.setAttribute('visible',false);

      imageVarible.setAttribute('visible',false);
    
    
    }

function myFunctionRight(){
    alert("right clicked");

    initialVarible.setAttribute('visible',false);
    console.log(initialVarible)
    badVarible.setAttribute('visible',false);
    console.log(badVarible)
    goodVarible.setAttribute('visible',true);
    console.log(goodVarible)
    
    
    setTimeout(function(){ window.open("https://www.w3schools.com"); }, 5000);
    
    
   
   
    
    

    }