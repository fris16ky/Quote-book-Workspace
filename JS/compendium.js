function PullData() {
  // Make a GET request to the server endpoint
  fetch("/get-quotes")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Display results in the resultContainer
      const resultContainer = document.querySelector(".quotesContainer");

      // Clear previous results
      resultContainer.innerHTML = "";

      // Append new results
      data.forEach((record) => {
        const resultItem = document.createElement("div");
        resultItem.textContent = JSON.stringify(record);
        resultContainer.appendChild(resultItem);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
