
import { addElement, deleteChildren, addHTML } from "./domCtrl.js";

const buildHeader = () => {
    addElement('header');
    addElement('h1','header',[],'Food Tracker');
}

// adds nav and ul with links
const buildNav = (names = [], links = []) => {

    if (names.length !== links.length){
        console.log('names length does not match links length');
        return false;
    }
    
    addElement('nav','main');
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

const buildFooter = () => {
    addElement('footer','',[],'copyright 2022 Cade England');
}

// adds base elements to index.html
// order is !important!
const buildPage = () => {
    buildHeader();

    addElement('main');

    buildNav(['Test1','Test2','Test3'],['#','#','#']);

    buildFooter();
}


export { buildPage };