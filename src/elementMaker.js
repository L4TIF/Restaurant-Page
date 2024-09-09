export const makeElement = (elementType, classesString, id) => {
    let element = document.createElement(elementType);
    let classArr = classesString.split(" ");
    console.log(classArr)
    element.classList.add(...classArr);


    element.id = id;
    return element;
}