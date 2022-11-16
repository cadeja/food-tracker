
import { addElement, deleteChildren } from "./domCtrl.js";


// adds base elements to index.html
const buildPage = () => {
    addElement('header');
    addElement('h1', [], 'Food Tracker','header');

    addElement('main');

    addElement('footer',[],'Copyright Cade England 2022');
}


export { buildPage };