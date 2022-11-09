const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
//    ProductTag
//id
//Integer
//Doesn't allow null values
//Set as primary key
//Uses auto increment
id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true,
},
//product_id
//Integer
//References the product model's id
product_id: {
  type: DataTypes.INTEGER,
references: {
  key: 'id',
  model: 'product',
}
},
//tag_id
//Integer
//References the tag model's id
tag_id: {
  type: DataTypes.INTEGER,
references: {
  key: 'id',
  model: 'tag',
}
},

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
