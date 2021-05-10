var jerry,jerryImg,jerryImg2,jerryImg3
var tommy,tommyImg,tommyImg2,tommyImg3
var Background,BackgroundImg

function preload() {
    //load the images here
    BackgroundImg=loadImage("images/garden.png")
    tommyImg=loadImage("images/cat1.png")
    tommyImg2=loadAnimation("images/cat2.png","images/cat3.png")
    tommyImg3=loadImage("images/cat4.png")
    jerryImg=loadImage("images/mouse1.png")
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryImg3=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    Background=createSprite(500,400,20,20)
Background.addImage(BackgroundImg)
Background.scale=1

jerry=createSprite(150,500,20,20)
jerry.addImage(jerryImg)
jerry.scale=0.3
jerry.debug=true
jerry.setCollider("rectangle",0,0,300,1000)


tommy=createSprite(800,500,20,20)
tommy.addImage(tommyImg)
tommy.scale=0.2

tommy.debug=true
tommy.setCollider("rectangle",0,0,1100,700)


}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();

    if (tommy.isTouching(jerry)){
        tommy.velocityX=0
        jerry.addImage("JerryEnd",jerryImg3)
        jerry.changeImage("JerryEnd",jerryImg3)
        tommy.addImage("TommyEnd",tommyImg3)
        tommy.changeImage("TommyEnd",tommyImg3)
        
        
    }

    if(keyDown("left")){
        /*  */
          //For moving and changing animation write code here
          jerry.addAnimation("Jerry",jerryImg2)
          jerry.changeAnimation("Jerry",jerryImg2)
          tommy.addAnimation("TommyTeasing",tommyImg2)
          tommy.changeAnimation("TommyTeasing",tommyImg2)
          tommy.scale=0.3
          tommy.velocityX=-5
        }
}

