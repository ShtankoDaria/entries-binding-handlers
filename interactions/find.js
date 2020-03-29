const findHandler = entries.handleFind.bind(
  entries,
  "display",
  "key-input",
  "value-input"
);
document.getElementById("find-button").addEventListener("click", findHandler);
