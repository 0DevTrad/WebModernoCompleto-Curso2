// Usando o pacote schedule do node (npm i node-schedule@1.3.0 - E)

const schedule = require('node-schedule')

// segundos, minuto, hora, dia, mês, dia da semana(Dom = 0).
const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 1', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// Temporizador padrão JS
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

//SetImmediate
//SetInterval

//  Regra de recorrência do schedule
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // 0 = domingo
regra.hour = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})