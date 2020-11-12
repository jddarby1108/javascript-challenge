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
