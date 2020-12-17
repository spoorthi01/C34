var ball;
var database, getPos;


function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    var node = database.ref("ball/position");
    node.on("value",position);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   database.ref("ball/position").set({
       x: getPos.x + x,
       y: getPos.y + y
   })

}

function position(data){
    getPos = data.val();
    ball.x = getPos.x;
    ball.y = getPos.y;
}
