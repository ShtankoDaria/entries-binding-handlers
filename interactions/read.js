const readHandler = entries.handleRead.bind(
  entries,
  "display",
  "key-input",
  "value-input"
);
document.getElementById("read-button").addEventListener("click", readHandler);
