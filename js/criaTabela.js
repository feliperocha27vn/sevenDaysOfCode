// Arquivo criaTabela.js
let rowData = []; // Array para armazenar as informações de cada linha

export default function criarTabela(nome, dataNascimento) {
  // Seleciona o tbody pelo ID
  const tbody = document.querySelector("#elementoContainer");

  // Gera um ID único para a linha
  const rowId = `row-${rowData.length + 1}`;

  // Cria a nova linha com as informações e o ID
  const newRow = `
    <tr id="${rowId}">
      <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
        ${nome}
      </td>
      <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 flex justify-between items-center w-full">
        ${dataNascimento}
        <div class="flex items-center gap-x-2">
          <button class="cursor-pointer" data-row-id="${rowId}">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen">
              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
            </svg>
          </button>
          <button class="cursor-pointer" data-row-id="${rowId}">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-archive-x">
              <rect width="20" height="5" x="2" y="3" rx="1" />
              <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
              <path d="m9.5 17 5-5" />
              <path d="m9.5 12 5 5" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  `;

  // Adiciona a nova linha ao tbody
  tbody.innerHTML += newRow;

  // Adiciona as informações da linha ao array rowData
  rowData.push({ id: rowId, nome, dataNascimento });
}