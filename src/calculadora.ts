import * as readline from 'readline'
import Mensagens from './mensagens'
import Soma from './soma'
import Subtracao from './subtracao'
import Multiplicacao from './multiplicacao'
import Divisao from './divisao'
import Potenciacao from './potenciacao'
import Radiciacao from './radiciacao'

let mensagens = new Mensagens()

let operacoes: any = {
    'Somar': new Soma(),
    'Subtrair': new Subtracao(),
    'Multiplicar': new Multiplicacao(),
    'Dividir': new Divisao(),
    'Potenciar': new Potenciacao(),
    'Radiciar': new Radiciacao()
}

let iniciar = () => {
    mensagens.boasVindas()
    mensagens.ajuda()
    
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let perguntar = () => {
        leitor.question('Quais são seus números e a operação desejada?\n', (valor) => {
            let instrucoes = valor.trim().split(' ')
            
            if(instrucoes[0].toLowerCase() === 'sair' || 
               (instrucoes.length === 1 && instrucoes[0].toLowerCase() === 'sair')){
                console.log('Encerrando calculadora...')
                leitor.close()
                return
            }
            
            if(instrucoes.length === 3){
                let numero1 = Number(instrucoes[0])
                let numero2 = Number(instrucoes[1])
                let operacao = instrucoes[2]
                
                console.log(`Estas foram suas instruções: ${instrucoes.join(' ')}`)
                
                let calculo = operacoes[operacao]
                
                if(calculo){
                    try {
                        let resultado = calculo.calcular(numero1, numero2)
                        console.log(`O resultado da operação é: ${resultado}\n`)
                    } catch (error: any) {
                        console.log(`Erro: ${error.message}\n`)
                    }
                } else {
                    console.log('Operação não reconhecida. Use: Somar, Subtrair, Multiplicar, Dividir, Potenciar, Radiciar\n')
                }
            } else {
                console.log('Formato inválido! Digite: <número1> <número2> <operação>\n')
            }
            
            perguntar()
        })
    }
    
    perguntar()
}

iniciar()