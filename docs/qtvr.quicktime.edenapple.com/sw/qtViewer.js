let img;
let xPan = 0;
let yPan = 0;
let zoomLevel = 1.0;
let lastTouchX = 0;
let lastTouchY = 0;
let dragging = false;


function preload() {
  const qtvrElement = document.querySelector('div[qtvr]');
  if (qtvrElement) {
    const qtvrValue = qtvrElement.getAttribute('qtvr');
    img = loadImage(qtvrValue);
  } else {
    console.error("Couldn't find an element with the 'qtvr' attribute.");
  }
}


function setup() {
  let myCanvas = createCanvas(350, 150);
  myCanvas.parent('QTmov'); 
  xPan = (width - img.width * zoomLevel) / 2;
  yPan = (height - img.height * zoomLevel) / 2;

  
}

function draw() {
  background(0);
  image(img, xPan, yPan, img.width * zoomLevel, img.height * zoomLevel);
  xPan = constrain(xPan, width - img.width * zoomLevel, 0);
  yPan = constrain(yPan, height - img.height * zoomLevel, 0);

  handleKeys();
}
/*
function touchStarted() {
  let xStart = touchX - xPan;
  let yStart = touchY - yPan;
  
  if (xStart >= 0 && xStart <= img.width * zoomLevel && yStart >= 0 && yStart <= img.height * zoomLevel) {
    dragging = true;
    lastTouchX = touchX;
    lastTouchY = touchY;
    return false; // prevent default
  }
  return true;
}

function touchMoved() {
  if (dragging) {
    let xMove = touchX - xPan;
    let yMove = touchY - yPan;
  
    if (xMove >= 0 && xMove <= img.width * zoomLevel && yMove >= 0 && yMove <= img.height * zoomLevel) {
      xPan += touchX - lastTouchX;
      yPan += touchY - lastTouchY;
      lastTouchX = touchX;
      lastTouchY = touchY;
      return false; // prevent default
    }
  }
  return true; // allow scrolling
}
*/

function handleKeys() {
  let step = 5;
  let zoomStep = 0.005;
  const prevZoomLevel = zoomLevel;

  if (keyIsDown(LEFT_ARROW)) {
    xPan += step;
  } else if (keyIsDown(RIGHT_ARROW)) {
    xPan -= step;
  } else if (keyIsDown(UP_ARROW)) {
    yPan += step;
  } else if (keyIsDown(DOWN_ARROW)) {
    yPan -= step;
  } else if (keyIsDown(187) || keyIsDown(61)) {
    zoomLevel += zoomStep;
  } else if (keyIsDown(189) || keyIsDown(173)) {
    zoomLevel -= zoomStep;
  }

  if (zoomLevel !== prevZoomLevel) {
    const centerX = width / 2 - xPan;
    const centerY = height / 2 - yPan;
    const scaleChange = zoomLevel / prevZoomLevel;
    xPan = width / 2 - centerX * scaleChange;
    yPan = height / 2 - centerY * scaleChange;
  }
}

function keyPressed() {
  let zoomStep = 0.05; // Adjust the zoom step as you see fit
  const prevZoomLevel = zoomLevel;

  if (keyCode === CONTROL) {
    zoomLevel -= zoomStep;
  } else if (keyCode === ALT) {
    zoomLevel += zoomStep;
  }

  if (zoomLevel !== prevZoomLevel) {
    const centerX = (width / 2) - xPan;
    const centerY = (height / 2) - yPan;
    const scaleChange = zoomLevel / prevZoomLevel;
    xPan = (width / 2) - centerX * scaleChange;
    yPan = (height / 2) - centerY * scaleChange;
  }

  return false; // prevent default
}

function mousePressed() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    dragging = true;
    lastTouchX = mouseX;
    lastTouchY = mouseY;
  }
  return false; // prevent default
}

function mouseReleased() {
  dragging = false;
  return false; // prevent default
}

function mouseDragged() {
  if (dragging) {
    xPan += mouseX - lastTouchX;
    yPan += mouseY - lastTouchY;
    lastTouchX = mouseX;
    lastTouchY = mouseY;
  }
  return false; // prevent default
}

