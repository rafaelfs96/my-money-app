const jwt = require('jsonwebtoken')
const AUTHSECRET = process.env.AUTHSECRET

module.exports = (req, res, next) => {
  //* CORS preflight request
  if (req.method === 'OPTIONS') console.log()
  else {
    const token = req.body.token || req.query.token || req.headers['authorization']
    if (!token) return res.status(403).send({ errors: ['token not provided'] })
    
    jwt.verify(token, AUTHSECRET, function(err, decoded) {
      if (err) return res.status(403).send({ errors: ['failed to authenticate token'] })
      else {
        // req.decoded = decoded
        next()
      }
    })
  }
}