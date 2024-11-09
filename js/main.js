import formatDateToBrazilian from "./dataBrasil.js";
import validaFormulario from "./validaFormulario.js";
import criarTabela from "./criaTabela.js";

const nameInput = document.querySelector("#name");
const birthDateInput = document.querySelector("#dataLançamento");
const buttonSubmit = document.querySelector("#submitButton");

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

  validaFormulario(
    errorCode,
    valueName,
    valueBirthDateFormated,
    nameInput,
    birthDateInput
  );
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

function alterarFilme() {
  const alterarButtons = document.querySelectorAll("[data-row-id]");

  alterarButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const rowId = button.getAttribute("data-row-id");
      const pessoas = JSON.parse(localStorage.getItem("pessoas"));
      const pessoaSelecionada = pessoas.find((pessoa) => pessoa.id === rowId);

      console.log(pessoas);
    });
  });
}

alterarFilme();
document.addEventListener("DOMContentLoaded", alterarFilme);
