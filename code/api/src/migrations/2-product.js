module.exports = {
  //defining the clothing be shown in the web app.
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      // Always have to define id and assure is doesnt come back as null(nothing)
      // Use sequealize to talk to the DB..?
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      //defining all attributes 
      name: {
        type: Sequelize.STRING
      },
      //Not sure what slug is..
      slug: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  //rollback on migration to drop the table and not have the product 
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
}
