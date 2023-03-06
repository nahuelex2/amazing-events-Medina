import { eventsData } from './data.js';
import { createCards, CreateCheckBoxes, clickChkAll, categoryFilter, SearchFilter } from './utilities.js'
let allEvents = eventsData.events;

let cardContainer = document.querySelector('.cardContainer');

let divCheckboxes = document.querySelector('.divCheckboxes');

cardContainer.innerHTML = createCards(allEvents)
divCheckboxes.innerHTML += CreateCheckBoxes(allEvents);

let checkboxesList = document.querySelectorAll('.chkCategory')

let chkAll = document.querySelector('#All');

let txtSearch = document.querySelector('#search');
clickChkAll(chkAll, checkboxesList)


categoryFilter(cardContainer, divCheckboxes, allEvents)

txtSearch.addEventListener('keyup', () => {
    SearchFilter()
})

cardContainer.addEventListener('click', (e) => {
    console.log(e.target);
})

