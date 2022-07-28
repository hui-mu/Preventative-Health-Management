// const { Pool } = require('pg');
// const pg = require('pg');

// // connect to postgreSQL DB
// const PG_URI = 'postgres://zdbopeth:MSenYjjPc8EJvRTJv26VM7ifqKwht9Pb@lallah.db.elephantsql.com/zdbopeth'

// const client = new pg.Client(PG_URI);
// client.connect(function (err) {
//   if (err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function (err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2022-07-27T01:56:38.254Z
//     client.end();
//   });
// });

// const pool = new Pool({
//   connectionString: PG_URI
// });

// module.exports = {
//   query: (text, params, callback) => {
//     console.log('executed query!!!!!', text);
//     return pool.query(text, params, callback);
//   }
// }

const mongoose = require('mongoose');
const url = `mongodb+srv://hmu1540:Gt7130mhm%40%40@cluster0.8mkig.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'heathPanel'
})
  .then((res) => {
    console.log('connected')
  })
  .catch((err) => console.log(err))


const Schema = mongoose.Schema;
const memberSchema = new Schema({
  userEmail: { type: String, required: true }, // user email
  memberId: { type: String, required: true },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  health: { type: [], required: true }
});

const member = mongoose.model('member', memberSchema);
// You must export your model through module.exports
// The collection name should be 'student'
// const data = {
//   "userEmail": "hhhhh",
//   "memberId": "10000",
//   "name": "tester",
//   "gender": "female",
//   "age": 10,
//   "health": "tobefetched"
// }
// const m = new member(data);
// console.log('?????', m);
// m.save().then(res => console.log(res));

module.exports = member;