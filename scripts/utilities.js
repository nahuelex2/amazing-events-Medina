
function SortDate(a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return c < d;
}


export function createCards(eventsArray) {
    let card = '';
    let dir = location.pathname;
    eventsArray.sort((a, b) => SortDate(a, b));
    eventsArray.forEach(event => {

        card += `
        <div class="col eventCard d-flex justify-content-center" category = '${event.category}'>
        <div class="card w-75">
            <img src=" ${event.image}" alt="${event.name} IMAGE">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
                <p class="card-text">${event.category}</p>
            </div>
            <div class="card-footer">
                <span>price $ ${event.price}</span>
                <a href="details.html?id=${event._id}&ref=${dir}" class="btn btn-primary" > Go details</a>
            </div>
        </div>
        </div>
        `;


    });
    return card;
}

function GetCategories(events) {
    let categories = []
    events.forEach(event => {
        if (!categories.includes(event.category))
            categories.push(event.category)
    })
    categories.sort();
    return categories
}

export function CreateCheckBoxes(events) {

    let categories = GetCategories(events);

    let checkboxes = ``;

    checkboxes = `
    <div class="col-auto">
        <div class="form-check form-check-inline cambio">
            <input class="form-check-input " type="checkbox" id='All' value="All">

                <label class="form-check-label" for="All">All</label>
        </div>
    </div>
    `
    categories.forEach(category =>

        checkboxes += `
        <div class="col-auto">
            <div class="form-check form-check-inline cambio">
                <input class="form-check-input chkCategory" type="checkbox" id='${category}' value="${category}">
        
                <label class="form-check-label" for="${category}">${category}</label>
            </div>
        </div>`
    );

    return checkboxes;
}

export function clickChkAll(checkbox, array) {
    checkbox.addEventListener('click', () => {
        array.forEach(chk => chk.checked = checkbox.checked ? true : false)
    })

}


export function FilterByCategoryAndSearchValue(chksContainer, txtSearch, eventsArray, cardsContainer) {

    let categories = Array.from(chksContainer.querySelectorAll('.chkCategory:checked'))
        .map(checkedChk => checkedChk.value);


    const searchVAlue = txtSearch.value.toLowerCase().trim()


    let filteredEvents = categories.length === 0 ? eventsArray.filter(event => event.name.toLowerCase().trim().includes(searchVAlue)) : eventsArray.filter(event =>
        categories.includes(event.category) && event.name.toLowerCase().trim().includes(searchVAlue))


    let noResults = `
    <div class = "notFound  ">
        <h1 ">No results were found for your search (${searchVAlue}).</h1>
    </div>
    `


    cardsContainer.innerHTML = filteredEvents.length > 0 ? createCards(filteredEvents) : noResults
}

