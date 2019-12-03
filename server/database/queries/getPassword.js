const dbConnection = require("../dbConnection");

const getPassword = (email, cb) => {
  dbConnection.query("SELECT password FROM users where email=$1", [email], (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows[0]);
    }
  });
};

module.exports = { getPassword };
