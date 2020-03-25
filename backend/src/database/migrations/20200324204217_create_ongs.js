exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
    });  
};
    // rodar banco (npx knex migrate:latesl)
    
exports.down = function(knex) {
    //   Caso precise voltar a algo / deletar a tabela
knex.schema.dropTable('ongs');
};