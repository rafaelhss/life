

var count = 0;
var deathZLimit = document.getElementsByClassName("butcher")[0].getAttribute("position").z
                  +document.getElementsByClassName("butcher")[0].getAttribute("depth")
  
function walkElement(element, step){
    var position = element.getAttribute("position");
    position.z = position.z + step;
    element.setAttribute('position', position);
    console.log("Wakl: " + step)
}

function loop(){
console.log("teteghbgggggge");
  
  
    var camera = document.getElementById("camera");
    console.log("camezra:")  
    console.log(camera.getAttribute("position").x);
    if( camera.getAttribute("position").z > deathZLimit ) {
      walkElement(camera, -(1));
    }
  
    var animals = document.getElementsByClassName("animal");
    Array.prototype.forEach.call(animals, animal => {
      walkElement(animal, -(1 + Math.random()));
      console.log(animal.getAttribute("color"))
      if(animal.getAttribute("position").z <= deathZLimit){
        animal.setAttribute("color", "#FF0000");
      }
    });
    
    

  
  
  
}


function knives(){
  var knives = document.getElementsByClassName("knife");
      
    Array.prototype.forEach.call(knives, knife => {
      console.log("knife")
      
      var rotation = knife.getAttribute("rotation");
      console.log(rotation)
      if(rotation.x <= 45){
        rotation.x = 100;  
      } else {
        rotation.x = 45;
      }
      
      knife.setAttribute("rotation", rotation);
      
    });
}

setInterval(loop, 1000);
setInterval(knives, 600);
