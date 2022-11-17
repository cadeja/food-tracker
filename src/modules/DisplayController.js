
import { addElement, deleteChildren, addHTML } from "./domCtrl.js";

const buildHeader = () => {
    addElement('header');
    addElement('h1','header',[],'Food Tracker');
};

// adds nav and ul
const buildNav = () => {

    let names = ['Home','Recipes'];
    let classes = ['home active','recipes inactive'];
    let parent = 'main';
    
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
};

const buildFooter = () => {
    addElement('footer','',[],'copyright 2022 Cade England');
};

// adds base elements to index.html
// order is !important!
const buildPage = () => {
    buildHeader();

    addElement('main');

    buildNav();

    buildFooter();
};


export { buildPage };