const dbConnection = require("../dbConnection")
const addMessage = (description, userId) => {
  return dbConnection
    .query("INSERT INTO messages (user_id,description) VALUES ($1,$2)", [userId, description])
    .then(res => res.rows)
    .catch(err => err)
}
module.exports = addMessage
