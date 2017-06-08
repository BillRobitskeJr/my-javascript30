window.addEventListener('load', () => {
  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;
  let width = 0;
  let widthInc = 1;

  function draw(event) {
    if (!isDrawing) return;
    console.log(event);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    updateLastCoords(event);
    updateColor();
    updateWidth();
  }

  function updateLastCoords(event) {
    [lastX, lastY] = [event.offsetX, event.offsetY];
  }

  function updateColor() {
    hue = (hue + 1) % 360;
  }

  function updateWidth() {
    width += widthInc;
    if (width <= 0 || width >= 100) widthInc *= -1;
  }

  window.addEventListener('mousemove', draw);
  window.addEventListener('mousedown', (event) => { 
    isDrawing = true;
    updateLastCoords(event)
  });
  window.addEventListener('mouseup', () => { isDrawing = false; });
  window.addEventListener('mouseout', () => { isDrawing = false; });

});