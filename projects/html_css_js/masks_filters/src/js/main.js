let outputWidth,
  outputHeight,
  faceTracker,
  videoInput,
  imgMask,
  imgFace,
  selected = -1;

// Download images later
function preload() {
  imgMask = loadImage("https://img.icons8.com/officel/2x/protection-mask.png");
  imgFace = loadImage("https://img.icons8.com/officel/2x/escape-mask.png");
}

// Download user interface
function setup() {
  const maxWidth = Math.min(windowWidth, windowHeight);
  outputHeight = maxWidth * 0.75;
  outputWidth = maxWidth;

  createCanvas(outputWidth, outputHeight);

  videoInput = createCapture(VIDEO);
  videoInput.size(outputWidth, outputHeight);
  videoInput.hide();

  const selection = createSelect();
  const selectList = ["Mask", "Face"];
  selection.option("Select filter", -1);
  for (let i = 0; i < selectList.length; i++) {
    selection.option(selectList[i], i);
  }
  selection.changed(applyFilter);

  faceTracker = new clm.tracker();
  faceTracker.init();
  faceTracker.start(videoInput.elt);
}

function applyFilter() {
  selected = this.selected();
}

function draw() {
  image(videoInput, 0, 0, outputWidth, outputHeight);

  switch (selected) {
    case "-1":
      break;
    case "0":
      drawMask();
      break;
    case "1":
      drawFace();
      break;
  }
}

function drawMask() {
  const positions = faceTracker.getCurrentPosition();
  if (positions !== false) {
    push();
    const wx = Math.abs(positions[13][0] - positions[1][0]) * 1.2;
    const wy =
      Math.abs(positions[7][1] - Math.min(positions[16][1], positions[20][1])) *
      1.2;
    translate(-wx / 2 - wy / 2);
    image(imgMask, positions[62][0], positions[62][1], wx, wy);
    pop();
  }
}

function drawFace() {
  const positions = faceTracker.getCurrentPosition();
  if (positions !== false) {
    push();
    const wX = Math.abs(positions[13][0] - positions[1][0]) * 1.2;
    const wY =
      Math.abs(positions[7][1] - Math.min(positions[16][1], positions[20][1])) *
      1.2;
    translate(-wx / 2 - wy / 2);
    image(imgFace, positions[62][0], positions[62][1], wx, wy);
    pop();
  }
}

function windowResized() {
  const maxWidth = Math.min(windowWidth, windowHeight);
  pixelDensity(1);
  outputHeight = maxWidth * 0.75;
  outputWidth = maxWidth;
  resizeCanvas(outputWidth, outputHeight);
}
