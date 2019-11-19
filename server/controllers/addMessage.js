const addMessageQuery = require("../database/queries/addMessage")

const addMessage = (userId, description) => {
  return addMessageQuery(description, userId)
    .then(data => data)
    .catch(err => err)
}
module.exports = addMessage
