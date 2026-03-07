import Operacao from "./operacao"

export default class Divisao implements Operacao {
    calcular(a: number, b: number): number {
        if(b === 0){
            throw new Error("Divisão por zero não é permitida")
        }
        return a / b
    }
}