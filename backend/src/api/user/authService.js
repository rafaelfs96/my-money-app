const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const { emailRegex, passwordRegex } = require('../../helper/utils')

const AUTHSECRET = process.env.AUTHSECRET

const sendErrorsFromDB = (res, dbErrors) => {
  const errors = []
  _.forIn(dbErrors.errors, error => errors.push(error.message))
  return res.status(400).json({ errors: [errors] })
}

const login = (req, res, next) => {
  const email = req.body.email || ''
  const password = req.body.password || ''

  User.findOne({ email }, (err, user) => {
    if (err) return sendErrorsFromDB(res, err)

    else if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(user, AUTHSECRET, { expiresIn: '1 day' })
      const { name, email } = user
      res.json({ name, email, token })
    }

    else return res.status(400).send({ errors: ['invalid User/Password'] })
  })
}

const validateToken = (req, res, next) => {
  const token = req.body.token || ''

  jwt.verify(token, AUTHSECRET, function(err, decode) {
    return res.status(200).send({ valid: !err })
  })
}

const signup = (req, res, next) => {
  const name = req.body.name || ''
  const email = req.body.email || ''
  const password = req.body.password || ''
  const confirmPassword = req.body.confirmPassword || ''

  if (!email.match(emailRegex)) return res.status(400).send({ errors: ['this email is not valid'] })
  if (!password.match(passwordRegex)) return res.status(400).send({ errors: ['this password is not valid'] })

  const salt = bcrypt.genSaltSync()
  const passwordHash = bcrypt.hashSync(password, salt)

  if(!bcrypt.compareSync(confirmPassword, passwordHash)) return status(400).send({ errors: ['passwords does not match'] })

  User.findOne({ email }, (err, user) => {
    if (err) return sendErrorsFromDB(res, err)
    else if (user) return res.status(400).send({ errors: ['user already exists'] })
    else {
      const newUser = new User({ name, email, password: passwordHash })
      newUser.save(err => {
        if (err) return sendErrorsFromDB(res, err)
        else login(req, res, next)
      })
    }
  })
}

module.exports = { login, signup, validateToken }