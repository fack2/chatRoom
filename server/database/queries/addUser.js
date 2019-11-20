const dbConnection = require("../dbConnection")
const addUser = (name, email, password) => {
  return dbConnection
    .query("INSERT INTO users (name,email,password) values ($1,$2,$3)", [
      name,
      email,
      password
    ])
    .then(res => res.rows)
}
module.exports = addUser
