const { itemConfig } = require('../../config/itemTypes');

const itemPath = {
  '/items': {
    post: {
      tags: ['Item'],
      summary: 'Create Item',
      operationId: 'CreateItem',
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/Item',
            },
          },
        },
        required: true,
      },
      responses: {
        201: {
          description: 'item created',
          headers: {},
        },
      },
      deprecated: false,
    },
    get: {
      tags: ['Item'],
      summary: 'Get All Items',
      operationId: 'GetAllItems',
      responses: {
        200: {
          description: '',
          headers: {},
        },
      },
      deprecated: false,
    },
  },
  '/items/{id}': {
    parameters: [
      {
        in: 'path',
        name: 'id',
        schema: {
          type: 'string',
        },
        required: true,
        description: 'The item id',
      },
    ],
    get: {
      tags: ['Item'],
      summary: 'Get Item',
      operationId: 'GetItem',
      responses: {
        200: {
          description: '',
          headers: {},
        },
      },
      deprecated: false,
    },
    patch: {
      tags: ['Item'],
      summary: 'Update Item',
      operationId: 'UpdateItem',
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/Item',
            },
          },
        },
        required: true,
      },
      responses: {
        200: {
          description: 'item updated',
          headers: {},
        },
      },
      deprecated: false,
    },
    delete: {
      tags: ['Item'],
      summary: 'Delete Item',
      operationId: 'DeleteItem',
      responses: {
        200: {
          description: 'item deleted',
          headers: {},
        },
      },
      deprecated: false,
    },
  },
};

const itemSchema = {
  Item: {
    title: 'Item',
    required: ['itemType', 'description'],
    type: 'object',
    properties: {
      itemType: {
        type: 'string',
        enum: itemConfig.validItemTypes,
      },
      description: {
        type: 'string',
      },
    },
    example: {
      itemType: 'perishable',
      description: 'lorem ipsum dolor sit',
    },
  },
};

module.exports = {
  itemPath,
  itemSchema,
};
