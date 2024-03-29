const router = require('express').Router();

const {
  createOrganization,
  getAllOrganizations,
  getOrganization,
  updateOrganization,
  deleteOrganization,
} = require('../../controllers/organisation.controller');
const validate = require('../../middlewares/validate');
const { organizationValidation } = require('../../validations');

router.route('/')
  .get(getAllOrganizations)
  .post([validate(organizationValidation.createOrganization)], createOrganization);

router.route('/:id')
  .get([validate(organizationValidation.validateParam)], getOrganization)
  .patch([validate(organizationValidation.updateOrganization)], updateOrganization)
  .delete([validate(organizationValidation.validateParam)], deleteOrganization);

module.exports = router;
