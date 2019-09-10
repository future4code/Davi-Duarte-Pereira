const chuva = Boolean(confirm('Está chovendo? Clique em cancelar caso não esteja.'));
const guardaChuva = Boolean(confirm('Você tem guarda-chuva? Clique em cancelar caso não tenha.'));
const userVaiSeMolhar = (chuva && !guardaChuva);

console.log("O user irá se molhar? " + userVaiSeMolhar)