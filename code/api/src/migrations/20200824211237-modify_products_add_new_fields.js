'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('products', 'style', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('products', 'isSurvey', {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('products', 'style'),
      queryInterface.removeColumn('products', 'isSurvey')
    ]);
  }
};
