
/**
 * init function : handler, event add
 */
function init() {


}

/**
 * get element input text 
 */
function getTextData() {
    var elementData = {}


    return elementData;
}

/**
 * filter button eventHandler
 */
function filterHandler() {

}

/**
 * image button eventHandler
 */
function getImageHandler() {
    var imageCanvasInfo = {}
    
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
    
    buttonElement.fileButton.addEventListener(getImageHandler);
    buttonElement.filterButton.addEventListener(filterHandler);

    return {
        buttonElement,
        canvasElement,
        textElement
    };
}