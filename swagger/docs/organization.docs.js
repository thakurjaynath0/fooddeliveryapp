const organizationPath = {
  '/organizations': {
    post: {
      tags: ['Organization'],
      summary: 'Create Organization',
      operationId: 'CreateOrganization',
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/Organization',
            },
          },
        },
        required: true,
      },
      responses: {
        201: {
          description: 'organization created',
          headers: {},
        },
      },
      deprecated: false,
    },
    get: {
      tags: ['Organization'],
      summary: 'Get All Organizations',
      operationId: 'GetAllOrganizations',
      responses: {
        200: {
          description: '',
          headers: {},
        },
      },
      deprecated: false,
    },
  },
  '/organizations/{id}': {
    parameters: [
      {
        in: 'path',
        name: 'id',
        schema: {
          type: 'string',
        },
        required: true,
        description: 'The organization id',
      },
    ],
    get: {
      tags: ['Organization'],
      summary: 'Get Organization',
      operationId: 'GetOrganization',
      responses: {
        200: {
          description: '',
          headers: {},
        },
      },
      deprecated: false,
    },
    patch: {
      tags: ['Organization'],
      summary: 'Update Organization',
      operationId: 'UpdateOrganization',
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/Organization',
            },
          },
        },
        required: true,
      },
      responses: {
        200: {
          description: 'organization updated',
          headers: {},
        },
      },
      deprecated: false,
    },
    delete: {
      tags: ['Organization'],
      summary: 'Delete Organization',
      operationId: 'DeleteOrganization',
      responses: {
        200: {
          description: 'organization deleted',
          headers: {},
        },
      },
      deprecated: false,
    },
  },
};

const organizationSchema = {
  Organization: {
    title: 'Organization',
    required: ['name'],
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
    },
    example: {
      name: 'XYZ',
    },
  },
};

module.exports = {
  organizationPath,
  organizationSchema,
};
