import { eventsData, SortDate } from './data.js';

let allEvents = eventsData.events;






allEvents.sort((a, b) => SortDate(a, b));
let cardContainer = document.querySelector('.cardContainer');

let counter = 1;
allEvents.forEach(x => {

    let card = `
    <div class="col">
    <div class="card w-75">
        <img src=" ${x.image}" alt="${x.name} IMAGE">
        <div class="card-body">
            <h5 class="card-title">${x.name}</h5>
            <p class="card-text">${x.description}</p>
            <p>category: ${x.category}</p>
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
    cardContainer.insertAdjacentHTML('afterbegin', card);
    counter++;
})



let categoryList = [];

function GetCategories() {


    allEvents.forEach(x => {


        if (!categoryList.includes(x.category)) {
            categoryList.push(x.category);
        }
    });


}

GetCategories();


let divCheckboxes = document.querySelector('.divCheckboxes');


categoryList.forEach(x => {

    let checkbox = `
    <div class="col-auto">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id=${x} value="category1">

        <label class="form-check-label" for="category1">${x}</label>
    </div>
</div>
    `
    divCheckboxes.insertAdjacentHTML('afterbegin', checkbox);
}

);

