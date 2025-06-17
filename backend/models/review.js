const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./product');

const Review = sequelize.define('Review', {
  userId: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.INTEGER, validate: { min: 1, max: 5 } },
  reviewText: { type: DataTypes.TEXT },
  photoUrl: { type: DataTypes.STRING }
});

Product.hasMany(Review, { foreignKey: 'productId' });  
Review.belongsTo(Product, { foreignKey: 'productId' }); 

module.exports = Review;
