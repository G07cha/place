(function() {
  'use strict'
  var canvas = document.getElementById('canvas')
  
  canvas.addEventListener('click', function(event) {
    setPixelColor(event.offsetX, event.offsetY, {
      R: 100,
      G: 100,
      B: 100,
      A: 255
    })
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
})();