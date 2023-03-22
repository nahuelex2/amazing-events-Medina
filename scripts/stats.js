import { getData, GetCategories } from './utilities.js'


let data = (await getData())

let pastEvents = data.events.filter(event => event.date < data.currentDate);
let futureEvents = data.events.filter(event => event.date >= data.currentDate);

// let agrupados = pastEvents.reduce((groupedEvents, event) => {

//     const category = event.category

//     groupedEvents[category] = groupedEvents[category] ?? []

//     groupedEvents[category].push(event)
//     return groupedEvents
// }, {})
// console.log(agrupados['Food']);

// console.log(pastEvents);

let eventsStatisticArray = pastEvents.map(event => {
    let aux = 0
    aux = ((event.assistance * 100) / event.capacity).toFixed(2)


    let test = {
        event: event.name,
        porcentaje: aux
    }

    return test
})

eventsStatisticArray.sort((a, b) => {
    return b.porcentaje - a.porcentaje
})
let tbodyStatistics = document.querySelector('#events-statistics')
let rows = ``


// agrupados["Food"].forEach(z => console.log(z._id))
let categories = GetCategories(pastEvents)
// eventsStatisticArray.slice(0, 3).forEach(event => {
//     rows +=
//         `<tr>
// <td>${x.categoria}</td>
// <td>$${x.totalRevenues}</td>
// <td>%${x.porcentaje}</td>
// </tr>`
// })


let CategoriesFutureEvents = GetCategories(futureEvents)
//passt events
let test2 = CategoriesFutureEvents.map(cat => {
    let cantEventos = 0
    let TotalRevenuesByCategory = 0
    let totalCapacity = 0
    let totalAssistance = 0
    let percentageOfAttendance = 0
    let suma = 0
    futureEvents.filter(eve => eve.category == cat).forEach(element => {
        cantEventos += 1
        TotalRevenuesByCategory += (element.price * element.estimate)
        suma += element.estimate
        totalCapacity += element.capacity
        totalAssistance += element.estimate
    })
    percentageOfAttendance = (totalAssistance * 100 / totalCapacity).toFixed(2)
    let obj = {
        categoria: cat,

        totalAsistencia: suma,
        totaleventos: cantEventos,
        totalRevenues: TotalRevenuesByCategory,
        porcentaje: percentageOfAttendance
    }

    return obj
})
test2.sort((a, b) => {
    return b.totalRevenues - a.totalRevenues
})


let tr = ``
let tbody = document.querySelector('#upcomingEvents-Statistics')


test2.forEach(x => {
    tr +=
        `<tr>
    <td>${x.categoria}</td>
    <td>$${x.totalRevenues}</td>
    <td>%${x.porcentaje}</td>
    </tr>`
})

tbody.innerHTML = tr

let test = categories.map(cat => {
    let cantEventos = 0
    let TotalRevenuesByCategory = 0
    let totalCapacity = 0
    let totalAssistance = 0
    let percentageOfAttendance = 0
    let suma = 0
    pastEvents.filter(eve => eve.category == cat).forEach(element => {
        cantEventos += 1
        TotalRevenuesByCategory += (element.price * element.assistance)
        suma += element.assistance
        totalCapacity += element.capacity
        totalAssistance += element.assistance


    });
    percentageOfAttendance = (totalAssistance * 100 / totalCapacity).toFixed(2)
    let obj = {
        categoria: cat,

        totalAsistencia: suma,
        totaleventos: cantEventos,
        totalRevenues: TotalRevenuesByCategory,
        porcentaje: percentageOfAttendance
    }

    return obj
})
test.sort((a, b) => {
    return b.totalRevenues - a.totalRevenues
})

tr = ``
let tbody2 = document.querySelector('#PastEvents-Statistics')
test.forEach(x => {
    tr +=
        `<tr>
    <td>${x.categoria}</td>
    <td>$${x.totalRevenues}</td>
    <td>%${x.porcentaje}</td>
    </tr>`
})

tbody2.innerHTML = tr

