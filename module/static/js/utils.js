goog.module('place.utils')

const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

exports.hexToRGBA = (hex) => {
    const result = hexRegex.exec(hex);
    return result ? {
        R: parseInt(result[1], 16),
        G: parseInt(result[2], 16),
        B: parseInt(result[3], 16),
        A: 255
    } : null;
}
