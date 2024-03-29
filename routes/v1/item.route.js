const router = require('express').Router();

const {
  createItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
} = require('../../controllers/item.controller');
const validate = require('../../middlewares/validate');
const { itemValidation } = require('../../validations');

router.route('/')
  .get(getAllItems)
  .post([validate(itemValidation.createItem)], createItem);

router.route('/:id')
  .get([validate(itemValidation.validateParam)], getItem)
  .patch([validate(itemValidation.updateItem)], updateItem)
  .delete([validate(itemValidation.validateParam)], deleteItem);

module.exports = router;
