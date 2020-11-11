// from data.js
var tableData = data;


function buildPlot(ufo) {
    console.log("Date URL", date);

    // Use D3 to select the table
    dvar ufo-table = d3.select("table") {
        // Grab values from the response json data to build the table
        var date = data.dataset.datetime;
        var city = data.dataset.city;
        var state = data.dataset.state;
        var country = data.dataset.country;
        var shape = data.dataset.shape;
        var duration = data.dataset.durationMinutes;
        var comments = data.dataset.comments;

        // Print the names of the columns
        console.log(data.dataset.column_names);
        // Print the data for each day
        console.log(data.dataset.date);

        var dates = data.dataset.dateTime.map(row => row[0]);
        // console.log(dates);
        var city = data.dataset.city.map(row => row[4]);
        // console.log(closingPrices);

        var trace1 = {
            x: date,
            y: city,
            name: date,
            type: "line",
            line: {
                color: "limegreen"
            }
        };

        var data = [trace1];

        var layout = {
            title: `${date} Date of Sighting`,
            yaxis: {
                title: "City Where Sighted",
                autorange: true,
                type: "linear"
            }
        };

        Plotly.newPlot("plot", data, layout);

    };
}

// Iterate through each sighting
data.forEach(([date, city, state, country, shape, durationMinutes, comments]) => {

    // Append one table row per sighting all data
    var row = tbody.append("tr");
  
   
  });

// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input value from the form
    var date = d3.select("#datetime").node().value;
    console.log(date);

    // clear the input value
    d3.select("#datetime").node().value = "";

    // Build the plot with the new stock
    buildPlot(date);
};

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);