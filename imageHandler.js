
/**
 * init function : handler, event add
 */
function init() {
    // element set, eventhandler set
    let elementSet = setEventHandler();


}

/**
 * get element input text 
 */
function getTextData(element) {
    return element.value;
}

/**
 * filter button eventHandler
 */
function filterHandler() {

}

/**
 * return load image src
 * @param {*} file file url
 */
function getImageSrc(file) {
    return new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        //check image file
        if(!file.type.startsWith('image/')) {
            alert('not image!');
            reject(null);
        }
        
        fileReader.onload = () => {
            let image = new Image();
            image.src = fileReader.result;
            image.onload = () => {
                resolve(image);
            }
        }
        fileReader.readAsDataURL(file);
    });
}

/**
 * draw image into canvas
 * @param {element} canvasElement draw image canvas target
 * @param {image} image image src
 */
function drawImage(canvasElement, image) {
    let context = canvasElement.getContext('2d');
    canvasElement.width = image.width;
    canvasElement.height = image.height;

    context.putImageData(image, 0, 0);
}

/**
 * return gray pixel data
 * @param {pixles} pixles pixel object data 
 */
function getGrayScale(pixles) {
    return pixles.r * 0.2126 + pixles.g * 0.7152 + pixles.b * 0.0722;
}


/**
 * image button eventHandler
 */
function imageButtonHandler(event) {
    const thisApp = this;
    getImageSrc(event.target.files[0])
    .then(result => {
        if(result) {
            
        } else {
            //not image
            return;
        }
    });
}


/**
 * return element object and set event
 */
function setEventHandler() {
    let buttonElement = {
        fileButton : document.getElementById('loadButton'),
        filterButton : document.getElementById('filterButton')
    }
    let canvasElement = {
        loadCanvas : document.getElementById('loadCanvas'),
        filterCanvas : document.getElementById('filterCanvas')
    }

    let textElement = {
        commant : document.getElementById('imageCommant'),
        autor : document.getElementById('imageAutor')
    }
    
    buttonElement.fileButton.addEventListener(imageButtonHandler);
    buttonElement.filterButton.addEventListener(filterHandler);

    return {
        buttonElement,
        canvasElement,
        textElement
    };
}