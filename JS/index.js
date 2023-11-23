const GenRdmQuote = document.querySelector(".GenRdmQuote button");
var isClicked = false;

const SPREADSHEET_ID = "1-JC3s8fswWQ-K0kwhGXvHG5ZP6X4wptyAVHFpF6myeI";
const CLIENT_ID =
  "877832616584-i3mvtg0mflf6jv2a65jntldl7n47k927.apps.googleusercontent.com";

// // Fetch data from Google Sheets
// fetch(
//   `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1?key=${CLIENT_ID}`
// )
//   .then((response) => response.json())
//   .then((data) => {
//     // Process the data as needed
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// Array of API discovery documents for different APIs
const DISCOVERY_DOCS = [
  "https://sheets.googleapis.com/$discovery/rest?version=v4",
];

// Authorization scopes required by the API
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

// Function to handle authorization
function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}

// Function to initialize the Google API client
function initClient() {
  gapi.client
    .init({
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(function () {
      // Your client is initialized and ready to make API requests.
      console.log("Client initialized successfully");
    });
}

// Load the Google API client library
gapi.load("client", initClient);

// Function to fetch data from Google Sheets using OAuth 2.0
function getDataFromSheet() {
  gapi.client.sheets.spreadsheets.values
    .get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1", // Adjust the sheet name and range accordingly
    })
    .then(function (response) {
      var values = response.result.values;

      // Assuming the data structure is consistent (rows and columns)
      for (var i = 0; i < values.length; i++) {
        var row = values[i];
        // Access each cell in the row
        var cell1 = row[0]; // Assuming the first cell contains the desired data
        var cell2 = row[1]; // Assuming the second cell contains additional data
        // ... process and use the data as needed
        console.log(
          "Row " + (i + 1) + " - Cell 1: " + cell1 + ", Cell 2: " + cell2
        );
      }
    })
    //need to do this part myself
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
}

// Function to handle API errors
function handleApiError(error) {
  console.error("Error:", error);
  // Implement error handling logic
}

GenRdmQuote.addEventListener("click", (e) => {
  //when the user clicks on the Generate Random Quote button, pull one from the database and display it neatly on screen. Maybe a pop up window?
});

function addQuote() {
  //PUT THIS ON GITHUB - maybe hide it tho? idk don't think I can while also publishing it to GH Pages tho

  //obv a later problem, but make sure that I can delete from the db if something is added that I don't want/is wrong
  //Add the entered info into the database!
  //DB should have 3 fields: User, QuoteText, DateEntered
  if (!isClicked) {
    isClicked = true;
    //create date input
    var dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.name = "quoteDate";
    dateInput.required = true;
    dateInput.min = "2001-12-03";

    //create Quote text box input
    var quoteInput = document.createElement("input");
    quoteInput.type = "text";
    quoteInput.name = "quoteText";
    quoteInput.placeholder = "Oogity Boogity";
    quoteInput.required = true;
    quoteInput.size = "50";

    //create Quote Speaker text box input
    var quoteSpeaker = document.createElement("input");
    quoteSpeaker.type = "text";
    quoteSpeaker.name = "speakerText";
    quoteSpeaker.placeholder = "Angley";
    quoteSpeaker.required = true;
    quoteSpeaker.size = "50";

    // Create line breaks
    var lineBreak1 = document.createElement("br");
    var lineBreak2 = document.createElement("br");
    var lineBreak3 = document.createElement("br");
    var lineBreakinit = document.createElement("br");

    //Create Buttons (Submit + Cancel)
    var submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.name = "submitBtn";
    submitBtn.innerText = "Submit";
    submitBtn.style =
      "background-color: red; color: white; border: none; margin-right: 10px; margin-bottom: 7px;";

    var cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.name = "cancelBtn";
    cancelBtn.innerText = "Cancel";
    cancelBtn.onclick = Cancel;
    cancelBtn.style =
      "background-color: red; color: white; border: none; margin-left: 10px; margin-bottom: 7px;";

    var container = document.getElementById("inputContainer");
    //Append inputs to the container
    container.appendChild(lineBreakinit);
    container.appendChild(dateInput);
    container.appendChild(lineBreak1);
    container.appendChild(quoteInput);
    container.appendChild(lineBreak2);
    container.appendChild(quoteSpeaker);
    container.appendChild(lineBreak3);
    container.appendChild(submitBtn);
    container.appendChild(cancelBtn);
  } else {
  }
}

function Submit() {
  //Check to make sure that all fields were properly filled in -- keep in mind, will be trying to do this dynamically.
  //So, maybe in the AddQuote, keep track of if anything is entered when gathering user input? Like using a boolean, not sure tho
}

function Cancel() {
  isClicked = false;

  var container = document.getElementById("inputContainer");
  container.innerHTML = "";
}
