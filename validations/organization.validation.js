const JOI = require('joi');

const validateParam = {
  params: JOI.object().keys({
    id: JOI.number().required(),
  }),
};

const createOrganization = {
  body: JOI.object().keys({
    name: JOI.string().required().min(3).max(250),
  }),
};

const updateOrganization = {
  params: validateParam.params,
  body: JOI.object().keys({
    name: JOI.string().min(3).max(250),
  }),
};

module.exports = {
  createOrganization,
  updateOrganization,
  validateParam,
};
