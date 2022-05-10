import Vue from "vue";
import App from "./App";

new Vue({
  //     el: "#app",
  //     render(createElement) {
  //         return createElement(App);
  //   },
  render: (h) => h(App),
}).$mount("#app");

// O el: "#app" funciona mas quando se cria uma aplicação profissional usa-se o .$mount("#app")
// Com $mount() você tem mais flexibilidade em que elemento ele será montado, se for necessário.
// As duas formas de render, o comentado é o que o professor ensinou e o render final é o padrão usado.
