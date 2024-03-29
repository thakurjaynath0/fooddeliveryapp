const JOI = require('joi');
const { itemConfig } = require('../config/itemTypes');

const validateParam = {
  params: JOI.object().keys({
    id: JOI.number().required(),
  }),
};

const createPricing = {
  body: JOI.object().keys({
    organization_id: JOI.number().required(),
    item_id: JOI.number().required(),
    zone: JOI.string().required().min(3).max(1000),
    base_distance_in_km: JOI.number().required(),
    km_price_perishable: JOI.number().required(),
    km_price_non_perishable: JOI.number().required(),
    fix_price: JOI.number().required(),
  }),
};

const updatePricing = {
  params: validateParam.params,
  body: JOI.object().keys({
    organization_id: JOI.number(),
    item_id: JOI.number(),
    zone: JOI.string().min(3).max(1000),
    base_distance_in_km: JOI.number(),
    km_price_perishable: JOI.number(),
    km_price_non_perishable: JOI.number(),
    fix_price: JOI.number(),
  }),
};

const calculatePrice = {
  body: JOI.object().keys({
    organization_id: JOI.number().required(),
    zone: JOI.string().required(),
    total_distance: JOI.number().required(),
    item_type: JOI.string().valid(...itemConfig.validItemTypes).required(),
  }),
};

module.exports = {
  createPricing,
  updatePricing,
  calculatePrice,
  validateParam,
};
