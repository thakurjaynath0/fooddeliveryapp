const db = require('../models');

const Organizations = db.organizations;
const Pricings = db.pricings;
const Errors = require('../errors');

const createOrganization = async ({ name }) => {
  const organization = await Organizations.create({ name });
  return organization;
};

const getAllOrganizations = async () => {
  const organizations = await Organizations.findAll({});
  return organizations;
};

const getOrganization = async (organizationId) => {
  const organization = await Organizations.findOne({ where: { id: organizationId } });

  if (!organization) {
    throw new Errors.NotFoundError(`Oraganization with id: ${organizationId} not found.`);
  }

  return organization;
};

const updateOrganization = async (organizationId, updateData) => {
  const organization = await getOrganization(organizationId);
  Object.assign(organization, updateData);
  await organization.save();
  return organization;
};

const deleteOrganization = async (organizationId) => {
  const pricing = await Pricings.findOne({ where: { organization_id: organizationId } });

  if (pricing) {
    throw new Errors.BadRequestError(`Organization with id: ${organizationId} is used as foreign key in pricing.`);
  }
  const organization = await getOrganization(organizationId);
  await Organizations.destroy({ where: { id: organizationId } });
  return organization;
};

module.exports = {
  createOrganization,
  getAllOrganizations,
  getOrganization,
  updateOrganization,
  deleteOrganization,
};
