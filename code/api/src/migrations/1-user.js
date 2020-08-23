module.exports = {
  // Create user table
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // each field defined here by type, this would be how we add the style column.
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      // style: {
      //   allowNull: true,
      //   type: Sequelize.TEXT
      // },
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
  // down gives instruction for rolling back the migration.
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}

//migrations directory does not have timestamps
//wonder if we have to directly go in and change the file and then run the npm db:migrate