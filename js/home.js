//console.log("connected");
var canvas = document.getElementById("mycanvas");
var c = canvas.getContext("2d");
var d = canvas.getContext("3d");

//body
c.beginPath();

c.fillStyle = "Black";

c.rect(80,50,80,60);
c.fill();

c.fillStyle = "Red";
c.rect(170,50,80,60);
c.fill();

c.closePath();
