import Operacao from "./operacao"

export default class Soma implements Operacao {
    calcular(a: number, b: number): number {
        return a + b
    }
}