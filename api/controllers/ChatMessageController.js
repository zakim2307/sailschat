/**
 * ChatMessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  attributes: {
    message: {
        type: 'string',
        required: true
    },

    createdBy : {
        model: 'user',
        required: true
    }
}

};

