'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('food', {
  
  foodName: {
    type:DataTypes.STRING,
    allowNull: false,

  },

  foodDatatype: {
    type: DataTypes.STRING,

  }

});

module.exports = Food;