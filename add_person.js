const config = require('./setting');

// Make sure to create the database first
// CREATE DATABASE oscars;
// createdb oscars;

// Create Knex object using configuration
const knex = require('knex')(config)

// General Select Query
knex('famous_people').insert({
	first_name: process.argv[2],
	last_name: process.argv[3],
	birthdate: process.argv[4]
}).asCallback(function(err, rows) {
	if (err) {
		console.error(err);
		return;
	}
	// knex.select('*').from('famous_people').asCallback(function(err, rows) {
	// if (err) {
	// 	console.error(err);
	// 	return;
	// }
	// console.log("Found " + rows.length + " persons by the name " + process.argv[2]);
	// if (rows.length > 0) {
	// 	for (let i = 0; i < rows.length; i++) {
	// 		console.log(i + ": " + rows[i].first_name + " " + rows[i].last_name);
	// 	}
	// }
	console.log(rows);
	return;
});

// Same as above but using Promises
// knex('movies').select()
//   .then(rows => console.log(rows))
//   .catch(err => console.log(err.message))


// console.log('Raw Query: \n', knex('movies').select().toString())
//

// knex('movies')
//   .join('actors', 'actors.movie_id', '=', 'movies.id')
//   .select('actors.name as star', 'movies.name as movie', 'movies.year as year')
//   .then(rows => console.log(rows))
//   .catch(err => console.log(err.message))
// knex.select('name').from('users')
// .where('id', '>', 20)
// .andWhere('id', '<', 200)
// .limit(10)
// .offset(x)
// .asCallback(function(err, rows) {
//   if (err) return console.error(err);
//   knex.select('id').from('nicknames')
//     .whereIn('nickname', _.pluck(rows, 'name'))
//     .asCallback(function(err, rows) {
//       if (err) return console.error(err);
//       console.log(rows);
//     });
// });