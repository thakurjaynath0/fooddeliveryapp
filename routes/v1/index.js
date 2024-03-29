const router = require('express').Router();

const itemRoute = require('./item.route');
const organisationRoute = require('./organization.route');
const pricingRoute = require('./pricing.route');

const routes = [
  {
    path: '/items',
    route: itemRoute,
  },
  {
    path: '/organizations',
    route: organisationRoute,
  },
  {
    path: '/pricings',
    route: pricingRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
