"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const mensagens_1 = __importDefault(require("./mensagens"));
const soma_1 = __importDefault(require("./soma"));
const subtracao_1 = __importDefault(require("./subtracao"));
const multiplicacao_1 = __importDefault(require("./multiplicacao"));
const divisao_1 = __importDefault(require("./divisao"));
const potenciacao_1 = __importDefault(require("./potenciacao"));
const radiciacao_1 = __importDefault(require("./radiciacao"));
let mensagens = new mensagens_1.default();
let operacoes = {
    'Somar': new soma_1.default(),
    'Subtrair': new subtracao_1.default(),
    'Multiplicar': new multiplicacao_1.default(),
    'Dividir': new divisao_1.default(),
    'Potenciar': new potenciacao_1.default(),
    'Radiciar': new radiciacao_1.default()
};
let iniciar = () => {
    mensagens.boasVindas();
    mensagens.ajuda();
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let perguntar = () => {
        leitor.question('Quais são seus números e a operação desejada?\n', (valor) => {
            let instrucoes = valor.trim().split(' ');
            if (instrucoes[0].toLowerCase() === 'sair' ||
                (instrucoes.length === 1 && instrucoes[0].toLowerCase() === 'sair')) {
                console.log('Encerrando calculadora...');
                leitor.close();
                return;
            }
            if (instrucoes.length === 3) {
                let numero1 = Number(instrucoes[0]);
                let numero2 = Number(instrucoes[1]);
                let operacao = instrucoes[2];
                console.log(`Estas foram suas instruções: ${instrucoes.join(' ')}`);
                let calculo = operacoes[operacao];
                if (calculo) {
                    try {
                        let resultado = calculo.calcular(numero1, numero2);
                        console.log(`O resultado da operação é: ${resultado}\n`);
                    }
                    catch (error) {
                        console.log(`Erro: ${error.message}\n`);
                    }
                }
                else {
                    console.log('Operação não reconhecida. Use: Somar, Subtrair, Multiplicar, Dividir, Potenciar, Radiciar\n');
                }
            }
            else {
                console.log('Formato inválido! Digite: <número1> <número2> <operação>\n');
            }
            perguntar();
        });
    };
    perguntar();
};
iniciar();
