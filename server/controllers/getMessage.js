const getMessageQuery = require("../database/queries/getMessage")

const getMessage = userId => {
  return getMessageQuery(userId)
    .then(data => data)
    .catch(err => err)
}
module.exports = getMessage
