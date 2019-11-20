const getUserInformation = require("./../database/queries/getUserInformation");

exports.userInformation = (req, res) => {
  const { userId } = req.params;
  getUserInformation(userId)
    .then(data => res.json( data ))
    .catch(error => next(error));
};
