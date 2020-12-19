canvas=document.getElementById("myCanvas");
ctx=canvas.getContet("2d");

rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

background_image="mars.jpg";
rover_image="rover.png";

function add(){
img_tag=new Image();
img_tag.onload=uploadBackground;
img_tag.src=background_image;

rover_tag=new Image();
rover_tag.onload=uploadRover;
rover_tag.src=rover_image;
}
function uploadBackground(){
ctx.drawImage(img_tag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_tag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);
    if(key_pressed == "38"){
        console.log("UP");
        up();
    }
    if(key_pressed == "37"){
        console.log("LEFT");
        left();
    }
    if(key_pressed == "39"){
        console.log("RIGHT");
        right();
    }
    if(key_pressed == "40"){
        console.log("DOWN");
        down();
    }
}
