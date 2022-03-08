var startT,
  deltaT = 3000,
  doit = false;
var anglelider;


function setup() {
  // Canvas parameters
  canvasWidth = 2000;
  canvasHeight = 900;
  createCanvas(canvasWidth, canvasHeight);
  anglelider = createSlider(0,10, random(10), 0.1);
  // Drawing parameters
  // strokeAlpha = 25;
  angleMode(DEGREES);
  xDist = 10;
  fr = 30;
  frameRate(fr);


  smooth();
  strokeWeight(2);
  strokeCap(SQUARE);

  textFont("Avenir Next");

  cntr = 1;
  procNums = [];

  // Background
  push();
  noStroke();
  fill(0, 0, 0);
  rect(0, 0, canvasWidth, canvasHeight);
  pop();

  startT = millis();
}

function blankCanvas() {
  push();
  fill(0, 0, 0);
  noStroke();
  rect(0, 0, canvasWidth, canvasHeight);
  pop();
}

function drawCollatzNum(num) {
  seq = collatz(num);
 var angle = anglelider.value();


  push();

  translate(canvasWidth * 0.5, canvasHeight );
  for (j = 1; j < seq.length; j++) {
    curVal = seq[j];

    if (curVal % 2 == 0) {
      rotate(-angle);
    } else if(curVal %2 == 1) {
      rotate(angle);
    }
    strokeAlpha = random(50);
    stroke(random(255), random(255), random(255),strokeAlpha);

    line(0, 0, xDist, 0);
    translate(xDist, 0);
  }

  pop();
}

function draw() {
  for (let x = 0; x < random(100); x++) {
    drawCollatzNum(cntr);
    cntr += 1;
    // delayTime(1);
    myTimer();
  }
}

function myTimer() {
  if (millis() > startT + deltaT) {
    startT = millis();
    console.log("it is time for it now");
    doit = true;
  }
}

function collatz(num) {
  seq = [num];

  while (num != 1) {
    if (num % 2 == 0) {
      newNum = num / 2;
    } else {
      newNum = num * 3 + 1;
    }

    seq.push(newNum);
    num = newNum;
  }

  return reverse(seq);
}
