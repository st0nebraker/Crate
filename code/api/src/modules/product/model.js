'use strict'

// Product
// We will probably use products to build the style survey.
// Add a style column for each item
// Add a survey flag to tell if it should be in the survey?
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    }
  })
}

//we could potentially add another column to products and give it a style keyword association to reduce making one less model
//there is a photo file that's used as products so that could be similar to what we do when providing images for the FE quiz survey page