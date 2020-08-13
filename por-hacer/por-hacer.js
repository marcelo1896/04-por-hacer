const fs = require('fs');

const colors = require('colors');



let listadoPorHacer=[];




const guardar = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err) => {
        if(err){
            throw new Error('no se pudo guardar',err);
        }

    });
}

const cargarDB = () =>{
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer =[];
    }
}


const crear = (descripcion) =>{
    cargarDB();

    
    let porHacer = {
        descripcion: descripcion,
        completado:false
    };

    listadoPorHacer.push(porHacer);
    guardar();
    return porHacer;
}

const getListado = () =>{
    cargarDB();
    return listadoPorHacer;
}
 

const actualizar = (descripcion,completado = true)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion === descripcion; 
    })
    if (index >= 0){
        listadoPorHacer[index].completado = completado;
        guardar();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) =>{
    cargarDB();
    
    let numero = listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion === descripcion;
    })

    if(numero >= 0){
        listadoPorHacer.splice(numero,1);
        guardar();
        return true;
    }else{
        return false;
    }

}

module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}


