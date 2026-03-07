"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Radiciacao {
    calcular(a, b) {
        if (a < 0 && b % 2 === 0) {
            throw new Error("Raiz de índice par de número negativo não é real");
        }
        return Math.pow(a, 1 / b);
    }
}
exports.default = Radiciacao;
