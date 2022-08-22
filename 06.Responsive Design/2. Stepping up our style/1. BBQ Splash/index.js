const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

nameInput.addEventListener("input", (e) => {
  // console.log(typeof e.target.value)

  let text = e.target.value;
  const reg = /[0-9]/g;

  if (text.match(reg)) {
    nameInput.classList.add("shake");
  } else {
    nameInput.classList.remove("shake");
  }
});

emailInput.addEventListener("input", (e) => {
  let text = e.target.value;

  let isValid = e.target.validity.valid;

  if (isValid && text.length > 9 && text.length > 0 && text.includes(".com")) {
    emailInput.classList.remove("shake");
  } else {
    emailInput.classList.add("shake");
  }
});
