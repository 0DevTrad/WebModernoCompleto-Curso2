import React, {Fragment} from 'react'

// Envolvendo mais de um elemento dentro de um componente:
// Opção (Melhor opção junto com Div) 1:
export default props => 
<Fragment>
<h1>Bom dia{props.nome}</h1>
<h2>Até mais!</h2>
</Fragment>
// Para facilitar o uso do <React.Fragment>, importa o Fragment acima e usa <Fragment>

/* Opção 2:
    export default props => 
    <React.Fragment>
    <h1>Bom dia{props.nome}</h1>
    <h2>Até mais!</h2>
    </React.Fragment>
    
    <React.Fragment> : Boa opção, não precisa importa o Fragment.
    React.Fragment -> Uma alternativa a <div> para envolver os elementos sem atrapalhar o layout da página.
*/

/* Opção 3: 
    export default props => 
    <div>
    <h1>Bom dia{props.nome}</h1>
    <h2>Até mais!</h2>
    </div>

    <div> : Boa opção porém pode atrapalhar o layout.
*/

/* Opção 4:
    export default props => [
    <h1 key='h1'>Bom dia{props.nome}</h1>
    <h2 key='h2'>Até mais!</h2>
    ]

    [] : Pra trabalhar com array tem que usa o 'key' pra facilitar os elementos de serem encontrados.
*/


