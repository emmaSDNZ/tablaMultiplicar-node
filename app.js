const argv = require('./config/yargs')
const { crearArchivo } = require('./helpers/multiplicar')


console.clear();




crearArchivo(argv.b,  argv.l , argv.h)


//node app -b 10 -l 