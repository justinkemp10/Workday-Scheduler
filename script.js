// use jQuery to provide interactive calendar

// assign const for date & tie to element in the DOM
const d = new Date();
var now = d.getUTCHours();
currentTime = moment(d).format('MMMM d, YYYY' + ' h:mm A');

$('#currentDay').text(currentTime);
console.log(now);
// TODO: assign variables and tie to elements in the DOM
function eightAM(now) {
    if (now < 8) {
        $(".eightAM-input").addClass("future")
    } else if (now > 8 || now < 9) {
        $(".eightAM-input").addClass("present")
    } else {
        $(".eightAM-input").addClass("past")
    }
}

function nineAM(now) {
    if (now < 9) {
        $(".nineAM-input").addClass("future")
    } else if (now > 9 || now < 10) {
        $(".nineAM-input").addClass("present")
    } else {
        $(".nineAM-input").addClass("past")
    }
}

function tenAM(now) {
    if (now < 10) {
        $(".tenAM-input").addClass("future")
    } else if (now > 10 || now < 11) {
        $(".tenAM-input").addClass("present")
    } else {
        $(".tenAM-input").addClass("past")
    }
}
function elevenAM(now) {
    if (now < 11) {
        $(".elevenAM-input").addClass("future")
    } else if (now > 11 || now < 12) {
        $(".elevenAM-input").addClass("present")
    } else {
        $(".elevenAM-input").addClass("past")
    }
}
function twelveAM(now) {
    if (now < 12) {
        $(".twelveAM-input").addClass("future")
    } else if (now > 12 || now < 13) {
        $(".twelveAM-input").addClass("present")
    } else {
        $(".twelveAM-input").addClass("past")
    }
}
function onePM(now) {
    if (now < 13) {
        $(".onePM-input").addClass("future")
    } else if (now > 13 || now < 14) {
        $(".onePM-input").addClass("present")
    } else {
        $(".onePM-input").addClass("past")
    }
}
function twoPM(now) {
    if (now < 14) {
        $(".twoPM-input").addClass("future")
    } else if (now > 14 || now < 15) {
        $(".twoPM-input").addClass("present")
    } else {
        $(".twoPM-input").addClass("past")
    }
}
function threePM(now) {
    if (now < 15) {
        $(".threePM-input").addClass("future")
    } else if (now > 15 || now < 16) {
        $(".threePM-input").addClass("present")
    } else {
        $(".threePM-input").addClass("past")
    }
}
function fourPM(now) {
    if (now < 16) {
        $(".fourPM-input").addClass("future")
    } else if (now > 16 || now < 17) {
        $(".fourPM-input").addClass("present")
    } else {
        $(".fourPM-input").addClass("past")
    }
}
function fivePM(now) {
    if (now < 17) {
        $(".fivePM-input").addClass("future")
    } else if (now > 17 || now < 18) {
        $(".fivePM-input").addClass("present")
    } else {
        $(".fivePM-input").addClass("past")
    }
}

function sixPM(now) {
    if (now < 18) {
        $(".sixPM-input").addClass("future")
    } else if (now > 18 || now < 19) {
        $(".sixPM-input").addClass("present")
    } else {
        $(".sixPM-input").addClass("past")
    }
}

function sevenPM(now) {
    if (now < 19) {
        $(".sevenPM-input").addClass("future")
    } else if (now > 19 || now < 20) {
        $(".sevenPM-input").addClass("present")
    } else {
        $(".sevenPM-input").addClass("past")
    }
}

eightAM();
nineAM();
tenAM();
elevenAM();
twelveAM();
onePM();
twoPM();
threePM();
fourPM();
fivePM();
sixPM();
sevenPM();