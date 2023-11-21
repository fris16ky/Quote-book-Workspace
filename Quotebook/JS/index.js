const GenRdmQuote = document.querySelector(".GenRdmQuote button");
const sql = require("mssql");
var isClicked = false;

// Configuration for  SQL Server
const config = {
  server: "FRISKYOGA\\SQLEXPRESS",
  database: "Quotebook",
  options: {
    trustedConnection: true, // Use Windows Authentication
  },
};

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
