goog.module('place')

const canvasCtrl = goog.require('place.canvasCtrl');
const utils = goog.require('place.utils');
const API = goog.require('place.api');
const colorInput = document.getElementById('color-input');
const REFRESH_INTERVAL = 5000;

canvasCtrl.onClick((event) => {
  let data = canvasCtrl.getCoordinates(event)
  data.color = utils.hexToRGBA(colorInput.value)
  
  API.updatePixel(data)
})

setInterval(canvasCtrl.refresh.bind(canvasCtrl), REFRESH_INTERVAL);
