const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
// Convertendo para JSON
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3} // Formato textual

// Convertendo para Obj

//console.log(JSON.parse("{a: 1, b: 2, c:3}")) // Err!
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) //Err!

// Todo atributo deve ser delimitado por aspas duplas
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d" : {}, "e": [] }')) // { a: 1, b: 'string', c: true, d: {}, e: [] }



//JSON(Java Script Object Notation)
// Formato de dados udado para interoperabilidade entre sistemas 