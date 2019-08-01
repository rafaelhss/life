

var count = 0;
var deathZLimit = -29;
var track = [-6, -4, -2, 2, 4, 0];
var animalDelay = 8000;
var animaMinZ = -30.8;
var finish = false;  
  


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
  
  var trackWidth = 2;
  
  var sceneEl = document.querySelector('a-scene');

  var track = document.createElement('a-plane');
  track.setAttribute('class',"track thing");
  track.setAttribute('position',trackN + " -0.2 0");
  track.setAttribute('rotation',"-90 0 0");
  track.setAttribute('color',"#333333");
  track.setAttribute('width',trackWidth);
  track.setAttribute('height',"100");
  track.setAttribute('shadow',"true");
  track.setAttribute('material', "src: #floor; repeat: 1 20")
  sceneEl.appendChild(track);
  
     
  
  var left = document.createElement('a-cylinder');
  left.setAttribute('class',"track thing");
  left.setAttribute('position', (trackN -(trackWidth/2)) + " 1 1");
  left.setAttribute('rotation',"-90 0 0");
  left.setAttribute('color',"#888888");
  left.setAttribute('radius',"0.05");
  left.setAttribute('height',"60");
  left.setAttribute('shadow',"true");
  left.setAttribute('material',"src: #wood4; repeat: 1 30");
  sceneEl.appendChild(left);
  
  var right = document.createElement('a-cylinder');
  right.setAttribute('class',"track thing");
  right.setAttribute('position', (trackN + (trackWidth/2)) + " 1 1");
  right.setAttribute('rotation',"-90 0 0");
  right.setAttribute('color',"#888888");
  right.setAttribute('radius',"0.05");
  right.setAttribute('height',"60");
  right.setAttribute('shadow',"true");
  right.setAttribute('material',"src: #wood3; repeat: 1 30");
  sceneEl.appendChild(right);
  
  var left2 = document.createElement('a-cylinder');
  left2.setAttribute('class',"track thing");
  left2.setAttribute('position', (trackN- (trackWidth/2)) + " 0.75 1");
  left2.setAttribute('rotation',"-90 0 0");
  left2.setAttribute('color',"#888888");
  left2.setAttribute('radius',"0.05");
  left2.setAttribute('height',"60");
  left2.setAttribute('shadow',"true");
  left2.setAttribute('material',"src: #wood2; repeat: 1 30");
  sceneEl.appendChild(left2);
  
  var right2 = document.createElement('a-cylinder');
  right2.setAttribute('class',"track thing");
  right2.setAttribute('position', (trackN+(trackWidth/2)) + " 0.75 1");
  right2.setAttribute('rotation',"-90 0 0");
  right2.setAttribute('color',"#888888");
  right2.setAttribute('radius',"0.05");
  right2.setAttribute('height',"60");
  right2.setAttribute('shadow',"true");
  right2.setAttribute('material',"src: #wood1; repeat: 1 30");
  sceneEl.appendChild(right2);
  
  
}



