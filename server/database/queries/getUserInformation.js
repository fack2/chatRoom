const dbConnection = require('./../dbConnection')

const getUserInformation = (userId) => {
  return dbConnection
    .query('SELECT img,name,email FROM users where user_id=$1',[userId])
    .then(res =>res.rows )
    .catch(err => console.log(err))
}

module.exports = getUserInformation