goog.module('place.api')

exports.updatePixel = (data) => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/set');
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        const arrayBufferView = new Uint8Array(xhr.response),
            blob = new Blob([arrayBufferView], {'type': 'image\/png'}),
            objectURL = window.URL.createObjectURL(blob)

        canvas.src = objectURL
      }
    }, false);
    xhr.responseType = 'arraybuffer'
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(data))
}
