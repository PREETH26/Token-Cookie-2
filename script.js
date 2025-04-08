const jwt = require('jsonwebtoken');
const encrypt = (payload, secret) => {
  // your code here and return token
  return jwt.sign(payload,secret, {expiresIn:'7d'});
};

module.exports = encrypt;
