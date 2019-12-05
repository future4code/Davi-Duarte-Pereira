export function anoBissexto(ano) {
  if (ano % 4 === 0)
    if (ano % 400 !== 0 && ano % 100 === 0) return false;
    else return true;
  else return false;
}
