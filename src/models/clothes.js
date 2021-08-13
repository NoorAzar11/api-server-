'use strict';

const Cloth = (sequelize, DataTypes) => sequelize.define('clothes', {
  
    clothesName: {
    type:DataTypes.STRING,
    allowNull: false,

  },

  clothesDatatype: {
    type: DataTypes.STRING,

  },
  
  CSTID:{
    type:DataTypes.INTEGER,
    allowNull: false,

  }

});

module.exports = Cloth;