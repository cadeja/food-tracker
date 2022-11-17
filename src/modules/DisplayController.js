
import { addElement, deleteChildren, addHTML } from "./domCtrl.js";

const buildHeader = () => {
    addElement('header');
    addElement('h1','header',[],'Food Tracker');
}

// adds nav and ul with links
const buildNav = (names = [], classes = [], parent = 'main') => {

    if (names.length !== classes.length){
        console.log('names length does not match links length');
        return false;
    }
    
    addElement('nav', parent);
    addElement('ul','nav',['#nav-links'],'');
    
    for (let i = 0; i < names.length; i++){
        console.log('test');
        addHTML(`
                <li class='nav-button ${classes[i]}'>
                    ${names[i]}
                </li>`,
                '#nav-links');
    }

}

const buildFooter = () => {
    addElement('footer','',[],'copyright 2022 Cade England');
}

// adds base elements to index.html
// order is !important!
const buildPage = () => {
    buildHeader();

    addElement('main');

    buildNav(['Home','Recipes'],['home','recipes'], 'main');

    buildFooter();
}


export { buildPage };