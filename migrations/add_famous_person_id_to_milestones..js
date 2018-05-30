exports.up = function(knex, Promise) {
	return knex.schema.table('milestones', table => {
		table.integer('famous_person_id').unsigned()
		table.foreign('famous_person_id').references('id').inTable('famous_people');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('milestones')
};