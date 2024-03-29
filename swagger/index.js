/* eslint-disable no-undef */
const { SwaggerTheme, SwaggerThemeNameEnum } = require('swagger-themes');
const swaggerDocument = require('./docs/index');

const swaggerThemes = new SwaggerTheme();
const swaggerOptions = {
  explorer: true,
  customCss: swaggerThemes.getBuffer(SwaggerThemeNameEnum.ONE_DARK),
};

module.exports = {
  swaggerDocument,
  swaggerOptions,
};
