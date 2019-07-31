

var count = 0;
var deathZLimit = -29;
var track = [-10, -7, -3.5, 3.5, 7, 0];
var animalDelay = 8000;
var animaMinZ = -30.8;
  
  


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


function addTrack(trackN){
  
  console.log("ssssssssssssssssssssss")
  var sceneEl = document.querySelector('a-scene');

  var track = document.createElement('a-plane');
  track.setAttribute('class',"track");
  track.setAttribute('position',trackN + " 0 0");
  track.setAttribute('rotation',"-90 0 0");
  track.setAttribute('color',"#333333");
  track.setAttribute('width',"2");
  track.setAttribute('height',"60");
  track.setAttribute('shadow',"true");
  track.setAttribute('material', "src: https://images.unsplash.com/photo-1551101674-0ac7887568cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80; repeat: 1 20")
  sceneEl.appendChild(track);
  
  
  var left = document.createElement('a-cylinder');
  left.setAttribute('class',"track");
  left.setAttribute('position', (trackN-0.7) + " 1 0");
  left.setAttribute('rotation',"-90 0 0");
  left.setAttribute('color',"#888888");
  left.setAttribute('radius',"0.05");
  left.setAttribute('height',"60");
  left.setAttribute('shadow',"true");
  left.setAttribute('material',"src: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvAKE37StLCmylQcda8aCYeFfkIPPvQwjLFHpoUI7vdB6h5LA; repeat: 1 30");
  sceneEl.appendChild(left);
  
  var right = document.createElement('a-cylinder');
  right.setAttribute('class',"track");
  right.setAttribute('position', (trackN+0.7) + " 1 0");
  right.setAttribute('rotation',"-90 0 0");
  right.setAttribute('color',"#888888");
  right.setAttribute('radius',"0.05");
  right.setAttribute('height',"60");
  right.setAttribute('shadow',"true");
  right.setAttribute('material',"src: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh939HUhaTjcQYa5Iov3iknS7YlilJoFajkrbdNY11IEbozM3k; repeat: 1 30");
  sceneEl.appendChild(right);
  
  var left2 = document.createElement('a-cylinder');
  left2.setAttribute('class',"track");
  left2.setAttribute('position', (trackN-0.7) + " 0.75 0");
  left2.setAttribute('rotation',"-90 0 0");
  left2.setAttribute('color',"#888888");
  left2.setAttribute('radius',"0.05");
  left2.setAttribute('height',"60");
  left2.setAttribute('shadow',"true");
  left2.setAttribute('material',"src: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06PETcp0LhZvbME8qDJq2-QcIMnhwayXQdb2spO4k_cOj5IN6pQ; repeat: 1 30");
  sceneEl.appendChild(left2);
  
  var right2 = document.createElement('a-cylinder');
  right2.setAttribute('class',"track");
  right2.setAttribute('position', (trackN+0.7) + " 0.75 0");
  right2.setAttribute('rotation',"-90 0 0");
  right2.setAttribute('color',"#888888");
  right2.setAttribute('radius',"0.05");
  right2.setAttribute('height',"60");
  right2.setAttribute('shadow',"true");
  right2.setAttribute('material',"src: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvAKE37StLCmylQcda8aCYeFfkIPPvQwjLFHpoUI7vdB6h5LA; repeat: 1 30");
  sceneEl.appendChild(right2);
  
  
}



function addButcher(track){
      
  var sceneEl = document.querySelector('a-scene');
  var butcherBody = document.createElement('a-cone');
  
  butcherBody.setAttribute('class',"butcher");
  butcherBody.setAttribute('position',track + " 1.2 -32");
  butcherBody.setAttribute('rotation',"0 180 0");
  butcherBody.setAttribute('color',"#DDDDDD");
  butcherBody.setAttribute('material',"src: https://raw.githubusercontent.com/rafaelhss/life/master/butcherBody.png");
  
  butcherBody.setAttribute('height',"2");
  butcherBody.setAttribute('radius-top',"0.2");
  butcherBody.setAttribute('radius-bottom',"0.5");
  
  butcherBody.setAttribute('shadow',"true");
  
  sceneEl.appendChild(butcherBody);
  
  var butcherHead = document.createElement('a-sphere');
  
  butcherHead.setAttribute('class',"butcher");
  butcherHead.setAttribute('position',track + " 2.7 -32");
  butcherHead.setAttribute('rotation',"0 270 0");
  butcherHead.setAttribute('color',"#FFCCDD");
  butcherHead.setAttribute('material',"src: https://raw.githubusercontent.com/rafaelhss/life/master/butcherHead.jpg");
  
  butcherHead.setAttribute('radius',"0.7");
  
  butcherHead.setAttribute('shadow',"true");
  
  sceneEl.appendChild(butcherHead);
  
  
  
  var sceneEl = document.querySelector('a-scene');
  var knife = document.createElement('a-cone');
  
  knife.setAttribute('class',"knife");
  knife.setAttribute('position',track + " 1.9 -31.5");
  knife.setAttribute('rotation',"0 0 0");
  knife.setAttribute('color',"#DDDDDD");
  knife.setAttribute('material',"src: https://raw.githubusercontent.com/rafaelhss/life/master/butcherKnife.png");
  
  knife.setAttribute('height',"2");
  knife.setAttribute('radius-top',"0.09");
  knife.setAttribute('radius-bottom',"0.02");
  knife.setAttribute('depth',"0.3");
  knife.setAttribute('egments-radial',"3");
  
  
  knife.setAttribute('shadow',"true");
  knife.setAttribute('transparent',"true");
  
    
  knife.setAttribute('animation',"property: position; to: " + (track)+ " 1.5 -31; dur: 700; easing: linear; repeat: indefinite; loop: true; dir: alternate; delay:" + animalDelay);
  knife.setAttribute('animation__2',"property: rotation; to: 70 30 0; dur: 700; easing: linear; repeat: indefinite; loop:true; dir: alternate; delay:" + animalDelay);
  
  sceneEl.appendChild(knife);
  
}



