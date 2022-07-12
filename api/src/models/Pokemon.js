const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,

    },
    weight: {
      type: DataTypes.INTEGER,

    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      
    },
    location: {
      type: DataTypes.STRING,

    },
  },{timestamps: false});
};


