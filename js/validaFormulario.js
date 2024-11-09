import criarTabela from "./criaTabela.js";

export default function validaFormulario(
  errorCode,
  nome,
  dataNascimento,
  campoNome,
  campoData
) {
  const messageError = document.querySelector("#messageError");
  const containerNotification = document.querySelector("#notificationError");
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
      criarTabela(nome, dataNascimento);

      // Recupera dados existentes ou inicializa um array vazio
      let pessoas;
      try {
        pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
      } catch {
        pessoas = [];
      }
      // Adiciona nova pessoa ao array
      pessoas.push({
        id: int,
        nome: nome,
        dataNascimento: dataNascimento,
      });

      pesssoas.id += 1;

      // Salva array atualizado no localStorage
      localStorage.setItem("pessoas", JSON.stringify(pessoas));

      // Limpa os campos
      campoNome.value = "";
      campoData.value = "";
  }
}
