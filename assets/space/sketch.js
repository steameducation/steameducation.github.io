var stars = [];
var sounds = [];

function preload() {
  sounds[0] = loadSound('sounds/c.wav');
  sounds[1] = loadSound('sounds/e.wav');
  sounds[2] = loadSound('sounds/g.wav');
  sounds[3] = loadSound('sounds/b.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(31, 40, 45);

  for(var i = 0; i < width/6; i++) {
    stars[i] = new Star();
    stars[i].display();
  }
}

function draw() {
  background(31, 40, 45);

  for(var j = 0; j < stars.length; j++) {
    stars[j].display();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Star() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.c = color(random(180, 255), random(180, 255), random(180, 255));
  this.size = random(0, 4);

    this.display = function() {
      fill(this.c);
      noStroke();
      smooth();
      ellipse(this.x, this.y, this.size, this.size);
    }
}
