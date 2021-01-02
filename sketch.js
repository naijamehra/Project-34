//Create variables here
var dog, happyDog, database, foodS, foodStock; 

function preload()
{
  //load images here
  Dog = loadImage("../images/doglmg.png");
  Dog1 = loadImage("../images/doglm1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = addImage(Dog);
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(Dog1);
  }

  drawSprites();
  //add styles here
}

Text("foodStock:", 200, 200);

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if (x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}