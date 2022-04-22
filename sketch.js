var mySound, song, analyzer;
var scr = 1;
var card = [];
var name = 0;
var center = 385;

var c1x = 300;
var c1y = 250;
var c1r = 85;
var c1g = 180;

var rx = 100;
var ry = 200;
var rw = 150;
var rh = 80;

var x = 100;
var y = 50;

function preload() {
  card[0] = loadImage("Card.png");
  card[1] = loadImage("Card.png");
  card[2] = loadImage("Card.png");
  card[3] = loadImage("Card.png");
  card[4] = loadImage("Card.png");
  card[5] = loadImage("Card.png");
  card[6] = loadImage("Card.png");
  card[7] = loadImage("Card.png");
  card[8] = loadImage("Card.png");
  card[9] = loadImage("Card.png");
  card[10] = loadImage("Card.png");
  card[11] = loadImage("Card.png");
  card[12] = loadImage("Card.png");
  card[13] = loadImage("Card.png");
  card[14] = loadImage("Card.png");
  card[15] = loadImage("Card.png");
  card[16] = loadImage("Card.png");
  card[17] = loadImage("Card.png");
  card[18] = loadImage("Card.png");
  card[19] = loadImage("Card.png");
  card[20] = loadImage("Card.png");

  base = loadImage("Background1.png");
  hand = loadImage("Hand1.png");
  back = loadImage("Back.png");
  checker = loadImage("Background.png");
  End = loadImage("End.png");
}

function setup() {
  createCanvas(770, 580);
  imageMode(CENTER);
}

function draw() {
  if (scr == 1) {
    drawScreen1();
  } else if (scr == 2) {
    drawScreen2();
  } else if (scr == 3) {
    drawScreen3();
  } else if (scr == 4) {
    drawScreen4();
  }
}

function drawScreen1() {
  background(0);
  noCursor();
  image(base, center, 370, 840);

  fill(240, 248, 255, 50);
  ellipse(center, c1y, c1r / 3, c1g / 2);

  if (overCircle(center, c1y, c1r)) {
    frameRate(2000);
    fill(random(470), 200, random(450), 100);
    noStroke();
    ellipse(center, c1y, c1r, c1g);
  } else {
    fill(242, 242, 242, 100);
    noStroke();
    ellipse(center, c1y, c1r, c1g);
  }
  image(hand, mouseX, mouseY, 80, 100);
}

function drawScreen2() {
  cursor();
  image(checker, 385, 290, 800, 680);
  imageMode(CORNER);
  for (var b = -55; b <= 350; b = b + 40) {
    var cardY = 215;
    if (overRect(b + 230, cardY + 100, 40, 200)) {
      image(back, b + 200, cardY - 40, 80, 140);
    } else {
      image(back, b + 200, cardY, 80, 140);
    }
  }
  imageMode(CENTER);
}

function drawScreen3() {
  background(0);
  console.log(name);
  image(card[name], center, 285, 350, 550);
}

function drawScreen4() {
  background(0);
  image(End, center, 285, 770, 590);
}

function overCircle(x, y, radius) {
  if (dist(x, y, mouseX, mouseY) < radius) {
    return true;
  } else {
    return false;
  }
}

function overRect(x, y, w, h) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  if (scr == 1) {
    scr = 2;
  } else if (scr == 2) {
    var rand = floor(random(card.length));
    name = rand;
    scr = 3;
  } else if (scr == 3) {
    scr = 4;
  }
}
