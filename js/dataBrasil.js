export default function formatDateToBrazilian(dateString) {
  const [year, month, day] = dateString.split("-"); // Divide a string no formato YYYY-MM-DD
  return `${day}/${month}/${year}`; // Retorna a data no formato DD/MM/AAAA
}
