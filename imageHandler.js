
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
    let fileReader = new FileReader();

    //check image file
    if(!file.type.startsWith('image/')) {
        alert('not image!');
        return;
    }
    
    fileReader.onload = () => {
        return fileReader.result;
    }
    fileReader.readAsDataURL(file);
}

/**
 * draw image into canvas
 * @param {element} canvasElement draw image canvas target
 * @param {base64} src image src
 */
function drawImage(canvasElement, src) {

}

/**
 * image button eventHandler
 */
function imageButtonHandler(event) {
    let loadImageSrc = fileReader(event.target.files[0]);
    
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