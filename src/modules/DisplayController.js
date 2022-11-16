
import { addElement, deleteChildren, addHTML } from "./domCtrl.js";

// const buildHeader = () => {

// }

// adds nav and ul with links
const buildNav = (names = [], links = []) => {

    if (names.length !== links.length){
        console.log('names length does not match links length');
        return false;
    }
    
    addElement('nav');
    addElement('ul','nav',['#nav-links'],'');
    
    for (let i = 0; i < names.length; i++){
        addHTML(`
                <li>
                    <a href=${links[i]}>
                        ${names[i]}
                    </a>
                </li>`,
                '#nav-links');
    }

}

// const buildFooter = () => {
    
// }

// adds base elements to index.html
// order is !important!
const buildPage = () => {
    addElement('header');
    addElement('h1', 'header', [], 'Food Tracker');

    buildNav(['Test1','Test2','Test3'],['#','#','#']);

    addElement('main');
    addElement('nav');


    addElement('footer','',[],'Copyright Cade England 2022');
}


export { buildPage };