/**
 * ChatMessage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    attributes: {
      message: {
          type: 'string',
          required: true
      },
  
      createdBy : {
        collection: 'user',
        via: 'ChatMessage'
      },
  }

  },

};

