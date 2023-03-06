import { eventsData } from './data.js'

const events = eventsData.events
const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")
const path = params.get('ref')
let event = events.find((event) => event._id == id)

console.log(path);


let detailsCard = /*html*/ `
  <div class="card container detailsCard">
    <img src="${event.image}" alt="${event.name}">
    <div class="card-body">
      <div>
        <h5 class="card-title">${event.name}</h5>
        
        <p class="card-text"><b></b>${event.description}</p>
        <p class="card-text"><b>Category: </b>${event.category}</p>
        <p class="card-text"><b>Date: </b>${event.date}</p>
        <p class="card-text"><b>Place: </b>${event.place}</p>
        <p class="card-text"><b>Price: </b>$${event.price}</p>
        <p class="card-text"><b>Capacity: </b>${event.capacity}</p>
        <p class="card-text"><b>Assistance: </b>${event.assistance ?? '---'}</p>
      </div>
      
      <div>
          <a href="${path}" class="btn btn-secondary mt-3">Go back</a>
      </div>
    </div>
   
  </div>
 
`

let cardContainer = document.querySelector('.detailsCardContainer');

cardContainer.innerHTML = detailsCard;