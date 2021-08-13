'use strict';


const POSTGRES_URI =  process.env.DATABASE_URI || "postgres://localhost:5432/noor";
const { Sequelize, DataTypes } = require('sequelize');

let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

// const foodData = require('./food');

const CollectionCrud=require('./collection-class');
const CSTSchema=require('./cst.schema')
const FoodSchema=require('./food')

const cstModel = CSTSchema(sequelize, DataTypes);
const foodModel = FoodSchema(sequelize, DataTypes);

customerModel.hasMany(foodModel, { foreignKey: 'customerId', sourceKey: 'id'});
foodModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id'});


//export Collections 
const customerCollection = new Collection(customerModel);
const foodCollection = new Collection(foodModel);

module.exports = {
  db: sequelize,
  Food: foodData(sequelize, DataTypes),
  customerCollection:customerCollection,
  foodCollection:foodCollection
};