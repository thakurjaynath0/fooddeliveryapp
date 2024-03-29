module.exports = (sequelize, DataTypes) => {
  const Pricing = sequelize.define('Pricing', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    organization_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    base_distance_in_km: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    km_price_perishable: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    km_price_non_perishable: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fix_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Pricing;
};
