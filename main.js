canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
var rover_x=10;
var rover_y=10;
var rover_width=100;
var rover_height=90;
rover_image="rover.png";
background_image="mars.jpg";
function add(){
    background_img=new Image();
    background_img.onload=uploadbackground;
    background_img.src=background_image;
    rover_img=new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image;
}
function uploadbackground(){
ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",Mykeydown);
function Mykeydown(e){
    keyPress=e.keyCode;
    console.log(keyPress);
    if(keyPress=="38"){
        up();
        console.log("up");
    }
    if(keyPress=="40"){
        down();
        console.log("down");
    }
    if(keyPress=="37"){
        left();
        console.log("left");
    }
    if(keyPress=="39"){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y>=0){
        rover_y-=10;
        console.log("When up arrow is pressed"+rover_x+","+rover_y);
        uploadbackground();
        uploadrover();       
    }
}
    function down(){
        if(rover_y<=500){
            rover_y+=10;
            console.log("When down arrow is pressed"+rover_x+","+rover_y);
            uploadbackground();
            uploadrover();       
        }
    }
    function left(){
        if(rover_x>0){
            rover_x-=10;
            console.log("When left arrow is pressed"+rover_x+","+rover_y);
            uploadbackground();
            uploadrover();       
        }
    }
    function right(){
        if(rover_x<700){
            rover_x+=10;
            console.log("When right arrow is pressed"+rover_x+","+rover_y);
            uploadbackground();
            uploadrover();       
        }
    }

