
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
        <div class="col eventCard" category = '${event.category}'>
        <div class="card w-75">
            <img src=" ${event.image}" alt="${event.name} IMAGE">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
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
            <input class="form-check-input chkCategory" type="checkbox" id='All' value="All">

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



export function categoryFilter(cardContainer, chkContainer, arrayEvents) {

    chkContainer.addEventListener('change', () => {

        let chkAll = chkContainer.querySelector('#All')

        let isSomeChkCategoryUnchecked = Array.from(chkContainer.querySelectorAll('.chkCategory')).some(chk => chk.checked === false)

        chkAll.checked = !isSomeChkCategoryUnchecked;


        let categories = Array.from(chkContainer.querySelectorAll('.chkCategory:checked'))
            .map(checkedChk => checkedChk.value);

        let filteredEvents = arrayEvents.filter(event => categories.includes(event.category))
        const searchVAlue = search.value.toLowerCase().trim()

        let filteredEvents2 = filteredEvents.filter(event => event.name.toLowerCase().includes(searchVAlue) || event.description.toLowerCase().includes(searchVAlue))

        // let filteredEvents3 = filteredEvents.filter(event => {

        //     // return Object.values(event).toString().toLowerCase().includes(searchVAlue)
        //     return Object.values(event).toString().toLowerCase().includes(searchVAlue)
        //     // return searchVAlue.includes(Object.values(event).toString().toLowerCase())

        // })
        // console.log(filteredEvents3);

        cardContainer.innerHTML = filteredEvents.length === 0 ? createCards(arrayEvents) : createCards(filteredEvents)

        SearchFilter()

    })

}
export function SearchFilter() {

    const searchVAlue = search.value.toLowerCase().trim()
    let cards = document.querySelectorAll('.eventCard')
    cards.forEach((card) => {
        card.style.display = card.innerText.toLocaleLowerCase().includes(searchVAlue) ? 'block' : 'none'
    })
}
export function SearchFilter2() {
    let search = document.querySelector('#search');
    search.addEventListener('keyup', (e) => {

        const searchVAlue = search.value.toLowerCase().trim()
        let cards = document.querySelectorAll('.eventCard')

        cards.forEach((card) => {
            card.style.display = card.innerText.toLocaleLowerCase().includes(searchVAlue) ? 'block' : 'none'
        })

    })
}
