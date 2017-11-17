var d = new Date();
var ctx = document.querySelector("canvas").getContext("2d");



speed(Infinity);

document.getElementById("date").innerHTML = d.toDateString();


var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
 
var transforms = ["transform", 
                  "msTransform", 
                  "webkitTransform", 
                  "mozTransform", 
                  "oTransform"];
                    
 
var snowflakes = [];
var browserWidth;
var browserHeight;
var numberOfSnowflakes = 50;
var resetPosition = false;
function setup() {
    window.addEventListener("DOMContentLoaded", generateSnowflakes, false);
    window.addEventListener("resize", setResetFlag, false);
}
setup();
function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != "undefined") {
            return properties[i];
        }
    }
    return null;
}
 
var transformProperty = getSupportedPropertyName(transforms);
function Snowflake(element, speed, xPos, yPos) {
    this.element = element;
    this.speed = speed;
    this.xPos = xPos;
    this.yPos = yPos;
    this.counter = 0;
    this.sign = Math.random() < 0.5 ? 1 : -1;
    this.element.style.opacity = .1 + Math.random();
    this.element.style.fontSize = 12 + Math.random() * 50 + "px";
}
Snowflake.prototype.update = function () {
    this.counter += this.speed / 5000;
    this.xPos += this.sign * this.speed * Math.cos(this.counter) / 40;
    this.yPos += Math.sin(this.counter) / 40 + this.speed / 30;
    setTranslate3DTransform(this.element, Math.round(this.xPos), Math.round(this.yPos));
    if (this.yPos > browserHeight) {
        this.yPos = -50;
    }
}
function setTranslate3DTransform(element, xPosition, yPosition) {
    var val = "translate3d(" + xPosition + "px, " + yPosition + "px" + ", 0)";
    element.style[transformProperty] = val;
}
function generateSnowflakes() {
     
    var originalSnowflake = document.querySelector(".snowflake");
    var snowflakeContainer = originalSnowflake.parentNode;
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;
    for (var i = 0; i < numberOfSnowflakes; i++) {
        var snowflakeClone = originalSnowflake.cloneNode(true);
        snowflakeContainer.appendChild(snowflakeClone);
        var initialXPos = getPosition(50, browserWidth);
        var initialYPos = getPosition(50, browserHeight);
        var speed = 5+Math.random()*40;
        var snowflakeObject = new Snowflake(snowflakeClone, 
                                            speed, 
                                            initialXPos, 
                                            initialYPos);
        snowflakes.push(snowflakeObject);
    }
    snowflakeContainer.removeChild(originalSnowflake);
    moveSnowflakes();
}
function moveSnowflakes() {
    for (var i = 0; i < snowflakes.length; i++) {
        var snowflake = snowflakes[i];
        snowflake.update();
    }
     
    if (resetPosition) {
        browserWidth = document.documentElement.clientWidth;
        browserHeight = document.documentElement.clientHeight; 
         
        for (var i = 0; i < snowflakes.length; i++) {
            var snowflake = snowflakes[i];
             
            snowflake.xPos = getPosition(50, browserWidth);
            snowflake.yPos = getPosition(50, browserHeight);
        }
         
        resetPosition = false;
    }
     
    requestAnimationFrame(moveSnowflakes);
}
function getPosition(offset, size) {
    return Math.round(-1*offset + Math.random() * (size+2*offset));
}
function setResetFlag(e) {
    resetPosition = true;
}
forever(1, function() {
  play('/EEE/EEE/EGCDE/FFFFFEEEE/EDDEDG/EEE/EEE/EGCDE/FFFFFEEEEE/GGFDC///');
});
browserWidth = document.documentElement.clientWidth;
browserHeight = document.documentElement.clientHeight;
var hillw = -browserWidth/2;
var hillh = -browserHeight/2;
var m;
var mi;
var hilly = -browserHeight/4;
jumpxy(hillw,hillh);
rt(90);
function hill(){
  pen(white, 10);
  for (m = 0; m < 45; m++){
    fd(1);
    lt(1);
  }
}
function hillInverted(){
  pen(white, 10);
  for (mi = 0; mi < 45; mi++){
    fd(1);
    rt(1);
  }
}
for (hills = 0; hills < browserWidth/160; hills++){
  hill();
  hillInverted();
  hillInverted();
  hill();
}
  function windows(){
  fd(100);
  lt(90);
  fd(100);
  lt(90);
  fd(100);
  lt(90);
  fd(100);
  lt(90);
  fd(50);
  lt(90);
  fd(100);
  lt(180);
  fd(50);
  rt(90);
  bk(50);
  fd(100);
  }

function buildHouse() {
  pen(rgb(222,184,135),9);
  jumpto(-237,hillh);
  fd(474);
  bk(474);
  lt(90);
  fd(400);
  rt(45);
  movexy(237,237);
  rt(90);
  movexy(237,-237);
  rt(45);
  fd(400);
  fill(rgb(205,133,63));
  pen(gray,10);
  jumpto(-185,0);
  windows();
  jumpto(185,-100);
  windows();
  fill(white);
  pen(rgb(222,184,135),9);
  jumpto(-237,hillh);
  rt(270);
  fd(200);
  lt(90);
  fd(150);
  rt(90);
  fd(74);
  rt(90);
  fd(150);
  fill(rgb(255,248,220));
  bk(60);
  rt(90);
  jumpxy(-20);
  fd(1);
}
function tree(){
  pen(rgb(139,69,19),9);
  fd(100);
  rt(90);
  pen(green,9);
  bk(50);
  fd(100);
  //right side of tree
  lt(120);
  fd(50);
  rt(120);
  fd(20);
  lt(120);
  fd(50);
  rt(120);
  fd(20);
  lt(120);
  fd(80);
  fill(green);
  //flip around
  bk(80);
  rt(120);
  bk(20);
  lt(120);
  bk(50);
  rt(120);
  bk(20);
  lt(120);
  bk(50);
  rt(120);
  bk(100);
  //left side of tree
  lt(60);
  fd(50);
  lt(120);
  fd(20);
  rt(120);
  fd(50);
  lt(120);
  fd(20);
  rt(120);
  fd(80);
  fill(green);
lt(30);
}
hide();
buildHouse();
jumpto(-437,hillh);
rt(90);
tree();
jumpto(-637,hillh);
tree();
jumpto(437,hillh);
tree();
jumpto(637,hillh);
tree();
function merryChristmas(){
$('.merry .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.merry .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: function(el, i) {
      return 50 * i;
    }
  });
}

setTimeout(merryChristmas,2000);
