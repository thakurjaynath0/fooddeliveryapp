const db = require('../models');

const Items = db.items;
const Pricings = db.pricings;
const Errors = require('../errors');

const createItem = async ({ itemType, description }) => {
  const item = await Items.create({ itemType, description });
  return item;
};

const getAllItems = async () => {
  const items = await Items.findAll({});
  return items;
};

const getItem = async (itemId) => {
  const item = await Items.findOne({ where: { id: itemId } });

  if (!item) {
    throw new Errors.NotFoundError(`Item with id: ${itemId} not found.`);
  }

  return item;
};

const updateItem = async (itemId, updateData) => {
  const item = await getItem(itemId);
  Object.assign(item, updateData);
  await item.save();
  return item;
};

const deleteItem = async (itemId) => {
  const pricing = await Pricings.findOne({ where: { item_id: itemId } });

  if (pricing) {
    throw new Errors.BadRequestError(`Item with id: ${itemId} is used as foreign key in pricing.`);
  }

  const item = await getItem(itemId);
  await Items.destroy({ where: { id: itemId } });
  return item;
};

module.exports = {
  createItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
};
