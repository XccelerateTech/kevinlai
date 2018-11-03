function lodImage(url, cb) {
    let image = new Image()

    image.onload = function() {
        cb(null, image);
    }

    image.onerror = function() {
        let message = 
            'disable ' + url
        cb(new Error(msg))
    }

    image.src = url;
}

export default loadImage