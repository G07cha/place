goog.module('place.canvasCtrl');

const canvas = {},
      element = document.getElementById('canvas')

canvas.onClick = (handler) => element.addEventListener('click', handler)

canvas.refresh = (newImage) => element.src = '/canvas?' + Date.now()

exports = canvas;
