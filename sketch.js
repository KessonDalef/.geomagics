var points = [];
var angles = [];

var symmetry = 20;
var theta;
var circleSpace;
var cDim;
var rot = 0;
var mode;
var bmode;

function setup() {
  createCanvas(windowWidth, windowHeight);

  rot = 0;
  
  symmetry = floor(random(1, 24));
  theta = floor(random(1, 32));
  circleSpace = random(1, 250);
  cDim = random(50, 200);
  
  mode = floor(random(1, 9));
  bmode = floor(random(1, 3));

  colorMode(HSB, 360);
  
  points = [];

  for (var j = 0; j < symmetry; j++) {
    var a = map(j, 0, symmetry*theta, 0, TWO_PI);
    points.push(createVector(cos(a)*circleSpace, sin(a)*circleSpace));
    angles.push(a);
  }

  background(0);
}

function draw() {
  if (rot <= TWO_PI) {
    sketch();
  }
}

function sketch() {
  push();
  translate(width/2, height/2);
  rotate(rot);
  
  for (var i = 0; i < points.length; i++) {
    var c = color(0+abs(cos(angles[i])*360), 100, 360, 3);
    push();
    translate(points[i].x, points[i].y);
    rotate(angles[i]);
    noFill();
    stroke(c);
    rectMode(CENTER);

    if (mode == 1) {
      rect(0, 0, abs(sin(angles[i]))*cDim, abs(cos(angles[i])*cDim));
    } else if (mode == 2) {
      rect(0, 0, abs(sin(angles[i]))*cDim, abs(sin(angles[i])*cDim));
    } else if (mode == 3) {
      rect(0, 0, abs(sin(angles[i]))*cDim, abs(tan(angles[i])*(cDim/10)));
    } else if (mode == 4) {
      rect(0, 0, 1/abs(sin(angles[i]))*cDim, abs(1/cos(angles[i])*cDim));
    } else if (mode == 5) {
      rect(0, 0, 1/abs(sin(angles[i]))*cDim, abs(1/sin(angles[i])*cDim));
    } else if (mode == 6) {
      rect(0, 0, 1/abs(sin(angles[i]))*cDim, abs(1/tan(angles[i])*(cDim/10)));
    } else if (mode == 7) {
      rect(0, 0, map(abs(cos(angles[i])), 0, 1, 0.5, 1)*cDim, map(abs(cos(angles[i])), 0, 1, 0.5, 1)*cDim);
    } else if (mode == 8) {
      rect(0, 0, map(abs(cos(angles[i])), 0, 1, 0.5, 1)*cDim, map(abs(sin(angles[i])), 0, 1, 0.5, 1)*cDim);
    }

    pop();
    angles[i] += 0.025;
  }
  pop();

  rot += 0.01;
}

function keyPressed() {
  if (key == 'S') {
    save("mathemagics.png");
  }
}

function mousePressed() {
  setup();
}
