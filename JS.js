var initialVarible = document.querySelector("#ducky")
var badVarible = document.querySelector("#ducky")
var goodVarible = document.querySelector("#ducky")

function myFunctionMid(){
    alert("middle clicked");
    
    
    console.log(initialVarible)
    if (initialVarible.style.visiblity === "visible") {
      initialVarible.setAttribute('visible',false);
      console.log("if")
    } else {
      initialVarible.setAttribute('visible',true);
      console.log("else")
    }
    console.log("button working")
    }

function myFunctionRight(){
    alert("right clicked");

    initialVarible.setAttribute('visible',false);
    
    }