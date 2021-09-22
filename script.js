// assign const for date & tie to element in the DOM
const d = new Date();
let now = moment(d).format("HH");
currentTime = moment(d).format('MMMM d, YYYY' + ' h:mm A');

document.querySelector('#currentDay').textContent = currentTime;
// assign variables for save button and user input, add event listener on click of save button to save user input in the DO

// assign variable array for each hour of the planner
let events = {
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
    13: '',
    14: '',
    15: '',
    16: '',
    17: '',
}

function addClickHandlers() {
    let saveButton;
    for (let i = 8; i < 18; i++) {
        saveButton = document.querySelector('#save' + i);
        saveButton.addEventListener('click', (e) => {
            let hour = e.target.dataset.hour;
            let event = document.querySelector('#hour' + hour);
            events[hour] = event.value;
            localStorage.setItem('events', JSON.stringify(events));
        });
    }
}

function loadEvents() {
    let timeSlot;

    if (localStorage.getItem('events')) {
        events = JSON.parse(localStorage.getItem('events'));
    }

    for (let i = 8; i < 18; i++) {
        timeSlot = document.querySelector('#hour' + i);
        timeSlot.value = events[i];
        if (i < now) {
            timeSlot.classList.add('past');
        } else if (i > now) {
            timeSlot.classList.add('future');
        } else {
            timeSlot.classList.add('present');
        }
    }
}

$(document).ready(() => {
    addClickHandlers();
    loadEvents();
})