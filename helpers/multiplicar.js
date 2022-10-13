const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar= false, hasta=10)=>{
    
    try {
        let salida = '';
        let consola = ''
        for (let i = 1; i <=hasta ; i++) {
            consola +=`${ i } ${'x'.blue} ${ base } ${'='.blue} ${ i * base }\n`
            salida +=`${ i } x ${ base } = ${ i * base }\n`
        }
        if(listar){
            console.log(`tabla de multiplicar ${base}`);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/table-${base}.text`, salida);
        return `tabla ${base} creada con exito`;

    } catch (error) {
        throw error; 
    }
}

module.exports = {
    crearArchivo
}