export const makeElement = (elementType, classesString, id) => {
    let element = document.createElement(elementType);
    let classArr = classesString.split(" ");
    element.classList.add(...classArr);
    element.id = id;
    return element;
}