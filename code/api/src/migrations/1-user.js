module.exports = {
  //Creating the users table
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      // allownull is not allowed since it is an id that we will be using
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      //defining each attribute like in rails migration but instead using Type..? Also no sure what differnce is between string and text
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

  //down allows you to rollback migration
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}
