'use strict'
//Creates the crate object and adds a one to many relationship with subscription
module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })
//Adds one to many realtionship with subscription
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}