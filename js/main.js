const nameInput = document.querySelector("#name");
const birthDateInput = document.querySelector("#birth-date");
const buttonSubmit = document.querySelector("#submitButton");

buttonSubmit.addEventListener("click", mostraDados);

function mostraDados(event) {
  event.preventDefault();

  const valueName = nameInput.value;
  const valueBirthDate = birthDateInput.value;

  if (valueName != "" && valueName != "") {
    return console.log(valueName, valueBirthDate);
  } else {
    return window.alert('Os valores dos campos não podem ser vazios')
  }
}
