'use strict' // Tells program to operate in strict mode.

// User
module.exports = function(sequelize, DataTypes) {
  // Defines User model for the ORM
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
      //shorter text
    },
    email: {
      type: DataTypes.TEXT
      //similar to a text field
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
    //add another migration(styleResult)
    //set styleResult to default: null (if its null, user sees the button to the take the quiz before making a subscription)
  })
  // Shows db relationships.
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
