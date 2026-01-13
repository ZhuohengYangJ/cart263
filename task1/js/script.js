"use strict";
let x = 80;
let y = 100;
let z = 30;
function setup() {
    console.log("go")
    createCanvas(400, 600);

}

function draw() {
    //ellipse 1
    push();
    fill(100, 50, 50);
    ellipse(x, y, z);
    pop();

    //ellipse 2
    push();
    fill(20, 130, 70);
    ellipse(x+40, y+40, z+40);
    pop();

    //ellipse 3
    push();
    fill(200, 0, 100);
    ellipse(x+100, y+100, z+20);
    pop();
}