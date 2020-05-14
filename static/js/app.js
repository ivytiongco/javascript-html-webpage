// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Append a table to your web page and then add new rows of data for each UFO sighting //
tableData.forEach((d) => {
  var row = tbody.append("tr");
  Object.entries(d).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");  

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputElementCity = d3.select("#city");
  var inputElementState = d3.select("#state");
  var inputElementCountry = d3.select("#country");
  var inputElementShape = d3.select("#shape");


  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var inputValueCity = inputElementCity.property("value");
  var inputValueState = inputElementState.property("value");
  var inputValueCountry = inputElementCountry.property("value");
  var inputValueShape = inputElementShape.property("value");
  
  var dataset = tableData;
  
  // Array of filtered data
  //var filteredData = dataset.filter(row => row.datetime === inputValue);

  if (inputValue) {
    var filteredData = dataset.filter(row => row.datetime === inputValue);
  } else if (inputValueCity) {
    var filteredData = dataset.filter(row => row.city === inputValueCity);
  } else if (inputValueState) {
    var filteredData = dataset.filter(row => row.city === inputValueState);
  } else if (inputValueCountry) {
    var filteredData = dataset.filter(row => row.city === inputValueCountry);
  } else if (inputValueShape) {
    var filteredData = dataset.filter(row => row.city === inputValueShape);

  } else if (inputValue && inputValueCity) {
    var filteredData = dataset.filter(row => row.datetime === inputValue && row.city === inputValueCity);
  } else if (inputValue && inputValueState) {
    var filteredData = dataset.filter(row => row.datetime === inputValue && row.state === inputValueState);
  } else if (inputValue && inputValueCountry) {
    var filteredData = dataset.filter(row => row.datetime === inputValue && row.country === inputValueCountry);
  } else if (inputValue && inputValueShape) {
    var filteredData = dataset.filter(row => row.datetime === inputValue && row.shape === inputValueShape);

  } else if (inputValueCity && inputValueState) {
    var filteredData = dataset.filter(row => row.city === inputValueCity && row.state === inputValueState);
  } else if (inputValueCity && inputValueCountry) {
    var filteredData = dataset.filter(row => row.city === inputValueCity && row.country === inputValueCountry);
  } else if (inputValueCity && inputValueShape) {
    var filteredData = dataset.filter(row => row.city === inputValueCity && row.shape === inputValueShape);

  } else if (inputValueState && inputValueCountry) {
    var filteredData = dataset.filter(row => row.state === inputValueState && row.country === inputValueCountry);
  } else if (inputValueState && inputValueShape) {
    var filteredData = dataset.filter(row => row.city === row.state === inputValueState && row.shape === inputValueShape);
  } 




  var filteredData = dataset.filter(row => row.datetime === inputValue ||
    row.city === inputValueCity ||
    row.state === inputValueState ||
    row.country === inputValueCountry ||
    row.shape === inputValueShape ||
    (row.datetime === inputValue && row.city === inputValueCity) ||
    (row.datetime === inputValue && row.state === inputValueState) ||
    (row.datetime === inputValue && row.country === inputValueCountry) ||
    (row.datetime === inputValue && row.shape === inputValueShape) ||

    (row.city === inputValueCity && row.state === inputValueState) ||
    (row.city === inputValueCity && row.country === inputValueCountry) ||
    (row.city === inputValueCity && row.shape === inputValueShape) ||

    (row.state === inputValueState && row.country === inputValueCountry) ||
    (row.state === inputValueState && row.shape === inputValueShape) ||

    (row.datetime === inputValue && row.city === inputValueCity && row.state === inputValueState) ||
    (row.datetime === inputValue && row.city === inputValueCity && row.country === inputValueCountry) ||
    (row.datetime === inputValue && row.city === inputValueCity && row.shape === inputValueShape) ||

    (row.datetime === inputValue && row.state === inputValueState && row.country === inputValueCountry) ||
    (row.datetime === inputValue && row.state === inputValueState && row.shape === inputValueShape) ||

    (row.datetime === inputValue && row.country === inputValueCountry && row.shape === inputValueShape) ||

    (row.datetime === inputValue && row.city === inputValueCity && row.state === inputValueState && row.country === inputValueCountry) ||
    (row.datetime === inputValue && row.city === inputValueCity && row.state === inputValueState && row.shape === inputValueShape) ||

    (row.datetime === inputValue && row.city === inputValueCity && row.state === inputValueState && row.country === inputValueCountry && row.shape === inputValueShape)
    );
  console.log(filteredData);

  // clear data in tbody
  tbody.html("");

  // create table of filtered data  
  filteredData.forEach((d) => {
    var row = tbody.append("tr");
    Object.entries(d).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
}