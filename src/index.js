import './css/reset.css';
import './css/style.css';
import { buildPage } from './modules/DisplayController.js';

buildPage();

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

console.log(fetchData('/api/stuff'));