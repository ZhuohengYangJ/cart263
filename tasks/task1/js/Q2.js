function drawEllipse(x,y,w,h,r,g,b){
fill(r, g, b);
ellipse(x, y, w, h);
}
function setup(){
    createCanvas(600, 400);
    background(10, 10, 10);
    drawEllipse(20, 20, 30, 30, 10, 100, 10);
    drawEllipse(30, 30, 40, 40, 10, 150, 10);
    drawEllipse(50, 50, 40, 40, 10, 200, 10);
}