let input = document.querySelector("input");
let msg = document.querySelector("p");
let strength = document.querySelector("span");
input.addEventListener("input", () => {
  if (input.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
    input.style.borderColor = "#303030";
  }

  if (input.value.length < 4) {
    strength.innerHTML = "weak";
    input.style.borderColor = "#ff5925";
    msg.style.color = "#ff5925";
  } else if (input.value.length >= 4 && input.value.length < 8) {
    strength.innerHTML = "medium";
    input.style.borderColor = "yellow";
    msg.style.color = "yellow";
  } else if (input.value.length >= 8) {
    strength.innerHTML = "strong";
    input.style.borderColor = "#26d730";
    msg.style.color = "#26d730";
  }
});
