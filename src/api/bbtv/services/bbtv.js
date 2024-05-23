'use strict';

/**
 * bbtv service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bbtv.bbtv');
