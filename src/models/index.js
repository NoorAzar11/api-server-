'use strict';

const POSTGRES_URI =  process.env.DATABASE_URI || "postgres://localhost:5432/noor";
const { Sequelize, DataTypes } = require('sequelize');

let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
const Collection=require('./collection-class');
const CSTSchema=require('./cst.schema')
const FoodSchema=require('./food')
const clothesSchema=require('./clothes')

const cstModel = CSTSchema(sequelize, DataTypes);
const foodModel = FoodSchema(sequelize, DataTypes);
const clothmoda=clothesSchema(sequelize, DataTypes);

cstModel.hasMany(foodModel, { foreignKey: 'customerId', sourceKey: 'id'});
cstModel.hasMany(clothmoda, { foreignKey: 'customerId', sourceKey: 'id'});
foodModel.belongsTo(cstModel, { foreignKey: 'customerId', targetKey: 'id'});
clothmoda.belongsTo(cstModel, { foreignKey: 'customerId', sourceKey: 'id'});
//export Collections 
const customerCollection = new Collection(cstModel);
const foodCollection = new Collection(foodModel);
const clothcollection = new Collection(clothmoda);

module.exports = {

  db: sequelize,
  CST:customerCollection,
  Food:foodCollection,
  Clothes:clothcollection
};


