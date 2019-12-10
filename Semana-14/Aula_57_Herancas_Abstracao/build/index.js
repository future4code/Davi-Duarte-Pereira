"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chef_1 = require("./chef");
const coolChef = new chef_1.Chef("John", 6000);
coolChef.addNewDish("Pudim de leite", 15, 10, ["leite condensado", "leite", "caramelo"], 60, 10);
coolChef.addNewDish("Brigadeiro", 7, 2.80, ["leite condensado", "achocolatado"], 30, 8);
coolChef.addNewDish("Feijoada", 25, 20, ["feijão preto", "linguiça", "carne de porco"], 100);
coolChef.addNewDish("Arroz com ovo", 11.90, 7.80, ["dois ovos", "arroz", "feijão", "salada de alface"], 20);
coolChef.removeDishFromMenu("Brigadeiro");
//# sourceMappingURL=index.js.map