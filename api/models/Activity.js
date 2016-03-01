/**
* Activity.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	user: {
  		model:'user'
  	},
  	feed: {
  		model:'feed'
  	},
  	action: 'string',
  	actionType: 'integer', // 1. like, 2. share, 3. comment, 4. pin, 5. tag
  	content: 'text'
  }
};

