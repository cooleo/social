/**
* Feed.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		title: 'string',
	    description: 'string',
	    url: {
	      type: 'string',
	      require: true,
	      unique: true
	    },
	    content: 'text',
	    source:{
	           model:'source'
	    },
	    thumbBucket: 'string',
      thumb: 'string',
      likes: 'integer',
      shares: 'integer',
      pins: 'integer',
      comments: 'integer',
      points: 'integer', // = sum(likes, shares, pins, comments)
      tags: {
      		collection:'tag'
    	}

  }
};

