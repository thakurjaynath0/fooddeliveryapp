const { StatusCodes } = require('http-status-codes');
const organizationService = require('../services/organisation.service');
const pick = require('../utils/pick');

const createOrganization = async (req, res) => {
  const { name } = req.body;
  const organization = await organizationService.createOrganization({ name });
  res.status(StatusCodes.CREATED).json({
    success: true,
    organization,
  });
};

const getAllOrganizations = async (req, res) => {
  const organizations = await organizationService.getAllOrganizations();
  res.status(StatusCodes.OK).json({
    success: true,
    organizations,
    count: organizations.length,
  });
};

const getOrganization = async (req, res) => {
  const { id } = req.params;
  const organization = await organizationService.getOrganization(id);
  res.status(StatusCodes.OK).json({
    success: true,
    organization,
  });
};

const updateOrganization = async (req, res) => {
  const { id } = req.params;
  const updateData = pick(req.body, ['name']);
  const organization = await organizationService.updateOrganization(id, updateData);
  res.status(StatusCodes.OK).json({
    success: true,
    organization,
  });
};

const deleteOrganization = async (req, res) => {
  const { id } = req.params;
  const organization = await organizationService.deleteOrganization(id);
  res.status(StatusCodes.OK).json({
    success: true,
    organization,
  });
};

module.exports = {
  createOrganization,
  getAllOrganizations,
  getOrganization,
  updateOrganization,
  deleteOrganization,
};
