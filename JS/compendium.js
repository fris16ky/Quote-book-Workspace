// compendium.js

const SPREADSHEET_ID = "1-JC3s8fswWQ-K0kwhGXvHG5ZP6X4wptyAVHFpF6myeI";
const CLIENT_ID =
  "877832616584-i3mvtg0mflf6jv2a65jntldl7n47k927.apps.googleusercontent.com";
const API_KEY = "AIzaSyDouwpV2nv5zWXzswzIlo_OAp3ZmJHqtpM";

// Array of API discovery documents for different APIs
const DISCOVERY_DOCS = [
  "https://sheets.googleapis.com/$discovery/rest?version=v4",
];

// Authorization scopes required by the API
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

// Load the Google API client library
gapi.load("client", initClient);

// Function to initialize the Google API client
function initClient() {
  gapi.client
    .init({
      apiKey: API_KEY,
      discoveryDocs: DISCOVERY_DOCS,
    })
    .then(function () {
      // Your client is initialized and ready to make API requests.
      console.log("Client initialized successfully");
    });
}

// Function to fetch data from Google Sheets using API key
function getDataFromSheet() {
  const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1`;
  return gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: "Sheet1", // Adjust the sheet name and range accordingly
    key: API_KEY,
  });
}

// Function to handle API errors
function handleApiError(error) {
  console.error("API Error:", error);
  // Implement error handling logic
}

// Function to pull data and display it
async function PullData() {
  try {
    const response = await getDataFromSheet();
    const values = response.result.values;

    // Display the data in the quotesContainer
    displayData(values);
  } catch (error) {
    handleApiError(error);
  }
}

// Example: Display the data in a container
function displayData(values) {
  var quotesContainer = document.querySelector(".quotesContainer");
  quotesContainer.innerHTML = ""; // Clear previous content

  if (values && values.length > 0) {
    var table = document.createElement("table");

    for (var i = 0; i < values.length; i++) {
      var row = table.insertRow();
      for (var j = 0; j < values[i].length; j++) {
        var cell = row.insertCell();
        cell.textContent = values[i][j];
      }
    }

    quotesContainer.appendChild(table);
  } else {
    quotesContainer.textContent = "No quotes available.";
  }
}
