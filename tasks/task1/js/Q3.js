let x = 0;
let y = 0;
let w = 0;
let h = 0;
function setup(){
    createCanvas(400, 600);
    background(10, 10, 100);
    drawRectangle(10, 10, 30, 30);
};
function draw() {
    background(10, 10, 100);
    drawRectangle(x, y, 30, 30);
}
function mousePressed(){
    if (x < 400) {
        x = x + 5
    } else {
        x = 0
    }

    if (y < 400) {
        y = y + 5
    } else {
        y = 0
    }

};

function drawRectangle(x, y, w, h){
    fill(100, 50, 50)
    rect(x, y, w, h)
};
