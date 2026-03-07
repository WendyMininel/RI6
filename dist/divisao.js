"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Divisao {
    calcular(a, b) {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida");
        }
        return a / b;
    }
}
exports.default = Divisao;
