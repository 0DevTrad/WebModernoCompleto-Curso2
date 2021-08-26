function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

/* 
    Uma das vantagem de usar Arrow function é que 
    this  não irá variar. Esta é solução uma solução
    ao problema apresentado na aula a6_this_e_bind2.js 
*/