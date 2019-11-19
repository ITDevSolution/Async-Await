const util = require ('util');

const sleep = util.promisify(setTimeout);

//modulo de objetos y/o funciones
module.exports = {
    async taskOne(){
        try {
            throw new Error('some problem');
            await sleep(4000);
            return 'ONE VALUE';
        } catch (e) {
            console.log(e);
        }
    },

    async taskTwo(){
        try {
            await sleep(2000);
            return 'TWO VALUE';
        } catch (e) {
            console.log(e);
        }
    }
};