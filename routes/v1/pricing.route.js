const router = require('express').Router();

const {
  createPricing,
  getAllPricings,
  getPricing,
  updatePricing,
  deletePricing,
  calculatePrice,
} = require('../../controllers/pricing.controller');
const validate = require('../../middlewares/validate');
const { pricingValidation } = require('../../validations');

router.route('/')
  .get(getAllPricings)
  .post([validate(pricingValidation.createPricing)], createPricing);

router.route('/calculate')
  .post([validate(pricingValidation.calculatePrice)], calculatePrice);

router.route('/:id')
  .get([validate(pricingValidation.validateParam)], getPricing)
  .patch([validate(pricingValidation.updatePricing)], updatePricing)
  .delete([validate(pricingValidation.validateParam)], deletePricing);

module.exports = router;