function addButcher(track){
      
  var sceneEl = document.querySelector('a-scene');
  var butcherBody = document.createElement('a-cone');
  
  butcherBody.setAttribute('class',"butcher thing");
  butcherBody.setAttribute('position',track + " 1.2 -32");
  butcherBody.setAttribute('rotation',"0 180 0");
  butcherBody.setAttribute('color',"#DDDDDD");
  butcherBody.setAttribute('material',"src: #butcherBody");
  
  butcherBody.setAttribute('height',"2");
  butcherBody.setAttribute('radius-top',"0.2");
  butcherBody.setAttribute('radius-bottom',"0.5");
  
  butcherBody.setAttribute('shadow',"true");
  
  sceneEl.appendChild(butcherBody);
  
  var butcherHead = document.createElement('a-sphere');
  
  butcherHead.setAttribute('class',"butcher thing");
  butcherHead.setAttribute('position',track + " 2.7 -32");
  butcherHead.setAttribute('rotation',"0 270 0");
  butcherHead.setAttribute('color',"#FFCCDD");
  butcherHead.setAttribute('material',"src: #butcherHead");
  
  butcherHead.setAttribute('radius',"0.7");
  
  butcherHead.setAttribute('shadow',"true");
  
  sceneEl.appendChild(butcherHead);
  
  
  
  var sceneEl = document.querySelector('a-scene');
  var knife = document.createElement('a-cone');
  
  knife.setAttribute('class',"knife thing");
  knife.setAttribute('position',track + " 1.9 -31.5");
  knife.setAttribute('rotation',"0 0 0");
  knife.setAttribute('color',"#DDDDDD");
  knife.setAttribute('material',"src: #knife");
  
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
    blood.setAttribute('class',"animalblood thing");
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
  
  if(!finish) {
    var sceneEl = document.querySelector('a-scene');
    var entityEl = document.createElement('a-box');

    entityEl.setAttribute('class',"animal thing");


    var chosenTrack = track[Math.floor(Math.random() * (track.length-1))];
    entityEl.setAttribute('position',chosenTrack + " 0.5 0");


    entityEl.setAttribute('rotation',"0 180 0");
    entityEl.setAttribute('color',"#DDDDDD");
    entityEl.setAttribute('material',"src: #body");

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

    head.setAttribute('class',"animalhead thing");
    head.setAttribute('position',chosenTrack + " 1.5 -0.8");
    head.setAttribute('rotation',"0 90 0");
    head.setAttribute('color',"#DDDDDD");
    head.setAttribute('material',"src: #head");

    head.setAttribute('radius',"0.6");
    head.setAttribute('radius-top',"0.3");
    head.setAttribute('transparent',"true");

    head.setAttribute('animation',"property: position; to: " + chosenTrack + " 1.5 -30.8; dur: "+ animalDelay +"; easing: linear;");

    head.setAttribute('animation__2', "property: color; to: #FF0000; dur: 500; delay: "+ animalDelay +";");
    var headRoll = (Math.random() * 7);
    var positionTo = (chosenTrack + (Math.random()*2)) + " 0.3 " + (animaMinZ - headRoll);
    head.setAttribute('animation__3',"property: position; from: " + chosenTrack + " 0 -30.8; to: " + positionTo + "; dur: 1000; easing: linear; delay:"+ animalDelay +";");

    head.setAttribute('animation__4', "property: rotation; to: "+ (600 + Math.random()*180) +" 320 0; dur: 2000; delay: "+ animalDelay +";");


    sceneEl.appendChild(head);



    addBlood(sceneEl, chosenTrack);
  }
  
  
  
},1000);





function doFinish(){
  finish = true;
  
  var els = document.getElementsByClassName("thing");
  Array.prototype.forEach.call(els, function(el) {
      // Do stuff here
      console.log(el);
      el.setAttribute('visible', "false");
  });
  
  var sky = document.getElementById("sky");
  sky.setAttribute('src', "#butcherHead");
  
  var sceneEl = document.querySelector('a-scene');
   
  var knife = document.createElement('a-cone');
  
  knife.setAttribute('class',"knife");
  knife.setAttribute('position',"-90 40.9 -140");
  knife.setAttribute('rotation',"0 0 0");
  knife.setAttribute('color',"#DDDDDD");
  knife.setAttribute('material',"src: #knife");
  
  knife.setAttribute('height',"200");
  knife.setAttribute('radius-top',"10");
  knife.setAttribute('radius-bottom',"4");
  knife.setAttribute('depth',"0.3");
  knife.setAttribute('egments-radial',"3");
  
  
  knife.setAttribute('shadow',"true");
  knife.setAttribute('transparent',"true");
  
    
  knife.setAttribute('animation',"property: position; to: 0 12 -31; dur: 4000; easing: linear; " );
  knife.setAttribute('animation__2',"property: rotation; to: 70 30 0; dur: 4000; easing: linear; ");
  
  sceneEl.appendChild(knife);
  
  setTimeout(function(){ sky.setAttribute('color', "#FF3333"); }, 3500);
  for(var i=0;i<1000;i++){
    var blood = document.createElement('a-sphere');
    blood.setAttribute('class',"animalblood thing");
    blood.setAttribute('rotation',"0 90 0");
    blood.setAttribute('color',"#AA0000");

    var radius = (Math.floor(Math.random()*7)+2)/100;
    blood.setAttribute('radius',radius);
    blood.setAttribute('transparent',"true");
    
    blood.setAttribute('opacity',"0.0");
    blood.setAttribute('position', (Math.random()-0.8) + " 0 -31");

    var bloodUpY = (Math.random() * 20);
    var bloodUpZ = (Math.random() * 20);
    var positionTo = (Math.random()*20) + " " + bloodUpY + " " + (animaMinZ- bloodUpZ);
    
    var duration =  (Math.random() * 3000);
    var delay = (Math.random() * 3000)+3500;
    blood.setAttribute('animation', "property: position; to: " + positionTo + "; dur: "+ duration +"; easing: linear; delay:" + delay);
    blood.setAttribute('animation__2', "property: opacity; from: 1.0 to: 0.0; dur:  "+ duration +"; delay: " + delay);
   

    sceneEl.appendChild(blood);
  }
   
  
}
setTimeout(doFinish, 30000);


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
