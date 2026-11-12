# Programação Orientada a Objetos — RI6

Repositório destinado ao desenvolvimento da atividade **RI6**, realizada na disciplina de **Programação Orientada a Objetos**, do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **Faculdade de Tecnologia de São José dos Campos (FATEC-SJC)**.

## Sobre o Projeto

O projeto consiste em uma calculadora interativa desenvolvida em **TypeScript**, utilizando conceitos de programação orientada a objetos para implementar diferentes operações matemáticas.

A atividade explora a utilização de interfaces, classes, implementação de contratos, polimorfismo e modularização de código.

O sistema permite que o usuário informe dois números e a operação desejada pelo terminal, realizando o cálculo e apresentando o resultado.

## Funcionalidades

- Realização de operações matemáticas por meio do terminal.
- Soma de dois números.
- Subtração de dois números.
- Multiplicação de dois números.
- Divisão de dois números.
- Potenciação.
- Radiciação.
- Identificação de operações inválidas.
- Tratamento de erros matemáticos.
- Exibição de instruções de utilização.
- Execução contínua até o comando de encerramento.
- Organização das operações em classes independentes.

## Operações Disponíveis

| Operação | Comando | Descrição |
|---|---|---|
| Soma | `Somar` | Adição de dois números |
| Subtração | `Subtrair` | Subtração do segundo número pelo primeiro |
| Multiplicação | `Multiplicar` | Produto de dois números |
| Divisão | `Dividir` | Divisão do primeiro número pelo segundo |
| Potenciação | `Potenciar` | Primeiro número elevado ao segundo |
| Radiciação | `Radiciar` | Raiz do primeiro número com índice definido pelo segundo |
| Encerrar | `Sair` | Finaliza a execução da calculadora |

## Estrutura das Classes e Interface

A aplicação utiliza uma interface e diferentes classes responsáveis pelas operações e pela interação com o usuário.

### Interface Operacao

Define o contrato que deve ser implementado pelas classes responsáveis pelos cálculos matemáticos.

```typescript
export default interface Operacao {
    calcular(a: number, b: number): number
}
```

A interface determina que todas as operações devem possuir o método `calcular()`, recebendo dois valores numéricos e retornando um resultado.

### Classes das Operações

As classes `Soma`, `Subtracao`, `Multiplicacao`, `Divisao`, `Potenciacao` e `Radiciacao` implementam a interface `Operacao`.

Cada classe possui sua própria implementação do método `calcular()`, permitindo executar diferentes comportamentos por meio de uma estrutura comum.

- **Soma:** realiza a adição.
- **Subtracao:** realiza a subtração.
- **Multiplicacao:** realiza a multiplicação.
- **Divisao:** realiza a divisão e impede divisões por zero.
- **Potenciacao:** utiliza `Math.pow()` para calcular potências.
- **Radiciacao:** utiliza `Math.pow()` para calcular raízes e verifica raízes de índice par de números negativos.

### Classe Mensagens

Responsável por apresentar as informações de utilização da calculadora.

**Métodos:**
- `boasVindas()`: apresenta o título e as operações disponíveis.
- `ajuda()`: exibe as instruções e exemplos de utilização.

### Arquivo calculadora.ts

Responsável pelo funcionamento principal da aplicação.

Esse arquivo importa as classes, cria os objetos correspondentes às operações e utiliza o módulo `readline` do Node.js para receber os comandos digitados pelo usuário.

Também realiza a identificação da operação solicitada, a execução do cálculo e o tratamento de erros.

## Funcionamento

Inicialmente, o programa apresenta uma mensagem de boas-vindas e as instruções para utilização da calculadora.

O usuário deve informar dois números e o nome da operação desejada, separados por espaços.

O sistema interpreta os valores informados, identifica a classe correspondente à operação e executa o método `calcular()`.

Após o processamento, o resultado é apresentado no terminal.

A calculadora continua recebendo novas instruções até que o usuário digite `Sair`.

