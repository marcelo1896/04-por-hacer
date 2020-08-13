const descripcion = {
    demand: true,
    alias: '-d',
    desc: 'descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: '-c',
    descripcion: 'marca como completado o pendiente una tarea'
}


const argv = require('yargs')
    .command('crear','permite crear una nueva tarea por hacer',{
        descripcion
    })
    .command('actualizar','permite cambiar una tarea ya creada',{
        descripcion,
        completado
    })
    .command('borrar','permite borrar una tarea creada',{
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}







