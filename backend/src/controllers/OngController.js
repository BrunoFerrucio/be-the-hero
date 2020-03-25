const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    // index é o nome padrão que se da pro metodo que faz listagem dos metodos da tabela
    async index(request, response){
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },
    
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //Gera 4 byts de números e letras hexadecimais aleatorios

        await connection('ongs').insert({ id, name, email, whatsapp, city, uf, }) 
            //await espera esse codigo executar para seguir

        return response.json({id});
    }
}