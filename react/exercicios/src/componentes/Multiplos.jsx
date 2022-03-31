import React from 'react'

export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

export default BoaTarde

// Outra possibilidade é usar o 
// export {Boa Tarde, Boa noite} sem ter que usar export nas duas funções acima.