song1 = "";
song2 = "";
function preload(){
    song1 = loadSound("Into the unknown.mp3");
    song2 = loadSound("Harry_Potter");
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 500, 500);
}
function play(){
    song1.play();
    song2.play();
}