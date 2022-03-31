import React from 'react'
import Filho from './Filho'

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/*Três formas de fazer uma propriedade do pai ser herdada pelo filho*/}
            <Filho nome="Pedro" sobrenome={props.sobrenome}/>
            <Filho {...props} />
            <Filho {...props} nome ="Carla"/>
        </ul>
    </div>
