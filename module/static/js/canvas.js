goog.module('place.canvasCtrl');

const utils = goog.require('place.utils');
const canvas = {},
      element = document.getElementById('canvas')

canvas.getCoordinates = (event) => {
  const ratio = element.naturalWidth / element.width
  
  return {
    x: Math.floor((event.pageX - element.offsetLeft) * ratio),
    y: Math.floor((event.pageY - element.offsetTop) * ratio)
  }
}

canvas.onClick = (handler) => 
  element.addEventListener('click', handler)

canvas.refresh = (newImage) => element.src = '/canvas?' + Date.now()

exports = canvas;
