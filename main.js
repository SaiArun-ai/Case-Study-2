function preset(){

}
function setUp(){

}
var r;
var b;
var g;
function draw(){
    r = random(randomGaussian(100,20),randomGaussian(400,20)) ;
    g = random(randomGaussian(50,20),randomGaussian(200,20));
    b = random(randomGaussian(10,1),randomGaussian(400,20));
    document.getElementById("Footer").style = "color:rgb(" + r + " , " + g + " , " + b + ");";
}