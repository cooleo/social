/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	 from: {
  	 	model: 'user'
  	 },
  	 to: {
  	 	model: 'user'
  	 },
  	 content: 'text',
  	 status: 'integer' //0 not read, 1 read, 2 detete...

  }
};

