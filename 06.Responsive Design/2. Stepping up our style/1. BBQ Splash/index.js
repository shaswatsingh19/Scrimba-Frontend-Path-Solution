const nameInput = document.querySelector("#name");
const nameLabel = document.querySelector('#name-label')
const emailInput = document.querySelector("#email");
const emailLabel = document.querySelector('#email-label')

nameInput.addEventListener("input", (e) => {
  // console.log(typeof e.target.value)

  let text = e.target.value;
  const reg = /[0-9]/g;
  const p = document.createElement('p')
  nameLabel.textContent = ''
  if (text.match(reg)) {
      nameInput.classList.add("shake");
      p.textContent ='Digit should not be inside name'
      nameLabel.appendChild(p)
  } else {
    nameInput.classList.remove("shake");
    nameLabel.textContent = ''
  }
});

emailInput.addEventListener("input", (e) => {
  let text = e.target.value;

  let isValid = e.target.validity.valid;
  const p = document.createElement('p')
  emailLabel.textContent = ''
  if (isValid && text.length > 9 && text.includes(".com")) {
    emailInput.classList.remove("shake");
    emailLabel.textContent = ''
} else if(text.length>0)    {
    emailInput.classList.add("shake");
    console.log(text)
    p.textContent = 'Please enter valid email'
    emailLabel.appendChild(p)
  }else{
    emailInput.classList.remove("shake");

  }
});
