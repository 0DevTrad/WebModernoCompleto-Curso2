const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break;
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue;
    }
    console.log(`${y} = ${nums[y]}`);
}

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3)
            break externo //break rotulado
        console.log(`Par = ${a}, ${b}`);
    }
}

console.log('Fim!')

/*
    O break não age em cima do bloco if, ele vai agir em cima
    do bloco mais próximo dele do tipo for, while ou switch.
    Naturalmente o break vai interagir com o for mais próximo,
    para burlar isso é possível rotular o break.
    
    O break interrompe a repetição e sai pra fora do laço.

    O continue vai interromper a repetição atual e vai direto 
    pra próxima repetição. ELe também não age em cima do bloco 
    if, ele vai agir em cima do bloco mais próximo dele do tipo 
    for ou while.

    O continue para a repetição atual e pula pra próxima sem
    sair do laço.
*/