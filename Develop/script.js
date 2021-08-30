// run all functions as soon as the page loads
window.onload = function() {
    colorCode();
    eightAM();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
}

// Use MomentJS to display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


// When the user scrolls down to view the daily calendar,
// then they are presented with timeblocks for standard business hours.
// When you view the timeblocks for that day,
// then each timeblock is color-coded to indicate if it is in the past (gray), present (red), or future (green).

var now = new Date().getHours();

function colorCode() {
    // if 'now' is great than 8am, add class 'past'
    // if 'now' is >= 8am & less than 9am, add class 'present'
    // if 'now' is less than 8am, add class 'future'
  if (now > 8) {
    $("#comment8am").addClass("past");
  } else if (now >= 8 && now < 9) {
    $("#comment8am").addClass("present");
  } else if (now < 8) {
    $("#comment8am").addClass("future");
  }
    // repeat for 9am & so on
  if (now > 9) {
    $("#comment9am").addClass("past");
  } else if (now >= 9 && now < 10) {
    $("#comment9am").addClass("present");
  } else if (now < 9) {
    $("#comment9am").addClass("future");
  }
  if (now > 10) {
    $("#comment10am").addClass("past");
  } else if (now >= 10 && now < 11) {
    $("#comment10am").addClass("present");
  } else if (now < 10) {
    $("#comment10am").addClass("future");
  }
  if (now > 11) {
    $("#comment11am").addClass("past");
  } else if (now >= 11 && now < 12) {
    $("#comment11am").addClass("present");
  } else if (now < 11) {
    $("#comment11am").addClass("future");
  }
  if (now > 12) {
    $("#comment12pm").addClass("past");
  } else if (now >= 12 && now < 13) {
    $("#comment12pm").addClass("present");
  } else if (now < 12) {
    $("#comment12pm").addClass("future");
  }
  if (now > 13) {
    $("#comment1pm").addClass("past");
  } else if (now >= 13 && now < 14) {
    $("#comment1pm").addClass("present");
  } else if (now < 13) {
    $("#comment1pm").addClass("future");
  }
  if (now > 14) {
    $("#comment2pm").addClass("past");
  } else if (now >= 14 && now < 15) {
    $("#comment2pm").addClass("present");
  } else if (now < 14) {
    $("#comment2pm").addClass("future");
  }
  if (now > 15) {
    $("#comment3pm").addClass("past");
  } else if (now >= 15 && now < 16) {
    $("#comment3pm").addClass("present");
  } else if (now < 15) {
    $("#comment3pm").addClass("future");
  }
  if (now > 16) {
    $("#comment4pm").addClass("past");
  } else if (now >= 16 && now < 17) {
    $("#comment4pm").addClass("present");
  } else if (now < 16) {
    $("#comment4pm").addClass("future");
  }
  if (now > 17) {
    $("#comment5pm").addClass("past");
  } else if (now >= 17 && now < 18) {
    $("#comment5pm").addClass("present");
  } else if (now < 17) {
    $("#comment5pm").addClass("future");
  }
}

// When you click into a timeblock,
// then you can enter an event,
// when you click the save button for that timeblock,
// then the text for that event is saved in local storage.
// When I refresh the page,
// then the saved events remain.

function eightAM() {
    // establish variables & tie them to elements using ids
    var input_textarea = document.querySelector("#comment8am");
    var output_div = document.querySelector("#comment8am");
    var save_button = document.querySelector("#button8am");
    // add event listener for click on save button
    save_button.addEventListener("click", updateOutput);
    // saving content to local storage
    output_div.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");
  
    function updateOutput() {
      localStorage.setItem("content", input_textarea.value);
  
      output_div.textContent = input_textarea.value;
    }
}

function nineAM() {
    // establish variables & tie them to elements using ids
    var input_textarea2 = document.querySelector("#comment9am");
    var output_div2 = document.querySelector("#comment9am");
    var save_button2 = document.querySelector("#button9am");
    // add event listener for click on save button
    save_button2.addEventListener("click", updateOutput);
    // saving content to local storage
    output_div2.textContent = localStorage.getItem("content2");
    input_textarea2.value = localStorage.getItem("content2");
  
    function updateOutput() {
      localStorage.setItem("content2", input_textarea2.value);
  
      output_div2.textContent = input_textarea2.value;
    }
}

function tenAM() {
    // establish variables & tie them to elements using ids
    var input_textarea3 = document.querySelector("#comment10am");
    var output_div3 = document.querySelector("#comment10am");
    var save_button3 = document.querySelector("#button10am");
    // add event listener for click on save button
    save_button3.addEventListener("click", updateOutput);
    // saving content to local storage
    output_div3.textContent = localStorage.getItem("content3");
    input_textarea3.value = localStorage.getItem("content3");
  
    function updateOutput() {
      localStorage.setItem("content3", input_textarea3.value);
  
      output_div3.textContent = input_textarea3.value;
    }
}

