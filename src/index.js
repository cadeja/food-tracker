import './css/reset.css';
import './css/style.css';
import { buildPage, populateTable } from './modules/DisplayController.js';

buildPage();

populateTable('api/stuff')