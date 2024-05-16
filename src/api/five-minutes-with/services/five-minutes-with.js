'use strict';

/**
 * five-minutes-with service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::five-minutes-with.five-minutes-with');
