// Example 4
(function () {
  var form = document.getElementById("focus-shift");
  var input = document.getElementById("input-error-5");
  var focusButton = document.getElementById("focus-button");
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
      focusButton.parentNode.insertBefore(newNode, focusButton);
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", "error-msg-5");
      input.classList.add("ds-c-field--error");
      newNode.setAttribute("tabindex", "-1");
      newNode.focus();
    }
  });
})();

// Example 5
(function () {
  var form = document.getElementById("no-focus-shift");
  var input = document.getElementById("input-error-6");
  var focusButton = document.getElementById("no-focus-shift-button");
  var newNode = document.createElement("div");
  newNode.setAttribute("id", "error-msg-6");
  newNode.setAttribute("class", "ds-c-field__hint");
  newNode.setAttribute("class", "ds-u-color--error");
  newNode.setAttribute("role", "alert");
  newNode.textContent = "Example error message";
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    if (input.value.trim() == "") {
      console.log("Empty!");
      focusButton.parentNode.insertBefore(newNode, focusButton);
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", "error-msg-6");
      input.classList.add("ds-c-field--error");
    }
  });
})();

// Example 6
(function () {
  var form = document.getElementById("with-icon");
  var input = document.getElementById("input-error-7");
  var focusButton = document.getElementById("with-icon-button");
  var newNode = document.createElement("div");
  newNode.setAttribute("id", "error-msg-7");
  newNode.setAttribute("class", "ds-c-field__hint");
  newNode.setAttribute("class", "ds-u-color--error");
  newNode.setAttribute("role", "alert");
  newNode.textContent = "Example error message";
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    if (input.value.trim() == "") {
      console.log("Empty!");
      focusButton.parentNode.insertBefore(newNode, focusButton);
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", "error-msg-7");
      input.classList.add("ds-c-field--error");
    }
  });
})();

// Example 7
(function () {
  var form = document.getElementById("with-icon-markup");
  var input = document.getElementById("input-error-8");
  var focusButton = document.getElementById("with-icon-markup-button");
  var newNode = document.createElement("div");
  var icon = document.createElement("span");
  var svg =
    '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg role="img" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve"> <title>Error</title> <path d="M162.18,41.592c-5.595-9.586-13.185-17.176-22.771-22.771c-9.588-5.595-20.055-8.392-31.408-8.392 c-11.352,0-21.821,2.797-31.408,8.392c-9.587,5.594-17.177,13.184-22.772,22.771C48.225,51.179,45.428,61.649,45.428,73 c0,11.351,2.798,21.82,8.392,31.408c5.595,9.584,13.185,17.176,22.772,22.771c9.587,5.595,20.056,8.392,31.408,8.392 c11.352,0,21.822-2.797,31.408-8.392c9.586-5.594,17.176-13.185,22.771-22.771c5.594-9.588,8.391-20.058,8.391-31.408 C170.57,61.649,167.773,51.178,162.18,41.592z M118.43,112.025c0,0.761-0.246,1.398-0.734,1.914s-1.086,0.773-1.793,0.773H100.26 c-0.706,0-1.331-0.271-1.874-0.814c-0.543-0.543-0.814-1.168-0.814-1.873V96.546c0-0.706,0.271-1.331,0.814-1.874 c0.543-0.543,1.168-0.814,1.874-0.814h15.643c0.707,0,1.306,0.258,1.793,0.773c0.488,0.518,0.734,1.154,0.734,1.915V112.025z M118.266,83.999c-0.055,0.543-0.339,1.019-0.854,1.426c-0.517,0.407-1.154,0.61-1.914,0.61h-15.073 c-0.761,0-1.413-0.203-1.956-0.61c-0.543-0.407-0.815-0.883-0.815-1.426l-1.385-50.595c0-0.653,0.271-1.141,0.814-1.467 c0.544-0.434,1.196-0.652,1.956-0.652h17.926c0.761,0,1.412,0.217,1.955,0.652c0.543,0.326,0.813,0.815,0.813,1.467L118.266,83.999z "/> </svg>';
  newNode.setAttribute("id", "error-msg-8");
  newNode.setAttribute("class", "ds-c-field__hint");
  newNode.setAttribute("class", "ds-u-color--error");
  newNode.setAttribute("role", "alert");
  newNode.textContent = "Example error message";
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    if (input.value.trim() == "") {
      console.log("Empty!");
      focusButton.parentNode.insertBefore(newNode, focusButton);
      newNode.insertBefore(icon, newNode.firstChild);
      icon.innerHTML = svg;
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", "error-msg-8");
      input.classList.add("ds-c-field--error");
    }
  });
})();

// Example 8
(function () {
  var form = document.getElementById("with-icon-img");
  var input = document.getElementById("input-error-9");
  var focusButton = document.getElementById("with-icon-img-button");
  var newNode = document.createElement("div");
  var img = document.createElement("img");
  newNode.setAttribute("id", "error-msg-9");
  newNode.setAttribute("class", "ds-c-field__hint");
  newNode.setAttribute("class", "ds-u-color--error");
  newNode.setAttribute("role", "alert");
  newNode.textContent = "Example error message";
  img.setAttribute("src", "../images/error.svg");
  img.setAttribute("alt", "Error");
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    if (input.value.trim() == "") {
      console.log("Empty!");
      focusButton.parentNode.insertBefore(newNode, focusButton);
      newNode.insertBefore(img, newNode.firstChild);
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", "error-msg-9");
      input.classList.add("ds-c-field--error");
    }
  });
})();
