'use strict';

const CST = (sequelize, DataTypes) => sequelize.define('cst', {
  
  CSTName: {
    type:DataTypes.STRING,
    allowNull: false,

  },


});

module.exports = CST;