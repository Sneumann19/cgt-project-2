// Grab the HTML parts
var searchBtn = document.getElementById("searchBtn");
var randomBtn = document.getElementById("randomBtn");
var display = document.getElementById("result-text");
var input = document.getElementById("userInput");

// SEARCH function
searchBtn.addEventListener("click", function() {
    var query = input.value;
    if (query == "") {
        alert("Please enter a word first!");
        return;
    }

    var searchUrl = "https://api.adviceslip.com/advice/search/" + query;

    fetch(searchUrl)
    .then(function(res) { return res.json(); })
    .then(function(data) {
        if (data.message) {
            display.innerHTML = "No advice found for '" + query + "'. Try another word like 'life' or 'smile'.";
        } else {
            // Display the first advice result
            display.innerHTML = data.slips[0].advice;
        }
    })
    .catch(function(err) {
        display.innerHTML = "Connectivity error. Try again.";
    });
});

// RANDOM function
randomBtn.addEventListener("click", function() {
    var randomUrl = "https://api.adviceslip.com/advice";

    fetch(randomUrl)
    .then(function(res) { return res.json(); })
    .then(function(data) {
        display.innerHTML = data.slip.advice;
    })
    .catch(function(err) {
        display.innerHTML = "Something went wrong.";
    });
});