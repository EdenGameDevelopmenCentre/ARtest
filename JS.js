var initialVarible = document.querySelector("#ducky")
var badVarible = document.querySelector("#avocadoy")
var goodVarible = document.querySelector("#brainstemy")


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
    
    
    console.log(initialVarible)
    if (initialVarible.getAttribute('visiblity') === 'true') {
      initialVarible.setAttribute('visible',false);
      console.log("if")
    } else {
      initialVarible.setAttribute('visible',false);
      console.log("else")


      badVarible.setAttribute('visible',true);
      goodVarible.setAttribute('visible',false);
    }
    console.log("button working")
    }

function myFunctionRight(){
    alert("right clicked");

    initialVarible.setAttribute('visible',false);
    console.log(initialVarible)
    badVarible.setAttribute('visible',false);
    console.log(badVarible)
    goodVarible.setAttribute('visible',true);
    console.log(goodVarible)

    }