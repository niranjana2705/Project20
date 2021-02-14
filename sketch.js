var cat,catrunning,c1,r1,r2,rat,B1,B1Img,E1;
function preload() {
    //load the images here
    B1Img=loadImage("garden.png");
    c1=loadImage("cat1.png");
    r1=loadImage("mouse1.png");
    catrunning=loadAnimation("cat2.png","cat3.png");
    r2=loadAnimation("mouse2.png","mouse3.png");
    E1=loadImage("gameover.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    B1=createSprite(200,200,10,10);
    B1.addImage("B1Img",B1Img);
    cat=createSprite(550,450,10,10);
    cat.addImage("c1",c1)
    cat.scale=0.1;
    rat=createSprite(150,450,10,10);
    rat.addAnimation("r2",r2);
    rat.scale=0.08;
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    keyPressed()
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-2;
    cat.addAnimation("catrunning",catrunning);
    cat.changeAnimation("catrunning");
    cat.scale=0.1;
}
}
