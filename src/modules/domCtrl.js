// module assisting in creating HTML parts


// takes a variety of information and adds the element to the DOM in one go!
const addElement = (tag, classesAndIds = [], content = '', parent = '#content') => {
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


    
    const newParent = document.querySelector(parent);
    newParent.appendChild(newElement);
};

// removes all inner HTML in specified element;
const deleteChildren = (parent) => {
    document.querySelector(parent).innerHTML = '';
}



export { addElement, deleteChildren };