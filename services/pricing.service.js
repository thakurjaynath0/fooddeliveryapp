/* eslint-disable camelcase */
const db = require('../models');

const Pricings = db.pricings;
const Items = db.items;
const Organizations = db.organizations;
const Errors = require('../errors');

const createPricing = async ({
  organization_id,
  item_id,
  zone,
  base_distance_in_km,
  km_price_perishable,
  km_price_non_perishable,
  fix_price,
}) => {
  const organization = await Organizations.findOne({ where: { id: organization_id } });

  if (!organization) {
    throw new Errors.NotFoundError(`Oraganization with id: ${organization_id} not found.`);
  }

  const item = await Items.findOne({ where: { id: item_id } });

  if (!item) {
    throw new Errors.NotFoundError(`Item with id: ${item_id} not found.`);
  }

  const pricing = await Pricings.create({
    organization_id,
    item_id,
    zone,
    base_distance_in_km,
    km_price_perishable,
    km_price_non_perishable,
    fix_price,
  });

  return pricing;
};

const getAllPricings = async ({ query } = {}) => {
  const pricings = await Pricings.findAll({
    include: [{
      model: Items,
      as: 'Item',
    },
    {
      model: Organizations,
      as: 'Organization',
    }],
    where: { ...query },
  });
  return pricings;
};

const getPricing = async (pricingId, { query } = {}) => {
  const pricing = await Pricings.findOne({
    include: [{
      model: Items,
      as: 'Item',
    },
    {
      model: Organizations,
      as: 'Organization',
    }],
    where: { id: pricingId, ...query },
  });

  if (!pricing) {
    throw new Errors.NotFoundError(`Pricing with id: ${pricingId} not found.`);
  }

  return pricing;
};

const updatePricing = async (pricingId, updateData) => {
  const pricing = await getPricing(pricingId);
  Object.assign(pricing, updateData);
  await pricing.save();
  return pricing;
};

const deletePricing = async (pricingId) => {
  const pricing = await getPricing(pricingId);
  await Pricings.destroy({ where: { id: pricingId } });
  return pricing;
};

const calculatePrice = async ({
  zone, organization_id, total_distance, item_type,
} = {}) => {
  const pricing = await Pricings.findOne({
    where: { organization_id, zone },
  });

  if (!pricing) {
    throw new Errors.NotFoundError('Pricing not found.');
  }

  const basePrice = pricing.fix_price;
  const baseDistance = pricing.base_distance_in_km;
  const perKmPricePerishable = pricing.km_price_perishable;
  const perKmPriceNonPerishable = pricing.km_price_non_perishable;

  let totalPrice = basePrice;

  if (total_distance > baseDistance) {
    const extraDistance = total_distance - baseDistance;
    const perKmPrice = (item_type === 'perishable') ? perKmPricePerishable : perKmPriceNonPerishable;
    totalPrice += (extraDistance * perKmPrice);
  }

  return totalPrice;
};

module.exports = {
  createPricing,
  getAllPricings,
  getPricing,
  updatePricing,
  deletePricing,
  calculatePrice,
};
