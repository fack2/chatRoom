const getMessageQuery = require("../database/queries/getMessage")

const getMessage = userId => {
  console.log(userId)

  return getMessageQuery(userId)
    .then(data => data)
    .catch(() => err)
}
module.exports = getMessage
