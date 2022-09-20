// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
//references 23-Ins_One-to-Many

// Products belongsTo Category
//Car.belongsTo(Driver, {
//  foreignKey: 'driver_id',
//});
Product.belongsTo(Category, {
  foreignKey: 'product_id',
});
// Categories have many Products
//Driver.hasMany(Car, {
//  foreignKey: 'driver_id',
//});
//Look at 28-stu mini project too
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Product, {
  foreignKey: 'product_id',
});
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
