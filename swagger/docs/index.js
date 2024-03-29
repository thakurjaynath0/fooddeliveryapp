const { itemPath, itemSchema } = require('./item.docs');
const { organizationPath, organizationSchema } = require('./organization.docs');
const { pricingPath, pricingSchema } = require('./pricing.docs');

const paths = {
  ...itemPath,
  ...organizationPath,
  ...pricingPath,
};
const schemas = {
  ...itemSchema,
  ...organizationSchema,
  ...pricingSchema,
};

const docs = {
  openapi: '3.0.0',
  info: {
    title: 'Food Delivery Application',
    contact: { phone: '8123122554' },
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:5000/api/v1',
      variables: {},
    },
  ],
  paths,
  components: {
    schemas,
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        description: 'Enter the `Access Token ` returned after login',
      },
    },
  },
  security: [{
    BearerAuth: [],
  }],

};

module.exports = docs;
