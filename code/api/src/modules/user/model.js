'use strict' // Tells program to operate in strict mode.

// User
module.exports = function(sequelize, DataTypes) {
  // Defines User model for the ORM
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })
  // Shows db relationships.
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}