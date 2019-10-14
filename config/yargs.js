

const argv = require('yargs')
    .options({
        direccion:{
            alias:'d',
            desc: 'Ciudad para obteber el clima',
            demand:true
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}