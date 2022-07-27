const express = require('express');
const path = require('path');

// create a server
const app = express();
const PORT = 3000;
// create a router to construct RESTful routes
const userRouter = express.Router();
const adminRouter = express.Router();
const healthRouter = express.Router();
// parse req body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle request to static files: directly visiting files under assest/
// app.get('/', (req, res) => res.json('i am okay!'))
console.log('???', __dirname)
app.use(express.static(path.resolve(__dirname, '../client/asset'))); // absolute path is safe

// handle request to authorization: mount/put midware funcs at /auth
app.use('/auth', userRouter); // get /login; post /register; post /reset; get /logout

app.use('/admin', adminRouter);

app.use('/health', healthRouter);

// handle req to non-existing pages
app.use((req, res) => res.status(404).send('You are looking for a page that doesn\'t exist...'));

// handle midware errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  return res.status(errObj.status).json(errObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...!!!`)
});

const { Pool } = require('pg');
const pg = require('pg');

// connect to postgreSQL DB
const PG_URI = 'postgres://zdbopeth:MSenYjjPc8EJvRTJv26VM7ifqKwht9Pb@lallah.db.elephantsql.com/zdbopeth'

const client = new pg.Client(PG_URI);
client.connect(function (err) {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2022-07-27T01:56:38.254Z
    client.end();
  });
});

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query!!!!!', text);
    return pool.query(text, params, callback);
  },
  userRouter: userRouter,
  adminRouter: adminRouter,
  healthRouter: healthRouter
}
