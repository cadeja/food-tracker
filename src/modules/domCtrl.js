// module assisting in creating HTML parts


// takes a variety of information and adds the element to the DOM in one go!
const addElement = (tag, parent = '#content', classesAndIds = [], content = '') => {
    const newElement = document.createElement(tag);
    const newContent = document.createTextNode(String(content));

    newElement.appendChild(newContent);

    //classes and ids
    if (classesAndIds.length !== 0){
        let justOneId = false;

        for (let i = 0; i < classesAndIds.length; i++){
            // cori = class or id
            let cori = classesAndIds[i];

            // Ids
            // will only add first id in array, if multiple found
            if (cori[0] === '#' && !justOneId){
                justOneId = false;
                newElement.id = cori.substring(1);
            }

            //classes
            else if (cori[0] !== '#'){
                if(cori[0] === '.'){
                    newElement.classList.add(cori.substring(1));
                } else {
                    newElement.classList.add(cori);
                }
            }
        }
    }


    if (parent === '') parent = '#content';
    document.querySelector(parent).appendChild(newElement);
};

const addHTML = (content, parent = '#content') => {
    const newParent = document.querySelector(parent);
    newParent.innerHTML += content;
};

// removes all inner HTML in specified element;
const deleteChildren = (parent) => {
    document.querySelector(parent).innerHTML = '';
}



export { addElement, deleteChildren, addHTML };