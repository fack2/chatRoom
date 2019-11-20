const dbConnection = require("../dbConnection")
const getUser = email => {
  return dbConnection.query("select *  from users where email = $1", [email]).then(res => res.rows[0])
}
module.exports = getUser
