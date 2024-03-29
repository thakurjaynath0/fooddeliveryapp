/* eslint-disable camelcase */
const { StatusCodes } = require('http-status-codes');
const pricingService = require('../services/pricing.service');
const pick = require('../utils/pick');

const createPricing = async (req, res) => {
  const {
    organization_id,
    item_id,
    zone,
    base_distance_in_km,
    km_price_perishable,
    km_price_non_perishable,
    fix_price,
  } = req.body;

  const pricing = await pricingService.createPricing({
    organization_id,
    item_id,
    zone,
    base_distance_in_km,
    km_price_perishable,
    km_price_non_perishable,
    fix_price,
  });

  res.status(StatusCodes.CREATED).json({
    success: true,
    pricing,
  });
};

const getAllPricings = async (req, res) => {
  const pricings = await pricingService.getAllPricings();
  res.status(StatusCodes.OK).json({
    success: true,
    pricings,
    count: pricings.length,
  });
};

const getPricing = async (req, res) => {
  const { id } = req.params;
  const pricing = await pricingService.getPricing(id);
  res.status(StatusCodes.OK).json({
    success: true,
    pricing,
  });
};

const updatePricing = async (req, res) => {
  const { id } = req.params;
  const updateData = pick(req.body, ['organization_id', 'item_id', 'zone', 'base_distance_in_km', 'km_price_perishable', 'km_price_non_perishable', 'fix_price']);
  const pricing = await pricingService.updatePricing(id, updateData);
  res.status(StatusCodes.OK).json({
    success: true,
    pricing,
  });
};

const deletePricing = async (req, res) => {
  const { id } = req.params;
  const pricing = await pricingService.deletePricing(id);
  res.status(StatusCodes.OK).json({
    success: true,
    pricing,
  });
};

const calculatePrice = async (req, res) => {
  const {
    zone, organization_id, total_distance, item_type,
  } = req.body;
  let totalPrice = await pricingService.calculatePrice({
    zone, organization_id, total_distance, item_type,
  });

  // convert to euro from cents
  totalPrice /= 100;

  res.status(StatusCodes.OK).json({
    success: true,
    total_price: totalPrice,
  });
};

module.exports = {
  createPricing,
  getAllPricings,
  getPricing,
  updatePricing,
  deletePricing,
  calculatePrice,
};