## Exemplos de Utilização

**Soma:**

```text
10 5 Somar
O resultado da operação é: 15
```

**Subtração:**

```text
10 5 Subtrair
O resultado da operação é: 5
```

**Multiplicação:**

```text
10 5 Multiplicar
O resultado da operação é: 50
```

**Divisão:**

```text
10 5 Dividir
O resultado da operação é: 2
```

**Potenciação:**

```text
2 3 Potenciar
O resultado da operação é: 8
```

**Radiciação:**

```text
16 2 Radiciar
O resultado da operação é: 4
```

**Encerramento:**

```text
Sair
Encerrando calculadora...
```

## Tratamento de Erros

A aplicação implementa verificações para identificar situações inválidas durante a execução.

Entre os tratamentos disponíveis estão:

- Impedimento de divisão por zero.
- Verificação de raízes de índice par de números negativos.
- Identificação de operações não reconhecidas.
- Verificação da quantidade de argumentos informados.
- Captura de exceções por meio de `try...catch`.

Esses mecanismos contribuem para a confiabilidade e a organização da aplicação.

## Conceitos Aplicados

- Programação orientada a objetos.
- Classes e instanciação de objetos.
- Interfaces em TypeScript.
- Implementação de interfaces com `implements`.
- Polimorfismo.
- Métodos e parâmetros tipados.
- Modularização de código.
- Importação e exportação de classes.
- Separação de responsabilidades.
- Estruturas condicionais.
- Funções e arrow functions.
- Tratamento de exceções.
- Entrada e saída de dados pelo terminal.
- Compilação de TypeScript para JavaScript.

## Tecnologias Utilizadas

- **TypeScript:** linguagem utilizada para implementar a lógica da calculadora.
- **JavaScript:** linguagem gerada após a compilação.
- **Node.js:** ambiente responsável pela execução da aplicação.
- **readline:** módulo nativo do Node.js utilizado para interação pelo terminal.
- **npm:** gerenciamento de dependências.
- **TypeScript Compiler (tsc):** compilação do código TypeScript.

## Estrutura do Repositório

```text
RI6/
├── src/
│   ├── calculadora.ts
│   ├── divisao.ts
│   ├── mensagens.ts
│   ├── multiplicacao.ts
│   ├── operacao.ts
│   ├── potenciacao.ts
│   ├── radiciacao.ts
│   ├── soma.ts
│   └── subtracao.ts
│
├── dist/
│   └── ... arquivos JavaScript compilados
│
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Como Executar

**1.** Clone o repositório:

```bash
git clone https://github.com/WendyMininel/RI6.git
```

**2.** Acesse a pasta do projeto:

```bash
cd RI6
```

**3.** Instale as dependências:

```bash
npm install
```

**4.** Compile o arquivo principal e seus módulos utilizando o TypeScript:

```bash
npx tsc src/calculadora.ts --outDir dist --target ES2020 --module commonjs --skipLibCheck
```

**5.** Execute a calculadora:

```bash
node dist/calculadora.js
```

O terminal apresentará as instruções de utilização e permitirá realizar as operações matemáticas disponíveis.

## Objetivo Acadêmico

Aplicar e aprofundar os conceitos de programação orientada a objetos por meio do desenvolvimento de uma calculadora modular em TypeScript.

A atividade busca compreender a utilização de interfaces como contratos, a implementação de diferentes comportamentos por meio do polimorfismo e a importância da separação de responsabilidades na organização do código.

Também contribui para o desenvolvimento de habilidades relacionadas à manipulação de entradas do usuário, tratamento de exceções e construção de aplicações interativas executadas pelo terminal.

## Autora

**Wendy Santos Mininel**

Análise e Desenvolvimento de Sistemas — FATEC São José dos Campos

[GitHub — WendyMininel](https://github.com/WendyMininel)

---

Projeto desenvolvido para fins acadêmicos na disciplina de Programação Orientada a Objetos.
