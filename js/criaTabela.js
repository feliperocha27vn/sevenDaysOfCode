export default function criarTabela(nome, dataNascimento) {
  // Seleciona o tbody pelo ID
  const tbody = document.querySelector("#elementoContainer");

  // Criar uma nova linha
  const tr = document.createElement("tr");

  // Criar células para nome e data
  const tdNome = document.createElement("td");
  const tdData = document.createElement("td");

  // Adicionar classes às células
  tdNome.className =
    "border border-slate-300 dark:border-slate-700 p-4 text-black";
  tdData.className =
    "border border-slate-300 dark:border-slate-700 p-4 text-black";

  // Adicionar os valores às células
  tdNome.textContent = nome;
  tdData.textContent = dataNascimento;

  // Adicionar as células à linha
  tr.appendChild(tdNome);
  tr.appendChild(tdData);

  // Adicionar a linha ao corpo da tabela
  tbody.appendChild(tr);
}
