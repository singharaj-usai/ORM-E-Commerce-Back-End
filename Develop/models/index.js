// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
//references 23-Ins_One-to-Many

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

//Look at 28-stu mini project too
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
});

Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: ProductTag,
});

Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: ProductTag,
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
