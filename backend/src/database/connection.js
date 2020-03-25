const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //development é a conexão de desenvolvimento

module.exports = connection;