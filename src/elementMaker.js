export const makeElement = (elementType, classesString, id) => {
    let element = document.createElement(elementType);
    element.className = classesString;
    element.id = id;
    return element;
}