const sequelize = require('../config/db');
const Product = require('./product');
const Review = require('./review');

const initDB = async () => {
  await sequelize.sync({ force: false }); 
  const count = await Product.count();
  if (count === 0) {
    await Product.bulkCreate([
      { name: 'I Phone' },
      { name: 'Boat Headphones' },
      { name: 'Apple Smartwatch' }
    ]);
  }
};

module.exports = { sequelize, Product, Review, initDB };
