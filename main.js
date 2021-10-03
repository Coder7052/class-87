 var canvas= new fabric.Canvas("MyCanvas");
player_x = 10;
player_y = 10;
blockimg_width = 30;
blockimg_height = 30;
var player_object ="";
var blockimg_object = "";
function player_update() {
    fabric.Image.fromURL("player.png",function (Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x                        
        });
        canvas.add(player_object);

    });
};
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function (Img){
        blockimg_object = Img;
        blockimg_object.scaleToWidth(blockimg_width);
        blockimg_object.scaleToHeight(blockimg_height);
        blockimg_object.set({
            top:player_y,
            left:player_x                        
        });
        canvas.add(blockimg_object);
        
    });
};
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
 keyPressed = e.keycode;
console.log(keyPressed)
if (e.shiftkey == true && keyPressed == "80"){
    console.log("p and shift key pressed together");
    blockimg_width = blockimg_width + 10;
blockimg_height = blockimg_height + 10;
document.getElementById("current_width").innerHTML = blockimg_width;
document.getElementById("current_height").innerHTML = blockimg_height;
};
if (e.shiftkey == true && keyPressed == "77"){
    console.log("m and shift key pressed together");
    blockimg_width = blockimg_width - 10;
blockimg_height = blockimg_height - 10;
document.getElementById("current_width").innerHTML = blockimg_width;
document.getElementById("current_height").innerHTML = blockimg_height;
};
if (keyPressed == "38"){
    up();
    console.log("up key pressed");
}

if (keyPressed == "37"){
    left();
    console.log("left key pressed");
}

if (keyPressed == "39"){
    right();
    console.log("right key pressed");
}

if (keyPressed == "40"){
    down();
    console.log("down key pressed");
}

if (keyPressed == "87"){
    new_image("brick.jpg");
    console.log("b key pressed");
}

if (keyPressed == "83"){
    new_image("swamp_grass.png");
    console.log("s key pressed");
}
if (keyPressed == "71"){
    new_image("grass_top.jpg");
    console.log("g key pressed");
}
if (keyPressed == "76"){
    new_image("log.jpg");
    console.log("l key pressed");
}
if (keyPressed == "78"){
    new_image("netherack.jpg");
    console.log("n key pressed");
}
if (keyPressed == "89"){
    new_image("yellow_brick.png");
    console.log("y key pressed");
}
if (keyPressed == "82"){
    new_image("grass.png");
    console.log("r key pressed");
}
if (keyPressed == "79"){
    new_image("glowstone.png");
    console.log("o key pressed");
}
if (keyPressed == "84"){
    new_image("stone.jpg");
    console.log("t key pressed");
}
};
function up() {
    if (player_y>=0){
        player_y = player_y - blockimg_height;
        console.log("block image height="+ blockimg_height);
        console.log("when up arrow key is pressed, x=" + player_x + "y=" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function up() {
    if (player_y>=0){
        player_y = player_y - blockimg_height;
        console.log("block image height="+ blockimg_height);
        console.log("when up arrow key is pressed, x=" + player_x + "y=" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if (player_y<=500){
        player_y = player_y + blockimg_height;
        console.log("block image height="+ blockimg_height);
        console.log("when  down arrow key is pressed, x=" + player_x + "y=" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (player_x<=850){
        player_x = player_x + blockimg_height;
        console.log("block image height="+ blockimg_height);
        console.log("when right arrow key is pressed, x=" + player_x + "y=" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}