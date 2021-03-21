var fixedRect, movingRect;
var box1, box2;

function setup() {
    createCanvas(1200, 800);
    fixedRect = createSprite(600, 400, 50, 80);
    fixedRect.shapeColor = "green";
    fixedRect.debug = true;
    movingRect = createSprite(400, 200, 80, 30);
    movingRect.shapeColor = "green";
    movingRect.debug = true;
    box1 = createSprite(450, 400, 140, 80)
    box1.shapeColor = "blue";
    box1.debug = true;
    box2 = createSprite(750, 400, 140, 80)
    box2.shapeColor = "blue"
    box2.debug = true;
}

function draw() {
    background(0, 0, 0);
    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;


    if (detect_collision(movingRect, box1)) {
        box1.shapeColor = "red";
        movingRect.shapeColor = "red"
    } else {
        box1.shapeColor = "blue";
        movingRect.shapeColor = "green";
    }


    // detect_collision(movingRect, fixedRect);
    // detect_collision(movingRect, box1)
    drawSprites();
}