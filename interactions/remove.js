const removeHandler = entries.handleRemove.bind(entries, "display");
document
  .getElementById("remove-button")
  .addEventListener("click", removeHandler);
