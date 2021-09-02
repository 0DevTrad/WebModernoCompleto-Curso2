// Código não executável!!!

// Procedural
processamento(valor1, valor2, valor3)

/*
    Baseado no procedimento, na função. Você tem um trecho de código reutilizável
    em diferentes lugares. Os valores inseridos são processados pelas funções.
*/

// Orientada a Objeto (OO)
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        // ...
    }
}
objeto.processamento() // Foco passou a ser o objeto

/*
    A OO mudou o foco, antes na procedural tinha-se funções que manipulavam os dados, 
    na OO você tem objeto e dentro desse objeto (dado) você tem dados (valores) 
    e funções (comportamentos). Você passa a invocar os processamentos a partir
    do dado.


- Princípios importantes:
  1. Abstração
    - Entender o mundo real e transformar em sofware.

  2. Encapsulamento
    - Ter os detalhes de implementação escondidos e mostrar pra quem precisa 
      usar aquele sistema uma interface simples para que seja possível interagir
      com aquele objeto.
 
  3. Herança (prototype)
     - Existem algumas formas de reusar código:
      
      O princípio da composição é baseado na relação "Tem um"
      Ex: Supondo que eu tenha um objeto carro e um objeto motor, eu não preciso colocar
      dentro de carro toda a complexidade de motor. Basta dizer que carro tem um motor e 
      dentro do objeto motor eu terei a sua própria complexidade. O objeto motor por sua
      vez pode fazer o mesmo processo de modo que através de vários objetos simples tenha-se
      um objeto complexo.

      Princípio baseado na relação "É um".
      Outra forma de reusar código é através de herança.
      Herança significa que você recebe atributos e comportamentos de um objeto pai.
      Ex: Animal -> Mamímefero -> Humano

      Priorize a composição no lugar da herança.
    
  4. Polimorfismo (múltiplas formas)
    - É um conceito mais abstrato. 
      Ex: Você tem uma classe mais genérica chamada carro e você consegue atribuir
      diferentes tipos de carro.
    
    



*/