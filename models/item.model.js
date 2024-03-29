const { itemConfig } = require('../config/itemTypes');

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    itemType: {
      type: DataTypes.ENUM,
      values: itemConfig.validItemTypes,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Item;
};
