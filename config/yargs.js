const { option } = require('yargs');

const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base para multiplicar'
                }) 
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Base para multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .check((argv, option) => {
                    if( isNaN(argv.b)){
                        throw "La base debe ser un numero"
                    }
                    return true;
                }) 
                .argv

module.exports= argv;