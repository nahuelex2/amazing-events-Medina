import { eventsData } from './data.js';
import { createCards, CreateCheckBoxes, clickChkAll, categoryFilter } from './utilities.js'
let allEvents = eventsData.events;

let cardContainer = document.querySelector('.cardContainer');

let divCheckboxes = document.querySelector('.divCheckboxes');

cardContainer.innerHTML = createCards(allEvents)
divCheckboxes.innerHTML += CreateCheckBoxes(allEvents);

let checkboxesList = document.querySelectorAll('.chkCategory')

let chkAll = document.querySelector('#All');

clickChkAll(chkAll, checkboxesList)


categoryFilter(cardContainer, divCheckboxes, allEvents)

