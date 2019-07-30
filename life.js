

var count = 0;
var deathZLimit = -29;
  
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
    camera.getAttribute("position").x = 0;
    camera.getAttribute("position").y = 1.5;
  /*
  if( camera.getAttribute("position").z > deathZLimit ) {
      walkElement(camera, -(1));
    } else {
      console.log("no walk camera:")
      console.log(camera.getAttribute("position").z)
      console.log(deathZLimit)
    }
  */
    
    

  
  
  
}


//setInterval(loop, 1000);



setInterval(function CheckAnimal(){
    var animals = document.getElementsByClassName("animal");
    Array.prototype.forEach.call(animals, animal => {
      //walkElement(animal, -(1 + Math.random()));
      if(animal.getAttribute("position").z <= deathZLimit){
        animal.setAttribute("color", "#FF0000");
        animal.setAttribute("transparent", "true");
        animal.setAttribute("animation", "property: opacity; from: 1.0 to: 0.0; dur: 2500;");
        //animal.emit('rotate');
      }
    });
  }, 100)



var track = [-7, -3.5, 3.5, 7];
setInterval(function createAnimal(){
  var sceneEl = document.querySelector('a-scene');
  var entityEl = document.createElement('a-box');
  
  entityEl.setAttribute('class',"animal");
  
  
  var chosenTrack = track[Math.floor(Math.random() * track.length)];
  console.log("chosenTrack: " + chosenTrack)
  entityEl.setAttribute('position',chosenTrack + " 0.5 -3");
  
  
  entityEl.setAttribute('rotation',"0 0 0");
  entityEl.setAttribute('color',"#DDDDDD");
  entityEl.setAttribute('material',"src: https://raw.githubusercontent.com/rafaelhss/life/master/cowBody2.png");
  
  entityEl.setAttribute('shadow',"true");
  entityEl.setAttribute('transparent',"true");
  entityEl.setAttribute('animation',"property: position; to: " + chosenTrack + " 0.5 -30; dur: 8000; easing: linear;");
  //entityEl.setAttribute("animation", "property: opacity; from: 1.0 to: 0.9; dur: 3000; easing: linear; startEvents: rotate");
  sceneEl.appendChild(entityEl);
},1000);


setInterval(
function knives(){
  var knives = document.getElementsByClassName("knife");
      
    Array.prototype.forEach.call(knives, knife => {
      
      var rotation = knife.getAttribute("rotation");
      if(rotation.x <= 45){
        rotation.x = 100;  
      } else {
        rotation.x = 45;
      }
      
      knife.setAttribute("rotation", rotation);
      
    });
}
, 600);
