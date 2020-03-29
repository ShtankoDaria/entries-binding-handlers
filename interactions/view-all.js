const viewAllHandler = entries.handleViewAll.bind(
  entries,
  "display",
  "key-input",
  "value-input"
);
document
  .getElementById("view-all-button")
  .addEventListener("click", viewAllHandler);
