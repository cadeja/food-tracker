
import { addElement, deleteChildren, addHTML } from "./domCtrl.js";
import { fetchData } from "./fetchData.js";

const buildHeader = () => {
    addElement('header');
    addElement('h1','header',[],'Food Tracker');
};

// adds nav and ul
const buildNav = () => {

    let names = ['Home','Recipes'];
    let classes = ['home active','recipes inactive'];
    let parent = '#content';
    
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

    
    

    buildNav();
    addElement('main');
    addElement('table','main',['#data-table']);

    buildFooter();
};


// handles sql data from fetch, converts it into a table
const populateTable = async (url) => {
    
    // fetching the data
    const res = await fetch(url);
    const data = await res.json();
    
    // clearing the table
    const parent = '#data-table';
    deleteChildren(parent);

    // adding the data
    for (let i = 0; i < data.length; i++){
        addElement('tr',parent,[`table-row-${i}`]);
        for (let item in data[i]){
            addElement('td',`.table-row-${i}`,[],`${data[i][item]}`);
        }
    };



};


export { buildPage, populateTable };