function elevenAM() {
    // establish variables & tie them to elements using ids
    var input_textarea4 = document.querySelector("#comment11am");
    var output_div4 = document.querySelector("#comment11am");
    var save_button4 = document.querySelector("#button11am");
    // add event listener for click on save button
    save_button4.addEventListener("click", updateOutput);
    // saving content to local storage
    output_div4.textContent = localStorage.getItem("content4");
    input_textarea4.value = localStorage.getItem("content4");
  
    function updateOutput() {
      localStorage.setItem("content4", input_textarea4.value);
  
      output_div4.textContent = input_textarea4.value;
    }
}

function twelvePM() {
    // establish variables & tie them to elements using ids
    var input_textarea5 = document.querySelector("#comment12pm");
    var output_div5 = document.querySelector("#comment12pm");
    var save_button5 = document.querySelector("#button12pm");
    // add event listener for click on save button
    save_button5.addEventListener("click", updateOutput);
    // saving content to local storage
    output_div5.textContent = localStorage.getItem("content5");
    input_textarea5.value = localStorage.getItem("content5");
  
    function updateOutput() {
      localStorage.setItem("content5", input_textarea5.value);
  
      output_div5.textContent = input_textarea5.value;
    }
}

function onePM() {
    // establish variables & tie them to elements using ids
    var input_textarea6 = document.querySelector("#comment1pm");
    var output_div6 = document.querySelector("#comment1pm");
    var save_button6 = document.querySelector("#button1pm");
    // add event listener for click on save button
    save_button6.addEventListener("click", updateOutput);
    // saving content to local storage
    output_div6.textContent = localStorage.getItem("content6");
    input_textarea6.value = localStorage.getItem("content6");
  
    function updateOutput() {
      localStorage.setItem("content6", input_textarea6.value);
  
      output_div6.textContent = input_textarea6.value;
    }
}

function twoPM() {
    // establish variables & tie them to elements using ids
    var input_textarea7 = document.querySelector("#comment2pm");
    var output_div7 = document.querySelector("#comment2pm");
    var save_button7 = document.querySelector("#button2pm");
    // add event listener for click on save button
    save_button7.addEventListener("click", updateOutput);
    // saving content to local storage
    output_div7.textContent = localStorage.getItem("content7");
    input_textarea7.value = localStorage.getItem("content7");
  
    function updateOutput() {
      localStorage.setItem("content7", input_textarea7.value);
  
      output_div7.textContent = input_textarea7.value;
    }
}

function threePM() {
    // establish variables & tie them to elements using ids
    var input_textarea8 = document.querySelector("#comment3pm");
    var output_div8 = document.querySelector("#comment3pm");
    var save_button8 = document.querySelector("#button3pm");
    // add event listener for click on save button
    save_button8.addEventListener("click", updateOutput);
    // saving content to local storage
    output_div8.textContent = localStorage.getItem("content8");
    input_textarea8.value = localStorage.getItem("content8");
  
    function updateOutput() {
      localStorage.setItem("content8", input_textarea8.value);
  
      output_div8.textContent = input_textarea8.value;
    }
}

function fourPM() {
    // establish variables & tie them to elements using ids
    var input_textarea9 = document.querySelector("#comment4pm");
    var output_div9 = document.querySelector("#comment4pm");
    var save_button9 = document.querySelector("#button4pm");
    // add event listener for click on save button
    save_button9.addEventListener("click", updateOutput);
    // saving content to local storage
    output_div9.textContent = localStorage.getItem("content9");
    input_textarea9.value = localStorage.getItem("content9");
  
    function updateOutput() {
      localStorage.setItem("content9", input_textarea9.value);
  
      output_div9.textContent = input_textarea9.value;
    }
}

function fivePM() {
    // establish variables & tie them to elements using ids
    var input_textarea10 = document.querySelector("#comment5pm");
    var output_div10 = document.querySelector("#comment5pm");
    var save_button10 = document.querySelector("#button5pm");
    // add event listener for click on save button
    save_button10.addEventListener("click", updateOutput);
    // saving content to local storage
    output_div10.textContent = localStorage.getItem("content10");
    input_textarea10.value = localStorage.getItem("content10");
  
    function updateOutput() {
      localStorage.setItem("content10", input_textarea10.value);
  
      output_div10.textContent = input_textarea10.value;
    }
}