const userSchema = {
  fullname: {
    minLength: 3,
    required: true,
  },
  email: {
    required: true
  },
  password: {
    required: true,
    minLength: 6,
  },
}

module.exports = userSchema;