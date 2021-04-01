var x = 0;
var y = 0;
var x1 = 100;
var y1 = 100;
function add(){
    console.log("insideaddfunctionS");
    background_img = new Image();
    background_img.onload = backgroundPicture
    background_img.src = "racing.jpg";
    console.log("doneWithBackground")
    roverImg = new Image();
    roverImg.onload = roverPicture;
    roverImg.src = "rover.png"
    roverImg1 = new Image();
    roverImg1.onload = roverPicture1;
    roverImg1.src = "rover.png"
}
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
function backgroundPicture(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}
function roverPicture(){
    console.log("insideRoverPicture")
    ctx.drawImage(roverImg, x, y, 100, 100);
}
function roverPicture1(){
    console.log("insideRoverPicture")
    ctx.drawImage(roverImg, x1, y1, 100, 100);
}

window.addEventListener("keydown", myKeyDown);
function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if(keyPressed == 37){
        left();
    }
    if(keyPressed == 38){
        left1();
    }
    if(keyPressed == 39){
        right();
    }
    if(keyPressed == 40){
        right1();
    }
       
    }
    
    function left(){
        if(x > 0){
         x = x - 10
         backgroundPicture();
         roverPicture();
         roverPicture1();
        }
       
    
    }
    function right(){
        if(x < 700){
         x = x + 10
         backgroundPicture();
         roverPicture1();
         roverPicture();
        }
    
    }
    
    function right1(){
        if(x1 < 700){
         x1 = x1 + 10
         backgroundPicture();
         roverPicture1();
         roverPicture();
        }
    
    }
    function left1(){
        if(x1 > 0){
         x1 = x1 - 10
         backgroundPicture();
         roverPicture();
         roverPicture1();
        }
       
    
    }
    
  

    



