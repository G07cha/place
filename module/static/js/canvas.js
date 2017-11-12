goog.module('place.canvasCtrl');

var canvas = {},
    element = document.getElementById('canvas')

canvas.onClick = function (handler) {
  element.addEventListener('click', handler)
}

canvas.refresh = function (newImage) {
  element.src = '/canvas?' + Date.now()
}

exports = canvas;