function addBlood(sceneEl, chosenTrack ) {
  
  for(var i=0;i<60;i++){
    var blood = document.createElement('a-sphere');
    blood.setAttribute('class',"animalblood");
    blood.setAttribute('rotation',"0 90 0");
    blood.setAttribute('color',"#FF0000");

    var radius = (Math.floor(Math.random()*7)+2)/100;
    blood.setAttribute('radius',radius);
    blood.setAttribute('transparent',"true");
    blood.setAttribute('opacity',"0.0");
    blood.setAttribute('position', (chosenTrack + (Math.random()-0.5)) + " 1.3 " + animaMinZ);

    var bloodUpY = (Math.random() * 3) + 1.5;
    var bloodUpZ = (Math.random() * 7);
    var positionTo = (chosenTrack + (Math.random()*2)) + " " + bloodUpY + " " + (animaMinZ- bloodUpZ);
    blood.setAttribute('animation', "property: position; to: " + positionTo + "; dur: 1300; easing: linear; delay:"+ animalDelay +";");
    blood.setAttribute('animation__2', "property: opacity; from: 1.0 to: 0.0; dur: 1200; delay: "+ (animalDelay) +";");


    sceneEl.appendChild(blood);
  }
}


for (var i = 0, len = track.length; i < len; i++) {
  addButcher(track[i]);
  addTrack(track[i]);
}


setInterval(function createAnimal(){
  
  
  
  var sceneEl = document.querySelector('a-scene');
  var entityEl = document.createElement('a-box');
  
  entityEl.setAttribute('class',"animal");
  
  
  var chosenTrack = track[Math.floor(Math.random() * (track.length-1))];
  entityEl.setAttribute('position',chosenTrack + " 0.5 0");
  
  
  entityEl.setAttribute('rotation',"0 180 0");
  entityEl.setAttribute('color',"#DDDDDD");
  entityEl.setAttribute('material',"src: https://raw.githubusercontent.com/rafaelhss/life/master/cowBody2.png");
  
  entityEl.setAttribute('depth',"1.6");
  entityEl.setAttribute('height',"1.5");
  
  entityEl.setAttribute('shadow',"true");
  entityEl.setAttribute('transparent',"true");
  entityEl.setAttribute('animation',"property: position; to: " + chosenTrack + " 0.5 -30; dur: "+ animalDelay +"; easing: linear;");
  entityEl.setAttribute('animation__2', "property: opacity; from: 1.0 to: 0.0; dur: 2500; delay: "+ (animalDelay+500) +";");
  entityEl.setAttribute('animation__3', "property: color; to: #FF0000; dur: 500; delay: "+ animalDelay +";");
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
  
  head.setAttribute('animation',"property: position; to: " + chosenTrack + " 1.5 -30.8; dur: "+ animalDelay +"; easing: linear;");
  
  head.setAttribute('animation__2', "property: color; to: #FF0000; dur: 500; delay: "+ animalDelay +";");
  var headRoll = (Math.random() * 7);
  var positionTo = (chosenTrack + (Math.random()*2)) + " 0 " + (animaMinZ - headRoll);
  head.setAttribute('animation__3',"property: position; from: " + chosenTrack + " 0 -30.8; to: " + positionTo + "; dur: 1000; easing: linear; delay:"+ animalDelay +";");
  
  head.setAttribute('animation__4', "property: rotation; to: 360 820 0; dur: 5000; delay: "+ animalDelay +";");
  
  
  sceneEl.appendChild(head);
  
  
  
  addBlood(sceneEl, chosenTrack);
  
  
  
  
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
