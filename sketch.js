var jokerImg, joker;



function preload(){

jokerImg =  loadAnimation("joker.png","joker2.png","joker3.png","joker4.png","joker5.png","joker6.png","joker7.png","joker8.png","joker9.png","joker10.png","joker11.png","joker12.png")

sound = loadSound("sound.mp3")

}

function setup() {
    createCanvas(windowWidth,windowHeight);

    joker = createSprite(600,300,0,0)
    joker.addAnimation("hello",jokerImg)
    joker.speed(0.5)
    sound.loop()
}

function draw() {
    background("purple")
 drawSprites()
}