// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);


// Step 1: Loop Through `data` and log each ufo report object
data.forEach(sighting => {
    console.log(sighting);

    // Step 2:  Use d3 to append one table row `tr` for each ufo report object
    var row = tbody.append("tr");

    // Step 3:  Use `Object.entries` to log each ufo report value
    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);

        // Step 4: Use d3 to append 1 cell per ufo report value (date, city, state, country, shape, duration, comments)
        var cell = row.append("td");

        // Step 5: Use d3 to update each cell's text with
        // ufo report values (date, city, state, country, shape, duration, comments)
        cell.text(value);
    });
});

// All events have 2 components:
// ---- Target: a reference to the object that dispatched the event
// ---- Handler: a function that executes in response to the event

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");





// This function is triggered when the button is clicked
function handleClick() {
    console.log("A button was clicked!");
    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
}



// We can use the `on` function in d3 to attach an event to the handler function
// Types of web events: https://developer.mozilla.org/en-US/docs/Web/Events


button.on("click", function () {
    var dateEntry = d3.select("#datetime").node().value;
    console.log(dateEntry);

    var cityEntry = d3.select("#city").node().value;
    console.log(cityEntry);

    var filteredData = tableData.filter(tableData => tableData.datetime === dateEntry);
    console.log(filteredData);

    var filterDataDateCity = filteredData.filter(filteredData => filteredData.city === cityEntry.toLowerCase());
    console.log(filterDataDateCity);


    // remove any data from the table
    tbody.html("");

    // Step 1: Loop Through `data` and log each filtered ufo report object
    filterDataDateCity.forEach(sighting => {
        console.log(sighting);

        // Step 2:  Use d3 to append one table row `tr` for each ufo report object
        var row = tbody.append("tr");

        // Step 3:  Use `Object.entries` to log each ufo report value
        Object.entries(sighting).forEach(([key, value]) => {
            console.log(key, value);

            // Step 4: Use d3 to append 1 cell per ufo report value (date, city, state, country, shape, duration, comments)
            var cell = row.append("td");

            // Step 5: Use d3 to update each cell's text with
            // ufo report values (date, city, state, country, shape, duration, comments)
            cell.text(value);
        });
    });

});