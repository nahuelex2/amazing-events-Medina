import { eventsData, SortDate } from './data.js';

let upcomingEvents = eventsData.events.filter(event => event.date >= eventsData.currentDate);

upcomingEvents.sort((a, b) => SortDate(a, b));
let counter = 1;

let cardContainer = document.querySelector('.cardContainer');

upcomingEvents.forEach(x => {

    console.log(x.date);
    let card = `
    <div class="col">
    <div class="card w-75">
        <img src=" ${x.image}" alt="${x.name} IMAGE">
        <div class="card-body">
            <h5 class="card-title">${x.name}</h5>
            <p class="card-text">${x.description}</p>
        </div>
        <div class="card-footer">
        <p class="card-text">fecha: ${x.date}</p> 
          <p class="card-text">tarjeta numero: ${counter}</p>
            <span>price $ ${x.price}</span>
            <a href="details.html" class="btn btn-primary" id="#${x._id}">${x._id} Go details</a>
        </div>
    </div>
    </div>
    `;
    cardContainer.insertAdjacentHTML('beforeend', card);
    counter++;
})