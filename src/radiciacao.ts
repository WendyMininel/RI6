import Operacao from './operacao'

export default class Radiciacao implements Operacao {
    calcular(a: number, b: number): number {
        if(a < 0 && b % 2 === 0){
            throw new Error("Raiz de índice par de número negativo não é real")
        }
        return Math.pow(a, 1 / b)
    }
}