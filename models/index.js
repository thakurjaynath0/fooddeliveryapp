const { Sequelize, DataTypes } = require('sequelize');
const DbConfig = require('../config/db.config');
const Organization = require('./organisation.model');
const Item = require('./item.model');
const Pricing = require('./pricing.model');

const sequelize = new Sequelize(
  DbConfig.DB,
  DbConfig.USER,
  DbConfig.PASSWORD,
  {
    host: DbConfig.HOST,
    dialect: DbConfig.dialect,
    operatorsAliases: false,
  },
);

sequelize.authenticate()
  .then(() => console.log('Connected to the database.....'))
  .catch((err) => err);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.organizations = Organization(sequelize, DataTypes);
db.items = Item(sequelize, DataTypes);
db.pricings = Pricing(sequelize, DataTypes);

db.sequelize.sync({ force: false })
  .then(() => console.log('Synced to the database.....'))
  .catch((err) => err);

// 1 to Many Relation
db.organizations.hasMany(db.pricings, {
  foreignKey: 'organization_id',
});

db.pricings.belongsTo(db.organizations, {
  foreignKey: 'id',
});

db.items.hasMany(db.pricings, {
  foreignKey: 'item_id',
});

db.pricings.belongsTo(db.items, {
  foreignKey: 'id',
});

module.exports = db;
