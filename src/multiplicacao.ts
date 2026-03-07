import Operacao from "./operacao"

export default class Multiplicacao implements Operacao {
    calcular(a: number, b: number): number {
        return a * b
    }
}