import React from 'react'
import './Button.css'

// Sempre que houver uma expressão {} dentro de um .jsx é possível colocar JS
export default props =>
    <button
    // onClick={e => props.click && props.click(e.target.innerHTML)}  -> Outra possibilidade
    onClick={e => props.click(props.label)}
    className={`
    button
    ${props.operation? 'operation' : ''}
    ${props.double? 'double' : ''}
    ${props.triple? 'triple' : ''}
    `}>
        {props.label}
    </button>

// OU: 

/*

export default props => {
    let classes  = 'button '
    classes += props.operation ? 'operation' : '' 
    classes += props.double? 'double' : '' 
    classes += props.triple? 'triple' : '' 
    
    return (
        <button 
        onClick={e => props.click(props.label)}
        className={classes}>
            {props.label}
        </button>
    )
}

*/