var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverx=10;
rovery=10;
roverwidth=100;
roverheight=100;
images=["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg"]
var randomnumber=Math.floor(Math.random()*4);
var roverimage="rover.png";
var backgroundimage=images[randomnumber];

function add(){
    backgroundimagetag=new Image();
    backgroundimagetag.onload=uploadbackground;
    backgroundimagetag.src=backgroundimage;

    roverimagetag=new Image();
    roverimagetag.onload=uploadrover;
    roverimagetag.src=roverimage;
}

function uploadbackground(){
    ctx.drawImage(backgroundimagetag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(roverimagetag,roverx,rovery,roverwidth,roverheight);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    keypressed=e.keyCode;

    if(keypressed=="37"){
        console.log("left");
        left();
    }
    if(keypressed=="38"){
        console.log("up");
        up();
}
if(keypressed=="39"){
    console.log("right");
    right();
}
if(keypressed=="40"){
    console.log("down");
    down();
}
}
function up(){
    if(rovery>0){
      rovery=rovery-10;
      uploadbackground();
      uploadrover();
    }
}
function down(){
    if(rovery<500){
      rovery=rovery+10;
      uploadbackground();
      uploadrover();
    }
}
function right(){
    if(roverx<700){
      roverx=roverx+10;
      uploadbackground();
      uploadrover();
    }
}
function left(){
    if(roverx>0){
      roverx=roverx-10;
      uploadbackground();
      uploadrover();
    }
}