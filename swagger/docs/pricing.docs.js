const { itemConfig } = require('../../config/itemTypes');

const pricingPath = {
  '/pricings': {
    post: {
      tags: ['Pricing'],
      summary: 'Create Pricing',
      operationId: 'CreatePricing',
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/Pricing',
            },
          },
        },
        required: true,
      },
      responses: {
        201: {
          description: 'pricing created',
          headers: {},
        },
      },
      deprecated: false,
    },
    get: {
      tags: ['Pricing'],
      summary: 'Get All Pricings',
      operationId: 'GetAllPricings',
      responses: {
        200: {
          description: '',
          headers: {},
        },
      },
      deprecated: false,
    },
  },
  '/pricings/{id}': {
    parameters: [
      {
        in: 'path',
        name: 'id',
        schema: {
          type: 'string',
        },
        required: true,
        description: 'The pricing id',
      },
    ],
    get: {
      tags: ['Pricing'],
      summary: 'Get Pricing',
      operationId: 'GetPricing',
      responses: {
        200: {
          description: '',
          headers: {},
        },
      },
      deprecated: false,
    },
    patch: {
      tags: ['Pricing'],
      summary: 'Update Pricing',
      operationId: 'UpdatePricing',
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/Pricing',
            },
          },
        },
        required: true,
      },
      responses: {
        200: {
          description: 'pricing updated',
          headers: {},
        },
      },
      deprecated: false,
    },
    delete: {
      tags: ['Pricing'],
      summary: 'Delete Pricing',
      operationId: 'DeletePricing',
      responses: {
        200: {
          description: 'pricing deleted',
          headers: {},
        },
      },
      deprecated: false,
    },
  },
  '/pricings/calculate': {
    post: {
      tags: ['Calculate'],
      summary: 'Calculate Pricing',
      operationId: 'CalculatePricing',
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/Calculate',
            },
          },
        },
        required: true,
      },
      responses: {
        200: {
          description: '',
          headers: {},
        },
      },
      deprecated: false,
    },
  },
};

const pricingSchema = {
  Pricing: {
    title: 'Pricing',
    required: ['organization_id', 'item_id', 'zone', 'base_distance_in_km', 'km_price_perishable', 'km_price_non_perishable', 'fix_price'],
    type: 'object',
    properties: {
      organization_id: {
        type: 'number',
      },
      item_id: {
        type: 'number',
      },
      zone: {
        type: 'string',
      },
      base_distance_in_km: {
        type: 'number',
      },
      km_price_perishable: {
        type: 'number',
      },
      km_price_non_perishable: {
        type: 'number',
      },
      fix_price: {
        type: 'number',
      },
    },
    example: {
      organization_id: 1,
      item_id: 1,
      zone: 'central',
      base_distance_in_km: 5,
      km_price_perishable: 150,
      km_price_non_perishable: 100,
      fix_price: 1000,
    },
  },
  Calculate: {
    title: 'Calculate',
    required: ['organization_id', 'zone', 'total_distance', 'item_type'],
    type: 'object',
    properties: {
      organization_id: {
        type: 'number',
      },
      zone: {
        type: 'string',
      },
      total_distance: {
        type: 'number',
      },
      item_type: {
        type: 'string',
        enum: itemConfig.validItemTypes,
      },
    },
    example: {
      organization_id: 1,
      zone: 'central',
      total_distance: 12,
      item_type: 'perishable',
    },
  },
};

module.exports = {
  pricingPath,
  pricingSchema,
};
