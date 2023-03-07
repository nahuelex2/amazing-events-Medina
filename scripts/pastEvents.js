import { eventsData } from './data.js';
import { createCards, CreateCheckBoxes, clickChkAll, FilterByCategoryAndSearchValue } from './utilities.js'

let events = eventsData.events.filter(event => event.date < eventsData.currentDate);

let cardContainer = document.querySelector('.cardContainer');

let divCheckboxes = document.querySelector('.divCheckboxes');

cardContainer.innerHTML = createCards(events)
divCheckboxes.innerHTML += CreateCheckBoxes(events);

let checkboxesList = document.querySelectorAll('.chkCategory')

let chkAll = document.querySelector('#All');

let txtSearch = document.querySelector('#search');
clickChkAll(chkAll, checkboxesList)




divCheckboxes.addEventListener('change', () => {
    FilterByCategoryAndSearchValue(divCheckboxes, txtSearch, events, cardContainer)

})

txtSearch.addEventListener('keyup', () => {
    FilterByCategoryAndSearchValue(divCheckboxes, txtSearch, events, cardContainer)
})




