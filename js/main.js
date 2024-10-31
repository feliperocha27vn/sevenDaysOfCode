const nameInput = document.querySelector("#name");
const birthDateInput = document.querySelector("#birth-date");
const buttonSubmit = document.querySelector("#submitButton");
const messageError = document.querySelector("#messageError");
const containerNotification = document.querySelector("#notificationError");

buttonSubmit.addEventListener("click", mostraDados);

function mostraDados(event) {
  event.preventDefault();

  const valueName = nameInput.value;
  const valueBirthDate = birthDateInput.value;

  const valueBirthDateFormated = formatDateToBrazilian(valueBirthDate);

  // Verifica se o nome contém apenas letras
  const apenasLetras = /^[A-Za-zÀ-ÿ\s]+$/.test(valueName);
  let errorCode = null;

  // Verifica as condições e define o código de erro
  if (valueName.length <= 3) {
    errorCode = "short";
  } else if (valueName.length > 120) {
    errorCode = "long";
  } else if (!apenasLetras) {
    errorCode = "invalid";
  }

  // Usando switch para lidar com os códigos de erro
  switch (errorCode) {
    case "short":
      messageError.textContent = "O nome não pode ter menos de 3 letras";
      break;
    case "long":
      messageError.textContent = "O nome não pode ter mais de 120 letras";
      break;
    case "invalid":
      messageError.textContent = "O nome pode conter apenas letras";
      break;
    default:
      // Se não houver erro, você pode prosseguir com a lógica normal
      console.log(
        `Nome: ${valueName} Data de Nascimento: ${valueBirthDateFormated}`
      );
      return; // Saia da função se não houver erro
  }

  // Mostrar a notificação de erro
  containerNotification.classList.remove("hidden");
  setTimeout(() => {
    messageError.textContent = "";
    containerNotification.classList.add("hidden");
  }, 5000);
}

function formatDateToBrazilian(dateString) {
  const [year, month, day] = dateString.split("-"); // Divide a string no formato YYYY-MM-DD
  return `${day}/${month}/${year}`; // Retorna a data no formato DD/MM/AAAA
}
