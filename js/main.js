(function () {
  var form = document.getElementById("focus-shift");
  var input = document.getElementById("input-error-5");
  var newNode = document.createElement("div");
  newNode.setAttribute("id", "error-msg-5");
  newNode.setAttribute("class", "ds-c-field__hint");
  newNode.setAttribute("class", "ds-u-color--error");
  newNode.setAttribute("role", "alert");
  newNode.textContent = "Example error message";
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    if (input.value.trim() == "") {
      console.log("Empty!");
      input.after(newNode);
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", "error-msg-5");
      input.classList.add("ds-c-field--error");
      newNode.setAttribute("tabindex", "-1");
      newNode.focus();
    }
  });
})();
