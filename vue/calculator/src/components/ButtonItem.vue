<template>
  <button class="button"
    @click="$emit('onCLick', label)"
    :class="{double, triple, operation}">
      {{label}}
  </button>
</template>

<script>
export default {
  props: {
    label: {},
    operation: { type: Boolean},
    double: { type: Boolean},
    triple: { type: Boolean},
  }
}

// $emit() : O $ na frente não tem nenhuma função, é apenas o nome de uma função.
// @click="$emit('onCalcButtonClick', label)" : Quando o click for disparado, a expressão associada a esse click será emitir($emit) um outro evento chamado 'onCalcButtonClick' que tem como parâmetro a label do botão.
// 'onCalcButtonClick' é a mesma coisa que 'onCLick'
</script>

<style>
:root {
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;
}

.button {
  font-size: 1.4em;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none;
}

.button:active {
  background-color: #ccc;
}

.button.double {
  grid-column: span 2;
}

.button.triple {
  grid-column: span 3;
}

.button.operation {
  background-color: #fa8231;
  color: #fff;
}

.button.operation:active {
  background-color: #fa8231cc;
}
</style>