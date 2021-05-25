function unblur(messagebox) {
  document.querySelector(".container").classList.remove("blurred");
  messagebox.parentNode.remove();
}

function toggleTemperature(elemOption) {
  var elements = document.querySelectorAll(".cold, .hot");
  elements.forEach((elem) => {
    var parsedElem = parseFloat(elem.innerHTML);
    if (elemOption.value === "F") {
      parsedElem = (parsedElem * 9) / 5 + 32;
    } else {
      parsedElem = ((parsedElem - 32) * 5) / 9;
      elem.innerHTML = parsedElem.toFixed(2);
    }
    elem.innerHTML = parsedElem.toFixed(2) + "&#176";
  });
}
