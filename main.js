canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

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
function up(){
    if(rover_y >= 10){
    rover_y=rover_y -10;
    console.log("When up arrow is pressed, x = "+ rover_x + "y = " + rover_y);
    uploadBackground();
    uploadRover();
    
    }
}

function down(){
    if(rover_y <= 600){
        rover_y = rover_y +10;
        console.log("When up arrow is pressed, x = "+ rover_x + "y = " + rover_y);
        uploadBackground();
        uploadRover();
        
    }
}

function left() { 
    if(rover_x >= 0) { 
    rover_x =rover_x - 10; 
    console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
    uploadBackground(); 
    uploadRover(); 
}
    }
    function right() { 
        if(rover_x <= 700) { 
        rover_x =rover_x + 10; 
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
        uploadBackground(); 
        uploadRover(); 
    } 
}
nasa_images=["JSON1.jpeg","JSON2.jpeg","JSON3.jpg","JSON4.jpg"];
x = Math.floor(Math.random() * 4);
background_image=nasa_images[x];