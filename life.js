

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



var track = [-7, -3.5, 3.5, 7];
setInterval(function createAnimal(){
  var sceneEl = document.querySelector('a-scene');
  var entityEl = document.createElement('a-box');
  
  entityEl.setAttribute('class',"animal");
  
  
  var chosenTrack = track[Math.floor(Math.random() * track.length)];
  console.log("chosenTrack: " + chosenTrack)
  entityEl.setAttribute('position',chosenTrack + " 0.5 0");
  
  
  entityEl.setAttribute('rotation',"0 180 0");
  entityEl.setAttribute('color',"#DDDDDD");
  entityEl.setAttribute('material',"src: https://raw.githubusercontent.com/rafaelhss/life/master/cowBody2.png");
  
  entityEl.setAttribute('depth',"1.6");
  entityEl.setAttribute('height',"1.5");
  
  entityEl.setAttribute('shadow',"true");
  entityEl.setAttribute('transparent',"true");
  entityEl.setAttribute('animation',"property: position; to: " + chosenTrack + " 0.5 -30; dur: 8000; easing: linear;");
  entityEl.setAttribute('animation__2', "property: opacity; from: 1.0 to: 0.0; dur: 2500; delay: 8500;");
  entityEl.setAttribute('animation__3', "property: color; to: #FF0000; dur: 500; delay: 8000;");
  //entityEl.setAttribute('animation__4',"property: position; to: " + (chosenTrack + 1) + " 0.5 -30; dur: 1000; easing: linear; delay:8000");
  
  //entityEl.setAttribute("animation", "property: opacity; from: 1.0 to: 0.9; dur: 3000; easing: linear; startEvents: rotate");
  sceneEl.appendChild(entityEl);
  


  var head = document.createElement('a-sphere');
  
  head.setAttribute('class',"animalhead");
  head.setAttribute('position',chosenTrack + " 1.5 -0.8");
  head.setAttribute('rotation',"0 90 0");
  head.setAttribute('color',"#DDDDDD");
  head.setAttribute('material',"src: https://raw.githubusercontent.com/rafaelhss/life/master/head2.jpg");
  
  head.setAttribute('radius',"0.6");
  head.setAttribute('radius-top',"0.3");
  head.setAttribute('transparent',"true");
  head.setAttribute('animation',"property: position; to: " + chosenTrack + " 1.5 -30.8; dur: 8000; easing: linear;");
  head.setAttribute('animation__2', "property: color; to: #FF0000; dur: 500; delay: 8000;");
  
  
  var headRoll = (Math.random() * 7);
  var positionTo = (chosenTrack + (Math.random()*2)) + " 0 " + (-30.8 - headRoll);
  
  head.setAttribute('animation__3',"property: position; from: " + chosenTrack + " 0 -30.8; to: " + positionTo + "; dur: 1000; easing: linear; delay:8000");
  
  head.setAttribute('animation__4', "property: rotation; to: 360 820 0; dur: 5000; delay: 8000;");
  
  

  
  //head.setAttribute('animation__4', "property: opacity; from: 1.0 to: 0.0; dur: 2500; delay: 10000;");
  //
  
  //head.setAttribute('animation',"property: position; to: " + chosenTrack + " 0 -30.8; dur: 8000; easing: linear; delay: 8000;");
  
  sceneEl.appendChild(head);
  
  
  
},1000);

/*
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
, 600);*/
