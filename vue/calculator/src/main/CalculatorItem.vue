<template>
  <div class="calculator">
      <DisplayItem :value="displayValue"/>
      <ButtonItem label="AC" triple @onCLick="clearMemory"/>
      <ButtonItem label="/" operation @onCLick="setOperation"/>
      <ButtonItem label="7" @onCLick="addDigit"/>
      <ButtonItem label="8" @onCLick="addDigit"/>
      <ButtonItem label="9" @onCLick="addDigit"/>
      <ButtonItem label="*" operation @onCLick="setOperation"/>
      <ButtonItem label="4" @onCLick="addDigit"/>
      <ButtonItem label="5" @onCLick="addDigit"/>
      <ButtonItem label="6" @onCLick="addDigit"/>
      <ButtonItem label="-" operation @onCLick="setOperation"/>
      <ButtonItem label="1" @onCLick="addDigit"/>
      <ButtonItem label="2" @onCLick="addDigit"/>
      <ButtonItem label="3" @onCLick="addDigit"/>
      <ButtonItem label="+" operation @onCLick="setOperation"/>
      <ButtonItem label="0" double @onCLick="addDigit" />
      <ButtonItem label="."  @onCLick="addDigit"/>
      <ButtonItem label="=" operation @onCLick="setOperation"/>
      
  </div>
</template>

<script>
import DisplayItem from "../components/DisplayItem.vue"
import ButtonItem from "../components/ButtonItem.vue"

export default {
    data: function() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    components: {ButtonItem, DisplayItem},
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data())
            // this.$options.data() -> Estado inicial do objeto.
        },
        setOperation(operation) {
            // Primeiro número informado
            if (this.current === 0) {
                // Adicionando a operação
                this.operation = operation
                // Segundo dígito informado
                this.current = 1
                this.clearDisplay = true
            } else {
                //Armazendando a operação "=" na constante equals
                const equals = operation === "="
                const currentOperation = this.operation

                try {
                    // O values[0] recebe 2 valores e operação
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                    if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
                        this.clearMemory()
                        return
                    }
                } catch (e) {
                    this.$emit('onError', e)
                }
                // values[1] fica livre pra receber novos valores
                this.values[1] = 0

                // Display recebe o resultado da operação
                this.displayValue = this.values[0]
                this.operation = equals? null : operation
                // Se o usuário colocar igual ele continua mexendo no primeiro elemento do array, se colocou uma operação mexerá no segundo item.
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },
        addDigit(n) {
            // Apenas um "." por valor colocado
            if (n === "." && this.displayValue.includes(".")) {
                return
            }

            // Lógica de adição de dígito
            const clearDisplay = this.displayValue === "0"
                || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue
            this.clearDisplay = false

            // Alternativa 1
            this.values[this.current] = displayValue
            
            //Alternativa 2
            // if (n !== ".") {
            //     const i = this.current
            //     const newValue = parseFloat(displayValue)
            //     this.values[i] = newValue
            // }
        }

    }
}
// methods que são chamados no template.
// v-on ou @ para criar o evento.
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>