var img = "";
var status = "";
var objects = [];
function preload(){
 img = loadImage('https://miro.medium.com/max/600/1*0ttFuc9a8RMCQxCbrNeMNg.png')
}
function setup(){
var canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded)
document.getElementById('status').innerHTML = "status: detecting objects";
}

function draw(){
image(img , 0, 0, 640, 420);

if (status != ""){
    
    for (i=0; i<objects.length; i++){
        document.getElementById("status").innerHTML="Status : Object Detected";
        fill("#DC143C");
        percent = floor(objects[i]).confidence*100;
        text(objects[i].label+ " " +percent+"%", objects[i].x+15, object[i].y+15);
        noFill();
        stroke("#DC143C");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }
}
}

function modelLoaded(){
  console.log("Model Loaded!");
  status=true;
  objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
        objects = results;

    }
    
}