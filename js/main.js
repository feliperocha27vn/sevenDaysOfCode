import criarTabela from "./criaTabela.js";
import formatDateToBrazilian from "./dataBrasil.js";

const nameInput = document.querySelector("#name");
const birthDateInput = document.querySelector("#birth-date");
const buttonSubmit = document.querySelector("#submitButton");
const messageError = document.querySelector("#messageError");
const containerNotification = document.querySelector("#notificationError");

buttonSubmit.addEventListener("click", mostraDados);

function mostraDados(event) {
  event.preventDefault();

  let valueName = nameInput.value;
  let valueBirthDate = birthDateInput.value;

  let valueBirthDateFormated = formatDateToBrazilian(valueBirthDate);

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
      containerNotification.classList.remove("hidden");
      setTimeout(() => {
        messageError.textContent = "";
        containerNotification.classList.add("hidden");
      }, 5000);
      break;
    case "long":
      messageError.textContent = "O nome não pode ter mais de 120 letras";
      containerNotification.classList.remove("hidden");
      setTimeout(() => {
        messageError.textContent = "";
        containerNotification.classList.add("hidden");
      }, 5000);
      break;
    case "invalid":
      messageError.textContent = "O nome pode conter apenas letras";
      containerNotification.classList.remove("hidden");
      setTimeout(() => {
        messageError.textContent = "";
        containerNotification.classList.add("hidden");
      }, 5000);
      break;
    default:
      criarTabela(valueName, valueBirthDateFormated);

      // Recupera dados existentes ou inicializa um array vazio
      let pessoas;
      try {
        pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
      } catch {
        pessoas = [];
      }

      // Adiciona nova pessoa ao array
      pessoas.push({
        nome: valueName,
        dataNascimento: valueBirthDateFormated,
      });

      // Salva array atualizado no localStorage
      localStorage.setItem("pessoas", JSON.stringify(pessoas));

      // Limpa os campos
      nameInput.value = "";
      birthDateInput.value = "";
  }
}

// Função para carregar dados do localStorage
function carregarDados() {
  try {
    const pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
    pessoas.forEach((pessoa) => {
      criarTabela(pessoa.nome, pessoa.dataNascimento);
    });
  } catch {
    localStorage.setItem("pessoas", JSON.stringify([]));
  }
}

// Chama a função quando a página carrega
document.addEventListener("DOMContentLoaded", carregarDados);
