const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  // client.query("SELECT $1::int AS number", ["1"], (err, result) => {
  //   if (err) {
  //     return console.error("error running query", err);
  //   }
  //   console.log(result.rows[0].number); //output: 1
  //   client.end();
  // });

  findArtist(client, process.argv[2], (err, result) => {
  //  console.error(err);
    console.log("Found " + result.length + " persons by the name " + process.argv[2]);
    if (result.length > 0) {
      for (let i = 0; i < result.length; i++) {
        console.log(i + ": " + result[i].first_name + " " + result[i].last_name);
      }
    }
    console.log(result);
  })

});


function findArtist(client, artist, callback) {
  client.query(
    "SELECT * FROM famous_people WHERE first_name = $1;", [artist],
    (err, result) => {
      if (err) {
        callback(err)
        return
      }
      callback(null, result.rows)
    }
  );
}