import { eventsData, SortDate } from './data.js';

let allEvents = eventsData.events;

allEvents.sort((a, b) => SortDate(a, b));

let cardContainer = document.querySelector('.cardContainer');

let counter = 1;
let card = '';
allEvents.forEach(x => {

    card += `
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

    counter++;
});
cardContainer.innerHTML = card;
// cardContainer.insertAdjacentHTML('afterbegin', card);


let checkboxList = ``;

// function GetCategories() {

let categoryList = [];

allEvents.forEach(event => {
    if (!categoryList.includes(event.category)) {
        categoryList.push(event.category);
    };
});

categoryList.sort();

let divCheckboxes = document.querySelector('.divCheckboxes');



let checkboxes = ``;

categoryList.forEach(category =>
    checkboxes += `
    <div class="col-auto">
        <div class="form-check form-check-inline cambio">
            <input class="form-check-input testClass" type="checkbox" id='${category}' value="${category}">
    
            <label class="form-check-label" for="${category}">${category}</label>
        </div>
    </div>`
);

divCheckboxes.innerHTML += checkboxes;
let test = []
let checkboxesList = document.querySelectorAll('.testClass')

let chkAll = document.querySelector('#All');
chkAll.addEventListener('click', () => {
    if (chkAll.checked) {
        checkboxesList.forEach(chk => chk.checked = true)
    } else {
        checkboxesList.forEach(chk => chk.checked = false)
    }
})

let filteredCards = [];
let arrayValues = [];
checkboxesList.forEach(chk => {

    chk.addEventListener('click', () => {
        let test = document.querySelectorAll('.testClass:checked');
        // console.clear();
        let arrayValues = [];


        test.forEach(x =>
            arrayValues.push(x.value));


        console.clear();
        let filtrado = allEvents.filter(event => arrayValues.includes(event.category))

        console.log(filtrado);
        card = ``;


        filtrado.forEach(x => {

            card += `
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

            counter++;
            cardContainer.innerHTML = card;
        });

    })


})

