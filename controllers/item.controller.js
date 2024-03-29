const { StatusCodes } = require('http-status-codes');
const itemService = require('../services/item.service');
const pick = require('../utils/pick');

const createItem = async (req, res) => {
  const { itemType, description } = req.body;
  const item = await itemService.createItem({ itemType, description });
  res.status(StatusCodes.CREATED).json({
    success: true,
    item,
  });
};

const getAllItems = async (req, res) => {
  const items = await itemService.getAllItems();
  res.status(StatusCodes.OK).json({
    success: true,
    items,
    count: items.length,
  });
};

const getItem = async (req, res) => {
  const { id } = req.params;
  const item = await itemService.getItem(id);
  res.status(StatusCodes.OK).json({
    success: true,
    item,
  });
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const updateData = pick(req.body, ['itemType', 'description']);
  const item = await itemService.updateItem(id, updateData);
  res.status(StatusCodes.OK).json({
    success: true,
    item,
  });
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  const item = await itemService.deleteItem(id);
  res.status(StatusCodes.OK).json({
    success: true,
    item,
  });
};

module.exports = {
  createItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
};
