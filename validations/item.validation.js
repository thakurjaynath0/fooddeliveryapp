const JOI = require('joi');
const { itemConfig } = require('../config/itemTypes');

const validateParam = {
  params: JOI.object().keys({
    id: JOI.number().required(),
  }),
};

const createItem = {
  body: JOI.object().keys({
    itemType: JOI.string().valid(...itemConfig.validItemTypes).required(),
    description: JOI.string().required().min(15).max(1000),
  }),
};

const updateItem = {
  params: validateParam.params,
  body: JOI.object().keys({
    itemType: JOI.string().valid(...itemConfig.validItemTypes),
    description: JOI.string().min(15).max(1000),
  }),
};

module.exports = {
  createItem,
  updateItem,
  validateParam,
};
