(function(DI) {
  'use strict'
  var canvas = document.getElementById('canvas'),
      colorInput = document.getElementById('color-input');
  
  canvas.addEventListener('click', function(event) {
    setPixelColor(event.offsetX, event.offsetY, DI.hexToRGBA(colorInput.value))
  })
  
  function setPixelColor(x, y, color) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/set');
    xhr.addEventListener('load', function() {
      if (xhr.status == 200) {
        var arrayBufferView = new Uint8Array(xhr.response),
            blob = new Blob([arrayBufferView], {'type': 'image\/png'}),
            objectURL = window.URL.createObjectURL(blob);
            canvas.src = objectURL;
      }
    }, false);
    xhr.responseType = 'arraybuffer';
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      x: x,
      y: y,
      color: color
    }));
  }
})(window);