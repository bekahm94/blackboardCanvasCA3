var socket;

function setup() {
    createCanvas(600, 400);
    background(51);
    
    socket = io.connect('localhost:3000');
    socket.on('mouse', newDrawing);

}

function newDrawing(data){
     noStroke();
    fill(255, 80, 100);
    ellipse(data.x, data.y, 36, 30);
    
}

function mouseDragged(){
    console.log('Sending: ' + mouseX + ',' + mouseY);
    
    var data = {
        x: mouseX,
        y: mouseY
    }
    
    socket.emit('mouse', data);    
    
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 36, 36);
}

function draw() {
   
}
