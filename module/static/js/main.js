goog.module('place')

var canvasCtrl = goog.require('place.canvasCtrl');
var utils = goog.require('place.utils');
var API = goog.require('place.api');
var colorInput = document.getElementById('color-input');

canvasCtrl.onClick(function(event) {
  API.updatePixel({
    x: event.offsetX,
    y: event.offsetY,
    color: utils.hexToRGBA(colorInput.value)
  })
})
