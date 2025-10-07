const fs = require('fs');
const goldPath = './database/golds/golds.json';

// Carrega o JSON ou inicializa com array vazio
let goldDB = fs.existsSync(goldPath) ? JSON.parse(fs.readFileSync(goldPath)) : [];

// Função para salvar
function saveGoldDB() {
fs.writeFileSync(goldPath, JSON.stringify(goldDB, null, 2));
}

// Encontra o índice do usuário
function findUserIndex(sender) {
return goldDB.findIndex(entry => entry.id === sender);
}

// Adiciona Gold
function addGold(sender, quantidade) {
const index = findUserIndex(sender);
if (index === -1) {
goldDB.push({ id: sender, gold: quantidade });
} else {
goldDB[index].gold += quantidade;
}
saveGoldDB();
}

// Remove Gold
function delGold(sender, quantidade) {
const index = findUserIndex(sender);
if (index === -1) {
goldDB.push({ id: sender, gold: 0 });
} else {
goldDB[index].gold -= quantidade;
if (goldDB[index].gold < 0) goldDB[index].gold = 0;
}
saveGoldDB();
}

// Pega a quantidade de Gold
function getGold(sender) {
const user = goldDB.find(entry => entry.id === sender);
return user ? user.gold : 0;
}

module.exports = {
    addGold,
    delGold,
    getGold
};