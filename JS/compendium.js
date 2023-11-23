const sql = require("mssql");

const config = {
  user: "your_username",
  password: "",
  server: "your_server",
  database: "your_database",
};

const sql = require("mssql");

const config = {
  user: "your_username",
  password: "your_password",
  server: "your_server",
  database: "your_database",
};

function PullData() {
  // Connect to the database
  sql
    .connect(config)
    .then(() => {
      // Query
      return sql.query`SELECT * FROM Quotebook`;
    })
    .then((result) => {
      // Display results in the resultContainer
      const resultContainer = document.getElementById("resultContainer");

      // Clear previous results
      resultContainer.innerHTML = "";

      // Append new results
      result.recordset.forEach((record) => {
        const resultItem = document.createElement("div");
        resultItem.textContent = JSON.stringify(record);
        resultContainer.appendChild(resultItem);
      });
    })
    .catch((err) => {
      console.error("Error:", err);
    })
    .finally(() => {
      // Close the connection
      sql.close();
    });
}
