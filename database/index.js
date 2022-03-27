var mysql = require('mysql2');

const connection = mysql.createConnection({
  // host: 'localhost',
  user: 'root',
  // password: 'student',
  database: 'cowlist'
});

connection.connect((err) => {
  if (err) {
    console.log('in error')
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!

const create = (addThisMooMoo, cb) => {
  // console.log('in create db');
  // console.log('MooMoo:', addThisMooMoo);
  var insertThis = [];
  insertThis.push(addThisMooMoo.name);
  insertThis.push(addThisMooMoo.description);
  // console.log(insertThis);
  connection.query('INSERT INTO cows (name, description) VALUES (?,?)', insertThis, (err, result) => {
    if (err) {
      // consl.elog('in error CREATE');
      // console.log(err);
      cb(err, null);
    } else {
      // console.log('in success CREATE');
      // console.log(result);
      cb(null, result);
    }
  })
}

//read done
const read = (cb) => {
  console.log('in read db');

  connection.query(`SELECT * FROM cows`, (err, result) => {
    if (err) {
      console.log('error');
      cb(err, null);
    } else {
      console.log('success');
      cb(null, result);
    }
  })
}


// Don't forget to export your functions!
module.exports.create = create;
module.exports.read = read;