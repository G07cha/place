goog.module('place')

const canvasCtrl = goog.require('place.canvasCtrl');
const utils = goog.require('place.utils');
const API = goog.require('place.api');
const colorInput = document.getElementById('color-input');
const REFRESH_INTERVAL = 5000;

canvasCtrl.onClick((event) => 
  API.updatePixel({
    x: event.offsetX,
    y: event.offsetY,
    color: utils.hexToRGBA(colorInput.value)
  })
)

setInterval(canvasCtrl.refresh.bind(canvasCtrl), REFRESH_INTERVAL);
